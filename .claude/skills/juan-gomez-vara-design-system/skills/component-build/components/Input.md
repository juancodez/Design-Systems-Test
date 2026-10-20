# Input — Figma

shadcn/ui Input: the bare text control — the box is the <input>. No sizes or types: a label and a hint come from Field, icons and add-ons from Input Group.

Component sets: `Input`.

## Variant properties

- `State`: **Default** · Hover · Focused · Error · Disabled

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `placeholder` | `placeholder` | The placeholder text layer (web: `root::placeholder`) |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Horizontal padding | `Spacing/role/inset-control` | Dimension Semantics | `--spacing-inset-control` |
| `root` | Gap | `Spacing/role/gap-control` | Dimension Semantics | `--spacing-gap-control` |
| `root` | Height | `Size/role/control` | Dimension Semantics | `--size-control` |
| `root` | Text style | `Type/placeholder` | Text style | `--text-placeholder-*` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| State=Default | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Default | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| State=Default | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| State=Default | `placeholder` | Text fill | `Content/subtle` | Color Semantics | `--color-content-subtle` |
| State=Hover | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Hover | `root` | Stroke | `Border/control-hover` | Color Semantics | `--color-border-control-hover` |
| State=Hover | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| State=Hover | `placeholder` | Text fill | `Content/subtle` | Color Semantics | `--color-content-subtle` |
| State=Focused | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Focused | `root` | Stroke | `Border/focus` | Color Semantics | `--color-border-focus` |
| State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| State=Focused | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| State=Focused | `placeholder` | Text fill | `Content/subtle` | Color Semantics | `--color-content-subtle` |
| State=Error | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| State=Error | `root` | Stroke | `Status/critical/border-strong` | Color Semantics | `--color-status-critical-border-strong` |
| State=Error | `root` | Focus ring (effect colour) | `Status/critical/border` | Color Semantics | `--color-status-critical-border` |
| State=Error | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| State=Error | `placeholder` | Text fill | `Content/subtle` | Color Semantics | `--color-content-subtle` |
| State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| State=Disabled | `root` | Stroke | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| State=Disabled | `placeholder` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
