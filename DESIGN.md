# Signal Room Design Contract

## Visual Direction

Signal Room is a dark field-log interface for systems, signals, and experiments. Preserve the existing amethyst-on-void palette, mono metadata labels, large compressed display type, hairline dividers, and sparse operational density.

## Tokens

- Background: `--void`, `--void-deep`.
- Surfaces: `--surface`, `--surface-raised`, `--surface-soft`.
- Text: `--text-primary`, `--text-secondary`, `--text-muted`, `--text-ghost`.
- Lines: `--line`, `--line-soft`, `--line-active`.
- Accent: `--amethyst`, with `--signal-violet`, `--trace-blue`, and `--ember` only for meaningful status or trace accents.
- Type: display headings use `--section-display` or `--project-display`; body text uses `--body-large` and `--body-copy`; metadata uses `.meta-text`.

## Layout Rules

- Use `site-shell` for constrained sections.
- Use two-column field rows on desktop and single-column rows under 720px.
- Prefer hairline dividers over cards.
- Do not nest cards or add decorative blobs.
- Use real collection data before writing hardcoded records.

## Content Rules

- No fake screenshots, fake benchmarks, fake testimonials, or invented metrics.
- If an artifact is not available, name it as pending.
- Work records should read as field notes: observation, bet, construction, trace, decision, remainder.

## Component Rules

- Reuse `FieldRecordPreview` for work record previews.
- Use small Astro components for repeated static page structures.
- Keep links explicit and locale-aware.
