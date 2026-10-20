# Select — Figma

Dropdown trigger that shares the input tokens, with full state coverage for forms and filters.

Component sets: `Select`.

## Variant properties

- `Size`: **default** · sm
- `State`: **Default** · Hover · Focused · Error · Disabled

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `icon` | `icon` | Child layer |
| `content` | `content` | Detached: a sibling of the component (portal), not a child |
| `item` | `item` | Detached: a sibling of the component (portal), not a child |
| `root-placeholder` | `root[data-placeholder]` | Data state of `root` |
| `item-highlighted` | `item[data-highlighted]` | Data state of `item` |
| `item-checked` | `item[data-state="checked"]` | Data state of `item` |
| `item-disabled` | `item[data-disabled]` | Data state of `item` |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Horizontal padding | `Spacing/role/inset-control` | Dimension Semantics | `--spacing-inset-control` |
| `root` | Gap | `Spacing/role/gap-control` | Dimension Semantics | `--spacing-gap-control` |
| `root` | Text style | `Type/placeholder` | Text style | `--text-placeholder-*` |
| `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| `root-placeholder` | Text fill | `Content/subtle` | Color Semantics | `--color-content-subtle` |
| `icon` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| `content` | Fill | `Surface/layer-2` | Color Semantics | `--color-surface-layer-2` |
| `content` | Stroke | `Border/subtle` | Color Semantics | `--color-border-subtle` |
| `content` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `content` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| `content` | Effect style | `Shadow/lg` | Effect style | `--shadow-lg` |
| `content` | Horizontal padding | `4` | Dimension Primitives | `--spacing-1` |
| `content` | Vertical padding | `4` | Dimension Primitives | `--spacing-1` |
| `item` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| `item` | Text style | `Type/body-sm` | Text style | `--text-body-sm-*` |
| `item` | Corner radius | `Radius/role/control` | Dimension Semantics | `--radius-control` |
| `item` | Horizontal padding | `10` | Dimension Primitives | `--spacing-2_5` |
| `item` | Vertical padding | `6` | Dimension Primitives | `--spacing-1_5` |
| `item` | Gap | `8` | Dimension Primitives | `--spacing-2` |
| `item-highlighted` | Fill | `Action/ghost/hover` | Color Semantics | `--color-action-ghost-hover` |
| `item-checked` | Fill | `Surface/selected` | Color Semantics | `--color-surface-selected` |
| `item-checked` | Text fill | `Content/accent` | Color Semantics | `--color-content-accent` |
| `item-disabled` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Size=default | `root` | Height | `Size/role/control` | Dimension Semantics | `--size-control` |
| Size=sm | `root` | Height | `Size/role/compact` | Dimension Semantics | `--size-compact` |
| State=Default | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Default | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| State=Default | `icon` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| State=Hover | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Hover | `root` | Stroke | `Border/control-hover` | Color Semantics | `--color-border-control-hover` |
| State=Hover | `icon` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| State=Focused | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Focused | `root` | Stroke | `Border/focus` | Color Semantics | `--color-border-focus` |
| State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| State=Focused | `icon` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| State=Error | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Error | `root` | Stroke | `Status/critical/border-strong` | Color Semantics | `--color-status-critical-border-strong` |
| State=Error | `root` | Focus ring (effect colour) | `Status/critical/border` | Color Semantics | `--color-status-critical-border` |
| State=Error | `icon` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| State=Disabled | `root` | Stroke | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| State=Disabled | `icon` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
