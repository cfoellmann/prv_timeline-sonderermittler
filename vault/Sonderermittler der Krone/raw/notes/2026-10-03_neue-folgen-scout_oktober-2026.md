# Recherchenotiz — Neue-Folgen-Scout, 03.10.2026

Abrufdatum aller Quellen: **03.10.2026**. Vault-Stand vor dieser Recherche: **06.09.2026** (Commit 321af2d).

Zweck: Ist-Stand-Inventur über alle Serien, danach Suche ab der jeweils höchsten erfassten
Folgennummer. Rohprotokoll — die Auswertung steht in den Wiki-Seiten.

## 1. Ist-Stand vor der Recherche (aus `app/data/folgen.json`, `stand: 2026-09-06`)

| Serie | Einträge | höchste Nr. | jüngstes `erschienen` | davon geplant |
|---|---:|---|---|---|
| phileas-fogg | 52 | 52 (Im Tal der Inkas) | 2026-06-26 | — |
| oscar-wilde-und-mycroft-holmes | 60 | 60 (Tiefe Reue) | 2026-10-30 | 60 |
| poe-und-dupin | 36 | 36 (Aufstieg und Fall) | 2026-07-31 | — |
| irene-adler | 37 (0–36) | 36 (Die Kraft der Illusion) | 2026-11-27 | 35, 36 |
| moriarty | 28 (0–27) | 27 (Tiefe Wasser) | 2026-09-25 | 27 |
| dracula | 16 | 16 | 2024-10-25 | — |
| frankenstein | 28 | 28 (Gegen jeden Widerstand) | 2026-11-13 | 27, 28 |
| sherlock-holmes | 24 | 24 (Die Straßen der Angst) | 2026-12-04 | 23, 24 |
| sherlock-holmes-und-co | 11 (Auswahl) | 68 | 2022-07-22 | — |
| oscar-wilde-und-irene-adler | 4 | 4 | 2024-11-15 | — |
| tesla | 9 | 9 (Traumgespinst) | 2026-08-14 | — |
| oscar-wilde-und-poe | 4 | 4 | 2026-01-16 | — |
| wilde-mycroft-ungeloeste | 4 | 4 (Das Buch des Grauens) | 2026-08-14 | — |
| kapitaen-nemo | 4 | 4 (Die Überlebenden der Erebus) | 2026-08-07 | — |

## 2. Apple Music / iTunes API (Storefront DE)

Aufrufe: `https://itunes.apple.com/search?term=<Reihe>&country=DE&media=music&entity=album&limit=200`
sowie `https://itunes.apple.com/lookup?id=<artistId>&entity=album&limit=200&country=DE`
(Artist-IDs: Nemo 1870953044, Irene Adler 1464160881, Poe & Dupin 1397878902, Oscar Wilde/WMU 2765844,
Sherlock Holmes 1373862327, Tesla 1791184830, OWMH 1066243862, Frankenstein 1531742949,
Moriarty 1578682459, Phileas Fogg 1435911696). Laufzeit = Summe der Track-Zeiten über
`lookup?id=<collectionId>&entity=song`.

Alle Alben mit `releaseDate` ab 01.08.2026 (Sammelboxen, Doppel-Listings ausgefiltert):

| releaseDate | Album | Tracks | Summe min | collectionId | ℗ |
|---|---|---:|---:|---:|---|
| 2026-09-11 | Frankenstein — Folge 27: Finsteres Erbe | 34 | 52,8 | 6779633820 | Maritim Verlag |
| 2026-09-25 | Moriarty — Folge 27: Tiefe Wasser | 46 | 70,2 | 6783852411 | Maritim Verlag |
| 2026-10-02 | Irene Adler — Folge 35: Bilder des Fortschritts | 35 | 54,6 | 6793608150 | Maritim Verlag |
| **2026-10-09** | **Die Abenteuer des Kapitän Nemo — Folge 5: Kopfgeld** | 41 | **63,2** | 6812211650 | All Ears GmbH |
| 2026-10-09 | Sherlock Holmes — Folge 23: Der Wiedergänger von Soho | 36 | — | 6779640521 | — |
| **2026-10-16** | **Oscar Wilde – Die ungelösten Fälle des Mycroft Holmes — Folge 5: Kalt wie Eis** | 35 | **53,5** | 6813822873 | Blitz Verlag |
| 2026-10-30 | OWMH — Folge 60: Tiefe Reue | 34 | — | 6800355890 | — |
| 2026-11-13 | Frankenstein — Folge 28: Gegen jeden Widerstand | 35 | — | 6800340465 | — |
| 2026-11-27 | Irene Adler — Folge 36: Die Kraft der Illusion | 38 | — | 6805508742 | — |
| 2026-12-04 | Sherlock Holmes — Folge 24: Die Straßen der Angst | 38 | — | 6798786289 | — |

Zum Vergleich: Nemo 4 und Tesla 9 tragen ebenfalls ℗ „All Ears GmbH" (Distributor), WMU 4
„Blitz Verlag". Kein Hinweis auf einen Verlagswechsel der Nemo-Reihe.

**Nicht gelistet:** Phileas Fogg 53 (jüngstes Fogg-Album weiterhin Folge 52, 26.06.2026),
Tesla 10, Poe & Dupin 37, Moriarty 28, OWMH 61, Irene Adler 37, Sherlock Holmes 25,
Frankenstein 29, WMU 6.

## 3. Deezer API

Aufruf: `https://api.deezer.com/search/album?q=<…>` → `https://api.deezer.com/album/{id}`

| Album | release_date | UPC | Label |
|---|---|---|---|
| Moriarty — Folge 27: Tiefe Wasser (1013470891) | 2026-09-25 | 199109366169 | Highscore Music |
| Irene Adler — Folge 35: Bilder des Fortschritts (1036119262) | 2026-10-02 | 199109376625 | Highscore Music |
| Frankenstein — Folge 27: Finsteres Erbe (1004098791) | 2026-09-11 | 199109296374 | Highscore Music |
| OWMH — Folge 60: Tiefe Reue (1051604282) | 2026-10-30 | 199109388680 | Highscore Music |

**Nicht gelistet:** Nemo 5, WMU 5, Phileas Fogg 53. Bei den Blitz-Reihen erschienen die
Deezer-Einträge bisher erst zum Veröffentlichungstag (Nemo 4, WMU 4); das Fehlen ist daher
kein Gegenbeleg.

## 4. Hörspieltalk-Forum (Ankündigungsthreads, Board „Maritim")

Board: <https://www.xn--hrspieltalk-rfb.de/forum/board/127-maritim/> (Seiten 1–3)

### Thread 32475 — Die Abenteuer des Kapitän Nemo 5: Kopfgeld (16.09.2026)

<https://www.xn--hrspieltalk-rfb.de/forum/thread/32475-die-abenteuer-des-k%C3%A4pitan-nemo-5-kopfgeld/>

- Autor: **Marc Freund**
- Inhaltsangabe (wörtlich):
  > Kapitän Nemo muss feststellen, dass er sich in großer Gefahr befindet. In nahezu jedem Hafen,
  > den die Nautilus ansteuert, um Proviant aufzunehmen, wird ein Anschlag auf sein Leben verübt.
  > Immer scheinen es andere Personen zu sein, die ihm nach dem Leben trachten. Doch was hat es damit
  > auf sich? In New York City angekommen, beschließt er, der Sache auf den Grund zu gehen. Dabei
  > ahnt er nicht, dass er nicht nur von einem gerissenen Mörder verfolgt wird, sondern sich auch
  > seiner eigenen Vergangenheit stellen muss. Ein totgesagter Freund scheint plötzlich wieder
  > lebendig. Nemo muss ihn finden, um das grausame Spiel um sein Leben zu beenden
- Sprecher: Kapitän Nemo – K. Dieter Klebsch · Kapitän Nemo (jung) – Peter Sura · Oscar Wilde –
  Sascha Rotermund · Tyrone – Mathias Renneisen · Edgar Hale – Felix Strüven · Charlotte D'Artois –
  Sarah Alles · Virgil Tomas – Manuel Straube · Händler – Tobias Schmitz · Portier – Jean Coppong ·
  Kutscher – Janis Zaurins · Ogden Barrymore – Till Hagen
- „Läuft 63 Minuten und erscheint am 9.10"
- Forenkommentar (Niklas, 16.09.2026): „Staffel war bereits von Anfang an bestätigt."

### Thread 31505 — Oscar Wilde – Die ungelösten Fälle des Mycroft Holmes 5: Kalt wie Eis (17.06.2026, ergänzt 20.09.2026)

<https://www.xn--hrspieltalk-rfb.de/forum/thread/31505-oscar-wilde-die-ungel%C3%B6sten-f%C3%A4lle-des-mycroft-holmes-05-kalt-wie-eis/>

- Klappentext (wörtlich):
  > Im Archiv stößt Oscar Wilde auf einen Fall, der umgehend sein Interesse weckt. In der kleinen
  > Stadt Falcon ist es vor einiger Zeit zu einer Reihe von Überfällen auf Kutschen gekommen. Weder
  > die Kutscher noch die Fahrgäste haben überlebt. Um zu erfahren, ob der Fall damals gelöst wurde,
  > begibt sich Wilde nach Falcon. Tatsächlich hat man den Täter gefasst. Allerdings hat dieser stets
  > bestritten, für den Überfall auf das Ehepaar Burnett verantwortlich zu sein. Oscar Wilde
  > beschließt, den Fall noch einmal aufzurollen. Doch kaum hat er mit den Ermittlungen begonnen,
  > kommt es zu einem weiteren tödlichen Überfall…
- „53 Minuten lang." · „Erscheint: 2026"
- Keine Sprecherliste.

### Thread 32498 — Jules Verne – Die neuen Abenteuer des Phileas Fogg 53: Der verschollene Zug (17.09.2026)

<https://www.xn--hrspieltalk-rfb.de/forum/thread/32498-jules-verne-die-neuen-abenteuer-des-phileas-fogg-53-der-verschollene-zug/>

- Klappentext (wörtlich):
  > Ein luxuriöser Sonderzug, der L'Ombre d'Or, verschwindet spurlos auf dem Weg von Paris nach
  > Istanbul – mitsamt seiner prominenten Passagiere. Unter ihnen: die furchtlose Journalistin Eleanor
  > March und Passepartout. Phileas Fogg wird in Paris von einem Detektiv kontaktiert. Gemeinsam mit
  > der Eisenbahnerin Elise Caron nimmt Fogg die Spur des verschwundenen Zuges auf. Die Reise führt
  > tief in die dunklen Karpaten – zu einem geheimen Gleis, einem rätselhaften Grafen und einer
  > tödlichen Waffe, die das Gleichgewicht der Welt bedrohen könnte. Ein Wettlauf gegen die Zeit
  > beginnt – durch Nebel, Nacht und Eisen. Der Feind kennt keine Gnade … und das Ziel der Reise liegt
  > jenseits aller Vorstellungskraft.
- Sprecher: Phileas Fogg – Sascha Draeger · Passepartout – Marius Clarén · Gustave Leclerc – Gosta
  Liptow · Eleanor March – Ilona Otto · Elise Caron – Julia Fölster · Madame Lavallière – Tanja Dohse ·
  Gregor Simonek – Tobias Lelle · Nicolae Ardelian – Detlef Tams · Herr Mellek – Mathias Renneisen ·
  Graf Radu Milescu – Urs Remond · Drago – Robert Louis Griesbach · Rémy Morel – Wanja Gerick
- „Soll am 16.10 kommen."
- **Kein Plattformbeleg:** weder Apple Music noch Deezer noch die HolyShop-Releaseliste führen die
  Folge (Stand 03.10.2026), obwohl dort Maritim-Titel bis 04.12.2026 vorgemerkt sind. Nach der
  dokumentierten Regel (Forentermine nie ohne Plattformbeleg) ist der 16.10. **nicht** übernommen.
- Forenkommentare deuten den „rätselhaften Grafen" in den Karpaten als Dracula-Anspielung; ein
  Mitglied hält dagegen, Dracula kehre nicht zurück. Beides ist Forenmeinung, kein Beleg.

### Frankenstein 29–36 — nur Titel (Threads vom 15.07.2026)

| Nr. | Titel | Thread |
|---|---|---|
| 29 | Die Jahrtausendeibe | 31765 |
| 31 | Die Rache des Doktors | 31767 |
| 32 | Die Kraft der Natur | 31768 |
| 33 | Das Geheimnis des Präparators | 31769 |
| 34 | Im Bann der Unendlichkeit | 31770 |
| 35 | Der Herr der Schlangen | 31771 |
| 36 | Der Eingang zur Unterwelt | 31772 |

Alle Threads haben leere Felder „Klappentext" und „Erscheint". Für Folge 30 existiert **kein**
Thread. In Thread 31765 wird nebenbei Folge 28 als „Gegen jeden Widerstand" bestätigt.

### WMU 6–8 — unverändert nur Titel

Sammelthread 30975 (letzte Seite): 6 „Das Gespenst von Monville" (Erscheint: 2026),
7 „Tödliche Zeilen" (eventuell 2026), 8 „Das Grauen von Dover" (eventuell 2026). Keine neuen Daten.

### Thread 32344 — „Die Protokolle des Gideon Blake" (03.09.2026) — nicht Teil des Kosmos

Neue Reihe, die künftig über Maritim erscheint (Folge 1 remastert, Folge 2 Erstveröffentlichung).
Eigenproduktion des Labels Twystic Soundworks nach der Buchreihe von E. Ray Sanders. Kein Bezug
zu Sonderermittler-Figuren oder zum Zirkel erkennbar → **nicht aufgenommen**.

## 5. Ergebnis

### Erschienen seit dem 06.09.2026 (Watchlist → erschienen)

| Folge | Datum | Belege |
|---|---|---|
| Frankenstein 27 „Finsteres Erbe" | 11.09.2026 | Fanseite (Folgenseite + Schlagzeile), Apple Music, Deezer |
| Moriarty 27 „Tiefe Wasser" | 25.09.2026 | Fanseite, HolyShop, Apple Music, Deezer |
| Irene Adler 35 „Bilder des Fortschritts" | 02.10.2026 | Fanseite, HolyShop, Apple Music, Deezer |

### Neu angekündigt

| Folge | Termin | Belege |
|---|---|---|
| Kapitän Nemo 5 „Kopfgeld" | 09.10.2026 | Apple Music + Hörspieltalk (übereinstimmend) |
| WMU 5 „Kalt wie Eis" | 16.10.2026 | Apple Music (Termin), Hörspieltalk (Titel, Inhalt, „2026") |
| Phileas Fogg 53 „Der verschollene Zug" | 2026, Tag offen | nur Hörspieltalk |

### Negativbefunde

Keine neue Folge und keine Ankündigung gefunden für: Poe & Dupin (37), Tesla (10), Dracula
(abgeschlossen), Oscar Wilde & Irene Adler, Oscar Wilde & Edgar Allan Poe, Moriarty (28),
OWMH (61), Irene Adler (37), Sherlock Holmes (25). „Aus den Archiven"-Linien unverändert (12/10).
Keine neue Serie im Kosmos.

## 6. Geprüfte Quellen

- <https://www.sonderermittler-der-krone.de/> (Serienübersicht, Schlagzeilen, drei Folgenseiten)
- <https://shop.holysoft.de/releases/> und zwei Produktseiten
- iTunes Search/Lookup API (Storefront DE)
- Deezer API
- Hörspieltalk-Board „Maritim", Seiten 1–3, und die oben genannten Threads
- <https://www.blitz-verlag.de/index.php?action=vorschau> — führt nur Bücher/E-Books, keine Hörspiele
- Websuche (Nemo 5, WMU 5, Tesla 10, Poe & Dupin 37) — ohne verwertbaren Treffer
- Audiolibrix-, Storytel-, Thalia-Suchseiten — per Skript nicht auswertbar (404 bzw. Client-Rendering)
