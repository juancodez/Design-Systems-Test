/* Input — generated from the Input catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Wrap it in a Field with a FieldLabel. For a prefix, an icon or a button inside the box, use Input Group. Set the type (email, password, search) on the element. */
/* a11y: Native <input>. Pair it with a FieldLabel (htmlFor) or an aria-label; describe errors with FieldError and aria-invalid. */
/* Styles: the default render of the Input recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type InputProps = {
  type?: string
  "aria-invalid"?: boolean
  disabled?: boolean
  children?: ReactNode
}

export function Input(props: InputProps) {
  return (
    <div
      data-component="Input"
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
      {props.children ?? 'Input'}
    </div>
  )
}
