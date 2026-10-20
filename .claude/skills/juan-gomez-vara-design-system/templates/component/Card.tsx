/* Card — generated from the Card catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use consistent padding within a layout. Avoid nesting cards more than 1 level. */
/* a11y: Clickable cards use role="button" or wrapping <a>. Focus ring visible. */
/* Styles: the default render of the Card recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type CardProps = {
  size?: "default" | "sm"
  CardAction?: unknown // component
  children?: ReactNode
}

export function Card(props: CardProps) {
  return (
    <div
      data-component="Card"
      style={{
        background: 'var(--color-surface-layer-1)',
        color: 'var(--color-content-primary)',
        borderColor: 'var(--color-border-subtle)',
        borderStyle: 'solid',
        borderWidth: 'var(--stroke-control)',
        borderRadius: 'var(--radius-container)',
        paddingInline: 'var(--spacing-inset-surface)',
        paddingBlock: 'var(--spacing-inset-surface)',
        gap: 'var(--spacing-inset-surface)',
        boxShadow: 'var(--shadow-xs)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Card'}
    </div>
  )
}
