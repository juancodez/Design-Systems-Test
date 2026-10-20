/* Switch — generated from the Switch catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use for a setting that applies at once. For a choice submitted with a form, use Checkbox. */
/* a11y: Radix switch (role="switch", Space toggles). Associate a FieldLabel with htmlFor. */
/* Styles: the default render of the Switch recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type SwitchProps = {
  size?: "default" | "sm"
  disabled?: boolean
  children?: ReactNode
}

export function Switch(props: SwitchProps) {
  return (
    <div
      data-component="Switch"
      style={{
        background: 'var(--color-action-primary-default)',
        borderRadius: 'var(--radius-pill)',
        height: 'calc(var(--selector-control) + var(--spacing-1))',
        width: 'calc(var(--selector-control) + var(--spacing-5))',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Switch'}
    </div>
  )
}
