---
quelle_typ: maritim
quelle_url:
  - "https://services.dnb.de/sru/dnb (MARC21-xml; Abfragen u. a. tit=Moriarty and tit=Folge, tit=Banshee and tit=Sherlock, per='Walter, Silke' and jhr>=2024, tit=Nemo, tit='Eine Stadt in Angst', tit='Irene Adler', tit='Frankenstein und der Zirkel der Sieben')"
  - "https://www.rautemedia.de/?s=<reihe>&post_type=product und https://www.rautemedia.de/produkt/<slug>/ (172 CD-Produktseiten, Felder Künstler, Veröffentlichung, Spielzeit)"
  - "https://itunes.apple.com/search?country=de&media=audiobook&term=<reihe> (Apple Books, Feld artistName; Feld description = Verlagstext)"
  - "https://itunes.apple.com/search?country=de&media=music&entity=album und /lookup?entity=song (Apple Music, Track-Zeiten DNAPF 35–37)"
  - "https://api.deezer.com/search/album und /album/<id>/tracks (Deezer, release_date und Track-Zeiten)"
  - "https://www.sonderermittler-der-krone.de/serien/<reihe>/<folge>/ (277 Folgenseiten, Felder Spielzeit, Erscheinungsjahr/-datum, Klappentext)"
  - "https://www.sonderermittler-der-krone.de/figuren/killjoy/"
  - "https://sherlockholmes.fandom.com/de/api.php (Seiten Der Schrei der Banshee, Die Rückkehr der Angst, Eine Stadt in Angst, Hinter den Kulissen)"
  - "https://www.audiolibrix.de/de/Search/Results?query=<reihe> (Autor im Produkt-Slug)"
  - "https://www.xn--hrspieltalk-rfb.de/forum/thread/<id>/ (Threads 29988, 29991, 29994, 25611, 26067, 26069, 30678, 31082, 30926, 31505)"
  - "https://www.lovelybooks.de/autor/Oliver-Fleischer/ (Einträge zu SHC 26 und 27)"
  - "https://de.wikipedia.org/wiki/Marc_Freund (Revision 257831813 vom 2025-07-12)"
quelle_datum: 2026-10-13
abgerufen: 2026-10-13
betrifft_serie:
  - moriarty
  - frankenstein
  - sherlock-holmes
  - sherlock-holmes-und-co
  - tesla
  - kapitaen-nemo
  - oscar-wilde-und-irene-adler
  - irene-adler
  - poe-und-dupin
  - phileas-fogg
  - wilde-mycroft-ungeloeste
zweck: "Autorschaft (zweite unabhängige Quelle), SHC 26/27 Autor, SHC 53 Datum, Schreibung Gaston Morel, Altfälle aus den Lints vom 17.08., 06.09. und 12.10.2026"
---

# Autorschaft, Datum und Altfälle — Belege vom 13.10.2026

Alle Abrufe am 13.10.2026 per Skript (curl bzw. Python-urllib). Wörtliche Auszüge stehen in Anführungszeichen oder Codeblöcken; alles andere ist Auswertung. DNB-Felder sind auf NFC normalisiert, Sortierzeichen entfernt.

## 1. Quellenbewertung für das Feld `autor`

| Quelle | Kanal | liefert | Einschränkung |
|---|---|---|---|
| DNB, Digitalausgabe, 245 $c und 100 (`Verfasser`) | Verlagsmetadaten Highscore Music (digital) | Autor:in je Folge | derselbe Datenstrom wie Apple Books, Audiolibrix und LovelyBooks/Audible — zählt zusammen als **eine** Quelle |
| Apple Books (`artistName`, Hörbuchsparte) | Verlagsmetadaten digital | Autor:in je Folge; am 13.10.2026 auch Moriarty 0–27 und Sherlock Holmes 1–23 (am 06.09.2026 noch ohne Treffer) | bei Blitz-Reihen steht der Reihenname im Feld (Tesla, WMU, OWIA, Nemo) |
| Audiolibrix (Produkt-Slug endet auf den Autorennamen) | Verlagsmetadaten digital | Autor:in je Folge, auch Tesla 1–9 und OWIA 1–4 | WMU 1–4 nur „Oscar Wilde“ |
| **Raute Media, Feld „Künstler“** | CD-Vertrieb (physisch) | Autor:in je CD: MOR 1–24, FRANK 1–24, SH 1–20, TES 1–8, IADK 1–32, EAPAD 11–34, DNAPF 39–50, OWMH 51–56, Boxen DRAC, OWIA, OWEP | **unabhängig vom Digitalstrom**, aber mit Übertragungsfehlern: „Aus den Archiven“ 4, 6, 7, 8, 9, 10 alle „Maureen Butcher“; EAPAD 33/34 „Markus Duschek“ gegen Silke Walter in allen anderen Quellen. Kein Eintrag für MOR 0, 25–27, FRANK 25–28, SH 21–24 |
| **DNB, CD-Ausgabe, 245 $c** („Dialogbuch: …“, „Autorin: …“, „Buch: …“) | Katalogisat des Tonträgers mit Booklet | Autor:in laut Verantwortlichkeitsangabe | nicht für alle Folgen vorhanden (MOR-CDs 25–27 ohne Verantwortlichkeitsangabe) |
| Hörspieltalk, Verlagsvorschau | Verlagsankündigung | vereinzelt „Von: …“ / „Autor: …“ (Nemo 1, 2, 5) | sonst keine Autorangaben |
| Wikipedia „Marc Freund“ | Sekundärquelle | Reihenebene: nennt u. a. „Moriarty – Zwischen Genie und Verbrechen“ und „Frankenstein und der Zirkel der Sieben“ | keine Folgenzuordnung |

**Gegenprobe Raute Media gegen bestehende Vault-Werte:** In allen Folgen mit vorhandenem `autor` und Raute-Eintrag stimmt „Künstler“ mit dem Vault überein — Ausnahme EAPAD 33 und 34 (siehe Abschnitt 3). Der Autorenwechsel FRANK 8 → 9 (Marc Freund → Silke Walter), IADK 16 → 17 und SH 4 → 5 liegt bei Raute Media an derselben Stelle wie in DNB und Apple Books.

## 2. Autor:in je Folge — bisher leere Felder

### Moriarty 0–27

| Folge | DNB Digitalausgabe 245 $c | Apple Books `artistName` | Raute Media „Künstler“ (Slug) |
|---|---|---|---|
| 0 | Marc Freund (IDN 1255746629) | Marc Freund (id 1578240630) | — |
| 1 | Marc Freund (IDN 1255728582) | Marc Freund (id 1530368395) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-1-das-raetsel-der-marie-celeste` |
| 2 | Marc Freund (IDN 1255728620) | Marc Freund (id 1539159511) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-2-die-wiege-des-verbrechens` |
| 3 | Marc Freund (IDN 1255736143) | Marc Freund (id 1551323557) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-3-die-beale-papiere` |
| 4 | Marc Freund (IDN 1255746645) | Marc Freund (id 1569145712) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-4-teuflische-jagd` |
| 5 | Marc Freund (IDN 1255664983) | Marc Freund (id 1610428114) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-5-gefaehrliches-erbe` |
| 6 | Marc Freund (IDN 125572305X) | Marc Freund (id 1619945314) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-6-boeses-erwachen` |
| 7 | Marc Freund (IDN 1262964733) | Marc Freund (id 1634563821) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-7-dunkle-geheimnisse` |
| 8 | Marc Freund (IDN 1277127115) | Marc Freund (id 1656896907) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-8-im-schatten-des-giganten` |
| 9 | Marc Freund (IDN 1289586330) | Marc Freund (id 1687967330) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-9-boese-neue-welt` |
| 10 | Marc Freund (IDN 1298817641) | Marc Freund (id 1701621509) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-10-familienbande` |
| 11 | Marc Freund (IDN 1306348781) | Marc Freund (id 1712101317) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-11-im-kreuzfeuer` |
| 12 | Marc Freund (IDN 1316149951) | Marc Freund (id 1725809458) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-12-wiedergeburt` |
| 13 | Marc Freund (IDN 1329378628) | Marc Freund (id 1746139358) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-13-ein-seltsamer-freund` |
| 14 | Marc Freund (IDN 133403382X) | Marc Freund (id 1753863135) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-14-das-schiff-der-verdammten` |
| 15 | Marc Freund (IDN 133886310X) | Marc Freund (id 1761155091) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-15` |
| 16 | Marc Freund (IDN 1342286413) | Marc Freund (id 1768717068) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-16-wo-alles-endet` |
| 17 | Marc Freund (IDN 1350679895) | Marc Freund (id 1784482241) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-17-dem-tod-entrissen` |
| 18 | Marc Freund (IDN 1360368809) | Marc Freund (id 1802819137) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-18-fluesterndes-eis` |
| 19 | Marc Freund (IDN 1364791358) | Marc Freund (id 1808433416) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-19-auf-blutiger-spur` |
| 20 | Marc Freund (IDN 1370993161) | Marc Freund (id 1816722459) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-20-doppelter-verrat` |
| 21 | Marc Freund (IDN 1375376888) | Marc Freund (id 1836974809) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-21-unter-strom` |
| 22 | Marc Freund (IDN 1380130689) | Marc Freund (id 1847364411) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-22-gruenes-feuer` |
| 23 | Marc Freund (IDN 1386608041) | Marc Freund (id 1859657256) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-23-jagdinstinkt` |
| 24 | Marc Freund (IDN 139185120X) | Marc Freund (id 1882047038) | Marc Freund — `moriarty-zwischen-genie-und-verbrechen-24-ausgeliefert` |
| 25 | Marc Freund (IDN 1394679645) | Marc Freund (id 1888506044) | — |
| 26 | Marc Freund (IDN 1398874361) | Marc Freund (id 6767537477) | — |
| 27 | Marc Freund (IDN 1416377301) | Marc Freund (id 6783858827) | — |

Wörtliches Beispiel DNB (IDN 1255664983): `245 $a Moriarty, Folge 5: Gefährliches Erbe $c Marc Freund`. Wörtliches Beispiel Raute Media (Moriarty 1): „Künstler | Marc Freund | Veröffentlichung | 2020-09-25“.

- **MOR 0:** kein Raute-Eintrag. Zweitbeleg über die Erstveröffentlichung als SHC 55: DNB-CD-Satz IDN 1219518379, 245 $c „Sherlock Holmes Charles Rettinghaus [und weitere] ; Buch: Marc Freund“ (bereits in `raw/maritim/2026-10-12_fandom-dnb-audible_owmh-01-44-shc-besetzung.md`); Apple Books SHC 55 (id 1529849575): Marc Freund.
- **MOR 25–27:** DNB-CD-Sätze ohne Verantwortlichkeitsangabe (IDN 1397811471, 1397812168, 1415523800: „Moriarty - Zwischen Genie und Verbrechen 25 $b Ein Hauch von Ewigkeit“ usw.), kein Raute-Eintrag. Audiolibrix-Slugs: `…/147493/Hoerbuch-Moriarty-Folge-25-Ein-Hauch-von-Ewigkeit-Marc-Freund`, `…/151448/…-Folge-26-Der-Teufel-von-Cat-Rock-Marc-Freund`, `…/184753/…-Folge-27-Tiefe-Wasser-Marc-Freund` — derselbe Digitalstrom. **Folgengenau nur eine Quelle.**

### Sherlock Holmes – Sonderermittler der Krone 1–24

| Folge | DNB Digitalausgabe 245 $c | Apple Books `artistName` | Raute Media „Künstler“ (Slug) |
|---|---|---|---|
| 1 | — | Marc Freund (id 1651422739) | Marc Freund — `sherlock-holmes-sonderermittler-der-krone-1-dunkle-kraefte-teil-1` |
| 2 | — | Marc Freund (id 1652652558) | Marc Freund — `sherlock-holmes-sonderermittler-der-krone-2-dunkle-kraefte-teil-2` |
| 3 | — | Marc Freund (id 1670975481) | Marc Freund — `sherlock-holmes-sonderermittler-der-krone-3-verraeterische-lilien` |
| 4 | — | Marc Freund (id 1689061320) | Marc Freund — `sherlock-holmes-sonderermittler-der-krone-4-unter-falschem-verdacht` |
| 5 | — | Silke Walter (id 1707048541) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-5-toedliche-rituale` |
| 6 | — | Silke Walter (id 1726930003) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-06-das-geheimnis-des-earls` |
| 7 | — | Silke Walter (id 1740094385) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-07-gefaehrliche-expeditionen` |
| 8 | — | Silke Walter (id 1747640564) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-08-die-sieben-leben-des-carter-roth` |
| 9 | — | Silke Walter (id 1753805791) | Silke Walter — `sherlock-holmes-09-das-vermaechtnis-des-geigers` |
| 10 | — | Silke Walter (id 1759955899) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-10-teufelsmelodie` |
| 11 | — | Silke Walter (id 1767823111) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-11-gesang-der-toten` |
| 12 | — | Silke Walter (id 1771420549) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-12-takt-des-schicksals` |
| 13 | — | Silke Walter (id 1786560303) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-13-faustrecht` |
| 14 | — | Silke Walter (id 1794078986) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-14-wut-und-verzweiflung` |
| 15 | — | Silke Walter (id 1807248469) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-15-herz-aus-stein` |
| 16 | — | Silke Walter (id 1816722618) | Silke Walter — `sherlock-holmes-16-sonderermittler-der-krone-polarlichter` |
| 17 | — | Silke Walter (id 1834187031) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-17-der-vermisste-von-molder-hall` |
| 18 | — | Silke Walter (id 1845860825) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-18-gefaehrliche-geheimnisse` |
| 19 | — | Silke Walter (id 1853556744) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-19-doppelter-verlust` |
| 20 | — | Silke Walter (id 1879354229) | Silke Walter — `sherlock-holmes-sonderermittler-der-krone-20-verhaengnisvolles-meisterwerk` |
| 21 | — | Silke Walter (id 6770578972) | — |
| 22 | — | Silke Walter (id 6766263480) | — |
| 23 | — | Silke Walter (id 6779632618) | — |
| 24 | — | — | — |

DNB-CD-Sätze („1 CD … 1 Booklet (4 ungezählte Seiten)“):

- IDN 1397812540: `245 $a Eine Studie in Blutrot $c Autorin: Silke Walter ; Sherlock Holmes Charles Rettinghaus [und weitere]` — Reihe „Sherlock Holmes 21“.
- IDN 1397812745: `245 $a Sherlock Holmes - Sonderermittler der Krone 22 $b Der zweite Blutfleck` — ohne Verantwortlichkeitsangabe.
- IDN 1415524378: `245 $a Der Wiedergänger von Soho $c Autorin: Silke Walter ; …` — Folge 23.
- IDN 1415523894: `245 $a Die Straßen der Angst $c Autorin: Silke Walter ; Sherlock Holmes Charles Rettinghaus [und weitere]` — Folge 24 (erscheint laut Vault am 04.12.2026; Einzelquelle, nicht eingetragen).
- Reihensatz IDN 1420774166: `245 $a Sherlock Holmes $b Sonderermittler der Krone $c Autorin: Silke Walter ; Sherlock Holmes Charles Rettinghaus [und weitere]`, „[2025]-“.

### Frankenstein 25–28

- IDN 1415178054: `245 $a Finsteres Erbe $c Autorin: Silke Walter ; Cast Victor Frankenstein Dietmar Wunder [und weitere]` — Folge 27 (CD). Dazu Digitalausgabe IDN 1415392617 „… Folge 27: Finsteres Erbe (Ungekürzt) $c Silke Walter“ und Apple Books id 6779627750.
- IDN 1415689350: `245 $a Gegen jeden Widerstand $c Autorin: Silke Walter ; Cast Victor Frankenstein Dietmar Wunder [und weitere]` — Folge 28 (erscheint laut Vault am 13.11.2026; Einzelquelle, nicht eingetragen).
- FRANK 25 (IDN 1397812206) und 26 (IDN 1397811935): ebenfalls „Autorin: Silke Walter“.

### Tesla 1–8

| Folge | Raute Media „Künstler“ (Slug) | Audiolibrix (Slug) |
|---|---|---|
| 1 | Silke Walter — `tesla-1-die-kraft-des-lichts` | `/de/Directory/Book/120069/Hoerbuch-Tesla-Folge-1-Die-Kraft-des-Lichts-Silke-Walter` |
| 2 | Silke Walter — `tesla-2-toedliches-spielzeug` | `/de/Directory/Book/120801/Hoerbuch-Tesla-Folge-2-Todliches-Spielzeug-Silke-Walter` |
| 3 | Silke Walter — `tesla-3-gefangen-in-cedric-manor` | `/de/Directory/Book/124711/Hoerbuch-Tesla-Folge-3-Gefangen-in-Cedric-Manor-Silke-Walter` |
| 4 | Silke Walter — `tesla-4-im-spannungsfeld` | `/de/Directory/Book/128238/Hoerbuch-Tesla-Folge-4-Im-Spannungsfeld-Silke-Walter` |
| 5 | Silke Walter — `tesla-5-zweite-haut` | `/de/Directory/Book/134520/Hoerbuch-Tesla-Folge-5-Zweite-Haut-Silke-Walter` |
| 6 | Silke Walter — `tesla-6-im-labyrinth-der-schlange` | `/de/Directory/Book/137259/Hoerbuch-Tesla-Folge-6-Im-Labyrinth-der-Schlange-Silke-Walter` |
| 7 | Silke Walter — `tesla-7-ein-uraltes-raetsel` | `/de/Directory/Book/139750/Hoerbuch-Tesla-Folge-7-Ein-uraltes-Ratsel-Silke-Walter` |
| 8 | Silke Walter — `tesla-8-koenig-der-luefte` | `/de/Directory/Book/144457/Hoerbuch-Tesla-Folge-8-Konig-der-Lufte-Silke-Walter` |

DNB-Reihensatz der CD-Ausgabe (IDN 1420125966): `245 $a Tesla $c Dialogbuch: Silke Walter ; Nikola Tesla Patrick Winczewski [und weitere]`, „[Deutschland] All Ears GmbH [2026]-“, Feld 100 „Walter, Silke — Verfasser“. Einzelsätze für Tesla 1–8 führt die DNB nicht (nur Folge 9, IDN 141552405X). Apple Books nennt als `artistName` nur „Tesla“.

### Die Abenteuer des Kapitän Nemo 1–4

- IDN 139010222X: `245 $a Die Gestrandeten des Luftmeeres $c Dialogbuch: Anton Serkalow ; Kapitän Nemo K. Dieter Klebsch [und weitere]` — „[Nordstrand] Blitz Verlag [2026]“, 1 CD mit Booklet, Reihe „Die Abenteuer des Kapitän Nemo 1“.
- IDN 1394986440: `245 $a Das Geheimnis der Insel $c Dialogbuch: Anton Serkalow ; Kapitän Nemo K. Dieter Klebsch [und weitere]` — Folge 2.
- IDN 1397811463: `245 $a Verschollen im Eis $c Dialogbuch: Marc Freund ; Kapitän Nemo K. Dieter Klebsch [und weitere]` — Folge 3, Feld 100 „Freund, Marc — Verfasser“ (GND 106804909X).
- IDN 1398691186: `245 $a Die Überlebenden der Erebus $c Dialogbuch: Marc Freund ; …` — Folge 4.
- Reihensatz IDN 1402404212: „Die Abenteuer des Kapitän Nemo : nach den Motiven von Jules Verne / Dialogbuch: Anton Serkalow ; …“.
- Hörspieltalk, Thread 29988 (Nemo 1), Startbeitrag: „Von : Anton Serkalow“; ein späterer Beitrag zitiert ein Händlerlisting „Anton Serkalow, Jules Verne: Die Abenteuer des Kapitän Nemo - Folge 1: Die Gestrandeten des Luftmeeres Hörbuch Download“.
- Hörspieltalk, Thread 29994 (Nemo 2), Startbeitrag: „Von: Anton Serkalow“.
- Hörspieltalk, Sammelthread 29991: Nemo 1 „Von : Anton Serkalow“, Nemo 2 „Von: Anton Serkalow“, Nemo 5 „Autor : Marc Freund“; zu Nemo 3 und 4 dort keine Autorangabe.

### Oscar Wilde & Irene Adler 1–4

- Raute Media, „Oscar Wilde & Irene Adler: Folgen 1-4“: „Künstler | Silke Walter | Veröffentlichung | 2024-10-25“, Spielzeit 218 Minuten.
- Audiolibrix-Slugs: `/de/Directory/Book/117331/Hoerbuch-Oscar-Wilde-Irene-Adler-Folge-1-Das-schottische-Stuck-Silke-Walter`, `117333/…-Folge-2-Die-Tragodie-der-Irrungen-Silke-Walter`, `117334/…-Folge-3-Ein-Sommernachtsalbtraum-Silke-Walter`, `117332/…-Folge-4-Was-ihr-nicht-wollt-Silke-Walter`.
- DNB: kein Satz. Apple Books `artistName`: „Oscar Wilde & Mycroft Holmes, Irene Adler & Oscar Wilde & Irene Adler“ (Reihenname, unbrauchbar).

### Einzelfälle

- **IADK 0:** DNB Digitalausgabe IDN 1258858614: `245 $a Irene Adler, Sonderermittlerin der Krone, Folge: Hinter den Kulissen $c Marc-Oliver Bischoff`. Zweitbeleg über die Erstveröffentlichung als SHC 45: DNB-CD-Satz IDN 1190907909 „… ; Buch: Marc-Oliver Bischoff“ (Rohdatei vom 12.10.2026).
- **EAPAD 22:** DNB Digitalausgabe IDN 1321868359 „… Folge 22: Der Plan des Meisterdiebs $c Markus Duschek“; Apple Books: Markus Duschek; Raute Media „Künstler | Markus Duschek | Veröffentlichung | 2024-04-05“.
- **EAPAD 28:** DNB Digitalausgabe IDN 1360368884 „… Folge 28: Die letzte Bescherung (ungekürzt) $c Markus Duschek“; Apple Books: Markus Duschek; Raute Media „Künstler | Markus Duschek | Veröffentlichung | 2025-04-25“.
- **WMU 1–4 (nicht eingetragen, Einzelquelle):** DNB-CD-Sätze IDN 1390103862 „Der Riese von Griffin / Dialogbuch: Silke Walter ; Oscar Wilde Sascha Rotermund [und weitere]“, IDN 139498815X „Die Todesblume / Dialogbuch: Silke Walter ; …“, IDN 139781165X „Das Fledermausamulett / Dialogbuch: Silke Walter ; …“, IDN 1397811838 „Das Buch des Grauens / Dialogbuch: Silke Walter ; …“; Reihensatz IDN 1402296622. Audiolibrix und Apple Books führen nur „Oscar Wilde“. WMU 5: kein Beleg.
- **DNAPF 1 (nicht eingetragen, Einzelquelle):** DNB-CD-Satz IDN 1081668288: `245 $a Entführung auf hoher See $c Dialogbuch: Markus Topf und Dominik Ahrens ; Erzähler/Jules Verne Christian Brückner [und 22 weitere]`; die Digitalausgabe IDN 1261369157 nennt nur „Jules Verne“.
- **IADK 36, OWMH 60 (nicht eingetragen, unveröffentlicht, Einzelquelle):** DNB Digitalausgabe IDN 1417515074 „… Folge 36: Die Kraft der Illusion (Ungekürzt) $c Silke Walter“, IDN 1419809253 „… Folge 60: Tiefe Reue (Ungekürzt) $c Silke Walter“.
- **DNAPF 53:** DNB-CD-Satz IDN 1421034786 ohne Verantwortlichkeitsangabe; kein Beleg.

## 3. Abweichungen bei bestehenden `autor`-Werten

- **EAPAD 33 „Der letzte Tanz“ und 34 „Glorreiche Zeiten“:** Vault, DNB-Digitalausgabe (IDN 1386607940, 1391851099) und Apple Books: **Silke Walter**; Raute Media „Künstler“: **Markus Duschek**. Die DNB-CD-Sätze zu EAPAD 35 und 36 nennen „Autorin: Silke Walter“ (IDN 1397812710, 139781070X); für 33/34 liegt kein CD-Satz mit Verantwortlichkeitsangabe vor.
- **SHC 26/27:** siehe Abschnitt 4.
- **SHC 19 (keine eigene Vault-Seite):** DNB-CD „Dialogbuch: Jonas Maas“, Fandom „BUCH = Jonas Maas“; Digitalausgabe und Apple Books „Thomas Tippner“ — dasselbe Muster wie SHC 26/27.

## 4. SHC 26/27 „Der Schrei der Banshee“ — Autor

DNB, sechs Sätze zur Abfrage `tit="Banshee" and tit="Sherlock"`:

| IDN | Art | 245 | 100 / 700 |
|---|---|---|---|
| 1114759953 | 1 CD, 1 Booklet, Romantruhe Audio [2016], Reihe „Sherlock Holmes & Co 26“ | `$a Der Schrei der Banshee $n Teil 01 von 02 $c Sherlock Holmes Charles Rettinghaus [und viele weitere] ; Dialogbuch: Jonas Maas` | 100 „Maas, Jonas — Verfasser“ |
| 1114760072 | 1 CD, 1 Booklet, [2016], „Sherlock Holmes & Co 27“ | `$a Der Schrei der Banshee $n Teil 02 von 02 $c … ; Dialogbuch: Jonas Maas` | 100 „Maas, Jonas — Verfasser“ |
| 1115215000 | 2 CDs, Romantruhe Audio / Maritim [2016] | `$a Der Schrei der Banshee $c … ; Dialogbuch: Jonas Maas` | 100 „Maas, Jonas — Verfasser“ |
| 1201305969 | 3 CDs, Romantruhe Audio 2019/2020, „Sherlock Holmes & Co 26/28“ | `$a Der Schrei der Banshee $c Sherlock Holmes Charles Rettinghaus [und weitere] ; Dialogbuch: Jonas Maas` | 700 „Maas, Jonas $t Der Schrei der Banshee“ |
| 1261303083 | Online-Ressource, Highscore Music 2018 | `$a Sherlock Holmes & Co, Folge 26: Der Schrei der Banshee, Episode 1 $c Oliver Fleischer` | 100 „Fleischer, Oliver — Verfasser“ |
| 1261303121 | Online-Ressource, Highscore Music 2018 | `$a Sherlock Holmes & Co, Folge 27: Der Schrei der Banshee, Episode 2 $c Oliver Fleischer` | 100 „Fleischer, Oliver — Verfasser“ |

- Fandom, Seite „Der Schrei der Banshee“ (pageid 18554, Revision 2023-04-23T18:07:21Z), Infobox: `BUCH = [[Jonas Maas]]`, `REG =[[Sebastian Pobot]]`, `VER = 2. September 2016`.
- Apple Books: „Sherlock Holmes & Co, Folge 26: Der Schrei der Banshee, Episode 1“ (id 1483159681) und „Folge 27 … Episode 2“ (id 1483162630): Oliver Fleischer, 2016-09-02. Ebenso „Sherlock Holmes, Sonderermittler der Krone - Aus den Archiven, Folge 6 / Folge 7: Der Schrei der Banshee 1./2. Teil“ (id 1773764888, 1773765389): Oliver Fleischer.
- LovelyBooks: „Der Schrei der Banshee 1: Sherlock Holmes & Co 26“ und „… 2: … 27“, Autor „Oliver Fleischer“, Verlag „Skyscore Media“, 05.10.2017 (Audible-Ausgabe, ASIN B0765XCWTX).
- Raute Media, „Aus den Archiven … 06“ und „… 07“: „Künstler | Maureen Butcher“ — derselbe Name steht dort bei Archiv 4, 8, 9 und 10 und ist erkennbar ein Übertragungsfehler.
- DNB-Abfrage `per="Fleischer, Oliver" and tit="Sherlock"`: genau diese zwei Digitalsätze, sonst nichts.
- Websuche (13.10.2026): Deezer führt bei „Aus den Archiven, Folge 6“ Oliver Fleischer als Autor der Tracks (Angabe der Suchmaschine, nicht selbst abgerufen).

**Befund:** Tonträger mit Booklet (vier DNB-Sätze, zwei Auflagen 2016 und 2019) und Fandom nennen Jonas Maas; der Digitalstrom (DNB-Digitalausgabe, Apple Books, LovelyBooks/Audible) nennt Oliver Fleischer. Keine Quelle weist beiden Namen unterschiedliche Funktionen zu.

## 5. SHC 53 „Die Rückkehr der Angst“ — Datum

Apple Books (Hörbuchsparte), Suche „Sherlock Holmes & Co Folge 5“:

```
1499093296 | Sherlock Holmes & Co, Folge 51: Der bleiche Tod | Markus Duschek | 2020-03-13
1508600540 | Sherlock Holmes & Co, Folge 52: Boten der Angst | Markus Duschek | 2020-05-08
1517115423 | Sherlock Holmes & Co, Folge 53: Die Rückkehr der Angst | Markus Duschek | 2020-07-03
1517180609 | Sherlock Holmes & Co, Folge 54: Tod vor laufender Kamera | Markus Duschek | 2020-08-28
```

Deezer (`/album/<id>`, Feld `release_date`):

```
131801172 Folge 51: Der bleiche Tod 2020-03-13 UPC 192231282307
142277652 Folge 52: Boten der Angst 2020-05-08 UPC 192231304108
153034742 Folge 53: Die Rückkehr der Angst 2020-07-03 UPC 192231318778
164258602 Folge 54: Tod vor laufender Kamera 2020-08-28 UPC 192231318761
```

Fandom, Seite „Die Rückkehr der Angst“ (pageid 20127, Revision 2021-10-03T22:34:21Z): `VER = 8. Mai 2020`, `BUCH = [[Markus Duschek]]`. Eigene Fandom-Seiten zu SHC 52 und 54 existieren nicht.

**Befund:** Der 08.05.2020 ist der Termin von SHC 52 „Boten der Angst“. Die Reihe erscheint im Achtwochentakt (13.03., 08.05., 03.07., 28.08.2020). Vault-Wert 03.07.2020 bestätigt.

## 6. Schreibung „Gaston Morel“

- Verlagstext EAPAD 14 „Nachts auf der Seine“ (Apple Books, Feld `description`): „… Was haben Gaston Morel und seine Verbündeten mit dem …“.
- Verlagstext EAPAD 17 „Entfesselter Wahn“ (Apple Books, Feld `description`): „… auch für diesen Fall hat Dupins Erzfeind, Gaston Morel, bereits vorgesorgt. …“.
- Dieselben Texte mit „Gaston Morel“ stehen bereits in `raw/maritim/2026-04-30_poe-dupin_folgen-03-bis-34.md` (Klappentexte der Fanseite).
- Fanseite: keine Figurenseite (`/figuren/gaston-morel/` und `/figuren/gaston-morell/` liefern HTTP 404).
- „Morell“ mit Doppel-l steht in `raw/` nur in einer Suchbegriffsliste der SHC-Kanonprüfung vom 06.09.2026; laut Lint 2026-10-12 geht die Vault-Schreibung auf die Löchel-Chronologie zurück.

## 7. DNAPF 36 „Der letzte Tag auf Erden“ — Laufzeit

Fanseite, <https://www.sonderermittler-der-krone.de/serien/phileas-fogg/folge36-der-letzte-tag-auf-erden/>, HTML wörtlich:

```
<dt>Erscheinungsjahr</dt><dd>2023</dd><dt>Spielzeit</dt><dd>68 min</dd>
```

Streaming (Summe der Track-Zeiten):

| Folge | Apple Music (collectionId, Tracks, Summe) | Deezer (Album, Tracks, Summe) | Fanseite live | Vault vorher |
|---|---|---|---|---|
| DNAPF 35 | 1680675390, 39 Tracks, 61,54 min | 425514297, 39 Tracks, 61,18 min | 61 min | 61 |
| **DNAPF 36** | 1682881203, 43 Tracks, **67,72 min** | 431246917, 43 Tracks, **67,37 min** | **68 min** | 58 |
| DNAPF 37 | 1697868814, 39 Tracks, 61,54 min | 465694995, 39 Tracks, 61,23 min | 62 min | 62 |

Die Rohdatei `raw/maritim/2026-04-29_phileas-fogg_folgen-33-bis-50.md` nennt „Spielzeit: `58 min`“. Ein Wayback-Stand der Seite liegt nicht vor (`archive.org/wayback/available` leer); ob die Fanseite den Wert geändert hat oder die Abschrift vom 29.04.2026 fehlerhaft war, ist nicht feststellbar.

**Vollabgleich Laufzeit:** 277 Folgenseiten der Fanseite abgerufen (alle Vault-Folgen mit Fanseiten-URL). 276 × `spielzeit_min` = Fanseite (SH 10 nach einem fehlgeschlagenen Erstabruf einzeln nachgeholt: 62 min), 1 × abweichend (DNAPF 36). 43 Vault-Folgen haben keine Fanseiten-URL auf der Seite.

**Nebenbefund Datum (Fanseite gegen Vault):** MOR 25 (06.05.2026) und SH 23 (10.09.2026) sind die bekannten Tag/Monat-Dreher; dazu WMU 4 „Das Buch des Grauens“ — Fanseite „18.08.2026“, Vault 14.08.2026 (bekannter, am 06.09.2026 zugunsten von Storytel, Apple Music und Deezer aufgelöster Konflikt; die Fanseite führt den 18.08. unverändert). Weitere Abweichungen zwischen Fanseiten-Datum bzw. -Jahr und Vault gibt es nicht.

## 8. SHC 19 „Eine Stadt in Angst“ — Archiv-Mapping

- DNB-CD-Satz IDN 1079501592: `245 $a Eine Stadt in Angst $c Sherlock Holmes Charles Rettinghaus [und 11 weitere] ; Dialogbuch: Jonas Maas`, „2 CDs, 1 Booklet“, Reihe „Sherlock Holmes & Co 19“, Romantruhe Audio / Maritim [2015].
- DNB Digitalausgabe IDN 1261324773: „Sherlock Holmes & Co, Folge 19: Eine Stadt in Angst / Thomas Tippner“ — **ein** Satz, EAN 4260507139894.
- Apple Books: **ein** Eintrag „Sherlock Holmes & Co, Folge 19: Eine Stadt in Angst“ (id 1483159407, 2015-11-20); Folge 20 ist „Die Verschwundenen von Zimmer 5“ (2015-12-04).
- Fandom, Seite „Eine Stadt in Angst“ (pageid 17467, Revision 2021-10-03T22:29:58Z): „LEN = ca. 95“, „VER = 20. November 2015“, „Das Hörspiel erschien 2015 als Nr. 19 …“, „Das Hörspiel ist auf einer Doppel-CD …“.
- Raute Media, Archiv-Linie: „… 03: Eine Stadt in Angst Teil 1“ — Spielzeit 49 Minuten, 2024-04-19; „… 04: Eine Stadt in Angst Teil 2“ — Spielzeit 46 Minuten, 2024-05-17. Summe 95 Minuten.
- Apple Books: „Sherlock Holmes, Sonderermittler der Krone - Aus den Archiven, Folge 3: Eine Stadt in Angst 1. Teil“ (2024-04-19) und „Folge 4: … 2. Teil“ (2024-05-17).

**Befund:** SHC 19 ist **eine** Folge auf Doppel-CD (ca. 95 Minuten), die für die Archiv-Linie in zwei Folgen geteilt wurde (49 + 46 = 95 Minuten). Es fehlt keine SHC-Nummer. Anders SHC 26/27, 31/32 und 41/42, die schon im Original zwei Nummern tragen.

## 9. Zweiteiler — Klappentext

- LovelyBooks/Audible, SHC 26: „Episode 1:<br>An der Küste Cornwalls kommt ein renommierter Wissenschaftler auf rätselhafte Weise ums Leben. … Hilfe bekommt er dabei von unerwarteter Seite...“
- LovelyBooks/Audible, SHC 27: „Episode 2:<br>An der Küste Cornwalls kommt ein renommierter Wissenschaftler …“ — **wortgleich**, nur das Präfix wechselt.
- Hörspieltalk Thread 25611 (Archiv 6, „Teil 1&2“): derselbe Text, „Teil 1 erscheint am 29.11 und Teil 2 am 13.12“.
- Hörspieltalk Thread 26067 (Archiv 7, Wiedergabe der Raute-Media-Seite): „2. Teil: An der Küste Cornwalls kommt ein renommierter Wissenschaftler …“, „SPIELZEIT 43 min“.
- Raute Media: Archiv 6 — 46 Minuten, Archiv 7 — 43 Minuten.
- Hörspieltalk Thread 26069 (Archiv 4 „Eine Stadt in Angst (Teil 2)“): der vollständige Klappentext von SHC 19.

**Befund:** Der Verlag gibt für beide Teile in jedem Kanal denselben Text aus, höchstens mit vorangestelltem „Episode 1:“ / „2. Teil:“. Ein teilgenauer Klappentext existiert nicht. Für SHC 41/42 wurde keine neue Quelle gefunden (DNB: zwei CD-Sätze IDN 117068923X und 1172466521, beide „Das Verschwinden der Louise M. / … ; by Willis Grant“ ohne Inhaltsangabe).

## 10. IADK 18 „Dr. Duerte“, IADK 5/6, IADK 9

Fanseite, Klappentext IADK 18 (wörtlich): „… Währenddessen sorgt sich Mr. Wu in Temuco über das plötzliche Verschwinden von Irene Adler. Mithilfe von Dr. Duerte und Fernando Abad setzt er alle Hebel in Bewegung, um ein Lebenszeichen von der Sonderermittlerin der Krone zu erhalten.“ Apple Books (`description`, Folge 18): wortgleich, ebenfalls „Dr. Duerte“.

Fanseite, Klappentext IADK 5: „Am Covent Garden Theater stirbt ein Bühnenarbeiter an einem Stromschlag - Sabotage. Ihre Ermittlungen führen Sonderermittlerin Irene Adler dabei mitten in den »Stromkrieg« der verbitterten Kontrahenten George Westinghouse und Thomas Edison. …“ — **keine Jahresangabe**.

Fanseite, Klappentext IADK 6: „Im Zug zur Weltausstellung in Paris verschwindet der britische Erfinder Louis Le Prince spurlos, und mit ihm ein völlig neuartiger Filmprojektionsapparat. …“ — **keine Jahresangabe**.

Fanseite, Klappentext IADK 9: „Mycroft Holmes schickt Irene Adler in die Tunguska Region nach Sibirien, wo sie den Zweck einer geheimnisvollen Expedition ergründen soll. … angesichts der nahenden Katastrophe …“ — **keine Jahresangabe**. Apple Books jeweils wortgleich.

## 11. „Mister Killroy“ / Killjoy in SHC 45 = IADK 0

- Fandom, Seite „Hinter den Kulissen“: Tabellenzeile `|[[Mister Killroy]]` / `|[[Matti Klemm]]` (unverändert einzige Rollenquelle).
- Fanseite, Figurenseite „Mr. Killjoy“: „Gesprochen wird Killjoy von Matti Klemm.“ Die Folgenübersicht Irene Adler beginnt mit „1: Tod im Oberhaus“ — **Folge 0 fehlt dort**.
- Fanseite, Folgenseite IADK 0: Figurenliste nur „Irene Adler“; der Klappentext nennt „einen mächtigen Gegenspieler, der hinter den Kulissen agiert“, keinen Namen.
- Matti Klemm steht in der DNB-Sprecherliste von SHC 45 (Rohdatei vom 12.10.2026).

**Befund:** Die Rolle bleibt Einzelquelle (Fandom). Gestützt ist nur, dass der Stammsprecher mitwirkt.

## 12. Raute-Media-CD-Termine gegen `erschienen`

Von den zuordenbaren Raute-Einträgen der Einzelfolgen (ohne Boxen und Archiv-Linie) weichen 35 vom Vault ab:

| Abstand CD − Vault | Folgen |
|---|---|
| +7 bis +28 Tage (CD später) | FRANK 7, 21, 23 · IADK 1, 31 · MOR 7, 21, 23 · OWMH 54 · DNAPF 39, 42 · EAPAD 33 · SH 19 · TES 5 |
| +77 / +147 Tage | EAPAD 12, EAPAD 11 (CD-Nachzügler) |
| −1 Tag | OWMH 52 |
| −7 / −8 Tage (CD früher) | FRANK 4 · IADK 21, 30, 32 · MOR 3, 4, 10, 16 · EAPAD 23 · SH 9 · TES 3, 8 |
| −14 Tage | SH 1, 2 · **MOR 19, MOR 20** |
| −28 Tage | FRANK 8 · EAPAD 14 |

In allen Fällen außer MOR 19 und MOR 20 stimmt der Vault mit Apple Books überein (digitale Ersterscheinung).

**MOR 19 „Auf blutiger Spur“:** Vault 27.06.2025 (= HolyShop). Raute-CD 2025-06-13, Apple Books 2025-06-13, Deezer Album 742372921 `release_date` 2025-06-13; laut Rohdatei vom 12.10.2026 auch Apple Music und Audible 13.06.2025.

**MOR 20 „Doppelter Verrat“:** Vault 29.08.2025 (= HolyShop). Raute-CD 2025-08-15, Apple Books 2025-08-15, Deezer Album 762880161 `release_date` 2025-08-15; laut Rohdatei vom 12.10.2026 auch Apple Music und Audible 15.08.2025.

## 13. Hörspieltalk-Vorschautermine WMU

- Thread 30678 (WMU 2 „Die Todesblume“): „Erscheint am 10.4“ — Vault 10.04.2026 (gleich).
- Threads 31082 (WMU 3) und 30926 (WMU 4): am 13.10.2026 im Startbeitrag nur „Laufzeit: Ca.52 Minuten“, keine Terminzeile; die am 12.10.2026 notierten Vorschautermine „29.5“ und „26.6“ liegen vor den Vault-Daten 19.06.2026 und 14.08.2026.
- Thread 31505 (WMU 5): „Erscheint: 2026“.
