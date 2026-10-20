# Switch — React

shadcn/ui Switch: an instant on/off setting in two sizes. Label it with a horizontal Field.

File: `components/ui/switch.tsx` (shadcn skeleton).

```tsx
import { Switch } from "@/components/ui/switch"
```

Styles: the `/* Switch */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Switch"` | root | — |
| `data-size` | root | **default** · sm |
| `data-checked` | root | **True** · False |
| `data-force-state` | root | Default · Hover · Focused · Disabled (docs only; product code uses the real state) |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Switch"]` | root |
| `thumb` | `[data-part="Switch.thumb"]` |  |

## Variables it reads

`--color-action-disabled-default` · `--color-action-primary-default` · `--color-action-primary-hover` · `--color-action-secondary-default` · `--color-action-secondary-hover` · `--color-border-ring-default` · `--color-content-on-action` · `--color-surface-input` · `--radius-pill` · `--selector-compact` · `--selector-control` · `--shadow-xs` · `--spacing-1` · `--spacing-3` · `--spacing-4` · `--spacing-5` · `--stroke-focus`
