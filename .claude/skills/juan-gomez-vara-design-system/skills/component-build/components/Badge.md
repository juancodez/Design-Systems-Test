# Badge — Figma

shadcn/ui Badge: a small label in six variants — default, secondary, destructive, outline, ghost and link.

Component sets: `Badge`.

## Variant properties

- `Variant`: **default** · secondary · destructive · outline · ghost · link

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/pill` | Dimension Semantics | `--radius-pill` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Text style | `Type/caption` | Text style | `--text-caption-*` |
| `root` | Horizontal padding | `8` | Dimension Primitives | `--spacing-2` |
| `root` | Vertical padding | `2` | Dimension Primitives | `--spacing-0_5` |
| `root` | Gap | `4` | Dimension Primitives | `--spacing-1` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Variant=default | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Variant=default | `root` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Variant=secondary | `root` | Fill | `Action/secondary/default` | Color Semantics | `--color-action-secondary-default` |
| Variant=secondary | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=destructive | `root` | Fill | `Status/critical/surface` | Color Semantics | `--color-status-critical-surface` |
| Variant=destructive | `root` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Variant=outline | `root` | Stroke | `Border/default` | Color Semantics | `--color-border-default` |
| Variant=outline | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=ghost | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=link | `root` | Text fill | `Content/link/default` | Color Semantics | `--color-content-link-default` |
