/* Separator — generated from the Separator catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use sparingly — whitespace is usually sufficient. Add label only for section breaks. */
/* a11y: role="separator". Decorative dividers use aria-hidden="true". */
/* Styles: the default render of the Separator recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type SeparatorProps = {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  children?: ReactNode
}

export function Separator(props: SeparatorProps) {
  return (
    <div
      data-component="Separator"
      style={{
        background: 'var(--color-border-subtle)',
        height: 'var(--stroke-divider)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Separator'}
    </div>
  )
}
