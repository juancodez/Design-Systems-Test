/* Button — generated from the Button catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use default for the single most important action on a surface (1–2 per section); secondary/outline/ghost for the rest; destructive for an action that removes data. An icon-only button needs an aria-label. */
/* a11y: Native <button> (or the child with asChild). Disabled sets aria-disabled; loading sets aria-busy. Icon-only buttons (size icon*) need an aria-label. */
/* Styles: the default render of the Button recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type ButtonProps = {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"
  asChild?: boolean
  loading?: boolean
  disabled?: boolean
  children?: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <div
      data-component="Button"
      style={{
        background: 'var(--color-action-primary-default)',
        color: 'var(--color-content-on-action)',
        borderRadius: 'var(--radius-action)',
        height: 'var(--size-control)',
        paddingInline: 'var(--spacing-4)',
        gap: 'var(--spacing-gap-control)',
        fontFamily: 'var(--text-button-font-family)',
        fontSize: 'var(--text-button-font-size)',
        fontWeight: 'var(--text-button-font-weight)',
        lineHeight: 'var(--text-button-line-height)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Button'}
    </div>
  )
}
