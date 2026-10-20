/* Dialog — generated from the Dialog catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Reserve for destructive confirmations or multi-step flows. Don't use for notifications. */
/* a11y: role="dialog", aria-modal="true". Focus trapped inside. Returns focus on close. */
/* Styles: the default render of the Dialog recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type DialogProps = {
  showCloseButton?: boolean
  children?: ReactNode
}

export function Dialog(props: DialogProps) {
  return (
    <div
      data-component="Dialog"
      style={{
        background: 'var(--color-surface-layer-2)',
        borderColor: 'var(--color-border-subtle)',
        borderStyle: 'solid',
        borderWidth: 'var(--stroke-control)',
        borderRadius: 'var(--radius-overlay)',
        paddingInline: 'var(--spacing-inset-surface)',
        paddingBlock: 'var(--spacing-inset-surface)',
        gap: 'var(--spacing-gap-group)',
        boxShadow: 'var(--shadow-2xl)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Dialog'}
    </div>
  )
}
