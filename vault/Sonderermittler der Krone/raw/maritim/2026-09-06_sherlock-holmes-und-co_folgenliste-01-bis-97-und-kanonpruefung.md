# Sherlock Holmes & Co. (SHC) — vollständige Folgenliste 1–97 und Kanonprüfung

**Abgerufen:** 2026-09-06
**Zweck:** Grundlage für die Entscheidung, welche SHC-Folgen im Vault als `serie: sherlock-holmes-und-co` geführt werden. Enthält keine Wertung, die nicht als solche gekennzeichnet ist.

## Quellen

| Quelle | Abruf | Was sie liefert | Abdeckung |
|---|---|---|---|
| iTunes Search API, Musiksparte (`media=music`, Storefront DE) | 06.09.2026 | Folgennummer, Titel, digitales Erscheinungsdatum | 87 von 97 |
| Deezer API (`api.deezer.com`, Interpret `Sherlock Holmes & Co`) | 06.09.2026 | Folgennummer, Titel, Erscheinungsdatum, UPC, Label | 95 von 97 |
| DNB SRU (`TIT="Sherlock Holmes & Co"`) | 06.09.2026 | Verfasser:in, **vollständige Sprecherliste** (`[Erzähler]`), Verlag, ISBN | 92 von 97 |
| Sherlock-Holmes-Fandom (de), Artikel `Sherlock Holmes & Co` und Einzelfolgen, MediaWiki-API | 06.09.2026 | **Ermittler je Folge**, Produktionsgeschichte, bei 28 Folgen Klappentext und **rollenaufgelöste** Besetzung | Liste 1–88, Einzelartikel 28 |

Vereinigung der vier Quellen: **97 Folgen, lückenlos 1–97.** Keine Titeldivergenz zwischen den Quellen. Erscheinungsdaten: 88 doppelt belegt, 7 einfach, 2 abweichend (Folge 7 und 9, siehe unten).

## Abgrenzung gegen Fremdreihen

Ausgefiltert wurden, jeweils über den Interpreten- bzw. Reihennamen:

- **`Sherlock Holmes – Die alten Fälle (Reloaded)`** — eigene Reihe mit eigener Fälle-Zählung (Fall 6, 44, 48–55 …), nicht SHC.
- **`Sherlock Holmes – Sonderermittler der Krone`** (ab 2022) — die aktuelle Vault-Serie `sherlock-holmes`; im Katalog eigener Interpret.
- **`Sherlock Holmes – Die neuen Fälle`** (Contendo/Romantruhe) und **`Sherlock Holmes Chronicles`** — fremde Labels.
- **`Aus den Archiven …`** (beide Linien) — Wiederveröffentlichungen mit eigener Zählung; sie kollidieren beim Parsen mit der SHC-Zählung und sind separat geführt.
- Die ältere reine Maritim-Sherlock-Reihe mit Christian Rode und Peter Groeger taucht unter diesem Interpretennamen im Katalog nicht auf; SHC ist durchgängig mit **Charles Rettinghaus** (Holmes) und **Florian Halm** (Watson) besetzt, was die Trennung zusätzlich absichert.

## Produktionsgeschichte (Fandom, gegen DNB geprüft)

Reihentitel vollständig: **„Sherlock Holmes & Co – Aus den Geheimakten der Meisterdetektive"**, seit September 2010 beim Label **Romantruhe Audio**.

| Folgen | Produktionsstudio | Beleg |
|---|---|---|
| 1–9 | **WinterZeit** (Regie und Bearbeitung Markus Winter) | Fandom-Reihenartikel; DNB führt für 1–9 durchgängig `Winter, Markus [Verfasser]` |
| ab 10 | **Highscore Music** | Fandom-Reihenartikel; Fandom-Einzelartikel 15, 41, 51 nennen `PRO = HighScore Music` |
| ab 19 | offiziell **Maritim**, nach der Fusion der Hörspielabteilungen von Highscore Music und Maritim | Fandom-Reihenartikel |

> **Korrektur zur bisherigen Vault-Annahme:** Die Konzeptseite führte „ab Folge 10 Maritim". Richtig ist der Zweischritt Highscore Music (ab 10) → Maritim (ab 19). Auftraggeber ist durchgängig Romantruhe Audio, nicht Maritim.

## Konzeption: SHC ist eine Ermittler-Anthologie

SHC ist keine Sherlock-Holmes-Reihe, sondern eine Reihe mit **wechselnden Ermittlern**. Aufteilung laut Fandom-Reihenartikel über die Folgen 1–88:

| Ermittler | Folgen |
|---|---:|
| Sherlock Holmes | 26 |
| Van Dusen | 26 |
| Dupin | 12 |
| Pater Brown | 10 |
| Scotland Yard | 10 |
| Holmes/Van-Dusen-Crossover | 2 |
| Holmes/Dupin-Crossover | 1 |
| McLair | 1 |

Nur die **Sherlock-Holmes-** und die **Scotland-Yard-Folgen** berühren überhaupt den Sonderermittler-Kosmos. Die Dupin-Folgen sind vollständig in die Re-Release-Linie „Aus den Archiven von Edgar Allan Poe & Auguste Dupin" ausgelagert. Van Dusen, Pater Brown, Wayne McLair und die Scotland-Yard-Vorläuferreihe sind eigene Lizenzstränge.

## Re-Release-Mapping (über Titelgleichheit, beide Richtungen geprüft)

### Aus den Archiven von Edgar Allan Poe & Auguste Dupin (Maritim, Juni–November 2020, 12 Folgen)

| Archiv-# | Titel | SHC-Original |
|---:|---|---:|
| 1 | Das Blut junger Frauen | SHC 12 |
| 2 | Der Mann in Orange | SHC 14 |
| 3 | Das Erbe der Familie Chambois | SHC 16 |
| 4 | Das Verlangen zu töten | SHC 17 |
| 5 | Die Verschwundenen von Zimmer 5 | SHC 20 |
| 6 | Tödliche Trauben | SHC 23 |
| 7 | Wolfsspuren | SHC 25 |
| 8 | Mörderisches Spektakel | SHC 28 |
| 9 | Das Rattendorf | SHC 30 |
| 10 | Femme Fatale | SHC 33 |
| 11 | Die schottische Spur | SHC 35 |
| 12 | Die Klinik-Morde | SHC 39 |

Das sind **exakt die 12 Dupin-Folgen** der Reihe — die Auslagerung ist vollständig.

### Aus den Archiven von Sherlock Holmes – Sonderermittler der Krone (Maritim, 2024–2025, 10 Folgen)

| Archiv-# | Titel | SHC-Original |
|---:|---|---:|
| 1 | Ein Fall vom Kontinent | SHC 11 |
| 2 | Der Arrest | SHC 15 |
| 3 | Eine Stadt in Angst 1. Teil | SHC 19 |
| 4 | Eine Stadt in Angst 2. Teil | SHC 19 |
| 5 | Tod am Dock | SHC 22 |
| 6 | Der Schrei der Banshee 1. Teil | SHC 26 |
| 7 | Der Schrei der Banshee 2. Teil | SHC 27 |
| 8 | Der Verlust des amerikanischen Gentlemans 1. Teil | SHC 31 |
| 9 | Der Verlust des amerikanischen Gentlemans 2. Teil | SHC 32 |
| 10 | Der bleiche Tod | SHC 51 |

> **Korrektur zur bisherigen Vault-Annahme:** Die Re-Release-Notiz sagt, ausgelassen würden „SHC 1, 3, 5, 7, 8, 9 (Winterzeit)". Das trifft die Sache nicht. Die Holmes-Archivlinie ist eine **Auswahl von 9 SHC-Originalen** aus dem Pool der 26 Holmes-Folgen; ausgelassen sind auch 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 18, 21, 24, 29, 34, 36, 37 und alles ab 61. Umgekehrt ist SHC 12 „Das Blut junger Frauen" trotz `Markus Winter` als Autor als Poe-Archiv-Folge 1 wiederveröffentlicht worden — die Winterzeit-Regel gilt für die Poe-Linie also nicht.

### SHC 55 = Moriarty „Perlen des Todes"

DNB führt zwei Titel: `Sherlock Holmes & Co, Folge 55: Perlen des Todes` und `Moriarty, Folge: Perlen des Todes / Marc Freund` (2021, Highscore Music). Beide nennen **dieselbe Verfasserin bzw. denselben Verfasser (Marc Freund) und dieselbe Sprecherliste in identischer Reihenfolge** — Rettinghaus, Halm, Schalla, Fröhlich, Schenk, Münchow, Borbach, Krause, Pintsch, Zadra, Zaurins, Solo, Otto, Wolf, Turrek, Holtheuer, Teuber, Mackensy. Damit ist belegt: **MOR 00 ist die Wiederveröffentlichung von SHC 55**, keine eigenständige Geschichte.

## Vollständige Folgenliste

`Q` = Zahl der Quellen, die das Datum tragen (`!` = Quellen widersprechen sich). `Archiv` = Wiederveröffentlichung (PD = Poe & Dupin, SH = Sherlock Holmes).

| # | Datum | Q | Titel | Ermittler | Autor:in (DNB) | Sprecher (DNB) | Archiv |
|---:|---|:-:|---|---|---|---:|---|
| 1 | 2012-08-31 | 2 | Das Geisterhaus | Sherlock Holmes | Winter, Markus | 5 |  |
| 2 | 2012-08-31 | 2 | Der zerbrochene Armreif | Van Dusen | Winter, Markus | 3 |  |
| 3 | 2012-08-31 | 2 | Der Mord ohne Leiche | Sherlock Holmes | Winter, Markus | 6 |  |
| 4 | 2011-03-11 | 1 | Der verfluchte Gong | Van Dusen | Winter, Markus | 8 |  |
| 5 | 2012-02-17 | 2 | Das Spinnennetz | Sherlock Holmes | Winter, Markus | 6 |  |
| 6 | 2013-05-31 | 2 | Der überflüssige Finger | Van Dusen | Winter, Markus | 7 |  |
| 7 | 2014-04-14 / 2014-04-04 | ! | Die Tragödie von Birlstone | Holmes/Van-Dusen-Crossover | Winter, Markus | 11 |  |
| 8 | 2014-04-04 | 2 | Loge 341 | Holmes/Van-Dusen-Crossover | Winter, Markus | 15 |  |
| 9 | 2014-03-23 / 2014-05-23 | ! | Die Hexe von Whitechapel | Sherlock Holmes | Winter, Markus | 10 |  |
| 10 | 2014-08-01 | 2 | Der Griff des Todes | Van Dusen | Futrelle, Jacques | 4 |  |
| 11 | 2014-09-26 | 2 | Ein Fall vom Kontinent | Holmes/Dupin-Crossover | Tippner, Thomas | 3 | SH 1 |
| 12 | 2014-11-28 | 2 | Das Blut junger Frauen | Dupin | Winter, Markus | 3 | PD 1 |
| 13 | 2015-01-30 | 2 | Das flammende Phantom | Van Dusen | Doyle, Arthur Conan | 3 |  |
| 14 | 2015-03-13 | 2 | Der Mann in Orange | Dupin | Doyle, Arthur Conan | 3 | PD 2 |
| 15 | 2015-05-08 | 2 | Der Arrest | Sherlock Holmes | Tippner, Thomas | 3 | SH 2 |
| 16 | 2015-06-19 | 2 | Das Erbe der Familie Chambois | Dupin | Poe, Edgar Allan | 3 | PD 3 |
| 17 | 2015-07-24 | 2 | Das Verlangen zu töten | Dupin | Poe, Edgar Allan | 3 | PD 4 |
| 18 | 2015-09-18 | 2 | Die Geisterfrau | Van Dusen | Futrelle, Jacques | 3 |  |
| 19 | 2015-11-20 | 2 | Eine Stadt in Angst | Sherlock Holmes | Tippner, Thomas | 3 | SH 3+4 |
| 20 | 2015-12-04 | 1 | Die Verschwundenen von Zimmer 5 | Dupin | Tippner, Thomas | 2 | PD 5 |
| 21 | 2016-01-15 | 2 | Botschaft aus dem Totenreich | Van Dusen | Holtheuer, Patrick | 2 |  |
| 22 | 2016-03-18 | 2 | Tod am Dock | Sherlock Holmes | Topf, Markus | 2 | SH 5 |
| 23 | 2016-05-13 | 2 | Tödliche Trauben | Dupin | Markus Duschek | 0 | PD 6 |
| 24 | 2016-06-17 | 2 | Der grinsende Gott | Van Dusen | Duschek, Markus | 4 |  |
| 25 | 2016-07-22 | 2 | Wolfsspuren | Dupin | Duschek, Markus | 4 | PD 7 |
| 26 | 2016-09-02 | 1 | Der Schrei der Banshee, Episode 1 | Sherlock Holmes | Fleischer, Oliver | 3 | SH 6 |
| 27 | 2016-09-02 | 1 | Der Schrei der Banshee, Episode 2 | Sherlock Holmes | Fleischer, Oliver | 3 | SH 7 |
| 28 | 2016-10-28 | 2 | Mörderisches Spektakel | Dupin | Duschek, Markus | 4 | PD 8 |
| 29 | 2016-11-25 | 2 | Der Schrecken vom Central Park | Van Dusen | Holtheuer, Patrick | 4 |  |
| 30 | 2017-02-10 | 2 | Das Rattendorf | Dupin | Duschek, Markus | 8 | PD 9 |
| 31 | 2017-04-21 | 1 | Der Verlust des amerikanischen Gentlemans, Episode 1 | Sherlock Holmes | Maas, Jonas | 11 | SH 8 |
| 32 | 2017-06-09 | 1 | Der Verlust des amerikanischen Gentlemans, Episode 2 | Sherlock Holmes | Maas, Jonas | 11 | SH 9 |
| 33 | 2017-08-18 | 2 | Femme Fatale | Dupin | Duschek, Markus | 5 | PD 10 |
| 34 | 2017-11-17 | 2 | Das Haus der Verdammten | Van Dusen | Duschek, Markus | 9 |  |
| 35 | 2018-01-26 | 2 | Die schottische Spur | Dupin | Duschek, Markus | 8 | PD 11 |
| 36 | 2018-03-16 | 1 | Der Jungbrunnen, Episode 1 | Sherlock Holmes | Topf, Markus | 9 |  |
| 37 | 2018-04-27 | 1 | Der Jungbrunnen, Episode 2 | Sherlock Holmes | Topf, Markus | 13 |  |
| 38 | 2018-06-08 | 2 | Der schwarze Tod | Van Dusen | Duschek, Markus | 7 |  |
| 39 | 2018-07-20 | 2 | Die Klinik-Morde | Dupin | Duschek, Markus | 13 | PD 12 |
| 40 | 2018-08-31 | 2 | Zirkus des Verbrechens | Van Dusen | Duschek, Markus | 14 |  |
| 41 | 2018-10-12 | 1 | Das Verschwinden der Louise M., Episode 1 | Sherlock Holmes | Grandt, Willis | 17 |  |
| 42 | 2018-11-23 | 1 | Das Verschwinden der Louise M., Episode 2 | Sherlock Holmes | Grandt, Willis | 17 |  |
| 43 | 2019-01-25 | 2 | Der Rachegeist von Sing Sing | Van Dusen | Duschek, Markus Verfasser] | 15 |  |
| 44 | 2019-03-08 | 2 | Der Falschspieler mit dem Karo-Ass | McLair | Burghardt, Paul | 11 |  |
| 45 | 2019-06-07 | 2 | Hinter den Kulissen | Sherlock Holmes | Bischoff, Marc-Oliver | 23 |  |
| 46 | 2019-07-19 | 2 | Das doppelte Gesicht | Pater Brown | Beckmann, Thorsten | 11 |  |
| 47 | 2019-09-06 | 2 | Todesmelodie | Van Dusen | Markus Duschek | 0 |  |
| 48 | 2019-10-11 | 2 | Das Ende des Inspektors | Scotland Yard | Markus Duschek | 0 |  |
| 49 | 2019-11-22 | 2 | Fahrstuhl zum Mord | Van Dusen | Markus Duschek | 0 |  |
| 50 | 2020-01-17 | 2 | Auf dass ihr gerichtet werdet | Pater Brown | Freund, Marc | 15 |  |
| 51 | 2020-03-13 | 2 | Der bleiche Tod | Sherlock Holmes | Duschek, Markus | 18 | SH 10 |
| 52 | 2020-05-08 | 2 | Boten der Angst | Van Dusen | Duschek, Markus | 12 |  |
| 53 | 2020-07-03 | 2 | Die Rückkehr der Angst | Scotland Yard | Duschek, Markus | 12 |  |
| 54 | 2020-08-28 | 2 | Tod vor laufender Kamera | Van Dusen | Duschek, Markus | 17 |  |
| 55 | 2020-09-25 | 2 | Perlen des Todes | Sherlock Holmes | Freund, Marc | 18 |  |
| 56 | 2020-10-30 | 2 | Preußisch Blau | Pater Brown | Beckmann, Thorsten | 12 |  |
| 57 | 2020-11-27 | 2 | Der König von New York | Van Dusen | Duschek, Markus | 19 |  |
| 58 | 2021-01-29 | 2 | Unheilvolle Beute | Scotland Yard | Duschek, Markus | 12 |  |
| 59 | 2021-02-26 | 2 | Dein Freund und Helfer | Van Dusen | Duschek, Markus | 16 |  |
| 60 | 2021-04-02 | 2 | Im Sumpf des Verbechens | Pater Brown | Freund, Marc | 12 |  |
| 61 | 2021-05-28 | 1 | Die Spur des Verderbens, Episode 1 | Sherlock Holmes | Freund, Marc | 11 |  |
| 62 | 2021-07-16 | 1 | Die Spur des Verderbens, Episode 2 | Sherlock Holmes | Freund, Marc | 17 |  |
| 63 | 2021-08-20 | 2 | Verhängnisvolle Hoffnung | Van Dusen | Duschek, Markus | 12 |  |
| 64 | 2021-09-24 | 2 | Puppenspieler | Scotland Yard | Duschek, Markus | 14 |  |
| 65 | 2021-12-03 | 2 | Heim der Phantome | Van Dusen | Duschek, Markus | 11 |  |
| 66 | 2022-03-25 | 2 | Die Stunde der Frau | Pater Brown | Röttges-Paslack, Sandra | 13 |  |
| 67 | 2022-04-22 | 2 | Der Wiedergänger | Sherlock Holmes | Freund, Marc | 18 |  |
| 68 | 2022-07-22 | 2 | Der kalte Hauch der Rache | Scotland Yard | Duschek, Markus | 15 |  |
| 69 | 2022-12-09 | 2 | Der Schatz der toten Seelen | Van Dusen | Duschek, Markus | 12 |  |
| 70 | 2023-03-10 | 2 | Ein wildes Spiel | Pater Brown | Röttges-Paslack, Sandra | 12 |  |
| 71 | 2023-04-14 | 2 | Schwarze Seide | Sherlock Holmes | Freund, Marc | 15 |  |
| 72 | 2023-06-23 | 2 | Das Geheimnis der Lady Carrington | Scotland Yard | Duschek, Markus | 12 |  |
| 73 | 2023-08-18 | 2 | Der letzte Flug | Van Dusen | Duschek, Markus | 14 |  |
| 74 | 2023-12-22 | 2 | Seine letzte Tasse Tee | Pater Brown | Röttges-Paslack, Sandra | 11 |  |
| 75 | 2024-01-12 | 2 | Der Tyrann | Sherlock Holmes | Walter, Silke | 11 |  |
| 76 | 2024-02-23 | 2 | Ein lebender Köder | Scotland Yard | Duschek, Markus | 12 |  |
| 77 | 2024-04-12 | 2 | Edler Pesthauch | Van Dusen | Duschek, Markus | 12 |  |
| 78 | 2024-05-24 | 2 | Von Bullen und Bären | Pater Brown | Röttges-Paslack, Sandra | 15 |  |
| 79 | 2024-07-05 | 2 | Die Reise des Toten | Sherlock Holmes | Walter, Silke | 14 |  |
| 80 | 2024-08-02 | 2 | Die dunkle Seite | Scotland Yard | Duschek, Markus | 14 |  |
| 81 | 2024-12-27 | 2 | Versuchung | Van Dusen | Duschek, Markus | 7 |  |
| 82 | 2025-02-21 | 2 | Jung, schön, tot | Pater Brown | Walter, Silke | 11 |  |
| 83 | 2025-04-04 | 2 | Die Morde von Covent Garden | Sherlock Holmes | Walter, Silke | 14 |  |
| 84 | 2025-05-16 | 2 | Der unerbittliche Richter | Scotland Yard | Duschek, Markus | 13 |  |
| 85 | 2025-06-27 | 2 | Das Rätsel der Bleikammern | Van Dusen | Duschek, Markus | 11 |  |
| 86 | 2025-09-19 | 2 | Keine gute Tat | Pater Brown | Walter, Silke | 12 |  |
| 87 | 2025-10-31 | 2 | Die Macht der Wünsche | Sherlock Holmes | Walter, Silke | 11 |  |
| 88 | 2025-12-12 | 2 | Der Gast aus den Karpaten | Scotland Yard | Duschek, Markus | 9 |  |
| 89 | 2026-01-23 | 2 | Das Haupt der Medusa | ? | Duschek, Markus | 8 |  |
| 90 | 2026-03-06 | 2 | Der Witwer von Windsor | – | Walter, Silke | 12 |  |
| 91 | 2026-04-17 | 2 | Eine fatale Lösung | – | Walter, Silke | 10 |  |
| 92 | 2026-05-29 | 2 | Das tätowierte Rätsel | – | Duschek, Markus | 12 |  |
| 93 | 2026-07-10 | 2 | Mord in den Bergen | – | Duschek, Markus | 10 |  |
| 94 | 2026-08-21 | 2 | Auf gefährlichem Kurs | – | Walter, Silke | 14 |  |
| 95 | 2026-10-02 | 2 | Gelegenheit macht Mörder | – | Walter, Silke | 9 |  |
| 96 | 2026-11-13 | 2 | Der Inquisitor | – | – | 0 |  |
| 97 | 2026-12-25 | 2 | Die rote Gräfin | – | Duschek, Markus | 12 |  |

**Datumswidersprüche:** Folge 7 und Folge 9 — Apple Music und Deezer nennen unterschiedliche Tage. Der Fandom-Artikel zu Folge 9 nennt `25.04.2014`, was zu keinem der beiden Plattformdaten passt. Beide Folgen sind WinterZeit-Produktionen ohne Kanonrelevanz; nicht weiter verfolgt.

## Aufnahmekriterium (hergeleitet, Vorschlag)

Aus den fünf bereits geführten Seiten und der Konzeptseite lässt sich die gelebte Praxis als Regel fassen. Sie ist bewusst so formuliert, dass sie **an einer Quelle prüfbar** ist und nicht vom Geschmack abhängt.

> **Regel.** Eine SHC-Folge wird im Vault als eigene Folgenseite geführt, wenn mindestens eines der drei Merkmale an einer Quelle belegbar ist:
>
> **(A) Figuren-Schaltpunkt.** In der Folge tritt eine Figur **zum ersten Mal** auf, die anschließend im Sonderermittler-Kosmos wiederkehrt und im Vault eine eigene Figurenseite trägt. *(SHC 45 → Wu; SHC 48 → Geoffrey Stafford)*
>
> **(B) Kanon-Ereignis.** Die Folge enthält ein Ereignis oder einen Auftritt, den spätere Sonderermittler-Folgen als Vorgeschichte voraussetzen — ausdrücklicher Bezug auf den [[wiki/konzepte/zirkel-der-sieben|Zirkel der Sieben]], einen Zirkel-Antagonisten oder eine reihenübergreifende Titelfigur. *(SHC 48 → Ermordung Lestrades; SHC 53 → der Gegner aus dem Frankreich-Strang; SHC 26/27 → erste Zusammenarbeit Holmes × Oscar Wilde)*
>
> **(C) Grundstein.** Die Folge geht einer eigenständigen Sonderermittler-Reihe unmittelbar voraus und liefert deren Ausgangslage. *(SHC 45 → IADK, Start 21 Tage später; SHC 55 → Moriarty, Start 7 Tage später)*

**Zwei Ausschlüsse, die zur Regel gehören:**

1. **Wiederveröffentlichung begründet keine Aufnahme.** Dass eine SHC-Folge unter „Aus den Archiven" neu erscheint, macht sie nicht kanonrelevant — sonst müssten 21 Folgen aufgenommen werden, darunter zwölf reine Dupin-Krimis ohne Universumsbezug. Die Archivlinien sind laut `CLAUDE.md` §5.1 als Abschnitte unter der jeweiligen Hauptserie dokumentiert, nicht als Folgenseiten.
2. **Der bloße Auftritt einer Doyle-Figur genügt nicht.** Sherlock Holmes, Watson, Mycroft, Lestrade, Moriarty und Irene Adler kommen in SHC durchgehend vor — sie sind das Reihenpersonal, nicht ein Übertritt in den Kosmos. Erst der *erste* Auftritt oder ein Ereignis mit Folgewirkung zählt.

**Schärfung gegenüber der Lesart „Erstauftritt einer kanonrelevanten Figur":** Diese Formulierung allein trägt nicht. Sie würde SHC 1 „Das Geisterhaus" (Erstauftritt Sherlock Holmes und Watson in dieser Reihe) und SHC 5 „Das Spinnennetz" (erster Auftritt Irene Adlers) einschließen — beides WinterZeit-Doyle-Pastiches ohne jede Verbindung zum Kosmos. Merkmal (A) muss deshalb an die **Figurenseite im Vault plus spätere Wiederkehr im Sonderermittler-Kanon** gebunden werden, nicht an Prominenz.

## Prüfung aller 97 Folgen gegen die Regel

**Vorgehen.** Erstens Strukturfilter über den Ermittler (Fandom): die 26 Van-Dusen-, 12 Dupin-, 10 Pater-Brown- und 1 McLair-Folge scheiden aus, weil in ihnen keine Kosmos-Figur auftritt; übrig bleiben 26 Holmes- und 10 Scotland-Yard-Folgen. Zweitens Volltext-Schlagwortsuche über die 28 verfügbaren Fandom-Einzelartikel nach Kosmos-Begriffen (Zirkel, Dracula, Sapriel, Moriarty, Adler, Wilde, Mycroft, Stafford, Lestrade, Wu, Fogg, Nemo, Tesla, Crowley, Robur, Killjoy, Mata Hari, Houdini, Van Helsing, Harker, Sonderermittler, Krone, Digby, Theodora, Morell, Vidocq). Drittens Gegenprobe über die DNB-Sprecherlisten: Wo eine Kosmos-Rolle vorkommt, muss die zugehörige Stimme in der Liste stehen.

### Der Scotland-Yard-Strang — die eigentliche Fundstelle

Zehn SHC-Folgen tragen laut Fandom den Ermittler „Scotland Yard". Die DNB-Sprecherlisten zeigen, dass es sich um einen **durchlaufenden Handlungsstrang mit festem Ensemble** handelt: **Björn Schalla (Geoffrey Stafford)** und **Rainer Fritzsche (Inspektor Cross)** stehen in allen zehn, **Reent Reins (Mycroft Holmes)** in sieben davon.

| SHC | Datum | Titel | Schalla | Fritzsche | Reins (Mycroft) |
|---:|---|---|:-:|:-:|:-:|
| 48 | 2019-10-11 | Das Ende des Inspektors | ✓ | ✓ | ✓ |
| 53 | 2020-07-03 | Die Rückkehr der Angst | ✓ | ✓ | ✓ |
| 58 | 2021-01-29 | Unheilvolle Beute | ✓ | ✓ | — |
| 64 | 2021-09-24 | Puppenspieler | ✓ | ✓ | ✓ |
| 68 | 2022-07-22 | Der kalte Hauch der Rache | ✓ | ✓ | ✓ |
| 72 | 2023-06-23 | Das Geheimnis der Lady Carrington | ✓ | ✓ | ✓ |
| 76 | 2024-02-23 | Ein lebender Köder | ✓ | ✓ | ✓ |
| 80 | 2024-08-02 | Die dunkle Seite | ✓ | ✓ | ✓ |
| 84 | 2025-05-16 | Der unerbittliche Richter | ✓ | ✓ | — |
| 88 | 2025-12-12 | Der Gast aus den Karpaten | ✓ | ✓ | — |

Für SHC 48 liefert die DNB keine Sprecherliste; die Besetzung stammt dort aus dem Fandom-Artikel.

### Kandidatentabelle

| # | Titel | Datum | Kanonrelevanz | Belege | Empfehlung |
|---:|---|---|---|---|---|
| **41 + 42** | Das Verschwinden der Louise M. (Doppelfolge) | 12.10.2018 / 23.11.2018 | **Phileas Fogg tritt auf** — erster belegter Auftritt einer DNAPF-Titelfigur in SHC. Merkmal (B). | Fandom-Besetzungstabelle: `Phileas Fogg = Sascha Draeger`; DNB-Sprecherliste beider Teile enthält `Draeger, Sascha` | **aufnehmen** |
| **64** | Puppenspieler | 24.09.2021 | Klappentext nennt den **Zirkel der Sieben** wörtlich: „Geoffrey Stafford vermutet den Zirkel der Sieben hinter den Taten". Merkmal (B), stärkster Beleg der ganzen Reihe. | Fandom-Klappentext; DNB-Besetzung Schalla + Fritzsche + Reins | **aufnehmen** |
| **68** | Der kalte Hauch der Rache | 22.07.2022 | Ermordung von Stafford**s** Frau Gwen; Wendepunkt im Werdegang einer Vault-Figur, Mycroft greift ein. Merkmal (B), schwächer als 64 — kein Zirkel im Text. | Fandom-Klappentext; DNB-Besetzung | **aufnehmen** |
| 58 | Unheilvolle Beute | 29.01.2021 | Teil des Stafford/Cross-Strangs, kein Mycroft. Inhalt nicht ermittelbar. | nur DNB-Besetzung | **unklar** |
| 72 | Das Geheimnis der Lady Carrington | 23.06.2023 | Stafford/Cross **plus Mycroft**. Inhalt nicht ermittelbar. | nur DNB-Besetzung | **unklar** |
| 76 | Ein lebender Köder | 23.02.2024 | Stafford/Cross **plus Mycroft**. Inhalt nicht ermittelbar. | nur DNB-Besetzung | **unklar** |
| 80 | Die dunkle Seite | 02.08.2024 | Stafford/Cross **plus Mycroft**. Inhalt nicht ermittelbar. | nur DNB-Besetzung | **unklar** |
| 84 | Der unerbittliche Richter | 16.05.2025 | Stafford/Cross, kein Mycroft. Inhalt nicht ermittelbar. | nur DNB-Besetzung | **unklar** |
| 88 | Der Gast aus den Karpaten | 12.12.2025 | Stafford/Cross. **Titelindiz** auf den Dracula-Strang (Karpaten, vgl. FRANK 26 „Doppelte Tarnung", Reise nach Bistritz in die Karpaten, 2026). Inhalt nicht ermittelbar. | nur DNB-Besetzung + Titel | **unklar, mit Vorrang** |
| 5 | Das Spinnennetz | 17.02.2012 | Irene Adler und Mycroft treten auf — aber als Doyle-Figuren in einer WinterZeit-Bearbeitung von „Ein Skandal in Böhmen". Kein Kosmos-Bezug. | Fandom-Artikel | nicht aufnehmen |
| 3 | Der Mord ohne Leiche | 31.08.2012 | Moriarty und Colonel Moran als klassische Doyle-Gegner, WinterZeit-Pastiche. | Fandom-Artikel | nicht aufnehmen |
| 9 / 22 | Die Hexe von Whitechapel / Tod am Dock | 2014 / 2016 | Lestrade als Reihenpersonal, kein Ereignis mit Folgewirkung. | Fandom-Artikel | nicht aufnehmen |
| 15 | Der Arrest | 08.05.2015 | Irene Adler als Nebenrolle (Yvonne Greitzke). Auftritt ohne Folgewirkung; zudem als Archiv-SH 2 wiederveröffentlicht. | Fandom-Besetzung | nicht aufnehmen |
| 51 | Der bleiche Tod | 13.03.2020 | Irene Adler bringt Holmes „auf die Spur einer geheimnisvollen Gruppierung" — inhaltlich nah an einem Zirkel-Motiv, aber der Text nennt weder Zirkel noch eine Kosmos-Figur. Archiv-SH 10. | Fandom-Klappentext und -Besetzung | **unklar**, eher nicht |
| 1, 11, 19, 31/32, 36/37, 61/62, 67, 71 | — | Fandom-Artikel vorhanden, **kein** Kosmos-Schlagwort im Text. | Fandom | nicht aufnehmen |
| alle übrigen 26 Van-Dusen-, 12 Dupin-, 10 Pater-Brown-, 1 McLair-Folge | — | Fremde Ermittler, kein Kosmos-Personal. | Fandom-Reihenartikel | nicht aufnehmen |

**Nicht abschließend prüfbar:** Für 69 der 97 Folgen liegt kein Klappentext vor (Fandom führt nur 28 Einzelartikel, die Verlags- und Händlerseiten waren zu SHC nicht erreichbar). Die Empfehlung „unklar" für sechs Scotland-Yard-Folgen ist deshalb ein Recherchestand, kein Urteil. Die naheliegende nächste Quelle wäre der Romantruhe-/Maritim-Shop oder das Booklet.

## Gegenprüfung der fünf bestehenden Einträge

| Eintrag | Nummer | Titel | Datum | Kriterium trägt? |
|---|---|---|---|---|
| SHC 26/27 „Der Schrei der Banshee" | **fraglich** — der Vault führt eine Seite mit `nummer: 26` und dem Titel „Der Schrei der Banshee (26/27)". Alle vier Quellen führen **zwei getrennte Folgen** 26 und 27 (getrennte Alben, getrennte DNB-Sätze, getrennte Archiv-Nummern SH 6 und SH 7). | korrekt | 02.09.2016, dreifach belegt (Deezer, DNB, Löchel-Chronologie) | **ja**, Merkmal (B): Fandom-Besetzung führt `Oscar Wilde = Sascha Rotermund` — die erste Zusammenarbeit ist damit primär belegt, nicht nur über die Chronologie |
| SHC 45 „Hinter den Kulissen" | korrekt | korrekt | 07.06.2019, doppelt belegt | **ja**, (A) + (C). Fandom-Besetzung belegt zusätzlich `Mister Wu = Michael Pan` **rollenaufgelöst** — das schließt die im Vault offen geführte Sprecherfrage |
| SHC 48 „Das Ende des Inspektors" | korrekt | korrekt | 11.10.2019, doppelt belegt | **ja**, (A) + (B). Fandom bestätigt Lestrades Ermordung und den Erstauftritt Staffords, führt daneben **Inspektor Cross** ein (im Vault noch ohne Figurenseite) |
| SHC 53 „Die Rückkehr der Angst" | korrekt | korrekt | 03.07.2020, doppelt belegt | **ja**, aber **Beleglage präzisieren**: Der Fandom-Klappentext nennt weder Dracula noch „Sapriel". Er beschreibt einen „Magischen Zirkus" und einen Gegner, „den schon andere Ermittler vergeblich zu stellen versucht haben", mit ausdrücklichem Verweis auf „ähnliche Fälle in Frankreich" — das passt zur Pariser Sapriel-Spur in EAPAD 2, sagt sie aber nicht. Die Gleichsetzung Sapriel = Dracula stammt allein aus der Löchel-Chronologie. Ebenso ist der auf der Seite behauptete **Erstauftritt Digby Leech** in keiner der vier Quellen belegt |
| SHC 55 „Perlen des Todes" | korrekt | korrekt | **25.09.2020, jetzt doppelt belegt** (Apple Music und Deezer). Damit ist das „TBD" der Folgenseite aufgelöst; der Wert in `folgen.json` ist richtig, nur der Fließtext der Seite hinkt hinterher | **ja**, (C). Zusätzlich ist jetzt belegt, dass **MOR 00 die Wiederveröffentlichung dieser Folge ist** (identische Besetzung und Autorenschaft laut DNB) — der im Lint vom 17.08.2026 offen gelassene Widerspruch ist damit entschieden |

## Nebenbefunde zu Sprechern (rollenaufgelöst, Fandom-Besetzungstabellen)

Die Fandom-Einzelartikel führen Rolle **und** Sprecher in einer Tabelle. Das liefert erstmals rollenaufgelöste Belege für Angaben, die der Vault bisher nur als Annahme führt:

| Rolle | Sprecher | Beleg |
|---|---|---|
| Mister Wu | Michael Pan | SHC 45 — schließt die offene Frage auf `wiki/figuren/wu.md` |
| Mycroft Holmes | Reent Reins | SHC 45, 48, 53 — zweite, rollenaufgelöste Quelle neben dem Fandom-Serienauszug |
| Irene Adler | Yvonne Greitzke | SHC 15, 45, 51 — zweite Quelle neben der Löchel-Chronologie |
| James Moriarty | Andreas Fröhlich | SHC 55 |
| Geoffrey Stafford | Björn Schalla | SHC 48, 53, 64, 68 |
| Inspektor Cross | Rainer Fritzsche | SHC 48, 53, 64, 68 |
| Oscar Wilde | Sascha Rotermund | SHC 26/27 |
| Phileas Fogg | Sascha Draeger | SHC 41/42 |
| „Mister Killroy" | Matti Klemm | SHC 45 |

**Zu „Mister Killroy" in SHC 45 (07.06.2019):** Der Vault führt als Erstauftritt Killjoys IADK 1 vom 14.06.2019 — eine Woche später. Die Schreibvariante „Killroy" ist auf `wiki/figuren/killjoy.md` bereits als Alias und als vermuteter Übertragungsfehler dokumentiert. Ist es dieselbe Figur, wäre **SHC 45 ihr tatsächlicher Erstauftritt**, und die Folge erfüllte Merkmal (A) gleich zweifach. Das ist ein Fund, keine Feststellung: eine zweite Quelle fehlt, und das gemeinsame Auftreten mit Irene Adler und Wu in derselben Folge macht eine Verwechslung mit einer gleichnamigen Nebenrolle nicht unmöglich. **Entscheidung Christian.**
## Nachtrag: „Grundstein" heisst in Wahrheit „Wiederveroeffentlichung"

Die Gegenprobe in der DNB zeigt, dass die beiden im Vault als **Grundstein-Folgen** gefuehrten SHC-Folgen keine blossen Vorlaeufer sind, sondern **spaeter als Folge 0 der jeweiligen neuen Reihe erneut erschienen**:

| SHC-Original | Neuausgabe | Beleg |
|---|---|---|
| **SHC 45 „Hinter den Kulissen"** (07.06.2019) | **IADK 0 „Hinter den Kulissen"** (22.11.2019) | DNB-Satz `Irene Adler, Sonderermittlerin der Krone, Folge: Hinter den Kulissen / Marc-Oliver Bischoff`, 2019 — identische Autorenschaft und **identische Sprecherliste in identischer Reihenfolge** (Rettinghaus, Halm, Reins, Greitzke, Pan, Aust, Draeger, Schulzki, Kinzel, Klemm, Tennstedt, Wolff, Wietzorek, Teschner, Frass, Raczko, Fritzsche, Kirchberger, Piedesack, Loewenberg, Oechsle, Mackensy) |
| **SHC 55 „Perlen des Todes"** (25.09.2020) | **MOR 00 „Perlen des Todes"** (13.08.2021) | DNB-Satz `Moriarty, Folge: Perlen des Todes / Marc Freund`, 2021 — identische Autorenschaft und identische Sprecherliste in identischer Reihenfolge |

Damit ist ein **drittes Wiederveroeffentlichungsmuster** belegt, neben den beiden „Aus den Archiven"-Linien: die Einzel-Uebernahme einer SHC-Folge als **Folge 0** einer neuen Sonderermittler-Reihe. Beide Faelle waren im Vault als Widerspruch bzw. offene Frage notiert.

**Konsequenz fuer das Aufnahmekriterium.** Merkmal (C) „Grundstein" beschreibt damit nicht eine Vorlaeuferfolge, sondern eine **Doppelidentitaet**: dieselbe Produktion existiert unter zwei Reihennummern. Das kollidiert mit dem Ausschluss „Wiederveroeffentlichung begruendet keine Aufnahme". Zwei Auswege, **Entscheidung Christian**:

- **(a) Beibehalten wie bisher** — SHC 45 und SHC 55 bleiben eigene Seiten, weil sie die Erstveroeffentlichung sind und die spaetere Nullnummer nur die Zweitverwertung. Dann muessen `irene-adler-00` und `moriarty-00` einen Verweis auf das Original tragen, und `zirkel`/`erschienen` duerfen zwischen den Paaren nicht auseinanderlaufen (der Lint vom 17.08.2026 hatte genau das bemaengelt).
- **(b) Zusammenfuehren** — nach `CLAUDE.md` §5.1 gehoert eine Re-Release-Beziehung als Abweichungstabelle unter die Hauptserie. Dann entfallen die Folgenseiten `sherlock-holmes-und-co-45` und `sherlock-holmes-und-co-55`, und die Information wandert in die Serienseiten von Irene Adler und Moriarty.

Fuer **SHC 26/27** gilt das nicht: dort ist die Neuausgabe eine der beiden „Aus den Archiven"-Linien, kein Nullnummern-Uebertrag.

**Nebenbefund zu Killjoy:** `Klemm, Matti` steht in **beiden** Sprecherlisten (SHC 45 und IADK 0). Die Fandom-Besetzung zu SHC 45 loest die Rolle als „Mister Killroy" auf. Da IADK 0 dieselbe Produktion ist, faellt der Auftritt in beide Faelle — der frueheste Veroeffentlichungstermin der Figur ist damit der **07.06.2019** (SHC 45), eine Woche vor dem im Vault gefuehrten IADK 1.
