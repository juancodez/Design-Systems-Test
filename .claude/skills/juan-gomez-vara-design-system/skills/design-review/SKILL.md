---
name: juan-gomez-vara-design-review
description: "Review a Figma frame against the Juan Gomez Vara design system: detached values, fill/ink pairs, radius axes, off-scale spacing, field outlines. Use when asked to check, audit or QA a design before handoff."
---

# Juan Gomez Vara — review a Figma frame

Design skills · Figma. Load `AGENTS.md` and `SKILL.md` first. Walk the frame layer by layer and report every finding in the table at the end. Do not fix silently: say what is wrong and what it should bind to.

## 1. Detached values

- Every fill, stroke and text fill is bound to a `Color Semantics` variable. A raw hex, a style that is not the system's, or a `Color Primitives` ramp step (`Accents/Accent/09`) is a finding.
- Every padding, gap, corner radius and stroke weight is bound to `Dimension Semantics` (a `role/*` first) or to a `Dimension Primitives` length. An unbound number is a finding.
- Text uses a text style: `Type/display` · `Type/heading-xl` · `Type/heading-lg` · `Type/heading-md` · `Type/heading-sm` · `Type/heading-xs` · `Type/heading-2xs` · `Type/body-lg` · `Type/body-md` · `Type/body-sm` · `Type/label` · `Type/placeholder` · `Type/caption` · `Type/button` · `Type/helper`.
- Shadows use an effect style: `Shadow/xs` · `Shadow/sm` · `Shadow/md` · `Shadow/lg` · `Shadow/xl` · `Shadow/2xl`.
- A component instance with its paint overridden is a finding: change the variant instead.

## 2. Fill and ink travel together

Text on the page: `Content/primary`, `Content/secondary`, `Content/subtle`, `Content/accent`, `Content/disabled`, `Content/link/default`, `Content/link/hover` on `Surface/page`.

A text or icon on any other fill must be the ink audited for that fill:

| Fill | Ink | Intent |
|---|---|---|
| `Action/primary/default` | `Content/on-action` | `action-label` |
| `Action/secondary/default` | `Content/primary` | `action-label` |
| `Action/secondary/hover` | `Content/primary` | `action-label` |
| `Action/secondary/pressed` | `Content/primary` | `action-label` |
| `Surface/layer-1` | `Content/primary` | `body-text` |
| `Surface/layer-2` | `Content/primary` | `body-text` |
| `Surface/input` | `Content/primary` | `body-text` |
| `Surface/selected` | `Content/primary` | `body-text` |
| `Surface/inverse` | `Content/inverse` | `body-text` |
| `Status/critical/surface` | `Status/critical/content` | `large-text` |
| `Status/warning/surface` | `Status/warning/content` | `large-text` |
| `Status/success/surface` | `Status/success/content` | `large-text` |
| `Status/info/surface` | `Status/info/content` | `large-text` |
| `Status/critical/surface-solid` | `Status/critical/on-solid` | `action-label` |
| `Status/success/surface-solid` | `Status/success/on-solid` | `action-label` |
| `Status/warning/surface-solid` | `Status/warning/on-solid` | `action-label` |
| `Status/info/surface-solid` | `Status/info/on-solid` | `action-label` |

Any other pairing is a finding, even if it looks readable: it was not audited. Floors: body-text WCAG 4.5 / Lc 75; large-text WCAG 3.0 / Lc 60; action-label WCAG 4.5 / Lc 60; ui-component WCAG 3.0 / Lc 45; control-boundary WCAG 3.0 / Lc 15.

## 3. Radius: three axes, never mixed

| Axis | Used by | Bind | Resolves to |
|---|---|---|---|
| Boxes | card, modal, alert | `Radius/role/container`, `Radius/role/overlay` | 16px (`2xl`), 16px (`2xl`) |
| Fields | button, input, select, tab | `Radius/role/action` | 8px (`lg`) |
| Selectors | checkbox, radio, toggle, menu | `Radius/role/control` | 4px (`sm`) |

- A card corner on a Fields radius (or a checkbox on a Boxes radius) is a finding, even when the px happens to match: change the axis and the two drift apart.
- Circles (avatar, switch track, badge) use `Radius/role/pill`.
- A flush nested shape (a chip inside a field, a card filling a modal) has a smaller radius than its parent. A button floating with padding inside a card is not nested.

## 4. Spacing on the scale

- Padding and gaps resolve to the spacing scale: 0 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 96 · 128 px. Anything else is off-scale.
- Prefer the role: `Spacing/role/none` · `Spacing/role/gap-tight` · `Spacing/role/gap-control` · `Spacing/role/gap-group` · `Spacing/role/gap-section` · `Spacing/role/inset-control` · `Spacing/role/inset-surface` · `Spacing/role/inset-page` · `Spacing/role/overlap-xs` · `Spacing/role/overlap-sm` · `Spacing/role/overlap-md` · `Spacing/role/overlap-lg` · `Spacing/role/overlap-xl` · `Spacing/role/overlap-2xl`.

## 5. Field outline

- The resting edge of every field-like control is `Border/control` (hover `Border/control-hover`), never `Border/strong` or `Border/default`. In this system: Button, Button Group, Social Login Button, Input, Textarea, Input Group, Input Stepper, Input Tag, Select, Combobox, Input OTP, Checkbox, Radio Group, Dropzone, Chip, Toggle Group, Native Select, Toggle.
- Focus is `Border/focus`, never `Border/accent`. The halo around it is `Border/ring/default`.
- An error field strokes `Status/critical/border-strong`.

## Report

| Layer | Property | Found | Should bind | Rule |
|---|---|---|---|---|
| `card/root` | Corner radius | `8` (unbound) | `Radius/role/container` | 3 |
