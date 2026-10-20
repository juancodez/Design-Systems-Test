# Tabs — Figma

Tab bar for switchable panels: a muted track (default) or an underline (line).

Component sets: `Tabs`.

## Variant properties

- `Variant`: **default** · line

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `trigger` | `trigger` | Child layer |
| `trigger-active` | `trigger[data-state="active"]` | Data state of `trigger` |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `trigger` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| `trigger` | Text style | `Type/button` | Text style | `--text-button-*` |
| `trigger` | Horizontal padding | `8` | Dimension Primitives | `--spacing-2` |
| `trigger` | Vertical padding | `4` | Dimension Primitives | `--spacing-1` |
| `trigger` | Gap | `6` | Dimension Primitives | `--spacing-1_5` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Variant=default | `root` | Fill | `Surface/layer-2` | Color Semantics | `--color-surface-layer-2` |
| Variant=default | `root` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| Variant=default | `root` | Horizontal padding | `4` | Dimension Primitives | `--spacing-1` |
| Variant=default | `root` | Vertical padding | `4` | Dimension Primitives | `--spacing-1` |
| Variant=default | `root` | Gap | `2` | Dimension Primitives | `--spacing-0_5` |
| Variant=default | `trigger` | Corner radius | `Radius/role/control` | Dimension Semantics | `--radius-control` |
| Variant=default | `trigger-active` | Fill | `Surface/page` | Color Semantics | `--color-surface-page` |
| Variant=default | `trigger-active` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=default | `trigger-active` | Effect style | `Shadow/xs` | Effect style | `--shadow-xs` |
| Variant=line | `root` | Gap | `4` | Dimension Primitives | `--spacing-1` |
| Variant=line | `trigger` | Stroke weight (bottom) | `2` | Dimension Primitives | `--stroke-md` |
| Variant=line | `trigger-active` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=line | `trigger-active` | Stroke | `Content/primary` | Color Semantics | `--color-content-primary` |
