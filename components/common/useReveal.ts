'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver 一次性触发的滚动渐显。返回值直接展开到目标元素上:
 * <div ref={reveal.ref} className={`... ${reveal.className}`} style={reveal.style}>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    className: `reveal-init${visible ? ' is-visible' : ''}`,
    style: delayMs ? { transitionDelay: `${delayMs}ms` } : undefined,
  }
}
