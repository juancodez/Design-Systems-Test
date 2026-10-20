# Separator — React

Rule between sections or list items. Fill → divider/color token.

File: `components/ui/separator.tsx` (shadcn skeleton).

```tsx
import { Separator } from "@/components/ui/separator"
```

Styles: the `/* Separator */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Separator"` | root | — |
| `data-orientation` | root | **horizontal** · vertical |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Separator"]` | root |

## Variables it reads

`--color-border-subtle` · `--size-2xl` · `--stroke-divider`
