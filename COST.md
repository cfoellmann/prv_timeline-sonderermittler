# COST — Token-Verbrauch des Projekts

Stand: **2026-10-13, 18:44 UTC** (laufende Session 62295212 bis zu diesem Zeitpunkt).

Gemessene Werte stammen aus den lokalen Claude-Code-Transkripten unter
`~/.claude/projects/*timeline-sonderermittler*`, jeweils Hauptsession plus Subagents und Workflows.
Ausgewertet werden sie mit `python tools/token_usage.py`. Geschätzte Zeilen betreffen Arbeitstage, zu
denen es keine lokalen Transkripte gibt.

## Sessions

| # | Zeitraum | Session | Modell | Anfragen (Haupt + Sub) | Token gesamt | davon Output | Kosten (USD) | Art |
|---|---|---|---|---:|---:|---:|---:|---|
| 1 | 27.–30.04.2026 | unbekannt (keine Transkripte) | unbekannt | – | ≈ 383 Mio. | – | ≈ 255 (179–510) | geschätzt |
| 2 | 18. und 27.05.2026 | unbekannt (keine Transkripte) | unbekannt | – | ≈ 38 Mio. | – | ≈ 25 (18–50) | geschätzt |
| 3 | 17.08.2026 | unbekannt (keine Transkripte) | unbekannt | – | ≈ 53 Mio. | – | ≈ 35 (25–70) | geschätzt |
| 4 | 06.09.2026 | `51b8c3fa` (Remote-Control, claude.ai `session_01WhVPUe3na9…`) | claude-opus-5 | 96 + 345 | 100.709.493 | 119.988 | 64,99 | gemessen |
| 5 | 03.10.2026 | `c07a8677` (claude.ai `session_01Aykhp3…`) | claude-opus-5-5 | 11 + 76 | 11.643.315 | 6.319 | 9,48 | gemessen |
| 6 | 12.–13.10.2026 | `62295212` (claude.ai `session_01HWUqK7…`), läuft noch | claude-opus-5-5 | 212 + 2.500 | 570.057.948 | 240.029 | 371,87 | gemessen |
| | **Summe gemessen** | | | | **682.410.756** | **366.336** | **446,34** | |
| | **Summe geschätzt** | | | | **≈ 474 Mio.** | | **≈ 315 (222–630)** | |
| | **Total** | | | | **≈ 1,16 Mrd.** | | **≈ 761** | |

## Wie die Zahlen zustande kommen

- **Kostenbasis:** API-Listenpreise je 1 Mio. Token. Angenommen sind die Preise der Opus-Klasse: Input 5 USD, Output 25 USD, Cache-Schreiben 6,25 USD (5 min) bzw. 10 USD (1 h), Cache-Lesen 0,50 USD. Ob diese Sätze für Opus 5 / 5.5 exakt gelten, ist nicht geprüft. Die Preise stehen oben in `tools/token_usage.py` und lassen sich dort anpassen. Bei einem Abo (Pro/Max) sind das rechnerische Werte, keine tatsächliche Rechnung.
- **Was die Token ausmacht:** Rund 98 % sind Cache-Lesezugriffe. Jede Anfrage liest den bisherigen Kontext neu aus dem Cache; lange Sessions und viele Subagents treiben den Wert. Bei den Kosten entfallen etwa drei Viertel auf das Cache-Lesen und knapp ein Viertel auf das Cache-Schreiben. Output macht unter 0,1 % der Token und knapp 2 % der Kosten aus (Session 6).
- **Subagents:** Sie verursachen den Großteil der Anfragen (Session 6: 2.500 von 2.712) und sind in den Zahlen enthalten.
- **Nicht enthalten:** Codex-/OpenAI-Aufrufe, die der `quellen-scout` gelegentlich für mechanische Arbeit nutzt (Prüfläufe am 12. und 13.10.2026), sowie Web-Such- und Abrufgebühren.
- **Geschätzte Zeilen 1–3:** Aus diesen Tagen gibt es Commits und Log-Einträge, aber keine lokalen Transkripte. Vermutlich lief die Arbeit auf einer anderen Maschine oder mit einem anderen Werkzeug. Die Schätzung nimmt je Eintrag in `log.md` ≈ 7,5 Mio. Token bzw. ≈ 5 USD an (51 Einträge April, 4 Einträge Mai plus der Commit vom 18.05., 7 Einträge August). Die Spanne reicht von 3,50 USD je Eintrag (ohne Subagents) bis 10 USD je Eintrag; 10 USD ist der in den Sessions 4–6 gemessene Wert. Die Zahlen sind grob.

## Nachtragen

Wenn eine Session länger läuft oder neu hinzukommt:

1. `python tools/token_usage.py` ausführen.
2. Die Zeile der Session aktualisieren oder neu anhängen; den Stand oben und die Summen anpassen.
3. Sessions ohne lokale Transkripte als „geschätzt“ führen und die Grundlage nennen.
