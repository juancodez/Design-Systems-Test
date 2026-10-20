/* Checkbox — generated from the Checkbox catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use for independent on/off choices and multi-select lists. For an instant setting, use Switch. */
/* a11y: Radix checkbox (role="checkbox", Space toggles). Associate a FieldLabel with htmlFor. */
/* Styles: the default render of the Checkbox recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type CheckboxProps = {
  onCheckedChange?: unknown // (checked) => void
  disabled?: boolean
  children?: ReactNode
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div
      data-component="Checkbox"
      style={{
        background: 'var(--color-action-primary-default)',
        borderColor: 'var(--color-action-primary-default)',
        borderStyle: 'solid',
        borderWidth: 'var(--stroke-control)',
        borderRadius: 'var(--radius-control)',
        height: 'var(--selector-control)',
        width: 'var(--selector-control)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Checkbox'}
    </div>
  )
}
