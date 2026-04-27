# raw/ – Quellen (immutable)

Hier liegen die Rohquellen, aus denen das Wiki gespeist wird. Das LLM **liest** aus diesem Ordner, **schreibt** aber nur beim Ingest neuer Quellen hier hinein.

## Unterordner

- `maritim/` — abgespeicherte Maritim-Verlagsseiten und offizielle Hörspielinfos (Tracklisten, Beschreibungstexte, Erscheinungsdaten).
- `reviews/` — Reviews, Fan-Wiki-Auszüge, Foreneinträge.
- `notes/` — Eigene Hörnotizen Christians.

## Format

Jede Quelle als eigene `.md` mit YAML-Frontmatter:

```yaml
---
quelle_typ: maritim | review | fan-wiki | notiz
quelle_url: https://...
quelle_datum: JJJJ-MM-TT          # Veröffentlichung der Quelle
abgerufen: JJJJ-MM-TT             # wann gespeichert
betrifft_serie: <serie-slug>
betrifft_folgen:
  - <folge-slug>
---
```

## Bilder

Coverbilder, Booklet-Scans usw. nicht hier, sondern in `../assets/`.
