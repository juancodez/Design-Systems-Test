# Dialog — Figma

Modal window with footer actions for critical flows that require full attention.

Component sets: `Dialog`.

## Variant properties

- None: a single component.

## Layers

| Layer | Slot | Note |
|---|---|---|
| `content` | `content` | The component itself |
| `overlay` | `overlay` | Detached: a sibling of the component (portal), not a child |
| `header` | `header` | Child layer |
| `title` | `title` | Child layer |
| `description` | `description` | Child layer |
| `footer` | `footer` | Child layer |

## Every variant

| Layer | Property | Bind to | Collection | CSS |
|---|---|---|---|---|
| `overlay` | Fill | `Surface/overlay` | Color Semantics | `--color-surface-overlay` |
| `content` | Fill | `Surface/layer-2` | Color Semantics | `--color-surface-layer-2` |
| `content` | Stroke | `Border/subtle` | Color Semantics | `--color-border-subtle` |
| `content` | Stroke weight | `Stroke/role/control` | Dimension Semantics | `--stroke-control` |
| `content` | Corner radius | `Radius/role/overlay` | Dimension Semantics | `--radius-overlay` |
| `content` | Horizontal padding | `Spacing/role/inset-surface` | Dimension Semantics | `--spacing-inset-surface` |
| `content` | Vertical padding | `Spacing/role/inset-surface` | Dimension Semantics | `--spacing-inset-surface` |
| `content` | Gap | `Spacing/role/gap-group` | Dimension Semantics | `--spacing-gap-group` |
| `content` | Effect style | `Shadow/2xl` | Effect style | `--shadow-2xl` |
| `header` | Gap | `6` | Dimension Primitives | `--spacing-1_5` |
| `title` | Text fill | `Content/primary` | Color Semantics | `--color-content-primary` |
| `title` | Text style | `Type/heading-2xs` | Text style | `--text-heading-2xs-*` |
| `description` | Text fill | `Content/secondary` | Color Semantics | `--color-content-secondary` |
| `description` | Text style | `Type/body-sm` | Text style | `--text-body-sm-*` |
| `footer` | Gap | `Spacing/role/gap-control` | Dimension Semantics | `--spacing-gap-control` |
