# Avatar — React

Avatar with initials fallback for identity representation — XS to XL sizes.

File: `components/ui/avatar.tsx` (shadcn skeleton).

```tsx
import { Avatar } from "@/components/ui/avatar"
```

Styles: the `/* Avatar */` block of [`recipes.css`](recipes.css), after `variables.css`.

## Attributes

| Attribute | On | Values |
|---|---|---|
| `data-escala="Avatar"` | root | — |
| `data-size` | root | **default** · sm · lg |

## Parts

| Slot | Selector | Note |
|---|---|---|
| `root` | `[data-escala="Avatar"]` | root |
| `image` | `[data-part="Avatar.image"]` | no rule of its own: inherits from the root |
| `fallback` | `[data-part="Avatar.fallback"]` |  |

## Variables it reads

`--color-content-secondary` · `--color-surface-layer-2` · `--radius-pill` · `--size-md` · `--size-sm` · `--size-xs` · `--text-caption-font-family` · `--text-caption-font-size` · `--text-caption-font-weight` · `--text-caption-letter-spacing` · `--text-caption-line-height` · `--text-label-font-family` · `--text-label-font-size` · `--text-label-font-weight` · `--text-label-letter-spacing` · `--text-label-line-height`
