# Sonner — React

shadcn/ui Sonner: the toaster. A toast has a type — default, success, info, warning, error or loading — told apart by its icon.

File: `components/ui/sonner.tsx` (shadcn skeleton).

```tsx
import { Sonner } from "@/components/ui/sonner"
```

Styles: the `/* Sonner */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Sonner"` | root | — |
| `data-type` | root | **default** · success · info · warning · error · loading |

The DOM of this component comes from a library: its root is `[data-escala="Sonner"] [data-sonner-toaster] [data-sonner-toast][data-styled]`.

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Sonner"] [data-sonner-toaster] [data-sonner-toast][data-styled]` | root |
| `icon` | `[data-icon]` |  |
| `title` | `[data-title]` |  |
| `description` | `[data-description]` |  |
| `action` | `[data-button]` |  |

## Variables it reads

`--color-action-primary-default` · `--color-border-default` · `--color-content-on-action` · `--color-content-primary` · `--color-content-secondary` · `--color-status-critical-content` · `--color-status-info-content` · `--color-status-success-content` · `--color-status-warning-content` · `--color-surface-layer-1` · `--radius-action` · `--radius-container` · `--shadow-lg` · `--spacing-1_5` · `--spacing-2` · `--spacing-4` · `--stroke-control` · `--text-body-sm-font-family` · `--text-body-sm-font-size` · `--text-body-sm-font-weight` · `--text-body-sm-letter-spacing` · `--text-body-sm-line-height` · `--text-caption-font-family` · `--text-caption-font-size` · `--text-caption-font-weight` · `--text-caption-letter-spacing` · `--text-caption-line-height` · `--text-label-font-family` · `--text-label-font-size` · `--text-label-font-weight` · `--text-label-letter-spacing` · `--text-label-line-height`
