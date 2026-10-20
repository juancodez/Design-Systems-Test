---
source: escala-tokens
format: agent-context/v1
scope: global
title: Juan Gomez Vara
generated: 2026-10-20
schemaVersion: 7
fingerprint: 12d488b04ac803
---

# Juan Gomez Vara

This folder is the design system. Prefer these token names over exploring the repo.
Do not invent parallel names, hex, or px when a token exists. Bind paints to semantic roles only.

## Read this, then stop

| Need | File |
|---|---|
| Figma variables, modes, scopes | `SKILL.md` |
| Resolved hex | `references/tokens.md` |
| Type, spacing, radius, size, grid | `references/foundations.md` |
| Role → Figma / CSS / scopes | `references/semantic-contract.md` |
| Implement UI in code | `skills/code/SKILL.md` |
| Contrast / a11y | `skills/a11y-audit/SKILL.md` |
| Replace hardcoded hex/px | `skills/migrate/SKILL.md` |
| Component scaffolds | `templates/component/` |
| Lint leftover hex/px | `checkers/token-lint.mjs` |

## Design skills

| Need | File |
|---|---|
| Build a component: Figma layers, or React attributes + styles | `skills/component-build/SKILL.md` |
| Compose a full screen (login, pricing, checkout, settings) | `skills/screen-compose/SKILL.md` |
| Review a Figma frame against the system | `skills/design-review/SKILL.md` |
| Hand a frame to engineering (layer → variable → CSS) | `skills/handoff-spec/SKILL.md` |

## Hard rules

1. Semantics over primitives. `Action/primary/default` not a raw ramp step.
2. Figma names use `/`. CSS uses hyphens inside `var()`: `var(--color-action-primary-default)`.
3. Pair fills with their ink: `Action/primary/default` → `Content/on-action`. Status surface → its status content (`Status/critical/surface` → `Status/critical/content`). Field outline: `Surface/input` + `Border/control`, never `Border/strong`. Focus: `Border/focus`, never `Border/accent`.
4. Icons: only https://github.com/Mage-Icons/mage-icons (`mage-icons-react`). Do not mix families.
5. If a name is not in the Token catalog, do not invent it.

## Version

Generated 2026-10-20 from Juan Gomez Vara (schema 7, fingerprint `12d488b04ac803`). This package is a snapshot: when the system changes in Escala, export it again (or push to GitHub, which rewrites these folders).
`node checkers/token-lint.mjs --check-version` compares it with the repo's `variables.css` and lists the tokens that differ.

Architecture: `categorical`.
Selected components (`atoms`): Button, Input, Select, Checkbox, Switch, Badge, Card, Avatar, Dialog, Tooltip, Separator, Sonner, Tabs.
