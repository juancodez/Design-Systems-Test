/* Select — generated from the Select catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use when options exceed 4 items. For fewer options, prefer Radio or ButtonGroup. */
/* a11y: Built on Radix Select. Keyboard navigable. Options have role="option". */
/* Styles: the default render of the Select recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type SelectProps = {
  Select?: unknown // component
  children?: ReactNode
}

export function Select(props: SelectProps) {
  return (
    <div
      data-component="Select"
      style={{
        background: 'var(--color-surface-input)',
        color: 'var(--color-content-primary)',
        borderColor: 'var(--color-border-control)',
        borderStyle: 'solid',
        borderWidth: 'var(--stroke-control)',
        borderRadius: 'var(--radius-action)',
        height: 'var(--size-control)',
        paddingInline: 'var(--spacing-inset-control)',
        gap: 'var(--spacing-gap-control)',
        fontFamily: 'var(--text-placeholder-font-family)',
        fontSize: 'var(--text-placeholder-font-size)',
        fontWeight: 'var(--text-placeholder-font-weight)',
        lineHeight: 'var(--text-placeholder-line-height)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Select'}
    </div>
  )
}
