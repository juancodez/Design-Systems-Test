# Select — React

Dropdown trigger that shares the input tokens, with full state coverage for forms and filters.

File: `components/ui/select.tsx` (shadcn skeleton).

```tsx
import { Select } from "@/components/ui/select"
```

Styles: the `/* Select */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Select"` | root | — |
| `data-size` | root | **default** · sm |
| `data-force-state` | root | Default · Hover · Focused · Error · Disabled (docs only; product code uses the real state) |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Select"]` | root |
| `icon` | `[data-part="Select.icon"]` |  |
| `content` | `[data-part="Select.content"]` | rendered outside the root (portal) |
| `item` | `[data-part="Select.item"]` | rendered outside the root (portal) |
| `root[data-placeholder]` | `[data-escala="Select"][data-placeholder]` |  |
| `item[data-highlighted]` | `[data-part="Select.item"][data-highlighted]` |  |
| `item[data-state="checked"]` | `[data-part="Select.item"][data-state="checked"]` |  |
| `item[data-disabled]` | `[data-part="Select.item"][data-disabled]` |  |

## Variables it reads

`--color-action-disabled-default` · `--color-action-ghost-hover` · `--color-border-control` · `--color-border-control-hover` · `--color-border-focus` · `--color-border-ring-default` · `--color-border-subtle` · `--color-content-accent` · `--color-content-disabled` · `--color-content-primary` · `--color-content-secondary` · `--color-content-subtle` · `--color-status-critical-border` · `--color-status-critical-border-strong` · `--color-surface-input` · `--color-surface-layer-2` · `--color-surface-selected` · `--radius-action` · `--radius-control` · `--shadow-lg` · `--size-compact` · `--size-control` · `--spacing-1` · `--spacing-1_5` · `--spacing-2` · `--spacing-2_5` · `--spacing-gap-control` · `--spacing-inset-control` · `--stroke-control` · `--stroke-focus` · `--text-body-sm-font-family` · `--text-body-sm-font-size` · `--text-body-sm-font-weight` · `--text-body-sm-letter-spacing` · `--text-body-sm-line-height` · `--text-placeholder-font-family` · `--text-placeholder-font-size` · `--text-placeholder-font-weight` · `--text-placeholder-letter-spacing` · `--text-placeholder-line-height`
