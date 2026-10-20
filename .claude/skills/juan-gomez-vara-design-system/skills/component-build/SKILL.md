---
name: juan-gomez-vara-component-build
description: "Build Juan Gomez Vara components in Figma or in React: which variable goes on each Figma layer, and which data attributes and CSS variables the React component carries. Layers and parts are named after the recipe slots. Use when creating, rebuilding or checking a component."
---

# Juan Gomez Vara — build a component

Design skills. Load `AGENTS.md` and `SKILL.md` first.

Every component is ONE recipe: the same table paints the Figma component set and the web component. The Escala plugin builds the Figma sets for you (sync from Escala). Use this skill when you build one by hand, extend one, or check one.

## Figma rules

1. **Name each layer after its slot.** The component itself is `root`. A part is its slot name (`label`, `icon`, `thumb`). A second copy of a part takes a suffix (`icon-leading`, `icon-trailing`). A data state is a suffix too (`item-highlighted`, `cell-active`).
2. **Bind, never type a value.** Each property in the component's file names the variable or style to bind. No hex, no px, no primitive colour ramp.
3. **Variants come from the variant properties** listed per component. A Hover / Focused / Disabled look is a variant of `State`, painted from its own row, not an override on an instance.
4. **A sum has no single variable** (`Selector/role/control` + `2`): set the resulting length and leave a note; do not bind one of the terms alone.
5. **"Not published in this system"** means the recipe asks for a token this system does not ship. Do not invent one: report it.
6. Text layers take a text style `Type/<role>` (a text style listed on `root` goes on the component's text layers); shadows take an effect style `Shadow/<step>`.

## React rules

1. **Use the component file if the repo has it** (`components/ui/<name>.tsx`, shadcn's skeleton, from Escala). It already sets the attributes the stylesheet reads. Otherwise start from `templates/component/` and add them.
2. **Load the styles once, in this order:** `variables.css` (the tokens), then [`react/recipes.css`](react/recipes.css) (every component below, painted only with `var()`). Copy both into the app's styles.
3. **The stylesheet paints by attribute, never by class**: the root carries `data-escala="<Component>"` and one `data-<axis>` per variant property; every other part carries `data-part="<Component>.<slot>"`. States come from the real element: `:hover`, `:active`, `:focus-visible`, `aria-disabled="true"`, `aria-invalid="true"`. `data-force-state` pins a state for docs only.
4. **No colour, length or font in `className` or `style`.** An override uses the same `var()` the recipe uses for that part.
5. Run `node checkers/token-lint.mjs` on the files you touched.

## Components

| Component | Figma sets | Layers | Spec |
|---|---|---|---|
| Button | `Button` | `root` · `label` · `icon` | [Figma](components/Button.md) · [React](react/Button.md) |
| Input | `Input` | `root` · `placeholder` | [Figma](components/Input.md) · [React](react/Input.md) |
| Select | `Select` | `root` · `icon` · `content` · `item` · `root-placeholder` · `item-highlighted` · `item-checked` · `item-disabled` | [Figma](components/Select.md) · [React](react/Select.md) |
| Checkbox | `Checkbox` | `root` · `indicator` | [Figma](components/Checkbox.md) · [React](react/Checkbox.md) |
| Switch | `Switch` | `root` · `thumb` | [Figma](components/Switch.md) · [React](react/Switch.md) |
| Badge | `Badge` | `root` | [Figma](components/Badge.md) · [React](react/Badge.md) |
| Card | `Card` | `root` · `header` · `title` · `description` · `action` · `content` · `footer` | [Figma](components/Card.md) · [React](react/Card.md) |
| Avatar | `Avatar` | `root` · `image` · `fallback` | [Figma](components/Avatar.md) · [React](react/Avatar.md) |
| Dialog | `Dialog` | `content` · `overlay` · `header` · `title` · `description` · `footer` | [Figma](components/Dialog.md) · [React](react/Dialog.md) |
| Tooltip | `Tooltip` | `root` · `arrow` | [Figma](components/Tooltip.md) · [React](react/Tooltip.md) |
| Separator | `Separator` | `root` | [Figma](components/Separator.md) · [React](react/Separator.md) |
| Sonner | `Sonner` | `root` · `icon` · `title` · `description` · `action` | [Figma](components/Sonner.md) · [React](react/Sonner.md) |
| Tabs | `Tabs` | `root` · `trigger` · `trigger-active` | [Figma](components/Tabs.md) · [React](react/Tabs.md) |
