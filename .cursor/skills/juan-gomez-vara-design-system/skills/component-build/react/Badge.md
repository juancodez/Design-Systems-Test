# Badge — React

shadcn/ui Badge: a small label in six variants — default, secondary, destructive, outline, ghost and link.

File: `components/ui/badge.tsx` (shadcn skeleton).

```tsx
import { Badge } from "@/components/ui/badge"
```

Styles: the `/* Badge */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Badge"` | root | — |
| `data-variant` | root | **default** · secondary · destructive · outline · ghost · link |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Badge"]` | root |

## Variables it reads

`--color-action-primary-default` · `--color-action-secondary-default` · `--color-border-default` · `--color-content-link-default` · `--color-content-on-action` · `--color-content-primary` · `--color-status-critical-content` · `--color-status-critical-surface` · `--radius-pill` · `--spacing-0_5` · `--spacing-1` · `--spacing-2` · `--stroke-control` · `--text-caption-font-family` · `--text-caption-font-size` · `--text-caption-font-weight` · `--text-caption-letter-spacing` · `--text-caption-line-height`
