# Avatar — Figma

Avatar with initials fallback for identity representation — XS to XL sizes.

Component sets: `Avatar`.

## Variant properties

- `Size`: **default** · sm · lg

## Layers

| Layer | Slot | Note |
|---|---|---|
| `root` | `root` | The component itself |
| `image` | `image` | Child layer |
| `fallback` | `fallback` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `root` | Corner radius | `Radius/role/pill` | Dimension Semantics | `--radius-pill` |
| `fallback` | Fill | `Surface/layer-2` | Color Semantics | `--color-surface-layer-2` |
| `fallback` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| `fallback` | Corner radius | `Radius/role/pill` | Dimension Semantics | `--radius-pill` |

## By variant

A later row overrides an earlier one for the same layer and property.

| When | Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|---|
| Size=default | `root` | Width | `32` | Dimension Primitives | `--size-sm` |
| Size=default | `root` | Height | `32` | Dimension Primitives | `--size-sm` |
| Size=default | `fallback` | Text style | `Type/label` | Text style | `--text-label-*` |
| Size=sm | `root` | Width | `24` | Dimension Primitives | `--size-xs` |
| Size=sm | `root` | Height | `24` | Dimension Primitives | `--size-xs` |
| Size=sm | `fallback` | Text style | `Type/caption` | Text style | `--text-caption-*` |
| Size=lg | `root` | Width | `40` | Dimension Primitives | `--size-md` |
| Size=lg | `root` | Height | `40` | Dimension Primitives | `--size-md` |
| Size=lg | `fallback` | Text style | `Type/label` | Text style | `--text-label-*` |
