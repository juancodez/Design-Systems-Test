/* Tooltip — generated from the Tooltip catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Only use for icon-only buttons or truncated text (an info ⓘ next to a label is a ghost icon Button as the trigger). Never put interactive content inside. */
/* a11y: role="tooltip" linked via aria-describedby. Appears on focus and hover. */
/* Styles: the default render of the Tooltip recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type TooltipProps = {
  TooltipProvider?: unknown // component
  children?: ReactNode
}

export function Tooltip(props: TooltipProps) {
  return (
    <div
      data-component="Tooltip"
      style={{
        background: 'var(--color-surface-inverse)',
        color: 'var(--color-content-inverse)',
        borderRadius: 'var(--radius-action)',
        paddingInline: 'var(--spacing-2_5)',
        paddingBlock: 'var(--spacing-1_5)',
        fontFamily: 'var(--text-caption-font-family)',
        fontSize: 'var(--text-caption-font-size)',
        fontWeight: 'var(--text-caption-font-weight)',
        lineHeight: 'var(--text-caption-line-height)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Tooltip'}
    </div>
  )
}
