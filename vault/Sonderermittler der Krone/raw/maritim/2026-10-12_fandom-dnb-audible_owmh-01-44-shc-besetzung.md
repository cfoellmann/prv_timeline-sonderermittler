---
quelle_typ: maritim
quelle_url:
  - https://sherlockholmes.fandom.com/de/api.php
  - https://services.dnb.de/sru/dnb
  - https://www.audible.de/series/Oscar-Wilde-Mycroft-Holmes-Sonderermittler-der-Krone-Hoerbuecher/B01N7L45DU
  - https://www.audible.de/series/Sherlock-Holmes-Co-Hoerbuecher/B00JLEA7HM
  - https://www.sonderermittler-der-krone.de/serien/wilde-und-holmes/
quelle_datum: 2026-10-12
abgerufen: 2026-10-12
betrifft_serie: mehrere
betrifft_folgen:
  - oscar-wilde-und-mycroft-holmes-01-zeitenwechsel
  - oscar-wilde-und-mycroft-holmes-02-finsteres-hochland
  - oscar-wilde-und-mycroft-holmes-03-das-geheimnis-des-alchemisten
  - oscar-wilde-und-mycroft-holmes-04-tod-der-koenigin
  - oscar-wilde-und-mycroft-holmes-05-kalter-fels
  - oscar-wilde-und-mycroft-holmes-06-hexenwald
  - oscar-wilde-und-mycroft-holmes-07-ritual-des-grauens
  - oscar-wilde-und-mycroft-holmes-08-der-roentgen-zwischenfall
  - oscar-wilde-und-mycroft-holmes-09-das-erbe-des-doktors
  - oscar-wilde-und-mycroft-holmes-10-eine-nacht-am-brocken
  - oscar-wilde-und-mycroft-holmes-11-die-namenlose-aus-der-seine
  - oscar-wilde-und-mycroft-holmes-12-der-geheimbund-der-masken
  - oscar-wilde-und-mycroft-holmes-13-die-auktion-der-diebe
  - oscar-wilde-und-mycroft-holmes-14-labyrinth-der-angst
  - oscar-wilde-und-mycroft-holmes-15-goldrausch
  - oscar-wilde-und-mycroft-holmes-16-der-austausch
  - oscar-wilde-und-mycroft-holmes-17-der-maharadscha-der-nacht
  - oscar-wilde-und-mycroft-holmes-18-feindberuehrung
  - oscar-wilde-und-mycroft-holmes-19-blutdurst
  - oscar-wilde-und-mycroft-holmes-20-blutzoll
  - oscar-wilde-und-mycroft-holmes-21-boleskine-house
  - oscar-wilde-und-mycroft-holmes-22-die-vierte-macht
  - oscar-wilde-und-mycroft-holmes-23-das-medusa-syndrom
  - oscar-wilde-und-mycroft-holmes-24-der-knochenhaendler
  - oscar-wilde-und-mycroft-holmes-25-altes-blut
  - oscar-wilde-und-mycroft-holmes-26-dunkle-fluten
  - oscar-wilde-und-mycroft-holmes-27-dreissig-silberlinge
  - oscar-wilde-und-mycroft-holmes-28-der-laengste-tag
  - oscar-wilde-und-mycroft-holmes-29-brennender-zorn
  - oscar-wilde-und-mycroft-holmes-30-die-stimme-des-verraeters
  - oscar-wilde-und-mycroft-holmes-31-die-13-stufen
  - oscar-wilde-und-mycroft-holmes-32-im-reich-des-feindes
  - oscar-wilde-und-mycroft-holmes-33-apocalypsis
  - oscar-wilde-und-mycroft-holmes-34-asche-und-rauch
  - oscar-wilde-und-mycroft-holmes-35-zwielicht
  - oscar-wilde-und-mycroft-holmes-36-am-ende-der-zeit
  - oscar-wilde-und-mycroft-holmes-37-das-herz-der-see
  - oscar-wilde-und-mycroft-holmes-38-ausser-kontrolle
  - oscar-wilde-und-mycroft-holmes-39-der-pfad-der-toten
  - oscar-wilde-und-mycroft-holmes-40-lockruf-des-untergangs
  - oscar-wilde-und-mycroft-holmes-41-auf-bewaehrung
  - oscar-wilde-und-mycroft-holmes-42-angst-im-east-end
  - oscar-wilde-und-mycroft-holmes-43-neue-wege
  - oscar-wilde-und-mycroft-holmes-44-dunkler-einfluss
  - sherlock-holmes-und-co-26-der-schrei-der-banshee-episode-1
  - sherlock-holmes-und-co-27-der-schrei-der-banshee-episode-2
  - sherlock-holmes-und-co-41-das-verschwinden-der-louise-m-episode-1
  - sherlock-holmes-und-co-42-das-verschwinden-der-louise-m-episode-2
  - sherlock-holmes-und-co-45-hinter-den-kulissen
  - sherlock-holmes-und-co-48-das-ende-des-inspektors
  - sherlock-holmes-und-co-53-die-rueckkehr-der-angst
  - sherlock-holmes-und-co-55-perlen-des-todes
notiz: |
  Besetzung (Rolle -> Sprecher) für OWMH 1–44 und die acht Vault-Folgen der
  Reihe Sherlock Holmes & Co. ohne bisherige Sprecherangabe. Primärquelle für
  die Rollen: Besetzungstabellen des Sherlock-Holmes-Fandom-Wikis (MediaWiki-API).
  Gegenprobe der Namen: DNB-Katalogsätze der Digitalausgaben (Sprecher als
  [Erzähler]), DNB-Katalogsätze der CDs (MARC 245 $c, erste Rolle), Audible-
  Serienseiten. Offizielle Folgenseiten 42–44 für Klappentext und Figurenliste.
---

# OWMH 1–44 und Sherlock Holmes & Co. — Besetzung (Fandom, DNB, Audible)

Abgerufen am 2026-10-12.

## 1. Methode

- **Fandom:** `api.php?action=query&prop=links` auf „Oscar Wilde & Mycroft Holmes - Sonderermittler der Krone“ (verlinkt sind die Folgen 1–44 sowie „Laune der Natur“ und „Zelle des Lebens“ — für 45 und 46 existiert keine Seite, API `missing`). Für SHC die Folgenliste der Seite „Sherlock Holmes & Co“; Doppelfolgen (26/27, 41/42) haben **eine** gemeinsame Seite. Inhalt jeweils über `prop=revisions&rvprop=content|timestamp&rvslots=main`, Abschnitt „Personen“ (Tabelle Rolle | Sprecher) maschinell ausgelesen. `rowspan`-Zeilen (eine Rolle, zwei Sprecher) als zwei Einträge mit derselben Rolle; Zeilen mit leerer Rollenzelle als „ohne Rolle“. Alle Seiten tragen „Nr. N in der Serie“ — Zuordnung Seite ↔ Folge darüber geprüft, ohne Abweichung.
- **DNB:** SRU `services.dnb.de/sru/dnb`, `recordSchema=oai_dc`, Abfragen `tit="Oscar Wilde & Mycroft Holmes"` (126 Sätze) und `tit="Sherlock Holmes & Co"` (192 Sätze). Die Sätze der **Digitalausgaben** („… Folge N: Titel / Autor“) führen die Sprecher als `[Erzähler]`; die Sätze der **CDs** nennen in der Verantwortlichkeitsangabe (MARC 245 $c) die erste Rolle mit Sprecher.
- **Audible:** Serienseiten (`pageSize=50`, Seiten 1–3), JSON-Block je Produktzeile, Feld `narrators`. Für OWMH 1–30 nur 5–6 Namen je Folge (gekürzt), ab 31 bis zu 15. Für SHC liegen 26, 27, 41, 42 nicht auf den ersten beiden Serienseiten; nicht weiter verfolgt, weil die DNB dort vollständige Listen hat.
- **Fanseite:** offizielle Folgenseiten 42, 43, 44 (Klappentext, Figurenliste).
- Raute Media führt OWMH erst ab Folge 51 (Volltextsuche), daher hier nicht verwendbar.

## 2. Fandom — Besetzungstabellen OWMH 1–44 (wörtlich)

Schreibweise wie in der Tabelle; offensichtliche Tippfehler nicht korrigiert (siehe Abschnitt 6).

### OWMH 1 — Zeitenwechsel

Fandom-Seite „Zeitenwechsel“ (pageid 17587, Revision 2021-10-10T09:07:54Z); Infobox: VER „11. März 2016“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Intro | Lutz Mackensy |
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Albert Henslow | Konrad Bösherz |
| Ronald Fester | Hartmut Neugebauer |
| Quentin Gowan-Trellows 2. Earl of Sussex | Lutz Schnell |
| Lady Margret Gowan-Trellows | Annina Braunmiller-Jest |
| Gifford, Butler der Familie Trellows | Bodo Wolf |
| Der Reisende zwischen den Welten, Antonio Gravon | Frank Felicetti |
| Diener | Wolfgang Bahro |
| Constable | Gerald Paradies |
| Kutscher Poole | Alexander Turrek |
| Mann 1 | Patrick Holtheuer |
| Mann 2 | Martin Sabel |

- **DNB Digitalausgabe** (IDN 1258966751): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078442959, 2016, 1 CD): „Cast: Oscar Wilde - Sascha Rotermund [und 14 weitere]“.
- **Audible** (<https://www.audible.de/pd/Zeitenwechsel-Hoerbuch/B01HS890AC>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 2 — Finsteres Hochland

Fandom-Seite „Finsteres Hochland“ (pageid 17588, Revision 2021-10-10T09:07:36Z); Infobox: VER „11. März 2016“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Intro | Lutz Mackensy |
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Abel Hawthorn | Jaron Löwenberg |
| Barnabas Moore | Douglas Welbat |
| Constable Winston Furlong | Dietmar Wunder |
| Gordon McKinnock | Volker Brandt |
| Ryan McKinnock | Rainer Fritsche |
| Elsa McKinnock | Marie Bierstedt |
| Constable Forbes | André Beyer |
| Matt | Michael Bideller |
| Connor | Rüdiger Schulzki |

- **DNB Digitalausgabe** (IDN 1258967073): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078447977, 2016, 1 CD): „Cast: Oscar Wilde - Sascha Rotermund [und 11 weitere]“.
- **Audible** (<https://www.audible.de/pd/Finsteres-Hochland-Hoerbuch/B01HS891S8>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 3 — Das Geheimnis des Alchemisten

Fandom-Seite „Das Geheimnis des Alchemisten“ (pageid 17589, Revision 2021-10-10T09:07:11Z); Infobox: VER „13. Mai 2016“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Intro | Lutz Mackensy |
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Monsignore Anzzano | Gerhard Acktun |
| Vicco di Massa | Lutz Schnell |
| Marcelo Calvi | Konrad Bösherz |
| Alfonso Crunetti | Martin Sabel |
| Theresa Crunetti | Uschi Hugo |
| Doktor Rayman McGee | Marius Clarén |
| Pasquale | Christian Stark |
| Inquisitor Cuartero | Hartmut Neugebauer |
| Brasco | Hans-Jürgen Dittberner |
| Gehilfe | Rainer Fritzsche |
| Bruder Bernard | Bodo Wolf |
| Polizist 1 | Wolfgang Bahro |
| Polizist 2 | Gerald Paradies |
| Milo | Patrick Holtheuer |

- **DNB Digitalausgabe** (IDN 1258967286): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078444935, 2016, 1 CD): „Cast: Oscar Wilde - Sascha Rotermund [und 16 weitere]“.
- **Audible** (<https://www.audible.de/pd/Das-Geheimnis-des-Alchemisten-Hoerbuch/B01HS8GMBC>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 4 — Tod der Königin

Fandom-Seite „Tod der Königin“ (pageid 17590, Revision 2022-02-09T19:47:48Z); Infobox: VER „15. Juli 2016“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Die Stimme | Rüdiger Schulzki |
| William Arkhurst | Dietmar Wunder |
| Andrew Webbercott | Tobias Lelle |
| Martin Blackwell | Michael Pan |
| Königin Victoria von England | Luise Lunow |
| Reginald Plankert | Martin Sabel |
| Paul Osgood | Marius Clarén |
| Sergeant Crawford | Viktor Neumann |
| Hotelportier | Konrad Bösherz |
| Hausangestellter | André Beyer |
| Zeremonienmeister | Jürgen Thormann |
| Wachsoldat | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258967537): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078445060, 2016, 1 CD): „Cast: Oscar Wilde - Sascha Rotermund [und 16 weitere]“.
- **Audible** (<https://www.audible.de/pd/Tod-der-Koenigin-Hoerbuch/B01HS8QI8O>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 5 — Kalter Fels

Fandom-Seite „Kalter Fels“ (pageid 17591, Revision 2021-10-10T09:06:35Z); Infobox: VER „09. September 2016“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Abel Hawthorn | Jaron Löwenberg |
| Violet Ishiguro | Mia Diekow |
| Kapitän Nathaniel Girard | Bernd Rumpf |
| Ezra Tosh | Peter Lontzek |
| Pasquaie | Christian Stark |
| Mr. Irving | Jürgen Holdorf |
| Poole | Wolfgang Bahro |
| Kutscher | Jan-David Rönfeldt |
| Passant | Peter Weis |
| Passantin | Florentine Draeger |
| Erster Seemann | Rainer Fritzsche |
| Zweiter Seemann | Helmut Krauss |
| Unbekannter 1 | Alexander Turrek |
| Unbekannter 2 | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258967987): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078441987, 2016, 1 CD): „Cast: Oscar Wilde - Sascha Rotermund [und 17 weitere]“.
- **Audible** (<https://www.audible.de/pd/Kalter-Fels-Hoerbuch/B01LSZNG88>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 6 — Hexenwald

Fandom-Seite „Hexenwald“ (pageid 17592, Revision 2021-10-10T09:06:16Z); Infobox: VER „11. November 2016“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorn | Jaron Löwenberg |
| Konrad Wagner | Michael Pan |
| Roland Fuchs | Bernd Stephan |
| Eugen Wiesner | Sven Dahlem |
| Wachtmeister Riek | Patrick Bach |
| Anna Salzinger | Anita Hopt |
| Wirt | Jürgen Kluckert |
| Bestie | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258967723): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078443068, 2016, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde - Sascha Rotermund [und viele weitere]“.
- **Audible** (<https://www.audible.de/pd/Hexenwald-Hoerbuch/B01LSZWV9I>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 7 — Ritual des Grauens

Fandom-Seite „Ritual des Grauens“ (pageid 17593, Revision 2021-11-22T21:40:41Z); Infobox: VER „13. Januar 2017“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Alfons Grell | K. Dieter Klebsch |
| Andrew Webbercott | Tobias Lelle |
| Inspektor Bryan Fowler | Wolfgang Condrus |
| Sergeant Briggs | Norman Matt |
| Agnes | Arianne Borbach |
| Susan | Kerstin Draeger |
| Efron Miller | Lutz Riedel |
| Peter Giswall | Oliver Stritzel |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258968177): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078443394, 2016, 1 CD): „Dialogbuch: Jonas Maas ; Cast: Oscar Wilde - Sascha Rotermund [und viele weitere]“.
- **Audible** (<https://www.audible.de/pd/Ritual-des-Grauens-Hoerbuch/B01N4GWK6C>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 8 — Der Röntgen-Zwischenfall

Fandom-Seite „Der Röntgen-Zwischenfall“ (pageid 17594, Revision 2022-06-16T08:22:39Z); Infobox: VER „16. März 2017“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Andrew Webbercott | Tobias Lelle |
| Wilhelm Conrad Röntgen | Joachim Tennstedt |
| Yves Duroi | Rainer Fritsche |
| Emil Duroi | Peter Lontzek |
| Claude Liedermann | Jan-David Rönfeldt |
| Philipp Regner | Nils Rieke |
| David Burden | Patrick Bach |
| Ludwig Terbrack | Bernd Rumpf |
| Unbekannt | Sven Dahlem |
| Wache | Andrè Beyer |
| Ober | Alexander Turrek |
| Dorfbewohner | Jürgen Kluckert |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258968282): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).
- **DNB CD** (IDN 1078441944, 2016, 1 CD): „Dialogbuch: Jonas Maas ; Cast: Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Der-Roentgen-Zwischenfall-Hoerbuch/B0765YQW9X>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg (5 Namen).

### OWMH 9 — Das Erbe des Doktors

Fandom-Seite „Das Erbe des Doktors“ (pageid 18166, Revision 2022-10-02T14:33:34Z); Infobox: VER „26. Mai 2017“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Violet Ishiguro | Mia Diekow |
| Baptiste Perrin | Constantin von Westphalen |
| Desmond Frazier | Jochen Schröder |
| Inspektor Delaroche | Otto Strecker |
| Dominic Bouvier | Markus Pfeiffer |
| Frederic Seymore | Tobias Schmidt |
| Bertrand Duvalll | Jens Wendland |
| Claude | Wolfgang Bahro |
| Türsteher | Detlef Tams |
| Dr. Joseph Brunner | Klaus Dittmann |
| Innenminister Corbusier | Friedrich George Beckhaus |
| Mademouselle Dauphier | Julia Fölster |
| Gäste | Arianne Borbach |
| Gäste | Lutz Riedel |
| Verfolger | Robert Missler |
| Verfolger | Patrick Holtheuer |
| Wirt | Rüdiger Schulzki |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258968568): Sascha Rotermund, Reent Reins, K. Dieter Klebsch, Mia Diekow, Constantin von Westphalen, Jochen Schröder, Otto Strecker, Markus Pfeiffer, Tobias Schmidt (9 Namen).
- **DNB CD** (IDN 1118518179, 2017, 1 CD): „Dialogbuch: Jonas Maas“.
- **Audible** (<https://www.audible.de/pd/Das-Erbe-des-Doktors-Hoerbuch/B076619MY8>): Sascha Rotermund, Reent Reins, K. Dieter Klebsch, Mia Diekow, Constantin von Westphalen, Jochen Schröder (6 Namen).

### OWMH 10 — Eine Nacht am Brocken

Fandom-Seite „Eine Nacht am Brocken“ (pageid 18167, Revision 2023-04-01T21:23:30Z); Infobox: VER „21. Juli 2017“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Theodora Sachs | Gabrielle Pietermann |
| Agatha Reynolds | Alexandra Lange |
| Seth Reynolds | Sven Plate |
| Clint Abbott | Detlef Bierstedt |
| Lucas Averill | Martin Sabel |
| Wirt | Michael Grimm |
| Wirtin | Dagmar Dreke |
| Vorarbeiter | Wolfgang Hartmann |
| Aufseher | Kai Henrik Möller |
| Taylor | Michael Prelle |
| Wachmann | Marius Clarén |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258964953): Sascha Rotermund, Reent Reins, K. Dieter Klebsch, Leonhard Mahlich, Gabrielle Pietermann, Alexandra Lange, Sven Plate, Detlef Bierstedt, Martin Sabel (9 Namen).
- **DNB CD** (IDN 1118516141, 2017, 1 CD): „Dialogbuch: Jonas Maas ; Cast: Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Eine-Nacht-am-Brocken-Hoerbuch/B0765ZC1VT>): Sascha Rotermund, Reent Reins, K. Dieter Klebsch, Leonhard Mahlich, Gabrielle Pietermann, Alexandra Lange (6 Namen).

### OWMH 11 — Die Namenlose aus der Seine

Fandom-Seite „Die Namenlose aus der Seine“ (pageid 18628, Revision 2023-09-23T11:39:37Z); Infobox: VER „29. September 2017“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Henry Wheeler | Holger Löwenberg |
| Madeleine | Julia Fölster |
| Professor Dr. Serge Arronait | Till Hagen |
| Gilbert | Alexander Turrek |
| Emile Zola | Mathieu Carriére |
| Fabienne | Annina Braunmiller-Jest |
| Anatol Brassac | Torsten Sense |
| Maurice | Detlef Tams |
| Mitarbeiter des Leichenschauhauses | Jens Wendland |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258965348): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Julia Fölster, Till Hagen, Alexander Turrek, Mathieu Carriére (8 Namen).
- **DNB CD** (IDN 1142011143, 2017, 1 CD): „Dialogbuch: Claus Brenner ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Die-Namenlose-aus-der-Seine-Hoerbuch/B0765YXBX6>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Julia Fölster, Till Hagen (6 Namen).

### OWMH 12 — Der Geheimbund der Masken

Fandom-Seite „Der Geheimbund der Masken“ (pageid 18629, Revision 2021-10-10T09:04:56Z); Infobox: VER „24. November 2017“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Philby Merzheimer | Bodo Wolf |
| Zack Borrows | Achim Schülke |
| Lord Gerald Ginsmere | Jochen Schröder |
| Lady Nora Ginsmere | Rita Engelmann |
| Gilbert | Alexander Turrek |
| Edmund | Mark Bremer |
| George Grumby | Klaus Dittmann |
| Eleonor Grumby | Julia Casper |
| Stud Henchley | Robert Missler |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258965054): Sascha Rotermund, Reent Reins, Bodo Wolf, Achim Schülke, Jochen Schröder, Rita Engelmann, Alexander Turrek, Mark Bremer, Klaus Dittmann, Julia Casper, Robert Missler (11 Namen).
- **DNB CD** (IDN 1145330622, 2017, 1 CD): „Dialogbuch: Claus Brenner ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Der-Geheimbund-der-Masken-Hoerbuch/B07H9VG86L>): Sascha Rotermund, Reent Reins, Bodo Wolf, Achim Schülke, Jochen Schröder, Rita Engelmann (6 Namen).

### OWMH 13 — Die Auktion der Diebe

Fandom-Seite „Die Auktion der Diebe“ (pageid 18630, Revision 2021-10-10T09:04:29Z); Infobox: VER „26. Januar 2018“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorn | Jaron Löwenberg |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Andrew Webbercott | Tobias Lelle |
| Felix Perrin | Tommi Piper |
| Der Schatten | Markus Pfeiffer |
| Dr. Gerald Pembroke | Holger Mahlich |
| Riewa | Michael Pan |
| Lord Fuller | Friedrich Georg Beckhaus |
| Hassan | Rüdiger Schulzki |
| Inspektor Finch | Otto Strecker |
| Wachhabender | Detlef Tams |
| Polizist | Constantin von Westphalen |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258965666): Sascha Rotermund, Reent Reins, Jaron Löwenberg, K.Dieter Klebsch, Tobias Lelle, Tommi Piper, Markus Pfeiffer, Holger Mahlich, Michael Pan (9 Namen).
- **DNB CD** (IDN 1151234656, 2018, 1 CD): „Dialogbuch: Jonas Maas ; Cast Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Die-Auktion-der-Diebe-Hoerbuch/B07L34JXFN>): Sascha Rotermund, Reent Reins, Jaron Löwenberg, K. Dieter Klebsch, Tobias Lelle, Tommi Piper (6 Namen).

### OWMH 14 — Labyrinth der Angst

Fandom-Seite „Labyrinth der Angst“ (pageid 18839, Revision 2021-10-10T09:04:10Z); Infobox: VER „29. März 2018“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Violet Ishiguro | Mia Diekow |
| Mr. Mink | Peter Kirchberger |
| Captain Wendell | Tobias Schmidt |
| McNair | Lutz Riedel |
| Herbert "Herbie" Pollock | Christian Zeiger |
| Ning | Sven Plate |
| Archer | Wolf Frass |
| Quentin Peacock | Norbert Langer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258965178): Sascha Rotermund, Reent Reins, Holger Löwenberg, Mia Diekow, Peter Kirchberger, Tobias Schmidt, Lutz Riedel, Christian Zeiger, Sven Plate (9 Namen).
- **DNB CD** (IDN 114356040, 2018, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Labyrinth-der-Angst-Hoerbuch/B07L368YFL>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Mia Diekow, Peter Kirchberger, Tobias Schmidt (6 Namen).

### OWMH 15 — Goldrausch

Fandom-Seite „Goldrausch“ (pageid 18840, Revision 2021-10-10T09:03:53Z); Infobox: VER „25. Mai 2018“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Wyatt Earp | Frank Glaubrecht |
| Lex Lancaster | Peter Lontzek |
| Daisy | Luisa Wietzorek |
| Wird | Michael Prelle |
| Alter Mann | Michael Grimm |
| One Tooth Joe | Achim Schülke |
| Bandit 1 | Thomas Karallus |
| Bandit 2 | Torsten Sense |
| Besucher Saloon 1 | Wolfgang Hartmann |
| Besucher Saloon 2 | Kai Henrik Möller |
| Besucher Saloon 3 | Otto Strecker |
| Besucher Saloon 4 | Rainer Fritzsche |
| Goldschürfer | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 125896547): Sascha Rotermund, Reent Reins, Holger Löwenberg, Frank Glaubrecht, Peter Lontzek, Luisa Wietzorek, Michael Prelle (7 Namen).
- **DNB CD** (IDN 1143559177, 2018, 1 CD): „Dialogbuch: Markus Topf & Dominik Ahrens ; Cast Oscar Wilde Sascha Rotermund [und viele weitere]“.
- **Audible** (<https://www.audible.de/pd/Goldrausch-Hoerbuch/B07L4LG7L7>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Frank Glaubrecht, Peter Lontzek, Luisa Wietzorek (6 Namen).

### OWMH 16 — Der Austausch

Fandom-Seite „Der Austausch“ (pageid 18841, Revision 2022-02-09T19:52:31Z); Infobox: VER „27. Juli 2018“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Irene Adler | Yvonne Greitzke |
| Jarmila Veselá | Julia Casper |
| Miloš Němec | Bodo Wolf |
| Tomas Zeman | Jürgen Thormann |
| Sir Robin Sutherland | Till Hagen |
| Peter Marlowe | Constantin von Westphalen |
| Otto Graf von Reichsberg | Jochen Schröder |
| Johannes Freiherr zu Ratherstal | Jens Wendland |
| Wilhelm Reiter | Martin Sabel |
| Marek Kučera | Marius Clarén |
| Ober | Robert Missler |
| Barkeeper | Wolfgang Bahro |
| Bühnenarbeiter 1 | Rüdiger Schulzki |
| Bühnenarbeiter 2 | Mark Bremer |
| Sänger | Rainer Fritsche |
| Sängerin | Ulrike Stürzbecher |
| Wache | Christian Zeiger |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258965755): Sascha Rotermund, Reent Reins, Yvonne Greitzke, Julia Casper, Bodo Wolf, Jürgen Thormann, Till Hagen, Constantin von Westphalen, Jochen Schröder, Jens Wendland, Martin Sabel, Marius Clarén, Robert Missler, Wolfgang Bahro, Rüdiger Schulzki, Mark Bremer, Rainer Fritzsche, Ulrike Stürzbecher, Christian Zeiger, Lutz Mackensy (20 Namen).
- **DNB CD** (IDN 114355857, 2018, 1 CD): „Dialogbuch: Markus Topf & Dominik Ahrens ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Der-Austausch-Hoerbuch/B07G79779G>): Sascha Rotermund, Reent Reins, Yvonne Greitzke, Julia Casper, Bodo Wolf, Jürgen Thormann (6 Namen).

### OWMH 17 — Der Maharadscha der Nacht

Fandom-Seite „Der Maharadscha der Nacht“ (pageid 19040, Revision 2021-10-10T09:03:12Z); Infobox: VER „28. September 2018“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorn | Jaron Löwenberg |
| Der Maharadscha der Nacht | Daniel Welbat |
| Quao Sing | Michael Pan |
| Fares | Julian Deuster |
| Vermittler | Thomas Karallus |
| Colonel Hurst | Tommi Piper |
| Sergeant Pyke | Otto Strecker |
| Kutscher | Robin Brosch |
| Mann in der Opiumhöhle | Janis Zaurins |
| Thuggee | Luise Lunow |
| Wächter | Boris Tessmann |
| Zweiter Mann | Andreas Borcherding |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258965976): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Daniel Welbat, Michael Pan, Julian Deuster, Thomas Karallus, Leonhard Mahlich, Tommi Piper, Otto Strecker, Robin Brosch, Janis Zaurins, Luise Lunow, Boris Tessmann, Andreas Borcherding, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 115952145, 2018, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Der-Maharadscha-der-Nacht-Hoerbuch/B07H9V65JS>): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Daniel Welbat, Michael Pan, Julian Deuster (6 Namen).

### OWMH 18 — Feindberührung

Fandom-Seite „Feindberührung“ (pageid 19041, Revision 2021-10-10T09:02:48Z); Infobox: VER „30. November 2018“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Dr. Benjamin Payton | Leonhard Mahlich |
| Clemens Wouters | Norbert Langer |
| Henry Hiller | Jens Wendland |
| Paul Hiller | Timo Kinzel |
| Priest | Wolfgang Bahro |
| Lizard | Martin Sabel |
| Knife | Rainer Fritzsche |
| Inspektor Dyer | Mark Bremer |
| Sergeant Grant | Peter Lontzek |
| Bote | Tobias Schmidt |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258966190): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Norbert Langer, Jens Wendland, Timo Kinzel, Wolfgang Bahro, Martin Sabel, Rainer Fritzsche, Mark Bremer, Peter Lontzek, Tobias Schmidt, Lutz Mackensy (14 Namen).
- **DNB CD** (IDN 115952260, 2018, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Feindberuehrung-Hoerbuch/B07KGFHVXK>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Norbert Langer, Jens Wendland (6 Namen).

### OWMH 19 — Blutdurst

Fandom-Seite „Blutdurst“ (pageid 19042, Revision 2021-10-10T09:02:33Z); Infobox: VER „31. Januar 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorn | Jaron Löwenberg |
| Tabea Collins | Dagmar Dempe |
| Josephine Collins | Karin Buchholz |
| Phileas Fogg | Sascha Draeger |
| Inspektor Field | Ronald Nitschke |
| Bram Stoker | Hans-Georg Panczak |
| Constable Giles | Julian Deuser |
| Kapitän der Demeter | Helmut Krauss |
| Erster Offzier | Thomas Nero Wolff |
| Maat | Markus Pfeiffer |
| Vampir | Robin Brosch |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258966360): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Dagmar Dempe, Karin Buchholz, Sascha Draeger, Ronald Nitschke, Hans-Georg Panczak, Julian Deuster, Helmut Krauss, Thomas Nero Wolff, Markus Pfeiffer, Robin Brosch, Lutz Mackensy (14 Namen).
- **DNB CD** (IDN 1159522235, 2018, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Blutdurst-Hoerbuch/B07MXK86VB>): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Dagmar Dempe, Karin Buchholz, Sascha Draeger (6 Namen).

### OWMH 20 — Blutzoll

Fandom-Seite „Blutzoll“ (pageid 19223, Revision 2021-10-10T09:02:18Z); Infobox: VER „29. März 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorn | Jaron Löwenberg |
| Bram Stoker | Hans-Georg Panczak |
| Henry Wheeler | Holger Löwenberg |
| Lord Shelby | Udo Schenk |
| Irina Dimitrescu | Annina Braunmiller-Jest |
| Anthony Wade | Uve Teschner |
| Mr. Fuller | Douglas Welbat |
| Dracula | Torsten Michaelis |
| Wächter | Boris Tessmann |
| Wärter | Andreas Borcherding |
| Vampir | Marius Clarén |
| Vampirin | Arianne Borbach |
| Passant | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1261287053): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Hans-Georg Panczak, Holger Löwenberg, Udo Schenk, Annina Braunmiller-Jest, Uve Teschner, Douglas Welbat, Torsten Michaelis, Boris Tessmann (11 Namen).
- **DNB CD** (IDN 1170481094, 2019, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und viele weitere]“.
- **Audible** (<https://www.audible.de/pd/Blutzoll-Hoerbuch/B07PRL79VZ>): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Hans-Georg Panczak, Holger Löwenberg, Udo Schenk (6 Namen).

### OWMH 21 — Boleskine House

Fandom-Seite „Boleskine House“ (pageid 19224, Revision 2021-10-10T09:02:03Z); Infobox: VER „31. Mai 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Violet Ishiguro | Mia Diekow |
| Bastien Lavache | Peter Lontzek |
| Aleister Crowley | Daniel Zillmann |
| Paul Annan | Dietmar Wunder |
| Lydia "Die Gerte" Williams | Kerstin Draeger |
| Thomas Gibb | Julian Deuster |
| David Ross | Marko Peter Bachmann |
| Sutter | Wolfgang Condrus |
| Bauer | Peter Weis |
| Robert | Rainer Fritsche |
| Dracula | Torsten Michaelis |
| Angreifer | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 125896659): Sascha Rotermund, Reent Reins, K. Dieter Klebsch, Mia Diekow, Peter Lontzek, Daniel Zillmann, Dietmar Wunder, Kerstin Draeger, Julian Deuster, Marko Peter Bachmann, Wolfgang Condrus, Peter Weis, Rainer Fritzsche, Torsten Michaelis, Patrick Holtheuer, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 1170479316, 2019, 1 CD): „Dialogbuch: Jonas Maas ; Cast, Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Boleskine-House-Hoerbuch/B07QXSKWFD>): Sascha Rotermund, Reent Reins, K. Dieter Klebsch, Mia Diekow, Peter Lontzek, Daniel Zillmann (6 Namen).

### OWMH 22 — Die vierte Macht

Fandom-Seite „Die vierte Macht“ (pageid 19225, Revision 2022-12-04T20:13:24Z); Infobox: VER „2. August 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Pete Finnegan | Timo Kinzel |
| Arthur Ashby | Rüdiger Schulzki |
| John Doyle | Christian Rudolf |
| Alan Drake | Thomas Nero Wolff |
| Hugh Caspers | Peter Flechtner |
| Kalfaktorin | Dagmar Dempe |
| Ernest Foy | Michael Pan |
| Jenny Finnegan | Annina Braunmiller-Jest |
| Linday Coolidge | Florentine Draeger |
| Zeitungsverkäufer | Patrick Holtheuer |
| Kutscher | Helmut Krauss |
| Charlie | Janis Zaurins |
| Alte Frau | Karin Buchholz |
| Schließer | Marius Clarén |
| Hartford | Peter Kirchberger |
| Pförtner | Lutz Riedel |
| Chor der Demonstranten | Patrick Holtheuer |
| Chor der Demonstranten | Robin Brosch |
| Chor der Demonstranten | Rainer Fritsche |
| Chor der Demonstranten | Janis Zaurins |
| Chor der Demonstranten | Alexander Turrek |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258867516): Sascha Rotermund, Reent Reins, Timo Kinzel, Rüdiger Schulzki, Christian Rudolf, Thomas Nero Wolff, Peter Flechtner, Dagmar Dempe, Michael Pan, Annina Braunmiller-Jest, Florentine Draeger, Patrick Holtheuer, Helmut Krauss, Janis Zaurins, Karin Buchholz, Marius Clarén, Peter Kirchberger, Lutz Riedel, Robin Brosch, Rainer Fritzsche, Alexander Turrek, Lutz Mackensy (22 Namen).
- **DNB CD** (IDN 1170479324, 2019, 1 CD): „Dialogbuch: Henner Hildebrandt und Thomas Balfour ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Die-vierte-Macht-Hoerbuch/B0CV7QZZP3>): Sascha Rotermund, Reent Reins, Timo Kinzel, Rüdiger Schulzki, Christian Rudolf, Thomas Nero Wolff, Peter Flechtner, Dagmar Dempe, Michael Pan, Annina Braunmiller-Jest, Florentine Draeger, Patrick Holtheuer, Helmut Krauss, Lutz Mackensy (14 Namen).

### OWMH 23 — Das Medusa-Syndrom

Fandom-Seite „Das Medusa-Syndrom“ (pageid 19481, Revision 2021-10-10T09:00:39Z); Infobox: VER „30. Septembe 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorn | Jaron Löwenberg |
| Edward Maunde Thompson | Douglas Welbat |
| Gavin Spart-Hornton | Norman Matt |
| Jeremiah Spart-Thornton | Till Hagen |
| Jack Adams | Uve Teschner |
| Carl Moffat | Andreas Borcherding |
| Brune | Oliver Stritzel |
| Stygerson | Tommi Piper |
| Dr. Cappelli | Stefan Krause |
| David | Rainer Fritsche |
| Ruben | Robin Brosch |
| Bootsmann | Alexander Turrek |
| Mann | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258864673): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Douglas Welbat, Norman Matt, Till Hagen, Uve Teschner, Andreas Borcherding, Oliver Stritzel, Tommi Piper, Stefan Krause, Rainer Fritzsche, Robin Brosch, Alexander Turrek, Patrick Holtheuer, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 1185899359, 2019, 1 CD): „Cast Oscar Wilde Sascha Rotermund [und weitere] ; Dialogbuch: Jonas Maas“.
- **Audible** (<https://www.audible.de/pd/Das-Medusa-Syndrom-Hoerbuch/B07X5W6T2Y>): Uve Teschner, Andreas Borcherding, Oliver Stritzel, Tommi Piper, Stefan Krause, Rainer Fritzsche (6 Namen).

### OWMH 24 — Der Knochenhändler

Fandom-Seite „Der Knochenhändler“ (pageid 19482, Revision 2022-12-04T20:14:18Z); Infobox: VER „27. November 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorne | Jaron Löwenberg |
| Professor Benjamn Short | Volker Brandt |
| H. W. Warden | Markus Pfeiffer |
| Clara Youg | Julia Fölster |
| Dr. James Morland | Udo Schenk |
| Tilda | Christina Ann Zalamea |
| Inspektor Morse | Michael Pan |
| Butler | Peter Kirchberger |
| Student 1 | Julian Deuster |
| Student 2 | Janis Zaurins |
| Straßenkind 1 | Timo Kinzel |
| Straßenkind 2 | Luisa Wietzorek |
| Schaffner | Peter Weis |
| Kutscher | Marko Peter Bachmann |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1258864797): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Volker Brandt, Markus Pfeiffer, Julia Fölster, Udo Schenk, Christina Ann Zalamea, Michael Pan, Peter Kirchberger, Julian Deuster, Janis Zaurins, Timo Kinzel, Luisa Wietzorek, Peter Weis, Marko Peter Bachmann, Lutz Mackensy (17 Namen).
- **DNB CD** (IDN 1185906487, 2019, 1 CD): „Cast Sascha Rotermund [und weitere] ; Dialogbuch: Henner Hildebrandt und Thomas Balfour“.
- **Audible** (<https://www.audible.de/pd/Der-Knochenhaendler-Hoerbuch/B07X1YMGGD>): Michael Pan, Peter Kirchberger, Julian Deuster, Janis Zaurins, Timo Kinzel, Luisa Wietzorek (6 Namen).

### OWMH 25 — Altes Blut

Fandom-Seite „Altes Blut“ (pageid 19483, Revision 2021-10-10T09:00:55Z); Infobox: VER „31. Januar 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorne | Jaron Löwenberg |
| Dracula | Torsten Michaelis |
| Bram Stoker | Hans-Georg Panczak |
| Theodora Sachs | Gabrielle Pietermann |
| Sir Kililan Goodall | Matti Klemm |
| Virgina Goodall | Manja Doering |
| Julian Pierce | Stefan Krause |
| Zirkelagent | Patrick Holtheuer |
| Hotelangestellter | Bodo Wolf |
| Anwar | Alexander Turrek |
| Alter Mann in Kairo | Eckart Dux |
| Diebe | Benjamin Oechsle |
| Diebe | Martin Sabel |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255655429): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Torsten Michaelis, Hans-Georg Panzcak, Gabriele Pietermann, Matti Klemm, Manja Doering, Stefan Krause, Patrick Holtheuer, Bodo Wolf, Alexander Turrek, Eckart Dux, Benjamin Oechsle, Martin Sabel, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 1185897887, 2020, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rothermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Altes-Blut-Hoerbuch/B083J6RK42>): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Torsten Michaelis, Hans-Georg Panzcak, Gabriele Pietermann (6 Namen).

### OWMH 26 — Dunkle Fluten

Fandom-Seite „Dunkle Fluten“ (pageid 19664, Revision 2021-10-10T09:01:11Z); Infobox: VER „27. März 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Abel Hawthorne | Jaron Löwenberg |
| Dracula | Torsten Michaelis |
| Theodora Sachs | Gabrielle Pietermann |
| Archer | Wolf Frass |
| Johan deWitt | Gordon Piedesack |
| Robert O'Donnel | Ilona Otto |
| Michael O'Donnel | Tom Raczko |
| Nat | Peter Kirchberger |
| Constable Waits | Wolfgang Bahro |
| Captain Tucker | Douglas Welbat |
| Jim, der Harpunier | Marius Clarén |
| Jordan Hughes | Rüdiger Schulzki |
| Agent | Till Hagen |
| Begleiter | Rainer Fritsche |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255715111): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Torsten Michaelis, Gabriele Pietermann, Wolf Frass, Gordon Piedesack, Ilona Otto, Tom Raczko, Peter Kirchberger, Wolfgang Bahro, Douglas Welbat, Marius Clarén, Rüdiger Schulzki, Till Hagen, Rainer Fritzsche, Lutz Mackensy (17 Namen).
- **DNB CD** (IDN 1198025751, 2020, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Dunkle-Fluten-Hoerbuch/B0886JYV7P>): Sascha Rotermund, Reent Reins, Jaron Löwenberg, Torsten Michaelis, Gabriele Pietermann, Wolf Frass (6 Namen).

### OWMH 27 — Dreißig Silberlinge

Fandom-Seite „Dreißig Silberlinge“ (pageid 19665, Revision 2021-10-10T09:01:28Z); Infobox: VER „29. Mai 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dracula | Torsten Michaelis |
| Theodora Sachs | Gabrielle Pietermann |
| Sir Thomas Hesketh | Joachim Tennstedt |
| Sir Rupert Hawley | Eckart Dux |
| Butler | Oliver Stritzel |
| Dr. Karol Rudjev | Uve Teschner |
| Rene de la Villahuchet | Marcel Collé |
| Charlotte Bolton | Annina Braunmiller-Jest |
| Deborah Willwood | Florentine Draeger |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255674458): Sascha Rotermund, Reent Reins, Torsten Michaelis, Gabriele Pietermann, Joachim Tennstedt, Eckart Dux, Oliver Stritzel, Uve Teschner, Marcel Collé, Annina Braunmiller-Jest, Florentine Draeger, Lutz Mackensy (12 Namen).
- **DNB CD** (IDN 1198020334, 2020, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Dreissig-Silberlinge-Hoerbuch/B089QT1574>): Sascha Rotermund, Reent Reins, Torsten Michaelis, Gabriele Pietermann, Joachim Tennstedt, Eckart Dux (6 Namen).

### OWMH 28 — Der längste Tag

Fandom-Seite „Der längste Tag“ (pageid 19666, Revision 2021-10-10T08:58:18Z); Infobox: VER „28. Juli 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Violet Ishiguro | Mia Diekow |
| Paul | Timo Kinzel |
| Priest | Wolfgang Bahro |
| Lizard | Martin Sabel |
| Knife | Rainer Fritsche |
| Samir | Matti Klemm |
| Colonel Scarborough | Hans-Jürgen Dittberner |
| Bronsky | Engelbert von Nordhausen |
| Museumswärter | Douglas Welbat |
| Alte Frau | Ingrid Stein |
| Mann | Janis Zaurins |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255715170): Sascha Rotermund, Reent Reins, Mia Diekow, Timo Kinzel, Wolfgang Bahro, Martin Sabel, Rainer Fritzsche, Matti Klemm, Hans-Jürgen Dittberner, Engelbert von Nordhausen, Douglas Welbat, Ingrid Stein, Janis Zaurins, Lutz Mackensy (14 Namen).
- **DNB CD** (IDN 1198026200, 2020, 1 CD): „Dialogbuch: Jonas Maas ; Cast, Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Der-laengste-Tag-Hoerbuch/B08GSRLVGL>): Sascha Rotermund, Reent Reins, Mia Diekow, Timo Kinzel, Wolfgang Bahro, Martin Sabel (6 Namen).

### OWMH 29 — Brennender Zorn

Fandom-Seite „Brennender Zorn“ (pageid 19916, Revision 2021-10-10T08:57:54Z); Infobox: VER „30. September 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Bastien Lavache | Peter Lontzek |
| Ivan Svetkin | Marc Schülert |
| Anatol Tolov | André Beyer |
| Elena Amankova | Sarah Alles |
| Rasputin | Tetje Mierendorf |
| Detective Chief Inspector Callum | Torsten Münchow |
| Dr. Gordner | Wolfgang Bahro |
| O'Malle | Dirc Simpson |
| Bischof | Werner Wilkening |
| Unbekannter | Tammo Kaulbarsch |
| Anführer | Alexander Kruuse Mettin |
| Angreifer | André Teuber |
| Angreifer | Jean Coppong |
| Angreifer | Patrick Holtheuer |
| Nonnen | Sina Zadra |
| Nonnen | Katja Keßler |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255728760): Sascha Rotermund, Reent Reins, Peter Lontzek, Marc Schülert, André Beyer, Sarah Alles, Tetje Mierendorf, Torsten Münchow, Wolfgang Bahro, Dirc Simpson, Werner Wilkening, Tammo Kaulbarsch, Alexander Kruuse Mettin, André Teuber, Jean Coppong, Patrick Holtheuer, Sina Zadra, Katja Keßler, Lutz Mackensy (19 Namen).
- **DNB CD** (IDN 1208985493, 2020, 1 CD): „Dialogbuch: Jonas Maas ; Cast, Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Brennender-Zorn-Hoerbuch/B08LQSKZ3C>): Sascha Rotermund, Reent Reins, Peter Lontzek, Marc Schülert, André Beyer, Sarah Alles (6 Namen).

### OWMH 30 — Die Stimme des Verräters

Fandom-Seite „Die Stimme des Verräters“ (pageid 19917, Revision 2021-10-10T08:57:36Z); Infobox: VER „27. November 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Violet Ishiguro | Mia Diekow |
| Dr. Alfons Grell | K.Dieter Klebsch |
| Robur | Milton Welsh |
| Tjark Björnsson | Jens Wendland |
| Ashton Burnley | Janis Zaurins |
| Sigur Gunarsson | Volker Brandt |
| Freya Gunarsson | Ulrike Möckel |
| Victor van Dahlen | Stefan Krause |
| Friedhelm Bogner | Joachim Tennstedt |
| Wärter im Grey Tower | Jörg Pintsch |
| Wächter | Alexander Kruuse Mettin |
| Wächter | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255728876): Sascha Rotermund, Reent Reins, Mia Diekow, K.Dieter Klebsch, Milton Welsh, Jens Wendland, Janis Zaurins, Volker Brandt, Ulrike Möckel, Stefan Krause, Joachim Tennstedt, Jörg Pintsch, Alexander Kruuse Mettin, Patrick Holtheuer, Lutz Mackensy (15 Namen).
- **DNB CD** (IDN 1208987194, 2020, 1 CD): „Cast Oscar Wilde: Sascha Rotermund [und weitere] ; Dialogbuch: Jonas Maas“.
- **Audible** (<https://www.audible.de/pd/Die-Stimme-des-Verraeters-Hoerbuch/B08P3NMTKJ>): Sascha Rotermund, Reent Reins, Mia Diekow, K.Dieter Klebsch, Milton Welsh, Jens Wendland (6 Namen).

### OWMH 31 — Die 13 Stufen

Fandom-Seite „Die 13 Stufen“ (pageid 19915, Revision 2021-12-12T18:16:30Z); Infobox: VER „29. Januar 2021“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Dominic De Rossi | Uwe Büschken |
| Margerita | Sina Zadra |
| Conte Tressilo | Romanus Fuhrmann |
| Vincente | Sebastian Winkler |
| Hartford | Peter Kirchberger |
| Lindsey Coolidge | Florentine Draeger |
| Fausto Pinto | Bodo Wolf |
| Dracula | Torsten Michaelis |
| Victor Frankenstein | Dietmar Wunder |
| Robur | Milton Welsh |
| Aleister Crowley | Daniel Zillmann |
| Rasputin | Tetje Mierendorf |
| Gaston Morel | Wolfgang Condrus |
| Maharadscha | Daniel Welbat |
| Theodora Sachs | Gabrielle Pietermann |
| Rowan | Marc Schülert |
| Mosco | Detlef Tams |
| Basso | Jean Coppong |
| Chica | Katja Keßler |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255736267): Sascha Rotermund, Reent Reins, Holger Löwenberg, Uwe Büschken, Sina Zadra, Romanus Fuhrmann, Sebastian Winkler, Peter Kirchberger, Florentine Draeger, Bodo Wolf, Torsten Michaelis, Dietmar Wunder, Milton Welsh, Daniel Zillmann, Tetje Mierendorf, Wolfgang Condrus, Daniel Welbat, Gabrielle Pietermann, Marc Schülert, Detlef Tams, Jean Coppong, Katja Keßler, Lutz Mackensy (23 Namen).
- **DNB CD** (IDN 1208987267, 2020, 1 CD): „Dialogbuch: Marc Freund ; Cast: Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Die-13-Stufen-Hoerbuch/B0CV7QNPQW>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Uwe Büschken, Sina Zadra, Romanus Fuhrmann, Sebastian Winkler, Peter Kirchberger, Florentine Draeger, Bodo Wolf, Torsten Michaelis, Dietmar Wunder, Milton Welsh, Daniel Zillmann, Lutz Mackensy (15 Namen).

### OWMH 32 — Im Reich des Feindes

Fandom-Seite „Im Reich des Feindes“ (pageid 20187, Revision 2022-12-04T20:15:06Z); Infobox: VER „26. März 2021“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Margerita | Sina Zadra |
| Hartford | Peter Kirchberger |
| Lindsey Coolidge | Florentine Draeger |
| Dracula | Torsten Michaelis |
| Victor Frankenstein | Dietmar Wunder |
| Rasputin | Tetje Mierendorf |
| Maharadscha | Daniel Welbat |
| Theodora Sachs | Gabrielle Pietermann |
| Abraham Van Helsing | Douglas Welbat |
| Jonathan Harker | Martin Sabel |
| Mina Harker | Victoria Sturm |
| Phileas Fogg | Sascha Draeger |
| Aouda Fogg | Annina Braunmiller-Jest |
| Irene Adler | Yvonne Greitzke |
| Auguste Dupin | Manfred Lehmann |
| Edgar Allan Poe | Uve Teschner |
| Geoffrey Stafford | Björn Schalla |
| Ludvig | Torsten Münchow |
| Nero | Rüdiger Schulzki |
| Millie | Magdalena Höfner |
| Mr. Beglan | Janis Zaurins |
| Mr. Koontz | Wolfgang Bahro |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255734043): Sascha Rotermund, Reent Reins, Holger Löwenberg, Sina Zadra, Peter Kirchberger, Florentine Draeger, Torsten Michaelis, Dietmar Wunder, Tetje Mierendorf, Daniel Welbat, Gabrielle Pietermann, Douglas Welbat, Martin Sabel, Victoria Sturm, Sascha Draeger, Annina Braunmiller-Jest, Yvonne Greitzke, Manfred Lehmann, Uve Teschner, Björn Schalla, Torsten Münchow, Rüdiger Schulzki, Magdalena Höfner, Janis Zaurins, Wolfgang Bahro, Lutz Mackensy (26 Namen).
- **DNB CD** (IDN 1220304522, 2021, 1 CD): „Cast Oscar Wilde: Sascha Rotermund [und weitere] ; Dialogbuch: Marc Freund“.
- **Audible** (<https://www.audible.de/pd/Im-Reich-des-Feindes-Hoerbuch/B096S6JVB7>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Sina Zadra, Peter Kirchberger, Florentine Draeger (6 Namen).

### OWMH 33 — Apocalypsis

Fandom-Seite „Apocalypsis“ (pageid 20188, Revision 2022-12-04T20:15:29Z); Infobox: VER „28. Mai 2021“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Henry Wheeler | Holger Löwenberg |
| Hartford | Peter Kirchberger |
| Lindsey Coolidge | Florentine Draeger |
| Dracula | Torsten Michaelis |
| Victor Frankenstein | Dietmar Wunder |
| Robur | Milton Welsh |
| Aleister Crowley | Daniel Zillmann |
| Gaston Morel | Wolfgang Condrus |
| Rasputin | Tetje Mierendorf |
| Maharadscha | Daniel Welbat |
| Abraham Van Helsing | Douglas Welbat |
| Jonathan Harker | Martin Sabel |
| Phileas Fogg | Sascha Draeger |
| Irene Adler | Yvonne Greitzke |
| Auguste Dupin | Manfred Lehmann |
| Edgar Allan Poe | Uve Teschner |
| Mr. Koontz | Wolfgang Bahro |
| Nero | Rüdiger Schulzki |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255746793): Sascha Rotermund, Reent Reins, Holger Löwenberg, Peter Kirchberger, Florentine Draeger, Torsten Michaelis, Dietmar Wunder, Milton Welsh, Daniel Zillmann, Wolfgang Condrus, Tetje Mierendorf, Daniel Welbat, Douglas Welbat, Martin Sabel, Sascha Draeger, Yvonne Greitzke, Manfred Lehmann, Uve Teschner, Wolfgang Bahro, Rüdiger Schulzki, Lutz Mackensy (21 Namen).
- **DNB CD** (IDN 1220305693, 2021, 1 CD): „Dialogbuch: Marc Freund ; Cast: Oscar Wilde - Sascha Rotermund [und viele weitere]“.
- **Audible** (<https://www.audible.de/pd/Apocalypsis-Hoerbuch/B0963RG5R5>): Sascha Rotermund, Reent Reins, Holger Löwenberg, Peter Kirchberger, Florentine Draeger, Torsten Michaelis (6 Namen).

### OWMH 34 — Asche und Rauch

Fandom-Seite „Asche und Rauch“ (pageid 20189, Revision 2022-12-04T20:15:55Z); Infobox: VER „27. August 2021“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dracula | Torsten Michaelis |
| Victor Frankenstein | Dietmar Wunder |
| Robur | Milton Welsh |
| Aleister Crowley | Daniel Zillmann |
| Gaston Morel | Wolfgang Condrus |
| Rasputin | Tetje Mierendorf |
| Maharadscha | Daniel Welbat |
| Irene Adler | Yvonne Greitzke |
| Geoffrey Stafford | Björn Schalla |
| Theodora Sachs | Gabrielle Pietermann |
| Mina Harker | Victoria Sturm |
| Mr. Koontz | Wolfgang Bahro |
| Ewan Slater | Tammo Kaulbarsch |
| Digby Leech | Kim Hasper |
| Bobby | Alexander Kruuse Mettin |
| Kutscher | Kevin Kasper |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255746815): Sascha Rotermund, Reent Reins, Torsten Michaelis, Dietmar Wunder, Milton Welsh, Daniel Zillmann, Wolfgang Condrus, Tetje Mierendorf, Daniel Welbat, Yvonne Greitzke, Björn Schalla, Gabrielle Pietermann, Victoria Sturm, Wolfgang Bahro, Tammo Kaulbarsch, Kim Hasper, Alexander Kruuse Mettin, Kevin Kasper, Lutz Mackensy (19 Namen).
- **DNB CD** (IDN 1220308765, 2021, 1 CD): „Dialogbuch: Marc Freund ; Cast: Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Asche-und-Rauch-Hoerbuch/B09DT7KVT8>): Sascha Rotermund, Reent Reins, Torsten Michaelis, Dietmar Wunder, Milton Welsh, Daniel Zillmann (6 Namen).

### OWMH 35 — Zwielicht

Fandom-Seite „Zwielicht“ (pageid 20299, Revision 2022-12-04T20:16:16Z); Infobox: VER „30. September 2021“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dracula | Torsten Michaelis |
| Victor Frankenstein | Dietmar Wunder |
| Aleister Crowley | Daniel Zillmann |
| Gaston Morel | Wolfgang Condrus |
| Rasputin | Tetje Mierendorf |
| Maharadscha | Daniel Welbat |
| Irene Adler | Yvonne Greitzke |
| Mister Wu | Michael Pan |
| Phileas Fogg | Sascha Draeger |
| Aouda Fogg | Annina Braunmiller-Jest |
| Passepartout | Marius Clarén |
| Auguste Dupin | Manfred Lehmann |
| Edgar Allan Poe | Uve Teschner |
| Abraham Van Helsing | Douglas Welbat |
| Jonathan Harker | Martin Sabel |
| Bram Stoker | Hans-Georg Panczak |
| Geoffrey Stafford | Björn Schalla |
| Theodora Sachs | Gabrielle Pietermann |
| Mina Harker | Victoria Sturm |
| Digby Leech | Kim Hasper |
| Mr. Koontz | Wolfgang Bahro |
| Lionel Pembroke | Hans-Eckart Eckhardt |
| McMullan | Thomas Nero Wolff |
| Filly McMullan | Maria Koschny |
| Prof. Van Dusen | Martin Keßler |
| Hutchinson Hatch | Norbert Langer |
| Bastien Lavache | Peter Lontzek |
| Nemo | K.Dieter Klebsch |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255746858): Sascha Rotermund, Reent Reins, Torsten Michaelis, Dietmar Wunder, Daniel Zillmann, Wolfgang Condrus, Tetje Mierendorf, Daniel Welbat, Yvonne Greitzke, Michael Pan, Sascha Draeger, Annina Braunmiller-Jest, Marius Clarén, Manfred Lehmann, Uve Teschner, Douglas Welbat, Martin Sabel, Hans-Georg Panczak, Björn Schalla, Gabrielle Pietermann, Victoria Sturm, Kim Hasper, Wolfgang Bahro, Hans-Eckart Eckhardt, Thomas Nero Wolff, Maria Koschny, Martin Keßler, Norbert Langer, Peter Lontzek, K.Dieter Klebsch, Lutz Mackensy (31 Namen).
- **DNB CD** (IDN 1231649712, 2021, 1 CD): „Dialogbuch: Marc Freund ; Cast Oscar Wilde: Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Zwielicht-Hoerbuch/B09NW5KFXS>): Sascha Rotermund, Reent Reins, Torsten Michaelis, Dietmar Wunder, Daniel Zillmann, Wolfgang Condrus, Tetje Mierendorf, Daniel Welbat, Yvonne Greitzke, Michael Pan, Sascha Draeger, Annina Braunmiller-Jest, Marius Clarén, Manfred Lehmann, Uve Teschner (15 Namen).

### OWMH 36 — Am Ende der Zeit

Fandom-Seite „Am Ende der Zeit“ (pageid 20300, Revision 2022-12-04T20:16:25Z); Infobox: VER „26. November 2021“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Dracula | Torsten Michaelis |
| Victor Frankenstein | Dietmar Wunder |
| Aleister Crowley | Daniel Zillmann |
| Gaston Morel | Wolfgang Condrus |
| Rasputin | Tetje Mierendorf |
| Irene Adler | Yvonne Greitzke |
| Phileas Fogg | Sascha Draeger |
| Aouda Fogg | Annina Braunmiller-Jest |
| Passepartout | Marius Clarén |
| Auguste Dupin | Manfred Lehmann |
| Edgar Allan Poe | Uve Teschner |
| Abraham Van Helsing | Douglas Welbat |
| Jonathan Harker | Martin Sabel |
| Bram Stoker | Hans-Georg Panczak |
| Prof. Van Dusen | Martin Keßler |
| Hutchinson Hatch | Norbert Langer |
| Geoffrey Stafford | Björn Schalla |
| Theodora Sachs | Gabrielle Pietermann |
| Mina Harker | Victoria Sturm |
| Bastien Lavache | Peter Lontzek |
| Violet Ishiguro | Mia Diekow |
| Mister Wu | Michael Pan |
| Nemo | K.Dieter Klebsch |
| Lloyd | Tom Solo |
| Türsteher | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1255666439): Sascha Rotermund, Reent Reins, Torsten Michaelis, Dietmar Wunder, Daniel Zillmann, Wolfgang Condrus, Tetje Mierendorf, Yvonne Greitzke, Sascha Draeger, Annina Braunmiller-Jest, Marius Clarén, Manfred Lehmann, Uve Teschner, Douglas Welbat, Martin Sabel, Hans-Georg Panczak, Martin Keßler, Norbert Langer, Björn Schalla, Gabrielle Pietermann, Victoria Sturm, Peter Lontzek, Mia Diekow, Michael Pan, K.Dieter Klebsch, Tom Solo, Patrick Holtheuer, Lutz Mackensy (28 Namen).
- **DNB CD** (IDN 1231651202, 2021, 1 CD): „Dialogbuch: Marc Freund ; Cast Oscar Wilde: Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Am-Ende-der-Zeit-Hoerbuch/B09RPNXWF3>): Sascha Rotermund, Reent Reins, Torsten Michaelis, Dietmar Wunder, Daniel Zillmann, Wolfgang Condrus, Tetje Mierendorf, Yvonne Greitzke, Sascha Draeger, Annina Braunmiller-Jest, Marius Clarén, Manfred Lehmann, Uve Teschner, Douglas Welbat, Martin Sabel (15 Namen).

### OWMH 37 — Das Herz der See

Fandom-Seite „Das Herz der See“ (pageid 20503, Revision 2022-04-16T12:59:11Z); Infobox: VER „25. März 2022“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Theodora Sachs | Gabrielle Pietermann |
| Violet Ishiguro | Mia Diekow |
| Aleister Crowley | Daniel Zillmann |
| Professor van Dusen | Martin Keßler |
| Doktor Patrick Howls | Tim Knauer |
| Abt Francis Obrey | Volker Brandt |
| Einbrecher | Janis Zaurins |
| Entführer | Alexander Kruuse Mettin |
| Entführer | Jean Coppong |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 125566553): Sascha Rotermund, Reent Reins, Gabrielle Pietermann, Mia Diekow, Daniel Zillmann, Martin Keßler, Tim Knauer, Volker Brandt, Janis Zaurins, Alexander Kruuse Mettin, Jean Coppong, Lutz Mackensy (12 Namen).
- **DNB CD** (IDN 1244540854, 2022, 1 CD): „Dialogbuch: Jonas Maas ; Cast: Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Das-Herz-der-See-Hoerbuch/B09YLNR7WL>): Sascha Rotermund, Reent Reins, Gabrielle Pietermann, Mia Diekow, Daniel Zillmann, Martin Keßler, Tim Knauer, Volker Brandt, Janis Zaurins, Alexander Kruuse Mettin, Jean Coppong, Lutz Mackensy (12 Namen).

### OWMH 38 — Außer Kontrolle

Fandom-Seite „Außer Kontrolle“ (pageid 20504, Revision 2022-12-04T19:09:02Z); Infobox: VER „24. Juni 2022“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Violet Ishiguro | Mia Diekow |
| Aleister Crowley | Daniel Zillmann |
| Doktor Patrick Howls | Tim Knauer |
| Cruz | Wanja Gerick |
| Navarro | Marc Schüler |
| Kapitän Gutierrez | Detlef Tam |
| Edgar von Hallenbach | Stefan Krause |
| Perreira | Dirc Simpson |
| Wan-ta Nek | Marcel Collé |
| Jorge | André Teuber |
| Angreifer | Jean Coppong |
| Gefolgsmann | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1261488067): Sascha Rotermund, Reent Reins, Mia Diekow, Daniel Zillmann, Tim Knauer, Wanja Gerick, Marc Schülert, Detlef Tams, Stefan Krause, Dirc Simpson, Marcel Collé, André Teuber, Jean Coppong, Patrick Holtheuer, Lutz Mackensy (15 Namen).
- **DNB CD** (IDN 1244540684, 2022, 1 CD): „Dialogbuch: Jonas Maas ; Cast Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Ausser-Kontrolle-Hoerbuch/B0B3RB8CP9>): Sascha Rotermund, Reent Reins, Mia Diekow, Daniel Zillmann, Tim Knauer, Wanja Gerick, Marc Schülert, Detlef Tams, Stefan Krause, Dirc Simpson, Marcel Collé, André Teuber, Jean Coppong, Patrick Holtheuer, Lutz Mackensy (15 Namen).

### OWMH 39 — Der Pfad der Toten

Fandom-Seite „Der Pfad der Toten“ (pageid 20505, Revision 2022-12-04T20:38:25Z); Infobox: VER „29. Juli 2022“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Theodora Sachs | Gabrielle Pietermann |
| Violet Ishiguro | Mia Diekow |
| Aleister Crowley | Daniel Zillmann |
| Doktor Patrick Howls | Tim Knauer |
| Sir Walter Marlowe | Peter Kirchberger |
| Roger Singleton | Tammo Kaulbarsch |
| Wärter | Jean Coppong |
| Patrick Mystrand | Alexander Turrek |
| Ghin | Jörg Pintsch |
| Corvin | Manuel Straube |
| Kämpfer | André Teuber |
| Deformierter | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1261488326): Sascha Rotermund, Reent Reins, Gabrielle Pietermann, Mia Diekow, Daniel Zillmann, Tim Knauer, Peter Kirchberger, Tammo Kaulbarsch, Jean Coppong, Alexander Turrek, Jörg Pintsch, Manuel Straube, André Teuber, Patrick Holtheuer, Lutz Mackensy (15 Namen).
- **DNB CD** (IDN 1244542806, 2022, 1 CD): „Dialogbuch: Jonas Maas ; Oscar Wilde: Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Der-Pfad-der-Toten-Hoerbuch/B0B6VVFZY6>): Sascha Rotermund, Reent Reins, Gabrielle Pietermann, Mia Diekow, Daniel Zillmann, Tim Knauer, Peter Kirchberger, Tammo Kaulbarsch, Jean Coppong, Alexander Turrek, Jörg Pintsch, Manuel Straube, André Teuber, Patrick Holtheuer, Lutz Mackensy (15 Namen).

### OWMH 40 — Lockruf des Untergangs

Fandom-Seite „Lockruf des Untergangs“ (pageid 21169, Revision 2022-12-04T20:36:17Z); Infobox: VER „30. September 2022“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Theodora Sachs | Gabrielle Pietermann |
| Violet Ishiguro | Mia Diekow |
| Aleister Crowley | Daniel Zillmann |
| Doktor Patrick Howls | Tim Knauer |
| Merigo de Cavalcanti | Volker Brandt |
| Albino Greco | Oliver Stritzel |
| Amalia Romano | Friedel Morgenstern |
| Pierina Schiavone | Sina Zadra |
| Facino Monaldo | Sebastian Fitzner |
| Leonardo Falliero | Wanja Gerick |
| James Moriarty | Andreas Fröhlich |
| Betrunkener | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1267467576): Sascha Rotermund, Reent Reins, Gabrielle Pietermann, Mia Diekow, Daniel Zillmann, Tim Knauer, Volker Brandt, Oliver Stritzel, Friedel Morgenstern, Sina Zadra, Sebastian Fitzner, Wanja Gerick, Andreas Fröhlich, Patrick Holtheuer, Lutz Mackensy (15 Namen).
- **DNB CD** (IDN 1255463260, 2022, 1 CD): „Dialogbuch: Marc Freund ; Cast Oscar Wilde - Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Lockruf-des-Untergangs-Hoerbuch/B0BG6BTJ4V>): Sascha Rotermund, Reent Reins, Gabrielle Pietermann, Mia Diekow, Daniel Zillmann, Tim Knauer, Volker Brandt, Oliver Stritzel, Friedel Morgenstern, Sina Zadra, Sebastian Fitzner, Wanja Gerick, Andreas Fröhlich, Patrick Holtheuer, Lutz Mackensy (15 Namen).

### OWMH 41 — Auf Bewährung

Fandom-Seite „Auf Bewährung“ (pageid 21170, Revision 2022-12-05T18:41:29Z); Infobox: VER „25. November 2022“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Sherlock Holmes | Charles Rettinghaus |
| Theodora Sachs | Gabrielle Pietermann |
| Rasputin | Tetje Mierendorf |
| Dr. Hoffman | Hans-Jürgen Dittberner |
| Geoffrey Stafford | Björn Schalla |
| Allen Howard | Patrick Holtheuer |
| Henrietta Barber | Uschi Hugo |
| Sean Rader | Christian Dabeler |
| Joe Cannon | Mario Klischies |
| Frau | Katja Keßler |
| Ben Wilkerson | Till Hagen |
| George Stokes | Brian Sommer |
| Thomas Molly | Stefan Krause |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1272301192): Sascha Rotermund, Reent Reins, Charles Rettinghaus, Gabrielle Pietermann, Tetje Mierendorf, Hans-Jürgen Dittberner, Björn Schalla, Patrick Holtheuer, Uschi Hugo, Christian Dabeler, Mario Klischies, Katja Keßler, Till Hagen, Brian Sommer, Stefan Krause, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 125546240, 2022, 1 CD): „Dialogbuch: Silke Walter ; Cast Oscar Wilde: Sascha Rotermund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Auf-Bewaehrung-Hoerbuch/B0BNQGXHM8>): Sascha Rotermund, Reent Reins, Charles Rettinghaus, Gabrielle Pietermann, Tetje Mierendorf, Hans-Jürgen Dittberner, Björn Schalla, Patrick Holtheuer, Uschi Hugo, Christian Dabeler, Mario Klischies, Katja Keßler, Till Hagen, Brian Sommer, Stefan Krause (15 Namen).

### OWMH 42 — Angst im East End

Fandom-Seite „Angst im East End“ (pageid 21436, Revision 2023-02-10T18:01:16Z); Infobox: VER „31. März 2023“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1282711172): Sascha Rotermund, Charles Rettinghaus, Tetje Mierendorf, Björn Schalla, Stefan Krause, Tilmar Kuhn, Mathias Renneisen, Arianne Borbach, Julia Fölster, Luisa Wietzorek, Stephan Chrzescinski, Lutz Mackensy (12 Namen).
- **DNB CD** (IDN 1271550342, 2023, 1 CD): „Dialogbuch: Silke Walter ; Cast Oscar Wilde: Sascha Rotereund [und weitere]“.
- **Audible** (<https://www.audible.de/pd/Angst-im-East-End-Hoerbuch/B0BXPGQTS9>): Sascha Rotermund, Charles Rettinghaus, Tetje Mierendorf, Björn Schalla, Stefan Krause, Tilmar Kuhn, Mathias Renneisen, Arianne Borbach, Julia Fölster, Luisa Wietzorek, Stephan Chrzescinski, Lutz Mackensy (12 Namen).

### OWMH 43 — Neue Wege

Fandom-Seite „Neue Wege“ (pageid 21437, Revision 2022-12-05T18:41:53Z); Infobox: VER „26. Mai 2023“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1288829787): Sascha Rotermund, Charles Rettinghaus, Florian Halm, Yvonne Greitzke, Tetje Mierendorf, Gabrielle Pietermann, Daniel Zillmann, Björn Schalla, Reinhard Scheunemann, Tobias Lelle, Robert Louis Griesbach, Marion Gretchen Schmitz, Erich Räuker, Janis Zaurins, Sebastian Fitzner, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 1271551322, 2023, 1 CD): „Cast Oscar Wilde: Sascha Rotermund [und weitere] ; Dialogbuch: Silke Walter“.
- **Audible** (<https://www.audible.de/pd/Neue-Wege-Hoerbuch/B0C58YSZLK>): Sascha Rotermund, Charles Rettinghaus, Florian Halm, Yvonne Greitzke, Tetje Mierendorf, Gabrielle Pietermann, Daniel Zillmann, Björn Schalla, Reinhard Scheunemann, Tobias Lelle, Robert Louis Griesbach, Marion Gretchen Schmitz, Erich Räuker, Janis Zaurins, Sebastian Fitzner (15 Namen).

### OWMH 44 — Dunkler Einfluss

Fandom-Seite „Dunkler Einfluss“ (pageid 21438, Revision 2022-12-05T18:41:55Z); Infobox: VER „28. Juli 2023“, LEN „ca. 75“.

| Rolle | Sprecher |
|---|---|
| Oscar Wilde | Sascha Rotermund |
| Mycroft Holmes | Reent Reins |
| Ansage | Lutz Mackensy |

- **DNB Digitalausgabe** (IDN 1294149253): Sascha Rotermund, Reent Reins, Charles Rettinghaus, Yvonne Greitzke, Michael Pan, Gabrielle Pietermann, Tetje Mierendorf, Daniel Zillmann, Erich Räuker, Liane Rudolph, Mario Klischies, Christian Dabeler, Arianne Borbach, Ilona Otto, Brian Sommer, Lutz Mackensy (16 Namen).
- **DNB CD** (IDN 1271549611, 2023, 1 CD): „Cast Oscar Wilde: Sascha Rotermund [und weitere] ; Dialogbuch: Silke Walter“.
- **Audible** (<https://www.audible.de/pd/Dunkler-Einfluss-Hoerbuch/B0C9MTYSSC>): Sascha Rotermund, Reent Reins, Charles Rettinghaus, Yvonne Greitzke, Michael Pan, Gabrielle Pietermann, Tetje Mierendorf, Daniel Zillmann, Erich Räuker, Liane Rudolph, Mario Klischies, Christian Dabeler, Arianne Borbach, Ilona Otto, Brian Sommer (15 Namen).

## 3. Fandom — Besetzungstabellen Sherlock Holmes & Co. (wörtlich)

### SHC 26/27 — Der Schrei der Banshee

Fandom-Seite „Der Schrei der Banshee“ (pageid 18554, Revision 2023-04-23T18:07:21Z); Infobox: VER „2. September 2016“, LEN „ca. 120“. **Eine Tabelle für beide Teile.**

| Rolle | Sprecher |
|---|---|
| Sherlock Holmes | Charles Rettinghaus |
| Dr. John Watson | Florian Halm |
| Oscar Wilde | Sascha Rotermund |
| Noman Trent | Viktor Neumann |
| Josef Ullmann | Michael Pan |
| Lord Earing | Klaus Dittmann |
| Atkins, der Butler | Robin Brosch |
| Thaddeus Barrows | Gerald Paradies |
| Inspektor Masterson | Jaron Löwenberg |
| Arthur Wesrcott | Tim Knauer |
| Pandora | Djuwita Müller |
| Mann | Patrick Holtheuer |

- **SHC 26, DNB Digitalausgabe** (IDN 1261303083, „Sherlock Holmes & Co, Folge 26: Der Schrei der Banshee, Episode 1 / Oliver Fleischer“): Charles Rettinghaus, Florian Halm, Sascha Rotermund (3 Namen).

- **SHC 27, DNB Digitalausgabe** (IDN 1261303121, „Sherlock Holmes & Co, Folge 27: Der Schrei der Banshee, Episode 2 / Oliver Fleischer“): Charles Rettinghaus, Florian Halm, Sascha Rotermund (3 Namen).

- **DNB CD** (IDN 1201305969, 2019, 3 CDs): „Sherlock Holmes Charles Rettinghaus [und weitere] ; Dialogbuch: Jonas Maas“.
- **DNB CD** (IDN 1115215000, 2016-2016, 2 CDs): „Sherlock Holmes Charles Rettinghaus [und viele weitere] ; Dialogbuch: Jonas Maas“.

### SHC 41/42 — Das Verschwinden der Louise M.

Fandom-Seite „Das Verschwinden der Louise M.“ (pageid 18927, Revision 2021-10-03T22:31:45Z); Infobox: VER „12. Oktober 2018<br>23. November 2018“, LEN „ca. 120“. **Eine Tabelle für beide Teile.**

| Rolle | Sprecher |
|---|---|
| Sherlock Holmes | Charles Rettinghaus |
| Dr. John Watson | Florian Halm |
| Geoffrey Copper | Norman Matt |
| Anne Mulligan | Katja Brügger |
| Louise Mulligan | Christina Ann Zalame |
| Lord Alistair Cromwell | Kasper Eichel |
| Lady Joanna | Arianne Borbach |
| Stuart Douglas | Michael Pan |
| Mr. Hamilton | Peter Flechtner |
| Rodney, die Ratte | Stefan Krause |
| Fiona | Luisa Wietzorek |
| Edmund Foster | Douglas Welbat |
| Phileas Fogg | Sascha Draeger |
| Schuldeneintreiber | Oliver Stritzel |
| Rezeptionist | Robin Brosch |
| Wirt | Helmut Krauss |
| Ansage | Lutz Mackensy |

- **SHC 41, DNB Digitalausgabe** (IDN 1261303369, „Sherlock Holmes & Co, Folge 41: Das Verschwinden der Louise M., Episode 1 / Willis Grandt“): Charles Rettinghaus, Florian Halm, Norman Matt, Katja Brügger, Christina Ann Zalamea, Kasper Eichel, Arianne Borbach, Michael Pan, Peter Flechtner, Stefan Krause, Luisa Wietzorek, Douglas Welbat, Sascha Draeger, Oliver Stritzel, Robin Brosch, Helmut Krauss, Lutz Mackensy (17 Namen).

- **SHC 42, DNB Digitalausgabe** (IDN 1261299566, „Sherlock Holmes & Co, Folge 42: Das Verschwinden der Louise M., Episode 2 / Willis Grandt“): Charles Rettinghaus, Florian Halm, Norman Matt, Katja Brügger, Christina Ann Zalamea, Kasper Eichel, Arianne Borbach, Michael Pan, Peter Flechtner, Stefan Krause, Luisa Wietzorek, Douglas Welbat, Sascha Draeger, Oliver Stritzel, Robin Brosch, Helmut Krauss, Lutz Mackensy (17 Namen).

- **DNB CD** (IDN 117068923, 2018, 1 CD): „Sherlock Holmes Charles Rettinghaus [und weitere] ; by Willis Grant“.
- **DNB CD** (IDN 1172466521, 2018, 1 CD): „Sherlock Homes Charles Rettinghaus [und weitere] ; by Willis Grant“.

### SHC 45 — Hinter den Kulissen

Fandom-Seite „Hinter den Kulissen“ (pageid 19432, Revision 2021-10-03T22:46:15Z); Infobox: VER „7. Juni 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Sherlock Holmes | Charles Rettinghaus |
| Dr. John Watson | Florian Halm |
| Mycroft Holmes | Reent Reins |
| Irene Adler | Yvonne Greitzke |
| Mister Wu | Michael Pan |
| Cora Spencer | Andrea Aust |
| Maddie | Florentine Draeger |
| Sir John Conroy | Rüdiger Schulzki |
| Sebastian Conroy | Timo Kinzel |
| Mister Killroy | Matti Klemm |
| — | Joachim Tennstedt |
| Inspektor McMullan | Thomas Nero Wolff |
| — | Luisa Wietzorek |
| — | Uve Teschner |
| — | Wolf Frass |
| — | Tom Raczko |
| — | Rainer Fritzsche |
| — | Peter Kirchberger |
| — | Gordon Piedesack |
| — | Jaron Löwenberg |
| — | Patrick Holtheuer |
| — | Benjamin Oechsle |
| Ansage | Lutz Mackensy |

- **SHC 45, DNB Digitalausgabe** (IDN 1258867729, „Sherlock Holmes & Co, Folge 45: Hinter den Kulissen / Marc-Oliver Bischoff“): Charles Rettinghaus, Florian Halm, Reent Reins, Yvonne Greitzke, Michael Pan, Andrea Aust, Florentine Draeger, Rüdiger Schulzki, Timo Kinzel, Matti Klemm, Joachim Tennstedt, Thomas Nero Wolff, Luisa Wietzorek, Uve Teschner, Wolf Frass, Tom Raczko, Rainer Fritzsche, Peter Kirchberger, Gordon Piedesack, Jaron Löwenberg, Patrick Holtheuer, Benjamin Oechsle, Lutz Mackensy (23 Namen).
- **SHC 45, Audible** (<https://www.audible.de/pd/Hinter-den-Kulissen-Hoerbuch/B07S1PJ171>): Charles Rettinghaus, Florian Halm, Reent Reins, Yvonne Greitzke, Michael Pan, Andrea Aust (6 Namen).

- **DNB CD** (IDN 1190907909, 2019, 1 CD): „Sherlock Holmes Charles Rettinghaus [und weitere] ; Buch: Marc-Oliver Bischoff“.

### SHC 48 — Das Ende des Inspektors

Fandom-Seite „Das Ende des Inspektors“ (pageid 19433, Revision 2021-10-03T22:34:06Z); Infobox: VER „11. Oktober 2019“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Geoffrey Stafford | Björn Schalla |
| Inspektor Cross | Rainer Fritzsche |
| Mycroft Holmes | Reent Reins |
| — | Uve Teschner |
| — | Thomas Nero Wolff |
| — | Wolf Frass |
| — | Mia Diekow |
| — | Daniel Zillmann |
| — | Peter Kirchberger |
| — | Marcel Collé |
| — | Liane Rudolph |
| — | Hans-Jürgen Dittberner |
| — | Tetje Mierendorf |
| — | Patrick Holtheuer |
| Ansage | Lutz Mackensy |

- **SHC 48, DNB Digitalausgabe:** kein Satz mit Sprecherliste.
- **SHC 48, Audible** (<https://www.audible.de/pd/Das-Ende-des-Inspektors-Hoerbuch/B07Y5GRMHM>): Björn Schalla, Rainer Fritzsche, Reent Reins, Uve Teschner, Thomas Nero Wolff, Wolf Frass (6 Namen).

- **DNB CD** (IDN 1199619744, 2019, 1 CD): „Geoffrey Stafford Björn SChalla [und weitere] ; Buch: Markus Duschek“.

### SHC 53 — Die Rückkehr der Angst

Fandom-Seite „Die Rückkehr der Angst“ (pageid 20127, Revision 2021-10-03T22:34:21Z); Infobox: VER „8. Mai 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Geoffrey Stafford | Björn Schalla |
| Inspektor Cross | Rainer Fritzsche |
| Mycroft Holmes | Reent Reins |
| — | Torsten Michaelis |
| — | Victoria Sturm |
| — | Wolfgang Bahro |
| — | Gordon Piedesack |
| — | Eckart Dux |
| — | Rüdiger Schulzki |
| — | Stefan Krause |
| — | Benjamin Oechsle |
| Ansage | Lutz Mackensy |

- **SHC 53, DNB Digitalausgabe** (IDN 1255670606, „Sherlock Holmes & Co, Folge 53: Die Rückkehr der Angst / Markus Duschek“): Björn Schalla, Rainer Fritzsche, Reent Reins, Torsten Michaelis, Victoria Sturm, Wolfgang Bahro, Gordon Piedesack, Eckart Dux, Rüdiger Schulzki, Stefan Krause, Benjamin Oechsle, Lutz Mackensy (12 Namen).
- **SHC 53, Audible** (<https://www.audible.de/pd/Die-Rueckkehr-der-Angst-Hoerbuch/B08CB9K21D>): Björn Schalla, Rainer Fritzsche, Reent Reins, Torsten Michaelis, Victoria Sturm, Wolfgang Bahro (6 Namen).

- **DNB CD** (IDN 1214246982, 2020, 1 CD): „Geoffrey Stafford - Björn Schalla [und weitere] ; Buch: Markus Duschek“.

### SHC 55 — Perlen des Todes

Fandom-Seite „Perlen des Todes“ (pageid 20081, Revision 2022-05-28T19:57:54Z); Infobox: VER „25. September 2020“, LEN „ca. 60“.

| Rolle | Sprecher |
|---|---|
| Sherlock Holmes | Charles Rettinghaus |
| Dr. John Watson | Florian Halm |
| Geoffrey Stafford | Björn Schalla |
| James Moriarty | Andreas Fröhlich |
| — | Udo Schenk |
| — | Torsten Münchow |
| — | Arianne Borbach |
| — | Stefan Krause |
| — | Jörg Pintsch |
| — | Sina Zadra |
| — | Janis Zaurins |
| — | Tom Solo |
| — | Ilona Otto |
| — | Bodo Wolf |
| — | Alexander Turrek |
| — | Patrick Holtheuer |
| — | André Teuber |
| Ansage | Lutz Mackensy |

- **SHC 55, DNB Digitalausgabe** (IDN 1255729112, „Sherlock Holmes & Co, Folge 55: Perlen des Todes / Marc Freund“): Charles Rettinghaus, Florian Halm, Björn Schalla, Andreas Fröhlich, Udo Schenk, Torsten Münchow, Arianne Borbach, Stefan Krause, Jörg Pintsch, Sina Zadra, Janis Zaurins, Tom Solo, Ilona Otto, Bodo Wolf, Alexander Turrek, Patrick Holtheuer, André Teuber, Lutz Mackensy (18 Namen).
- **SHC 55, Audible** (<https://www.audible.de/pd/Perlen-des-Todes-Hoerbuch/B08LKF9R5N>): Charles Rettinghaus, Florian Halm, Björn Schalla, Andreas Fröhlich, Udo Schenk, Torsten Münchow (6 Namen).

- **DNB CD** (IDN 1219518379, 2020, 1 CD): „Sherlock Holmes Charles Rettinghaus [und weitere] ; Buch: Marc Freund“.

## 4. Fanseite — Klappentext und Figurenliste OWMH 42–44

Für 42–44 führt Fandom nur Oscar Wilde, Mycroft Holmes und die Ansage. Zur Prüfung der Ableitungsregel (Kanonkarte, Nachtrag 12.10.2026) die offiziellen Folgenseiten:

| Folge | URL | Figuren im Klappentext | Figurenliste der Seite |
|---|---|---|---|
| 42 Angst im East End (2023, 57 min) | <https://www.sonderermittler-der-krone.de/serien/wilde-und-holmes/folge42-angst-im-east-end/> | Oscar Wilde („ein alter Feind“ ohne Namen) | Oscar Wilde, Mycroft Holmes |
| 43 Neue Wege (2023, 60 min) | <https://www.sonderermittler-der-krone.de/serien/wilde-und-holmes/folge43-neue-wege/> | Oscar Wilde, Dr. Hoffman (tot), Zirkel der Sieben | Oscar Wilde, Mycroft Holmes |
| 44 Dunkler Einfluss (2023, 58 min) | <https://www.sonderermittler-der-krone.de/serien/wilde-und-holmes/folge44-dunkler-einfluss/> | Oscar Wilde, **Aleister Crowley**, Lord Duncan, Zirkel der Sieben | Oscar Wilde, Mycroft Holmes |

Stammsprecher laut Fanseiten-Figurenseiten (siehe `raw/maritim/2026-10-12_audible-hoerspieltalk-rautemedia-fanseite_owmh-45-60-besetzung.md`): Aleister Crowley – Daniel Zillmann; Fandom besetzt Crowley in OWMH 21, 31 und 33–40 durchgehend mit Daniel Zillmann. Daniel Zillmann steht in der Sprecherliste von OWMH 44 (DNB, Audible).

## 5. Abgleich der Namen (Fandom gegen DNB-Digitalausgabe und Audible)

- **DNB-Digitalausgabe und Audible sind inhaltlich dieselbe Quelle:** Wo beide vorliegen, sind die Listen in Inhalt und Reihenfolge identisch; Audible ist lediglich gekürzt (OWMH 9–30: 6 Namen, ab 31: höchstens 15). Für die Zwei-Quellen-Regel zählen sie zusammen als **eine** Quelle (Verlagsmetadaten in zwei Kanälen).
- **OWMH 1–8:** DNB und Audible führen für alle acht Folgen dieselben fünf Namen in derselben Reihenfolge (Sascha Rotermund, Reent Reins, Holger Löwenberg, Leonhard Mahlich, Jaron Löwenberg). Das ist eine Serienangabe, keine Folgenbesetzung — sie widerspricht teils der Fandom-Tabelle (z. B. Holger Löwenberg in OWMH 2, 4, 5, 6, 7; Jaron Löwenberg in OWMH 1, 3, 4, 7, 8; Leonhard Mahlich in OWMH 3, 6, 7, 8), ohne dass daraus etwas folgt. Nicht ausgewertet.
- **OWMH 9–41:** Nach Abgleich der Schreibvarianten (Abschnitt 6) stehen in allen 33 Folgen entweder alle Fandom-Namen in der DNB-Liste, oder die DNB-Liste ist gekürzt und enthält keinen Namen, der bei Fandom fehlt. Einzige Abweichung: **OWMH 17** — DNB und Audible nennen zusätzlich **Leonhard Mahlich**, die Fandom-Tabelle nicht.
- **OWMH 42 und 43 — Widerspruch:** Die Fandom-Tabelle nennt **Mycroft Holmes – Reent Reins**. Die DNB-Listen (42: 12 Namen, 43: 16 Namen, jeweils mit der Ansage Lutz Mackensy am Ende, also nicht gekürzt) und Audible enthalten **Reent Reins nicht**. Bei OWMH 41 und 44 steht Reent Reins in allen Listen. Die Fandom-Tabellen 42–44 sind Rumpftabellen (nur Wilde, Mycroft, Ansage) und wirken wie eine Vorlage. Offen; im Vault ist Mycroft für 42 und 43 nicht eingetragen.
- **SHC:** Alle Fandom-Namen von SHC 41, 42, 45, 53 und 55 stehen in der DNB-Liste der jeweiligen Digitalausgabe (bei 41 und 42 dieselben 17 Namen in beiden Teilen). SHC 26 und 27: DNB nennt je Teil nur Rettinghaus, Halm, Rotermund. SHC 48: kein DNB-Satz mit Sprecherliste; Audible nennt die ersten sechs Fandom-Namen in derselben Reihenfolge (Schalla, Fritzsche, Reins, Teschner, Wolff, Frass).
- **DNB CD (MARC 245 $c):** Bei OWMH 1–8, 10–12, 14–23 und 25–44 „Cast Oscar Wilde – Sascha Rotermund“ (Schreibvarianten „Rotereund“ bei 42 und 45, „Rothermund“ bei 25); bei 9 keine Besetzung, bei 13 und 24 nur „Cast Sascha Rotermund“ ohne Rolle. SHC: Banshee, Louise M., 45, 55 „Sherlock Holmes – Charles Rettinghaus“; 48, 53 „Geoffrey Stafford – Björn Schalla“. Damit ist für die jeweils erste Rolle eine zweite, von Fandom unabhängige Rollenquelle vorhanden.

## 6. Schreibvarianten

**Sprechernamen — im Vault vereinheitlicht** (Fandom-Schreibung weicht ab, Mehrheit der Quellen und übrige Fandom-Tabellen stimmen überein):

| Fandom (Folge) | übernommen | Beleg |
|---|---|---|
| Rainer Fritsche (OWMH 2, 8, 16, 21, 22, 23, 26, 28) | Rainer Fritzsche | DNB, Audible, Fandom OWMH 3, 5, 15, 18; Vault-Schreibung |
| K.Dieter Klebsch (OWMH 4, 8, 9, 10, 13, 21, 30, 35, 36) | K. Dieter Klebsch | DNB, Audible, Fandom OWMH 7 (Fandom verlinkt auf „Klaus-Dieter Klebsch“) |
| Julian Deuser (OWMH 19) | Julian Deuster | DNB, Audible, Fandom OWMH 17, 21, 24 |
| Marc Schüler, Detlef Tam (OWMH 38) | Marc Schülert, Detlef Tams | DNB, Audible, übrige Fandom-Tabellen |
| Andrè Beyer (OWMH 8) | André Beyer | Fandom OWMH 2, 4, 29 |
| Christina Ann Zalame (SHC 41/42) | Christina Ann Zalamea | DNB, Audible, Fandom OWMH 24 |

**Sprechernamen — Fandom-Schreibung beibehalten**, DNB/Audible abweichend: Hans-Georg Panczak (DNB/Audible „Panzcak“, OWMH 25), Gabrielle Pietermann (DNB/Audible „Gabriele“, OWMH 25–27; sonst auch dort „Gabrielle“). Nicht aufgelöst, nur Einzelquelle: Friedrich George Beckhaus (OWMH 9) gegen Friedrich Georg Beckhaus (OWMH 13); Dagmar Dreke (OWMH 10, auch DNB) gegen Dagmar Dempe (OWMH 19, 22, auch DNB) — möglicherweise dieselbe Person, nicht geprüft; Douglas Welbat (OWMH 2, SHC 41 u. a.) und Daniel Welbat (Maharadscha, OWMH 17, 31–35, auch DNB) sind in allen Quellen getrennt geführt.

**Rollennamen — nicht korrigiert** (wörtlich übernommen, vermutlich Tippfehler des Fandom-Wikis): „Abel Hawthorne“ (OWMH 24–26, sonst „Hawthorn“; auch der offizielle Klappentext von OWMH 24 schreibt „Hawthorne“), „Sir Kililan Goodall“ und „Virgina Goodall“ (OWMH 25), „Bertrand Duvalll“ und „Mademouselle Dauphier“ (OWMH 9), „Pasquaie“ (OWMH 5), „Linday Coolidge“ (OWMH 22, sonst „Lindsey Coolidge“), „Noman Trent“ und „Arthur Wesrcott“ (SHC 26/27), „Geoffrey Copper“ (SHC 41/42; der Verlagstext derselben Fandom-Seite schreibt „Geoffrey Cooper“), „Mister Killroy“ (SHC 45; Frage Killroy/Killjoy siehe `raw/maritim/2026-09-06_sherlock-holmes-und-co_folgenliste-01-bis-97-und-kanonpruefung.md`).

## 7. Nebenbefunde (nicht Besetzung)

- **SHC 26/27 Autor:** Vault `autor: Oliver Fleischer` (DNB-Digitalausgabe). Die DNB-Sätze der Doppel-CD (2016, IDN 1115215000) und der 3-CD-Box (2019, IDN 1201305969) sowie Fandom nennen **Dialogbuch: Jonas Maas**. Nicht geändert.
- **SHC 53 Datum:** Fandom-Infobox „8. Mai 2020“, Vault 2020-07-03 (Apple Music, Deezer, DNB laut Kanonprüfung vom 06.09.2026). Nicht geändert.
- **SHC 55:** Fandom-Anmerkung „Professor Moriarty wurde zuvor in der Reihe von Till Hagen gespielt“ — Sprecherwechsel Moriarty innerhalb SHC (Till Hagen → Andreas Fröhlich).
- **Jaron Löwenberg** spricht in SHC 26/27 laut Fandom **Inspektor Masterson** und steht in SHC 45 ohne Rollenangabe in der Tabelle — die Feststellung „in OWMH 1–44 keine andere Rolle als Hawthorn“ (Rohdatei Abel Hawthorn) gilt nur für OWMH.
- **Mister Wu – Michael Pan** auch in OWMH 35 und 36 (Fandom).
- **Fandom-Laufzeiten** sind in der Infobox gerundet („ca. 60“, „ca. 120“) und nicht für `spielzeit_min` geeignet.

## 8. Auswertung (Stand 2026-10-12)

- **Rollenliste (Fandom)** für OWMH 1–41 vollständig, für 42–44 nur Rumpf (Wilde, Mycroft, Ansage); für SHC 26/27, 41/42, 45, 48, 53, 55 vollständig, bei SHC 45, 48, 53, 55 aber mit vielen Zeilen ohne Rollenangabe. Rollen sind **Einzelquelle Fandom**, mit Ausnahme der ersten Rolle (DNB-CD, s. o.).
- **Namen** sind für OWMH 9–44 und SHC 41/42, 45, 53, 55 durch die DNB-Digitalausgabe (= Audible) bestätigt; für OWMH 1–8 und SHC 26/27 außer den Hauptrollen nur Fandom; für SHC 48 Fandom und Audible (erste sechs).
- **Ableitung** nach der Regel der Kanonkarte nur bei OWMH 44 (Aleister Crowley – Daniel Zillmann). Für 42 und 43 erlaubt die Regel keine weitere Zuordnung: Die Stammsprecher von Sherlock Holmes, Irene Adler, John Watson, Rasputin, Theodora Sachs, Crowley und Stafford stehen zwar in den Listen, die Figuren aber weder im Klappentext noch in der Figurenliste.
