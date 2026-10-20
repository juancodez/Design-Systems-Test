/* Tabs — generated from the Tabs catalogue entry. Bindings are semantic. Do not replace with hex/px. */
/* Use when content is parallel, not sequential. Limit to 2–7 tabs visible at once. */
/* a11y: ARIA tabs pattern: role="tablist", role="tab", role="tabpanel". Arrow key navigation. */
/* Styles: the default render of the Tabs recipe (root part). Every variant and state, part by part, is in componentRecipes (tokens.json). */

import type { ReactNode } from 'react'

export type TabsProps = {
  TabsTrigger?: unknown // component
  children?: ReactNode
}

export function Tabs(props: TabsProps) {
  return (
    <div
      data-component="Tabs"
      style={{
        background: 'var(--color-surface-layer-2)',
        borderRadius: 'var(--radius-action)',
        paddingInline: 'var(--spacing-1)',
        paddingBlock: 'var(--spacing-1)',
        gap: 'var(--spacing-0_5)',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Implement using skills/code/SKILL.md. Keep the var() bindings. */}
      {props.children ?? 'Tabs'}
    </div>
  )
}
