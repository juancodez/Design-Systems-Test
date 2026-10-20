# Tabs — React

Tab bar for switchable panels: a muted track (default) or an underline (line).

File: `components/ui/tabs.tsx` (shadcn skeleton).

```tsx
import { Tabs } from "@/components/ui/tabs"
```

Styles: the `/* Tabs */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Tabs"` | root | — |
| `data-variant` | root | **default** · line |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Tabs"]` | root |
| `trigger` | `[data-part="Tabs.trigger"]` |  |
| `trigger[data-state="active"]` | `[data-part="Tabs.trigger"][data-state="active"]` |  |

## Variables it reads

`--color-content-primary` · `--color-content-secondary` · `--color-surface-layer-2` · `--color-surface-page` · `--radius-action` · `--radius-control` · `--shadow-xs` · `--spacing-0_5` · `--spacing-1` · `--spacing-1_5` · `--spacing-2` · `--stroke-md` · `--text-button-font-family` · `--text-button-font-size` · `--text-button-font-weight` · `--text-button-letter-spacing` · `--text-button-line-height`
