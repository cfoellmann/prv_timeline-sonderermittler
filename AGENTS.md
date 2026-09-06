# AGENTS.md

Repository guide for coding agents working in `prv_timeline-sonderermittler`.

This file is derived from [`vault/Sonderermittler der Krone/CLAUDE.md`](vault/Sonderermittler%20der%20Krone/CLAUDE.md) and adapted for general agent use at repo scope.

## Purpose

This repository combines:

- an Obsidian-style Markdown wiki for the audio drama universe around **"Sonderermittler der Krone"**
- a small web app in [`app/`](app/) that renders the series and episodes as an interactive timeline

Christian curates the content. Agents maintain structure, consistency, cross-links, and app data.

## Working Areas

```text
prv_timeline-sonderermittler/
├── AGENTS.md
├── README.md
├── changelog.md
├── app/
│   ├── README.md
│   └── data/folgen.json
└── vault/
    └── Sonderermittler der Krone/
        ├── CLAUDE.md
        ├── LLM-Wiki-Pattern.md
        ├── index.md
        ├── log.md
        ├── raw/
        ├── wiki/
        └── assets/
```

## Core Rules

- Treat `vault/Sonderermittler der Krone/raw/` as immutable source material. Do not edit files there unless the task is explicitly to ingest a new source.
- Treat `vault/Sonderermittler der Krone/wiki/` as agent-maintained content.
- Keep `vault/Sonderermittler der Krone/index.md` and `vault/Sonderermittler der Krone/log.md` in sync with meaningful wiki updates.
- If you change episode-level wiki content, also update [`app/data/folgen.json`](app/data/folgen.json).
- Record larger structural repo changes in [`changelog.md`](changelog.md).
- Do not introduce new schema or naming conventions silently. If the existing convention does not fit, stop and ask.
- Do not do web research unless the user explicitly asks for it. Default to the material already stored in `raw/`.
- Do not present speculation as fact. Mark uncertain statements clearly as assumptions or open questions.

## Domain Summary

Maritim started the universe with *Oscar Wilde & Mycroft Holmes*. The repository tracks the wider connected audio drama universe, including spin-offs, crossovers, and the **Zirkel der Sieben** as a central connective concept.

The main goal is to preserve:

- which episode belongs to which series
- listening order vs. release order
- key figures and concepts
- the best-known in-universe chronology

## File and Naming Conventions

### Paths

- Series pages: `vault/Sonderermittler der Krone/wiki/serien/<serie-slug>.md`
- Episode pages: `vault/Sonderermittler der Krone/wiki/folgen/<serie-slug>-<nr-2-stellig>-<titel-slug>.md`
- Character pages: `vault/Sonderermittler der Krone/wiki/figuren/<vorname-nachname>.md`
- Concept pages: `vault/Sonderermittler der Krone/wiki/konzepte/<konzept-slug>.md`

### Slugs

- Lowercase only
- Use hyphens as separators
- Replace umlauts: `ä -> ae`, `ö -> oe`, `ü -> ue`, `ß -> ss`
- Remove special characters

**The umlaut replacement applies to slugs only** — filenames, wikilink targets, `serie:` values, `id` fields and tags. Never to prose, headings or `titel:`, which use normal German umlauts (`für`, not `fuer`). On 2026-08-17 this had to be reverse-corrected in 2002 places across 158 files.

### Links

- Inside the vault, prefer Obsidian wikilinks like `[[wiki/figuren/oscar-wilde|Oscar Wilde]]`.
- For ambiguous names, disambiguate explicitly.

## Required Frontmatter

Series, episode, character, and concept pages should use YAML frontmatter.

Minimum canonical shape:

```yaml
---
type: folge | serie | figur | konzept | uebersicht | weiterleitung | query
serie: <serie-slug>          # only for episodes
nummer: <int>                # only for episodes
titel: <Original-Titel>      # real title WITH umlauts, not the slug
erschienen: JJJJ-MM-TT       # if known; JJJJ allowed when only the year is sourced
verlag: Maritim
genre: <Genre>               # series only, optional
start: JJJJ-MM-TT            # series only, optional
autor: <Autor:in>            # for episode/series when known
aliase: []                   # characters only, pseudonyms
fraktion: <...>              # characters only, optional — see caveat below
seite_ermittler: <...>       # characters only, optional — see caveat below
sprecher:
  - rolle: <Rolle>
    name: <Sprecher:in>
spielzeit_min: <int>         # episodes only, optional (runtime in minutes)
zirkel: <see below>
crossover_mit:
  - <serie-slug>
re_release_von: <...>        # episodes only, if applicable
spoiler_level: grob | voll | stub    # episodes only
veroeffentlichungsstatus: geplant    # episodes only, watchlist entries
folgen_count: <int>          # series only, released episodes (including episode 0)
watchlist_count: <int>       # series only, additional planned episodes
status: stub | entwurf | recherchiert | review | final
quellen:
  - <pfad-oder-url>
tags:
  - <freie tags>
---
```

`status` matters. Preserve it carefully and update it when a page meaningfully matures.

**`zirkel` uses two different scales:**

| Page type | Values | Meaning |
|---|---|---|
| `type: folge` | `direkt` \| `indirekt` \| `kein` \| `unklar` | identical to `zirkel` in `app/data/folgen.json` — wiki and JSON must agree; `unklar` is the default |
| `type: serie`, `type: figur` | `true` \| `false` \| `unklar` | coarse yes/no at series or character level |

`folgen_count` includes episode 0 where a series has one (Moriarty 0–26 → 27). Planned, unreleased episodes count towards `watchlist_count` instead.

`fraktion` (a character's alignment) and `seite_ermittler` (who they work for, e.g. `krone`, `zirkel`, `ambivalent`) are established practice on character pages but their **value lists are not normalised** — the existing data mixes `held`/`helden`/`heldin`, `antagonist`/`antagonistisch` and contains at least one typo (`held-strippen`). Do not rely on them for filtering, and do not invent new values without asking.

## Content Policy

### Language

- Write wiki content in German.
- Keep proper names in their original form where appropriate.

### Spoilers

Default spoiler level is **grob**.

Episode pages should normally include:

- metadata
- key figures
- Zirkel relevance
- a short setup / hook / arc summary in 3 to 6 sentences

Do **not** include by default:

- the resolution
- culprit identities
- major twists
- deaths of important characters
- betrayal reveals

Full-spoiler summaries should only be added when explicitly requested and should be clearly marked.

### Canon vs. Theory

- Separate sourced canon from fan theories.
- Use sections such as `## Theorien & offene Fragen` when needed.

### Re-releases

- Re-release lines such as archive releases are not standalone top-level series by default.
- Document them as subsections under the main series page, including a table of deviations where known.

## Standard Workflows

### 1. Ingest a New Source

When a user provides a new source:

1. Place or confirm the source in the correct `raw/` folder.
2. Read it and summarize the relevant facts.
3. Update or create affected wiki pages.
4. If an episode is involved, update [`app/data/folgen.json`](app/data/folgen.json).
5. Update `vault/Sonderermittler der Krone/index.md`.
6. Append a dated entry to `vault/Sonderermittler der Krone/log.md`.
7. If the repo structure or schema changed, also update `changelog.md`.

### 2. Answer a Content Question

When the user asks a wiki/domain question:

1. Read `index.md` and the relevant wiki pages.
2. Answer using the current repo content.
3. If the result would be useful as durable documentation, consider storing it as a new page in `wiki/` and then update `index.md` and `log.md`.

### 3. Lint / Health Check

On request, inspect for:

- stale `stub` pages
- contradictions between pages
- orphaned pages without inbound links
- missing target pages for repeated wikilinks
- outdated status markers
- series without episode lists
- episodes without character coverage

Store the report as `vault/Sonderermittler der Krone/wiki/queries/lint-JJJJ-MM-TT.md` if you create one.

## Timeline App Requirements

The web app treats [`app/data/folgen.json`](app/data/folgen.json) as a single source of truth for rendering.

Whenever an episode page is created or materially changed, keep the matching `folgen[]` entry aligned:

- create the entry if it does not exist
- keep `id` aligned with the markdown slug
- update `serie`, `nummer`, `titel`, `erschienen`
- update `story_jahr`, `story_monat`, `story_tag`, `story_praezision`, and `story_anmerkung` when chronology becomes clearer
- update `zirkel` from `unklar` to `direkt`, `indirekt`, or `kein` when justified
- keep `spoiler_level` aligned with the wiki page
- keep `wiki` as a repo-relative URL-encoded path

If a new series is added, also add or update the relevant `serien[]` entry.

Important consistency rules:

- `id` is the key and must match the markdown slug
- `story_praezision: "unbekannt"` is valid and preferred over `null`
- `zirkel: "unklar"` is the default unknown state
- optional fields (`story_jahr`, `story_monat`, `story_tag`, `story_anmerkung`, `logline`, `spielzeit_min`, `anmerkung`) may be `null` **or omitted entirely** — both are equivalent for the app
- these fields must match the episode page's frontmatter: `titel`, `erschienen`, `nummer`, `serie`, `zirkel`, `spoiler_level`
- schema changes require a `schema_version` bump and a `changelog.md` entry

## Session Start Checklist

For substantial wiki work, begin by checking:

1. `vault/Sonderermittler der Krone/log.md`
2. `vault/Sonderermittler der Krone/index.md`
3. the directly relevant wiki and app data files

If there has been a long gap in activity, offering a lint pass is reasonable.

## Practical Editing Guidance

- Keep changes cohesive. If one fact affects multiple pages, update them together.
- Prefer small, consistent updates over speculative completeness.
- Preserve existing manual curation choices unless the task is clearly to replace them.
- When editing generated wiki pages, keep source sections current.
- When working only on app code, still preserve the domain assumptions encoded in `folgen.json`.

## Reference Files

- Repo overview: [`README.md`](README.md)
- Vault operating guide: [`vault/Sonderermittler der Krone/CLAUDE.md`](vault/Sonderermittler%20der%20Krone/CLAUDE.md)
- App guide: [`app/README.md`](app/README.md)
- Vault pattern background: [`vault/Sonderermittler der Krone/LLM-Wiki-Pattern.md`](vault/Sonderermittler%20der%20Krone/LLM-Wiki-Pattern.md)
