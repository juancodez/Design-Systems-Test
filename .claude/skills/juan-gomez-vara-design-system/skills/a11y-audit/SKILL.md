---
name: juan-gomez-vara-a11y
description: "Audit Juan Gomez Vara UI contrast using WCAG 2.1 and APCA together. Use when checking text or controls on a surface."
---

# Juan Gomez Vara — accessibility

WCAG is the compliance floor. APCA Lc is what people perceive. A pair that clears one and fails the other is a finding.

## Rules

1. Check the **semantic pair**, not a random hex. Resolve names in `references/semantic-contract.md`.
2. APCA is directional: foreground first (text/icon), then background.
3. Intent floors: body-text WCAG 4.5 / Lc 75; large-text WCAG 3.0 / Lc 60; action-label WCAG 4.5 / Lc 60; ui-component WCAG 3.0 / Lc 45; control-boundary WCAG 3.0 / Lc 15.
4. A label on a solid fill (button, chip, destructive action) is `action-label`, not `body-text`.
5. Do not reimplement contrast math. Compare against the hex tables in `references/tokens.md`.

## Pairs this system is audited on

| Foreground | Background | Intent |
|---|---|---|
| `Content/primary` | `Surface/page` | `body-text` |
| `Content/secondary` | `Surface/page` | `body-text` |
| `Content/accent` | `Surface/page` | `body-text` |
| `Content/link/default` | `Surface/page` | `body-text` |
| `Content/link/hover` | `Surface/page` | `body-text` |
| `Content/on-action` | `Action/primary/default` | `action-label` |
| `Content/primary` | `Action/secondary/default` | `action-label` |
| `Content/primary` | `Action/secondary/hover` | `action-label` |
| `Content/primary` | `Action/secondary/pressed` | `action-label` |
| `Content/primary` | `Surface/layer-1` | `body-text` |
| `Content/primary` | `Surface/layer-2` | `body-text` |
| `Content/primary` | `Surface/input` | `body-text` |
| `Content/primary` | `Surface/selected` | `body-text` |
| `Content/inverse` | `Surface/inverse` | `body-text` |
| `Border/strong` | `Surface/page` | `ui-component` |
| `Border/control` | `Surface/page` | `control-boundary` |
| `Border/control-hover` | `Surface/page` | `control-boundary` |
| `Border/focus` | `Surface/page` | `ui-component` |
| `Status/critical/border-strong` | `Surface/input` | `ui-component` |
| `Status/warning/border-strong` | `Surface/input` | `ui-component` |
| `Status/success/border-strong` | `Surface/input` | `ui-component` |
| `Status/info/border-strong` | `Surface/input` | `ui-component` |
| `Status/critical/content` | `Status/critical/surface` | `large-text` |
| `Status/warning/content` | `Status/warning/surface` | `large-text` |
| `Status/success/content` | `Status/success/surface` | `large-text` |
| `Status/info/content` | `Status/info/surface` | `large-text` |
| `Status/critical/on-solid` | `Status/critical/surface-solid` | `action-label` |
| `Status/success/on-solid` | `Status/success/surface-solid` | `action-label` |
| `Status/warning/on-solid` | `Status/warning/surface-solid` | `action-label` |
| `Status/info/on-solid` | `Status/info/surface-solid` | `action-label` |
