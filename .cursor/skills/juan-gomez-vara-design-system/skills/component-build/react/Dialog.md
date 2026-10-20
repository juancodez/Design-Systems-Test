# Dialog — React

Modal window with footer actions for critical flows that require full attention.

File: `components/ui/dialog.tsx` (shadcn skeleton).

```tsx
import { Dialog } from "@/components/ui/dialog"
```

Styles: the `/* Dialog */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Dialog"` | root | — |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `content` | `[data-escala="Dialog"]` | root |
| `overlay` | `[data-part="Dialog.overlay"]` | rendered outside the root (portal) |
| `header` | `[data-part="Dialog.header"]` |  |
| `title` | `[data-part="Dialog.title"]` |  |
| `description` | `[data-part="Dialog.description"]` |  |
| `footer` | `[data-part="Dialog.footer"]` |  |

## Variables it reads

`--color-border-subtle` · `--color-content-primary` · `--color-content-secondary` · `--color-surface-layer-2` · `--color-surface-overlay` · `--radius-overlay` · `--shadow-2xl` · `--spacing-1_5` · `--spacing-gap-control` · `--spacing-gap-group` · `--spacing-inset-surface` · `--stroke-control` · `--text-body-sm-font-family` · `--text-body-sm-font-size` · `--text-body-sm-font-weight` · `--text-body-sm-letter-spacing` · `--text-body-sm-line-height` · `--text-heading-2xs-font-family` · `--text-heading-2xs-font-size` · `--text-heading-2xs-font-weight` · `--text-heading-2xs-letter-spacing` · `--text-heading-2xs-line-height`
