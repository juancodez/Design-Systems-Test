/* Badge — generated from the Badge catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use to label or count (a plan, a status, "+5 more"). For presence (online / away), use Status Badge. Never as a button. */
/* a11y: Static text — not focusable. Colour is never the only signal: the label says what it means. */
/* Styles: the default render of the Badge recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type BadgeProps = {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  asChild?: boolean
  children?: ReactNode
}

export function Badge(props: BadgeProps) {
  return (
    <div
      data-component="Badge"
      style={{
        background: 'var(--color-action-primary-default)',
        color: 'var(--color-content-on-action)',
        borderRadius: 'var(--radius-pill)',
        paddingInline: 'var(--spacing-2)',
        paddingBlock: 'var(--spacing-0_5)',
        gap: 'var(--spacing-1)',
        fontFamily: 'var(--text-caption-font-family)',
        fontSize: 'var(--text-caption-font-size)',
        fontWeight: 'var(--text-caption-font-weight)',
        lineHeight: 'var(--text-caption-line-height)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Badge'}
    </div>
  )
}
