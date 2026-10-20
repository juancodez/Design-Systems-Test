# Switch — Figma

shadcn/ui Switch: an instant on/off setting in two sizes. Label it with a horizontal Field.

Component sets: `Switch`.

## Variant properties

- `Checked`: **True** · False
- `Size`: **default** · sm
- `State`: **Default** · Hover · Focused · Disabled

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `thumb` | `thumb` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/pill` | Dimension Semantics | `--radius-pill` |
| `thumb` | Corner radius | `Radius/role/pill` | Dimension Semantics | `--radius-pill` |
| `thumb` | Effect style | `Shadow/xs` | Effect style | `--shadow-xs` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Size=default | `root` | Height | `Selector/role/control` + `4` | Dimension Semantics + Dimension Primitives | `--selector-control` + `--spacing-1` |
| Size=default | `root` | Width | `Selector/role/control` + `20` | Dimension Semantics + Dimension Primitives | `--selector-control` + `--spacing-5` |
| Size=default | `thumb` | Height | `Selector/role/control` | Dimension Semantics | `--selector-control` |
| Size=default | `thumb` | Width | `Selector/role/control` | Dimension Semantics | `--selector-control` |
| Size=sm | `root` | Height | `Selector/role/compact` + `4` | Dimension Semantics + Dimension Primitives | `--selector-compact` + `--spacing-1` |
| Size=sm | `root` | Width | `Selector/role/compact` + `16` | Dimension Semantics + Dimension Primitives | `--selector-compact` + `--spacing-4` |
| Size=sm | `thumb` | Height | `Selector/role/compact` | Dimension Semantics | `--selector-compact` |
| Size=sm | `thumb` | Width | `Selector/role/compact` | Dimension Semantics | `--selector-compact` |
| Checked=True, State=Default | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Checked=True, State=Default | `thumb` | Fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=True, State=Hover | `root` | Fill | `Action/primary/hover` | Color Semantics | `--color-action-primary-hover` |
| Checked=True, State=Hover | `thumb` | Fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=True, State=Focused | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Checked=True, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Checked=True, State=Focused | `thumb` | Fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=True, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Checked=True, State=Disabled | `thumb` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Default | `root` | Fill | `Action/secondary/default` | Color Semantics | `--color-action-secondary-default` |
| Checked=False, State=Default | `thumb` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Hover | `root` | Fill | `Action/secondary/hover` | Color Semantics | `--color-action-secondary-hover` |
| Checked=False, State=Hover | `thumb` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Focused | `root` | Fill | `Action/secondary/default` | Color Semantics | `--color-action-secondary-default` |
| Checked=False, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Checked=False, State=Focused | `thumb` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Checked=False, State=Disabled | `thumb` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
