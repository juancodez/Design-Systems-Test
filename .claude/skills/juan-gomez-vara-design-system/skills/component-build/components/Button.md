# Button — Figma

shadcn/ui Button: six variants (default, secondary, outline, ghost, destructive, link) and eight sizes, four of them square icon buttons. An icon-only ghost button is the dismiss control; a link button is an inline link.

Component sets: `Button`.

## Variant properties

- `Variant`: **default** · secondary · outline · ghost · destructive · link
- `Size`: **default** · xs · sm · lg · icon · icon-xs · icon-sm · icon-lg
- `State`: **Default** · Hover · Pressed · Focused · Loading · Disabled

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `label` | `label` | Child layer |
| `icon` | `icon` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Text style | `Type/button` | Text style | `--text-button-*` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Size=default | `root` | Height | `Size/role/control` | Dimension Semantics | `--size-control` |
| Size=default | `root` | Horizontal padding | `16` | Dimension Primitives | `--spacing-4` |
| Size=default | `root` | Gap | `Spacing/role/gap-control` | Dimension Semantics | `--spacing-gap-control` |
| Size=xs | `root` | Height | `Size/role/hit` | Dimension Semantics | `--size-hit` |
| Size=xs | `root` | Horizontal padding | `8` | Dimension Primitives | `--spacing-2` |
| Size=xs | `root` | Gap | `4` | Dimension Primitives | `--spacing-1` |
| Size=sm | `root` | Height | `Size/role/compact` | Dimension Semantics | `--size-compact` |
| Size=sm | `root` | Horizontal padding | `12` | Dimension Primitives | `--spacing-3` |
| Size=sm | `root` | Gap | `6` | Dimension Primitives | `--spacing-1_5` |
| Size=lg | `root` | Height | `Size/role/touch` | Dimension Semantics | `--size-touch` |
| Size=lg | `root` | Horizontal padding | `20` | Dimension Primitives | `--spacing-5` |
| Size=lg | `root` | Gap | `Spacing/role/gap-control` | Dimension Semantics | `--spacing-gap-control` |
| Size=icon | `root` | Height | `Size/role/control` | Dimension Semantics | `--size-control` |
| Size=icon | `root` | Width | `Size/role/control` | Dimension Semantics | `--size-control` |
| Size=icon | `root` | Horizontal padding | `0` | Dimension Primitives | `--spacing-0` |
| Size=icon-xs | `root` | Height | `Size/role/hit` | Dimension Semantics | `--size-hit` |
| Size=icon-xs | `root` | Width | `Size/role/hit` | Dimension Semantics | `--size-hit` |
| Size=icon-xs | `root` | Horizontal padding | `0` | Dimension Primitives | `--spacing-0` |
| Size=icon-sm | `root` | Height | `Size/role/compact` | Dimension Semantics | `--size-compact` |
| Size=icon-sm | `root` | Width | `Size/role/compact` | Dimension Semantics | `--size-compact` |
| Size=icon-sm | `root` | Horizontal padding | `0` | Dimension Primitives | `--spacing-0` |
| Size=icon-lg | `root` | Height | `Size/role/touch` | Dimension Semantics | `--size-touch` |
| Size=icon-lg | `root` | Width | `Size/role/touch` | Dimension Semantics | `--size-touch` |
| Size=icon-lg | `root` | Horizontal padding | `0` | Dimension Primitives | `--spacing-0` |
| Variant=default, State=Default | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Variant=default, State=Default | `root` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Variant=default, State=Hover | `root` | Fill | `Action/primary/hover` | Color Semantics | `--color-action-primary-hover` |
| Variant=default, State=Hover | `root` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Variant=default, State=Pressed | `root` | Fill | `Action/primary/pressed` | Color Semantics | `--color-action-primary-pressed` |
| Variant=default, State=Pressed | `root` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Variant=default, State=Focused | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Variant=default, State=Focused | `root` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Variant=default, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Variant=default, State=Loading | `root` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| Variant=default, State=Loading | `root` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| Variant=default, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Variant=default, State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| Variant=outline, State=Default | `root` | Fill | `Surface/page` | Color Semantics | `--color-surface-page` |
| Variant=outline, State=Default | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Variant=outline, State=Default | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=outline, State=Hover | `root` | Fill | `Action/ghost/hover` | Color Semantics | `--color-action-ghost-hover` |
| Variant=outline, State=Hover | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Variant=outline, State=Hover | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=outline, State=Pressed | `root` | Fill | `Action/ghost/pressed` | Color Semantics | `--color-action-ghost-pressed` |
| Variant=outline, State=Pressed | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Variant=outline, State=Pressed | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=outline, State=Focused | `root` | Fill | `Surface/page` | Color Semantics | `--color-surface-page` |
| Variant=outline, State=Focused | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Variant=outline, State=Focused | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=outline, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Variant=outline, State=Loading | `root` | Fill | `Surface/page` | Color Semantics | `--color-surface-page` |
| Variant=outline, State=Loading | `root` | Stroke | `Border/control` | Color Semantics | `--color-border-control` |
| Variant=outline, State=Loading | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=outline, State=Disabled | `root` | Stroke | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Variant=outline, State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| Variant=secondary, State=Default | `root` | Fill | `Action/secondary/default` | Color Semantics | `--color-action-secondary-default` |
| Variant=secondary, State=Default | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=secondary, State=Hover | `root` | Fill | `Action/secondary/hover` | Color Semantics | `--color-action-secondary-hover` |
| Variant=secondary, State=Hover | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=secondary, State=Pressed | `root` | Fill | `Action/secondary/pressed` | Color Semantics | `--color-action-secondary-pressed` |
| Variant=secondary, State=Pressed | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=secondary, State=Focused | `root` | Fill | `Action/secondary/default` | Color Semantics | `--color-action-secondary-default` |
| Variant=secondary, State=Focused | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=secondary, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Variant=secondary, State=Loading | `root` | Fill | `Action/secondary/default` | Color Semantics | `--color-action-secondary-default` |
| Variant=secondary, State=Loading | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=secondary, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Variant=secondary, State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| Variant=ghost, State=Default | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=ghost, State=Hover | `root` | Fill | `Action/ghost/hover` | Color Semantics | `--color-action-ghost-hover` |
| Variant=ghost, State=Hover | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=ghost, State=Pressed | `root` | Fill | `Action/ghost/pressed` | Color Semantics | `--color-action-ghost-pressed` |
| Variant=ghost, State=Pressed | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=ghost, State=Focused | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=ghost, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Variant=ghost, State=Loading | `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Variant=ghost, State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| Variant=destructive, State=Default | `root` | Fill | `Status/critical/surface` | Color Semantics | `--color-status-critical-surface` |
| Variant=destructive, State=Default | `root` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Variant=destructive, State=Hover | `root` | Fill | `Status/critical/surface-pressed` | Color Semantics | `--color-status-critical-surface-pressed` |
| Variant=destructive, State=Hover | `root` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Variant=destructive, State=Pressed | `root` | Fill | `Status/critical/surface-pressed` | Color Semantics | `--color-status-critical-surface-pressed` |
| Variant=destructive, State=Pressed | `root` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Variant=destructive, State=Focused | `root` | Fill | `Status/critical/surface` | Color Semantics | `--color-status-critical-surface` |
| Variant=destructive, State=Focused | `root` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Variant=destructive, State=Focused | `root` | Focus ring (effect colour) | `Status/critical/border` | Color Semantics | `--color-status-critical-border` |
| Variant=destructive, State=Loading | `root` | Fill | `Status/critical/surface` | Color Semantics | `--color-status-critical-surface` |
| Variant=destructive, State=Loading | `root` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Variant=destructive, State=Disabled | `root` | Fill | `Action/disabled/default` | Color Semantics | `--color-action-disabled-default` |
| Variant=destructive, State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
| Variant=link, State=Default | `root` | Text fill | `Content/link/default` | Color Semantics | `--color-content-link-default` |
| Variant=link, State=Hover | `root` | Text fill | `Content/link/hover` | Color Semantics | `--color-content-link-hover` |
| Variant=link, State=Pressed | `root` | Text fill | `Content/link/hover` | Color Semantics | `--color-content-link-hover` |
| Variant=link, State=Focused | `root` | Text fill | `Content/link/default` | Color Semantics | `--color-content-link-default` |
| Variant=link, State=Focused | `root` | Focus ring (effect colour) | `Border/ring/default` | Color Semantics | `--color-border-ring-default` |
| Variant=link, State=Loading | `root` | Text fill | `Content/link/default` | Color Semantics | `--color-content-link-default` |
| Variant=link, State=Disabled | `root` | Text fill | `Content/disabled` | Color Semantics | `--color-content-disabled` |
