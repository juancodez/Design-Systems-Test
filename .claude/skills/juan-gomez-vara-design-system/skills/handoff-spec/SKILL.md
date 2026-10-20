---
name: juan-gomez-vara-handoff-spec
description: "Write a handoff spec for a Juan Gomez Vara Figma frame: each layer, the variable or style it binds, and the CSS custom property an engineer uses. Use when preparing a design for implementation."
---

# Juan Gomez Vara — handoff spec

Design skills · Figma → code. Load `AGENTS.md` first. Run `skills/design-review/SKILL.md` before writing the spec: a detached value has no CSS to hand off.

## How to write it

1. One table per component instance or frame section.
2. One row per layer and property: the bound Figma variable (or style), its CSS custom property from the tables below, and the variant it belongs to.
3. A component from the library is named by its catalogue name and variant (`Button · variant=outline · size=sm`). Its layers are its recipe slots; in code each slot is the element with `data-slot` of that name. Per-component layers: `skills/component-build/components/` (`Button`, `Input`, `Select`, `Checkbox`, `Switch`, `Badge`, `Card`, `Avatar`, `Dialog`, `Tooltip`, `Separator`, `Sonner`, `Tabs`).
4. Never hand off a hex or a px. If a layer is unbound, the spec says "unbound" and the design goes back.

## Template

| Layer | Variant | Property | Figma | CSS |
|---|---|---|---|---|
| `root` | variant=default | Fill | `Action/primary/default` | `var(--color-action-primary-default)` |
| `label` | variant=default | Text fill | `Content/on-action` | `var(--color-content-on-action)` |

## Color — Figma variable → CSS

| Figma (`Color Semantics`) | CSS |
|---|---|
| `Content/primary` | `var(--color-content-primary)` |
| `Content/secondary` | `var(--color-content-secondary)` |
| `Content/subtle` | `var(--color-content-subtle)` |
| `Content/accent` | `var(--color-content-accent)` |
| `Content/on-action` | `var(--color-content-on-action)` |
| `Content/inverse` | `var(--color-content-inverse)` |
| `Content/disabled` | `var(--color-content-disabled)` |
| `Content/link/default` | `var(--color-content-link-default)` |
| `Content/link/hover` | `var(--color-content-link-hover)` |
| `Action/primary/default` | `var(--color-action-primary-default)` |
| `Action/primary/hover` | `var(--color-action-primary-hover)` |
| `Action/primary/pressed` | `var(--color-action-primary-pressed)` |
| `Action/secondary/default` | `var(--color-action-secondary-default)` |
| `Action/secondary/hover` | `var(--color-action-secondary-hover)` |
| `Action/secondary/pressed` | `var(--color-action-secondary-pressed)` |
| `Action/disabled/default` | `var(--color-action-disabled-default)` |
| `Action/ghost/default` | `var(--color-action-ghost-default)` |
| `Action/ghost/hover` | `var(--color-action-ghost-hover)` |
| `Action/ghost/pressed` | `var(--color-action-ghost-pressed)` |
| `Surface/page` | `var(--color-surface-page)` |
| `Surface/layer-1` | `var(--color-surface-layer-1)` |
| `Surface/layer-2` | `var(--color-surface-layer-2)` |
| `Surface/accent` | `var(--color-surface-accent)` |
| `Surface/input` | `var(--color-surface-input)` |
| `Surface/selected` | `var(--color-surface-selected)` |
| `Surface/selected-pressed` | `var(--color-surface-selected-pressed)` |
| `Surface/inverse` | `var(--color-surface-inverse)` |
| `Surface/overlay` | `var(--color-surface-overlay)` |
| `Status/critical/surface` | `var(--color-status-critical-surface)` |
| `Status/critical/surface-pressed` | `var(--color-status-critical-surface-pressed)` |
| `Status/critical/surface-solid` | `var(--color-status-critical-surface-solid)` |
| `Status/critical/surface-solid-hover` | `var(--color-status-critical-surface-solid-hover)` |
| `Status/critical/surface-solid-pressed` | `var(--color-status-critical-surface-solid-pressed)` |
| `Status/critical/on-solid` | `var(--color-status-critical-on-solid)` |
| `Status/critical/content` | `var(--color-status-critical-content)` |
| `Status/critical/border` | `var(--color-status-critical-border)` |
| `Status/critical/border-strong` | `var(--color-status-critical-border-strong)` |
| `Status/success/surface` | `var(--color-status-success-surface)` |
| `Status/success/surface-pressed` | `var(--color-status-success-surface-pressed)` |
| `Status/success/surface-solid` | `var(--color-status-success-surface-solid)` |
| `Status/success/surface-solid-hover` | `var(--color-status-success-surface-solid-hover)` |
| `Status/success/surface-solid-pressed` | `var(--color-status-success-surface-solid-pressed)` |
| `Status/success/on-solid` | `var(--color-status-success-on-solid)` |
| `Status/success/content` | `var(--color-status-success-content)` |
| `Status/success/border` | `var(--color-status-success-border)` |
| `Status/success/border-strong` | `var(--color-status-success-border-strong)` |
| `Status/warning/surface` | `var(--color-status-warning-surface)` |
| `Status/warning/surface-pressed` | `var(--color-status-warning-surface-pressed)` |
| `Status/warning/surface-solid` | `var(--color-status-warning-surface-solid)` |
| `Status/warning/surface-solid-hover` | `var(--color-status-warning-surface-solid-hover)` |
| `Status/warning/surface-solid-pressed` | `var(--color-status-warning-surface-solid-pressed)` |
| `Status/warning/on-solid` | `var(--color-status-warning-on-solid)` |
| `Status/warning/content` | `var(--color-status-warning-content)` |
| `Status/warning/border` | `var(--color-status-warning-border)` |
| `Status/warning/border-strong` | `var(--color-status-warning-border-strong)` |
| `Status/info/surface` | `var(--color-status-info-surface)` |
| `Status/info/surface-pressed` | `var(--color-status-info-surface-pressed)` |
| `Status/info/surface-solid` | `var(--color-status-info-surface-solid)` |
| `Status/info/surface-solid-hover` | `var(--color-status-info-surface-solid-hover)` |
| `Status/info/surface-solid-pressed` | `var(--color-status-info-surface-solid-pressed)` |
| `Status/info/on-solid` | `var(--color-status-info-on-solid)` |
| `Status/info/content` | `var(--color-status-info-content)` |
| `Status/info/border` | `var(--color-status-info-border)` |
| `Status/info/border-strong` | `var(--color-status-info-border-strong)` |
| `Border/default` | `var(--color-border-default)` |
| `Border/subtle` | `var(--color-border-subtle)` |
| `Border/control` | `var(--color-border-control)` |
| `Border/control-hover` | `var(--color-border-control-hover)` |
| `Border/strong` | `var(--color-border-strong)` |
| `Border/accent` | `var(--color-border-accent)` |
| `Border/focus` | `var(--color-border-focus)` |
| `Border/ring/default` | `var(--color-border-ring-default)` |
| `Border/rim-highlight` | `var(--color-border-rim-highlight)` |

## Lengths — Figma variable → CSS

`Dimension Semantics` follows the viewport (Desktop · Tablet · Mobile); the CSS custom property steps down in the same media blocks. A `Dimension Primitives` length (`16`) is a raw length: hand it off as `var(--dimension-16)` and ask whether a role fits.

| Figma | CSS |
|---|---|
| `Radius/role/control` | `var(--radius-control)` |
| `Radius/role/action` | `var(--radius-action)` |
| `Radius/role/container` | `var(--radius-container)` |
| `Radius/role/overlay` | `var(--radius-overlay)` |
| `Radius/role/pill` | `var(--radius-pill)` |
| `Spacing/role/none` | `var(--spacing-none)` |
| `Spacing/role/gap-tight` | `var(--spacing-gap-tight)` |
| `Spacing/role/gap-control` | `var(--spacing-gap-control)` |
| `Spacing/role/gap-group` | `var(--spacing-gap-group)` |
| `Spacing/role/gap-section` | `var(--spacing-gap-section)` |
| `Spacing/role/inset-control` | `var(--spacing-inset-control)` |
| `Spacing/role/inset-surface` | `var(--spacing-inset-surface)` |
| `Spacing/role/inset-page` | `var(--spacing-inset-page)` |
| `Spacing/role/overlap-xs` | `var(--spacing-overlap-xs)` |
| `Spacing/role/overlap-sm` | `var(--spacing-overlap-sm)` |
| `Spacing/role/overlap-md` | `var(--spacing-overlap-md)` |
| `Spacing/role/overlap-lg` | `var(--spacing-overlap-lg)` |
| `Spacing/role/overlap-xl` | `var(--spacing-overlap-xl)` |
| `Spacing/role/overlap-2xl` | `var(--spacing-overlap-2xl)` |
| `Spacing/role/inset-control-top` | `var(--spacing-inset-control-top)` |
| `Spacing/role/inset-control-right` | `var(--spacing-inset-control-right)` |
| `Spacing/role/inset-control-bottom` | `var(--spacing-inset-control-bottom)` |
| `Spacing/role/inset-control-left` | `var(--spacing-inset-control-left)` |
| `Spacing/role/inset-surface-top` | `var(--spacing-inset-surface-top)` |
| `Spacing/role/inset-surface-right` | `var(--spacing-inset-surface-right)` |
| `Spacing/role/inset-surface-bottom` | `var(--spacing-inset-surface-bottom)` |
| `Spacing/role/inset-surface-left` | `var(--spacing-inset-surface-left)` |
| `Spacing/role/inset-page-top` | `var(--spacing-inset-page-top)` |
| `Spacing/role/inset-page-right` | `var(--spacing-inset-page-right)` |
| `Spacing/role/inset-page-bottom` | `var(--spacing-inset-page-bottom)` |
| `Spacing/role/inset-page-left` | `var(--spacing-inset-page-left)` |
| `Size/role/compact` | `var(--size-compact)` |
| `Size/role/control` | `var(--size-control)` |
| `Size/role/touch` | `var(--size-touch)` |
| `Size/role/hit` | `var(--size-hit)` |
| `Size/role/fab` | `var(--size-fab)` |
| `Selector/role/control` | `var(--selector-control)` |
| `Selector/role/compact` | `var(--selector-compact)` |
| `Selector/role/indicator` | `var(--selector-indicator)` |
| `Stroke/role/divider` | `var(--stroke-divider)` |
| `Stroke/role/control` | `var(--stroke-control)` |
| `Stroke/role/focus` | `var(--stroke-focus)` |
| `Icon/role/small` | `var(--icon-small)` |
| `Icon/role/medium` | `var(--icon-medium)` |
| `Icon/role/large` | `var(--icon-large)` |

## Text and effect styles → CSS

| Figma style | CSS |
|---|---|
| `Type/display` | `var(--text-display-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/heading-xl` | `var(--text-heading-xl-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/heading-lg` | `var(--text-heading-lg-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/heading-md` | `var(--text-heading-md-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/heading-sm` | `var(--text-heading-sm-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/heading-xs` | `var(--text-heading-xs-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/heading-2xs` | `var(--text-heading-2xs-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/body-lg` | `var(--text-body-lg-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/body-md` | `var(--text-body-md-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/body-sm` | `var(--text-body-sm-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/label` | `var(--text-label-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/placeholder` | `var(--text-placeholder-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/caption` | `var(--text-caption-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/button` | `var(--text-button-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Type/helper` | `var(--text-helper-font-size)`, `-line-height`, `-font-weight`, `-font-family`, `-letter-spacing` |
| `Shadow/xs` | `var(--shadow-xs)` |
| `Shadow/sm` | `var(--shadow-sm)` |
| `Shadow/md` | `var(--shadow-md)` |
| `Shadow/lg` | `var(--shadow-lg)` |
| `Shadow/xl` | `var(--shadow-xl)` |
| `Shadow/2xl` | `var(--shadow-2xl)` |
