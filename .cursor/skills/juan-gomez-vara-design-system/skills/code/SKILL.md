---
name: juan-gomez-vara-code
description: "Implement UI for Juan Gomez Vara using semantic CSS variables. Use when building or restyling components so they match this design system."
---

# Juan Gomez Vara — implement in code

Load `AGENTS.md` first. Do not invent token names.

## Rules

1. Color from semantics only: `var(--color-action-primary-default)`, not `#hex`, not primitive ramps.
2. Radius / spacing / size from foundations (`var(--radius-md)`, `var(--spacing-4)`, `var(--size-md)`). If a role alias exists (`var(--radius-action)`), prefer it.
3. Start from `templates/component/` when a scaffold exists. Keep the token bindings.
4. Icons: only the package named in `AGENTS.md` / `SKILL.md`.

## Pairings (do not mix)

- `Action/primary/default` → `Content/on-action`
- Status surface → matching status content (`Status/critical/surface` → `Status/critical/content`)
- Input: `Surface/input` + `Border/control` (hover `Border/control-hover`); focus `Border/focus`

## After generating

Run `node checkers/token-lint.mjs` on the files you touched.
