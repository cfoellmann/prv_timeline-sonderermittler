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
- Folgen-Seiten `MOR 00` bis `MOR 24` unter `wiki/folgen/` angelegt; Serien-Seite `wiki/serien/moriarty.md` aus dem Stub geholt und die Figuren-Stubs `wiki/figuren/james-moriarty.md` sowie `wiki/figuren/theodora-sachs.md` ergaenzt.
- `app/data/folgen.json` fuer Moriarty mit exakten Ersterscheinungen aus HolyShop, `wiki`-Pfaden, Loglines und Zirkel-Einschaetzung synchronisiert.
- Auffaelligkeiten dokumentiert: `Perlen des Todes` steht auf der offiziellen Moriarty-Seite als Folge `0` mit Jahr `2021`, waehrend HolyShop bereits `Moriarty 25: Ein Hauch von Ewigkeit` fuer `05.06.2026` listet.

## [2026-04-28] ingest | Sherlock Holmes Serien-Crawl
- Offizielle Serien- und Folgen-Seiten der Maritim-Reihe `Sherlock Holmes - Sonderermittler der Krone` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-28_sherlock-holmes_folgen-01-bis-21.md`.
- Serien-Seite `wiki/serien/sherlock-holmes.md` aus dem Stub geholt und auf die kosmosrelevanten Handlungsboegen fokussiert: Mycroft-/Moriarty-Auftakt, Killjoy-/Wilde-/Adler-Anschluss, Robur-/Frankenstein-Block sowie Tesla-Oeffnung ueber Bastien Lavache.
- Figuren-Stub `wiki/figuren/john-watson.md` angelegt; `index.md` und `wiki/universum.md` beim Holmes-Stand sowie bei der Datumslogik nachgezogen.
- Wichtig: Die offizielle Holmes-Serienseite listet am `2026-04-28` bereits `Folge 21`, diese ist aber erst fuer `19.06.2026` angekuendigt; effektiv sind derzeit 20 Folgen veroeffentlicht.

## [2026-04-28] ingest | Sherlock Holmes Folgen 1 bis 6
- Sechs Folgen-Seiten unter `wiki/folgen/` angelegt: `SH 1` bis `SH 6`, inklusive Holmes-/Moriarty-Auftakt, `Verräterische Lilien`, `Unter falschem Verdacht` sowie dem ersten offenen Killjoy-/Wilde-/Adler-Block.
- Exakte Ersterscheinungen fuer `SH 2`, `SH 5` und `SH 6` ueber HolyShop gegengeprueft; `SH 4` bleibt mangels Primaerbeleg vorerst nur auf Jahresstand `2023`.
- `wiki/serien/sherlock-holmes.md` bei der Folgenliste auf die neuen Seiten verlinkt und `index.md` um eine eigene Sherlock-Folgen-Sektion erweitert.
- `app/data/folgen.json` fuer `SH 1` bis `SH 6` mit `wiki`, `logline`, `spielzeit_min`, `spoiler_level` und bereinigter ID von Folge 1 synchronisiert.

## [2026-04-28] ingest | Sherlock Holmes Folgen 7 bis 12
- Sechs weitere Folgen-Seiten unter `wiki/folgen/` angelegt: `SH 7` bis `SH 12`, vom Krankheits-/Carter-Roth-Block bis zum Paganini-/Venedig-Bogen.
- Exakte Ersterscheinungen fuer `SH 8` bis `SH 12` ueber HolyShop-Produktseiten verifiziert; `SH 7` vorerst ueber die HolyShop-Releaseliste `historic` datiert.
- `wiki/serien/sherlock-holmes.md` und `index.md` fuer die nun ingestierten Folgen `1` bis `12` nachgezogen.
- `app/data/folgen.json` fuer `SH 7` bis `SH 12` mit `wiki`, `logline`, `spielzeit_min`, `spoiler_level` und Zirkel-Einschaetzung synchronisiert.

## [2026-04-28] ingest | Sherlock Holmes Folgen 13 bis 20
- Acht weitere Folgen-Seiten unter `wiki/folgen/` angelegt: `SH 13` bis `SH 20`, vom Hafen-/Robur-/Frankenstein-Block bis zum Molderton-/Adrik-Bogen.
- Exakte Ersterscheinungen fuer `SH 13` bis `SH 19` ueber HolyShop-Produktseiten verifiziert; `SH 20` mit `24.04.2026` ueber die aktuelle HolyShop-Serienliste nachgezogen.
- `wiki/serien/sherlock-holmes.md` und `index.md` auf den nun ingestierten Holmes-Bestand `1` bis `20` erweitert.
- `app/data/folgen.json` fuer `SH 13` bis `SH 20` inkl. `wiki`, `logline`, `spielzeit_min`, `spoiler_level` und bereinigtem `SH 20`-Stub synchronisiert.

## [2026-04-28] ingest | Sherlock Holmes Folge 21
- Folgen-Seite `SH 21 Eine Studie in Blutrot` unter `wiki/folgen/` angelegt, obwohl die Folge am Arbeitstag noch nicht veroeffentlicht ist.
- Wichtig fuer die Datumslogik: `Erscheinungsdatum 19.06.2026`, Stand `28.04.2026` aber ausdruecklich nur angekuendigt.
- `index.md` und `app/data/folgen.json` um den angekuendigten Tesla-/Bastien-Lavache-Anschluss erweitert.

## [2026-04-28] wiki | Phileas Fogg Serienaufbereitung und Crawl-Start
- `wiki/serien/phileas-fogg.md` aus dem Blanko-Stub geholt: Kosmos-Rolle, Ankerfolgen, Crossover zu Wilde und die Fruehfunktion fuer Robur/Frankenstein/Dracula dokumentiert.
- Figuren-Stub `wiki/figuren/phileas-fogg.md` angelegt und elf bereits im Repo belegte DNAPF-Ankerfolgen als erste Wiki-Seiten unter `wiki/folgen/` gestartet.
- `index.md` um eine eigene DNAPF-Folgen-Sektion erweitert; Figuren- und Serieneintraege fuer Phileas nachgezogen.
- `app/data/folgen.json` fuer die vorhandenen DNAPF-Ankerfolgen mit `wiki`-Pfaden und Kurzloglines synchronisiert.

## [2026-04-28] wiki | Phileas-Anschluesse und Figurenanker nachgezogen
- Fehlende, bereits vielfach verlinkte Figuren-Seiten `dracula`, `robur`, `victor-frankenstein`, `kapitaen-nemo` und `edgar-allan-poe` angelegt.
- Alias-Seite `wiki/figuren/viktor-frankenstein.md` ergaenzt, damit beide im Repo vorhandenen Frankenstein-Schreibweisen weiter aufloesen.
- `wiki/serien/phileas-fogg.md` bei den Hauptfiguren auf die neuen Figuren-Seiten verlinkt.
- `index.md` im Figurenbereich um die neuen Kosmos-Anker aus der Phileas-/Zirkel-Achse erweitert.

## [2026-04-29] wiki | Phileas-Achse in Uebersichtsseiten verankert
- `wiki/universum.md` um verlinkte Figurenlisten und einen eigenen DNAPF-Fruehachse-Abschnitt erweitert.
- `wiki/konzepte/phasen.md` bei Phase 3 um konkrete DNAPF-Ankerfolgen fuer Robur, Frankenstein und Dracula geschaerft.
- `wiki/konzepte/hoerreihenfolgen.md` in Variante 3 um die aktuell wichtigsten DNAPF-Ankerfolgen ergaenzt.

## [2026-04-29] wiki | DNAPF-Nachbarserien nachgeschaerft
- `wiki/serien/dracula.md` und `wiki/serien/frankenstein.md` um exakte Startdaten sowie ihre fruehen DNAPF-Vorlaufpunkte erweitert.
- `wiki/serien/kapitaen-nemo.md` und `wiki/serien/poe-und-dupin.md` um die bereits lokal belegten DNAPF-Erstauftritte ihrer Hauptfiguren ergaenzt.
- Ziel war kein Voll-Ingest dieser Reihen, sondern eine sauberere Kosmos-Navigation rund um die Phileas-Fogg-Achse.

## [2026-04-29] ingest | Phileas Fogg Folgen 6, 7, 9, 13 bis 21
- Offizielle DNAPF-Folgenseiten `6`, `7`, `9` und `13` bis `21` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-29_phileas-fogg_folgen-06-07-09-13-bis-21.md`.
- Neue Folgen-Seiten `DNAPF 6`, `7`, `9`, `13` bis `20` angelegt; `DNAPF 21` von Stub auf groben Spoiler-Stand gehoben.
- Serienseite `wiki/serien/phileas-fogg.md`, `index.md` und `app/data/folgen.json` fuer den erweiterten Crawl synchronisiert.
- Auffaelligkeiten dokumentiert: Die offizielle Seite von `DNAPF 17` dupliziert offenbar den Klappentext von `DNAPF 16`; `DNAPF 21` heisst auf der offiziellen Folgenseite `Die sieben Seelen des Anubis`, waehrend die bisherige Loechel-Chronologie `Die sieben Steine des Anubis` notiert.

## [2026-04-29] ingest | Phileas Fogg Folgen 22 bis 32
- Neue Arbeitsquelle `raw/maritim/2026-04-29_phileas-fogg_folgen-22-bis-32.md` angelegt; offizielle DNAPF-Folgenseiten 22 bis 32 spoilerarm paraphrasiert.
- Neun neue Folgen-Seiten `DNAPF 22`, `23`, `25`, `27` bis `32` angelegt; die bisherigen Stubs `DNAPF 24` und `DNAPF 26` auf offiziellen Stand mit grober Handlung gehoben.
- `wiki/serien/phileas-fogg.md` und `index.md` fuer den neuen Block aktualisiert; offener Restbestand jetzt `DNAPF 33` bis `50`.
- `app/data/folgen.json` fuer den Block 22 bis 32 inkl. `spielzeit_min`, `wiki`, `logline` und angepasstem `spoiler_level` bei 24 und 26 synchronisiert.

## [2026-04-29] ingest | Phileas Fogg Folgen 33 bis 50
- Neue Arbeitsquelle `raw/maritim/2026-04-29_phileas-fogg_folgen-33-bis-50.md` angelegt; offizielle DNAPF-Folgenseiten 33 bis 50 spoilerarm paraphrasiert.
- Restliche 18 Folgen-Seiten `DNAPF 33` bis `DNAPF 50` angelegt; die Reihe liegt damit lokal erstmals vollstaendig bis Folge 50 vor.
- `wiki/serien/phileas-fogg.md`, `index.md` und `app/data/folgen.json` fuer den Abschlussblock synchronisiert; DNAPF ist als Voll-Crawl jetzt abgeschlossen.
- Sichtbare Besonderheit: `DNAPF 50` fuehrt als einzige Folge im spaeten Block ein exaktes Erscheinungsdatum (`2026-02-27`) und mit `139 min` deutlich erhoehte Spielzeit.

## [2026-04-29] wiki | Wilde-und-Adler-Serienseite nachgeschaerft
- `wiki/serien/oscar-wilde-und-irene-adler.md` aus dem Stub geholt und als Blitz-Mini-Serie mit Kosmos-Funktion, Vorlaufpunkten und offenen Datenluecken dokumentiert.
- Zentraler Repo-Befund: Die Reihe wirkt lokal nicht als Neubeginn, sondern als eigene Verdichtung einer seit `OWMH 16` aufgebauten Wilde/Adler-Achse.
- `index.md` fuer die Serie auf den neuen Stand gebracht; ein eigener Folgen-Crawl fuer `wilde-und-adler/` steht weiterhin aus.

## [2026-04-29] ingest | Wilde & Adler Folgen 1 bis 4
- Offizielle Serien- und Folgen-Seiten der Blitz-Mini-Serie `Oscar Wilde & Irene Adler – Sonderermittler der Krone` als neue paraphrasierte Arbeitsquelle abgelegt: `raw/maritim/2026-04-29_wilde-und-adler_folgen-01-bis-04.md`.
- Vier Folgen-Seiten `WIA 1` bis `WIA 4` unter `wiki/folgen/` angelegt; Serien-Seite `wiki/serien/oscar-wilde-und-irene-adler.md` auf konkreten Folgenstand und direkten Zirkel-Bezug angehoben.
- `index.md` und `app/data/folgen.json` fuer die Mini-Serie synchronisiert.
- Auffaelligkeit dokumentiert: Die offizielle Folgen-Seite von `WIA 3` wiederholt derzeit offenbar den Klappentext von `WIA 2`; die grobe Handlungsbeschreibung bleibt dort deshalb bewusst vorsichtig.

## [2026-04-29] wiki | Kapitaen-Nemo-Serienseite nachgeschaerft
- `wiki/serien/kapitaen-nemo.md` von Stub auf Entwurfsstand gehoben und als kleine Blitz-Spin-off-Reihe mit lokaler Kosmos-Einordnung ausgebaut.
- Nemo-Anker aus `DNAPF 1`, `18`, `20` sowie `41` bis `43` gebuendelt, damit die Reihe trotz fehlender Einzel-Ingests schon sauber an die Verne-Achse anschliesst.
- `index.md` fuer die Serien-Kurzbeschreibung nachgezogen; `zirkel` bleibt bewusst auf `unklar`, bis eigenstaendige Nemo-Folgen lokal vorliegen.

## [2026-04-29] ingest | Kapitaen Nemo Folgen 1 bis 2
- Neue Arbeitsquelle `raw/maritim/2026-04-29_kapitaen-nemo_folgen-01-02.md` angelegt; offizielle Nemo-Serien- und Folgen-Seiten 1 bis 2 spoilerarm paraphrasiert.
- Folgen-Seiten `NEM 1` und `NEM 2` unter `wiki/folgen/` angelegt; `wiki/serien/kapitaen-nemo.md` von bloesser Reihen-Einordnung auf echten Folgenstand hochgezogen.
- `index.md`, `wiki/figuren/kapitaen-nemo.md` und `app/data/folgen.json` fuer den nun lokal ingestierten Nemo-Zweiteiler synchronisiert.
- Auffaelligkeit dokumentiert: Die offizielle Serienseite zeigte beim Abruf noch nur Folge `01`, obwohl Figuren-Seiten und direkte Folgen-URL bereits auch Folge `02` belegen.
