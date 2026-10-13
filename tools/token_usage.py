"""Summiert den Token-Verbrauch der Claude-Code-Sessions dieses Projekts.

Liest die lokalen Session-Transkripte unter ~/.claude/projects/*timeline-sonderermittler*
(Hauptsession plus Subagents und Workflows) und gibt je Session die Token-Summen und
einen Kostenschätzwert zu API-Listenpreisen aus. Grundlage für COST.md.

Aufruf:  python tools/token_usage.py
"""
import collections
import glob
import json
import os

# USD je 1 Mio. Token. Annahme: Listenpreise der Opus-Klasse; bei Preisänderung hier anpassen.
PREIS = {
    "input": 5.00,
    "output": 25.00,
    "cache_write_5m": 6.25,
    "cache_write_1h": 10.00,
    "cache_read": 0.50,
}

H = os.path.expanduser("~/.claude/projects/")


def sessions():
    out = collections.defaultdict(list)
    for d in os.listdir(H):
        if "timeline-sonderermittler" not in d:
            continue
        base = os.path.join(H, d)
        for p in glob.glob(base + "/**/*.jsonl", recursive=True):
            sid = os.path.relpath(p, base).replace("\\", "/").split("/")[0].replace(".jsonl", "")
            out[sid].append(p)
    return out


def auswerten(sid, files):
    t = collections.Counter()
    seen = set()
    first = last = None
    for p in files:
        is_main = os.path.basename(p) == sid + ".jsonl"
        teil = "haupt" if is_main else "sub"
        for line in open(p, encoding="utf-8", errors="replace"):
            try:
                o = json.loads(line)
            except ValueError:
                continue
            ts = o.get("timestamp")
            if ts and is_main:
                first = min(first, ts) if first else ts
                last = max(last, ts) if last else ts
            m = o.get("message")
            if not isinstance(m, dict) or m.get("role") != "assistant" or not m.get("usage"):
                continue
            key = (m.get("id"), o.get("requestId"))
            if key in seen:
                continue
            seen.add(key)
            u = m["usage"]
            cc = u.get("cache_creation") or {}
            w1h = cc.get("ephemeral_1h_input_tokens")
            w5m = cc.get("ephemeral_5m_input_tokens")
            if w1h is None and w5m is None:
                w5m, w1h = u.get("cache_creation_input_tokens") or 0, 0
            t["input"] += u.get("input_tokens") or 0
            t["output"] += u.get("output_tokens") or 0
            t["cache_write_5m"] += w5m or 0
            t["cache_write_1h"] += w1h or 0
            t["cache_read"] += u.get("cache_read_input_tokens") or 0
            t["anfragen_" + teil] += 1
            t["modell:" + m.get("model", "?")] += 1
    kosten = sum(t[k] * PREIS[k] / 1e6 for k in PREIS)
    return first, last, t, kosten


if __name__ == "__main__":
    for sid, files in sorted(sessions().items()):
        first, last, t, kosten = auswerten(sid, files)
        if not first:
            print(f"{sid}: keine Nutzungsdaten (z. B. Bridge-/Remote-Datei)")
            continue
        summe = sum(t[k] for k in PREIS)
        modelle = ", ".join(k[7:] for k in t if k.startswith("modell:") and k != "modell:<synthetic>")
        print(f"{sid} | {first[:16]} – {last[:16]} | {modelle} | Anfragen {t['anfragen_haupt']}+{t['anfragen_sub']} Sub | "
              f"in {t['input']:,} | out {t['output']:,} | cw5m {t['cache_write_5m']:,} | cw1h {t['cache_write_1h']:,} | "
              f"cr {t['cache_read']:,} | gesamt {summe:,} | ~{kosten:,.2f} USD")
