# Sonner — Figma

shadcn/ui Sonner: the toaster. A toast has a type — default, success, info, warning, error or loading — told apart by its icon.

Component sets: `Sonner`.

## Variant properties

- `Type`: **default** · success · info · warning · error · loading

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `icon` | `icon` | Child layer |
| `title` | `title` | Child layer |
| `description` | `description` | Child layer |
| `action` | `action` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Fill | `Surface/layer-1` | Color Semantics | `--color-surface-layer-1` |
| `root` | Stroke | `Border/default` | Color Semantics | `--color-border-default` |
| `root` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `root` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| `root` | Corner radius | `Radius/role/container` | Dimension Semantics | `--radius-container` |
| `root` | Effect style | `Shadow/lg` | Effect style | `--shadow-lg` |
| `root` | Horizontal padding | `16` | Dimension Primitives | `--spacing-4` |
| `root` | Vertical padding | `16` | Dimension Primitives | `--spacing-4` |
| `root` | Gap | `6` | Dimension Primitives | `--spacing-1_5` |
| `title` | Text style | `Type/label` | Text style | `--text-label-*` |
| `description` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| `description` | Text style | `Type/body-sm` | Text style | `--text-body-sm-*` |
| `action` | Fill | `Action/primary/default` | Color Semantics | `--color-action-primary-default` |
| `action` | Text fill | `Content/on-action` | Color Semantics | `--color-content-on-action` |
| `action` | Corner radius | `Radius/role/action` | Dimension Semantics | `--radius-action` |
| `action` | Horizontal padding | `8` | Dimension Primitives | `--spacing-2` |
| `action` | Text style | `Type/caption` | Text style | `--text-caption-*` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Type=default | `icon` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| Type=success | `icon` | Text fill | `Status/success/content` | Color Semantics | `--color-status-success-content` |
| Type=info | `icon` | Text fill | `Status/info/content` | Color Semantics | `--color-status-info-content` |
| Type=warning | `icon` | Text fill | `Status/warning/content` | Color Semantics | `--color-status-warning-content` |
| Type=error | `icon` | Text fill | `Status/critical/content` | Color Semantics | `--color-status-critical-content` |
| Type=loading | `icon` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
