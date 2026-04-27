# Vault-Schema – Sonderermittler der Krone

Diese Datei ist die Bedienungsanleitung für das LLM, das diesen Vault pflegt. Sie konkretisiert das [LLM-Wiki-Pattern](LLM-Wiki-Pattern.md) für unsere Domain: das Hörspiel-Universum rund um die Maritim-Reihe **„Sonderermittler der Krone“** mit dem **Zirkel der Sieben** als verbindendem Zentralelement.

Christian kuratiert. Das LLM pflegt die Inhalte, Querverweise und Konsistenz.

---

## 1. Domain in zwei Sätzen

Maritim hat mit *Oscar Wilde & Mycroft Holmes* eine Hörspielreihe gestartet, die sich zu einem stark verzweigten Universum entwickelt hat. Mehrere Serien, Spin-offs und Crossover-Folgen gehören mittlerweile dazu, die alle über den geheimnisvollen **Zirkel der Sieben** miteinander verbunden sind.

Ziel des Wikis: jederzeit nachvollziehen können, **welche Folge zu welcher Serie gehört, in welcher Reihenfolge sie zu hören sind und wie sie zueinander stehen** – inklusive Figuren, Konzepten und Zeitachse.

---

## 2. Verzeichnisstruktur

```
vault/Sonderermittler der Krone/
├── CLAUDE.md            ← diese Datei (Schema)
├── LLM-Wiki-Pattern.md  ← Pattern-Hintergrund
├── index.md             ← Inhaltsverzeichnis aller Wiki-Seiten
├── log.md               ← chronologisches Aktivitätslog
├── raw/                 ← unveränderliche Quellen
│   ├── maritim/         ←   gespeicherte Verlagsseiten (Markdown)
│   ├── reviews/         ←   Reviews, Fan-Wiki-Auszüge
│   └── notes/           ←   eigene Hörnotizen
├── wiki/                ← LLM-generierte Seiten
│   ├── universum.md     ←   Zentrale Übersichtsseite
│   ├── serien/          ←   eine Seite pro Hörspielserie
│   ├── folgen/          ←   eine Seite pro Folge
│   ├── figuren/         ←   eine Seite pro Charakter
│   └── konzepte/        ←   übergreifende Konzepte (Zirkel der Sieben, Orden, Orte …)
└── assets/              ← Cover, Booklets, PDFs, Bilder
```

**Regeln:**
- `raw/` ist unveränderlich. Das LLM liest hier, schreibt aber nie hinein (außer beim Ingest neuer Quellen).
- `wiki/` gehört dem LLM. Christian liest, kommentiert, korrigiert.
- `assets/` enthält Binaries; Pfad-Konvention: `assets/cover/<serie>-<folge-nr>.jpg`.

---

## 3. Namens- und Format-Konventionen

### Dateinamen

- **Serien:** `wiki/serien/<serie-slug>.md` — z. B. `oscar-wilde-und-mycroft-holmes.md`.
- **Folgen:** `wiki/folgen/<serie-slug>-<nr-2-stellig>-<titel-slug>.md` — z. B. `oscar-wilde-und-mycroft-holmes-01-im-zeichen-des-mars.md`. Die Nummer ist die offizielle Folgennummer der jeweiligen Serie. Bei Crossover-Folgen kommt die Folge in die "Hauptserie" und wird in den anderen verlinkt.
- **Figuren:** `wiki/figuren/<vorname-nachname>.md` — Klarname bevorzugt, Pseudonyme als Aliase im Frontmatter.
- **Konzepte:** `wiki/konzepte/<konzept-slug>.md` — z. B. `zirkel-der-sieben.md`.

### Slugs

- Kleinschreibung, Trennung mit Bindestrich.
- Umlaute auflösen (`ä` → `ae`, `ö` → `oe`, `ü` → `ue`, `ß` → `ss`).
- Sonderzeichen entfernen.

### Wikilinks

- Innerhalb des Vaults Obsidian-Wikilinks verwenden: `[[wiki/figuren/oscar-wilde|Oscar Wilde]]`.
- Bei Mehrfachbedeutung Klammerzusatz: `[[Holmes (Mycroft)]]` vs. `[[Holmes (Sherlock)]]`.

### YAML-Frontmatter (Pflicht für Serien, Folgen, Figuren, Konzepte)

```yaml
---
type: folge | serie | figur | konzept
serie: <serie-slug>          # nur bei type=folge
nummer: <int>                # nur bei type=folge
titel: <Original-Titel>
erschienen: JJJJ-MM-TT        # falls bekannt
verlag: Maritim
autor: <Autor:in>             # nur bei type=folge/serie
sprecher:                     # nur bei type=folge, optional
  - rolle: <Rolle>
    name: <Sprecher:in>
zirkel: true | false          # spielt der Zirkel der Sieben eine Rolle?
crossover_mit:                # andere Serien-Slugs
  - <serie-slug>
status: stub | entwurf | recherchiert | review | final
quellen:                      # Pfade in raw/ oder URLs
  - <pfad-oder-url>
tags:
  - <freie tags>
---
```

`status` ist wichtig fürs Lint: `stub` = leerer Eintrag mit Skelett, `final` = recherchiert und gegengelesen.

---

## 4. Workflows

### 4.1 Ingest (Christian liefert eine Quelle)

1. **Quelle ablegen:** Markdown-Version landet in `raw/maritim/`, `raw/reviews/` oder `raw/notes/`. Originalquelle (URL, Datum) im Frontmatter der raw-Datei.
2. **Lesen & rückfragen:** Das LLM liest, fasst kurz zusammen und stellt 1–3 Rückfragen, falls inhaltlich unklar (Spoiler-Status, Kanon vs. Theorie, Schreibweise).
3. **Wiki aktualisieren:** Das LLM legt/aktualisiert betroffene Seiten in `wiki/`. Pro Quelle typischerweise: 1 Folgen-Seite, 1–3 Figuren, 0–1 Konzepte, plus Querverweise.
4. **Timeline-App-Daten pflegen:** Wenn die Quelle eine **Folge** betrifft, muss `../../app/data/folgen.json` mitgepflegt werden — Eintrag anlegen oder ergänzen (Schema siehe Abschnitt 9). Wenn neue Serie: auch `serien`-Liste ergänzen.
5. **Index pflegen:** Neue/aktualisierte Einträge in `index.md` eintragen.
6. **Log-Eintrag:** Eine Zeile in `log.md` (`## [JJJJ-MM-TT] ingest | <Quelle>` + 2–3 Bullet-Stichpunkte zu Änderungen).
7. **Changelog:** Größere strukturelle Änderungen am Repo (neue Serien-Kategorie, Schema-Update) zusätzlich in `../../changelog.md`.

### 4.2 Query (Christian fragt)

1. Index lesen, relevante Seiten identifizieren.
2. Seiten lesen, Antwort mit Wikilinks zu Quellseiten formulieren.
3. **Wenn die Antwort auch in einem Monat noch nützlich wäre:** als neue Wiki-Seite in `wiki/` ablegen (z. B. `wiki/queries/<thema>.md` oder als Konzept-Seite, je nach Inhalt). Index und Log mitführen.

### 4.3 Lint (auf Anfrage „lint“ / „health check“)

Prüfen und Bericht erstatten:
- **Stubs ohne Inhalt** (Status `stub`, älter als X Tage).
- **Widersprüche** zwischen Seiten (z. B. unterschiedliche Erscheinungsdaten oder Sprecherbesetzungen).
- **Verwaiste Seiten** ohne eingehende Wikilinks.
- **Erwähnte, aber nicht angelegte Konzepte** (Begriffe, die in mehreren Seiten in `[[]]` vorkommen, aber kein Ziel haben).
- **Veraltete Status-Tags** (z. B. `entwurf`, der seit Monaten nicht mehr berührt wurde).
- **Lücken** (Serien ohne Folgenliste, Folgen ohne Figuren).

Bericht als temporäre Notiz in `wiki/queries/lint-JJJJ-MM-TT.md`. Christian entscheidet, was angegangen wird.

---

## 5. Inhaltliche Konventionen

- **Spoiler-Stufe „grob" (Default):** Folgen-Seiten dokumentieren standardmäßig:
  - **Eckdaten:** Setting, Erscheinungsdatum, Autor:in, Sprecher (Auswahl).
  - **Hauptfiguren:** wer ist beteiligt, in welcher Rolle.
  - **Grobe Handlung:** das dramatische **Setup** (Ausgangssituation, Auftrag, Bedrohung), der **Aufhänger** (was die Folge antreibt) und der **Erzählbogen** in 3–6 Sätzen — *bis kurz vor der ersten echten Wendung*.
  - **Bezug zum [[wiki/konzepte/zirkel-der-sieben|Zirkel]]** und Crossover-Verweise.
  - **Tabu (auch bei „grob"):** keine Auflösung, keine Identität des Täters/Hintermanns, keine zentralen Wendungen, keine Tode wichtiger Figuren, keine Identität von Verrätern.
- **Spoiler-Stufe „voll" (nur auf Auftrag):** Wenn Christian für eine bestimmte Folge eine ausführliche Inhaltsangabe inkl. Auflösung will, kommt sie in einen klar markierten `## Inhaltsangabe (volle Spoiler)`-Abschnitt unter einem `> [!warning]` Callout. Default = nicht vorhanden.
- **Faustregel zum Trennen:** Was im Klappentext / Booklet steht, ist „grob". Was erst beim Hören klar wird, ist „voll".
- **Kanon vs. Theorie trennen:** Fan-Theorien aus Reviews kommen in einen eigenen Abschnitt `## Theorien & offene Fragen`, klar gekennzeichnet.
- **Hör-Reihenfolgen:** Alle dokumentierten Reihenfolgen sammeln wir auf [[wiki/konzepte/hoerreihenfolgen|Hör-Reihenfolgen]]. Erscheinungsreihenfolge ≠ Hör-Reihenfolge ist die Regel.
- **Re-Releases:** Re-Release-Reihen („Aus den Archiven …") sind keine eigenständigen Serien-Top-Level-Seiten, sondern Sub-Sektionen unter der jeweiligen Hauptserie, mit Abweichungs-Tabelle (siehe Abschnitt 5.1).
- **Stand der Quellen:** Jede Wiki-Seite hat am Ende `## Quellen` mit Links in `raw/` und/oder URLs.
- **Sprache:** Deutsch. Englische Eigennamen behalten (z. B. „Mycroft Holmes"), aber Beschreibungen auf Deutsch.

### 5.1 Re-Release-Sub-Sektionen

In der Hauptserien-Seite kommt der Block:

```markdown
## Re-Release / „Aus den Archiven"
> Wiederveröffentlichung älterer Hörspiele aus <Originalreihe>, neu in den Maritim-Kosmos integriert.

| Re-Release-# | Re-Release-Titel | Originalreihe / Original-# | Abweichung |
|---|---|---|---|
| 01 | … | … | Sprecher / Schnitt / Rahmenerzählung / unverändert |
```

Die Spalte „Abweichung" listet konkrete Unterschiede: neue Sprecher, geänderte Musik, gekürzt/erweitert, neue Rahmenerzählung. Wenn keine Unterschiede festgestellt: „unverändert".

---

## 6. Versionierung

- **Keine Git-Versionierung.** Der aktuelle Stand der Dateien ist die Wahrheit.
- **Tagesgeschäft:** jede Änderung erzeugt einen Eintrag in `log.md` (chronologisch, append-only).
- **Strukturelle Änderungen:** zusätzlich Eintrag in `../../changelog.md` (Keep-a-Changelog-Format).
- **Konsistenz:** wenn eine Änderung mehrere Seiten betrifft, alle in einem Rutsch anfassen, damit Index und Querverweise nicht auseinanderlaufen.

---

## 7. Was das LLM NICHT tun soll

- **Nicht in `raw/` editieren** (außer beim eigentlichen Ingest neuer Quellen).
- **Nicht spekulieren ohne Markierung:** wenn eine Aussage nicht durch eine Quelle gedeckt ist, klar als „Annahme“ oder „offene Frage“ kennzeichnen.
- **Nicht stillschweigend Schema brechen:** wenn das LLM merkt, dass die Konvention nicht passt, Christian ansprechen statt selbst eine neue Konvention etablieren.
- **Keine Web-Recherche ohne Auftrag:** Recherche ist explizit zu beauftragen, sonst arbeiten wir mit dem, was in `raw/` liegt.

---

## 8. Skelett-Vorlagen

### Serien-Seite (`wiki/serien/<slug>.md`)

```markdown
---
type: serie
titel: <Originaltitel>
verlag: Maritim
status: stub
zirkel: <true|false>
quellen: []
tags: []
---

# <Titel>

> Eine-Zeilen-Zusammenfassung.

## Übersicht
- **Erste Folge:** [[wiki/folgen/...]] (Erscheinungsdatum)
- **Letzte erschienene Folge:** ...
- **Aktueller Folgenstand:** N
- **Konzept:** Worum geht's?
- **Verbindung zum Zirkel der Sieben:** ...

## Folgenliste
| # | Titel | Datum | Zirkel | Notizen |
|---|---|---|---|---|
| 01 | [[...]] | ... | ✓ |   |

## Hauptfiguren
- [[wiki/figuren/...]]

## Crossover
- Mit [[wiki/serien/...]]: Folge X & Y.

## Quellen
- [raw/maritim/...](../../raw/maritim/...)
```

### Folgen-Seite (`wiki/folgen/<slug>.md`)

Default-Vorlage: **Spoiler-Stufe „grob"**. Eckdaten, Figuren, Bezug zum Zirkel **und** eine grobe Handlung in 3–6 Sätzen (Setup, Aufhänger, Bogen — keine Auflösung).

```markdown
---
type: folge
serie: <serie-slug>
nummer: <int>
titel: <Originaltitel>
erschienen: JJJJ-MM-TT
verlag: Maritim
autor: <...>
zirkel: <true|false>
crossover_mit: []
re_release_von: <originalreihe-und-nummer-falls-zutreffend>
spoiler_level: grob   # "grob" (Default) oder "voll"
status: stub
quellen: []
tags: []
---

# <Serie> – <Nr>: <Titel>

> Spoilerfreie Eine-Zeilen-Logline (Setting + Stoßrichtung, **keine** Wendungen).

## Eckdaten
- **Setting / Zeit:** ...
- **Schauplatz:** ...
- **Erscheinungsdatum:** ...
- **Autor:in:** ...
- **Sprecher (Auswahl):** ...

## Hauptfiguren
- [[wiki/figuren/...]] (Rolle in dieser Folge)

## Handlung (grob)
<!--
3–6 Sätze: Setup → Aufhänger → Bogen, bis kurz vor der ersten echten Wendung.
Was steht im Klappentext / Booklet? Was wird in der ersten Hälfte etabliert?
TABU: Auflösung, Täter-Identität, zentrale Wendungen, Tode wichtiger Figuren,
Verräter-Enthüllungen.
-->
- **Setup:** ...
- **Aufhänger:** ...
- **Bogen:** ...

## Bezug zum Zirkel der Sieben
- direkt / indirekt / kein Bezug — Stichwortliste, keine Auflösungen.

## Crossover & Querverweise
- Spielt vor/nach: [[...]]
- Erwähnt: [[...]]

## Theorien & offene Fragen
- ...

<!-- Volle Inhaltsangabe inkl. Auflösung nur auf Christians expliziten Wunsch, dann: -->
<!--
## Inhaltsangabe (volle Spoiler)
> [!warning] Achtung: Spoiler — vollständige Auflösung, Wendungen und Täter-Identität folgen.
-->

## Quellen
- ...
```

### Konzept-Seite (`wiki/konzepte/<slug>.md`)

```markdown
---
type: konzept
titel: <Name>
status: stub
quellen: []
tags: []
---

# <Name>

> Was ist das in einem Satz?

## Beschreibung
...

## Auftauchen
| Folge | Erwähnung | Bedeutung |
|---|---|---|
| [[...]] | direkt / indirekt | ... |

## Verbundene Figuren
- [[...]]

## Theorien
...

## Quellen
- ...
```

### Figuren-Seite (`wiki/figuren/<slug>.md`)

```markdown
---
type: figur
titel: <Klarname>
aliase: []
status: stub
quellen: []
tags: []
---

# <Klarname>

> Eine-Zeilen-Beschreibung (Beruf, Rolle, Reihe).

## Auftritte
- [[wiki/folgen/...]] (Rolle)

## Beziehungen
- ...

## Bezug zum Zirkel der Sieben
- ...

## Quellen
- ...
```

---

## 9. Timeline-App: Daten-Pflege

Im Repo-Root liegt `app/` — eine Single-Page-App, die die Folgen interaktiv als Timeline darstellt. Die App liest **`app/data/folgen.json`** als Single Source of Truth.

### Pflege-Pflicht beim Ingest

Wenn eine Folgen-Seite im Wiki angelegt oder geändert wird, **muss** der entsprechende Eintrag in `app/data/folgen.json` mitgepflegt werden. Sonst läuft die Timeline auseinander.

### Pflege-Punkte pro Folge

| Wann | Aktion |
|---|---|
| Neue Folge ingestiert | Eintrag in `folgen[]` anlegen mit allen bekannten Feldern; unbekannte mit `null` und `story_praezision: "unbekannt"`. |
| Story-Datum wird beim Hören klarer | `story_jahr/monat/tag` und `story_praezision` aktualisieren, `story_anmerkung` schärfen. |
| Spoiler-Stufe ändert sich | `spoiler_level` aktualisieren (`stub` → `grob` → ggf. `voll`). |
| Zirkel-Bezug klärt sich | `zirkel` von `unklar` auf `direkt` / `indirekt` / `kein` setzen. |
| Wiki-Folgen-Seite angelegt | `wiki`-Pfad eintragen (URL-encoded, von Repo-Wurzel aus). |
| Neue Serie | Eintrag in `serien[]` mit Farbe und Wiki-Pfad. |
| Schema bricht | `schema_version` heraufsetzen + `../../changelog.md` aktualisieren. |

### Schema-Übersicht

```jsonc
{
  "schema_version": "1.0.0",
  "stand": "JJJJ-MM-TT",
  "epoche_min_jahr": 1875,
  "epoche_max_jahr": 1905,

  "serien": [{
    "id": "<serie-slug>",                  // gleicher Slug wie wiki/serien/<id>.md
    "titel": "<voller Titel>",
    "kurz": "<2-5 Zeichen>",               // wird im Folgen-Badge angezeigt
    "verlag": "Maritim | Blitz | Winterzeit/Maritim",
    "genre": "Krimi | Horror | Abenteuer/Fantasy | Abenteuer",
    "farbe": "#hex",                       // serien-eigene Farbe
    "wiki": "vault/.../wiki/serien/<id>.md"
  }],

  "folgen": [{
    "id": "<serie>-<nr-2>-<titel-slug>",   // gleicher Slug wie wiki/folgen/<id>.md
    "serie": "<serie-slug>",
    "nummer": 1,
    "titel": "<Folgentitel>",
    "erschienen": "JJJJ-MM-TT" | null,
    "story_jahr": 1895 | null,
    "story_monat": 4 | null,               // 1–12
    "story_tag": null | 1..31,
    "story_praezision": "tag | monat | jahr | unbekannt",
    "story_anmerkung": "<Kontext>",
    "zirkel": "direkt | indirekt | unklar | kein",
    "spoiler_level": "stub | grob | voll",
    "logline": "<spoilerfrei, optional>",
    "wiki": "vault/.../wiki/folgen/<id>.md"
  }]
}
```

### Konsistenz-Regeln

- **`id` ist der Schlüssel.** Slug-Konvention identisch zur Markdown-Datei.
- **`story_praezision: "unbekannt"`** ist explizit erlaubt — die App rendert solche Folgen in einer eigenen Sektion ans Ende.
- **`zirkel: "unklar"`** ist der Default für Folgen ohne klare Recherche-Lage. Nicht mit `null` mischen.
- **`wiki`-Pfade** sind relativ zur Repo-Wurzel und URL-encoded (`%20` für Leerzeichen).

## 10. Erste Sitzungs-Routine

Wenn Christian eine neue Sitzung startet:

1. `log.md` lesen — was war zuletzt los?
2. `index.md` überfliegen — gibt es Stubs, die Christian gerade angehen will?
3. Falls Christian eine neue Quelle mitbringt → Workflow 4.1.
4. Falls Christian eine Frage hat → Workflow 4.2.
5. Falls längere Pause war → Lint anbieten (4.3).
