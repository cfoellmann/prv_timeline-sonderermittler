# Nachfass — Auflösung der fünf Datums-/Titelwidersprüche

Abrufdatum: **06.09.2026**. Ergänzt [2026-09-06_neue-folgen-scout_september-2026.md](2026-09-06_neue-folgen-scout_september-2026.md).

Auftrag: Für jeden der fünf gemeldeten Widersprüche eine **dritte, unabhängige** Quelle, damit ein
2:1-Verhältnis entsteht. Bewusst genutzter, bislang nicht ausgewerteter Quellentyp:
**Plattform-APIs des Handels** (iTunes Search/Lookup API, Deezer API) — Rohmetadaten der
Auslieferung, keine Fanseiten-Kopie.

## Genutzte Quellen

| Quelle | Aufruf | Charakter |
|---|---|---|
| iTunes Lookup/Search API (Storefront DE) | `https://itunes.apple.com/lookup?id=<artistId>&entity=album&limit=200&country=DE` | `releaseDate` = digitales VÖ-Datum im deutschen Apple-Music-Katalog |
| Deezer API | `https://api.deezer.com/search/album?q=…` → `https://api.deezer.com/album/{id}` | `release_date` plus **UPC/EAN** |
| bereits im Repo (parallel erhoben) | `raw/maritim/2026-09-06_apple-music-itunes-api_erscheinungsdaten.md`, `raw/maritim/2026-09-06_deezer-api_erscheinungsdaten-und-upc.md` | Serien-Dumps derselben beiden APIs |

**Unabhängigkeitsvorbehalt:** Apple Music und Deezer werden vom selben Distributor beliefert. Sie
sind gegenüber Fanseite und Forum unabhängig, untereinander aber **nicht vollständig**. Wo beide
übereinstimmen, ist das gegenüber der Forenangabe eine belastbare 2:1-Mehrheit; als drei völlig
getrennte Belege sind sie nicht zu zählen. Die UPC-Vergabe (Deezer) unterscheidet sich pro Titel und
ist als eigenständiges Handelsdatum verwertbar.

## Punkt 1 — Sherlock Holmes 24 vor Sherlock Holmes 23

| Quelle | Angabe |
|---|---|
| Hörspieltalk-Thread 31954 | SH 24 am 25.09.2026 |
| Apple Music (iTunes API) | SH 24 = **2026-12-04**, collectionId 6798786289 · SH 23 = 2026-10-09 |
| Deezer API | SH 24 = **2026-12-04**, UPC 199109387065 · SH 23 = 2026-10-09, UPC 199109296350 |

**Ergebnis: korrigiert.** Der Reihenfolgewiderspruch löst sich vollständig auf — SH 23 (09.10.) liegt
vor SH 24 (04.12.). Die Forenangabe 25.09.2026 ist falsch. SH 23 bleibt bei 09.10.2026 (zusätzlich
schon durch HolyShop, Amazon, Hugendubel und Apple/Spotify/Deezer gedeckt).

## Punkt 2 — Oscar Wilde/Mycroft Holmes (ungelöste Fälle) 4: 18.08. vs. 14.08.2026

| Quelle | Angabe |
|---|---|
| Offizielle Fanseite (Folgenseite) | 18.08.2026 |
| Storytel | 14.08.2026, ISBN 9783689849283 |
| Apple Music (iTunes API) | **2026-08-14**, collectionId 6787690925 |
| Deezer API | **2026-08-14**, UPC 4071498541159 |

**Ergebnis: korrigiert** auf **14.08.2026**. Drei Handelsquellen gegen die Fanseite. Ein
CD-/Download-Split erklärt die Differenz **nicht** — alle drei Handelsangaben betreffen die
Digitalausgabe. Das Fanseiten-Datum bleibt als Abweichung auf der Folgenseite vermerkt.

## Punkt 3 — Moriarty 27: 25.09. vs. 28.09. vs. CD 28.08.2026

| Quelle | Angabe |
|---|---|
| Hörspieltalk-Thread 31576 | „erscheint am 25.09.26 als Download", „auf CD am 28.08.26" |
| Apple Music (iTunes API, Artist 1578682459) | **2026-09-25**, 46 Tracks, 5,99 € |

**Ergebnis: bestätigt.** `erschienen: 2026-09-25` bleibt. Die vermeintliche dritte Angabe
„28.09.2026" war ein **Lesefehler beim ersten Abruf** der Forenseite, keine echte Quellenaussage —
der Thread nennt nur zwei Daten. Die Differenz ist ein sauberer **Formatsplit**: CD 28.08.2026,
Download 25.09.2026. Nach bestehender Konvention führt `erschienen` das Download-/Stream-Datum; das
CD-Datum steht als Anmerkung auf der Seite. Deezer und die Fanseite listen die Folge noch nicht.

## Punkt 4 — Sherlock Holmes 24: „Die Straße" oder „Die Straßen der Angst"

| Quelle | Angabe |
|---|---|
| Hörspieltalk-Threadtitel 31954 | „Die Straße der Angst" (Singular) |
| Apple Music (iTunes API) | **„Die Straßen der Angst"** (Plural) |
| Deezer API | **„Die Straßen der Angst"** (Plural) |

**Ergebnis: korrigiert** auf den **Plural**. Der Threadtitel ist eine Nutzereingabe, die beiden
Katalogeinträge stammen aus der Auslieferungsmetadatei. Folgeänderung: Slug
`sherlock-holmes-24-die-strasse-der-angst` → `sherlock-holmes-24-die-strassen-der-angst`.

## Punkt 5 — Irene Adler 35: 18.09. vs. 02.10.2026

| Quelle | Angabe |
|---|---|
| Hörspieltalk-Thread 31824 | 18.09.2026 |
| Apple Music (iTunes API) | **2026-10-02**, collectionId 6793608150 |
| Deezer API | **2026-10-02**, UPC 199109376625 |

**Ergebnis: korrigiert** auf **02.10.2026**. Kein Formatsplit erkennbar; die Forenangabe dürfte ein
älterer Vorschautermin sein.

## Zusatzfunde außerhalb der fünf Punkte

Beim Abgleich der Watchlist gegen dieselben APIs fielen zwei weitere Forendaten durch:

| Folge | bisher im Repo (Forum) | Apple Music | Deezer | Ergebnis |
|---|---|---|---|---|
| OWMH 60 „Tiefe Reue" | 06.11.2026 | **2026-10-30** (6800355890) | **2026-10-30**, UPC 199109388680 | korrigiert |
| FRANK 28 „Gegen jeden Widerstand" | 25.09.2026 | **2026-11-13** (6800340465) | **2026-11-13**, UPC 199109388673 | korrigiert |

**Muster:** Die Terminangaben in den Hörspieltalk-Ankündigungsthreads sind für die Herbst-2026-Staffel
durchgängig zu früh (SH 24 −70 Tage, FRANK 28 −49, IADK 35 −14, OWMH 60 −7). Sie taugen für Titel,
Klappentext und Besetzung, **nicht** als Datumsquelle. Das gehört in
[quellenlage-und-kanonkarte](../../wiki/queries/quellenlage-und-kanonkarte.md), sobald Christian das
freigibt.

## Gegengeprüft und unverändert bestätigt

| Folge | Repo-Wert | Apple Music | Deezer |
|---|---|---|---|
| OWMH 59 Die Spur der Echse | 2026-09-04 | 2026-09-04 | — |
| NEM 4 Die Überlebenden der Erebus | 2026-08-07 | 2026-08-07 | — |
| TES 9 Traumgespinst | 2026-08-14 | — | 2026-08-14, UPC 4071498747377 |
| IADK 36 Die Kraft der Illusion | 2026-11-27 | 2026-11-27 | — |
| FRANK 27 Finsteres Erbe | 2026-09-11 | 2026-09-11 | 2026-09-11, UPC 199109296374 |
| SH 23 Der Wiedergänger von Soho | 2026-10-09 | 2026-10-09 | 2026-10-09, UPC 199109296350 |
| MOR 27 Tiefe Wasser | 2026-09-25 | 2026-09-25 | — |

Damit haben **alle** in dieser Session angelegten Folgen mindestens zwei unabhängige Quellen; die
sechs Watchlist-Seiten werden von `status: entwurf` auf `recherchiert` gehoben.

## Nicht auflösbar geblieben

- **Verlagszuordnung der WMU-Reihe:** Hörspieltalk führt sie unter „Maritim", Storytel und Deezer
  unter Blitz Verlag; die Deezer-UPC 4071498541159 gehört in denselben Nummernkreis wie Tesla 9
  (4071498747377, ausdrücklich „Blitz Verlag"). Das stützt Blitz, ist aber kein Verlagsdokument.
  Repo-Stand „Blitz Verlag" bleibt.
- **Spielzeit OWMH 59:** Fanseite 52 min, Audiolibrix 51 min. Nicht Teil des Auftrags, weiter offen.
