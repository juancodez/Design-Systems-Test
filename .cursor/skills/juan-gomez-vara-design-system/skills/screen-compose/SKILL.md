---
name: juan-gomez-vara-screen-compose
description: "Compose Juan Gomez Vara screens (login, verification, pricing, checkout, settings) from the system's components, spacing roles, type roles and grid styles. Use when designing or building a full screen in Figma or in code."
---

# Juan Gomez Vara — compose a screen

Design skills · Figma and code. Load `AGENTS.md` first. A screen is the system's components on the system's grid, spaced by ROLE. It picks no numbers of its own.

## Rules

1. **The page sits on a grid style.** In Figma apply the layout grid style; in code the page inset is `var(--grid-margin)` and the content width `var(--grid-container)` (both step down per viewport).
2. **Every gap is a spacing role**, from the outside in: `gap-section` between blocks, `gap-group` between controls of one group, `gap-control` inside a row, `gap-tight` between a title and its subtitle. Bind the role (`Spacing/role/<role>` / `var(--spacing-<role>)`), never its px.
3. **Text uses type roles** (`Type/<role>` / `var(--text-<role>-*)`).
4. **One primary action per screen**, full width on mobile, `size=lg` (it resolves the touch height). A destructive action goes last.
5. **Controls come from `skills/component-build/`**, never redrawn.
6. Review the result with `skills/design-review/SKILL.md`.

## Grid styles

| Figma style | Viewport | Width | Columns | Column | Gutter | Margin |
|---|---|---|---|---|---|---|
| `Grid/2XL Desktop` | desktop | 1440 | 12 | 80 | 32 | 64 |
| `Grid/XL Desktop` | desktop | 1280 | 12 | 72 | 32 | 32 |
| `Grid/XL Desktop Sidebar` | desktop | 1440 | 12 | 64 | 24 | 32 (sidebar 344) |
| `Grid/LG Web` | desktop | 1024 | 12 | 48 | 32 | 48 |
| `Grid/MD Tablet` | tablet | 768 | 8 | 60 | 32 | 32 |
| `Grid/SM Mobile` | mobile | 320 | 4 | 60 | 16 | 16 |

## Spacing roles

| Figma | CSS | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| `Spacing/role/gap-section` | `var(--spacing-gap-section)` | 24px | 16px | 12px |
| `Spacing/role/gap-group` | `var(--spacing-gap-group)` | 16px | 16px | 12px |
| `Spacing/role/gap-control` | `var(--spacing-gap-control)` | 8px | 8px | 8px |
| `Spacing/role/gap-tight` | `var(--spacing-gap-tight)` | 4px | 4px | 4px |

## Type roles

`Type/heading-sm` · `Type/body-sm` · `Type/label` · `Type/helper` · `Type/heading-xs` · `Type/heading-lg` · `Type/caption`

## Patterns

These are the screens Escala renders from this system (Artefacts). Follow their structure; change the copy.

### Login

Sign in with email and password, or with a provider.

1. [Card](../component-build/components/Card.md): the sign-in surface holding the whole form.
2. [Input](../component-build/components/Input.md): email, then password, full width.
3. [Checkbox](../component-build/components/Checkbox.md) · Checked=True: remember me.
4. [Button](../component-build/components/Button.md) · Variant=default, Size=lg: sign in: the one primary action, full width.
5. [Separator](../component-build/components/Separator.md): the "or" rule, a separator on each side of the word.
6. SocialLoginButton (not in this system's selection: add it in Escala) · Provider=google: one per provider (google, apple), full width.

- Spacing: `Spacing/role/gap-section` between brand, title block, card, footer line · `Spacing/role/gap-group` between the controls inside the card · `Spacing/role/gap-control` between the provider buttons; the "or" rule and its word · `Spacing/role/gap-tight` between brand mark and name; title and subtitle.
- Type: `Type/heading-sm` for screen title · `Type/body-sm` for subtitle and the sign-up footer line · `Type/label` for brand name · `Type/helper` for the word "or".
- Radius: `Radius/role/container` for the brand mark tile.
- The card's elevation: `Shadow/lg`.

### Verify code

Enter a one-time code; show the error in place.

1. [Card](../component-build/components/Card.md): the surface.
2. InputOTP (not in this system's selection: add it in Escala) · State=Filled: the code.
3. Alert (not in this system's selection: add it in Escala) · Variant=destructive: a wrong or expired code.
4. [Button](../component-build/components/Button.md) · Variant=default, Size=lg: verify, full width.

- Spacing: `Spacing/role/gap-section` between title block, card, resend line · `Spacing/role/gap-group` between code, alert and button inside the card · `Spacing/role/gap-tight` between title and subtitle.
- Type: `Type/heading-sm` for screen title · `Type/body-sm` for explanation and the resend line.
- The card's elevation: `Shadow/lg`.

### Pricing

Pick a plan; the recommended one is marked.

1. RadioGroup (not in this system's selection: add it in Escala): billing period, above the plan.
2. [Card](../component-build/components/Card.md): the plan.
3. [Badge](../component-build/components/Badge.md) · Variant=secondary: "Most popular" on the recommended plan.
4. [Button](../component-build/components/Button.md) · Variant=default, Size=lg: choose the plan.

- Spacing: `Spacing/role/gap-section` between title block, period, plan card · `Spacing/role/gap-control` between feature rows; a check icon and its text · `Spacing/role/gap-tight` between title and subtitle.
- Type: `Type/heading-sm` for screen title · `Type/heading-xs` for plan name · `Type/heading-lg` for price · `Type/body-sm` for subtitle, "/ month" and features.
- The card's elevation: `Shadow/xl`.

### Checkout

Pay: order summary, payment fields, confirmation.

1. [Input](../component-build/components/Input.md): payment fields, full width, on the page.
2. [Card](../component-build/components/Card.md): the order summary.
3. [Separator](../component-build/components/Separator.md): between the line items and the total.
4. Alert (not in this system's selection: add it in Escala) · Variant=default: payment confirmed.
5. [Button](../component-build/components/Button.md) · Variant=default, Size=lg: pay, full width.

- Spacing: `Spacing/role/gap-section` between title block, fields, summary, alert, button · `Spacing/role/gap-group` between the payment fields · `Spacing/role/gap-control` between summary lines · `Spacing/role/gap-tight` between title and subtitle.
- Type: `Type/heading-sm` for screen title · `Type/body-sm` for subtitle and line items.
- The card's elevation: `Shadow/sm`.

### Profile

Account settings: identity, preferences, a destructive action last.

1. [Avatar](../component-build/components/Avatar.md) · Size=lg: the person, in the header row.
2. StatusBadge (not in this system's selection: add it in Escala) · Status=online: presence, end of the header row.
3. [Card](../component-build/components/Card.md): the notification settings: a list of Switches, each labelled through a Field.
4. [Button](../component-build/components/Button.md) · Variant=destructive, Size=lg: delete the account, last on the page.

- Spacing: `Spacing/role/gap-section` between header row, settings card, danger zone · `Spacing/role/gap-group` between avatar and the name block · `Spacing/role/gap-control` between the danger-zone caption and its button · `Spacing/role/gap-tight` between name and email.
- Type: `Type/heading-xs` for the name · `Type/body-sm` for the email · `Type/caption` for the danger-zone caption.
- The card's elevation: `Shadow/md`.
