# Tooltip — Figma

Contextual label on hover or focus. Fill → tooltip/bg → surface/inverse.

Component sets: `Tooltip`.

## Variant properties

- None: a single component.

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `arrow` | `arrow` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Fill | `Surface/inverse` | Color Semantics | `--color-surface-inverse` |
| `root` | Text fill | `Content/inverse` | Color Semantics | `--color-content-inverse` |
| `root` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| `root` | Text style | `Type/caption` | Text style | `--text-caption-*` |
| `root` | Horizontal padding | `10` | Dimension Primitives | `--spacing-2_5` |
| `root` | Vertical padding | `6` | Dimension Primitives | `--spacing-1_5` |
