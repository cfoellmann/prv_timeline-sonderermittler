---
quelle_typ: notiz
quelle_url: mehrere (siehe Abschnitt 7)
quelle_datum: 2026-10-12
abgerufen: 2026-10-12
betrifft_serie: mehrere
betrifft_folgen:
  - sherlock-holmes-23-der-wiedergaenger-von-soho
  - kapitaen-nemo-05-kopfgeld
  - wilde-mycroft-ungeloeste-05-kalt-wie-eis
  - phileas-fogg-53-der-verschollene-zug
  - sherlock-holmes-24-die-strassen-der-angst
  - frankenstein-28-gegen-jeden-widerstand
  - oscar-wilde-und-mycroft-holmes-60-tiefe-reue
  - irene-adler-36-die-kraft-der-illusion
---

# Recherchenotiz — Neue-Folgen-Scout, 12.10.2026 (Nachtrag Oktober)

Abrufdatum aller Quellen: **12.10.2026**. Vault-Stand vor dieser Recherche: **03.10.2026** (Commit 59c0054).

Zweck: Watchlist-Prüfung nach den Terminen 09.10. (NEM 5, SH 23) und vor 16.10. (WMU 5, DNAPF 53),
plus Suche ab der jeweils höchsten erfassten Folgennummer. Rohprotokoll — die Auswertung steht in den Wiki-Seiten.

## 1. Ist-Stand vor der Recherche (`app/data/folgen.json`, `stand: 2026-10-03`, 320 Einträge)

| Serie | Einträge | höchste Nr. | jüngstes `erschienen` | davon geplant |
|---|---:|---|---|---|
| phileas-fogg | 53 | 53 (Der verschollene Zug) | 2026-10-16 | 53 |
| oscar-wilde-und-mycroft-holmes | 60 | 60 (Tiefe Reue) | 2026-10-30 | 60 |
| poe-und-dupin | 36 | 36 | 2026-07-31 | — |
| irene-adler | 37 (0–36) | 36 (Die Kraft der Illusion) | 2026-11-27 | 36 |
| moriarty | 28 (0–27) | 27 | 2026-09-25 | — |
| dracula | 16 | 16 | 2024-10-25 | — |
| frankenstein | 28 | 28 (Gegen jeden Widerstand) | 2026-11-13 | 28 |
| sherlock-holmes | 24 | 24 (Die Straßen der Angst) | 2026-12-04 | 23, 24 |
| sherlock-holmes-und-co | 11 (Auswahl) | 68 | 2022-07-22 | — |
| oscar-wilde-und-irene-adler | 4 | 4 | 2024-11-15 | — |
| tesla | 9 | 9 | 2026-08-14 | — |
| oscar-wilde-und-poe | 4 | 4 | 2026-01-16 | — |
| wilde-mycroft-ungeloeste | 5 | 5 (Kalt wie Eis) | 2026-10-16 | 5 |
| kapitaen-nemo | 5 | 5 (Kopfgeld) | 2026-10-09 | 5 |

## 2. Apple Music / iTunes API (Storefront DE)

`lookup?id=<artistId>&entity=album` für alle zehn bekannten Artist-IDs (siehe Notiz 03.10.2026), dazu
Freitextsuche (`Sonderermittler der Krone`, `Kapitän Nemo`, `Phileas Fogg Folge 53`, `verschollene Zug`,
`Tesla Folge 10`, `Poe Dupin Folge 37`, `Moriarty Folge 28`, `Mycroft Holmes Folge 6`, `Frankenstein Folge 29`).
Laufzeit = Summe der Track-Zeiten über `lookup?id=<collectionId>&entity=song`.

Alle Alben mit `releaseDate` ab 01.09.2026:

| releaseDate | Album | Tracks | Summe min | collectionId | ℗ |
|---|---|---:|---:|---:|---|
| 2026-09-04 | OWMH — Folge 59: Die Spur der Echse | 33 | — | 6783921221 | Maritim Verlag |
| 2026-09-11 | Frankenstein — Folge 27: Finsteres Erbe | 34 | — | 6779633820 | Maritim Verlag |
| 2026-09-25 | Moriarty — Folge 27: Tiefe Wasser | 46 | — | 6783852411 | Maritim Verlag |
| 2026-10-02 | Irene Adler — Folge 35: Bilder des Fortschritts | 35 | — | 6793608150 | Maritim Verlag |
| **2026-10-09** | Die Abenteuer des Kapitän Nemo — Folge 5: Kopfgeld | 41 | 63,2 | 6812211650 (Dublette 6812211526) | All Ears GmbH |
| **2026-10-09** | Sherlock Holmes — Folge 23: Der Wiedergänger von Soho | 36 | **56,2** | 6779640521 | Maritim Verlag |
| 2026-10-16 | Oscar Wilde – Die ungelösten Fälle des Mycroft Holmes — Folge 5: Kalt wie Eis | 35 | 53,5 | 6813822873 | Blitz Verlag |
| 2026-10-30 | OWMH — Folge 60: Tiefe Reue | 34 | 53,0 | 6800355890 | Maritim Verlag |
| 2026-11-13 | Frankenstein — Folge 28: Gegen jeden Widerstand | 35 | **53,7** | 6800340465 | Maritim Verlag |
| 2026-11-27 | Irene Adler — Folge 36: Die Kraft der Illusion | 38 | 57,9 | 6805508742 | Maritim Verlag |
| 2026-12-04 | Sherlock Holmes — Folge 24: Die Straßen der Angst | 38 | **58,4** | 6798786289 | Maritim Verlag |

Neu gegenüber dem 03.10.: Für SH 23, FRANK 28 und SH 24 liegen jetzt die Track-Zeiten vor.

**Hörbuchsparte** (`media=audiobook`): „Sherlock Holmes, Sonderermittler der Krone, Folge 23: Der Wiedergänger
von Soho (Ungekürzt)", 2026-10-09, `artistName` **Silke Walter**. Für NEM 5 nennt die Hörbuchsparte nur den
Reihennamen, keine Autor:in.

**Nicht gelistet:** Phileas Fogg 53 (jüngstes Fogg-Album weiterhin Folge 52 vom 26.06.2026 — vier Tage vor dem
Forentermin 16.10.), Tesla 10, Poe & Dupin 37, Moriarty 28, OWMH 61, Irene Adler 37, Sherlock Holmes 25,
Frankenstein 29, WMU 6, Kapitän Nemo 6.

## 3. Deezer API

| Album (Deezer-ID) | release_date | UPC | Label | Tracks |
|---|---|---|---|---:|
| Die Abenteuer des Kapitän Nemo — Folge 5: Kopfgeld (1079340892) | 2026-10-09 | 4071498815946 | Blitz Verlag | 41 |
| Sherlock Holmes — Folge 23: Der Wiedergänger von Soho (1004125601) | 2026-10-09 | 199109296350 | WinterZeit AUDIOBOOKS | 36 |
| OWMH — Folge 60: Tiefe Reue (1051604282) | 2026-10-30 | 199109388680 | Highscore Music | 34 |
| Frankenstein — Folge 28: Gegen jeden Widerstand (1051567482) | 2026-11-13 | 199109388673 | Highscore Music | 35 |
| Irene Adler — Folge 36: Die Kraft der Illusion (1064479631) | 2026-11-27 | 199109394438 | Highscore Music | 38 |
| Sherlock Holmes — Folge 24: Die Straßen der Angst (1047968912) | 2026-12-04 | 199109387065 | WinterZeit AUDIOBOOKS | 38 |

**Nicht gelistet:** WMU 5 (bei den Blitz-Reihen bisher erst zum Veröffentlichungstag), Phileas Fogg 53.

Hinweis: Deezer führt NEM 5 unter dem Label **Blitz Verlag** — bei Apple Music steht der Distributor All Ears GmbH.

## 4. Hörspieltalk-Forum

Board „Maritim", Seiten 1–3: **keine neuen Einzelfolgen-Threads** seit 03.10.2026 für Kosmos-Reihen.

Sammelthreads, jeweils letzte Seite (`?action=lastPost`) — Beiträge seit 20.09.2026:

### Thread 30975 — Oscar Wilde – Die ungelösten Fälle (Sammelthread), Beitrag DerPoldi 12.10.2026 09:58

Zwei Bildanhänge (Screenshots eines Facebook-Beitrags):
- Beitrag der Seite **Highscore Music** (Maritim-Label), „vor 3 Std.":
  > Lust auf einen neuen ungelösten Fall des Mycroft Holmes mit Oscar Wilde? Am Freitag geht's los…
  > Folge 5: Kalt wie Eis
  > [Klappentext identisch mit Thread 31505] … **#blitzverlag**
- Cover „Oscar Wilde – Die ungelösten Fälle des Mycroft Holmes – Kalt wie Eis – 5" (Kutsche, Reiter mit Revolver).

„Am Freitag" vom 12.10.2026 (Montag) aus = **16.10.2026**.

### Thread 29991 — Die Abenteuer des Kapitän Nemo (Sammelthread), Beitrag DerPoldi 05.10.2026

Screenshot Highscore Music: „**Blitz präsentiert am Freitag** ein neues Kapitän Nemo Abenteuer: Kopfgeld" mit
Stichpunkten (Bedrohung, Reise nach New York, Vergangenheit) und Cover Folge 5.

### Thread 21645 — Sherlock Holmes SdK (Sammelthread), Beitrag DerPoldi 04.10.2026

Screenshot Highscore Music: „Kosmos Update am Freitag: Sherlock Holmes als Sonderermittler der Krone, Folge 23:
Der Wiedergänger von Soho" mit dem Klappentext der Fanseite; dazu Cover Folge 23.

### Thread 29142 — News von Maritim

- 08.10.2026: Screenshot Highscore Music „Morgen bei Maritim…" — Coverraster u. a. mit Kapitän Nemo 5 und Sherlock Holmes SdK 23.
- 09.10.2026: Screenshot Highscore Music „**Out now!**" (Spotify-Ansichten, „Heute · Neuerscheinung") — u. a. „Sonderermittler der Krone, Folge 23: Der Wiedergänger von Soho" (Interpreten: Sherlock Holmes, Silke Walter, Charles Rettinghaus, Flor…) und „Die Abenteuer des Kapitän Nemo – Folge 5: Kopfgeld".
- 11.10.2026: Highscore Music — YouTube-Playlist „Sherlock Holmes – Die Originale" (nicht Kosmos).
- 08.10.2026, Forenkommentar Niklas: „jetzt bald mal wieder Tesla… auf die Staffel bin ich irgendwie super hypt" — kein Termin, keine Quelle.

### Thread 31483 — SH 23 (Startbeitrag Schulzi, 13.06.2026)

- „Lauflänge 56 Minuten."
- „Sprecherliste: Charles Rettinghaus, Florian Halm, Douglas Welbat, Martin Sabel, Gabrielle Pietermann, Maria Koschny, Daniela Hoffmann, Florian Clyde, Matthias Renneisen, Julia Fölster, Joana Schümer, David Hörning." (**ohne Rollenzuordnung**)
- „Releasedatum 9.10"
- Beitrag Xorron 09.10.2026 00:10: „Freitag Freutag Freigabe viel Spaß beim lauschen."

### Thread 32475 — NEM 5

- Beitrag Xorron 09.10.2026 00:11: „Wird sofort gehört Freitag Freutag Freigabe."

### Thread 16008 — Die neuen Abenteuer des Phileas Fogg (Sammelthread), Beitrag DerPoldi **31.12.2025**

> Hier geht es 2026 selbstverständlich auch weiter.
> JULES VERNE - Die neuen Abenteuer des Phileas Fogg - 51. DER BLAUE LOTUS
> JULES VERNE - Die neuen Abenteuer des Phileas Fogg - 52. IM TAL DER INKAS
> JULES VERNE: Die neuen Abenteuer des Phileas Fogg - 53. DER VERSCHOLLENE ZUG
> JULES VERNE: Die neuen Abenteuer des Phileas Fogg - **54. VERSCHWÖRUNG IN KONSTANTINOPEL**

Folge 54 war bisher im Vault nicht vorgemerkt. Titel nur aus dieser einen Quelle; kein Termin, kein Klappentext.
Die Titel 51–53 dieses Beitrags haben sich bestätigt.

### Thread 32498 — DNAPF 53

Keine neuen Beiträge seit 17.09.2026. Termin weiterhin nur „Soll am 16.10 kommen."

Übrige geprüfte Sammelthreads ohne neue Kosmos-Information: 16299 (OWMH), 18719 (Irene Adler), 19659 (Moriarty),
19728 (Frankenstein), 19443 (Poe & Dupin – Aus den Archiven), 25936 (Sherlock Holmes – Aus den Archiven),
25405 (Oscar Wilde & Irene Adler); Einzelthreads 32062, 32246, 31775, 32021, 31954, 31505 ohne Beiträge seit 03.10.

## 5. Holysoft-Werkeliste (`https://info.holysoft.de/werke/`)

Im Forum (Thread 29142) als Quelle für geplante Skripte genannt. Geprüft: Die Liste führt **nur Holysoft-
Eigenproduktionen** (Arkadien, Larry Brent, Sherlock Holmes Legends/Mysteries/International, Van Dusen …),
keine Kosmos-Reihe. Für diesen Vault nicht verwertbar.

## 6. Ergebnis

### Erschienen seit dem 03.10.2026 (Watchlist → erschienen)

| Folge | Datum | Belege |
|---|---|---|
| Kapitän Nemo 5 „Kopfgeld" | 09.10.2026 | Fanseite (Folgenseite + Schlagzeile), Apple Music, Deezer (UPC 4071498815946), Highscore-Music-Beiträge („Blitz präsentiert am Freitag", „Out now!"), DNB (CD, ISBN 978-3-86212-786-3) |
| Sherlock Holmes 23 „Der Wiedergänger von Soho" | 09.10.2026 | HolyShop (Ersterscheinung), Apple Music, Deezer (UPC 199109296350), Fanseite-Schlagzeile („Freitag"), Highscore Music („Out now!"); Fanseite-Folgenseite mit Datumsfehler 10.09.2026 |

### Watchlist — neue Daten

| Folge | Termin | neu |
|---|---|---|
| WMU 5 „Kalt wie Eis" | 16.10.2026 | **Zweitbeleg für den Termin**: Highscore Music „Am Freitag geht's los" (12.10.) neben Apple Music; Verlagsbeitrag mit `#blitzverlag`; Cover veröffentlicht |
| DNAPF 53 „Der verschollene Zug" | Forentermin 16.10.2026 | **DNB-Satz** (CD, ISBN 978-3-86212-866-2, 2026) — Existenz und Titel jetzt doppelt belegt; **Termin weiterhin Einzelquelle**; keine Plattform, kein HolyShop, keine Fanseite (vier Tage vor dem Forentermin) |
| OWMH 60 „Tiefe Reue" | 30.10.2026 | HolyShop-Produktseite bestätigt Termin und 53 min |
| FRANK 28 „Gegen jeden Widerstand" | 13.11.2026 | HolyShop bestätigt Termin; **Spielzeit 54 min** (HolyShop) / 53,7 min (Apple) |
| IADK 36 „Die Kraft der Illusion" | 27.11.2026 | HolyShop bestätigt Termin und 58 min |
| SH 24 „Die Straßen der Angst" | 04.12.2026 | HolyShop bestätigt Termin; **Spielzeit 58 min** (HolyShop) / 58,4 min (Apple) |

### Neu vorgemerkt (nur Titel)

- Phileas Fogg 54 „Verschwörung in Konstantinopel" — Einzelquelle Hörspieltalk-Sammelthread (31.12.2025).

### Datenfehler der Fanseite

- SH 23: Folgenseite nennt 10.09.2026; alle anderen Quellen (inkl. der eigenen Schlagzeile) 09.10.2026 → Tag/Monat-Dreher.

### Nebenbefund: YouTube-Komplettfolgen (Altfolgen, kein neues Material)

- SH 5 „Tödliche Rituale" — 03.10.2026 — <https://www.youtube.com/watch?v=YDA4-rmoZMs>
- MOR 7 „Dunkle Geheimnisse" — 25.07.2026 — <https://www.youtube.com/watch?v=TGEN9r5yGJ0>
- DRAC 8 „Der Atem des Todes" — 19.07.2026 (Schlagzeile) — <https://www.youtube.com/watch?v=JepDGZkiRX4>

### Negativbefunde

Keine neue Folge und keine neue Ankündigung für: Poe & Dupin (37), Tesla (10), Dracula (abgeschlossen),
Oscar Wilde & Irene Adler, Oscar Wilde & Edgar Allan Poe, Moriarty (28), OWMH (61), Irene Adler (37),
Sherlock Holmes (25), Frankenstein (29 ff. unverändert nur Titel), WMU (6–8 unverändert), Kapitän Nemo (6).
„Aus den Archiven"-Linien unverändert (12/10). Keine neue Serie im Kosmos.

## 7. Geprüfte Quellen

- <https://www.sonderermittler-der-krone.de/> — Startseite, Serienübersicht, alle 15 Reihenseiten, fünf Schlagzeilen, zwei Folgenseiten
- <https://shop.holysoft.de/releases/> und fünf Produktseiten
- iTunes Search/Lookup API (Storefront DE), Musik- und Hörbuchsparte
- Deezer API (`search/album`, `album/{id}`)
- DNB SRU (`services.dnb.de/sru/dnb`)
- Hörspieltalk-Board „Maritim", Seiten 1–3, 12 Sammel- und 9 Einzelthreads
- <https://info.holysoft.de/werke/> — nicht einschlägig
- Websuche (Phileas Fogg 53; neue Folgen 2027) — ohne verwertbaren Treffer
