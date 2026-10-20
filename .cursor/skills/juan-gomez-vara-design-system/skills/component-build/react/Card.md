# Card — React

Contained surface for grouping related content and actions. Fill → card/bg → surface/1.

File: `components/ui/card.tsx` (shadcn skeleton).

```tsx
import { Card } from "@/components/ui/card"
```

Styles: the `/* Card */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Card"` | root | — |
| `data-size` | root | **default** · sm |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Card"]` | root |
| `header` | `[data-part="Card.header"]` |  |
| `title` | `[data-part="Card.title"]` |  |
| `description` | `[data-part="Card.description"]` |  |
| `action` | `[data-part="Card.action"]` | no rule of its own: inherits from the root |
| `content` | `[data-part="Card.content"]` |  |
| `footer` | `[data-part="Card.footer"]` |  |

## Variables it reads

`--color-border-subtle` · `--color-content-primary` · `--color-content-secondary` · `--color-surface-layer-1` · `--radius-container` · `--shadow-xs` · `--spacing-1` · `--spacing-4` · `--spacing-gap-control` · `--spacing-inset-surface` · `--stroke-control` · `--text-body-sm-font-family` · `--text-body-sm-font-size` · `--text-body-sm-font-weight` · `--text-body-sm-letter-spacing` · `--text-body-sm-line-height` · `--text-heading-sm-font-family` · `--text-heading-sm-font-size` · `--text-heading-sm-font-weight` · `--text-heading-sm-letter-spacing` · `--text-heading-sm-line-height` · `--text-label-font-family` · `--text-label-font-size` · `--text-label-font-weight` · `--text-label-letter-spacing` · `--text-label-line-height`
