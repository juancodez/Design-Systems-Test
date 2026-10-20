# Tooltip — React

Contextual label on hover or focus. Fill → tooltip/bg → surface/inverse.

File: `components/ui/tooltip.tsx` (shadcn skeleton).

```tsx
import { Tooltip } from "@/components/ui/tooltip"
```

Styles: the `/* Tooltip */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Tooltip"` | root | — |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Tooltip"]` | root |
| `arrow` | `[data-part="Tooltip.arrow"]` |  |

## Variables it reads

`--color-content-inverse` · `--color-surface-inverse` · `--radius-action` · `--spacing-1_5` · `--spacing-2_5` · `--text-caption-font-family` · `--text-caption-font-size` · `--text-caption-font-weight` · `--text-caption-letter-spacing` · `--text-caption-line-height`
