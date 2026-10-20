/* Avatar — generated from the Avatar catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use consistently at the same size in a given context. Stack for teams. */
/* a11y: img alt generated from name. Decorative images use alt="". */
/* Styles: the default render of the Avatar recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type AvatarProps = {
  size?: "default" | "sm" | "lg"
  AvatarFallback?: ReactNode
  children?: ReactNode
}

export function Avatar(props: AvatarProps) {
  return (
    <div
      data-component="Avatar"
      style={{
        borderRadius: 'var(--radius-pill)',
        height: 'var(--size-sm)',
        width: 'var(--size-sm)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Avatar'}
    </div>
  )
}
