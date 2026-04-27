# Changelog

Manuelles Änderungslog dieses Repositories. Git bildet die technische Versionshistorie; dieses Log hält die größeren inhaltlichen Schritte menschenlesbar fest.

Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.1.0/).

## [Unreleased]

### Added
- Git-Basis für das Projekt: `.gitignore` für lokale Artefakte und `.gitattributes` zur Vereinheitlichung der Zeilenenden.
- Initiales Repo-Setup: `README.md`, `changelog.md`.
- Vault-Schema `vault/Sonderermittler der Krone/CLAUDE.md` mit Workflow für Ingest, Query und Lint.
- Originalpattern als Referenz unter `vault/Sonderermittler der Krone/LLM-Wiki-Pattern.md`.
- Vault-Struktur: `raw/{maritim,reviews,notes}/`, `wiki/{serien,folgen,figuren,konzepte}/`, `assets/`.
- `index.md` (Inhaltsverzeichnis) und `log.md` (Aktivitätslog) im Vault.
- Wiki-Seiten: Universum-Übersicht (`wiki/universum.md`), Konzept `wiki/konzepte/zirkel-der-sieben.md`.
- 13 Serien-Stubs unter `wiki/serien/` (8 Maritim + 5 Blitz Verlag, **ohne** die zwei „Aus den Archiven"-Reihen — die sind nun als Sub-Sektionen ihrer Hauptserien gepflegt).
- Vier Konzept-Seiten in `wiki/konzepte/`: `hoerreihenfolgen.md` (alle Reihenfolge-Varianten), `zirkel-der-sieben.md` (Mitglieder, Verbündete, Widerspruch zur Gründung), `charles-darwin-gesellschaft.md` (Vorläufer-Organisation), `phasen.md` (5 Veröffentlichungsphasen), `sherlock-holmes-und-co.md` (Vorgänger-Reihe und Re-Release-Quelle).
- Drei Quellen ingestiert: offizielle Fan-Übersicht, Zauberspiegel Chronologie Teil 1, Zauberspiegel „Let's Talk About"-Übersichtsartikel.
- Re-Release-Recherche-Notiz mit Sprecher-Wechsel-Analyse (Charles Rettinghaus statt Christian Rode) und Auslassung der Winterzeit-Folgen 1, 3, 5, 7–9 dokumentiert.
- Pilot-Ingest: OWMH 1 „Zeitenwechsel" als erste konkrete Folgen-Seite (`wiki/folgen/oscar-wilde-und-mycroft-holmes-01-zeitenwechsel.md`) nach neuem Spoiler-Schema „grob".
- Vier erste Figuren-Seiten: Oscar Wilde, Mycroft Holmes, Henry Wheeler, Dr. Benjamin Payton.
- OWMH-Hauptserien-Seite mit kompletter Folgenliste 1–56 (offizielle Quelle) inkl. Anker-Daten für 13 Schlüsselfolgen.
- **Timeline-App** unter `app/` — Single-Page-App mit Sortierung In-Universe vs. Erscheinen, Filter pro Serie und Zirkel-Bezug, Detail-Panel mit Wiki-Verlinkung. JSON-Schema in `app/data/folgen.json` mit ~85 initialen Folgen-Einträgen (14 Serien). Pflege-Konvention dokumentiert in `vault/.../CLAUDE.md` Abschnitt 9.

### Changed
- **Versionierung aktiviert:** dieses Repo wird wieder per Git versioniert. `changelog.md` und `vault/.../log.md` bleiben ergänzende Änderungsquellen für größere inhaltliche Schritte.
- Standard-Willkommen.md durch eine Vault-Startseite mit Verweis auf `index.md` und `wiki/universum.md` ersetzt.
- Spoiler-Konvention: Folgen-Seiten dokumentieren standardmäßig **Spoiler-Stufe „grob"** — Eckdaten, Figuren, Bezug zum Zirkel **und** eine grobe Handlung (Setup, Aufhänger, Bogen) bis kurz vor der ersten echten Wendung. Auflösungen, Täter-Identitäten, zentrale Wendungen und wichtige Tode bleiben tabu. **Volle Inhaltsangabe** nur auf expliziten Auftrag und unter Spoiler-Callout. Frontmatter-Feld `spoiler_level` (`grob` Default, `voll` optional).
- Re-Releases („Aus den Archiven von …") werden nicht mehr als eigene Top-Level-Serien geführt, sondern als Sub-Sektion der jeweiligen Hauptserie inkl. einer Abweichungs-Analyse.

### Removed
- Eigenständige Serien-Stubs `wiki/serien/archive-poe-dupin.md` und `wiki/serien/archive-sherlock-holmes.md` (durch Sub-Sektionen ersetzt).

---

<!--
Format pro Release:

## [X.Y.Z] - JJJJ-MM-TT
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->
