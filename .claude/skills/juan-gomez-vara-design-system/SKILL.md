---
name: juan-gomez-vara-design-system
description: "Applies the Juan Gomez Vara design system in Figma: Color Primitives and Color Semantics (Content, Action, Surface, Status, Border), typography, spacing, radius, size, grid, shadow styles, and gradient styles. Icons: https://github.com/Mage-Icons/mage-icons. Use when creating or updating Figma variables, modes, or a design-system library; when generating screens or components that must follow this product; or when implementing UI with these tokens. Requires figma-use before any use_figma call."
compatibility: Requires the figma-use skill to be installed alongside this skill. Pair with figma-generate-library when creating or updating a Figma variable library or components.
metadata:
  mcp-server: figma
---

# Juan Gomez Vara design system

Source of truth for this product's tokens in Figma and in code. It does not replace Figma's workflow skills — it tells them **which collections, variable names, modes, scopes, and values** to use.

**You MUST invoke the `figma-use` skill before every `use_figma` call.** It contains Plugin API rules (color range 0–1, font loading, page reset, `return` IDs). Never call `use_figma` without it.

When creating or updating a Figma library (variables, components, docs pages), also load `figma-generate-library` and follow its phases. Use **this** skill as the token plan for Phase 0–1 — do not invent a second vocabulary.

## When to use

- Creating or updating **Figma variables, modes, or a design-system library** for this product
- Generating screens or components in Figma that must follow this system's tokens
- Binding fills, strokes, text, radius, or spacing to variables instead of hardcoded hex/px
- Applying **foundations**: typography, spacing, radius, size, grid, shadow effect styles, gradient paint styles
- Picking **icons** — only the repository named under Icons, never a mixed set
- Implementing UI in code that must match this product (CSS variables, components)
- Choosing a color, type, spacing, or radius token by **role** (`Content/primary`, not a raw ramp step)

Do not use this skill for a different product, or for Figma work that is not this design system (FigJam boards, slides, one-off illustrations).

## Instructions

1. Load `figma-use`. If the task is a library (collections, components, docs pages), also load `figma-generate-library`. Pass both names in `skillNames` on every `use_figma` call.
2. Read **Token catalog** in this file before creating anything. That list is complete. `references/tokens.md` and `references/foundations.md` have resolved values — load them if present; if they are not in context, still use the catalog names. Do not invent token names, hex values, extra groups, or extra modes. Do not fall back to exploring the Figma file for names unless the user asked you to audit an existing import.
3. Use the **exact collection names** in the catalog (`Color Primitives`, `Color Semantics`, `Typography`, `Dimension Primitives`, `Dimension Semantics`). Spacing, radius, stroke, size, selector and grid are GROUPS inside `Dimension Semantics`, not collections. Color semantics groups are Content, Action, Surface, Status, Border — all five, always.
4. **Primitives:** `scopes = []` (hidden from pickers). Designers pick semantics only. Alias semantic COLOR variables to the primitive that carries the same opaque hex — do not duplicate raw color.
5. **Semantics:** targeted scopes, never `ALL_SCOPES`. Content / on-solid / status ink → `TEXT_FILL`. Action / surface / status fills → `FRAME_FILL`, `SHAPE_FILL`. Border → `STROKE_COLOR`. Full map: [references/semantic-contract.md](references/semantic-contract.md).
6. Set **WEB code syntax** on every variable to the CSS form with a `var()` wrapper — without `var()`, Dev Mode shows hex. Dots in a role id become hyphens in CSS: `content.link.default` → `var(--color-content-link-default)`. The Figma name uses `/` (`Content/link/default`).
7. Foundations: lengths live in `Dimension Semantics` as `<Group>/<step>` (`Spacing/4`, `Radius/lg`) and roles as `<Group>/role/<role>` — bind the role. Each step aliases a `Dimension Primitives` variable named by its value. Type primitives are variables (`size/{step}`, `weight/{name}`, …); type **roles** are `role/{role}/size|weight|family` with one value per Typography mode (Desktop · Tablet · Mobile — alias the primitives, do not duplicate px) and the text style `Type/{role}`. Shadows are effect styles `Shadow/{xs…2xl}`. Gradients are paint styles `Gradient/{slug}`. No style name carries the project name. See [references/foundations.md](references/foundations.md).
8. **Icons:** When generating UI for this product, use icons from https://github.com/Mage-Icons/mage-icons (Mage Icons, `mage-icons-react`). Do not mix another icon family.
9. Bind components to **semantic** variables only. Never hardcode hex or px when a token exists. Work in small `use_figma` calls; `return` every created/mutated node id; convert hex to `{r,g,b,a}` in 0–1.

## Token catalog

This catalog **is** the token list for this product. Do not search the repo, do not invent names, and do not skip a group because a `references/` file is missing — Figma often loads only this SKILL.md. Hex values live in `references/tokens.md` when that file is in context; names below are enough to create and bind variables.

### Collections (exact Figma names)

| Collection | Modes | What it holds |
|---|---|---|
| `Color Primitives` | 1 | Raw ramps: `Accent/*`, `Neutral/*`, `States/{Error,Success,Warning,Info}/*` and dark twins. Designers do not pick these. |
| `Color Semantics` | one per theme (`Light`, `Dark`, …) | Categorical roles in five groups: **Content · Action · Surface · Status · Border**. |
| `Typography` | Desktop · Tablet · Mobile (viewports, not themes) | Primitives (`font-family-body`, `font-family-display`, `size/*`, `line-height/*`, `letter-spacing/*`, `weight/*`) plus role variables `role/{role}/size|weight|family` (label, button, heading-md, …) that alias them. Text styles are `Type/{role}`. |
| `Dimension Primitives` | 1 | Every length, named by its value: `0`, `4`, `16`, `9999`, `-4`, `3_5` (= 3.5px). Designers do not pick these. |
| `Dimension Semantics` | Desktop · Tablet · Mobile (viewports, not themes) | Groups `Spacing/` (steps + `padding/*` + `role/*`), `Radius/`, `Stroke/`, `Size/`, `Selector/`, `Grid/` (`columns` · `gutter` · `margin` · `container` change per viewport mode). Every step and every `role/*` aliases a Dimension primitive. |

Paint styles (gradients, `Gradient/{slug}`) and effect styles (shadows, `Shadow/{xs…2xl}`) are **styles**, not variables — Figma has no gradient/shadow variable type. Each has a `(Dark)` twin when the dark value differs.

### Icons

When generating UI for this product, use icons from https://github.com/Mage-Icons/mage-icons (Mage Icons, `mage-icons-react`). Do not mix another icon family.

- **Set:** Mage Icons
- **Repo:** https://github.com/Mage-Icons/mage-icons
- **Package:** `mage-icons-react`
- Import per-icon from that package. Do not invent glyphs from another family.

### Color Semantics — every role (Figma name)

Nested ids use `/`, never `.`. `action.primary.default` in the catalog is `Action/primary/default` in Figma.

#### Content

- `Content/primary` — High Contrast Text (`content.primary`)
- `Content/secondary` — Medium Contrast Text (`content.secondary`)
- `Content/subtle` — Low Contrast Text (`content.subtle`)
- `Content/disabled` — Inactive Text (`content.disabled`)
- `Content/inverse` — Inverted Text (`content.inverse`)
- `Content/on-action` — Button Text (`content.on-action`)
- `Content/accent` — Accent Text (`content.accent`)
- `Content/link/default` — Interactive Text Default (`content.link.default`)
- `Content/link/hover` — Interactive Text Hover (`content.link.hover`)

#### Action

- `Action/primary/default` — Primary CTA Default (`action.primary.default`)
- `Action/primary/hover` — Primary CTA Hover (`action.primary.hover`)
- `Action/primary/pressed` — Primary CTA Pressed (`action.primary.pressed`)
- `Action/secondary/default` — Secondary CTA Default (`action.secondary.default`)
- `Action/secondary/hover` — Secondary CTA Hover (`action.secondary.hover`)
- `Action/secondary/pressed` — Secondary CTA Pressed (`action.secondary.pressed`)
- `Action/disabled/default` — Disabled Default (`action.disabled.default`)
- `Action/ghost/default` — Ghost Default (`action.ghost.default`)
- `Action/ghost/hover` — Ghost Hover (`action.ghost.hover`)
- `Action/ghost/pressed` — Ghost Pressed (`action.ghost.pressed`)

#### Surface

- `Surface/page` — Base Background (`surface.page`)
- `Surface/layer-1` — Container Background (`surface.layer-1`)
- `Surface/layer-2` — Elevated Background (`surface.layer-2`)
- `Surface/input` — Form Background (`surface.input`)
- `Surface/selected` — Active State Background (`surface.selected`)
- `Surface/selected-pressed` — Active State Background Pressed (`surface.selected-pressed`)
- `Surface/inverse` — Inverted Background (`surface.inverse`)
- `Surface/overlay` — Scrim (`surface.overlay`)
- `Surface/accent` — Accent Wash (`surface.accent`)

#### Status

- `Status/critical/surface` — Feedback Background Subtle (`status.critical.surface`)
- `Status/critical/surface-pressed` — Feedback Background Pressed (`status.critical.surface-pressed`)
- `Status/warning/surface-pressed` — Feedback Background Pressed (`status.warning.surface-pressed`)
- `Status/success/surface-pressed` — Feedback Background Pressed (`status.success.surface-pressed`)
- `Status/info/surface-pressed` — Feedback Background Pressed (`status.info.surface-pressed`)
- `Status/critical/surface-solid` — Feedback Background Solid (`status.critical.surface-solid`)
- `Status/critical/content` — Feedback Text (`status.critical.content`)
- `Status/critical/on-solid` — Feedback Inverted Text (`status.critical.on-solid`)
- `Status/critical/surface-solid-hover` — Feedback Background Solid Hover (`status.critical.surface-solid-hover`)
- `Status/critical/surface-solid-pressed` — Feedback Background Solid Pressed (`status.critical.surface-solid-pressed`)
- `Status/warning/surface` — Feedback Background Subtle (`status.warning.surface`)
- `Status/warning/content` — Feedback Text (`status.warning.content`)
- `Status/success/surface` — Feedback Background Subtle (`status.success.surface`)
- `Status/success/content` — Feedback Text (`status.success.content`)
- `Status/info/surface` — Feedback Background Subtle (`status.info.surface`)
- `Status/info/content` — Feedback Text (`status.info.content`)
- `Status/warning/surface-solid` — Feedback Background Solid (`status.warning.surface-solid`)
- `Status/warning/on-solid` — Feedback Inverted Text (`status.warning.on-solid`)
- `Status/warning/surface-solid-hover` — Feedback Background Solid Hover (`status.warning.surface-solid-hover`)
- `Status/warning/surface-solid-pressed` — Feedback Background Solid Pressed (`status.warning.surface-solid-pressed`)
- `Status/success/surface-solid` — Feedback Background Solid (`status.success.surface-solid`)
- `Status/success/on-solid` — Feedback Inverted Text (`status.success.on-solid`)
- `Status/success/surface-solid-hover` — Feedback Background Solid Hover (`status.success.surface-solid-hover`)
- `Status/success/surface-solid-pressed` — Feedback Background Solid Pressed (`status.success.surface-solid-pressed`)
- `Status/info/surface-solid` — Feedback Background Solid (`status.info.surface-solid`)
- `Status/info/on-solid` — Feedback Inverted Text (`status.info.on-solid`)
- `Status/info/surface-solid-hover` — Feedback Background Solid Hover (`status.info.surface-solid-hover`)
- `Status/info/surface-solid-pressed` — Feedback Background Solid Pressed (`status.info.surface-solid-pressed`)
- `Status/critical/border` — Feedback Border (`status.critical.border`)
- `Status/warning/border` — Feedback Border (`status.warning.border`)
- `Status/success/border` — Feedback Border (`status.success.border`)
- `Status/info/border` — Feedback Border (`status.info.border`)
- `Status/critical/border-strong` — Critical Control Boundary (`status.critical.border-strong`)
- `Status/warning/border-strong` — Warning Control Boundary (`status.warning.border-strong`)
- `Status/success/border-strong` — Success Control Boundary (`status.success.border-strong`)
- `Status/info/border-strong` — Info Control Boundary (`status.info.border-strong`)

#### Border

- `Border/subtle` — Decorative Border 1/3 (`border.subtle`)
- `Border/default` — Decorative Border 2/3 (`border.default`)
- `Border/control` — Control Boundary (`border.control`)
- `Border/control-hover` — Control Boundary Hover (`border.control-hover`)
- `Border/strong` — Strong Border (`border.strong`)
- `Border/focus` — A11y Focus Ring (`border.focus`)
- `Border/ring/default` — Focus Halo (`border.ring.default`)
- `Border/rim-highlight` — Elevation Rim (`border.rim-highlight`)
- `Border/accent` — Accent Border (`border.accent`)

Pair fills with their contracted ink. Do not mix:
- `Action/primary/default` → `Content/on-action`
- `Action/secondary/*` → `Content/primary`
- `Status/*/surface` → `Status/*/content`
- `Status/*/surface-solid` (and its `-hover` / `-pressed`) → `Status/*/on-solid` of the same severity
- `Surface/inverse` → `Content/inverse`
- Inputs: `Surface/input` + `Border/strong`. Focus: `Border/focus`, never `Border/accent`.

## Examples

**Request:** “Apply this design system as Figma variables.”

**Expected:** `Color Primitives` (one mode) and `Color Semantics` (modes Light/Dark, **all five groups** Content · Action · Surface · Status · Border). Plus Typography (viewport modes Desktop · Tablet · Mobile), `Dimension Primitives` (one mode, named by value) and `Dimension Semantics` (viewport modes Desktop · Tablet · Mobile; groups Spacing · Radius · Stroke · Size · Selector · Grid), shadow effect styles, gradient paint styles. Each semantic COLOR aliases a primitive, has targeted scopes, and WEB code syntax `var(--color-…)`. No second “tokens” collection. No `ALL_SCOPES`.

**Request:** “Build a primary button in Figma that matches this system.”

**Expected:** Fill bound to `Action/primary/default`, label fill bound to `Content/on-action`, radius bound to `Radius/role/action` in `Dimension Semantics`, hover/pressed variants bound to `Action/primary/hover` and `Action/primary/pressed`. `figma-use` loaded first.

## Common edge cases

- **`references/tokens.md` not found.** Use the Token catalog in this SKILL.md. Do not stop, and do not invent a parallel vocabulary from the Figma file.
- **Escala plugin already imported this file.** Update values on the existing collections (`Color Primitives`, `Color Semantics`, …). Do not create a parallel set with different names.
- **Figma plan mode cap** (Free = 1 mode per collection). Skip extra themes, report which columns were omitted, and do not flatten dark into the light column.
- **Nested role ids.** Figma name = `Group/path/with/slashes` (`Action/primary/default`). CSS = hyphens (`var(--color-action-primary-default)`). Dots in Figma variable names throw and abort the rest of the import.
- **`use_figma` without `figma-use`.** Stop. Load `figma-use`, then retry. Colors are 0–1, not 0–255.
- **Unknown token.** If it is not in the Token catalog, do not invent one. Ask which existing role to use, or that a new role must be added in the configurator first.
- **Wrong icon family.** If the Icons section names a GitHub repo, use that package only. Mixing Lucide/Heroicons/Tabler/Mage in one screen is a token violation.

## Additional resources

- Resolved color values: [references/tokens.md](references/tokens.md)
- Spacing, type, radius, size, grid, shadows, gradients: [references/foundations.md](references/foundations.md)
- Role comments, Figma names, scopes, code syntax: [references/semantic-contract.md](references/semantic-contract.md)
