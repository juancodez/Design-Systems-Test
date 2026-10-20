# Separator — Figma

Rule between sections or list items. Fill → divider/color token.

Component sets: `Separator`.

## Variant properties

- `Orientation`: **horizontal** · vertical

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |

## Every variant

Nothing is bound on every variant: see By variant.

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Orientation=horizontal | `root` | Fill | `Border/subtle` | Color Semantics | `--color-border-subtle` |
| Orientation=horizontal | `root` | Height | `Stroke/role/divider` | Dimension Semantics | `--stroke-divider` |
| Orientation=vertical | `root` | Fill | `Border/subtle` | Color Semantics | `--color-border-subtle` |
| Orientation=vertical | `root` | Width | `Stroke/role/divider` | Dimension Semantics | `--stroke-divider` |
| Orientation=vertical | `root` | Height | `64` | Dimension Primitives | `--size-2xl` |
