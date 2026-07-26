import { createElement, type ReactNode } from 'react'

export default function NavLinkContent({
  children,
  badge,
}: {
  children: ReactNode
  badge?: string
}) {
  return createElement(
    'span',
    { className: 'inline-flex items-start gap-1' },
    children,
    badge
      ? createElement(
          'span',
          {
            className:
              '-mt-1 rounded-full bg-violet-600 px-1.5 py-0.5 text-[8px] leading-none font-bold tracking-wide text-white shadow-sm ring-1 ring-violet-500/20 dark:bg-violet-500',
            'aria-hidden': true,
          },
          badge
        )
      : null
  )
}
