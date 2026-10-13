# Log

Chronologisches Aktivitätsprotokoll. Append-only.

> **Format:** `## [JJJJ-MM-TT] <typ> | <kurzbeschreibung>` mit `<typ>` ∈ `init | ingest | wiki | lint | meta | query`. Darunter 2–4 Bullet-Stichpunkte. Letzte Einträge unten.

---

## [2026-04-27] init | Vault aufgesetzt
- `CLAUDE.md` (Schema) und `LLM-Wiki-Pattern.md` (Pattern-Referenz) angelegt.
- Verzeichnisstruktur etabliert: `raw/{maritim,reviews,notes}/`, `wiki/{serien,folgen,figuren,konzepte}/`, `assets/`.
- `index.md` und `log.md` initialisiert.
- Repo-Wurzel: `README.md`, `changelog.md`, `.gitignore`.

## [2026-04-27] ingest | sonderermittler-der-krone.de/serien/
- Quelle: <https://www.sonderermittler-der-krone.de/serien/> als raw abgelegt (`raw/maritim/2026-04-27_sonderermittler-der-krone_de_serien.md`).
- 15 Serien identifiziert (10 Maritim inkl. 2 Re-Releases, 5 Blitz Verlag), kumuliert ca. 321 Folgen.
- Zentrale Erkenntnis: Universum reicht über Maritim hinaus — Blitz Verlag ist seit Ende 2024 mit Spin-offs Teil des Kosmos.
- Stubs für alle 15 Serien angelegt unter `wiki/serien/` mit YAML-Frontmatter, Kurzbeschreibung, Hauptfiguren-Wikilinks, leeren Folgenlisten.
- Universum-Übersicht (`wiki/universum.md`) mit Serien-Tabelle und offenen Fragen geschrieben.
- Konzept-Stub `wiki/konzepte/zirkel-der-sieben.md` mit Mitglieder-Liste (unverifiziert) und Querverweisen.
- `index.md` komplett aktualisiert (Serien jetzt nach Verlag/Linie gruppiert).

## [2026-04-27] meta | Versionierung entfernt
- Git-Anforderung aus README, CLAUDE.md und changelog.md entfernt.
- `.gitignore` als obsolet markiert (Christian löscht manuell).
- CLAUDE.md Abschnitt 6 von „Versionierung & Commits" auf „Versionierung" umgeschrieben — Quelle der Wahrheit ist jetzt der Dateistand, log.md das Tagesgeschäft, changelog.md die strukturellen Schnitte.

## [2026-04-27] schema | Minimale Spoiler als Default
- CLAUDE.md Abschnitt 5 erweitert: Folgen-Seiten erfassen standardmäßig **keine** Inhaltsangabe, nur Eckdaten/Figuren/Bezug zum Zirkel.
- Folgen-Skelett-Vorlage entsprechend umgestellt; Spoiler-Block nur optional, unter `> [!warning]`-Callout.
- Neuer Abschnitt 5.1 dokumentiert die Re-Release-Sub-Sektionen-Konvention.

## [2026-04-27] ingest | Zauberspiegel-Online Chronologie (Ingo Löchel)
- Quelle: Teil 1 der Maritim-Chronologie auf zauberspiegel-online.de als raw abgelegt (`raw/reviews/2026-04-27_zauberspiegel-online_chronologie-teil-1.md`).
- 38 Anker-Folgen aus 2015–2020 mit Erstauftritten, Tod-Ereignissen und In-Universe-Jahren erfasst.
- Phasen-Struktur (5 Phasen) aus Fandom-Wiki ergänzt — Verifikation beim nächsten Ingest.

## [2026-04-27] ingest | Re-Releases Recherche
- Recherche-Notiz `raw/reviews/2026-04-27_re-releases_recherche-notiz.md` angelegt.
- Aufgedeckt: Holmes-Re-Release lässt SHC-Folgen 1, 3, 5, 7–9 aus (Winterzeit-Produktionen). Sprecher-Wechsel: Charles Rettinghaus statt Christian Rode in der Re-Release-Linie.
- Wichtig: Es existieren **zwei** separate Sherlock-Holmes-Reihen bei Maritim — die ältere klassische Adaption (Rode/Groeger) ist NICHT Teil dieses Sonderermittler-Universums, nur die Sonderermittler-Reihe seit 2022.

## [2026-04-27] wiki | Hör-Reihenfolgen, Re-Release-Integration, Schema-Updates
- Neue Konzept-Seite `wiki/konzepte/hoerreihenfolgen.md` mit 6 dokumentierten Reihenfolge-Varianten (einzeln, Erscheinungsreihenfolge, Wilde-First, 4er-Zyklen, In-Universe, inkl. Re-Releases).
- Re-Releases als Sub-Sektion in `wiki/serien/poe-und-dupin.md` und `wiki/serien/sherlock-holmes.md` integriert — inklusive Abweichungs-Tabellen.
- `wiki/serien/archive-poe-dupin.md` und `wiki/serien/archive-sherlock-holmes.md` zu Weiterleitungen reduziert.
- `index.md` und `wiki/universum.md` an die neue Struktur angepasst (13 Serien + 2 integrierte Re-Releases statt 15 Top-Level-Serien).
- Spoiler-Konvention in Universum-Übersicht und Schema explizit dokumentiert.

## [2026-04-30] ingest | Archive Poe & Dupin Re-Release-Folgen 1–12
- Quelle: <https://www.sonderermittler-der-krone.de/serien/archive-von-poe-und-dupin/> gecrawlt.
- Alle 12 Re-Release-Folgen der Serie „Aus den Archiven von Edgar Allan Poe & Auguste Dupin" dokumentiert.
- Raw-Datei `raw/maritim/2026-04-30_archive-poe-dupin_folgen-01-bis-12.md` erstellt mit Titeln, Spielzeiten (60–76 min), Klappentexten.
- `wiki/serien/poe-und-dupin.md` Re-Release-Sub-Sektion komplett aktualisiert — Tabelle jetzt mit allen Titeln, Spielzeiten und Kurznotizen gefüllt.
- Erscheinungsjahr alle 2020, Erzähler: Douglas Welbat.
- Mapping zu Original-SHC-Folgen-Nummern weiterhin ausstehend (benötigt Sherlock Holmes & Co-Katalog-Recherche).

## [2026-04-27] ingest | Zauberspiegel-Online „Let's Talk About"
- Quelle: <https://www.zauberspiegel-online.de/index.php/phantastisches/gehrtes-mainmenu-151/41513-let-s-talk-about-das-maritim-hoerspiel-universum> als raw abgelegt.
- Bestätigte Zirkel-Mitgliederliste mit korrigierter Schreibweise „Gaston Morell" (Doppel-l).
- Aufnahme von Morell als 7. Mitglied geschieht in EAPAD 13 „Aufnahmeprüfung" — erst dort ist der Zirkel komplett.
- Widerspruch zur Zirkel-Gründung dokumentiert (DNAPF-Variante: Dracula als Gründer; OWMH-Variante: Abspaltung aus Charles Darwin Gesellschaft 1875).
- Sherlock Holmes – Sonderermittler der Krone Startdatum präzisiert: 25.11.2022, Spin-Off zu SHC.
- SHC 45 = Grundstein für IADK; SHC 55 = Grundstein für Moriarty.
- Offene Frage: Maritim-Reihe „Professor van Dusen" — gehört oder nicht?

## [2026-04-27] wiki | Drei neue Konzept-Seiten
- `wiki/konzepte/phasen.md` — Fünf Veröffentlichungsphasen mit Serien-Zuordnung, Schlüsselereignissen und Verlags-Aufteilung.
- `wiki/konzepte/charles-darwin-gesellschaft.md` — Vorläufer-Organisation des Zirkels, vier dokumentierte Forschungsprogramme (Schwarzwald, Demeter, Spitzbergen, Vampir-Blut), bekannte Mitglieder.
- `wiki/konzepte/sherlock-holmes-und-co.md` — Vorgänger-Reihe mit Winterzeit/Maritim-Schnitt bei Folge 9/10, Schaltpunkte zu IADK/Moriarty/Sherlock-Sonderermittler, Sprecher-Wechsel zu Charles Rettinghaus in den Re-Releases.

## [2026-04-27] meta | PowerShell-Start-Script für die App
- `app/start-server.ps1` angelegt — sucht python/py, prüft Port, öffnet Browser automatisch.
- Parameter: `-Port` (Default 8000), `-NoBrowser`.
- Hinweis zur Execution-Policy in app/README.md ergänzt.
- README (Repo) und app/README.md auf das Script verlinkt.

## [2026-04-27] meta | Timeline-App live
- `app/` im Repo-Root angelegt: `index.html`, `styles.css`, `app.js`, `data/folgen.json`, `README.md`.
- Tonalität: dunkel-warmes Sepia, viktorianisch — passt zum Universum.
- Funktionen: Sortierung In-Universe / Erscheinen, Filter pro Serie und Zirkel-Bezug, Detail-Panel mit Wiki-Verlinkung, Toggle für Stubs und unbekannte Story-Daten.
- Daten-Bestand initial: 14 Serien, ~85 Folgen-Einträge — alle 56 OWMH-Titel, plus Anker-Folgen aus DNAPF, EAPAD, IADK, SHC, Sherlock-Sonderermittler aus der Löchel-Chronologie. ~13 Folgen mit präzisem In-Universe-Datum, Rest mit `story_praezision: "unbekannt"`.
- CLAUDE.md erweitert: neuer Abschnitt 9 „Timeline-App: Daten-Pflege" mit JSON-Schema und Pflege-Konvention. Ingest-Workflow (4.1) um Schritt 4 „Timeline-App-Daten pflegen" ergänzt. Abschnitte umnummeriert (alt 7→7-NICHT, alt 8→8-Skelett, neu 9-App, alt 9→10-Sitzung).
- Repo-README, Willkommen-Seite und app/README.md mit Startanleitung versehen.

## [2026-04-27] ingest | Pilot OWMH 1 „Zeitenwechsel"
- Quelle: <https://www.sonderermittler-der-krone.de/serien/wilde-und-holmes/folge01-zeitenwechsel/> als raw abgelegt (`raw/maritim/2026-04-27_owmh_serien-und-folge-01.md`) — inklusive offiziellem Klappentext und kompletter OWMH-Folgenliste 1–56.
- Folgen-Seite `wiki/folgen/oscar-wilde-und-mycroft-holmes-01-zeitenwechsel.md` nach neuem Spoiler-Schema „grob" geschrieben (Setup/Aufhänger/Bogen + Eckdaten + Figuren).
- Vier Figuren-Stubs: [[wiki/figuren/oscar-wilde]], [[wiki/figuren/mycroft-holmes]], [[wiki/figuren/henry-wheeler]], [[wiki/figuren/benjamin-payton]] (mit Verräter-Spoiler-Warnung).
- OWMH-Hauptserien-Seite mit kompletter Folgenliste 1–56 aus offizieller Quelle aufgefüllt; 13 Folgen mit Anker-Daten aus Löchel-Chronologie versehen.
- Phasen-Querverweis bestätigt: OWMH 36 „Am Ende der Zeit" ist der titelgebende Phasen-Übergang von 4 → 5.
- Index aktualisiert; Folgen- und Figuren-Sektion erstmals mit Inhalten.

## [2026-04-27] schema | Spoiler-Konvention erweitert: „grob" als Default
- Folgen-Seiten dokumentieren jetzt zusätzlich eine **grobe Handlung** (Setup, Aufhänger, Bogen — 3–6 Sätze) bis kurz vor der ersten echten Wendung.
- Tabu bleibt: Auflösung, Täter-Identität, zentrale Wendungen, Tode wichtiger Figuren, Verräter-Enthüllungen.
- Faustregel: was im Klappentext/Booklet steht, ist „grob"; was erst beim Hören klar wird, ist „voll".
- Folgen-Skelett-Vorlage in CLAUDE.md angepasst: neuer Abschnitt `## Handlung (grob)` mit Setup/Aufhänger/Bogen-Strukturierung; neues Frontmatter-Feld `spoiler_level` (`grob` Default, `voll` auf Auftrag).
- README und `wiki/universum.md` an die neue Konvention angeglichen.

## [2026-04-27] wiki | Querverweise nachgezogen
- `wiki/konzepte/zirkel-der-sieben.md` umfangreich erweitert: Mitglieder mit Erstauftritts-Datum, Verbündeten-Tabelle, Widerspruch zur Gründung, Verweis auf Charles-Darwin-Gesellschaft und Phasen-Konzept.
- `wiki/universum.md` Phasen-Liste auf Konzept-Seite verlinkt; offene Frage „Professor van Dusen" aufgenommen.
- `wiki/konzepte/hoerreihenfolgen.md` Variante 4 mit Phasen-Konzept-Link ergänzt.
- `wiki/serien/poe-und-dupin.md` und `wiki/serien/sherlock-holmes.md` zur SHC-Konzept-Seite verlinkt; sherlock-holmes Erstdatum präzisiert auf 25.11.2022; poe-und-dupin mit Hinweis auf Zirkel-Bezug ab Folge 13.
- `index.md` um die drei neuen Konzept-Seiten erweitert; Quellen-Übersicht ergänzt.

## [2026-04-27] ingest | OWMH Folgen 2 bis 4
- Offizielle Detailseiten zu `Finsteres Hochland`, `Das Geheimnis des Alchemisten` und `Tod der Königin` als neue Raw-Quelle abgelegt: `raw/maritim/2026-04-27_owmh_folgen-02-bis-04.md`.
- Drei Folgen-Seiten unter `wiki/folgen/` im groben Spoiler-Schema ergänzt; OWMH-Serienseite jetzt mit Links für Folgen 2–4.
- Zwei Figuren-Stubs angelegt: `wiki/figuren/abel-hawthorn.md` und `wiki/figuren/alfons-grell.md`.
- `app/data/folgen.json` für OWMH 2–4 mit `wiki`, `logline` und `spoiler_level` synchronisiert; Folge 3 Veröffentlichungsdatum mangels Primärbeleg auf `null` gesetzt.

## [2026-04-28] ingest | OWMH Folgen 5 bis 56
- Offizielle Detailseiten 5–56 als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-28_owmh_folgen-05-bis-56.md`.
- Fehlende Folgen-Seiten `OWMH 5` bis `OWMH 56` unter `wiki/folgen/` angelegt und mit groben Inhaltsangaben, Zirkel-Einordnung und Primärlinks gefüllt.
- `app/data/folgen.json` für OWMH 5–56 mit `wiki`, `logline`, `spielzeit_min` und `spoiler_level: grob` synchronisiert.
- `index.md` und `wiki/serien/oscar-wilde-und-mycroft-holmes.md` auf den vollständigen OWMH-Folgenbestand verlinkt; Website-Auffälligkeit bei Folge 41 im Raw vermerkt.

## [2026-04-28] query | OWMH 40 und 41 extern gegengeprüft
- Offizielle Fan-Seite für `OWMH 40` und `OWMH 41` verglichen mit Lübbe-/ISBN-/Shop-Quellen und Rezensionen.
- Ergebnis: `OWMH 40` trägt auf der offiziellen Fan-Seite sehr wahrscheinlich versehentlich den Klappentext von `OWMH 41`; Verlagsquellen verorten Folge 40 stattdessen in Rom mit Violet Ishiguro, Crowley und den Worten der Macht.
- `wiki/folgen/` für `OWMH 40` und `OWMH 41`, die OWMH-Serienseite sowie `index.md` entsprechend präzisiert.
- `app/data/folgen.json` für `OWMH 40` und `OWMH 41` bei Logline und Zirkel-Status nachgezogen.

## [2026-04-30] query | OWMH-Fandom Folgenseiten 1–44 abgeglichen
- Serienseite und verlinkte Fandom-Einzelseiten `OWMH 1–44` automatisiert ausgelesen; Ergebnis als Raw-Datei abgelegt: `raw/maritim/2026-04-30_owmh_fandom-folgen-01-bis-44.md`.
- Befund: Fandom listet 54 Folgen, hat aber nur 44 Einzelseiten verlinkt; Folgen 45–54 stehen dort nur als reine Listeneinträge ohne Artikelseite.
- Befund: Fandom markiert Folgen 42–44 weiterhin als „angekündigt" (veralteter Stand), obwohl die offiziellen Maritim-Daten bereits veröffentlichte Folgen zeigen.
- `wiki/folgen/` für OWMH 42–44 mit Fandom-Abgleich ergänzt; OWMH 44 Zirkel-Einstufung auf `direkt` korrigiert und in `app/data/folgen.json` synchronisiert.

## [2026-04-30] wiki | OWMH Folgen 1–56 Fandom-Konsistenzsweep
- Alle OWMH-Folgenseiten (`1–56`) auf einen einheitlichen Fandom-Abgleich-Status gebracht und mit der neuen Raw-Quelle verknüpft.
- Folgen 1–44: Hinweis auf vorhandene Fandom-Einzelseite ergänzt.
- Folgen 45–54: Hinweis ergänzt, dass die Titel auf Fandom nur gelistet, aber nicht als eigene Seiten verlinkt sind.
- Folgen 55–56: Hinweis ergänzt, dass diese auf der Fandom-OWMH-Serienseite (Stand 2026-04-30) nicht gelistet sind.

## [2026-04-28] ingest | Wilde/Mycroft ungelöste Fälle 1 bis 2
- Offizielle Folgen-Seiten der Blitz-Reihe `Oscar Wilde – Die ungelösten Fälle des Mycroft Holmes` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-28_wilde-mycroft-ungeloeste_folgen-01-02.md`.
- Zwei Folgen-Seiten unter `wiki/folgen/` angelegt: `WMU 1 Der Riese von Griffin` und `WMU 2 Die Todesblume`.
- Serien-Seite `wiki/serien/wilde-mycroft-ungeloeste.md` mit konkreten Erscheinungsdaten, Folgenliste und Figurenanschlüssen ausgebaut.
- `app/data/folgen.json` um beide Folgen ergänzt; `index.md` sowie Figuren-Stub `wiki/figuren/irene-adler.md` nachgezogen.

## [2026-04-28] query | OWMH 39 Zirkel-Bezug nachgeschärft
- `wiki/folgen/oscar-wilde-und-mycroft-holmes-39-der-pfad-der-toten.md` gegen die bestehende Raw-Notiz geprüft.
- Ergebnis: Die vorhandene Folgen-Seite markierte den Zirkel-Bezug irrtümlich als offen, obwohl die offizielle Beschreibung den Zirkel ausdrücklich nennt.
- Serienseite, `index.md` und `app/data/folgen.json` für `OWMH 39` bei Zirkel-Status und Kurzbeschreibung nachgezogen.

## [2026-04-28] ingest | Tesla Folgen 1 bis 8
- Offizielle Serien- und Folgen-Seiten der Blitz-Reihe `Tesla` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-28_tesla_folgen-01-08.md`.
- Acht Folgen-Seiten unter `wiki/folgen/` angelegt, Serien-Seite `wiki/serien/tesla.md` aus dem Stub geholt und `wiki/figuren/nikola-tesla.md` als erster Figuren-Anker ergänzt.
- `app/data/folgen.json` um TES 1–8 erweitert; `index.md` auf Serien-, Folgen- und Quellenebene nachgezogen.
- Auffälligkeit dokumentiert: Die offizielle Website führt Folge 1 und Folge 4 beide unter dem Titel `Im Spannungsfeld`.

## [2026-04-28] ingest | Moriarty Folgen 0 bis 24
- Offizielle Serien- und Folgen-Seiten der Maritim-Reihe `Moriarty – Zwischen Genie und Verbrechen` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-28_moriarty_folgen-00-bis-24.md`.
- Folgen-Seiten `MOR 00` bis `MOR 24` unter `wiki/folgen/` angelegt; Serien-Seite `wiki/serien/moriarty.md` aus dem Stub geholt und die Figuren-Stubs `wiki/figuren/james-moriarty.md` sowie `wiki/figuren/theodora-sachs.md` ergänzt.
- `app/data/folgen.json` für Moriarty mit exakten Ersterscheinungen aus HolyShop, `wiki`-Pfaden, Loglines und Zirkel-Einschätzung synchronisiert.
- Auffälligkeiten dokumentiert: `Perlen des Todes` steht auf der offiziellen Moriarty-Seite als Folge `0` mit Jahr `2021`, während HolyShop bereits `Moriarty 25: Ein Hauch von Ewigkeit` für `05.06.2026` listet.

## [2026-04-28] ingest | Sherlock Holmes Serien-Crawl
- Offizielle Serien- und Folgen-Seiten der Maritim-Reihe `Sherlock Holmes - Sonderermittler der Krone` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-28_sherlock-holmes_folgen-01-bis-21.md`.
- Serien-Seite `wiki/serien/sherlock-holmes.md` aus dem Stub geholt und auf die kosmosrelevanten Handlungsbögen fokussiert: Mycroft-/Moriarty-Auftakt, Killjoy-/Wilde-/Adler-Anschluss, Robur-/Frankenstein-Block sowie Tesla-Öffnung über Bastien Lavache.
- Figuren-Stub `wiki/figuren/john-watson.md` angelegt; `index.md` und `wiki/universum.md` beim Holmes-Stand sowie bei der Datumslogik nachgezogen.
- Wichtig: Die offizielle Holmes-Serienseite listet am `2026-04-28` bereits `Folge 21`, diese ist aber erst für `19.06.2026` angekündigt; effektiv sind derzeit 20 Folgen veröffentlicht.

## [2026-04-28] ingest | Sherlock Holmes Folgen 1 bis 6
- Sechs Folgen-Seiten unter `wiki/folgen/` angelegt: `SH 1` bis `SH 6`, inklusive Holmes-/Moriarty-Auftakt, `Verräterische Lilien`, `Unter falschem Verdacht` sowie dem ersten offenen Killjoy-/Wilde-/Adler-Block.
- Exakte Ersterscheinungen für `SH 2`, `SH 5` und `SH 6` über HolyShop gegengeprüft; `SH 4` bleibt mangels Primärbeleg vorerst nur auf Jahresstand `2023`.
- `wiki/serien/sherlock-holmes.md` bei der Folgenliste auf die neuen Seiten verlinkt und `index.md` um eine eigene Sherlock-Folgen-Sektion erweitert.
- `app/data/folgen.json` für `SH 1` bis `SH 6` mit `wiki`, `logline`, `spielzeit_min`, `spoiler_level` und bereinigter ID von Folge 1 synchronisiert.

## [2026-04-28] ingest | Sherlock Holmes Folgen 7 bis 12
- Sechs weitere Folgen-Seiten unter `wiki/folgen/` angelegt: `SH 7` bis `SH 12`, vom Krankheits-/Carter-Roth-Block bis zum Paganini-/Venedig-Bogen.
- Exakte Ersterscheinungen für `SH 8` bis `SH 12` über HolyShop-Produktseiten verifiziert; `SH 7` vorerst über die HolyShop-Releaseliste `historic` datiert.
- `wiki/serien/sherlock-holmes.md` und `index.md` für die nun ingestierten Folgen `1` bis `12` nachgezogen.
- `app/data/folgen.json` für `SH 7` bis `SH 12` mit `wiki`, `logline`, `spielzeit_min`, `spoiler_level` und Zirkel-Einschätzung synchronisiert.

## [2026-04-28] ingest | Sherlock Holmes Folgen 13 bis 20
- Acht weitere Folgen-Seiten unter `wiki/folgen/` angelegt: `SH 13` bis `SH 20`, vom Hafen-/Robur-/Frankenstein-Block bis zum Molderton-/Adrik-Bogen.
- Exakte Ersterscheinungen für `SH 13` bis `SH 19` über HolyShop-Produktseiten verifiziert; `SH 20` mit `24.04.2026` über die aktuelle HolyShop-Serienliste nachgezogen.
- `wiki/serien/sherlock-holmes.md` und `index.md` auf den nun ingestierten Holmes-Bestand `1` bis `20` erweitert.
- `app/data/folgen.json` für `SH 13` bis `SH 20` inkl. `wiki`, `logline`, `spielzeit_min`, `spoiler_level` und bereinigtem `SH 20`-Stub synchronisiert.

## [2026-04-28] ingest | Sherlock Holmes Folge 21
- Folgen-Seite `SH 21 Eine Studie in Blutrot` unter `wiki/folgen/` angelegt, obwohl die Folge am Arbeitstag noch nicht veröffentlicht ist.
- Wichtig für die Datumslogik: `Erscheinungsdatum 19.06.2026`, Stand `28.04.2026` aber ausdrücklich nur angekündigt.
- `index.md` und `app/data/folgen.json` um den angekündigten Tesla-/Bastien-Lavache-Anschluss erweitert.

## [2026-04-28] wiki | Phileas Fogg Serienaufbereitung und Crawl-Start
- `wiki/serien/phileas-fogg.md` aus dem Blanko-Stub geholt: Kosmos-Rolle, Ankerfolgen, Crossover zu Wilde und die Frühfunktion für Robur/Frankenstein/Dracula dokumentiert.
- Figuren-Stub `wiki/figuren/phileas-fogg.md` angelegt und elf bereits im Repo belegte DNAPF-Ankerfolgen als erste Wiki-Seiten unter `wiki/folgen/` gestartet.
- `index.md` um eine eigene DNAPF-Folgen-Sektion erweitert; Figuren- und Serieneinträge für Phileas nachgezogen.
- `app/data/folgen.json` für die vorhandenen DNAPF-Ankerfolgen mit `wiki`-Pfaden und Kurzloglines synchronisiert.

## [2026-04-28] wiki | Phileas-Anschlüsse und Figurenanker nachgezogen
- Fehlende, bereits vielfach verlinkte Figuren-Seiten `dracula`, `robur`, `victor-frankenstein`, `kapitaen-nemo` und `edgar-allan-poe` angelegt.
- Alias-Seite `wiki/figuren/viktor-frankenstein.md` ergänzt, damit beide im Repo vorhandenen Frankenstein-Schreibweisen weiter auflösen.
- `wiki/serien/phileas-fogg.md` bei den Hauptfiguren auf die neuen Figuren-Seiten verlinkt.
- `index.md` im Figurenbereich um die neuen Kosmos-Anker aus der Phileas-/Zirkel-Achse erweitert.

## [2026-04-29] wiki | Phileas-Achse in Übersichtsseiten verankert
- `wiki/universum.md` um verlinkte Figurenlisten und einen eigenen DNAPF-Frühachse-Abschnitt erweitert.
- `wiki/konzepte/phasen.md` bei Phase 3 um konkrete DNAPF-Ankerfolgen für Robur, Frankenstein und Dracula geschärft.
- `wiki/konzepte/hoerreihenfolgen.md` in Variante 3 um die aktuell wichtigsten DNAPF-Ankerfolgen ergänzt.

## [2026-04-29] wiki | DNAPF-Nachbarserien nachgeschärft
- `wiki/serien/dracula.md` und `wiki/serien/frankenstein.md` um exakte Startdaten sowie ihre frühen DNAPF-Vorlaufpunkte erweitert.
- `wiki/serien/kapitaen-nemo.md` und `wiki/serien/poe-und-dupin.md` um die bereits lokal belegten DNAPF-Erstauftritte ihrer Hauptfiguren ergänzt.
- Ziel war kein Voll-Ingest dieser Reihen, sondern eine sauberere Kosmos-Navigation rund um die Phileas-Fogg-Achse.

## [2026-04-29] ingest | Phileas Fogg Folgen 6, 7, 9, 13 bis 21
- Offizielle DNAPF-Folgenseiten `6`, `7`, `9` und `13` bis `21` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-29_phileas-fogg_folgen-06-07-09-13-bis-21.md`.
- Neue Folgen-Seiten `DNAPF 6`, `7`, `9`, `13` bis `20` angelegt; `DNAPF 21` von Stub auf groben Spoiler-Stand gehoben.
- Serienseite `wiki/serien/phileas-fogg.md`, `index.md` und `app/data/folgen.json` für den erweiterten Crawl synchronisiert.
- Auffälligkeiten dokumentiert: Die offizielle Seite von `DNAPF 17` dupliziert offenbar den Klappentext von `DNAPF 16`; `DNAPF 21` heißt auf der offiziellen Folgenseite `Die sieben Seelen des Anubis`, während die bisherige Loechel-Chronologie `Die sieben Steine des Anubis` notiert.

## [2026-04-29] ingest | Phileas Fogg Folgen 22 bis 32
- Neue Arbeitsquelle `raw/maritim/2026-04-29_phileas-fogg_folgen-22-bis-32.md` angelegt; offizielle DNAPF-Folgenseiten 22 bis 32 spoilerarm paraphrasiert.
- Neun neue Folgen-Seiten `DNAPF 22`, `23`, `25`, `27` bis `32` angelegt; die bisherigen Stubs `DNAPF 24` und `DNAPF 26` auf offiziellen Stand mit grober Handlung gehoben.
- `wiki/serien/phileas-fogg.md` und `index.md` für den neuen Block aktualisiert; offener Restbestand jetzt `DNAPF 33` bis `50`.
- `app/data/folgen.json` für den Block 22 bis 32 inkl. `spielzeit_min`, `wiki`, `logline` und angepasstem `spoiler_level` bei 24 und 26 synchronisiert.

## [2026-04-29] ingest | Phileas Fogg Folgen 33 bis 50
- Neue Arbeitsquelle `raw/maritim/2026-04-29_phileas-fogg_folgen-33-bis-50.md` angelegt; offizielle DNAPF-Folgenseiten 33 bis 50 spoilerarm paraphrasiert.
- Restliche 18 Folgen-Seiten `DNAPF 33` bis `DNAPF 50` angelegt; die Reihe liegt damit lokal erstmals vollständig bis Folge 50 vor.
- `wiki/serien/phileas-fogg.md`, `index.md` und `app/data/folgen.json` für den Abschlussblock synchronisiert; DNAPF ist als Voll-Crawl jetzt abgeschlossen.
- Sichtbare Besonderheit: `DNAPF 50` führt als einzige Folge im späten Block ein exaktes Erscheinungsdatum (`2026-02-27`) und mit `139 min` deutlich erhöhte Spielzeit.

## [2026-04-29] wiki | Wilde-und-Adler-Serienseite nachgeschärft
- `wiki/serien/oscar-wilde-und-irene-adler.md` aus dem Stub geholt und als Blitz-Mini-Serie mit Kosmos-Funktion, Vorlaufpunkten und offenen Datenlücken dokumentiert.
- Zentraler Repo-Befund: Die Reihe wirkt lokal nicht als Neubeginn, sondern als eigene Verdichtung einer seit `OWMH 16` aufgebauten Wilde/Adler-Achse.
- `index.md` für die Serie auf den neuen Stand gebracht; ein eigener Folgen-Crawl für `wilde-und-adler/` steht weiterhin aus.

## [2026-04-29] ingest | Wilde & Adler Folgen 1 bis 4
- Offizielle Serien- und Folgen-Seiten der Blitz-Mini-Serie `Oscar Wilde & Irene Adler – Sonderermittler der Krone` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-29_wilde-und-adler_folgen-01-bis-04.md`.
- Vier Folgen-Seiten `WIA 1` bis `WIA 4` unter `wiki/folgen/` angelegt; Serien-Seite `wiki/serien/oscar-wilde-und-irene-adler.md` auf konkreten Folgenstand und direkten Zirkel-Bezug angehoben.
- `index.md` und `app/data/folgen.json` für die Mini-Serie synchronisiert.
- Auffälligkeit dokumentiert: Die offizielle Folgen-Seite von `WIA 3` wiederholt derzeit offenbar den Klappentext von `WIA 2`; die grobe Handlungsbeschreibung bleibt dort deshalb bewusst vorsichtig.

## [2026-04-29] wiki | Kapitän-Nemo-Serienseite nachgeschärft
- `wiki/serien/kapitaen-nemo.md` von Stub auf Entwurfsstand gehoben und als kleine Blitz-Spin-off-Reihe mit lokaler Kosmos-Einordnung ausgebaut.
- Nemo-Anker aus `DNAPF 1`, `18`, `20` sowie `41` bis `43` gebündelt, damit die Reihe trotz fehlender Einzel-Ingests schon sauber an die Verne-Achse anschließt.
- `index.md` für die Serien-Kurzbeschreibung nachgezogen; `zirkel` bleibt bewusst auf `unklar`, bis eigenständige Nemo-Folgen lokal vorliegen.

## [2026-04-29] ingest | Kapitän Nemo Folgen 1 bis 2
- Neue Arbeitsquelle `raw/maritim/2026-04-29_kapitaen-nemo_folgen-01-02.md` angelegt; offizielle Nemo-Serien- und Folgen-Seiten 1 bis 2 spoilerarm paraphrasiert.
- Folgen-Seiten `NEM 1` und `NEM 2` unter `wiki/folgen/` angelegt; `wiki/serien/kapitaen-nemo.md` von bloßer Reihen-Einordnung auf echten Folgenstand hochgezogen.

## [2026-04-30] ingest | Oscar Wilde & Edgar Allan Poe Folgen 1 bis 4
- Offizielle Serien- und Folgen-Seiten der Blitz-Mini-Serie `Oscar Wilde & Edgar Allan Poe` von <https://www.sonderermittler-der-krone.de/serien/wilde-und-poe/> gecrawlt und als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-30_oscar-wilde-poe_folgen-01-bis-04.md`.
- Vier Folgen-Seiten `WPO 1` bis `WPO 4` unter `wiki/folgen/` angelegt; Serien-Seite `wiki/serien/oscar-wilde-und-poe.md` von Stub auf recherchiert angehoben mit konkreter Folgenliste und direktem Zirkel-Bezug (ab Folge 3).
- `index.md` und `app/data/folgen.json` für die Mini-Serie synchronisiert.
- Zentraler Handlungsbogen: Wilde und Poe suchen gemeinsam die uralten Statuen der »Ewig Liebenden«; ab Folge 3 tritt der Zirkel (Rasputin, Mata Hari, Theodora Sachs) als direkter Antagonist auf.
- Die Serie umfasst 4 zusammenhängende Folgen (2025–2026), Schauplätze: Schottland, Amerika, England.
- `index.md`, `wiki/figuren/kapitaen-nemo.md` und `app/data/folgen.json` für den nun lokal ingestierten Nemo-Zweiteiler synchronisiert.
- Auffälligkeit dokumentiert: Die offizielle Serienseite zeigte beim Abruf noch nur Folge `01`, obwohl Figuren-Seiten und direkte Folgen-URL bereits auch Folge `02` belegen.

## [2026-04-29] wiki | Irene-Adler-Serienseite nachgeschärft
- `wiki/serien/irene-adler.md` von Stub auf Entwurfsstand gehoben und als eigenständige Sonderermittler-Linie mit SHC-Grundstein, OWMH-Vorlauf und späteren Holmes-/Tesla-/Blitz-Anschlüssen eingeordnet.
- Bewusst keine erfundene Voll-Folgenliste ergänzt: Die Seite dokumentiert derzeit nur lokal belastbare IADK-Anker (`SHC 45`, `OWMH 16`, `IADK 4`, `IADK 15`) und markiert den Voll-Crawl weiter als offen.
- `index.md` für die neue Kurzbeschreibung der Serie synchronisiert.
- Partielle Folgenliste nachgezogen: vier lokal bereits in `app/data/folgen.json` belegte IADK-Folgen (`1`, `4`, `6`, `15`) jetzt direkt auf der Serienseite sichtbar gemacht.

## [2026-04-30] lint | Lint-Korrekturen umgesetzt
- Zweiter Lint-Report als `wiki/queries/lint-2026-04-30-2.md` angelegt.
- Fehlende Figuren-Seiten angelegt: `wiki/figuren/mata-hari.md` (Entwurf, 18 aktive Links aufgelöst) und `wiki/figuren/paul-hiller.md` (Stub, 1 Link aufgelöst).
- `app/data/folgen.json`: ID von `poe-und-dupin-13-aufnahmepruefung` auf `poe-und-dupin-13-die-aufnahmepruefung` korrigiert, Titel auf „Die Aufnahmeprüfung" und `wiki`-Feld ergänzt.
- Status-Updates: `wiki/serien/poe-und-dupin.md` und `wiki/konzepte/zirkel-der-sieben.md` von `stub` auf `entwurf` angehoben.
- `index.md` um Mata Hari und Paul Hiller in der Figuren-Sektion erweitert.

## [2026-04-29] ingest | Irene Adler Folgenliste 0 bis 32
- Neue Arbeitsquelle `raw/maritim/2026-04-29_irene-adler_folgen-00-bis-32.md` angelegt; offizielle Serienseite von `Irene Adler – Sonderermittlerin der Krone` als Titel-Crawl erschlossen.
- `wiki/serien/irene-adler.md` von der partiellen Folgenliste auf den vollständigen Titelstand `0` bis `32` gehoben; die bisher lokal genauer belegten Folgen bleiben separat markiert.
- `index.md` bei Serienbeschreibung und Quellenübersicht synchronisiert.
- Wichtig: Das ist bewusst **noch kein** Detail-Ingest der einzelnen Folgen-Seiten; `app/data/folgen.json` bleibt für IADK vorerst nur partiell gepflegt.

## [2026-04-30] ingest | Irene Adler Folgen 0 bis 32
- Neue Arbeitsquellen `raw/maritim/2026-04-30_irene-adler_folgen-00-bis-10.md`, `...11-bis-21.md` und `...22-bis-32.md` angelegt; die offiziellen IADK-Folgen-Seiten jetzt blockweise spoilerarm paraphrasiert.
- Folgen-Seiten `IADK 0` bis `IADK 32` unter `wiki/folgen/` angelegt; die Reihe liegt lokal damit erstmals komplett auf Detailstand mit Erscheinungsdaten, Spielzeiten und groben Inhaltsangaben vor.
- `wiki/serien/irene-adler.md`, `index.md` und `app/data/folgen.json` für den Voll-Ingest synchronisiert.
- Auffälligkeiten dokumentiert: `IADK 0` erschien als Prolog später als `IADK 1`; für `IADK 1`, `4` und `6` weichen die exakten Store-Daten leicht von der bisherigen Repo-Chronologie ab; `IADK 19` stützt sich beim exakten Datum derzeit auf Distributionsquellen statt einen direkt greifbaren HolyShop-Detailbeleg.

## [2026-04-30] wiki | Dracula-Serienseite von Stub auf Entwurf gehoben
- `wiki/serien/dracula.md` inhaltlich ausgebaut: Phasen-Einordnung, Serienfunktion als Antagonisten-Spin-off und lokale Kosmos-Anker aus DNAPF, IADK und Moriarty gebündelt.
- Bewusst keine erfundene Voll-Folgenliste ergänzt: Die Seite markiert transparent, dass für Dracula noch eine eigene `raw`-Arbeitsquelle mit Serien-/Folgen-Crawl fehlt.
- `index.md` für die neue Kurzbeschreibung synchronisiert; `app/data/folgen.json` bleibt unverändert, weil dort aktuell nur ein technischer Platzhalter `dracula-01` existiert und noch kein echter Folgen-Ingest vorliegt.

## [2026-04-30] lint | Systematischer Wiki-Gesundheitscheck
- Umfassender Lint-Pass über Serien-, Figuren-, Konzept- und Folgen-Seiten durchgeführt nach AGENTS.md-Kriterien.
- Bericht als `wiki/queries/lint-2026-04-30.md` angelegt mit Befunden zu fehlenden Figuren-Seiten (15), unvollständigen Serien (4), Status-Markern (100+), Inkonsistenzen (3) und Orphans (0).
- Wichtigste Lücken: 4 von 7 Zirkel-Mitgliedern ohne Figuren-Seite (Rasputin, Aleister Crowley, der Maharadscha, Gaston Morell); Hauptbegleiter Aouda, Passepartout, Auguste Dupin fehlen; Poe & Dupin nur 2 von 34 Folgen dokumentiert.
- Positive Befunde: Struktur und Konsistenz solide, Index/Log gepflegt, Naming-Konventionen eingehalten, keine Orphan-Pages, Re-Release-Handling sauber.

## [2026-04-30] wiki | Lint-Probleme behoben — 7 neue Figuren-Seiten
- Kritische Lücken aus Lint-Report geschlossen: Vier fehlende Zirkel-Mitglieder angelegt ([[wiki/figuren/rasputin|Rasputin]], [[wiki/figuren/aleister-crowley|Aleister Crowley]], [[wiki/figuren/der-maharadscha|Der Maharadscha]], [[wiki/figuren/gaston-morell|Gaston Morell]]).
- Drei wichtige Hauptbegleiter-Seiten ergänzt: [[wiki/figuren/aouda|Aouda]], [[wiki/figuren/passepartout|Passepartout]], [[wiki/figuren/auguste-dupin|Auguste Dupin]].
- Alle sieben neuen Seiten mit Status `entwurf`, vollständiger Charakterisierung, Auftritts-Listen, Beziehungen und Quellen versehen.
- Schreibweise-Inkonsistenz "Gaston Morel" war bereits korrekt als "Gaston Morell" (Doppel-l) in poe-und-dupin.md vorhanden.
- [[wiki/figuren/oscar-wilde|Oscar Wilde]] von `stub` auf `entwurf` gehoben mit substantiell erweitertem Inhalt (Charakterisierung, Handlungsbögen, vollständige Beziehungen, Bedeutung im Kosmos).
- `index.md` Figuren-Sektion um sieben neue Einträge erweitert und alphabetisch sortiert.
- Zirkel-Mitglieder-Abdeckung im Wiki jetzt: 7 von 7 (100% statt vorher 43%).

## [2026-04-30] meta | Systematische Serien-Vollständigkeitsprüfung
- Alle 15 Serien-Seiten parallel mit 10 Agenten auf Vollständigkeit und Konsistenz geprüft.
- Status-Updates für 7 Serien durchgeführt: OWMH, Irene Adler, Phileas Fogg, Moriarty, Sherlock Holmes, Tesla und Wilde Mycroft Ungelöste von `entwurf` auf `recherchiert` angehoben.
- Dracula-Serie von `entwurf` auf `recherchiert` angehoben (Kosmos-Rolle vollständig dokumentiert, nur Einzelepisoden fehlen noch).
- Wilde & Poe-Serie mit Platzhalter-Episodenliste und Frontmatter-Präzisierung aktualisiert (Status bleibt `stub` bis Raw-Daten vorliegen).
- Poe & Dupin-Serien mit Platzhalter-Listen für fehlende Episoden erweitert (2 von 34 Hauptfolgen + 0 von 12 Re-Release-Folgen dokumentiert).
- Befund: 201 Episoden-Seiten vorhanden; 9 Serien mit vollständigen Episoden (OWMH 56, Irene 33, Phileas 50, Moriarty 25, Sherlock 21, Tesla 8, Nemo 2, Wilde & Adler 4, Wilde Mycroft Ungelöste 2); 6 Serien ohne Episoden-Seiten (Wilde & Poe 0/4, Poe & Dupin 0/34, Archive Poe 0/12, Dracula 0/16, Frankenstein 0/24; Archive Sherlock als Re-Release-Sub-Sektion bereits dokumentiert).

## [2026-04-30] ingest | Große Crawl-Kampagne: 5 Serien vollständig erschlossen
- Paralleler Crawl von 5 unvollständigen Serien mit 5 Agenten durchgeführt, um alle fehlenden Episoden-Seiten zu erstellen.
- **Oscar Wilde & Poe:** 4 Folgen gecrawlt, Raw-Datei `raw/maritim/2026-04-30_oscar-wilde-poe_folgen-01-bis-04.md` erstellt, 4 Wiki-Seiten angelegt, Status von `stub` auf `recherchiert`.
- **Poe & Dupin:** 32 fehlende Folgen (3–34) gecrawlt, Raw-Datei `raw/maritim/2026-04-30_poe-dupin_folgen-03-bis-34.md` erstellt, 32 Wiki-Seiten angelegt, Serie jetzt vollständig.
- **Archive Poe & Dupin:** 12 Re-Release-Folgen gecrawlt, Raw-Datei `raw/maritim/2026-04-30_archive-poe-dupin_folgen-01-bis-12.md` erstellt, Re-Release-Sub-Sektion in Hauptserien-Seite vollständig dokumentiert (keine separaten Wiki-Seiten).
- **Dracula:** 16 Folgen gecrawlt, Raw-Datei `raw/maritim/2026-04-30_dracula_folgen-01-bis-16.md` erstellt, 16 Wiki-Seiten angelegt, Status auf `final`.
- **Frankenstein:** 24 Folgen gecrawlt, Raw-Datei `raw/maritim/2026-04-30_frankenstein_folgen-01-bis-24.md` erstellt, 24 Wiki-Seiten angelegt, Status auf `recherchiert`.
- `app/data/folgen.json` für alle neuen Serien aktualisiert: 72 neue Episoden-Einträge (32 Poe & Dupin, 16 Dracula, 24 Frankenstein), Oscar Wilde & Poe bereits vorhanden.
- `index.md` mit allen neuen Folgen-Abschnitten, aktualisierten Serien-Beschreibungen und 6 neuen Raw-Quellen synchronisiert.
- **Gesamt-Ergebnis:** Repo jetzt mit 273 Episoden-Seiten (zuvor 201), alle 15 Serien vollständig dokumentiert; nur Poe & Dupin Re-Releases ohne Original-SHC-Mapping.

## [2026-04-30] wiki | Timeline-Recherche und story_jahr-Enrichment
- Vier parallele Recherche-Stränge ausgewertet: Zauberspiegel-Chronologie, Raw-Episodenbeschreibungen, Maritim-Verlagsseite, Crossover-Constraints.
- `folgen.json`: 14 Episoden mit neuem `story_jahr` versehen (OWMH 4, 5, 7–9, 11–13, 26–29; Irene Adler 5–6). Gesamtstand jetzt: 30 von 284 Episoden mit konkretem In-Universe-Jahr.
- `folgen.json`: 6 Schlüssel-Episoden mit serienübergreifenden Ordering-Constraints annotiert (PF 4/5/12, OWMH 16/18/50).
- `wiki/konzepte/hoerreihenfolgen.md` Variante 5 (In-Universe-chronologisch) von Stub zu ausgearbeiteter Tabelle mit 30 Zeitankern und Constraint-Liste erweitert.
- Befund: Maritim hat keine offizielle Chronologie publiziert; Irene-Adler-Serie spielt als Prequel vor dem OWMH-Strang (~1889–1890).

## [2026-05-27] ingest | Deep-Research-Report (Reconciliation-only)
- Neue Quelle `raw/deep-research-report.md` ausgewertet; Report ist Meta-/Recherchedokument und bestätigt den bereits vollständig erschlossenen 305-Folgen-Korpus (keine neuen Folgen-Seiten nötig).
- **Datenfehler-Korrektur Tesla 1:** offizielle Seite labelt fälschlich „Im Spannungsfeld"; korrekt „Die Kraft des Lichts" (Cover/Thalia EAN 9783689842109/Kassettenkiste). Datei `tesla-01-im-spannungsfeld.md` → `tesla-01-die-kraft-des-lichts.md` umbenannt (git mv); Titel, Hinweis-Callout, EAN und Autor (Silke Walter) ergänzt.
- Alle Querverweise nachgezogen: `folgen.json` (id/titel/wiki/anmerkung), `index.md`, Serien-Seite `tesla.md`, Figur `nikola-tesla.md`, `tesla-02`; Folge-4-Notiz präzisiert (echter Träger des Titels).
- Neue Meta-Seite `wiki/queries/quellenlage-und-kanonkarte.md`: Quellen-Eignungsmatrix, Kanon-Beziehungskarte, bekannte Primärquellen-Fehler. In `index.md` verlinkt.
- Bewusst NICHT ingestiert (Entscheidung Christian): flächige Handels-/Katalogmetadaten (EAN/Laufzeit/Retailer-Links) — Report liefert nur 2 Beispielepisoden, flächige Aufnahme würde Schema-Erweiterung erfordern.

## [2026-05-27] lint | Voller Health-Check
- Maschineller Scan über 334 Wiki-Seiten (Link-Graph, Status, Orphans) + Abgleich mit `folgen.json`; Bericht in `wiki/queries/lint-2026-05-27.md`.
- Strukturell gesund: 0 defekte Live-Links, 0 verwaiste Inhaltsseiten, alle Folgen mit Figuren-Abschnitt.
- Offene Punkte: 3 kaputte `poe-und-dupin`-`wiki`-Pfade in `folgen.json`; 5 `sherlock-holmes-und-co`-Daten-Anker ohne Seite (Entscheidung nötig); 26 Stubs (davon 8 zentrale Figuren); 328/334 Dateien mit UTF-8-BOM (optionaler Cleanup).
- Keine Fixes vorgenommen (Lint = Bericht; Christian entscheidet).

## [2026-05-27] wiki | Lint-Fix: kaputte folgen.json-Pfade
- 3 `poe-und-dupin`-Einträge in `app/data/folgen.json` repariert: 01/02 fehlendes `wiki`-Feld ergänzt, 13 fehlerhafter Pfad (`wiki/...` → `vault/Sonderermittler%20der%20Krone/wiki/...`) korrigiert.
- JSON validiert (284 Folgen); alle seitengestützten Einträge lösen jetzt auf.
- Offen (Entscheidung nötig): 5 `sherlock-holmes-und-co`-Daten-Anker ohne Seite.

## [2026-05-27] wiki | SHC-Vorgängerreihe: 5 Stub-Seiten angelegt
- Für die 5 `sherlock-holmes-und-co`-Daten-Anker (26/27, 45, 48, 53, 55) Stub-Folgenseiten in `wiki/folgen/` erstellt — Schlüssel-/Grundsteinfolgen der Vorgänger-Reihe.
- `app/data/folgen.json`: `wiki`-Feld bei allen 5 ergänzt; jetzt lösen alle 284 Einträge auf (0 offene Pfade).
- `index.md`: neue Sektion „Sherlock Holmes & Co. (Vorgänger-Reihe)" unter Folgen; SHC-Konzeptseite verlinkt die Folgen jetzt (kein Orphan).
- Nur existierende Figuren verlinkt (Stafford/Lestrade/Leech als Klartext) — keine neuen toten Wikilinks.

## [2026-08-17] ingest | Recherche-Update „neue Folgen seit Master-Index"
- Neue Quelle `raw/Sonderermittler_Update_2026-08-17.md` ausgewertet: 11 neue Folgen + 2 geplante Folgen (Watchlist), neuer offizieller Arbeitsstand **316 Folgen** (294 Hauptlinien + 22 Re-Release).
- **13 neue Folgen-Seiten** in `wiki/folgen/` angelegt: FRANK 26/27, IADK 33/34, NEM 3, MOR 26, DNAPF 52, EAPAD 36, SH 22/23, WMU 3, OWMH 57/58. Alle als `status: stub` mit `zirkel: unklar` — bis auf NEM 3 (`entwurf`, `spoiler_level: grob`) liegt zu keiner Folge ein Klappentext vor.
- **Watchlist-Konvention:** FRANK 27 und SH 23 sind nur HolyShop-Vormerkungen; Frontmatter-Feld `veroeffentlichungsstatus: geplant`, Callout auf der Seite, Tag `watchlist`. Nach 11.09.2026 bzw. 09.10.2026 erneut prüfen.
- **9 Serien-Seiten** nachgezogen (`folgen_count`, Folgenstand, Folgenliste, Quellen): phileas-fogg 50→52, oscar-wilde-und-mycroft-holmes 56→58, poe-und-dupin 34→36, irene-adler 33→35, moriarty 25→26 Seiten (27 offiziell), frankenstein 24→26, sherlock-holmes 21→22, wilde-mycroft-ungeloeste 2→3, kapitaen-nemo 2→3.
- `app/data/folgen.json`: 13 Einträge ergänzt (284 → **297**), `stand` auf 2026-08-17; JSON validiert, alle 297 `wiki`-Pfade lösen auf.
- `index.md` und `wiki/universum.md` mit neuen Folgen, Serienzahlen, Watchlist-Block und neuer Raw-Quelle synchronisiert.
- **⚠️ Befund — 4 Lücken im Vault:** Die Baseline des Updates („305 Episoden") liegt über dem tatsächlichen Vault-Stand. Bei vier Serien fehlt die jeweils vorletzte Nummer komplett: **DNAPF 51**, **EAPAD 35**, **FRANK 25** (Titel jeweils unbekannt) und **MOR 25 „Ein Hauch von Ewigkeit"** (HolyShop-Datum 05.06.2026, war bisher nur als Ankündigung auf der Serien-Seite notiert). In Serien-Seiten, `index.md` und `universum.md` markiert; Nachrecherche nötig (Entscheidung Christian).
- **Weitere offene Punkte:** IADK 33, OWMH 57 und WMU 3 haben kein Erscheinungsdatum und keine Spielzeit — die globale Serienübersicht war laut Quelle aktueller als die jeweiligen Serien-Unterseiten. Autoren-Zuschreibung „Marc Freund" für NEM 3 stammt nur aus Google-Play-Metadaten.

## [2026-08-17] recherche | Nachrecherche: alle offenen Punkte des Ingests geschlossen
- Auftrag Christian: die offenen Punkte des Ingests per Online-Recherche lösen. Neue Quelle: `raw/notes/2026-08-17_nachrecherche-luecken-und-metadaten.md` (paraphrasierte Arbeitsnotiz aus den offiziellen Folgen-Detailseiten, ergänzt um Handels-/Forenquellen).
- **Alle 4 Vault-Lücken geschlossen** — neue Folgen-Seiten mit Datum, Spielzeit, Klappentext (grob) und Figuren:
  - `DNAPF 51 — Der Blaue Lotus` (01.05.2026, 73 min) — Hongkong, kein Zirkel-Bezug.
  - `EAPAD 35 — Auf der Jagd` (05.06.2026, 54 min) — Sonderermittler + Harry Houdini.
  - `FRANK 25 — Trügerische Hoffnung` (22.05.2026, 56 min, Silke Walter) — Moriartys Tarnmantel-Auftrag für alle Zirkelmitglieder.
  - `MOR 25 — Ein Hauch von Ewigkeit` (06.05.2026, 68 min) — Edgar Cayce, karibischer Heilquellen-Stein.
- **Fehlende Metadaten nachgetragen:** IADK 33 = 12.06.2026 / 56 min; OWMH 57 = 15.05.2026 / 53 min; WMU 3 = 19.06.2026 / 52 min.
- **NEM-3-Autorenfrage entschieden:** Die offizielle Folgenseite nennt **keinen** Autor. „Marc Freund" bleibt ein reines Google-Play-Metadatum und ist im Repo **nicht** als `autor` gesetzt. Spielzeit auf die offizielle Angabe (66 min) korrigiert. Befund: Folge 3 listet **Oscar Wilde** statt Phileas Fogg — erster Krimi-Anschluss der Nemo-Reihe.
- **Alle 13 Stub-Seiten des Ingests auf `recherchiert` bzw. `entwurf` hochgezogen:** Klappentexte (Spoiler-Stufe grob), Figurenlisten, Zirkel-Bewertung und Crossover-Felder ergänzt. Kein `spoiler_level: stub` mehr im neuen Bestand.
- `app/data/folgen.json`: 297 → **301 Einträge**; 13 bestehende Einträge mit Datum, Spielzeit, `zirkel`, Logline und `story_anmerkung` angereichert. Innerhalb jeder Serie nach Nummer sortiert. **Kein Nummernloch mehr in irgendeiner Serie.**
- **Neue Kosmos-Befunde** (in `wiki/universum.md` als Abschnitt „Aktuelle Kosmos-Bewegung" dokumentiert): Draculas Rückkehr als Dachplot über FRANK 27 / SH 23 / WMU 3; Bastien Lavache als Doppel-Scharnier zwischen Frankenstein- und Holmes-Arc; Eva/Menorium als zweiter Strang um künstliche Menschen; Themse-Block OWMH 57/58 parallel zu Adlers Reihe; Poe-Linie erstmals im Zentrum der Crossover; Fogg löst sich ab Folge 51 vom Dachplot.
- **Neue Quellenprobleme notiert:** Frankenstein-Serienübersicht listet die Nummer 25 **doppelt** (25 = Trügerische Hoffnung, 26 = Doppelte Tarnung ist korrekt); Datumsabweichungen bei FRANK 26 (offiziell 13.07. vs. HolyShop 17.07.2026) und MOR 25 (offiziell 06.05. vs. HolyShop-Ankündigung 05.06.2026); die HolyShop-Releaseliste führt nur einen rollierenden Ausschnitt und ist als Datumsquelle für ältere Folgen unbrauchbar.
- **Offen (Entscheidung Christian):** 16 neue Nebenfiguren ohne Wiki-Seite (u. a. Abraham Van Helsing, Jonathan Harker, Harry Houdini, Edgar Cayce, Elena Vargas) sowie zwei Konzept-Kandidaten (`Eva`, `Menorium`). Zusätzlich zwei ungeklärte Chronologie-Spannungen: Lavache gleichzeitig gefangen und auf Reisen, Irene Adler gleichzeitig verschwunden und ermittelnd.

## [2026-08-17] wiki | 16 Figuren- und 2 Konzept-Seiten angelegt
- Auftrag Christian: alle in der Nachrecherche vorgeschlagenen Seiten anlegen.
- **Befund vor dem Anlegen:** Vier der als „neu" gelisteten Figuren sind in Wahrheit **wiederkehrende Figuren ohne Seite**, nicht Nebenfiguren aus 2026. Das hat die Gewichtung der Seiten geändert:
  - **Abraham Van Helsing** — präsent in DRAC 1, 3, 4, 5, 10, 12, 15, 16; in DRAC 12 ausdrücklich „Draculas ärgster Feind", nimmt den Grafen dort gefangen. 2026 zurück in WMU 3 und SH 23.
  - **Jonathan Harker** — DRAC 1, 3, 4, 15 (erst Werkzeug Draculas, dann Verfolger) plus SH 23.
  - **Harry Houdini** — EAPAD 21–23 als **Anwärter auf den freien Zirkel-Posten** neben Mata Hari und Arsene Lupin, dazu Re-Release-Folge 5; 2026 auf Ermittlerseite in EAPAD 35.
  - **Geoffrey Stafford** — Erstauftritt SHC 48 als Nachfolger des vom Zirkel ermordeten Inspektors Lestrade, dann MOR 2, jetzt OWMH 57.
- **`Menorium` ist ebenfalls nicht neu:** eingeführt in [[wiki/folgen/frankenstein-11-gefangene-der-finsternis|FRANK 11]] (2022) als unverzichtbarer Stoff für Frankensteins Armee künstlicher Menschen. Dass derselbe Stoff 2026 Eva „perfektionieren" soll, ist der stärkste Hinweis auf eine Verbindung Eva ↔ Frankenstein-Programm — als **Theorie** markiert, nicht als Kanon.
- **Angelegt (16 Figuren):** `abraham-van-helsing`, `jonathan-harker`, `harry-houdini`, `geoffrey-stafford`, `eva` (jeweils `entwurf`), sowie `edgar-cayce`, `morrison`, `elena-vargas`, `ethan-ramsay`, `adams`, `george-turner`, `springer`, `georges-lorant`, `paisley`, `kirk`, `allison` (`stub`).
- **Angelegt (2 Konzepte):** `menorium` (`entwurf`), `fledermausamulett` (`stub`).
- **Zuordnungsentscheidung:** `Eva` wurde als **Figur** angelegt (Maschinenmensch = Charakter), `Menorium` und `Fledermausamulett` als **Konzepte** (Material bzw. Artefakt). Vorher war Eva in der Notiz doppelt als Figur- und Konzept-Kandidat gelistet.
- **Rückverlinkung:** Alle Klartext-Erwähnungen in den 2026er Folgen-Seiten auf Wikilinks umgestellt; zusätzlich `sherlock-holmes-und-co-48` (Stafford), `serien/dracula.md` (neuer Abschnitt „Gegenseite" mit Van Helsing und Harker) und sechs weitere Serien-Seiten nachgezogen.
- **Lint-Nebenfix `index.md`:** Fünf bereits existierende Figuren-Seiten waren nie im Index verlinkt (`bastien-lavache`, `killjoy`, `mata-hari`, `paul-hiller`, `wu`) — jetzt ergänzt. Figuren-Abschnitt umfasst damit 47 Einträge, alphabetisch sortiert.
- **Weiterhin offen (bewusst nicht angelegt, außerhalb des Vorschlags):** `Mina Harker`, `Bram Stoker`, `Jack Renfield`, `Dr. Ryan` (alle tragend in der Dracula-Reihe), `Arsene Lupin` (EAPAD 21–23), `Inspektor Lestrade` (SHC 48). Das sind Altlasten aus früheren Ingests, keine Funde dieser Recherche.

## [2026-08-17] wiki | Sechs Alt-Figuren nachgezogen (Dracula-Gegenseite, Zirkel-Anwärter, Lestrade)
- Auftrag Christian: die im vorigen Schritt als offen vermerkten Figuren ebenfalls anlegen.
- **Angelegt:** `mina-harker`, `bram-stoker`, `arsene-lupin` (jeweils `entwurf`), `jack-renfield`, `ryan`, `lestrade` (`stub`).
- **Bemerkenswerte Befunde:**
  - **Mina Harker** ist die ambivalenteste Figur der Reihe: Erzfeindin Draculas, in DRAC 3/4 aber seine Reisegefährtin, die ihn **bei Tag beschützt** — Grund ist die gemeinsame Suche nach ihrem verschollenen Sohn **Quentin**. Damit einzige belegte Figur des Repos, die Gegner- und Verbündetenrolle gleichzeitig trägt.
  - **Bram Stoker** wird nicht in der Dracula-Reihe eingeführt, sondern in `OWMH 19 „Blutdurst"` (31.01.2019) — im Whitby-/Demeter-Strang, also genau am Motivkomplex seines eigenen Romans.
  - **Dr. Ryan** ist der eigentliche Auslöser der ganzen Dracula-Reihe: Seine Blutforschung in Sussex ist das, was Dracula in DRAC 1 haben will.
  - **Arsene Lupin** vervollständigt das Bild des Nachbesetzungs-Blocks EAPAD 21–23: drei Anwärter (Lupin, Mata Hari, Houdini) auf den nach Morells Tod freien siebten Zirkel-Platz.
- **`wiki/konzepte/zirkel-der-sieben.md` erweitert:** neue offene Frage „Wer rückt nach Morells Tod auf den siebten Platz?" mit dem vollständigen Anwärter-Trio, dem Prüfungsverlauf (Saphir-Diebstahl) und den Indizien aus dem späteren Verlauf. Das war bisher eine Lücke der Konzeptseite — sie führte Morell als 7. Mitglied, ohne seinen Tod und die Nachfolge zu erwähnen.
- **Rückverlinkung:** Hauptfiguren-Listen der Dracula-Folgen 1, 3, 4, 5, 10, 15, 16 auf Wikilinks umgestellt (Van Helsing, Mina/Jonathan Harker, Stoker, Renfield, Ryan); `serien/dracula.md` Abschnitt „Gegenseite" komplettiert; `figuren/mata-hari.md`, `figuren/harry-houdini.md`, `figuren/abraham-van-helsing.md`, `figuren/jonathan-harker.md`, `figuren/geoffrey-stafford.md` und `sherlock-holmes-und-co-48` nachgezogen.
- `index.md`: 6 neue Figuren-Einträge, alphabetisch einsortiert — Figuren-Abschnitt jetzt 53 Einträge.
- **Noch offen:** `Quentin` (Minas verschollener Sohn) — bewusst nicht angelegt, weil zu ihm außer der Existenz nichts belegt ist und die Auflösung des Strangs (DRAC 16 „Der Sohn des Verderbens") unter die Spoiler-Regel fallen würde. Ebenso ohne Seite: `Rebecca` und `Christopher Manderville` (DRAC 5), `Dr. Jason Lightman` und `Elaine Lightman` (Moriarty-Kryo-Block) sowie weitere Fall-Nebenfiguren.

## [2026-08-17] lint | Voller Health-Check nach dem August-Update
- Bericht: [[wiki/queries/lint-2026-08-17|lint-2026-08-17]]. Maschineller Scan über 387 Vault-Seiten plus Vollabgleich mit `app/data/folgen.json` (301 Folgen / 14 Serien).
- **Gesund:** 0 defekte Wikilinks, 0 verwaiste Inhaltsseiten, 0 Folgen ohne Figuren-Abschnitt. `folgen.json` ist ID- und pfadseitig fehlerfrei — die 8 Mai-Befunde sind bestätigt erledigt.
- **Hauptbefund (neu):** 484 Umlaut-Degradierungen (`fuer`, `ueber`, `waehrend`, …) im deutschen Fließtext von 127 Dateien. Die Slug-Regel aus `CLAUDE.md` §3 gilt nur für Dateinamen und Wikilink-Ziele, wurde aber in Prosa, Überschriften und drei `titel:`-Feldern angewendet. Am stärksten betroffen: `log.md` (52), `index.md` (37), `serien/irene-adler.md` (30).
- **33 Widersprüche Wiki ↔ `folgen.json`:** 8 abweichende Erscheinungsjahre bei Poe & Dupin (echter Datenfehler, Quelle muss entscheiden), 20 × `zirkel: false` gegen `indirekt`, 43 Folgen ohne `spoiler_level` im Frontmatter.
- **Schema-Drift:** `folgen[].spielzeit_min` (255 Einträge) und `serien[].anmerkung` sind in keinem Schema-Dokument beschrieben, `schema_version` steht weiter auf `1.0.0`. Ebenso undokumentiert: die gelebten Wiki-Felder `folgen_count`, `watchlist_count`, `veroeffentlichungsstatus` und die `type`-Werte `uebersicht`, `weiterleitung`, `query`.
- **Größte inhaltliche Lücke:** `story_praezision: unbekannt` für 271 von 301 Folgen (90 %) — die In-Universe-Zeitachse der App ist damit weitgehend leer.
- **Offen aus dem Mai-Lint:** die 8 zentralen Figuren-Stubs (Sherlock/Mycroft Holmes, Irene Adler, Poe, Fogg, Nemo, Wu, Killjoy) sind unverändert `stub`.
- **Nichts korrigiert** — der Lint ist reine Bestandsaufnahme; die Fixes zu Umlauten, Poe-Jahren und `zirkel`-Semantik brauchen Christians Entscheidung.

## [2026-08-17] wiki | Lint-Abarbeitung: Umlaut-Rückkorrektur, zirkel-Vereinheitlichung, Schema 1.1.0
- Auftrag Christian: die Befunde aus [[wiki/queries/lint-2026-08-17|lint-2026-08-17]] abarbeiten.
- **Umlaut-Rückkorrektur (Hauptarbeit):** 2002 Ersetzungen in 158 Dateien. Die Schätzung im Report (484) stammte aus einer Stichprobenliste von Suchwörtern; die vollständige Token-Enumeration fand 597 verschiedene degradierte Wortformen (`Kapitaen`, `Rueckkehr`, `Taeter`, `gefaehrlich`, `moeglich` …). Skript mit Schutzzonen für Frontmatter, Wikilink-Ziele, Repo-Pfade, nackte Slugs, Code und Tags; Keep-Liste für legitime `ae/oe/ue`-Wörter (Quellen, Abenteuer, Feuer, Frauen, Duell, genaue, lauert, Poe …). Ersetzungsliste vor der Anwendung komplett gegengelesen — dabei vier Fehlkonversionen abgefangen (`durchschauen`, `beteuert`, `Gräueln`, `Aeussersten`). Verifikation: **kein Wikilink-Ziel verändert** (259 Dateien verglichen).
- **Poe-&-Dupin-Datumsfehler geklärt:** die raw-Quelle `raw/maritim/2026-04-30_poe-dupin_folgen-03-bis-34.md` führt pro Folge ein `Erscheinungsjahr` und deckt sich durchweg mit dem Wiki — `folgen.json` war falsch. 10 Einträge korrigiert (PD 5, 6, 8, 9, 16, 21, 22, 27 Jahresfehler; PD 13 von `null` auf 2021; PD 33 auf das genauere `2026-02-13`).
- **`zirkel` vereinheitlicht:** 265 Folgen-Seiten auf die vierstufige App-Skala (`direkt/indirekt/kein/unklar`) gebracht, damit sind alle 20 Widersprüche gegen `folgen.json` weg. **Bewusste Nebenwirkung:** 42 Seiten mit `zirkel: false` stehen jetzt auf `unklar` — das `false` war ein unrecherchierter Default, kein belegtes Nein (belegte Nein-Fälle stehen als `kein`, 29 Folgen).
- **Schema-Drift geschlossen:** `schema_version` `1.0.0` → **`1.1.0`**; `folgen[].spielzeit_min` und `serien[].anmerkung` dokumentiert; gelebte Wiki-Felder (`folgen_count`, `watchlist_count`, `veroeffentlichungsstatus`, `start`, `genre`, `aliase`, `re_release_von`) und `type`-Werte (`uebersicht`, `weiterleitung`, `query`) in `CLAUDE.md` §3 und `AGENTS.md` nachgetragen. Neu festgehalten: Slug-Umlautregel gilt **nur** für Slugs, nicht für Fließtext; `folgen_count` zählt Folge 0 mit; optionale JSON-Felder dürfen fehlen oder `null` sein.
- **Kleinfixes:** `spoiler_level` in 43 Folgen-Seiten ergänzt · `## Quellen` in Dracula 1–16 ergänzt · `erschienen: 2023` für SH 4 belegt und in Wiki + JSON nachgetragen · `folgen_count` Moriarty 26 → 27 (die Seite selbst sagte schon „27 Folgen") · `## Folgen` → `## Folgenliste` in `serien/dracula.md` · `titel` auf den zwei Weiterleitungsseiten und im Alt-Report `lint-2026-04-30-2` ergänzt · `serien/oscar-wilde-und-poe` auf die Serien-Skala `zirkel: true` gesetzt.
- **Zwischenfall:** Ein erster Anlauf für die Frontmatter-Änderungen hat in 38 Poe-&-Dupin-/Oscar-Wilde-&-Poe-Seiten die `status:`-Zeile durch ein Steuerzeichen ersetzt (in Heredoc-Skripten wurde der Backslash der Regex-Backreference geschluckt). Vor dem Schreiben angelegtes Vault-Backup hat das gerettet: das Frontmatter **aller 301** Folgen-Seiten wurde daraus neu aufgebaut, die Body-Korrekturen blieben erhalten. Gegenprüfung: keine Steuerzeichen im Vault, keine fehlenden Pflichtfelder, nur die beabsichtigten Keys geändert (`zirkel`, `spoiler_level`, `titel`).
- **Verifikationslauf:** 0 defekte Inhalts-Links, 0 Orphans, 0 Folgen ohne Figuren-/Quellen-Abschnitt, 0 Serien ohne Folgenliste, 0 Abweichungen zwischen `folgen.json` und Wiki-Frontmatter bei `titel`/`erschienen`/`nummer`/`serie`/`zirkel`/`spoiler_level`.
- **Weiter offen:** 8 zentrale Figuren-Stubs (Inhaltsarbeit), `story_praezision: unbekannt` für 271 von 301 Folgen, BOM-Cleanup, zwei Namens-Rückfragen (`Loechel`, `Dr. Duerte`).

## [2026-08-17] wiki | Lint-Abarbeitung Teil 2: 8 Figurenseiten, Zeitachsen-Sweep, BOM-Cleanup
- Auftrag Christian: „alles mit Subagents fixen" — die restlichen offenen Punkte aus [[wiki/queries/lint-2026-08-17|lint-2026-08-17]]. 13 Subagents parallel, 8 für Figuren, 5 für die Zeitachse.
- **Acht zentrale Figuren von `stub` auf `entwurf`** ausgebaut (je 9–18 KB statt 1,2–2,2 KB): [[wiki/figuren/sherlock-holmes|Sherlock Holmes]], [[wiki/figuren/mycroft-holmes|Mycroft Holmes]], [[wiki/figuren/irene-adler|Irene Adler]], [[wiki/figuren/edgar-allan-poe|Edgar Allan Poe]], [[wiki/figuren/phileas-fogg|Phileas Fogg]], [[wiki/figuren/kapitaen-nemo|Kapitän Nemo]], [[wiki/figuren/wu|Wu]], [[wiki/figuren/killjoy|Killjoy]]. Aufbau nach dem Muster von [[wiki/figuren/mina-harker|mina-harker]]. `index.md`-Zeilen für alle acht neu gefasst.
- **Zwei Stubs waren inhaltlich falsch, nicht nur dünn:**
  - **Killjoy** war als „Figur der Frankenstein-Reihe" mit 6 Auftritten ab 2023 geführt — belegt sind 27 Auftritte in 5 Reihen ab [[wiki/folgen/irene-adler-01-tod-im-oberhaus|IADK 1]] (14.06.2019). Die Loyalität war invertiert: der Stub schrieb „Teil des Zirkel-Projekts unter Frankensteins Leitung", tatsächlich richten sich seine Rachepläne ab FRANK 18 gegen Frankenstein.
  - **Mycroft Holmes** enthielt eine Verräter-Enttarnung samt Tötung aus OWMH 18 — Verstoß gegen Spoiler-Stufe „grob", entfernt.
- **Zeitachse: alle 301 Folgen gegen alle `raw/`-Quellen geprüft, Ausbeute 5 neue Jahresangaben** (OWMH 3, DNAPF 14, SHC 26/27, SHC 48, SHC 53), alle als `geschaetzt`. Der Grund für die Lücke ist fehlende Quellenlage: in Dracula, Frankenstein, Moriarty, Tesla, Sherlock (2022er), Nemo und den Blitz-Reihen steht **keine einzige Jahreszahl**; die Löchel-Chronologie vergibt In-Universe-Jahre ausschließlich an OWMH-Folgen. Das Feld „Setting / Zeit" existiert repo-weit auf genau vier Seiten.
- **Wichtiger als die neuen Daten war eine Rücknahme:** 16 OWMH-Folgen standen auf `story_praezision: "jahr"`, obwohl ihr Jahr nur zwischen datierten Nachbarfolgen interpoliert war → auf `geschaetzt` herabgestuft, Jahre behalten. OWMH 1 von `"monat"` (April) auf `"jahr"`, weil der Klappentext nur „Frühjahr 1895" sagt. Verteilung jetzt: `unbekannt` 266, `geschaetzt` 23, `jahr` 10, `monat` 2.
- **Methodischer Kernbefund, jetzt auf [[wiki/konzepte/hoerreihenfolgen|Hör-Reihenfolgen]] festgehalten:** reale Lebensdaten taugen in diesem Kosmos **nicht** zur Datierung — Vidocq tritt in EAPAD 10 lebend auf (hist. † 1857), Mata Hari ist 1876 geboren, Edgar Cayce 1877. Dazu alle relativen Constraints (Tesla-Reihe nach MOR 13, Dracula 7/8 und Frankenstein 2/4 nach 1896) und die drei ungelösten Widersprüche.
- **Nicht eingetragen, bewusst:** IADK 9 „Tunguska" → historisch 1908. Das Jahr steht in keiner Repo-Quelle, liegt hinter `epoche_max_jahr: 1905` und zwölf Jahre nach dem Serien-Anker. Entscheidung liegt bei Christian.
- **Neue Quellfehler und Widersprüche dokumentiert:** Klappentext von [[wiki/folgen/frankenstein-12-erweckung|FRANK 12]] ist in der Quelle wortgleich mit Folge 9 (Copy-Paste-Fehler, für Folge 12 liegt faktisch kein Klappentext vor) · SHC 55 ↔ MOR 00 „Perlen des Todes" mit widersprüchlichem `zirkel` · „George Lorant" (EAPAD 33) vs. „Georges Lorant" (EAPAD 36) · Sprecher Michael Pan → Wu war auf zwei Seiten als Fakt geführt, ist aber unbelegt · [[wiki/folgen/phileas-fogg-42-gefaehrliche-suche|DNAPF 42]] nannte Nemo, Aouda und Passepartout nicht unter Hauptfiguren.
- **Nachtrag zum Umlaut-Lauf:** 90 weitere Stellen in 57 Dateien — `ß`-Drift (`grossen`, `stossen`, `schliesslich`, `weiss`, `ausserhalb` …) und `enthuellen`, das meine Keep-Regel für `aktuell/manuell` fälschlich geschützt hatte.
- **BOM-/Zeilenenden-Cleanup:** 339 Dateien vereinheitlicht, UTF-8-BOM entfernt (vorher 328), CRLF → LF (vorher 203). Mit Gegenprüfung auf Zeichengleichheit des dekodierten Textes. Danach 0 mit BOM, 0 mit CRLF.
- **Verifikation:** 0 defekte Inhalts-Links, 0 Orphans, 0 fehlende Pflichtfelder, 0 Abweichungen `folgen.json` ↔ Wiki-Frontmatter, 0 Umlaut-/`ß`-Reste, JSON valide (301 Folgen, `schema_version` 1.1.0).
- **Weiter offen:** 4 Rückfragen (Schreibweise `Loechel`, `Dr. Duerte`, IADK-5/6-Widerspruch, Tunguska + Epoche) · fehlende Figuren-Seiten Professor van Dusen, Inspector Cross, Eva, Quentin · [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] listet Killjoy in keiner Tabelle · 38 Stubs, `status: final` weiterhin nur 1×.

## [2026-09-06] ingest | Neue-Folgen-Scout: 4 neue Folgen, 6 Watchlist-Einträge

- Auftrag Christian: Ist-Stand-Inventur über alle Serien, Recherche ab der jeweils höchsten erfassten Folgennummer, gesicherte Funde vollständig einpflegen. Vault-Stand vorher: 17.08.2026.
- Rohprotokoll: [raw/notes/2026-09-06_neue-folgen-scout_september-2026.md](raw/notes/2026-09-06_neue-folgen-scout_september-2026.md) — Ist-Stand-Tabelle, Serien-Delta, Klappentexte, Sprecherlisten, Negativbefunde.
- **Ist-Stand-Abgleich:** Die Fanseite meldete am 06.09.2026 **15 Serien / 310 Episoden** gegen 301 Folgen im Vault. Vier Serien lagen vorn, elf waren deckungsgleich. **Keine neue Serie, kein neues Spin-off.**
- **Vier neue Folgen eingepflegt** (je 2+ unabhängige Quellen, `status: recherchiert`):
  - [[wiki/folgen/kapitaen-nemo-04-die-ueberlebenden-der-erebus|NEM 4 „Die Überlebenden der Erebus"]] (07.08.2026, 65 min) — schließt den Franklin-/Eismeer-Block aus NEM 3 ab; Oscar Wilde zum zweiten Mal gelistet.
  - [[wiki/folgen/tesla-09-traumgespinst|TES 9 „Traumgespinst"]] (14.08.2026, 50 min, Autorin Silke Walter) — Moriarty schickt Tesla, Crowley und Sachs nach Italien zu einer Familie, die nicht altert. **Erste Berührung der Tesla-Reihe mit dem Menschmaschinen-Motiv.**
  - [[wiki/folgen/wilde-mycroft-ungeloeste-04-das-buch-des-grauens|WMU 4 „Das Buch des Grauens"]] (18.08.2026, 51 min) — führt Professor Challenger in den Kosmos ein.
  - [[wiki/folgen/oscar-wilde-und-mycroft-holmes-59-die-spur-der-echse|OWMH 59 „Die Spur der Echse"]] (04.09.2026, 52 min, Autorin Silke Walter) — Wilde reist allein auf eine irische Insel; Sachs und Frankenstein auf seiner Fährte.
- **Sechs Watchlist-Einträge angelegt** (`veroeffentlichungsstatus: geplant`, `status: entwurf`, jeweils **Einzelquelle** = Hörspieltalk-Wiedergabe der Verlagsvorschau):
  [[wiki/folgen/irene-adler-35-bilder-des-fortschritts|IADK 35]] (18.09.), [[wiki/folgen/moriarty-27-tiefe-wasser|MOR 27]] (25.09.), [[wiki/folgen/frankenstein-28-gegen-jeden-widerstand|FRANK 28]] (25.09.), [[wiki/folgen/sherlock-holmes-24-die-strassen-der-angst|SH 24]] (25.09.), [[wiki/folgen/oscar-wilde-und-mycroft-holmes-60-tiefe-reue|OWMH 60]] (06.11.), [[wiki/folgen/irene-adler-36-die-kraft-der-illusion|IADK 36]] (27.11.). *Nachtrag: Slug und vier dieser Termine wurden noch am selben Tag korrigiert — siehe den Nachfass-Eintrag weiter unten.*
- **Fünf bis sieben weitere Titel bewusst ohne Folgenseite:** DNAPF 53 „Der verschollene Zug", FRANK 29 „Die Jahrtausendeibe" und WMU 5–8 sind nur dem Titel nach angekündigt — ohne Datum und Klappentext reicht die Datenlage nicht für ein Frontmatter nach `AGENTS.md`. Sie stehen als Vormerkung auf der jeweiligen Serienseite.
- **Inhaltlicher Kernbefund:** Der Unsterblichkeits-/Künstlicher-Mensch-Komplex ist im Herbst 2026 der reihenübergreifende Dachplot. Vier Serien arbeiten parallel daran — OWMH 59/60 (Echse als Lebensverlängerung), TES 9 (nicht alternde Familie, „Menschmaschinen"), IADK 35 (letztes [[wiki/konzepte/menorium|Menorium]] für [[wiki/figuren/eva|Eva]]) und MOR 27 (Wrack der *Santa Cecilia* nach dem Heilquellen-Stein aus MOR 25). Ein expliziter Kanon-Beleg, dass es **derselbe** Handlungsfaden ist, existiert nicht; auf den Folgenseiten steht das als Theorie, nicht als Fakt.
- **Zweiter Befund:** [[wiki/figuren/robur|Robur]] und [[wiki/figuren/killjoy|Killjoy]] halten laut IADK 35 das letzte Menorium und laut FRANK 28 die echte Dracula-Beute — sie sind damit im September 2026 die materiell stärkste Partei des Kosmos, gegen Krone **und** [[wiki/konzepte/zirkel-der-sieben|Zirkel]].
- **Korrektur einer verbreiteten Fan-These:** Reent Reins ist in OWMH 60 weiterhin als [[wiki/figuren/mycroft-holmes|Mycroft Holmes]] besetzt. Die im Sammelthread diskutierte Annahme, Mycroft verlasse die Reihe nach Folge 50, trägt in dieser Form nicht.
- **Bestätigte Altbestände:** FRANK 27 (11.09.2026) und SH 23 (09.10.2026) sind unverändert angekündigt und bleiben `geplant`.
- **Negativbefunde:** keine EAPAD 37, keine TES 10, keine NEM 5; Dracula (16 Folgen), Oscar Wilde & Irene Adler (4) und Oscar Wilde & Poe (4) bleiben abgeschlossen; die beiden „Aus den Archiven"-Linien unverändert bei 12 bzw. 10.
- **Vier offene Widersprüche für Christian:**
  1. **SH 24 vor SH 23:** Folge 24 ist für den 25.09.2026 angekündigt, Folge 23 erst für den 09.10.2026. Eine der Angaben ist falsch.
  2. **WMU 4:** offizielle Folgenseite 18.08.2026 gegen Storytel 14.08.2026 (im Repo gilt die Folgenseite). Dazu führt der Hörspieltalk-Sammelthread die ganze WMU-Reihe unter „Maritim" statt „Blitz Verlag".
  3. **MOR 27:** Datumsangaben 25.09., 28.09. und (CD) 28.08.2026 laufen auseinander; im Repo steht 25.09.2026.
  4. **SH 24 Titel:** „Die Straße der Angst" (Thread) gegen „Die Straßen der Angst" (Suchtrefferwiedergabe); im Repo steht der Singular.
- **Geändert:** 11 neue Dateien (1 Raw-Notiz, 10 Folgenseiten), 9 Serienseiten (`folgen_count`/`watchlist_count`, Folgenlisten, Watchlist-Abschnitte, offene Punkte), `index.md` (8 Serienzeilen, 10 Folgeneinträge), `app/data/folgen.json` (10 neue `folgen[]`-Einträge, `stand` auf 2026-09-06). `serien[]` unverändert — keine neue Serie. `changelog.md` unverändert — keine Schema-Änderung.

## [2026-09-06] ingest | Drei neue Datenquellen: 113 exakte Erscheinungsdaten, 221 Autorenangaben, 51 Laufzeiten
- Auftrag Christian: messbare Lückeninventur, gezielte Suche nach bisher ungenutzten Datenquellen, Schließen der harten Handelsdatenlücken.
- **Lückeninventur (vorher, 301 Folgen):** 39 Seiten ohne `erschienen`, 74 nur mit Jahreszahl (zusammen **113 von 301 = 37,5 %** ohne Volldatum) · 304 ohne `autor` · 297 ohne `sprecher` · 52 ohne `spielzeit_min` im Wiki, 46 in `folgen.json` · 16 Stubs · **0 Divergenzen** Wiki ↔ `folgen.json` (die Bereinigung vom 17.08. hält). `story_praezision: unbekannt` weiterhin 266.
- **Drei neu erschlossene Quellen**, alle maschinenlesbar und ohne Zugangsschlüssel — bewertet in [[wiki/queries/quellenlage-und-kanonkarte|Quellenlage & Kanonkarte]]:
  - **iTunes Search API, Musiksparte** (`media=music`): Erscheinungsdaten und Laufzeiten (Summe der Track-Zeiten) für **356 Folgen-Alben aus 13 Reihen**.
  - **Deezer API**: unabhängige Zweitbestätigung plus UPC/EAN.
  - **iTunes Search API, Hörbuchsparte** (`media=audiobook`): dort führt `artistName` die **Autor:in** — die einzige gefundene flächige Autorenquelle überhaupt.
  - Zusätzlich geprüft und dokumentiert: **DNB SRU** (ISBN/EAN, Verlagsfirma Timm + Wilken oHG, nur Jahresangabe) und die **JSON-LD-Blöcke der Fanseite** (`PodcastEpisode` mit `duration` — strukturierter Zugriff auf die bereits bekannte Primärquelle).
- **Geschlossene Lücken:** 113 exakte Erscheinungsdaten (davon 106 doppelt belegt) · 221 Autorenangaben (`autor` 7 → 228 von 311) · 51 Laufzeiten im Wiki, 45 in `folgen.json` · 10 umlaut-degradierte `titel:`-Felder der Fogg-Reihe korrigiert (Restposten des Umlaut-Laufs vom 17.08.: `Diamantenjaeger` → `Diamantenjäger` usw.).
- **Zwei Rohdateien angelegt** unter `raw/maritim/` (Apple Music, Deezer) plus eine dritte für die Autorenangaben; alle geänderten Folgenseiten führen die Quelle im `quellen:`-Block und nennen Quelle und Abrufdatum im Eckdaten-Abschnitt.
- **Wichtigster Vorbehalt, Entscheidung offen:** Das Apple-Datum ist das **digitale** Veröffentlichungsdatum. Gegenprobe an 135 Folgen mit bereits belegtem Handelstermin: **101 identisch, 34 abweichend** (−77 bis +77 Tage), Verteilung ungleich (`irene-adler` 32/32, `oscar-wilde-und-mycroft-holmes` nur 28/55). Das Feld `erschienen` mischt damit zwei Ereignisarten. Für alle 74 zuvor jahresgenauen Folgen stimmt immerhin das **Jahr** mit der bisherigen Quelle überein.
- **Autorenangaben sind Einzelquelle:** Die offizielle Fanseite nennt keine Autor:innen, eine Gegenprobe war nicht möglich. Wo der Vault bereits eine Angabe hatte (3 Fälle), stimmt Apple Books überein. Verteilung: Marc Freund 72, Silke Walter 56, Markus Duschek 32, Jonas Maas 29, Markus Topf & Dominik Ahrens 13, Marc-Oliver Bischoff 9, Hajo Bremer 8, Henner Hildebrandt & Thomas Balfour 2.
- **Neuer Quellen-Fallstrick dokumentiert:** Ungefiltert überschreibt die Parallellinie „Aus den Archiven" die Hauptreihe — „Aus den Archiven, Folge 12: Die Klinik-Morde" (20.11.2020) hätte EAPAD 12 „In den Katakomben lauert der Tod" (29.01.2021) verdrängt. Gleiches Muster bei `Reloaded` und `In 80 Tagen um die Welt`.
- **Widerspruch, ungelöst:** DNAPF 36 „Der letzte Tag auf Erden" — Vault 58 min gegen 67,7 min Track-Summe. Einziger Ausreißer unter 220 Vergleichswerten, nicht geändert.
- **Codex:** Lückenmatrix und Divergenzreport (read-only) sowie der Frontmatter-Massen-Edit über 130 Folgenseiten (113 Daten, 10 Titel, 51 Laufzeiten) delegiert und gegengeprüft — 0 Abweichungen. Ein zweiter Codex-Auftrag (Quellenblöcke und Eckdaten-Zeilen) blieb nach 20 Minuten ohne Ergebnis, wurde abgebrochen und selbst erledigt.
- **Sprecher:innen bleiben die große Lücke:** 301 von 311 Seiten ohne `sprecher`. Keine der geprüften Schnittstellen liefert Sprecherlisten; dafür gibt es weiterhin nur Händler-Detailseiten einzeln.
- **Geändert:** 3 neue Rohdateien, 229 Folgenseiten, `app/data/folgen.json` (nur `erschienen`, `titel`, `spielzeit_min` in 133 Einträgen — `autor` bewusst **nicht** in die JSON übernommen, das Feld gehört nicht zum `folgen[]`-Schema), `wiki/queries/quellenlage-und-kanonkarte.md`, `index.md` (3 Quellenzeilen). Kein Schema-Feld neu, `changelog.md` unverändert.

## [2026-09-06] lint | Nachfass: fünf Widersprüche über Plattform-APIs aufgelöst

- Auftrag Christian: für jeden der fünf gemeldeten Widersprüche eine dritte, unabhängige Quelle beibringen, damit ein 2:1-Verhältnis entsteht.
- Protokoll: [raw/notes/2026-09-06_neue-folgen-scout_nachfass-widersprueche.md](raw/notes/2026-09-06_neue-folgen-scout_nachfass-widersprueche.md).
- **Neu genutzter Quellentyp:** Handels-Plattform-APIs — iTunes Search/Lookup API (Storefront DE) und Deezer API (`release_date` plus UPC/EAN). Das sind Auslieferungsmetadaten, keine Fanseiten-Kopien. Zwei der Serien-Dumps lagen bereits als `raw/maritim/2026-09-06_apple-music-itunes-api_*` und `*_deezer-api_*` im Repo (parallele Erhebung des quellen-scout).
- **Ergebnis pro Punkt:**
  1. **SH 24 vor SH 23 → korrigiert.** SH 24 erscheint am **04.12.2026** (Apple Music, Deezer, UPC 199109387065), nicht am 25.09. SH 23 bleibt bei 09.10.2026. Der Reihenfolgewiderspruch ist damit vollständig aufgelöst.
  2. **WMU 4 → korrigiert** auf **14.08.2026** (Storytel, Apple Music, Deezer/UPC 4071498541159 gegen die Fanseite mit 18.08.). Kein CD-/Download-Split — alle drei Angaben betreffen die Digitalausgabe.
  3. **MOR 27 → bestätigt.** Apple Music nennt den 25.09.2026. Die vermeintliche dritte Angabe „28.09.2026" war ein Lesefehler beim ersten Abruf der Forenseite. Die 28.08.2026 ist das CD-Datum — sauberer **Formatsplit**, kein Widerspruch; `erschienen` führt nach Konvention das Download-Datum, das CD-Datum steht als Anmerkung.
  4. **SH-24-Titel → korrigiert** auf **„Die Straßen der Angst"** (Plural; Apple Music und Deezer gegen den Forum-Threadtitel). Slug umbenannt: `sherlock-holmes-24-die-strasse-der-angst` → `sherlock-holmes-24-die-strassen-der-angst`, `id` und `wiki`-Pfad in `folgen.json` nachgezogen.
  5. **IADK 35 → korrigiert** auf **02.10.2026** (Apple Music, Deezer/UPC 199109376625 gegen die Forenangabe 18.09.).
- **Zwei Zusatzfunde bei derselben Gegenprüfung:** OWMH 60 von 06.11. auf **30.10.2026** und FRANK 28 von 25.09. auf **13.11.2026** korrigiert (jeweils Apple Music und Deezer übereinstimmend).
- **Muster, das daraus folgt:** Die Termine in den Hörspieltalk-Ankündigungsthreads sind für die Herbst-2026-Staffel durchgängig zu früh (SH 24 −70 Tage, FRANK 28 −49, IADK 35 −14, OWMH 60 −7). Titel, Klappentext und Besetzung von dort sind belastbar, die **Datumsangaben nicht**. Vorschlag zur Aufnahme in [[wiki/queries/quellenlage-und-kanonkarte|Quellenlage & Kanonkarte]] — noch nicht eingetragen, Entscheidung liegt bei Christian.
- **Unverändert bestätigt:** OWMH 59 (04.09.), NEM 4 (07.08.), TES 9 (14.08., UPC 4071498747377), IADK 36 (27.11.), FRANK 27 (11.09.), SH 23 (09.10.).
- **`status` angehoben:** Alle sechs Watchlist-Seiten von `entwurf` auf `recherchiert` — sie haben jetzt jeweils mindestens zwei unabhängige Quellen. Die Einzelquellen-Warnbausteine auf den Seiten wurden entsprechend ersetzt.
- **Weiterhin offen:** Verlagszuordnung der WMU-Reihe (Hörspieltalk „Maritim" gegen Storytel/Deezer „Blitz"; die Deezer-UPC liegt im selben Nummernkreis wie Tesla 9 und stützt Blitz, ist aber kein Verlagsdokument) · Spielzeit OWMH 59 (Fanseite 52 min, Audiolibrix 51 min).
- **Methodischer Vorbehalt, festgehalten:** Apple Music und Deezer werden vom selben Distributor beliefert. Gegenüber Fanseite und Forum sind sie unabhängig, untereinander nur eingeschränkt. Als drei getrennte Belege sind sie nicht zu zählen.
- **Geändert:** 1 neue Raw-Notiz · 9 Folgenseiten (1 davon unter neuem Slug, alte Datei entfernt) · 6 Serienseiten · `index.md` (6 Stellen) · `app/data/folgen.json` (13 punktuelle Ersetzungen, keine neuen Einträge).

## [2026-09-06] meta | Entscheidungen zu `erschienen` und `autor`, Granularitätsregel festgehalten
- **`erschienen` bleibt gemischt (Entscheidung Christian).** Kein neues Feld, keine Rücknahme der 113 digitalen Veröffentlichungsdaten. Begründung: Das Feld dient nicht der Handelsdokumentation, sondern als Indiz für Timeline und Handlungsverläufe zwischen Serien.
- **Regressionsprüfung gegen den Stand vor dem Lauf:** 114 Einträge in `folgen.json` neu datiert — 73 vorher jahresgenau, 41 ohne Datum, **0 bereits tagesgenaue Werte überschrieben**.
- **Granularitätsregel neu in [[wiki/queries/quellenlage-und-kanonkarte|Quellenlage & Kanonkarte]]:** Belastbar ist die Zuordnung zum Release-Block, nicht die tagesgenaue Reihenfolge zwischen Serien. Von 141 tagesgenau neu datierten Folgen liegen 118 innerhalb einer Woche neben einer serienfremden Folge; die Abstände häufen sich auf 0 und 7 Tage (Maritims Veröffentlichungstakt, z. B. DNAPF 19 / OWMH 20 beide am 29.03.2019).
- **`autor` bleibt Einzelquelle (Entscheidung Christian).** Die 221 Werte aus der iTunes-Hörbuchsparte bleiben stehen, das Feld ist nachrangig; keine weitere Recherche, keine Aussagen darauf stützen.
- **App geprüft, kein Handlungsbedarf:** `compareFolgen` in `app/app.js` sortiert bei gleichem Datum deterministisch nach `serie` und `nummer`.
- **Nachtrag:** Hörspieltalk-Forum als Quelle in der Kanonkarte bewertet — Titel/Klappentext/Besetzung belastbar, **Termine nicht** (Herbst-2026-Staffel durchgängig zu früh, bis −70 Tage). Regel: Titel und Inhalt übernehmen, Termine nur mit Plattformbeleg.

## [2026-09-06] ingest | SHC-Folgen: 7 neue Seiten, 26/27 aufgeteilt, alle 97 Folgen geprüft

- Auftrag Christian: Ingest der freigegebenen SHC-Folgen auf Grundlage der Kanonprüfung des quellen-scout. Das dort formulierte Aufnahmekriterium (A) Figuren-Schaltpunkt / (B) Kanon-Ereignis / (C) Grundstein mit den zwei Ausschlüssen war verbindlich.
- Neue Belegnotiz: [raw/notes/2026-09-06_shc-ingest_klappentexte-und-kanonpruefung.md](raw/notes/2026-09-06_shc-ingest_klappentexte-und-kanonpruefung.md) — Klappentexte aller sechs zuvor unklaren Folgen, Prüfprotokoll, Killroy-Nachrecherche.

### Neu angelegt (7 Folgenseiten, alle mit `folgen.json`-Eintrag)

| Folge | Titel | erschienen | Merkmal |
|---|---|---|---|
| SHC 41 | Das Verschwinden der Louise M., Episode 1 | 12.10.2018 | (B) Auftritt [[wiki/figuren/phileas-fogg\|Phileas Fogg]] |
| SHC 42 | Das Verschwinden der Louise M., Episode 2 | 23.11.2018 | (B), gemeinsamer Klappentext mit Teil 1 |
| **SHC 58** | **Unheilvolle Beute** | 29.01.2021 | **(B) Zirkel der Sieben wörtlich im Klappentext** |
| SHC 64 | Puppenspieler | 24.09.2021 | (B) Zirkel der Sieben wörtlich im Klappentext |
| SHC 68 | Der kalte Hauch der Rache | 22.07.2022 | (B) Wendepunkt für [[wiki/figuren/geoffrey-stafford\|Geoffrey Stafford]] |
| SHC 26 | Der Schrei der Banshee, Episode 1 | 02.09.2016 | (B), aus der Sammelseite herausgelöst |
| SHC 27 | Der Schrei der Banshee, Episode 2 | 02.09.2016 | (B), aus der Sammelseite herausgelöst |

- **SHC 58 ist ein Neufund über den Auftrag hinaus.** Die Folge war als „unklar" eingestuft, weil kein Klappentext vorlag. Die Nachrecherche hat ihn beigebracht — er nennt den [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] ausdrücklich als Interessenten an der Fracht des überfallenen Zuges. Zusammen mit SHC 64 sind das die **einzigen zwei Klappentexte der 97-Folgen-Reihe**, die den Zirkel beim Namen nennen.
- **SHC 26/27 aufgeteilt.** Die Sammelseite `sherlock-holmes-und-co-26-27-der-schrei-der-banshee` wurde entfernt und durch zwei Seiten mit `nummer: 26` und `nummer: 27` ersetzt, je mit eigenem JSON-Eintrag. Alle vier Quellen führen zwei getrennte Folgen (eigene Alben, eigene DNB-Sätze, Archiv-Nummern SH 6 und SH 7). Verweise nachgezogen in `index.md`, `wiki/figuren/sherlock-holmes.md` und der Konzeptseite. Dieselbe Zählweise auf 41/42 angewandt.
- **Was sich nicht auflösen ließ:** Beide Zweiteiler tragen in allen Quellen **einen gemeinsamen Klappentext**. Welcher Handlungsabschnitt zu welchem Teil gehört — und bei 41/42, in welchem Teil Phileas Fogg auftritt — ist aus keiner Quelle ableitbar. Auf allen vier Seiten ausdrücklich als offen markiert.

### Alle sechs unklaren Scotland-Yard-Folgen aufgelöst

Das Fandom war am 06.09.2026 nicht erreichbar (HTTP 402, auch über die MediaWiki-API). Ausgewichen auf Händler- und Streaming-Detailseiten, die den Verlagsklappentext übernehmen — jeder Text in mindestens zwei unabhängigen Listings gefunden.

- **58 aufgenommen** (siehe oben). **72, 76, 80, 84, 88 geprüft und verworfen**, mit Klappentext und Begründung in der Konzeptseite dokumentiert. Damit bleibt im Strang **kein Fall „unklar"**.
- **Wichtigster Negativbefund: SHC 88 „Der Gast aus den Karpaten".** Die Folge hatte Vorrang, weil der Titel einen Bezug zum Karpaten-Arc in [[wiki/folgen/frankenstein-26-doppelte-tarnung|FRANK 26]] / [[wiki/folgen/frankenstein-27-finsteres-erbe|FRANK 27]] nahelegte. Der Klappentext **widerlegt** das: Der Vampir-Antagonist heißt **Baron Meinster** — eine Figur aus dem Hammer-Film-Umfeld, nicht [[wiki/figuren/dracula|Dracula]], und keine Figur des Kosmos. Weder Dracula noch der Zirkel werden genannt. „Karpaten" ist hier Genre-Topos, kein Kanon-Anschluss. Das ist ein belegtes Nein statt eines offenen Punkts.
- **Knappster Fall war SHC 76 „Ein lebender Köder":** Mycroft Holmes ist dort handlungstragend (er lenkt Stafford in eine Falle), fällt aber unter Ausschluss 2 — Mycroft ist Reihenpersonal des Scotland-Yard-Strangs, kein Übertritt in den Kosmos. Ohne Zirkel-Bezug reicht das nicht.

### Doppelführung SHC 45 ↔ IADK 0 und SHC 55 ↔ MOR 00

- Entscheidung Christian: beide SHC-Seiten **behalten** als Erstveröffentlichung. Auf allen vier Seiten steht jetzt ein gegenseitiger Wikilink mit Rollenzuweisung (Erst- oder Wiederveröffentlichung) und dem DNB-Beleg aus der Kanonprüfung.
- **Angeglichen:** `zirkel` von SHC 55 von `direkt` auf **`indirekt`**. Begründung: Das `direkt` war auf der SHC-Seite unbelegt, während MOR 00 einen Klappentext trägt, der den Zirkel nicht nennt — dieselbe Zurückhaltung wie bei der Rücknahme auf [[wiki/folgen/sherlock-holmes-und-co-53-die-rueckkehr-der-angst|SHC 53]]. Ebenso `spoiler_level` bei SHC 45 und SHC 55 von `stub` auf **`grob`** (die Nullnummern führen `grob`, und es ist dieselbe Aufnahme). `status` beider SHC-Seiten von `stub` auf `entwurf`.
- `erschienen` bleibt bei allen vier Seiten das jeweils eigene Datum — das ist der Zweck der Doppelführung.
- Auf der Konzeptseite ist die Doppelführung als **bewusste Entscheidung samt Synchronisationspflicht** festgehalten, mit dem ausdrücklichen Hinweis, dass ein späterer Lint-Lauf sie nicht als Dublette zusammenlegen darf. Damit ist der im Lint vom 17.08.2026 notierte Widerspruch SHC 55 ↔ MOR 00 erledigt.

### Archiv-Mapping gefüllt

- **`wiki/serien/sherlock-holmes.md`:** Archiv 1–10 = SHC 11, 15, 19, 19, 22, 26, 27, 31, 32, 51. Die **Doppelvergabe von SHC 19** (Archiv 3 und 4, „Eine Stadt in Angst" Teil 1 und 2) ist **nicht geglättet**, sondern als offener Punkt markiert: Die Folgenliste der Rohdatei führt für SHC 19 nur einen Titel. Entweder fehlt dort die Nummer des zweiten Teils, oder eine SHC-Folge wurde für die Archivlinie auf zwei Veröffentlichungen aufgeteilt. Zu klären.
- **`wiki/serien/poe-und-dupin.md`:** Archiv 1–12 = SHC 12, 14, 16, 17, 20, 23, 25, 28, 30, 33, 35, 39 — das sind exakt die zwölf Dupin-Folgen, die Auslagerung ist lückenlos, keine Doppelvergabe.
- Auf beiden Seiten steht jetzt der Hinweis, dass eine Wiederveröffentlichung nach Ausschluss 1 **keine** eigene Folgenseite begründet.

### Nebenbefund „Mister Killroy" — weiterhin Einzelquelle

- Gesucht wurde eine zweite Quelle für die **Rollenbezeichnung** in SHC 45. Geprüft: Audioteka, BookBeat, jpc, Apple Books, Amazon, Audiolibrix, pop.de (alle nur Sprechernamen ohne Rollen), Rezension buchtips.net (nennt weder „Killroy" noch „Killjoy"), Fandom (nicht erreichbar). **Keine zweite Quelle gefunden.**
- Dass `Matti Klemm` in den DNB-Sprecherlisten von SHC 45 **und** IADK 0 steht, ist kein zweiter Beleg — beide sind dieselbe Aufnahme.
- Auf [[wiki/figuren/killjoy|killjoy.md]] als ausdrücklich **markierte Einzelquelle** eingetragen, in einem eigenen Abschnitt vor der Auftrittstabelle. Der Erstauftritt bleibt bei [[wiki/folgen/irene-adler-01-tod-im-oberhaus|IADK 1]] (14.06.2019).

### Nicht angefasst

`wiki/folgen/sherlock-holmes-und-co-53-die-rueckkehr-der-angst.md` samt JSON-Eintrag und `wiki/queries/quellenlage-und-kanonkarte.md` — beide auf Anweisung ausgespart.

### Geändert

7 neue Folgenseiten · 1 alte Sammelseite entfernt · 1 neue Raw-Notiz · 6 bestehende Folgenseiten (SHC 45, SHC 55, IADK 0, MOR 00 für die Doppelführung; dazu die beiden Banshee-Nachfolger) · `wiki/konzepte/sherlock-holmes-und-co.md` (Schaltpunkte, Kriteriums-Ergebnis, verworfene Fälle, Doppelführung, vier offene Fragen aktualisiert, `status` auf `recherchiert`) · `wiki/serien/sherlock-holmes.md` und `wiki/serien/poe-und-dupin.md` (Archiv-Mapping) · `wiki/figuren/sherlock-holmes.md` (alter Slug) · `wiki/figuren/killjoy.md` · `index.md` (1 Zeile → 7) · `app/data/folgen.json` (1 Eintrag entfernt, 7 angelegt, 4 angeglichen). `changelog.md` unverändert — keine Schema-Änderung.

## [2026-09-06] lint | Schlusscheck nach vier Agent-Läufen
- Report: [[wiki/queries/lint-2026-09-06|Lint / Health-Check 2026-09-06]], in `index.md` als aktueller Bericht eingetragen.
- **Strukturell sauber:** 317 Folgen / 14 Serien, 0 doppelte `id`, 317 Wiki-Folgenseiten deckungsgleich mit der JSON, **0 Divergenzen** in `titel`/`erschienen`/`nummer`/`serie`/`zirkel`/`spoiler_level`, alle 13 Serienzählungen (`folgen_count` + `watchlist_count`) korrekt.
- **1 defekter Wikilink** (`viktor-frankenstein` im historischen Lint-Report von 2026-04-30) — als Zeitdokument bewusst nicht korrigiert. **1 verwaiste Seite** (`Willkommen.md`, Einstiegsseite, erwartbar).
- **35 Stubs** (21 Figuren, 13 Folgen, 1 Konzept), Bestand gegenüber April unverändert.
- **Grösste verbliebene Lücke:** Sprecher:innen fehlen auf 301 von 317 Folgenseiten; keine maschinenlesbare Quelle gefunden.
- Methodisch festgehalten: Ein Prüfskript muss escapte Pipes (`\|`) in Tabellen und die Vault-Wurzeldateien als gültige Linkziele berücksichtigen, sonst meldet es hunderte falsche Treffer.

## [2026-10-03] ingest | Neue-Folgen-Scout Oktober: 3 Folgen erschienen, 3 neue Vormerkungen
- Recherche seit dem Stand 06.09.2026: Fanseite (Serienübersicht, Schlagzeilen, Folgenseiten), HolyShop-Releaseliste, Apple Music/iTunes API, Deezer API, Hörspieltalk-Board „Maritim“. Belege: [raw/notes/2026-10-03_neue-folgen-scout_oktober-2026.md](raw/notes/2026-10-03_neue-folgen-scout_oktober-2026.md), [raw/maritim/2026-10-03_sonderermittler-der-krone_de_holyshop_folgen-sept-okt-2026.md](raw/maritim/2026-10-03_sonderermittler-der-krone_de_holyshop_folgen-sept-okt-2026.md).
- **Watchlist → erschienen:** [[wiki/folgen/frankenstein-27-finsteres-erbe|FRANK 27]] (11.09.), [[wiki/folgen/moriarty-27-tiefe-wasser|MOR 27]] (25.09.), [[wiki/folgen/irene-adler-35-bilder-des-fortschritts|IADK 35]] (02.10.) — jeweils Fanseite, Apple Music und Deezer übereinstimmend, MOR 27 und IADK 35 zusätzlich HolyShop. `veroeffentlichungsstatus` entfernt, FRANK 27 von `entwurf` auf `recherchiert`; die Daten waren bereits korrekt, keine Datumsänderung. Klappentexte gegen die offiziellen Folgenseiten geprüft — keine Abweichung.
- **Neue Watchlist-Seiten:** [[wiki/folgen/kapitaen-nemo-05-kopfgeld|NEM 5 „Kopfgeld“]] (09.10.2026, Apple Music + Hörspieltalk, `recherchiert`), [[wiki/folgen/wilde-mycroft-ungeloeste-05-kalt-wie-eis|WMU 5 „Kalt wie Eis“]] (16.10.2026, Termin nur Apple Music, Titel/Inhalt zusätzlich Hörspieltalk, `recherchiert`), [[wiki/folgen/phileas-fogg-53-der-verschollene-zug|DNAPF 53 „Der verschollene Zug“]] (**Einzelquelle** Hörspieltalk, `entwurf`, `erschienen: 2026-10-16` — Forentermin, noch durch keine Plattform gedeckt, auf Christians Entscheidung übernommen).
- **Serienzählungen:** FRANK 27+1, MOR 28 (`watchlist_count` entfernt), IADK 36+1, DNAPF 52+1, NEM 4+1, WMU 4+1.
- **Nur Titel, keine Seiten:** FRANK 29 und 31–36 (Threads vom 15.07.2026, ohne Klappentext und Termin; für Folge 30 kein Thread) auf der Serienseite vorgemerkt. WMU 6–8 unverändert.
- **Nicht aufgenommen:** „Die Protokolle des Gideon Blake“ — neue Maritim-Reihe ohne erkennbaren Bezug zum Kosmos.
- **Negativbefunde:** keine neuen Folgen bei Poe & Dupin, Tesla, Dracula, WIA, WPO, OWMH (61), IADK (37), SH (25), MOR (28).
- **Geändert:** 2 neue Raw-Dateien · 3 neue und 3 aktualisierte Folgenseiten · 6 Serienseiten · `index.md` · `app/data/folgen.json` (3 Einträge neu, 3 angepasst, `stand` 2026-10-03; jetzt 320 Folgen). `changelog.md` unverändert — keine Schema-Änderung.

## [2026-10-12] ingest | Neue-Folgen-Scout Oktober-Nachtrag: SH 23 und NEM 5 erschienen, Watchlist gegengeprüft
- Recherche seit dem Stand 03.10.2026: Fanseite (alle 15 Reihenseiten, Schlagzeilen, zwei Folgenseiten), HolyShop-Releaseliste und fünf Produktseiten, Apple Music/iTunes API (Musik- und Hörbuchsparte), Deezer API, DNB SRU, Hörspieltalk-Board „Maritim" (12 Sammel-, 9 Einzelthreads inkl. Screenshot-Anhänge von Verlagsbeiträgen). Belege: [raw/notes/2026-10-12_neue-folgen-scout_oktober-2026-nachtrag.md](raw/notes/2026-10-12_neue-folgen-scout_oktober-2026-nachtrag.md), [raw/maritim/2026-10-12_sonderermittler-der-krone_de_holyshop_dnb_folgen-okt-dez-2026.md](raw/maritim/2026-10-12_sonderermittler-der-krone_de_holyshop_dnb_folgen-okt-dez-2026.md).
- **Watchlist → erschienen:** [[wiki/folgen/sherlock-holmes-23-der-wiedergaenger-von-soho|SH 23]] (09.10.2026; HolyShop, Apple Music, Deezer, Verlags-„Out now!") und [[wiki/folgen/kapitaen-nemo-05-kopfgeld|NEM 5]] (09.10.2026; Fanseite, Apple Music, Deezer mit Label Blitz Verlag). `veroeffentlichungsstatus` und Tag `watchlist` entfernt; SH 23 von `entwurf` auf `recherchiert`. Datum jeweils unverändert. Klappentexte gegen die offiziellen Folgenseiten geprüft — NEM 5 wortgleich; bei SH 23 hatte der Vault „Father Allison" und „Geist" paraphrasiert, offiziell heißt es **Pater** Allison und **Wiedergänger** (Folgenseite, [[wiki/figuren/allison|allison.md]], [[wiki/figuren/kirk|kirk.md]], Index und JSON-Logline angeglichen; „Father Allison" bleibt Alias).
- **SH 23 neu belegt:** Autorin **Silke Walter** (Apple Books und DNB), Sprecher Holmes Charles Rettinghaus (DNB), [[wiki/figuren/theodora-sachs|Theodora Sachs]] auf der Fanseite gelistet (Figurenseite ergänzt).
- **Neuer Datenfehler der Fanseite:** Die SH-23-Folgenseite nennt **10.09.2026** statt 09.10.2026 — gegen HolyShop, Apple, Deezer und die eigene Schlagzeile. In [[wiki/queries/quellenlage-und-kanonkarte|Quellenlage & Kanonkarte]] als neues Fehlermuster (Tag/Monat-Dreher) eingetragen.
- **Watchlist aktualisiert:** [[wiki/folgen/wilde-mycroft-ungeloeste-05-kalt-wie-eis|WMU 5]] — Termin 16.10.2026 jetzt durch die Verlagsankündigung von Highscore Music („Am Freitag geht's los…", 12.10.2026, `#blitzverlag`) zweifach belegt; stützt zugleich die Verlagszuordnung Blitz. [[wiki/folgen/phileas-fogg-53-der-verschollene-zug|DNAPF 53]] — DNB führt die CD (ISBN 978-3-86212-866-2), Titel/Nummer damit doppelt belegt; der Termin bleibt Einzelquelle, `status: entwurf` unverändert. OWMH 60, FRANK 28, IADK 36, SH 24 durch HolyShop-Produktseiten bestätigt; **neue Laufzeiten** FRANK 28 = 54 min, SH 24 = 58 min (HolyShop + Apple-Trackssumme).
- **Entscheidungen Christian (12.10.2026):** DNAPF 53 behält `erschienen: 2026-10-16` trotz fehlender Plattformbelege. WMU-Verlagszuordnung **Blitz Verlag** festgeschrieben (Serienseite, WMU 4, WMU 5, Kanonkarte); `folgen.json` führte bereits `Blitz`. Die 1-Minuten-Abweichungen bei `spielzeit_min` (OWMH 1, 2, EAPAD 3, 10, 20, WPO 1, 2, 4) bleiben für den nächsten Lint.
- **Neu vorgemerkt (nur Titel, Einzelquelle):** DNAPF 54 „Verschwörung in Konstantinopel" (Hörspieltalk-Sammelthread, 31.12.2025) auf der [[wiki/serien/phileas-fogg|Serienseite]].
- **Nebenbefund:** YouTube-Komplettfolgen laut Fanseiten-Schlagzeilen bei [[wiki/folgen/sherlock-holmes-05-toedliche-rituale|SH 5]] (03.10.2026), [[wiki/folgen/moriarty-07-dunkle-geheimnisse|MOR 7]] (25.07.2026) und [[wiki/folgen/dracula-08-der-atem-des-todes|DRAC 8]] (19.07.2026) nachgetragen.
- **Serienzählungen:** SH 22+2 → 23+1, NEM 4+1 → 5 (`watchlist_count` entfernt). Übrige unverändert.
- **Negativbefunde:** keine neuen Folgen oder Ankündigungen bei Poe & Dupin (37), Tesla (10), Dracula, WIA, WPO, Moriarty (28), OWMH (61), Irene Adler (37), Sherlock Holmes (25), Kapitän Nemo (6); Frankenstein 29 ff. und WMU 6–8 unverändert nur Titel. Holysoft-Werkeliste geprüft — führt nur Holysoft-Eigenproduktionen, nicht einschlägig.
- **Geändert:** 2 neue Raw-Dateien · 11 Folgenseiten (2 erschienen, 6 Watchlist, 3 YouTube-Nachträge) · 5 Serienseiten · 6 Figurenseiten · `wiki/queries/quellenlage-und-kanonkarte.md` · `wiki/universum.md` (nur der veraltete Watchlist-Kasten) · `index.md` · `app/data/folgen.json` (6 Einträge angepasst, davon 2 mit neuem `spielzeit_min`; keine neuen Einträge; `stand` 2026-10-12; weiterhin 320 Folgen). `serien[]` und `changelog.md` unverändert — keine neue Serie, keine Schema-Änderung.

## [2026-10-12] lint | Voller Health-Check nach drei Folgen-Scouts: Index-Daten, Laufzeiten, Universum-Zählung
- Bericht: [[wiki/queries/lint-2026-10-12|Lint / Health-Check 2026-10-12]], in `index.md` als aktueller Bericht eingetragen. Scan über 407 Vault-Seiten plus Vollabgleich mit `app/data/folgen.json` (320 Folgen / 14 Serien) und erstmals auch Laufzeiten gegen die `raw/`-Folgenlisten, Index-Zeilen gegen das Frontmatter und Markdown-Links auf `raw/`.
- **Strukturell sauber:** 0 doppelte `id`, 0 fehlende Pflichtfelder, 0 falsche `wiki`-Pfade, 0 Divergenzen in `titel`/`erschienen`/`nummer`/`serie`/`zirkel`/`spoiler_level`, 13/13 Serienzählungen korrekt, keine veralteten Watchlist-Marker, 0 Folgen ohne Figuren, 0 Serien ohne Folgenliste.
- **`spielzeit_min` geklärt:** Die acht zurückgestellten 1-Minuten-Abweichungen (OWMH 1, 2, EAPAD 3, 10, 20, WPO 1, 2, 4) und sieben weitere, bei denen Wiki und JSON gemeinsam falsch waren (EAPAD 5, 7, 8, 14, 17, 18, 19), gehen alle auf die Apple-Trackssumme vom 06.09. zurück, die durchweg 1 min über dem in `raw/` belegten Fanseitenwert liegt (vermutlich Rundung, Annahme). Auf den `raw/`-Wert angeglichen, der bereits im Eckdaten-Text der Seiten stand: 13 Frontmatter-, 9 JSON-Werte. Jetzt 268/268 Folgen mit Rohdatenwert konsistent. Regel in der Kanonkarte festgehalten.
- **Index:** 153 Folgenzeilen auf das `erschienen` der Folgenseite gebracht — darunter **56 falsche Jahre** (EAPAD 5–34, DRAC 3–14, FRANK 3–23 in Teilen), 57 reine Jahresangaben, 2 ohne Datum, 38 ISO-Formate.
- **Weitere Korrekturen:** 79 Datumszellen in fünf Serien-Folgenlisten · 4 defekte `raw/`-Links auf WPO 1–4 (eine Ebene zu viel) · `universum.md`-Zähltabelle vom Stand 17.08. auf 12.10.2026 (303 + 22 Re-Release = 325 Folgen, 6 Vormerkungen) · `Loechel` → `Löchel` (DNAPF 21, durch `raw/` belegt) · OWMH 3 und WPO 1–4 seiteninterne Datumsangaben.
- **Offen, Rückfragen an Christian:** 25 `Zirkel`-Abweichungen zwischen Serientabelle und Folgenseite (OWMH 11–56 in Teilen, EAPAD 16–34, SH 3) · Bestätigung der Laufzeitregel gegen den Kanonkarten-Merksatz · `story_praezision: "geschaetzt"` undokumentiert · Altfelder `spielzeit`, `in_universe_jahr`, `re_release_count` · Figurenseite Professor Challenger. Aus den Vorgängern unverändert offen: DNAPF 36, SHC 19, Zweiteiler-Klappentexte, Killroy, Sapriel, `Dr. Duerte`, IADK 5/6, Tunguska, 35 Stubs, Sprecher (304 von 320 ohne), Zeitachse (284 von 320 `unbekannt`).
- **Geändert:** 1 neuer Bericht · 16 Folgenseiten · 5 Serienseiten · `wiki/universum.md` · `wiki/queries/quellenlage-und-kanonkarte.md` · `index.md` · `app/data/folgen.json` (9 × `spielzeit_min`, keine neuen Einträge). `raw/`, `serien[]` und `changelog.md` unverändert — keine Schema-Änderung.

## [2026-10-12] lint | Nachtrag: Entscheidungen zu Zirkel, Schema 1.1.1, Altfeldern und Professor Challenger
- Auftrag Christian nach Commit f02a475: Laufzeitregel „Fanseite vor Apple-Trackssumme" bestätigt; die Fragen aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]] nach der Linie „belegter Befund vor Tabelle, kein Beleg → `unklar`" abarbeiten. Details und Begründung je Folge im Abschnitt „Nachtrag: Entscheidungen" des Berichts.
- **Kanonkarte:** Merksatz angepasst — Streaming-APIs führen beim Datum, bei der Laufzeit der in `raw/` belegte Fanseitenwert.
- **`zirkel` (25 Folgen) gegen `raw/` geprüft:** OWMH 11, 12, 30, 31, 34, 35, 46, 54, 55, 56 → `direkt` (Zirkel in der Paraphrase der offiziellen Folgenseite ausdrücklich genannt); OWMH 38 bleibt `unklar` („kein direkter Zirkelname"); EAPAD 16, 18, 19, 20, 25–29 → `unklar`, 30–34 bleiben `unklar` (weder Klappentext noch Figurenliste nennen Zirkel oder Mitglied, die Sammelaussage „Folgen 14–34 mit Zirkel-Bezug" ist nicht folgenspezifisch); SH 3 `kein` → `unklar` (kein belegtes Nein). 20 JSON-Einträge, 15 Tabellenzellen; 0 Abweichungen Serientabelle ↔ Folgenseite.
- **Schema 1.1.1:** `story_praezision: "geschaetzt"` in `CLAUDE.md` §9, `AGENTS.md`, `app/README.md` dokumentiert, `schema_version` in `folgen.json` und Doku angehoben, `changelog.md`-Eintrag. App zeigt `geschaetzt` wie `jahr` (korrekt sortiert, aber ohne Kennzeichnung) — nur gemeldet, kein Code geändert.
- **Altfelder:** `spielzeit` (WPO 1–4) und `in_universe_jahr` (OWMH 1, 2) entfernt, Inhalt in `spielzeit_min` bzw. `story_jahr`/„Setting / Zeit" abgedeckt; `re_release_count` (Poe & Dupin 12, Sherlock Holmes 10) als korrektes Serienfeld in `CLAUDE.md` §3 und `AGENTS.md` dokumentiert.
- **Neue Figurenseite** [[wiki/figuren/professor-challenger|Professor Challenger]] (`entwurf`): DNAPF 39–44 und WMU 4, Erwähnungen verlinkt, Index ergänzt. Dabei die falsche Angabe auf WMU 4 („erste Nennung im Repo") berichtigt.
- **Geändert:** 1 neue Figurenseite · 39 Folgenseiten · 3 Serienseiten · `figuren/phileas-fogg.md` · Kanonkarte · Lint-Bericht · `index.md` · `app/data/folgen.json` (20 × `zirkel`, `schema_version`) · `CLAUDE.md`, `AGENTS.md`, `app/README.md`, `changelog.md`. `raw/` unverändert.

## [2026-10-12] ingest | Abel Hawthorn: Identität OWMH ↔ DNAPF-Afrika-Block geprüft, Auftritte ergänzt
- Auftrag Christian (offener Punkt aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag): Ist der „Abel Hawthorn“ aus DNAPF 40 derselbe wie in OWMH 2? Web-Recherche ausdrücklich beauftragt. Beleg: [raw/maritim/2026-10-12_fanseite-fandom-audible_abel-hawthorn-auftritte-und-sprecher.md](raw/maritim/2026-10-12_fanseite-fandom-audible_abel-hawthorn-auftritte-und-sprecher.md) — Volltextsuche über alle 326 Folgenseiten der Fanseite, Fandom-Besetzungstabellen OWMH 1–44 (MediaWiki-API), Audible-Sprecherlisten DNAPF 37–44 und WMU 1.
- **Ergebnis: nicht ausdrücklich belegt, aber gut gestützt — als Annahme eingetragen.** Gleicher Name (DNAPF 40), gleicher Beruf („der Jäger Hawthorn“ DNAPF 39/43, „der Großwildjäger Hawthorn“ WMU 1), und Sprecher **Jaron Löwenberg** — laut Fandom in OWMH ausschließlich Hawthorn — steht in jeder Audible-Besetzung DNAPF 39–43 und in WMU 1 (dort nur drei Sprecher); in DNAPF 37 ohne Challenger und Hawthorn fehlt er. Für DNAPF/WMU gibt es keine Besetzung mit Rollen.
- **Weitere Auftritte gefunden:** laut Fandom OWMH 5, 6, 13, 17, 19, 20, 23, 24, 25, 26 (OWMH 24 auch Klappentext, Schreibweise „Hawthorne“, jetzt Alias). DNAPF 38 und 44 nur Indizien, nicht gezählt. Nebenbefund: [[wiki/figuren/professor-challenger|Challenger]] steht schon im offiziellen Klappentext von DNAPF 38 (die Paraphrase in `raw/` vom 29.04. ließ ihn weg) — Erstbeleg von DNAPF 39 auf 38 vorgezogen.
- **Widerspruch dokumentiert:** Fandom nennt bei OWMH 5 den „ersten Auftritt“ Hawthorns, führt ihn aber schon in der eigenen Besetzung zu OWMH 2; im Vault gilt weiter OWMH 2 (Löchel + Fandom-Besetzung).
- **Kanonkarte:** Fandom-API (rollengenaue Besetzung OWMH 1–44) und Audible-Produktseiten (Sprecher ohne Rollen) neu bewertet; Merksatz Sprecher ergänzt.
- **Geändert:** 1 neue Raw-Datei · [[wiki/figuren/abel-hawthorn|Abel Hawthorn]] (`stub` → `entwurf`, 17 Auftritte, Sprecher, Aliase) · [[wiki/figuren/professor-challenger|Professor Challenger]] · `figuren/phileas-fogg.md` · 18 Folgenseiten (OWMH 2, 5, 6, 13, 17, 19, 20, 23–26 · DNAPF 38–43 · WMU 1) · Serienseite OWMH · Kanonkarte · Lint-Bericht (Offenpunkt erledigt) · `index.md`. `app/data/folgen.json` unverändert — keine der abgeglichenen Felder betroffen, 0 Divergenzen. `raw/`-Bestand und `changelog.md` unverändert.

## [2026-10-12] ingest | Audible-Datumskonflikte geklärt, HolyShop-Vollabgleich, Besetzung OWMH 45–60
- Auftrag Christian (Nachfolge der Hawthorn-Recherche, Web-Recherche beauftragt). Belege: [raw/maritim/2026-10-12_audible-holyshop-rautemedia_erscheinungsdaten-abgleich.md](raw/maritim/2026-10-12_audible-holyshop-rautemedia_erscheinungsdaten-abgleich.md) (alle Audible-Serienseiten, 281 Folgen; alle 279 HolyShop-Produktseiten; Raute Media, Apple, Deezer, DNB, Hörspieltalk) und [raw/maritim/2026-10-12_audible-hoerspieltalk-rautemedia-fanseite_owmh-45-60-besetzung.md](raw/maritim/2026-10-12_audible-hoerspieltalk-rautemedia-fanseite_owmh-45-60-besetzung.md).
- **DNAPF 42 und WMU 1:** Vault-Datum bestätigt, keine Änderung. DNAPF 42 = Ersterscheinung 18.10.2024 (HolyShop, Apple, Deezer), CD 25.10.2024, Audible 29.10.2024. WMU 1 = 23.01.2026 (Fanseite, Apple, Deezer, Verlagsvorschau), Audible 09.02.2026.
- **Audible-Muster** in die [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]: 163 von 281 gleich, 72 später (Median 24 Tage), Sammel-Nachlieferungen und Platzhalter; Audible-Datum nie für `erschienen`. Neu bewertet: HolyShop-Feld „Ersterscheinung", Raute Media (CD-Termin, volle Sprecherliste), Fanseiten-Figurenseiten (Stammsprecher), Hörspieltalk-Rollenlisten, DNB 245 $c.
- **Offen, nicht geändert:** 38 Vault-Daten widersprechen der HolyShop-Ersterscheinung (34 davon auch Apple), Schwerpunkt OWMH (Vault-Werte aus der „Repo-Timeline", OWMH 46–49 um eine Folge verschoben) und **MOR 25** (Fanseite 06.05.2026 gegen fünf Quellen für 05.06.2026, Tag/Monat-Dreher). Berührt die Entscheidung vom 06.09.2026 — Rückfrage an Christian im [[wiki/queries/lint-2026-10-12|Lint-Bericht]], Nachtrag 2.
- **Besetzung OWMH 45–60:** Rollenlisten nur für 58–60 (Hörspieltalk). OWMH 58 voll (14 Rollen), OWMH 59 um 5 Rollen ergänzt, OWMH 45–57 je 3–6 Hauptrollen **abgeleitet** (Klappentext/Fanseiten-Figurenliste + Stammsprecher der Fanseiten-Figurenseite + Sprecherliste der Folge), auf den Seiten gekennzeichnet; vollständige Namenslisten im Eckdaten-Text. Folgenseiten mit `sprecher`: 16 → 30. Gegenprüfung der Zuordnungen durch Codex (read-only): keine Abweichung.
- **[[wiki/figuren/abel-hawthorn|Abel Hawthorn]]:** in OWMH 45–60 nicht besetzt (Jaron Löwenberg in keiner Liste, kein Klappentext); Raute-Media-CD-Listen DNAPF 39/42 als weiteres Indiz ergänzt.
- **Geändert:** 2 neue Raw-Dateien · 16 Folgenseiten (OWMH 45–60) · `wiki/figuren/abel-hawthorn.md` · Kanonkarte · Lint-Bericht (Nachtrag 2) · `index.md` (Quellen-Übersicht, Kanonkarte, Lint, Hawthorn). `app/data/folgen.json`, Serienseiten, `changelog.md` und der bestehende `raw/`-Bestand unverändert — keine Datums- oder Schema-Änderung.

## [2026-10-12] wiki | Figurenabdeckung: Auftritte aus den Folgenseiten nachgetragen, vier neue Figurenseiten
- Offener Punkt aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]] (Befund 8 und Restliste Figurenseiten). Per Skript alle Figuren in den Abschnitten „Hauptfiguren" bzw. „Antagonisten" der 320 Folgenseiten gegen die Folgen-Links der Figurenseiten abgeglichen: **644 fehlende Auftritte** auf 31 Figurenseiten (dazu 4 aus den „Antagonisten" von WPO 3–4).
- **648 Auftritte nachgetragen**, Rolle wörtlich aus dem Eintrag der Folgenseite, Watchlist-Folgen als „geplant" markiert, nach Erscheinungsdatum sortiert. Spitzenreiter: Wilde 96, Sachs 87, Mycroft 64, Frankenstein 62, Moriarty 53, Dracula 48, Dupin 36, Watson 35, Robur 29, Crowley 23, Irene Adler 20, Fogg 19, Poe 17, Tesla 15. Darunter die Herbstlücken NEM 4/5 (Nemo), IADK 35/36 (Wu, Adler), FRANK 28 und IADK 35 (Killjoy, Robur), TES 9 (Tesla).
- Auf 13 Seiten mit Bogen- statt Folgenübersicht (Wilde, Sachs, Mycroft, Frankenstein, Moriarty, Dracula, Robur, Dupin, Watson, Adler, Fogg, Poe, Lavache) steht jetzt ein Abschnitt „Vollständige Auftrittsliste"; die kuratierten Bogentabellen bleiben. Übrige Seiten im bestehenden Format ergänzt, bei Crowley und Rasputin neue Reihen-Unterabschnitte.
- **Neue Figurenseiten:** [[wiki/figuren/van-dusen|Professor van Dusen]] (`entwurf`, SH 1–2; SHC-Ermittlerstrang erwähnt), [[wiki/figuren/cross|Inspector Cross]] (`entwurf`, Alias „Inspektor Cross", SHC 48–68 und SH 13, 21, 24; Identität SHC/SH über denselben Sprecher Rainer Fritzsche als Annahme), [[wiki/figuren/vidocq|Vidocq]] (`stub`, EAPAD 10), [[wiki/figuren/quentin|Quentin]] (`stub`, DRAC 3–4, nur als Gesuchter). Erwähnungen auf 10 Folgenseiten, 4 Figuren-, 3 Serien- und 1 Konzeptseite verlinkt; Index ergänzt.
- **Bewusst offen:** 11 Figuren-Links stehen auf Folgenseiten nur im Zirkel-, Theorie- oder Verweisteil (z. B. Dracula in SHC 53, WMU 3, DNAPF 53, FRANK 28, SH 24), das sind Erwähnungen, keine Auftritte.
- **Nebenbefunde korrigiert:** Sprecher von [[wiki/figuren/oscar-wilde|Oscar Wilde]] „Rothemund" → „Rotermund" (Tippfehler aus der Raw-Datei vom 27.04.2026, zwei andere Raw-Quellen schreiben Rotermund); Index-Zeile Mycroft „rund 85" → „über 90 Folgen-Seiten".
- **Geändert:** 4 neue und 32 geänderte Figurenseiten · 10 Folgenseiten (nur Wikilinks) · 3 Serienseiten · `konzepte/sherlock-holmes-und-co.md` · `index.md` · Lint-Bericht (Nachtrag 3). `app/data/folgen.json`, `raw/` und `changelog.md` unverändert, kein Frontmatter der Folgenseiten betroffen.

## [2026-10-12] lint | Datumsentscheidungen: Entscheidung vom 06.09. revidiert, 35 Erscheinungsdaten korrigiert
- Zustimmung Christian zu den drei Fragen aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 2; umgesetzt in Nachtrag 4 (Tabelle alt → neu je Folge mit Belegen). Beleg: [raw/maritim/2026-10-12_audible-holyshop-rautemedia_erscheinungsdaten-abgleich.md](raw/maritim/2026-10-12_audible-holyshop-rautemedia_erscheinungsdaten-abgleich.md).
- **MOR 25** auf 05.06.2026 (Tag/Monat-Dreher der Fanseite, zweiter Fall nach SH 23; Fehlermuster und Faustregel in der [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]). Datumsvermerk der [[wiki/serien/moriarty|Moriarty-Serienseite]] aufgelöst.
- **34 Folgen** auf die mit Apple übereinstimmende HolyShop-Ersterscheinung umgestellt: OWMH 4, 6, 7, 8, 14, 22, 24, 26, 29, 30, 34, 35, 37, 38, 39, 41, 42, 46–49, 51–56 · DNAPF 8, 11, 12 · EAPAD 1, 2 · SH 1 · FRANK 26. Drei Jahreswechsel (OWMH 41, 46, 55). Serienstart Poe & Dupin jetzt 13.07.2018, Sherlock Holmes 09.12.2022. Entscheidung vom 06.09.2026 in der Kanonkarte als revidiert vermerkt.
- **Offen, nicht geändert:** FRANK 20, OWMH 40, EAPAD 29 (HolyShop allein gegen Apple, Deezer, Audible).
- **Mitgezogen:** Folgenseiten, `index.md`, 6 Serienseiten, 21 Figurenseiten (6 davon Auftrittstabellen neu nach Datum sortiert), 4 Konzeptseiten, Kanonkarte, `app/data/folgen.json` (35 × `erschienen`, 2 × `story_anmerkung`). Abgeleitete Hauptrollen OWMH 45–57 bleiben (entschieden).
- `raw/`, App-Code, Schema und `changelog.md` unverändert.

## [2026-10-12] lint | Restliche Datumsangaben korrigiert, vier offene Datumsfälle geklärt
- Auftrag Christian nach Commit 14b92e1; Bericht: [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 5. Beleg: [raw/maritim/2026-10-12_fanseite-rautemedia-hoerspieltalk_vier-datumsfaelle.md](raw/maritim/2026-10-12_fanseite-rautemedia-hoerspieltalk_vier-datumsfaelle.md).
- **Vault-weite Skriptprüfung** aller Datumsangaben neben Folgenverweisen (Wikilink oder Kürzel) gegen `erschienen`: 9 Korrekturen auf [[wiki/figuren/aleister-crowley|Crowley]] (4), [[wiki/figuren/auguste-dupin|Dupin]], [[wiki/figuren/passepartout|Passepartout]], [[wiki/figuren/rasputin|Rasputin]] (2) und [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]]; danach 0 Abweichungen, Sortierung unverändert gültig.
- **FRANK 20, OWMH 40, EAPAD 29:** Vault-Wert bestätigt (Raute-CD bzw. Verlagsvorschau und Hörspieltalk-Release-Beiträge gegen HolyShop allein), Prüfvermerk auf den Folgenseiten.
- **SH 16** von 08.08.2025 auf **25.07.2025** korrigiert (Apple, Deezer, Audible, Raute-CD, Hörspieltalk „Freutag VÖ"); Folgenseite, Index, Serientabelle, 3 Figurenseiten, `folgen.json`.
- **Kanonkarte:** HolyShop-Muster „vorverlegte Termine nicht nachgezogen", unzuverlässige Datums-URL der MOR-25-Schlagzeile.
- `raw/`-Bestand, App-Code, Schema und `changelog.md` unverändert; 1 neue Raw-Datei.

## [2026-10-12] ingest | Sprecher OWMH 1–44 und Sherlock Holmes & Co.: Fandom-Rollentabellen, DNB, Audible
- Neue Rohdatei `raw/maritim/2026-10-12_fandom-dnb-audible_owmh-01-44-shc-besetzung.md`: wörtliche Fandom-Besetzungstabellen (MediaWiki-API) für OWMH 1–44 und SHC 26/27, 41/42, 45, 48, 53, 55; Gegenprobe mit DNB-Katalogsätzen (Digitalausgabe: Sprecherlisten, CD: MARC 245 $c) und Audible-Serienseiten; Klappentexte OWMH 42–44.
- `sprecher` auf 52 Folgenseiten eingetragen (OWMH 0 → 44 von 44, 701 Einträge; SHC 3 → 11 von 11, +65 Einträge), Eckdaten-Zeile „Sprecher“ und Quellen ergänzt. Rollen aus Fandom; OWMH 44 Aleister Crowley – Daniel Zillmann als abgeleitet gekennzeichnet.
- Offen: OWMH 42/43 Mycroft Holmes – Reent Reins (Fandom) gegen DNB/Audible (Reins nicht in der Liste), nicht eingetragen. SHC 26/27 Nebenrollen nicht teilgenau zuordenbar. Nebenbefunde: SHC 26/27 Autor (DNB-CD und Fandom: Jonas Maas), SHC 53 Datum (Fandom 08.05.2020).
- Sprechernamen vereinheitlicht (Fritzsche, K. Dieter Klebsch, Deuster, Schülert, Tams, André Beyer, Zalamea). folgen.json unverändert.

## [2026-10-12] ingest | Sprecher DNAPF, WMU, OWIA: 61 Folgenseiten besetzt (Rollenlisten DNAPF 1/7/8, WMU 3/4; DNB-Rollenangaben; Rest abgeleitet)
- Neue Quelle: [raw/maritim/2026-10-12_dnb-audible-hoerspieltalk-fanseite_dnapf-wmu-owia-besetzung.md](raw/maritim/2026-10-12_dnb-audible-hoerspieltalk-fanseite_dnapf-wmu-owia-besetzung.md) — DNB (MARC 245 $c der CDs, 700 nrt der Digitalausgaben), Audible, Hörspieltalk, Hoerspiel-Freunde (Verlagsmitteilung 2015, Rollenlisten „Captain Blitz"), hoernews.de, Raute Media, Fanseiten-Figurenseiten.
- `sprecher` DNAPF 1 → 53 von 53, WMU 0 → 5 von 5, OWIA 0 → 4 von 4. Rollenlisten: DNAPF 1, 7, 8, WMU 3, 4. DNB-Rollenangabe der CD: Erzähler (Brückner) DNAPF 1–7, 9–18; Phileas Fogg (Draeger) DNAPF 51, 52; Oscar Wilde (Rotermund) WMU 1–4. Übrige Hauptrollen nach der Ableitungsregel (OWMH 45–57) und gekennzeichnet; Aouda über die Verlagsmitteilung 2015, Abel Hawthorn über die Fandom-Tabellen OWMH (Identität weiter Annahme).
- Offen: Erzähler DNAPF 19–50, Professor Challenger DNAPF 38–44 (Graudus laut WMU 4), Robur DNAPF 3 (Neugebauer, Staffel 1), WMU 2 ohne veröffentlichte Besetzung.
- folgen.json unverändert.

## [2026-10-12] ingest | Sprecher IADK und EAPAD: Rollenlisten IADK 0–15 (Fandom), Hauptrollen IADK 16–36 und EAPAD 1–36 abgeleitet
- Besetzung für 72 Folgenseiten eingetragen (IADK 0–34, 36; EAPAD 1–36); sprecher-Abdeckung IADK 1 → 37/37, EAPAD 0 → 36/36.
- IADK 0–15: Rollentabellen des Fandom-Wikis (252 Rollen; Nebenrollen Einzelquelle), Namen gegen Raute Media (CD) und Audible geprüft; Fandom-Schreibfehler normalisiert.
- IADK 16–34, 36 und EAPAD 2–36: Hauptrollen nach der Ableitungsregel (Figurenliste/Klappentext + Stammsprecher der Fanseiten-Figurenseite + Sprecherliste der Folge), auf den Seiten als abgeleitet gekennzeichnet. EAPAD: Erzähler Douglas Welbat laut Serienseite der Fanseite; EAPAD 1 Rollen zusätzlich durch LovelyBooks-Rezension belegt.
- Offen: IADK 5 – Mycroft/Reent Reins nur Fandom, Raute-Liste ohne Reins. Raute Media IADK 6–8 tragen die Liste von IADK 5 (unbrauchbar).
- Rohdaten: [raw/maritim/2026-10-12_fandom-audible-rautemedia-fanseite_iadk-eapad-besetzung.md](raw/maritim/2026-10-12_fandom-audible-rautemedia-fanseite_iadk-eapad-besetzung.md). folgen.json unverändert.

## [2026-10-12] ingest | Sprecher MOR, FRANK: Besetzung Moriarty 0–27 und Frankenstein 1–27
- Neue Quelle: [raw/maritim/2026-10-12_dnb-rautemedia-fandom-audible-hoerspieltalk_mor-frank-besetzung.md](raw/maritim/2026-10-12_dnb-rautemedia-fandom-audible-hoerspieltalk_mor-frank-besetzung.md) — DNB-Katalogsätze (Feld 700, alle 55 Folgen), Raute Media (MOR/FRANK 1–24), Audible (54 Produktseiten), Fandom-Rollentabellen (MOR 0–8), Hörspieltalk (Folgen- und Sammelthreads), Fanseiten-Figurenlisten und -Figurenseiten.
- **Rollenlisten:** MOR 0–8 (Fandom; MOR 1 und 2 zusätzlich Verlagsvorschau im Hörspieltalk, MOR 0 nur 4 Rollen + Ansage), FRANK 1 (Amazon-Vorschau, Einzelquelle für die Rollen).
- **Abgeleitet** (Figurenliste der Fanseite + Stammsprecher der Fanseiten-Figurenseite + Sprecher:in in allen vollständigen Listen der Folge): MOR 9–27 und FRANK 2–27, je 1–7 Hauptrollen, gekennzeichnet; vollständige Namensliste in den Eckdaten. Folgenseiten MOR/FRANK mit `sprecher`: 1 → 56.
- **Widersprüche dokumentiert, nicht aufgelöst:** MOR 18 (Welsh vs. Keßler), FRANK 8 (zwei Nebensprecher), FRANK 10 (Welsh fehlt bei Raute), FRANK 12 (DNB/Audible führen die Liste von FRANK 9, Raute eine abweichende) — betroffene Hauptrollen nicht zugeordnet.
- **Geändert:** 55 Folgenseiten (nur `sprecher`, Eckdaten-Zeile, `quellen`/Quellenabschnitt), 1 neue Raw-Datei. `app/data/folgen.json`, Figuren-, Serien-, Konzeptseiten, Kanonkarte, `raw/`-Bestand und `changelog.md` unverändert.

## [2026-10-12] ingest | Sprecher SH, DRAC, TES, NEM: Besetzung für 50 Folgenseiten
- Beleg: [raw/maritim/2026-10-12_audible-rautemedia-dnb-hoerspieltalk_sh-drac-tes-nem-besetzung.md](raw/maritim/2026-10-12_audible-rautemedia-dnb-hoerspieltalk_sh-drac-tes-nem-besetzung.md). Quellen: Raute Media (volle CD-Listen SH 1–20, TES 1–8), DNB-Download-Datensätze (MARC 700, volle Listen DRAC 1–16), DNB 245 $c, Audible, Hörspieltalk, Fandom-API, Fanseite.
- **Rollenlisten:** SH 1–2 (Fandom „Dunkle Kräfte“, über die Raute-Listen auf die Teile verteilt), NEM 2–4 (Hörspieltalk; NEM 3 ergänzt um Nemo – Klebsch laut DNB/Audible).
- **Abgeleitet** nach der OWMH-45–57-Regel (Klappentext/Figurenliste + Stammsprecher Fanseite bzw. Fandom-Rollentabelle + Sprecherliste): SH 3–22, DRAC 1–16, TES 1–8, NEM 1; auf den Seiten gekennzeichnet, volle Namenslisten im Eckdaten-Text. Folgenseiten mit `sprecher`-Namen in den vier Reihen: 4 → 54 (266 neue Einträge).
- **Offen:** Inspektor Cross in SH 1/2 (Fandom ja, keine Liste), Fanseiten-Figurenliste SH 8 vermutlich kopiert, Rolle von Felix Strüven in DRAC 1, SH-22-Liste bei Hörspieltalk gleich der von SH 21, TES 9 Tesla-Sprecher (DNB Winczewski gegen Vault Turba).
- **Geändert:** 1 neue Raw-Datei, 50 Folgenseiten (nur `sprecher`, Sprecher-Zeile der Eckdaten, Quellen). `app/data/folgen.json`, `raw/`-Bestand, Schema und `changelog.md` unverändert.

## [2026-10-12] wiki | Sprecher-Konsolidierung: Schreibweisen, 31 Figurenseiten, Kanonkarte, Lint-Nachtrag 6
- **Schreibweise** „K. Dieter Klebsch“ (DNB/Audible) vereinheitlicht: 25 Stellen „Klaus Dieter Klebsch“/„K.Dieter Klebsch“ in 14 Folgenseiten, dazu 9 Erläuterungsvermerke OWMH angepasst; die Fanseiten-Schreibung „Klaus-Dieter Klebsch“ steht nur noch als Hinweis auf [[wiki/figuren/kapitaen-nemo|Kapitän Nemo]]. Keßler und Braunmiller-Jest waren im Wiki bereits einheitlich.
- **Figurenseiten:** Stammsprecher auf 27 Seiten neu (`sprecher:` im Frontmatter, Eckdaten-Zeile mit Beleg, Raw-Quellen), Vermerke auf 4 weiteren aktualisiert; Sprecherwechsel [[wiki/figuren/james-moriarty|Moriarty]] (Till Hagen → Andreas Fröhlich ab SHC 55) und [[wiki/figuren/robur|Robur]] (Hartmut Neugebauer → Milton Welsh); [[wiki/figuren/abel-hawthorn|Abel Hawthorn]]: Löwenberg in SHC 26/27 als Inspektor Masterson. Überholte Vorbehalte erledigt (u. a. Wu, Fogg, Poe, Sherlock Holmes, Nemo, Challenger, van Dusen, SHC 45, Konzeptseite SHC).
- **Folgenseiten:** Professor Challenger – Konstantin Graudus in DNAPF 38–44 abgeleitet nachgetragen (Ableitungsregel erfüllt); FRANK 28 um „Wirt – Tobias Lelle“ ergänzt (Hörspieltalk 31775/32021).
- **Kanonkarte:** Quellenbewertungen der fünf Teilrecherchen zusammengeführt (je Quelle eine Zeile: Fandom, Audible, DNB-Digitalausgabe, DNB 245 $c, Raute Media, Hörspieltalk, Fanseite; neu Hoerspiel-Freunde, hoernews, LovelyBooks, Rezensionsseiten, YouTube); Merksätze zu Ableitungsregel, DNB-Digital = Audible und DNB 245 $c ergänzt.
- **Lint:** [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 6 — Abdeckung je Reihe (30 → 320 von 320 Folgenseiten, davon 316 mit echtem Namen — OWEP 1–4 nur „unbekannt“; 174 → 2207 Einträge), Quellenlage, acht offene Entscheidungen, weitere offene Punkte. Index aktualisiert.
- `raw/`, App-Code, `folgen.json`, Schema und `changelog.md` unverändert.

## [2026-10-12] wiki | Sprecher-Entscheidungen: Lint Nachtrag 6, Punkte 1–4 und 6–8 umgesetzt
- Auftrag Christian (Empfehlungen bestätigt) nach Commit 14c3a9b; Bericht: [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 6.
- **IADK 5:** Mycroft Holmes – Reent Reins ausgetragen (nur Fandom, vollständige Raute-Liste ohne Reins), wie OWMH 42/43 als offen markiert. **SHC 45:** Rolle „Mister Killjoy“, Fandom-Schreibung „Killroy“ als Hinweis.
- **FRANK 12:** Raute-Media-Liste maßgeblich (DNB/Audible = Kopie der Liste von FRANK 9, als Katalogfehler vermerkt); Dracula, Irene Adler, Wu und Moriarty abgeleitet ergänzt. **MOR 18** bleibt offen.
- **DNAPF 19–50:** Erzähler (Jules Verne) – Christian Brückner als abgeleitet nachgetragen (32 Folgenseiten).
- **Kanonkarte:** Regel-Ausnahmen Aouda, Hawthorn, Challenger bestätigt (Stammsprecher-Beleg ohne Fanseiten-Figurenseite auch aus Verlagsmitteilung oder Rollenlisten anderer Folgen); Merksatz zu kopierten Kataloglisten. Vermerke auf [[wiki/figuren/aouda|Aouda]], [[wiki/figuren/abel-hawthorn|Abel Hawthorn]], [[wiki/figuren/professor-challenger|Professor Challenger]], [[wiki/figuren/killjoy|Killjoy]], [[wiki/figuren/mycroft-holmes|Mycroft Holmes]] und der Konzeptseite Sherlock Holmes & Co.
- **Schreibweisen:** „Kaspar Eichel“ (SHC 41/42) und „Sönke Städtler“ (EAPAD 27) angeglichen, Quellschreibung vermerkt. Einträge gesamt 2207 → 2242.
- TES 9 und OWEP 1–4 beim Quellen-Scout, nicht angefasst. `raw/`, App-Code, `folgen.json`, Schema und `changelog.md` unverändert.

## [2026-10-12] ingest | TES 9 Tesla-Sprecher geklärt, Besetzung OWEP 1–4
- **TES 9:** Nikola Tesla – Patrick Winczewski (DNB-CD-Satz 245 $c „Nikola Tesla Patrick Winczewski“, ISBN 978-3-86212-934-8; Fanseiten-Figurenseite; Audible-Autorenfeld). Der bisherige Eintrag „David Turba“ war eine Zuordnung per Ausschluss aus der Audiolibrix-Liste, keine Umbesetzung. Turba bleibt ohne belegte Rolle in der Namensliste. [[wiki/figuren/nikola-tesla|Nikola Tesla]] ergänzt.
- **OWEP 1–4:** alle 18 „unbekannt“-Einträge ersetzt bzw. entfernt, jetzt 11 abgeleitete Einträge: Wilde – Rotermund und Poe – Uve Teschner (1–4), Mata Hari – Katja Keßler (3, 4), Rasputin – Tetje Mierendorf (4). Nicht zugeordnet: Mycroft Holmes (Reent Reins in keiner Liste, auch nicht in der Raute-Media-Box 1–4), Theodora Sachs 3/4 und Rasputin 3 (Stammsprecher nur in der Box-Gesamtliste).
- Rohdaten: `raw/maritim/2026-10-12_dnb-audible-storytel-rautemedia-fanseite_tes9-owep-besetzung.md`. `folgen.json` unverändert (`sprecher` ist kein Abgleichsfeld).
- **Nachgezogen (Konsolidierung):** `autor: Silke Walter` auf OWEP 1–4, Vermerke auf [[wiki/figuren/edgar-allan-poe|Edgar Allan Poe]] (Poe-Sprecher der Blitz-Folgen) und [[wiki/figuren/mycroft-holmes|Mycroft Holmes]] (Reins in keiner OWEP-Liste); Kanonkarte (Audible-Autorenfeld, Audiolibrix/Storytel, neu Storytel-Suche und Blitz-Shop), Lint Nachtrag 6 (Punkt 5 geklärt, 2235 Einträge, alle 320 Folgenseiten mit echtem Namen; drei OWEP-Fragen offen), Index.

## [2026-10-13] ingest | Nachrecherche offene Sprecherfragen (Poldi, BookBeat, pop.de, Hoergruselspiele, DNB, Buchtips)
- Neue Rohdatei `raw/maritim/2026-10-13_poldi-bookbeat-popde-hoergruselspiele-dnb_offene-sprecherfragen.md`; neue Quellentypen pop.de (CD-Händler, teils Rollenlisten), BookBeat (vollständige Digital-Sprecherlisten per API), Hoergruselspiele-Forum (Höreindrücke), Buchtips.net und Heldenchaos (Rezensionen), weitere Poldi-Serienseiten (OWMH, IADK, DNAPF, MOR, FRANK).
- **Geklärt:** IADK 5 — Mycroft Holmes – Reent Reins wieder eingetragen (DNB-Digitalliste und BookBeat führen Reins, nur die Raute-Media-CD-Liste lässt ihn aus); OWMH 43 — Mycroft tritt laut Rezension nicht auf, Fandom-Rumpftabelle falsch; SH 8 — Figurenliste der Fanseite (Irene Adler, Oscar Wilde, Killjoy) sehr wahrscheinlich aus SH 6 kopiert (Höreindruck, Rezension, vier Listen); WMU 2 — Rollenliste mit 14 Rollen (pop.de); zusätzlich WMU 1 — Rollenliste mit 11 Rollen (pop.de), Hawthorn – Jaron Löwenberg jetzt rollengenau.
- **Teilweise:** DRAC 1 — Torsten Michaelis als Dracula folgengenau bestätigt (Buchtips), Rolle von Felix Strüven weiter offen.
- **Weiter offen:** MOR 18 (Digitalkanal Milton Welsh, CD-Kanal Katja Keßler, kein rollengenauer Beleg), OWMH 42 und OWEP 1–4 (Mycroft), SH 1/2 Inspektor Cross (vier Listen ohne Fritzsche), OWEP (Theodora Sachs 3/4, Rasputin 3, Rolle Tennstedt), Passepartout DNAPF 4, 5, 33.
- **Nicht eingetragen, Entscheidung offen:** DNAPF 2 (Passepartout – Marius Clarén, Kapitän Nemo – K. Dieter Klebsch) und DNAPF 3 (Robur – Hartmut Neugebauer) — Poldi-Rezension deckt sich mit der Verlagsmitteilung 2015, Rezensionen sind laut Kanonkarte aber keine Rollenquelle.
- 16 Folgenseiten geändert (Sprecher-Zeile, Quellen; `sprecher`-Frontmatter nur IADK 5, WMU 1, WMU 2: +23 Einträge, gesamt 2235 → 2258). `folgen.json` unverändert (`sprecher` ist kein Abgleichsfeld).

## [2026-10-13] ingest | Autorschaft nachgetragen (68 Folgen), DNAPF 36 Laufzeit, SHC 53 bestätigt, Altfälle geprüft
- **Quelle:** [raw/maritim/2026-10-13_dnb-rautemedia-applebooks-fanseite_autor-datum-altfaelle.md](raw/maritim/2026-10-13_dnb-rautemedia-applebooks-fanseite_autor-datum-altfaelle.md) — DNB-SRU (Digital- und CD-Sätze), Raute Media (Feld „Künstler“, 172 Produktseiten), Apple Books, Audiolibrix, Fanseite (277 Folgenseiten), Fandom, Hörspieltalk, LovelyBooks, Deezer.
- **`autor` nachgetragen auf 68 Folgenseiten** (leere Felder 79 → 11): MOR 0–27 Marc Freund (28), SH 1–4 Marc Freund und SH 5–21 Silke Walter (21), TES 1–8 Silke Walter (8), OWIA 1–4 Silke Walter (4), NEM 1/2 Anton Serkalow und NEM 3 Marc Freund (3), EAPAD 22 und 28 Markus Duschek (2), FRANK 27 Silke Walter (1), IADK 0 Marc-Oliver Bischoff (1). Jeweils Frontmatter, Autor-Zeile der Eckdaten und Quellen. 65 Werte sind durch zwei unabhängige Kanäle gedeckt (Verlagsmetadaten digital gegen Raute-Media-CD bzw. DNB-CD-Satz); MOR 25–27 sind als folgengenaue Einzelquelle gekennzeichnet.
- **Neue Quellenbewertung:** Raute Media, Feld „Künstler“, ist die erste vom Digitalstrom unabhängige Autorenquelle (stimmt in allen Vergleichsfällen mit dem Vault überein, Ausnahme EAPAD 33/34); DNB-CD-Sätze nennen die Autorschaft laut Booklet („Dialogbuch“, „Autorin“, „Buch“). Apple Books führt inzwischen auch Moriarty und Sherlock Holmes.
- **DNAPF 36:** `spielzeit_min` 58 → **68** (Fanseite live „68 min“, Apple Music 67,7 min, Deezer 67,4 min); Wiki und `folgen.json`. Vollabgleich aller 277 Fanseiten-Laufzeiten: sonst keine Abweichung.
- **SHC 53:** 03.07.2020 bestätigt — die Fandom-Infobox trägt den Termin von SHC 52 (08.05.2020). Keine Änderung.
- **SHC 26/27:** Widerspruch Oliver Fleischer (Digitalstrom) gegen Jonas Maas (CD-Booklet laut DNB, Fandom) auf beiden Seiten dokumentiert, `autor` unverändert — Entscheidung offen.
- **Altfälle geklärt:** SHC 19 (eine Doppel-CD-Folge, für die Archiv-Linie geteilt), „Dr. Duerte“ (Schreibung des Verlagstexts), Zweiteiler-Klappentexte (der Verlag gibt nur einen gemeinsamen Text aus). **Weiter offen:** IADK 5/6, Tunguska, Killjoy in SHC 45 (Rolle Einzelquelle), Schreibung Morel/Morell (Vorschlag: Morel).
- **Neu gemeldet:** MOR 19 und MOR 20 — `erschienen` folgt HolyShop allein gegen Apple, Deezer, Audible und Raute-CD (je 14 Tage früher); gleiches Muster wie SH 16. Nicht geändert.
- Kein Schema-Bruch, `stand` und `schema_version` unverändert.

## [2026-10-13] wiki | Vier Figuren-Stubs (Rita Frost, Ned Land, Manning, Hutchinson Hatch), Killjoy auf der Zirkel-Seite
- Neue Figurenseiten (`stub`) für die in Lint Nachtrag 6 gemeldeten Rollen ohne Figurenseite: [[wiki/figuren/rita-frost|Rita Frost]] (WMU 3/4), [[wiki/figuren/ned-land|Ned Land]] (DNAPF 1), [[wiki/figuren/manning|Inspector Manning]] (WMU 3), [[wiki/figuren/hutchinson-hatch|Hutchinson Hatch]] (OWMH 35/36, SH 1/2). Index ergänzt, Sprecher-Zeilen der Folgenseiten verlinkt, Querverweise auf [[wiki/figuren/van-dusen|Professor van Dusen]] und [[wiki/figuren/auguste-dupin|Auguste Dupin]]. Figurenseiten 58 → 62.
- [[wiki/figuren/killjoy|Killjoy]] steht jetzt in der Tabelle „Verbündete (nicht Mitglied)“ auf [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] (offener Punkt aus dem Lint vom 17.08.2026); Vermerke auf der Figurenseite angepasst.

## [2026-10-13] wiki | Konsolidierung der Nachrecherche: Lint Nachtrag 7, Kanonkarte, Figurenseiten
- **Lint:** [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 7 — Ergebnis je Punkt (Sprecherfragen; Autorschaft, Datum, Altfälle), nachgezählte Zahlen (2258 Sprechereinträge, `autor` leer 79 → 11, 62 Figurenseiten), 15 offene Entscheidungen an Christian; erledigte Punkte in Nachtrag 6, in der Tabelle zum Lint vom 06.09. und in „Nach dem Nachtrag offen“ markiert.
- **Kanonkarte:** neuer Abschnitt „Neu bewertete Quellen (2026-10-13)“ (pop.de, BookBeat, Hoergruselspiele, Buchtips/Heldenchaos, Audiolibrix, Wikipedia; ohne Ertrag), bestehende Zeilen ergänzt (Raute Media Feld „Künstler“, DNB-CD 245 $c, Poldi, Fanseiten-Folgenübersicht, Hörspieltalk, HolyShop, Fandom); Merksatz Digital- gegen CD-Familie; „Drei Datumsebenen“ korrigiert (CD bis zu vier Wochen vor oder nach der Ersterscheinung); DNAPF-36-Fallstrick erledigt; Fanseiten-Fehler SH 8.
- **Figurenseiten:** Vermerke auf [[wiki/figuren/mycroft-holmes|Mycroft Holmes]] (IADK 5 wieder belegt, OWMH 43 kein Auftritt, OWMH 42 und OWEP 1–4 offen, WMU 1/2 rollengenau), [[wiki/figuren/abel-hawthorn|Abel Hawthorn]] (WMU 1 rollengenau, Identität weiter Annahme), [[wiki/figuren/cross|Inspector Cross]], [[wiki/figuren/geoffrey-stafford|Geoffrey Stafford]] (WMU 1), [[wiki/figuren/dracula|Dracula]] (DRAC 1 Michaelis bestätigt), [[wiki/figuren/irene-adler|Irene Adler]], [[wiki/figuren/oscar-wilde|Oscar Wilde]] und [[wiki/figuren/killjoy|Killjoy]] (SH 8 als zweifelhaft markiert), [[wiki/figuren/robur|Robur]], [[wiki/figuren/passepartout|Passepartout]], [[wiki/figuren/kapitaen-nemo|Kapitän Nemo]], [[wiki/figuren/mata-hari|Mata Hari]], [[wiki/figuren/theodora-sachs|Theodora Sachs]], [[wiki/figuren/rasputin|Rasputin]], [[wiki/figuren/gaston-morell|Gaston Morell]] (Verlagstexte schreiben „Morel“, nicht umbenannt).
- **Folgenseiten (nur Text):** OWMH 43 (Mycroft-Zeile), WMU 1 (Hawthorn-Zeile), WMU 3/4 (zwei Abdrucke derselben Verlagsliste statt „Einzelquelle“), SH 8 (Vorbehalt in Logline-Block, Hauptfiguren und Crossover-Zeile; `crossover_mit`, `zirkel` und Figuren unverändert). Serienseiten [[wiki/serien/kapitaen-nemo|Kapitän Nemo]] (Autor Folge 3 belegt) und [[wiki/serien/sherlock-holmes|Sherlock Holmes]] (SHC 19 im Archiv-Mapping geklärt, Vorbehalt SH 8), Konzeptseite [[wiki/konzepte/sherlock-holmes-und-co|Sherlock Holmes & Co.]] (SHC 19), Index.
- Keine Abgleichsfelder, kein `sprecher`/`autor` geändert; `raw/`, `app/`, Schema und `changelog.md` unverändert.

## [2026-10-13] lint | Entscheidungen Nachtrag 7 umgesetzt
- Christian hat die Empfehlungen aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 7, am 13.10.2026 bestätigt; dort je Punkt „→ Entschieden“ vermerkt.
- **Daten (`folgen.json`, `stand` 2026-10-13):** MOR 19 und MOR 20 `erschienen` 2025-06-27 → 2025-06-13 und 2025-08-29 → 2025-08-15 (HolyShop allein gegen Apple, Deezer, Audible, Raute-CD); IADK 5/6 Story-Jahre 1890/1889 zurückgenommen (`unbekannt`, Bezug in `story_anmerkung`); Logline SH 8 ohne „Crossover-Knoten“. Wiki: Folgenseiten MOR 19/20, Index, Serie Moriarty, Figurenseiten Moriarty, Robur, Theodora Sachs (MOR 20 umsortiert), Victor Frankenstein.
- **SH 8:** Irene Adler, Oscar Wilde, Killjoy aus Hauptfiguren, Logline und `crossover_mit` genommen (Figurenliste von SH 6 kopiert), `zirkel: direkt` bleibt; Auftrittszeilen auf [[wiki/figuren/irene-adler|Irene Adler]] (58 → 57), [[wiki/figuren/oscar-wilde|Oscar Wilde]] (100 → 99), [[wiki/figuren/killjoy|Killjoy]] durch Hinweis ersetzt; Serienseiten Sherlock Holmes und Irene Adler, Kanonkarte.
- **Gaston Morel:** Figurenseite [[wiki/figuren/gaston-morel|Gaston Morel]] neu, `gaston-morell` ist Weiterleitung; Links, Tags und Fließtext auf 15 Seiten umgestellt, Schreibweisen-Hinweis auf [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] umgekehrt. **SHC 26/27:** `autor` Jonas Maas, Oliver Fleischer als Digitalangabe vermerkt. **IADK 5:** Mycroft – Reent Reins bestätigt. **Tunguska** ohne Eintrag geschlossen ([[wiki/konzepte/hoerreihenfolgen|Hörreihenfolgen]]). Kanonkarte: Merksätze HolyShop-Einzelquelle (MOR 19/20 wie SH 16) und Booklet vor Digitalstrom bei `autor`.
- Ohne Datenänderung entschieden: DNAPF 2/3 nicht ableiten, OWMH 42, OWEP 1–4 (Mycroft) und MOR 18 offen, „Sergeant Willer“/„Abel Hawthorn“ bleiben, Einzelquellen-Autoren WMU 1–4/DNAPF 1 nicht eingetragen (MOR 25–27 gekennzeichnet), EAPAD 33/34 Silke Walter, OWEP Sachs/Rasputin nicht abgeleitet. `raw/`, Schema und `changelog.md` unverändert.

## [2026-10-13] ingest | Stub-Ausbau: 13 Folgen, Fledermausamulett, 9 Figuren (Klappentexte Fanseite, Apple Books, Gratis-Hoerspiele.de, Fandom, pop.de)
- Neue Rohdatei `raw/maritim/2026-10-13_fanseite-applebooks-gratishoerspiele-fandom-popde_stub-ausbau.md`: Klappentexte wörtlich für DNAPF 1, 2, 3, 4, 5, 8, 10, 11, 12, EAPAD 1, 2, SHC 48, 53 und WMU 3, je gegen eine zweite Quelle geprüft (Apple Books, bei DNAPF zusätzlich Gratis-Hoerspiele.de, bei SHC Fandom, bei WMU 3 pop.de mit vollständiger Rollenliste).
- 13 Folgenseiten nach Vorlage ausgebaut (Logline, Eckdaten, Hauptfiguren, Handlung grob, Zirkel, Crossover), `spoiler_level` stub → grob und `status` stub → recherchiert. In `app/data/folgen.json` nur `spoiler_level` (13×) und `logline` (9× DNAPF) geändert. Die alten Loglines enthielten Chronologie-Spoiler (Tode, Absturz).
- Chronologie-Spoiler, die schon vorher auf den Seiten standen (Tode Jekyll/Hyde und Robur, Frankensteins Sturz, Sapriel = Dracula, Lestrade vom Zirkel ermordet), stehen jetzt in aufklappbaren `> [!warning]-`-Callouts statt im Fließtext.
- **Befund:** DNAPF 2 führt auf Fanseite, Apple Books und Audible den Klappentext von DNAPF 1. Der richtige Text kommt von Gratis-Hoerspiele.de und fantasy-foren.de, die englische Apple-Ausgabe bestätigt ihn. Sherlock Holmes stand bei SHC 48 und 53 ohne Beleg unter den Hauptfiguren und ist entfernt.
- Konzept `fledermausamulett` auf entwurf: Das Amulett kommt in keinem Klappentext vor, der Fall liegt „vor Jahren“.
- 9 Figurenseiten auf entwurf, Auftritte vervollständigt, vor allem aus den Fandom-Besetzungstabellen OWMH 1–44: Lestrade, Alfons Grell (8 Folgen), Benjamin Payton (7), Henry Wheeler (11), Violet Ishiguro (11), Bastien Lavache (14; frühester Beleg jetzt OWMH 21 statt SH 21), Paul Hiller, Dr. Adams (Vorname Melvin), George Turner (vermutlich schon IADK 5). 17 Figuren bleiben Stub.
- Index: 24 Beschreibungszeilen aktualisiert. Prüfung: JSON gültig, 0 Divergenzen in den 6 Abgleichsfeldern über 320 Folgen, keine defekten Wikilinks, YAML parst.

## [2026-10-13] ingest | In-Universe-Chronologie: CD-Klappentexte (via Löchel), Löchel-Chronologie Teil 2, Traumwelt
- Neue Rohquelle `raw/maritim/2026-10-13_blackstone-zauberspiegel-traumwelt-audible-fanseite_in-universe-chronologie.md`: 215 Löchel-Rezensionen (Black Stone Magazine), Chronologie Teil 2 und Komplett-Update, 304 Fanseiten-Klappentexte, 64 Audible-Verlagstexte, Traumwelt, Foren-Threads, Fandom auf Jahres- und Monatsangaben geprüft.
- Kernfund: Die CD-Klappentexte von OWMH 2, 6–10, 12–14, 19–21, 25 beginnen mit einer Zeitzeile („Anfang Dezember 1895.“, „Spätsommer 1896.“ …); Fanseite, Audible und VLB-Händlertext streichen sie, deshalb fehlten sie im Vault. Einzige gefundene Quelle: Löchels Rezensionen, die den CD-Text wörtlich zitieren.
- `folgen.json` (nur `story_*`): OWMH 7, 8, 9 → Dezember 1895 (`monat`); OWMH 12, 13 → 1896 (`jahr`); OWMH 11 Anmerkung geschärft (neue Klammer Dez 1895 – Spätsommer 1896); Dracula 1 → 1898 (`geschaetzt`, Löchel: „fast 450 Jahre nach … 1448“, „vermutlich im Jahr 1898“).
- Verteilung: `unbekannt` 286 → 285 · `geschaetzt` 22 → 18 · `jahr` 10 → 12 · `monat` 2 → 5; Folgen mit `story_jahr` 34 → 35.
- Offen für Christian: IADK 9 Tunguska (Löchel: Katastrophe im Hörspiel „zehn Jahre früher, also im Jahr 1898“ – berührt die Entscheidung vom 13.10.2026), Dracula 1 `geschaetzt` oder `jahr`, Einzelquellenlage der CD-Zeitzeilen, Verdichtung von OWMH 14–29 auf Herbst 1896.

## [2026-10-13] wiki | Konsolidierung Stub-Ausbau und Chronologie: Lint Nachtrag 8, Kanonkarte, Zeitanker
- **Folgenseiten:** Zeile „Setting / Zeit“ in den Eckdaten von OWMH 7, 8, 9, 11, 12, 13 und Dracula 1 (mit Beleg und Einzelquellen-Hinweis), Chronologie-Rohdatei in `quellen` und Quellenabschnitt. Serienseiten OWMH und Dracula ohne Zeitspalte, nicht berührt.
- **[[wiki/konzepte/hoerreihenfolgen|Hör-Reihenfolgen]]:** Variante 5 auf 35 von 320 Folgen (17 belegt, 18 geschätzt), Zeitanker OWMH 6–13 aufgeschlüsselt, Dracula 1 als abgeleiteter Anker, methodische Grenze „Zeitzeilen nur in der CD-Fassung“, offene Lücken (Dracula 2–4, Enge OWMH 26–29), Tunguska-Nachtrag.
- **[[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]:** Merksatz „Zeitzeilen stehen nur auf der CD“, neuer Abschnitt mit Löchel-Einzelrezensionen, Traumwelt-Hoerspiel, Gratis-Hoerspiele.de, Apple Books (`description`), fantasy-foren.de, Merksatz Klappentext; Ergänzungen Black-Stone-Chronologie und Fandom; Datenfehler DNAPF 2.
- **[[wiki/queries/lint-2026-10-12|Lint 2026-10-12]], Nachtrag 8:** Stubs 40 → 17, Chronologie-Zählung vorher/nachher, Befunde, 8 offene Entscheidungen an Christian; Tabelle „Stand der offenen Punkte“ (Stubs, In-Universe-Chronologie) fortgeschrieben. Index: Lint-, Kanonkarten- und Hörreihenfolgen-Zeile, Quellen-Übersicht.
- Keine Abgleichsfelder, kein `sprecher`/`autor`/`spielzeit_min` geändert; `raw/` (außer den zwei neuen Dateien), `app/`, Schema und `changelog.md` unverändert.

## [2026-10-13] lint | Entscheidungen Nachtrag 8 umgesetzt

- IADK 9 „Tunguska“: In-Universe-Jahr 1898 als `geschaetzt` eingetragen (Löchel-Rezension, Einzelquelle); revidiert die Schließung ohne Eintrag aus Nachtrag 7. Folgenseite (Setting / Zeit), `folgen.json`, Hör-Reihenfolgen.
- Spielzeiten nach der Regel „Fanseite vor Apple-Trackssumme“ korrigiert: DNAPF 3 60 → 59 min, DNAPF 11 62 → 61 min (Wiki und `folgen.json`).
- OWMH 26–29: Vorbehalt zur Enge des Jahres 1896 in `story_anmerkung` ergänzt, Wert 1896 bleibt.
- Bestätigt ohne Datenänderung: DRAC 1 bleibt `geschaetzt`, OWMH 7, 8, 9, 12, 13 als Einzelquelle akzeptiert, Spoiler-Callouts bleiben, `zirkel` DNAPF 10/11 vorerst unverändert, unbelegte Annahmen bleiben markiert ([[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 8]]).

## [2026-10-13] lint | Spoiler-Prüfung App-Texte und Wiki

- `app/data/folgen.json`: alle 288 `logline`- und 131 `story_anmerkung`-Werte gegen Abschnitt 5 und die Klappentexte geprüft. Geändert: 12 `story_anmerkung` (DNAPF 3, 4, 8, 21, 24, 26, OWMH 18, 28, 29, EAPAD 2, SHC 48, SHC 53) und 2 `logline` (DNAPF 21, 26). Datierungslogik, Belege und Einzelquellen-Hinweise unverändert; statt des Handlungsdetails steht ein Verweis auf den Spoiler-Hinweis im Wiki. `stand`, Abgleichsfelder, `sprecher`, `autor`, `spielzeit_min` nicht berührt.
- Wiki: 29 Seiten geändert (9 Folgen, 11 Figuren, 4 Serien, 4 Konzepte, Index). 14 neue aufklappbare `> [!warning]-`-Callouts, 1 bestehender Callout aufklappbar gemacht (SHC 53); Tabellenzellen und Fließtext neutral formuliert, nichts gelöscht.
- Folgenseiten: Timeline-Notizen von OWMH 9, 18, 28, 29 und DNAPF 21, 24, 26 in Callouts vor den Quellen verschoben; SHC 53 nennt die Gegner-Deutung nur noch im Callout; OWMH 1 verweist bei Payton auf die Figurenseite.
- Figuren: [[wiki/figuren/benjamin-payton|Benjamin Payton]] (2 Callouts, Kopfzeile neutral), [[wiki/figuren/paul-hiller|Paul Hiller]], [[wiki/figuren/robur|Robur]], [[wiki/figuren/victor-frankenstein|Victor Frankenstein]] je 1 Callout. Neutralisiert mit Verweis auf die Folgen- bzw. Figurenseite: Dracula, Geoffrey Stafford, Sherlock Holmes, Edgar Allan Poe, Oscar Wilde, Phileas Fogg, Alfons Grell.
- Serien OWMH und DNAPF: je 1 Callout unter der Folgenliste (OWMH 9, 18, 28, 29; DNAPF 3, 4, 8, 24, 26); Poe & Dupin und Dracula neutralisiert. Konzepte Zirkel der Sieben, Charles Darwin Gesellschaft, Hör-Reihenfolgen, Sherlock Holmes & Co. neutralisiert. Index: 4 Beschreibungszeilen (DNAPF 21, DNAPF 26, SHC 53, Benjamin Payton).
- Nicht geändert, als Grenzfälle an Christian: Mycrofts Tod (OWMH 50; steht in den Klappentexten von OWMH 50/51 und IADK 33), Tod Gaston Morels (EAPAD 21; Titel und Klappentext), Mord an Lestrade (SHC 48; Titel und Verlagstext), Tod von Dr. Hoffman (OWMH 43; Klappentext), Aufnahme Morels in den Zirkel (EAPAD 13; nicht im Klappentext, aber vom Klappentext EAPAD 21 vorausgesetzt), „Theodora Sachs trifft Dracula“ (OWMH 25; Datierungsanker für DRAC 7/8 und FRANK 2/4), Zirkel-Mitgliedschaft Maharadscha und Crowley (OWMH 17, 21), Hintergrund-Stichworte OWMH 6, 20, 23 samt Konzeptseite Charles Darwin Gesellschaft, Frontmatter `fraktion: verraeter` und Tag `verraeter` bei Payton.
- Nebeneffekt: OWMH 1, 18, 28 und 29 lagen im Arbeitsverzeichnis mit CRLF und sind jetzt LF. Prüfung: JSON gültig, YAML der geänderten Seiten parst, keine defekten Wikilinks in den geänderten Dateien.

## [2026-10-13] ingest | Zirkel-Prüfung DNAPF 10/11 (Löchel-Einzelrezensionen, Fandom, LovelyBooks, Fanseite)

- DNAPF 10 „Der Herrscher der Meere“ und DNAPF 11 „Die Jagd nach Kapitän Grant“: `zirkel` direkt → indirekt (Folgenseiten, `folgen.json`, Serientabelle Phileas Fogg). Der Zirkel wird in beiden Folgen nicht genannt (Klappentext, Fanseiten-Figurenliste, Löchel; laut Fandom erste Nennung in der Reihe erst DNAPF 13); der Bezug läuft über Roburs Organisation, deren Gleichsetzung mit dem Zirkel die Doppelfolge offen lässt. Maßstab wie DNAPF 3, 4 und 8.
- Offen: Gastauftritt Draculas in DNAPF 11 (Fandom) gegen „erster Auftritt“ in DNAPF 12 (Löchel); Roburs Organisation als Auftragshintergrund von DNAPF 10 nur durch Fandom belegt. Nebenfunde: DNAPF 13 steht auf `kein`, obwohl Fandom dort die erste Zirkel-Nennung der Reihe verortet; Rollen Tonans/Grant/Crusoe laut Löchel noch nicht in `sprecher` eingetragen.
- Rohdaten: raw/maritim/2026-10-13_blackstone-fandom-lovelybooks-fanseite_zirkel-dnapf-10-11.md. Lint 2026-10-12, Nachtrag 8, Entscheidung 7 geschlossen.
- Nachzug (Entscheidung Christian 13.10.2026): [[wiki/figuren/benjamin-payton|Benjamin Payton]] im Frontmatter neutralisiert – `fraktion: verraeter` → `ambivalent`, Tag `verraeter` entfernt, weil beides in Obsidian als Property sichtbar ist. Offen gelassen: Morel als siebtes Mitglied (EAPAD 13) und „Theodora Sachs trifft Dracula in Ägypten“ (OWMH 25) bleiben als Datierungs- bzw. Strukturanker stehen.

## [2026-10-13] ingest | Löchel-Einzelrezensionen (Black Stone Magazine): Rollenangaben, Zirkel-Prüfung DNAPF 11–13

- Alle 205 Löchel-Rezensionen zu Folgen mit Vault-Seite ausgewertet (DNAPF 39, OWMH 52, EAPAD 25, IADK 24, MOR 19, DRAC 16, FRANK 14, SHC 8, SH 7, TES 1). Befund: Die Rollenangaben sind Löchels eigene Kopfnotizen („Erster Auftritt von X (gesprochen von Y)“, „Mit …“), keine abgedruckte Besetzungsliste; einzige Liste ist die von DNAPF 1 (acht Rollen). Rohdaten: [raw/maritim/2026-10-13_blackstone_loechel-einzelrezensionen-rollen.md](raw/maritim/2026-10-13_blackstone_loechel-einzelrezensionen-rollen.md).
- `sprecher` 2258 → 2280 (+22) auf 16 Folgenseiten: DNAPF 1 (Louise Aronnax, Liste), 10, 11, 12, 23, 25, 26, 27, 33, DRAC 2, EAPAD 1, 2, 10, 17, 20, MOR 9 — gekennzeichnet „Rolle laut Löchel-Rezension, Name in Liste bestätigt“. Nicht eingetragen: Rollen, deren Sprecher in keiner vollständigen Liste steht (DNAPF 3, 4, 9, 10 Wilde/Mycroft), und spoilernde Rollen (DNAPF 26 Robur, EAPAD 2 Sapriel). DRAC 1: Bestätigung van Helsing/Harker vermerkt.
- Zirkel DNAPF 11–13 mit dem automatischen Transkript der YouTube-Komplettfolgen geprüft: DNAPF 11 Dracula-„Gastauftritt“ (Fandom) und „erster Auftritt“ in DNAPF 12 (Löchel) widersprechen sich nicht (Spoiler-Callout auf DNAPF 11); DNAPF 13 nennt den Zirkel im Hörspiel, `kein` ist widerlegt. Kein `zirkel`-Wert geändert (Skalenfrage, Entscheidung offen); Befunde in den Zirkel-Abschnitten von DNAPF 12 und 13.
- `folgen.json` unverändert; 0 Divergenzen der sechs Abgleichsfelder (320 Folgen).
- Konsolidierung: [[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 9]] (Ergebnis, Zahlen, Stand der offenen Fälle, 7 offene Entscheidungen an Christian; betroffene Punkte in Nachtrag 6–8 mit Verweis präzisiert, nichts gelöscht); [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]: Löchel-Zeile um die Rollenangaben ergänzt, Merksätze Löchel-Rollenangaben, Hinweis zu YouTube-Transkripten (nur Höreindruck-Ersatz, Rechtslage der Uploads ungeklärt, nur kurze Belegstellen); 35 Figurenseiten mit Löchel-Beleg in der Sprecher-Zeile (neu als Auftritt: MOR 9 bei Professor van Dusen und Hutchinson Hatch; Spoiler zu DNAPF 11 und DNAPF 26 in aufklappbaren Callouts auf Dracula und Robur); Index. Transkriptzitate in der neuen Rohdatei auf kurze Belegsätze gekürzt.

## [2026-10-13] lint | Entscheidungen Nachtrag 9 umgesetzt

- Christian hat am 13.10.2026 die sieben Entscheidungen aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 9]] bestätigt; dort je Punkt „→ **Entschieden: …**“ und neuer Abschnitt L5 (Abgleich). Neue Belege (Web-Recherche beauftragt): [raw/maritim/2026-10-13_youtube-blackstone-fandom_zirkel-fogg-massstab.md](raw/maritim/2026-10-13_youtube-blackstone-fandom_zirkel-fogg-massstab.md) — YouTube-Transkripte DNAPF 2, 5–7, 9, 14, 15, 18, 19, Löchel-Fließtext, Fandom-Figurenseiten Frankenstein und Dracula.
- Fogg-Maßstab festgeschrieben: Zirkel nur beiläufig erwähnt, ohne dass er oder ein Mitglied handelt → `indirekt`; Dracula oder der Zirkel handelt → `direkt`; spätere Mitglieder ohne Zirkelnennung → `indirekt`. Neuer Abschnitt „Zirkel-Maßstab“ auf [[wiki/serien/phileas-fogg|Phileas Fogg]], Merksatz in der [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]. DNAPF 12 bleibt `direkt`.
- DNAPF-Abgleich (alle 52 erschienenen Folgen): 10 Werte geändert — DNAPF 5, 6, 7, 13, 23, 25, 28, 33 `kein` → `indirekt`, DNAPF 15 `kein` → `direkt` (Dracula handelt: Transkript, Löchel, Fandom; Michaelis fehlt weiter in der Namensliste), DNAPF 32 `indirekt` → `direkt`. Gegenspieler bzw. Hintermänner nur in aufklappbaren `> [!warning]-`-Callouts. 31 Werte bestätigt, 11 Grenzfälle nur gelistet (DNAPF 1, 2, 9 Roburs Organisation; 11 Kurzauftritt; 17 Empfehlung `kein`; 37, 38, 41–44 nur Frankenstein bei `direkt`; 47 ohne Zirkel-Figur bei `direkt`).
- Geändert: 10 Folgenseiten (Frontmatter, Zirkel-Abschnitt, `quellen`), `folgen.json` (nur `zirkel` dieser 10, `stand` bleibt 2026-10-13), Serientabelle Phileas Fogg. Index ohne Zirkel-Angaben, nicht berührt.
- SH 1/2 Inspektor Cross geschlossen: Fandom-Eintrag gilt als Fehler (fünf Quellen ohne Cross/Fritzsche), vermerkt auf SH 1, SH 2 und [[wiki/figuren/cross|Inspector Cross]]. DNAPF 10 Wilde/Mycroft offen, „Gottweil“ bleibt, „Mit …“-Regel bleibt — nur Lint-Vermerk (Löchel-Merksatz der Kanonkarte von „Entscheidung offen“ auf „entschieden“ gesetzt).
- Prüfung: JSON gültig; 0 Divergenzen der sechs Abgleichsfelder (320 Folgen); Fogg-Serientabelle = Frontmatter in allen 53 Zeilen; YAML aller Wiki-Seiten parst.

## [2026-10-13] lint | Fogg-Grenzfälle Zirkel, Figurenseiten Dracula/Frankenstein

- Grenzfälle aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 9, L5]] mit Web-Recherche (beauftragt) geprüft; drei Festlegungen als „Entscheidung Hauptagent (im Auftrag), 13.10.2026“ dokumentiert und in den Maßstab auf [[wiki/serien/phileas-fogg#Zirkel-Maßstab|Phileas Fogg]] übernommen: Roburs Organisation ohne Mitglied → `indirekt`; Kurzauftritt ohne Namen zählt nicht als Handeln (DNAPF 11 bleibt `indirekt`); DNAPF 17 → `kein` bei negativem Befund.
- `zirkel` geändert (11 Folgen; Frontmatter, Zirkel-Abschnitt, `quellen`, `folgen.json` nur `zirkel`, Serientabelle): DNAPF 2 und 9 `kein` → `indirekt`, 17 `unklar` → `kein`, 28 `indirekt` → `direkt`, 37, 38, 41, 42, 43, 44 `direkt` → `indirekt`, 47 `direkt` → `kein`. Unverändert geprüft: DNAPF 1 (nur Fandom), 25 (Auftraggeber in der Folge ungenannt), 33 (weiter Einzelquelle). Offen an Christian: DNAPF 44 (Pietermann/Theodora Sachs in der Liste).
- Neue Quelle: Podcast „Die Couchfesseln“ (YouTube, Besprechungen DNAPF 1–28), in der [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]] bewertet (Nachtrag Fogg-Grenzfälle, Merksatz Höreindruck); dazu YouTube-Komplettfolgen DNAPF 1 und 17. Ohne Ertrag: Fanseiten-Figurenlisten der DNAPF-Folgen, Fandom nach Episode 24. Rohdaten: raw/maritim/2026-10-13_youtube-couchfesseln-blackstone-hoerspieltalk_fogg-grenzfaelle.md.
- Figurenseiten nachgezogen: [[wiki/figuren/dracula|Dracula]] (DNAPF 15, 28, 32), [[wiki/figuren/victor-frankenstein|Victor Frankenstein]] (DNAPF 5–7, 23, 25, 28, 33; Afrika-Block; Auftrittsliste 64 → 68), [[wiki/figuren/robur|Robur]] (DNAPF 2, 9). Auftrittszeilen spoilerfrei, Rollen und Hintermänner in aufklappbaren Callouts. Frankenstein neu unter „Hauptfiguren“ von DNAPF 38, 41, 42, 43 (Klappentext).
- Prüfung: siehe L5 im Lint (JSON gültig, 0 Divergenzen der sechs Abgleichsfelder bei 320 Folgen, Fogg-Serientabelle = Frontmatter in 53 Zeilen, YAML parst, keine defekten Links). `stand` bleibt 2026-10-13, Index ohne Zirkel-Angaben und ohne neue Seiten, nicht berührt.

## [2026-10-13] lint | Zirkel-Audit aller Reihen (59 Werte)

- Fogg-Maßstab ([[wiki/serien/phileas-fogg#Zirkel-Maßstab|Phileas Fogg]]) auf alle übrigen Reihen angewendet, ausdrücklich auch auf Verbündete (Web-Recherche beauftragt, drei Scouts, konsolidiert). Drei neue Rohdateien: raw/maritim/2026-10-13_blackstone-fandom_zirkel-audit-owmh.md (Löchel-Fließtext OWMH 1–52, Fandom-Rollentabellen), raw/maritim/2026-10-13_blackstone-fandom-dnb-audible-rautemedia_zirkel-audit-iadk.md (Löchel-Volltexte IADK/MOR/SHC, Fandom, Namenslisten), raw/maritim/2026-10-13_youtube-blackstone-poldi-couchfesseln_zirkel-audit-rest.md (YouTube-Transkripte EAPAD 1–8, SH 1–5, FRANK 3; Couchfesseln FRANK 3, SH 1–2; Poldi SH 1–12; Löchel-Fließtext EAPAD).
- 59 `zirkel`-Werte geändert (Frontmatter, `quellen`, Zirkel-Abschnitt, `folgen.json` nur `zirkel`, Serientabellen OWMH, IADK, EAPAD, SH, FRANK): OWMH 26, 27 → `direkt`; OWMH 3, 7, 8, 13, 37, 38, 41, 42, 45, 47–52, 57, 58 → `indirekt`; OWMH 6, 14, 15, 16, 22, 23, 24 und WMU 4 → `kein`; IADK 11, 21, 29 → `indirekt`, IADK 5, 25 → `kein`; SHC 53 → `direkt`, SHC 68 → `indirekt`, SHC 26, 27, 41, 42 → `kein`; EAPAD 16, 18, 20 → `direkt`, EAPAD 3, 5, 7, 8, 9, 29–34 → `kein`; SH 1, 2, 3, 5 → `indirekt`, SH 9, 17 → `kein`; FRANK 3 → `indirekt`. Bestätigt: MOR 0–27, DRAC 1–16, TES 1–9 und die übrigen Werte (Liste im Lint). Verteilung gesamt (320 Folgen): `direkt` 179 → 175, `indirekt` 65 → 83, `kein` 19 → 45, `unklar` 57 → 17.
- Konsolidierung: **SH 8** vom Scout auf `indirekt` gesetzt, nach Entscheidung Christian (Nachtrag 7, Entscheidung 3/5) auf `direkt` zurückgesetzt — dass der Maßstab eher `indirekt` ergäbe, steht als Frage auf der Folgenseite und im Lint. **IADK 21** `direkt` → `indirekt` (gleiche Beleglage wie IADK 29; Entscheidung Hauptagent im Auftrag). **MOR 27:** Wendung aus MOR 16/17 aus dem offenen Zirkel-Abschnitt in einen Spoiler-Callout verschoben; vault-weit geprüft, sonst offen nur auf der Figurenseite James Moriarty (TES-9-Zeile, entschärft); TES 9 behält sie (eigener Klappentext), `folgen.json` ohne Treffer.
- Nachgezogen: Figurenseiten [[wiki/figuren/dracula|Dracula]], [[wiki/figuren/alfons-grell|Alfons Grell]], [[wiki/figuren/aleister-crowley|Aleister Crowley]], [[wiki/figuren/theodora-sachs|Theodora Sachs]], [[wiki/figuren/rasputin|Rasputin]], [[wiki/figuren/victor-frankenstein|Victor Frankenstein]], [[wiki/figuren/gaston-morel|Gaston Morel]], [[wiki/figuren/james-moriarty|James Moriarty]] (neu belegte Auftritte, Details in Callouts); [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] mit neuem Abschnitt „Einstufung `zirkel` in Folgen“, Pasquale, Killjoy/SHC 45, spätere Mitglieder im Callout; [[wiki/konzepte/sherlock-holmes-und-co|Sherlock Holmes & Co.]] (SHC 53/68); Text an Wert angeglichen bei FRANK 23 und im SH-Bogen „Grail's Hollow / Killjoy“. [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]: bestehende Zeilen (Fandom, Poldi, Löchel, Couchfesseln, YouTube, Digitalfamilie) ergänzt, Nachtrag Zirkel-Audit mit Merksatz „Fogg-Maßstab gilt für alle Reihen (seit 13.10.2026)“.
- Grenzfälle und 9 offene Fragen an Christian (nicht dringend: SH 8, OWMH 17/19, OWMH 29, WMU 3, MOR 27, Moriarty in SH 2/4, DNAPF 44, IADK 21, weitere mit Empfehlung) in [[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 10]]; Index-Lintzeile und Quellen-Übersicht ergänzt.
- Prüfung: `folgen.json` gültig, gegenüber HEAD nur `zirkel` geändert (59 Folgen), `stand` unverändert; 0 Divergenzen der sechs Abgleichsfelder (320 Folgen); alle Serientabellen mit Zirkel-Spalte = Frontmatter (270 Zeilen; FRANK führt `direkt` als ✓, EAPAD teils fett); YAML aller Wiki-Seiten parst; keine defekten Wiki- oder `raw/`-Links in den geänderten Dateien (nur die bekannten, nicht abgelegten Cover-Bilder); alle Dateien LF; kein Bestand unter `raw/` geändert. Kein Commit.

## [2026-10-13] lint | Serientabellen Frankenstein und Poe & Dupin vereinheitlicht

- Frankenstein: Spalte „Erscheinungsjahr“ → „Datum“ mit dem vollen Erscheinungsdatum aus dem Frontmatter (28 Zeilen); Zirkel-Zellen „✓“ → `direkt` wie in den übrigen Serientabellen.
- Poe & Dupin: Fettung der Zirkel-Zellen bei EAPAD 13, 21, 24 entfernt.
- Gegenprobe aller Serientabellen gegen das Frontmatter (Datum, Spielzeit): 0 Abweichungen.

## [2026-10-13] lint | Zirkel-Empfehlungen Nachtrag 10 umgesetzt

- Auftrag Christian: Empfehlungen mit klarer Empfehlung aus [[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 10]], Z5, selbst umsetzen — außer Frage 1 (SH 8 bleibt `direkt`, Christians Entscheidung), 7 (DNAPF 44) und 8 (IADK 21). Alle Änderungen sind **Entscheidung Hauptagent im Auftrag**; keine neue Recherche, Bedingungen nur gegen `raw/` geprüft.
- Geändert (14 Folgen, vorher → nachher): OWMH 17, 19 `direkt` → `indirekt` (Frage 2); OWMH 29 `direkt` → `indirekt` (Frage 3, kein Höreindruck in `raw/`); WMU 3 `indirekt` → `kein` (Frage 4); MOR 27 `indirekt` → `direkt` (Frage 5); SH 6 `direkt` → `indirekt`; EAPAD 2 `indirekt` → `direkt`; EAPAD 25, 26, 27, 28 `unklar` → `kein`; NEM 2, 3, 4 `unklar` → `kein` (alle Frage 9). Gepflegt je Folge: Frontmatter `zirkel`, Abschnitt „Bezug zum Zirkel der Sieben“ bzw. Zeile „Zirkel-Bezug“ (Spoiler nur im Callout: EAPAD 2, MOR 27), `app/data/folgen.json` (nur `zirkel`), Zirkel-Spalte der Serientabellen OWMH, MOR, SH, EAPAD; Index-Zeile EAPAD 2.
- Unverändert: SH 2, SH 4 bleiben `indirekt` (Frage 6; offene Frage im Callout SH 2 geschlossen, Abschnitt SH 4 „Derzeit offen“ an den Wert angeglichen). Bleiben stehen, weil die Bedingung in `raw/` nicht erfüllt ist: IADK 4 `direkt` (kein Höreindruck), OWMH 53 `unklar` (kein Höreindruck), EAPAD 35, 36 `indirekt` (keine CD-Liste). Offen: Fragen 1, 7, 8.
- Maßstab: `direkt` gilt für „Dracula bzw. den jeweiligen Anführer“ — ergänzt auf [[wiki/serien/phileas-fogg#Zirkel-Maßstab|Phileas Fogg]], [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] und im Merksatz der [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]]; wer gemeint ist, steht jeweils im Spoiler-Callout. Kanonkarte zusätzlich: „Kein Höreindruck“ gilt jetzt auch für Bögen mit verdecktem Hintermann (EAPAD 25–28), neuer Punkt „Motiv ist kein Bezug“ (WMU 3). Nachgezogen: Callout auf [[wiki/figuren/james-moriarty|James Moriarty]], Zirkel-Absatz der Serienseite [[wiki/serien/wilde-mycroft-ungeloeste|WMU]].
- Verteilung gesamt (320): `direkt` 175 → 173, `indirekt` 83 → 84, `kein` 45 → 53, `unklar` 17 → 10.
- Prüfung: `folgen.json` gültig, gegenüber HEAD nur `zirkel` geändert (14 Folgen), `stand` unverändert; 0 Divergenzen der sechs Abgleichsfelder (320 Folgen); alle Serientabellen mit Zirkel-Spalte = Frontmatter (270 Zeilen); YAML aller Wiki-Seiten parst; keine defekten Wiki- oder `raw/`-Links in den geänderten Dateien (nur die bekannten, nicht abgelegten Cover-Bilder); alle Dateien LF; `raw/` unverändert. Kein Commit.

## [2026-10-13] lint | SH 8 Zirkel auf indirekt (Entscheidung Christian)

- Entscheidung Christian: [[wiki/folgen/sherlock-holmes-08-die-sieben-leben-des-carter-roth|SH 8]] `direkt` → `indirekt` nach dem [[wiki/serien/phileas-fogg#Zirkel-Maßstab|Zirkel-Maßstab]] (Zirkel nur als Interessent im Klappentext, laut Höreindruck niemand aus dem Zirkel-Umfeld); revidiert [[wiki/queries/lint-2026-10-12|Lint 2026-10-12, Nachtrag 7]], Entscheidung 3/5, und schließt Nachtrag 10, Z5 Punkt 1.
- Geändert: Frontmatter `zirkel`, Abschnitt „Bezug zum Zirkel der Sieben“ und Callout der Folgenseite; `app/data/folgen.json` (nur `zirkel`); Zirkel-Spalte der Serientabelle [[wiki/serien/sherlock-holmes|Sherlock Holmes]]; Lint (Z5 Punkt 1, Nachtrag 7 Entscheidung 3/5, Hinweis „Zurückgesetzt“); Hinweise „SH 8 bleibt `direkt`“ auf [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]] und in der [[wiki/queries/quellenlage-und-kanonkarte|Kanonkarte]].
- Verteilung gesamt (320): `direkt` 173 → 172, `indirekt` 84 → 85.
