# Card — Figma

Contained surface for grouping related content and actions. Fill → card/bg → surface/1.

Component sets: `Card`.

## Variant properties

- `Size`: **default** · sm

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `header` | `header` | Child layer |
| `title` | `title` | Child layer |
| `description` | `description` | Child layer |
| `action` | `action` | Child layer |
| `content` | `content` | Child layer |
| `footer` | `footer` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Fill | `Surface/layer-1` | Color Semantics | `--color-surface-layer-1` |
| `root` | Stroke | `Border/subtle` | Color Semantics | `--color-border-subtle` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| `root` | Corner radius | `Radius/role/container` | Dimension Semantics | `--radius-container` |
| `root` | Effect style | `Shadow/xs` | Effect style | `--shadow-xs` |
| `header` | Gap | `4` | Dimension Primitives | `--spacing-1` |
| `description` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| `description` | Text style | `Type/body-sm` | Text style | `--text-body-sm-*` |
| `content` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| `content` | Text style | `Type/body-sm` | Text style | `--text-body-sm-*` |
| `footer` | Gap | `Spacing/role/gap-control` | Dimension Semantics | `--spacing-gap-control` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Size=default | `root` | Horizontal padding | `Spacing/role/inset-surface` | Dimension Semantics | `--spacing-inset-surface` |
| Size=default | `root` | Vertical padding | `Spacing/role/inset-surface` | Dimension Semantics | `--spacing-inset-surface` |
| Size=default | `root` | Gap | `Spacing/role/inset-surface` | Dimension Semantics | `--spacing-inset-surface` |
| Size=default | `title` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Size=default | `title` | Text style | `Type/heading-sm` | Text style | `--text-heading-sm-*` |
| Size=sm | `root` | Horizontal padding | `16` | Dimension Primitives | `--spacing-4` |
| Size=sm | `root` | Vertical padding | `16` | Dimension Primitives | `--spacing-4` |
| Size=sm | `root` | Gap | `16` | Dimension Primitives | `--spacing-4` |
| Size=sm | `title` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Size=sm | `title` | Text style | `Type/label` | Text style | `--text-label-*` |
