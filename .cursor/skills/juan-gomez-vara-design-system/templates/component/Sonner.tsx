/* Sonner — generated from the Sonner catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Mount <Toaster /> once; call toast() / toast.success() … from anywhere. Use for transient confirmations, not for errors the user must act on (use Alert). */
/* a11y: Sonner renders an aria-live region; toasts pause on hover and are dismissable with Escape. */
/* Styles: the default render of the Sonner recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type SonnerProps = {
  description?: ReactNode
  action?: unknown // { label, onClick }
  children?: ReactNode
}

export function Sonner(props: SonnerProps) {
  return (
    <div
      data-component="Sonner"
      style={{
        background: 'var(--color-surface-layer-1)',
        color: 'var(--color-content-primary)',
        borderColor: 'var(--color-border-default)',
        borderStyle: 'solid',
        borderWidth: 'var(--stroke-control)',
        borderRadius: 'var(--radius-container)',
        paddingInline: 'var(--spacing-4)',
        paddingBlock: 'var(--spacing-4)',
        gap: 'var(--spacing-1_5)',
        boxShadow: 'var(--shadow-lg)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Sonner'}
    </div>
  )
}
