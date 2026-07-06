'use client'

import { useEffect } from 'react'

/**
 * 全局 pointermove 委托:给任意 .glare 元素写入 --mx/--my,
 * 由 CSS 画出跟随鼠标的径向高光。每页只需挂载一次。
 */
export default function GlareField() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const el = target?.closest('.glare') as HTMLElement | null
      if (!el) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      el.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  return null
}
