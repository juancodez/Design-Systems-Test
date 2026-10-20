# Checkbox — React

shadcn/ui Checkbox: the box alone. Label it with a horizontal Field and a FieldLabel.

File: `components/ui/checkbox.tsx` (shadcn skeleton).

```tsx
import { Checkbox } from "@/components/ui/checkbox"
```

Styles: the `/* Checkbox */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Checkbox"` | root | — |
| `data-checked` | root | **True** · False |
| `data-force-state` | root | Default · Hover · Focused · Disabled (docs only; product code uses the real state) |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Checkbox"]` | root |
| `indicator` | `[data-part="Checkbox.indicator"]` |  |

## Variables it reads

`--color-action-disabled-default` · `--color-action-primary-default` · `--color-action-primary-hover` · `--color-border-control` · `--color-border-control-hover` · `--color-border-ring-default` · `--color-content-disabled` · `--color-content-on-action` · `--color-surface-input` · `--radius-control` · `--selector-control` · `--stroke-control` · `--stroke-focus`
