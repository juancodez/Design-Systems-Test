# Checkbox — Figma

shadcn/ui Checkbox: the box alone. Label it with a horizontal Field and a FieldLabel.

Component sets: `Checkbox`.

## Variant properties

- `Checked`: **True** · False
- `State`: **Default** · Hover · Focused · Disabled

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `indicator` | `indicator` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/control` | Dimension Semantics | `--radius-control` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Height | `Selector/role/control` | Dimension Semantics | `--selector-control` |
| `root` | Width | `Selector/role/control` | Dimension Semantics | `--selector-control` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Checked=True, State=Default | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Checked=True, State=Default | `root` | Stroke | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Checked=True, State=Default | `indicator` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=True, State=Hover | `root` | Fill | `Action/primary/hover` | Color Semantics | `--color-action-primary-hover` |
| Checked=True, State=Hover | `root` | Stroke | `Action/primary/hover` | Color Semantics | `--color-action-primary-hover` |
| Checked=True, State=Hover | `indicator` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=True, State=Focused | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Checked=True, State=Focused | `root` | Stroke | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Checked=True, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Checked=True, State=Focused | `indicator` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=True, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Checked=True, State=Disabled | `root` | Stroke | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Checked=True, State=Disabled | `indicator` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| Checked=False, State=Default | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Default | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Checked=False, State=Default | `indicator` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=False, State=Hover | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Hover | `root` | Stroke | `Border/control-hover` | Color Semantics | `--color-border-control-hover` |
| Checked=False, State=Hover | `indicator` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=False, State=Focused | `root` | Fill | `Surface/input` | Color Semantics | `--color-surface-input` |
| Checked=False, State=Focused | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Checked=False, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Checked=False, State=Focused | `indicator` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Checked=False, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Checked=False, State=Disabled | `root` | Stroke | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Checked=False, State=Disabled | `indicator` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
