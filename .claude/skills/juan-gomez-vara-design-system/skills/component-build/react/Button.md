# Button — React

shadcn/ui Button: six variants (default, secondary, outline, ghost, destructive, link) and eight sizes, four of them square icon buttons. An icon-only ghost button is the dismiss control; a link button is an inline link.

File: `components/ui/button.tsx` (shadcn skeleton).

```tsx
import { Button } from "@/components/ui/button"
```

Styles: the `/* Button */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Button"` | root | — |
| `data-size` | root | **default** · xs · sm · lg · icon · icon-xs · icon-sm · icon-lg |
| `data-variant` | root | **default** · outline · secondary · ghost · destructive · link |
| `data-force-state` | root | Default · Hover · Pressed · Focused · Loading · Disabled (docs only; product code uses the real state) |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Button"]` | root |
| `label` | `[data-part="Button.label"]` | no rule of its own: inherits from the root |
| `icon` | `[data-part="Button.icon"]` | no rule of its own: inherits from the root |

## Variables it reads

`--color-action-disabled-default` · `--color-action-ghost-hover` · `--color-action-ghost-pressed` · `--color-action-primary-default` · `--color-action-primary-hover` · `--color-action-primary-pressed` · `--color-action-secondary-default` · `--color-action-secondary-hover` · `--color-action-secondary-pressed` · `--color-border-control` · `--color-border-ring-default` · `--color-content-disabled` · `--color-content-link-default` · `--color-content-link-hover` · `--color-content-on-action` · `--color-content-primary` · `--color-status-critical-border` · `--color-status-critical-content` · `--color-status-critical-surface` · `--color-status-critical-surface-pressed` · `--color-surface-page` · `--radius-action` · `--size-compact` · `--size-control` · `--size-hit` · `--size-touch` · `--spacing-0` · `--spacing-1` · `--spacing-1_5` · `--spacing-2` · `--spacing-3` · `--spacing-4` · `--spacing-5` · `--spacing-gap-control` · `--stroke-control` · `--stroke-focus` · `--text-button-font-family` · `--text-button-font-size` · `--text-button-font-weight` · `--text-button-letter-spacing` · `--text-button-line-height`
