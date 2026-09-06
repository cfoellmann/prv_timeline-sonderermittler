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
- **Watchlist-Konvention für geplante Folgen** (Ingest 2026-08-17): Folgen, die nur als Shop-Vormerkung belegt sind, erhalten eine normale Folgen-Seite mit dem Frontmatter-Feld `veroeffentlichungsstatus: geplant`, dem Tag `watchlist` und einem `> [!note]`-Callout mit Prüfdatum. Auf der Serien-Seite kommt sie mit „(geplant)" in die Folgenliste, im Frontmatter zählt `watchlist_count` separat zu `folgen_count`. In `app/data/folgen.json` läuft sie als regulärer Eintrag mit dem geplanten Datum in `erschienen` (wie bereits bei SH 21 praktiziert) — kein Schema-Bruch, `schema_version` bleibt `1.0.0`.

### Changed
- **Versionierung aktiviert:** dieses Repo wird wieder per Git versioniert. `changelog.md` und `vault/.../log.md` bleiben ergänzende Änderungsquellen für größere inhaltliche Schritte.
- Standard-Willkommen.md durch eine Vault-Startseite mit Verweis auf `index.md` und `wiki/universum.md` ersetzt.
- Spoiler-Konvention: Folgen-Seiten dokumentieren standardmäßig **Spoiler-Stufe „grob"** — Eckdaten, Figuren, Bezug zum Zirkel **und** eine grobe Handlung (Setup, Aufhänger, Bogen) bis kurz vor der ersten echten Wendung. Auflösungen, Täter-Identitäten, zentrale Wendungen und wichtige Tode bleiben tabu. **Volle Inhaltsangabe** nur auf expliziten Auftrag und unter Spoiler-Callout. Frontmatter-Feld `spoiler_level` (`grob` Default, `voll` optional).
- Re-Releases („Aus den Archiven von …") werden nicht mehr als eigene Top-Level-Serien geführt, sondern als Sub-Sektion der jeweiligen Hauptserie inkl. einer Abweichungs-Analyse.
- **Schema-Version `folgen.json` auf `1.1.0` erhoben** (Lint 2026-08-17). Die Felder `folgen[].spielzeit_min` (255 Einträge) und `serien[].anmerkung` waren bereits in Gebrauch, aber in keinem Schema-Dokument beschrieben — jetzt in `vault/.../CLAUDE.md` §9 und `AGENTS.md` dokumentiert. Zusätzlich klargestellt: optionale Felder (`story_*`, `logline`, `spielzeit_min`, `anmerkung`) dürfen `null` **oder ganz weggelassen** sein — die vorherige Formulierung „unbekannte mit `null`" entsprach nicht der gelebten Praxis (193 Einträge ohne `story_jahr`-Key).
- **`zirkel` auf Folgen-Seiten vereinheitlicht** (Lint 2026-08-17): bisher wurden dort `true`/`false` und die vierstufigen App-Werte gemischt geführt (166× `true`, 91× `false`, 20× `indirekt`, 13× `direkt`, 1× `unklar`), was 20 Widersprüche gegen `folgen.json` erzeugte. Für `type: folge` gilt jetzt ausschließlich die vierstufige Skala `direkt | indirekt | kein | unklar`, synchron zu `folgen.json`. Serien- und Figuren-Seiten behalten die grobe `true | false`-Aussage. Beide Skalen sind in `CLAUDE.md` §3 und `AGENTS.md` dokumentiert.
- **Umlaut-Konvention geschärft:** Die Slug-Regel (`ä → ae` …) gilt ausschließlich für Dateinamen, Wikilink-Ziele, `serie:`/`id`-Werte und Tags — **nicht** für Fließtext, Überschriften oder `titel:`. Zuvor war die Transliteration in den Fließtext gewandert (2002 Vorkommen in 158 Dateien, korrigiert am 17.08.2026).
- **Frontmatter-Schema nachdokumentiert:** die bereits gelebten Felder `spielzeit_min`, `folgen_count`, `watchlist_count`, `veroeffentlichungsstatus`, `start`, `genre`, `aliase`, `re_release_von` sowie die `type`-Werte `uebersicht`, `weiterleitung` und `query`. Festgelegt: `folgen_count` zählt Folge 0 mit, geplante Folgen laufen über `watchlist_count`.
- **Dateiformat des Vaults vereinheitlicht** (Lint 2026-08-17): 339 Markdown-Dateien ohne UTF-8-BOM und mit LF-Zeilenenden. Vorher trugen 328 von 388 Dateien einen BOM und 203 CRLF — die Mischung brach naive Tooling-Parser (jeder Frontmatter-Scan musste den BOM erst strippen). Rein mechanische Änderung, mit Gegenprüfung auf Zeichengleichheit des dekodierten Textes.
- **`story_praezision` ehrlicher gemacht** (Lint 2026-08-17): 16 OWMH-Folgen standen auf `"jahr"`, obwohl ihr Story-Jahr nicht belegt, sondern zwischen datierten Nachbarfolgen interpoliert war — jetzt `"geschaetzt"` mit der Ableitung in `story_anmerkung`. OWMH 1 von `"monat"` auf `"jahr"` (belegt ist nur „Frühjahr 1895"). Neu datiert wurden nach einem Sweep über alle 301 Folgen nur 5 Einträge; die restliche Lücke ist **fehlende Quellenlage**, dokumentiert auf `wiki/konzepte/hoerreihenfolgen.md`. Dort steht seither auch der methodische Kernbefund, dass reale Lebensdaten in diesem Kosmos nicht zur Datierung taugen (Vidocq, Mata Hari, Edgar Cayce).

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
