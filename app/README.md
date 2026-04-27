# Timeline-App

Single-Page-Web-App, die alle Folgen des Maritim-Hörspiel-Universums sortier- und filterbar darstellt — wahlweise nach **In-Universe-Zeit** (Story-Chronologie) oder **Erscheinungsreihenfolge** (Realwelt).

## Starten

Direkt aus dem Dateisystem öffnen funktioniert nur eingeschränkt — Browser blockieren `fetch()` über `file://`. Stattdessen einen lokalen HTTP-Server starten.

### Variante A — PowerShell-Script (Empfohlen)

```powershell
cd app
.\start-server.ps1
```

Das Script sucht selbst nach `python` oder `py`, prüft ob der Port frei ist und öffnet den Browser nach dem Start. Optionen: `-Port 8080`, `-NoBrowser`.

> **Hinweis zur Execution Policy:** Falls PowerShell den Aufruf blockiert
> („Skripte ist auf diesem System deaktiviert"), einmalig:
> ```powershell
> powershell -ExecutionPolicy Bypass -File .\start-server.ps1
> ```
> Oder dauerhaft im aktuellen User-Scope erlauben:
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

### Variante B — Python direkt

```powershell
cd app
python -m http.server 8000
```

Im Browser: <http://localhost:8000/>

### Variante C — Node.js (`npx`)

```powershell
cd app
npx --yes http-server -p 8000
```

### Variante D — VS Code Live Server

`Live Server`-Extension installieren, in `app/index.html` Rechtsklick → „Open with Live Server".

## Dateien

```
app/
├── index.html         ← Markup, Layout
├── styles.css         ← Tonalität (sepia, dunkel-warm, viktorianisch)
├── app.js             ← Lade-Logik, Sortierung, Filter, Rendering
├── start-server.ps1   ← Komfort-Start für PowerShell (Windows)
└── data/
    └── folgen.json    ← Single Source of Truth für die App
```

## Daten-Pflege

`data/folgen.json` ist das **Backend** der App. Es wird bei jedem Folgen-Ingest im Wiki **mitgepflegt** (siehe `vault/Sonderermittler der Krone/CLAUDE.md`, Abschnitt „App-Daten-Pflege").

### Schema (Kurzfassung)

```jsonc
{
  "schema_version": "1.0.0",
  "stand": "JJJJ-MM-TT",
  "epoche_min_jahr": 1875,
  "epoche_max_jahr": 1905,

  "serien": [{
    "id": "<serie-slug>",
    "titel": "<voller Titel>",
    "kurz": "<2-5 Zeichen Kürzel>",
    "verlag": "Maritim | Blitz | Winterzeit/Maritim",
    "genre": "Krimi | Horror | Abenteuer | ...",
    "farbe": "#hex",
    "wiki": "vault/.../wiki/serien/<slug>.md"
  }],

  "folgen": [{
    "id": "<serie-slug>-<nr-2>-<titel-slug>",
    "serie": "<serie-slug>",
    "nummer": 1,
    "titel": "<Folgentitel>",
    "erschienen": "JJJJ-MM-TT | null",
    "story_jahr": 1895,                  // null falls unbekannt
    "story_monat": 4,                    // 1–12, null falls nur Jahr
    "story_tag": null,                   // 1–31, null falls nur Monat
    "story_praezision": "tag | monat | jahr | unbekannt",
    "story_anmerkung": "<Kontext-Stichworte>",
    "zirkel": "direkt | indirekt | unklar | kein",
    "spoiler_level": "grob | voll | stub",
    "logline": "<spoilerfreie 1-Zeilen-Logline, optional>",
    "wiki": "vault/.../wiki/folgen/<slug>.md"
  }]
}
```

### Sortier-Logik

- **Story-Modus (Default):** sortiert nach `story_jahr`, dann `story_monat ?? 6`, dann `story_tag ?? 15`. Folgen ohne `story_jahr` landen in einer eigenen „Story-Datum unbekannt"-Sektion am Ende, dort sortiert nach `erschienen`.
- **Erscheinungsmodus:** sortiert nach `erschienen`. Folgen ohne `erschienen` ans Ende.

### Pflege-Konvention

- Jede neue Folge im Wiki bekommt einen Eintrag in `folgen.json` (auch ohne Story-Datum — dann mit `story_praezision: "unbekannt"`).
- `story_anmerkung` ist der Ort für „Frühjahr 1895", „nach Folge X", „in Ägypten" — alles was die zeitliche Einordnung erklärt, aber keinen Kalender-Eintrag rechtfertigt.
- `wiki`-Pfade verwenden URL-Encoding (`%20` für Leerzeichen) — die App baut daraus relative Links zur Wiki-Datei.
- Bei Schema-Änderungen `schema_version` heraufsetzen und in `vault/.../changelog.md` dokumentieren.
