# Input — React

shadcn/ui Input: the bare text control — the box is the <input>. No sizes or types: a label and a hint come from Field, icons and add-ons from Input Group.

File: `components/ui/input.tsx` (shadcn skeleton).

```tsx
import { Input } from "@/components/ui/input"
```

Styles: the `/* Input */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Input"` | root | — |
| `data-force-state` | root | Default · Hover · Focused · Error · Disabled (docs only; product code uses the real state) |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Input"]` | root |
| `placeholder` | `[data-escala="Input"]::placeholder` | pseudo-element |

## Variables it reads

`--color-action-disabled-default` · `--color-border-control` · `--color-border-control-hover` · `--color-border-focus` · `--color-border-ring-default` · `--color-content-disabled` · `--color-content-primary` · `--color-content-subtle` · `--color-status-critical-border` · `--color-status-critical-border-strong` · `--color-surface-input` · `--radius-action` · `--size-control` · `--spacing-gap-control` · `--spacing-inset-control` · `--stroke-control` · `--stroke-focus` · `--text-placeholder-font-family` · `--text-placeholder-font-size` · `--text-placeholder-font-weight` · `--text-placeholder-letter-spacing` · `--text-placeholder-line-height`
