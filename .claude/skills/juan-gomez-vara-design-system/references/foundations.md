# Juan Gomez Vara — foundations

Everything that is not a color role: type, spacing, radius, stroke (border width), size, selector, grid, shadows, gradients, icons. Figma names match the Escala plugin; the CSS column is the custom property in `variables.css`.

## Typography (`Typography` collection)

Modes are viewports: Desktop · Tablet · Mobile.

- `font-family-body` = `Inter` · CSS `var(--font-family-body)`
- `font-family-display` = `Inter` · CSS `var(--font-family-heading)`

### Sizes (primitives — bind a text role, not these)

| Figma variable | CSS | Size | Line height | Letter spacing |
|---|---|---|---|---|
| `size/text-xs` · `line-height/text-xs` · `letter-spacing/text-xs` | `var(--font-size-text-xs)` · `var(--line-height-text-xs)` · `var(--letter-spacing-text-xs)` | `12px` | `18px` | `0px` |
| `size/text-sm` · `line-height/text-sm` · `letter-spacing/text-sm` | `var(--font-size-text-sm)` · `var(--line-height-text-sm)` · `var(--letter-spacing-text-sm)` | `14px` | `20px` | `0px` |
| `size/text-md` · `line-height/text-md` · `letter-spacing/text-md` | `var(--font-size-text-md)` · `var(--line-height-text-md)` · `var(--letter-spacing-text-md)` | `16px` | `24px` | `0px` |
| `size/text-lg` · `line-height/text-lg` · `letter-spacing/text-lg` | `var(--font-size-text-lg)` · `var(--line-height-text-lg)` · `var(--letter-spacing-text-lg)` | `18px` | `28px` | `0px` |
| `size/text-xl` · `line-height/text-xl` · `letter-spacing/text-xl` | `var(--font-size-text-xl)` · `var(--line-height-text-xl)` · `var(--letter-spacing-text-xl)` | `20px` | `30px` | `-0.2px` |
| `size/display-xs` · `line-height/display-xs` · `letter-spacing/display-xs` | `var(--font-size-display-xs)` · `var(--line-height-display-xs)` · `var(--letter-spacing-display-xs)` | `24px` | `32px` | `-0.4px` |
| `size/display-sm` · `line-height/display-sm` · `letter-spacing/display-sm` | `var(--font-size-display-sm)` · `var(--line-height-display-sm)` · `var(--letter-spacing-display-sm)` | `30px` | `38px` | `-0.6px` |
| `size/display-md` · `line-height/display-md` · `letter-spacing/display-md` | `var(--font-size-display-md)` · `var(--line-height-display-md)` · `var(--letter-spacing-display-md)` | `36px` | `44px` | `-0.7px` |
| `size/display-lg` · `line-height/display-lg` · `letter-spacing/display-lg` | `var(--font-size-display-lg)` · `var(--line-height-display-lg)` · `var(--letter-spacing-display-lg)` | `48px` | `60px` | `-1px` |
| `size/display-xl` · `line-height/display-xl` · `letter-spacing/display-xl` | `var(--font-size-display-xl)` · `var(--line-height-display-xl)` · `var(--letter-spacing-display-xl)` | `60px` | `72px` | `-1.2px` |
| `size/display-2xl` · `line-height/display-2xl` · `letter-spacing/display-2xl` | `var(--font-size-display-2xl)` · `var(--line-height-display-2xl)` · `var(--letter-spacing-display-2xl)` | `72px` | `90px` | `-1.4px` |

### Weights

| Figma variable | CSS | Value |
|---|---|---|
| `weight/regular` | `var(--font-weight-regular)` | `400` |
| `weight/medium` | `var(--font-weight-medium)` | `500` |
| `weight/semibold` | `var(--font-weight-semibold)` | `600` |
| `weight/bold` | `var(--font-weight-bold)` | `700` |

### Text roles → text styles `Type/{role}` (Desktop / Tablet / Mobile)

Each role aliases primitive size, weight and family. Do not store a second px. In Figma the role is the variables `role/<role>/size|weight|family` (one value per viewport mode) and the text style `Type/<role>`; `Type/<role> (Tablet)` and `(Mobile)` pin the smaller size. In CSS a role is five properties: `--text-<role>-font-family`, `-font-size`, `-font-weight`, `-line-height`, `-letter-spacing` (the **CSS** column is the prefix), each with a `-tablet` and `-mobile` twin.

| Text style | CSS | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| `Type/display` | `--text-display-*` | `display-xl` · bold · display | `display-lg` · bold · display | `display-md` · bold · display |
| `Type/heading-xl` | `--text-heading-xl-*` | `display-lg` · semibold · body | `display-lg` · semibold · body | `display-md` · semibold · body |
| `Type/heading-lg` | `--text-heading-lg-*` | `display-md` · semibold · body | `display-sm` · semibold · body | `display-xs` · semibold · body |
| `Type/heading-md` | `--text-heading-md-*` | `display-sm` · semibold · body | `display-xs` · semibold · body | `text-xl` · semibold · body |
| `Type/heading-sm` | `--text-heading-sm-*` | `display-xs` · semibold · body | `text-xl` · semibold · body | `text-lg` · semibold · body |
| `Type/heading-xs` | `--text-heading-xs-*` | `text-xl` · semibold · body | `text-lg` · semibold · body | `text-md` · semibold · body |
| `Type/heading-2xs` | `--text-heading-2xs-*` | `text-lg` · semibold · body | `text-md` · semibold · body | `text-md` · semibold · body |
| `Type/body-lg` | `--text-body-lg-*` | `text-lg` · regular · body | `text-lg` · regular · body | `text-lg` · regular · body |
| `Type/body-md` | `--text-body-md-*` | `text-md` · regular · body | `text-md` · regular · body | `text-md` · regular · body |
| `Type/body-sm` | `--text-body-sm-*` | `text-sm` · regular · body | `text-sm` · regular · body | `text-sm` · regular · body |
| `Type/label` | `--text-label-*` | `text-sm` · medium · body | `text-sm` · medium · body | `text-sm` · medium · body |
| `Type/placeholder` | `--text-placeholder-*` | `text-md` · regular · body | `text-md` · regular · body | `text-md` · regular · body |
| `Type/caption` | `--text-caption-*` | `text-xs` · regular · body | `text-xs` · regular · body | `text-xs` · regular · body |
| `Type/button` | `--text-button-*` | `text-sm` · semibold · body | `text-sm` · semibold · body | `text-sm` · semibold · body |
| `Type/helper` | `--text-helper-*` | `text-xs` · regular · body | `text-xs` · regular · body | `text-xs` · regular · body |

## Dimension primitives (`Dimension Primitives` collection)

One collection of lengths, named by value and identical in every theme (`dimension.16` = 16px, `dimension.3_5` = 3.5px). Every spacing, radius, size, selector, stroke and breakpoint step below aliases one of these — the **Primitive** column says which. Never use a px that is not here.

`-32` · `-24` · `-16` · `-12` · `-8` · `-6` · `-4` · `-2` · `-1` · `0` · `0_5` · `1` · `2` · `3` · `4` · `5` · `6` · `8` · `10` · `12` · `14` · `15` · `16` · `18` · `20` · `21` · `24` · `25` · `28` · `32` · `33` · `36` · `40` · `41` · `44` · `48` · `49` · `56` · `57` · `60` · `64` · `66` · `72` · `80` · `96` · `112` · `128` · `144` · `160` · `192` · `224` · `256` · `320` · `344` · `360` · `480` · `640` · `768` · `1024` · `1280` · `1440` · `1920` · `9999`

## Spacing (`Dimension Semantics` → `Spacing/`)

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Spacing/0` | `var(--spacing-0)` | `0px` | `dimension.0` |
| `Spacing/1` | `var(--spacing-1)` | `4px` | `dimension.4` |
| `Spacing/2` | `var(--spacing-2)` | `8px` | `dimension.8` |
| `Spacing/3` | `var(--spacing-3)` | `12px` | `dimension.12` |
| `Spacing/4` | `var(--spacing-4)` | `16px` | `dimension.16` |
| `Spacing/5` | `var(--spacing-5)` | `20px` | `dimension.20` |
| `Spacing/6` | `var(--spacing-6)` | `24px` | `dimension.24` |
| `Spacing/8` | `var(--spacing-8)` | `32px` | `dimension.32` |
| `Spacing/10` | `var(--spacing-10)` | `40px` | `dimension.40` |
| `Spacing/12` | `var(--spacing-12)` | `48px` | `dimension.48` |
| `Spacing/16` | `var(--spacing-16)` | `64px` | `dimension.64` |
| `Spacing/24` | `var(--spacing-24)` | `96px` | `dimension.96` |
| `Spacing/32` | `var(--spacing-32)` | `128px` | `dimension.128` |
| `Spacing/0_5` | `var(--spacing-0_5)` | `2px` | `dimension.2` |
| `Spacing/1_5` | `var(--spacing-1_5)` | `6px` | `dimension.6` |
| `Spacing/2_5` | `var(--spacing-2_5)` | `10px` | `dimension.10` |

### Spacing roles — bind these, not the steps

| Figma variable | CSS | Step | Value |
|---|---|---|---|
| `Spacing/role/none` | `var(--spacing-none)` | `0` | `0px` |
| `Spacing/role/gap-tight` | `var(--spacing-gap-tight)` | `component-xs` | `4px` |
| `Spacing/role/gap-control` | `var(--spacing-gap-control)` | `component-sm` | `8px` |
| `Spacing/role/gap-group` | `var(--spacing-gap-group)` | `section-sm` | `16px` |
| `Spacing/role/gap-section` | `var(--spacing-gap-section)` | `section-md` | `24px` |
| `Spacing/role/inset-control` | `var(--spacing-inset-control)` | `component-md` | `12px` |
| `Spacing/role/inset-surface` | `var(--spacing-inset-surface)` | `5` | `20px` |
| `Spacing/role/inset-page` | `var(--spacing-inset-page)` | `layout-xs` | `32px` |
| `Spacing/role/overlap-xs` | `var(--spacing-overlap-xs)` | `dimension.-2` | `-2px` |
| `Spacing/role/overlap-sm` | `var(--spacing-overlap-sm)` | `dimension.-4` | `-4px` |
| `Spacing/role/overlap-md` | `var(--spacing-overlap-md)` | `dimension.-8` | `-8px` |
| `Spacing/role/overlap-lg` | `var(--spacing-overlap-lg)` | `dimension.-16` | `-16px` |
| `Spacing/role/overlap-xl` | `var(--spacing-overlap-xl)` | `dimension.-24` | `-24px` |
| `Spacing/role/overlap-2xl` | `var(--spacing-overlap-2xl)` | `dimension.-32` | `-32px` |
| `Spacing/role/inset-control-top` | `var(--spacing-inset-control-top)` | `component-md` | `12px` |
| `Spacing/role/inset-control-right` | `var(--spacing-inset-control-right)` | `component-md` | `12px` |
| `Spacing/role/inset-control-bottom` | `var(--spacing-inset-control-bottom)` | `component-md` | `12px` |
| `Spacing/role/inset-control-left` | `var(--spacing-inset-control-left)` | `component-md` | `12px` |
| `Spacing/role/inset-surface-top` | `var(--spacing-inset-surface-top)` | `5` | `20px` |
| `Spacing/role/inset-surface-right` | `var(--spacing-inset-surface-right)` | `5` | `20px` |
| `Spacing/role/inset-surface-bottom` | `var(--spacing-inset-surface-bottom)` | `5` | `20px` |
| `Spacing/role/inset-surface-left` | `var(--spacing-inset-surface-left)` | `5` | `20px` |
| `Spacing/role/inset-page-top` | `var(--spacing-inset-page-top)` | `layout-xs` | `32px` |
| `Spacing/role/inset-page-right` | `var(--spacing-inset-page-right)` | `layout-xs` | `32px` |
| `Spacing/role/inset-page-bottom` | `var(--spacing-inset-page-bottom)` | `layout-xs` | `32px` |
| `Spacing/role/inset-page-left` | `var(--spacing-inset-page-left)` | `layout-xs` | `32px` |

### Responsive spacing (`Spacing/<family>/<size>`, CSS `--spacing-<family>-<size>`)

Each token reads a static step per viewport. Roles on one of these step down with it. Edit one viewport at a time in Variables (Platform switch).

| Token | Desktop | Tablet · Mobile |
|---|---|---|
| `component-xl` | `6` | `4` · `3` |
| `component-lg` | `4` | `4` · `3` |
| `component-md` | `3` | `3` · `2` |
| `component-sm` | `2` | `2` · `2` |
| `component-xs` | `1` | `1` · `1` |
| `component-none` | `0` | `0` · `0` |
| `section-xl` | `12` | `8` · `5` |
| `section-lg` | `8` | `5` · `4` |
| `section-md` | `6` | `4` · `3` |
| `section-sm` | `4` | `4` · `3` |
| `section-xs` | `3` | `3` · `2` |
| `section-none` | `0` | `0` · `0` |
| `layout-xl` | `32` | `16` · `12` |
| `layout-lg` | `24` | `12` · `8` |
| `layout-md` | `16` | `8` · `4` |
| `layout-sm` | `12` | `6` · `3` |
| `layout-xs` | `8` | `4` · `2` |
| `layout-none` | `0` | `0` · `0` |

### Padding

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Spacing/padding/top` | `var(--padding-top)` | `20px` | `dimension.20` |
| `Spacing/padding/right` | `var(--padding-right)` | `20px` | `dimension.20` |
| `Spacing/padding/bottom` | `var(--padding-bottom)` | `20px` | `dimension.20` |
| `Spacing/padding/left` | `var(--padding-left)` | `20px` | `dimension.20` |

## Radius (`Dimension Semantics` → `Radius/`)

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Radius/none` | `var(--radius-none)` | `0px` | `dimension.0` |
| `Radius/full` | `var(--radius-full)` | `9999px` | `dimension.9999` |
| `Radius/sm` | `var(--radius-sm)` | `4px` | `dimension.4` |
| `Radius/lg` | `var(--radius-lg)` | `8px` | `dimension.8` |
| `Radius/xl` | `var(--radius-xl)` | `12px` | `dimension.12` |
| `Radius/2xl` | `var(--radius-2xl)` | `16px` | `dimension.16` |
| `Radius/3xl` | `var(--radius-3xl)` | `24px` | `dimension.24` |
| `Radius/4xl` | `var(--radius-4xl)` | `32px` | `dimension.32` |
| `Radius/5xl` | `var(--radius-5xl)` | `48px` | `dimension.48` |
| `Radius/xs` | `var(--radius-xs)` | `2px` | `dimension.2` |
| `Radius/md` | `var(--radius-md)` | `6px` | `dimension.6` |

### Radius roles — bind these, not the steps

| Figma variable | CSS | Step | Value |
|---|---|---|---|
| `Radius/role/control` | `var(--radius-control)` | `sm` | `4px` |
| `Radius/role/action` | `var(--radius-action)` | `lg` | `8px` |
| `Radius/role/container` | `var(--radius-container)` | `2xl` | `16px` |
| `Radius/role/overlay` | `var(--radius-overlay)` | `2xl` | `16px` |
| `Radius/role/pill` | `var(--radius-pill)` | `full` | `9999px` |

### Responsive radius (a role on a step follows it per viewport)

Each token reads a static step per viewport. Roles on one of these step down with it. Edit one viewport at a time in Variables (Platform switch).

| Token | Desktop | Tablet · Mobile |
|---|---|---|
| `none` | `none` | `none` · `none` |
| `sm` | `sm` | `xs` · `xs` |
| `md` | `md` | `sm` · `sm` |
| `lg` | `lg` | `md` · `md` |
| `xl` | `xl` | `lg` · `lg` |
| `2xl` | `2xl` | `xl` · `xl` |
| `3xl` | `3xl` | `2xl` · `xl` |
| `4xl` | `4xl` | `3xl` · `2xl` |
| `5xl` | `5xl` | `4xl` · `3xl` |
| `full` | `full` | `full` · `full` |

## Stroke — border width (`Dimension Semantics` → `Stroke/`)

Border **width** only. Border **color** is a Color Semantics role (`border.*` in `references/tokens.md`).

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Stroke/none` | `var(--stroke-none)` | `0px` | `dimension.0` |
| `Stroke/sm` | `var(--stroke-sm)` | `1px` | `dimension.1` |
| `Stroke/md` | `var(--stroke-md)` | `2px` | `dimension.2` |
| `Stroke/lg` | `var(--stroke-lg)` | `4px` | `dimension.4` |

### Stroke roles — bind these, not the steps

| Figma variable | CSS | Step | Value |
|---|---|---|---|
| `Stroke/role/divider` | `var(--stroke-divider)` | `sm` | `1px` |
| `Stroke/role/control` | `var(--stroke-control)` | `sm` | `1px` |
| `Stroke/role/focus` | `var(--stroke-focus)` | `md` | `2px` |

## Size — control height (`Dimension Semantics` → `Size/`)

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Size/xs` | `var(--size-xs)` | `24px` | `dimension.24` |
| `Size/sm` | `var(--size-sm)` | `32px` | `dimension.32` |
| `Size/md` | `var(--size-md)` | `40px` | `dimension.40` |
| `Size/lg` | `var(--size-lg)` | `48px` | `dimension.48` |
| `Size/xl` | `var(--size-xl)` | `56px` | `dimension.56` |
| `Size/2xl` | `var(--size-2xl)` | `64px` | `dimension.64` |

### Size roles — bind these, not the steps

| Figma variable | CSS | Step | Value |
|---|---|---|---|
| `Size/role/compact` | `var(--size-compact)` | `sm` | `32px` |
| `Size/role/control` | `var(--size-control)` | `md` | `40px` |
| `Size/role/touch` | `var(--size-touch)` | `lg` | `48px` |
| `Size/role/hit` | `var(--size-hit)` | `xs` | `24px` |
| `Size/role/fab` | `var(--size-fab)` | `xl` | `56px` |

## Selector — checkbox, radio, switch knob (`Dimension Semantics` → `Selector/`)

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Selector/xs` | `var(--selector-xs)` | `12px` | `dimension.12` |
| `Selector/sm` | `var(--selector-sm)` | `15px` | `dimension.15` |
| `Selector/md` | `var(--selector-md)` | `18px` | `dimension.18` |
| `Selector/lg` | `var(--selector-lg)` | `21px` | `dimension.21` |
| `Selector/xl` | `var(--selector-xl)` | `24px` | `dimension.24` |

### Selector roles — bind these, not the steps

| Figma variable | CSS | Step | Value |
|---|---|---|---|
| `Selector/role/control` | `var(--selector-control)` | `md` | `18px` |
| `Selector/role/compact` | `var(--selector-compact)` | `sm` | `15px` |
| `Selector/role/indicator` | `var(--selector-indicator)` | `xs` | `12px` |

## Grid (`Dimension Semantics` → `Grid/`)

| Figma variable | CSS | Value | Primitive |
|---|---|---|---|
| `Grid/columns` | `var(--grid-columns)` | `12` | — |
| `Grid/gutter` | `var(--grid-gutter)` | `32px` | `dimension.32` |
| `Grid/margin` | `var(--grid-margin)` | `32px` | `dimension.32` |
| `Grid/container` | `var(--grid-container)` | `1280px` | `dimension.1280` |
| `Grid/breakpoint-sm` | `var(--grid-breakpoint-sm)` | `640px` | `dimension.640` |
| `Grid/breakpoint-md` | `var(--grid-breakpoint-md)` | `768px` | `dimension.768` |
| `Grid/breakpoint-lg` | `var(--grid-breakpoint-lg)` | `1024px` | `dimension.1024` |
| `Grid/breakpoint-xl` | `var(--grid-breakpoint-xl)` | `1280px` | `dimension.1280` |
| `Grid/breakpoint-2xl` | `var(--grid-breakpoint-2xl)` | `1440px` | `dimension.1440` |

### Grid styles (Figma layout grid styles `Grid/<name>`)

| Style | Viewport | Columns | Column | Gutter | Margin | Width |
|---|---|---|---|---|---|---|
| `Grid/2XL Desktop` | desktop | 12 | `80px` | `32px` | `64px` | `1440px` |
| `Grid/XL Desktop` | desktop | 12 | `72px` | `32px` | `32px` | `1280px` |
| `Grid/XL Desktop Sidebar` | desktop | 12 | `64px` | `24px` | `32px` | `1440px` (sidebar `344px`) |
| `Grid/LG Web` | desktop | 12 | `48px` | `32px` | `48px` | `1024px` |
| `Grid/MD Tablet` | tablet | 8 | `60px` | `32px` | `32px` | `768px` |
| `Grid/SM Mobile` | mobile | 4 | `60px` | `16px` | `16px` | `320px` |

## Shadows (effect styles — not variables)

The dark value is the effect style `Shadow/<step> (Dark)`; in CSS `--shadow-<step>` switches inside `.dark`.

| Figma style | CSS | Light | Dark |
|---|---|---|---|
| `Shadow/xs` | `var(--shadow-xs)` | `0 1px 2px rgba(10,13,18,0.05)` | `0 0 0 1px rgba(255,255,255,0.048), 0 1px 2px rgba(0,0,0,0.265)` |
| `Shadow/sm` | `var(--shadow-sm)` | `0 1px 3px rgba(10,13,18,0.10), 0 1px 2px -1px rgba(10,13,18,0.10)` | `0 0 0 1px rgba(255,255,255,0.065), 0 1px 3px rgba(0,0,0,0.469), 0 1px 2px -1px rgba(0,0,0,0.469)` |
| `Shadow/md` | `var(--shadow-md)` | `0 4px 6px -1px rgba(10,13,18,0.10), 0 2px 4px -2px rgba(10,13,18,0.06)` | `0 0 0 1px rgba(255,255,255,0.065), 0 4px 6px -1px rgba(0,0,0,0.469), 0 2px 4px -2px rgba(0,0,0,0.31)` |
| `Shadow/lg` | `var(--shadow-lg)` | `0 12px 16px -4px rgba(10,13,18,0.08), 0 4px 6px -2px rgba(10,13,18,0.03)` | `0 0 0 1px rgba(255,255,255,0.058), 0 12px 16px -4px rgba(0,0,0,0.394), 0 4px 6px -2px rgba(0,0,0,0.167)` |
| `Shadow/xl` | `var(--shadow-xl)` | `0 20px 24px -4px rgba(10,13,18,0.08), 0 8px 8px -4px rgba(10,13,18,0.03)` | `0 0 0 1px rgba(255,255,255,0.058), 0 20px 24px -4px rgba(0,0,0,0.394), 0 8px 8px -4px rgba(0,0,0,0.167)` |
| `Shadow/2xl` | `var(--shadow-2xl)` | `0 24px 48px -12px rgba(10,13,18,0.18)` | `0 0 0 1px rgba(255,255,255,0.093), 0 24px 48px -12px rgba(0,0,0,0.696)` |

## Gradients (paint styles — not variables)

A gradient whose dark stops differ also ships `Gradient/<slug> (Dark)`; in CSS `--gradient-<slug>` switches inside `.dark`.

| Figma style | CSS | Light | Dark | Assigned to |
|---|---|---|---|---|
| `Gradient/brand-cover` | `var(--gradient-brand-cover)` | `linear-gradient(135deg, #2970ff 0%, #1b3467 100%)` | `linear-gradient(135deg, #2970ff 0%, #d1e7ff 100%)` | cover |
| `Gradient/aurora` | `var(--gradient-aurora)` | `linear-gradient(120deg, #7daaff 0%, #2970ff 50%, #3869cb 100%)` | `linear-gradient(120deg, #254b98 0%, #2970ff 50%, #abceff 100%)` | avatar |
| `Gradient/moss-glow` | `var(--gradient-moss-glow)` | `radial-gradient(circle at 30% 30%, #7daaff 0%, #3869cb 100%)` | `radial-gradient(circle at 30% 30%, #254b98 0%, #abceff 100%)` | — |

## Icons

When generating UI for this product, use icons from https://github.com/Mage-Icons/mage-icons (Mage Icons, `mage-icons-react`). Do not mix another icon family.

- **Set:** Mage Icons
- **Repo:** https://github.com/Mage-Icons/mage-icons
- **Package:** `mage-icons-react`
- **Weight:** `regular`

### Icon sizes (`Dimension Semantics` → `Icon/role/`)

| Figma variable | CSS | Value |
|---|---|---|
| `Icon/role/small` | `var(--icon-small)` | `16px` |
| `Icon/role/medium` | `var(--icon-medium)` | `20px` |
| `Icon/role/large` | `var(--icon-large)` | `24px` |

Below 16px a thin or light icon renders `regular`.
