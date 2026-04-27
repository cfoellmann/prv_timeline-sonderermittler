# Timeline Sonderermittler

Persönliche Wissensdatenbank zum Hörspiel-Universum rund um die Maritim-Reihe **„Sonderermittler der Krone"**, gestartet mit *Oscar Wilde & Mycroft Holmes*, mit dem **Zirkel der Sieben** als verbindendem Zentralelement der inzwischen stark verzweigten Serienlandschaft (Maritim + Blitz Verlag).

## Was hier drin ist

```
prv_timeline-sonderermittler/
├── README.md                       ← du bist hier
├── changelog.md                    ← Manuelles Änderungslog (Keep a Changelog)
├── app/                            ← Interaktive Timeline-App
│   ├── README.md                   ←   Wie starten, Schema-Beschreibung
│   ├── index.html, styles.css, app.js
│   ├── start-server.ps1            ←   Komfort-Start für PowerShell
│   └── data/folgen.json            ←   Single Source of Truth für die App
└── vault/
    └── Sonderermittler der Krone/  ← Obsidian-Vault, das eigentliche Wiki
        ├── CLAUDE.md               ← Schema/Workflow für die LLM-Wartung
        ├── LLM-Wiki-Pattern.md     ← Pattern-Beschreibung (Original)
        ├── index.md                ← Inhaltsverzeichnis aller Wiki-Seiten
        ├── log.md                  ← Chronologisches Aktivitätsprotokoll
        ├── raw/                    ← Quellen (Maritim-Seiten, Reviews, Booklets)
        ├── wiki/                   ← LLM-generierte Wiki-Seiten
        │   ├── serien/             ←   eine Seite pro Hörspielserie
        │   ├── folgen/             ←   eine Seite pro Folge
        │   ├── figuren/            ←   eine Seite pro Charakter
        │   └── konzepte/           ←   z. B. Zirkel der Sieben, Hör-Reihenfolgen
        └── assets/                 ← Coverbilder, PDFs, Booklets
```

## Wie wir arbeiten

- **Versionierung:** Git. Inhaltliche Repo-Meilensteine werden zusätzlich in `changelog.md` festgehalten, kleinere inhaltliche Vault-Updates weiter im internen `log.md`.
- **Format:** Markdown. Konvertierung in andere Formate erst, wenn ein Output das verlangt.
- **Wiki-Pflege:** Folgt dem [LLM-Wiki-Pattern](vault/Sonderermittler%20der%20Krone/LLM-Wiki-Pattern.md). Christian kuratiert, das LLM pflegt Querverweise, Stub-Seiten und Konsistenz.
- **Obsidian:** Der Vault ist als Obsidian-Vault eingerichtet. Wer ohne Obsidian liest, sieht trotzdem reines Markdown.
- **Spoiler-Stil:** „grob" als Default — Folgen-Seiten erfassen Eckdaten, Figuren, Bezug zum Zirkel und eine grobe Handlung (Setup/Aufhänger/Bogen, 3–6 Sätze), aber keine Auflösungen, Wendungen oder Täter-Identitäten. Volle Inhaltsangabe nur auf expliziten Wunsch.

## Erste Schritte

1. Repo öffnen, `vault/Sonderermittler der Krone/Willkommen.md` oder `index.md` ist der Einstieg.
2. Neue Quellen kommen nach `vault/Sonderermittler der Krone/raw/`.
3. Den Workflow-Anweisungen in `vault/Sonderermittler der Krone/CLAUDE.md` folgen.
4. Die Timeline-App starten: `cd app && .\start-server.ps1` (öffnet Browser automatisch). Details und Alternativen in [`app/README.md`](app/README.md).

## Git-Setup

```powershell
git init -b main
git add .
git commit -m "Initial commit"
```

Lokale Obsidian-Workspace-Dateien, Editor-Metadaten und Python-Cache werden über `.gitignore` ausgeschlossen. Zeilenenden werden per `.gitattributes` vereinheitlicht.
