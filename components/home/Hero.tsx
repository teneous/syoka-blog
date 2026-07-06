'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/common/Link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/common/useLanguage'

const copy = {
  en: {
    eyebrow: 'Agent · Architecture · Infra · Data',
    dim: 'From business pain points to',
    bright: 'shippable solutions.',
    description:
      "I'm Syoka, focused long-term on agents, system architecture, AI infrastructure, and data engineering. I dig deep into business contexts and turn complex problems into simple, reliable products that keep evolving.",
    primary: 'View Works',
    secondary: 'About Focus',
    sideLabel: '10 Years in Engineering · Since 2016',
    indexTitle: 'Index / Focus',
    indexRows: [
      { k: 'App', v: 'Agent' },
      { k: 'Arch', v: 'System Architecture' },
      { k: 'Infra', v: 'Infra' },
      { k: 'Data', v: 'Data Engineering' },
    ],
    scroll: 'Scroll',
  },
  zh: {
    eyebrow: 'Agent · Architecture · Infra · Data',
    dim: '从业务痛点，',
    bright: '到可交付的解决方案',
    description:
      '我是 Syoka，长期深耕 Agent、系统架构、基建、数据工程。喜欢深入业务场景，把复杂问题做成简洁、可靠、持续演进的产品。',
    primary: '查看项目',
    secondary: '了解方向',
    sideLabel: '工程师生涯 10 年 · Since 2016',
    indexTitle: 'Index / 方向',
    indexRows: [
      { k: 'App', v: 'Agent' },
      { k: 'Arch', v: '系统架构' },
      { k: 'Infra', v: '基建' },
      { k: 'Data', v: '数据工程' },
    ],
    scroll: 'Scroll',
  },
}

export default function Hero() {
  const { language } = useLanguage()
  const t = copy[language]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setMounted(true))
      return () => cancelAnimationFrame(raf2)
    })
    return () => cancelAnimationFrame(raf1)
  }, [])

  const rise = mounted ? 'hero-rise is-in' : 'hero-rise'

  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-white py-16 sm:py-20 lg:min-h-[680px] lg:py-24 dark:bg-gray-950">
      {/* 氛围光斑:径向渐变代替 filter:blur(),零渲染开销 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-[-20%] z-0">
        <div
          className="hero-blob-a absolute h-[420px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.13),transparent_72%)] dark:bg-[radial-gradient(closest-side,rgba(99,102,241,0.3),transparent_72%)]"
          style={{ left: '8%', top: '-12%' }}
        />
        <div
          className="hero-blob-b absolute h-[340px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(6,182,212,0.07),transparent_72%)] dark:bg-[radial-gradient(closest-side,rgba(34,211,238,0.1),transparent_72%)]"
          style={{ left: '58%', top: '18%' }}
        />
      </div>

      {/* 制图定位符"+",左上象限渐隐 */}
      <div aria-hidden="true" className="hero-marks pointer-events-none absolute inset-0 z-0" />

      {/* 竖排侧签 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-6 z-1 hidden -translate-y-1/2 items-center gap-3.5 [writing-mode:vertical-rl] xl:flex"
      >
        <span className="h-18 w-px bg-gradient-to-b from-transparent to-gray-400 opacity-50 dark:to-gray-600" />
        <span className="font-mono text-[0.62rem] tracking-[0.52em] text-gray-400 uppercase opacity-75 dark:text-gray-600">
          {t.sideLabel}
        </span>
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[7.2fr_2.8fr] lg:items-end lg:gap-16 lg:px-8 xl:pr-24">
        <div>
          <span
            className={`${rise} inline-flex flex-wrap items-center gap-2.5 font-mono text-xs font-medium tracking-[0.3em] text-gray-500 uppercase dark:text-gray-500`}
            style={{ transitionDelay: '50ms' }}
          >
            <span className="hero-pulse h-1.75 w-1.75 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.8)] dark:bg-indigo-400 dark:shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
            {t.eyebrow}
          </span>

          <h1 className="mt-8">
            <span
              className={`${rise} block text-xl font-medium text-gray-400 sm:text-2xl dark:text-gray-600`}
              style={{ transitionDelay: '180ms' }}
            >
              {t.dim}
            </span>
            <span
              className={`${rise} font-display mt-3.5 block bg-gradient-to-b from-gray-950 to-gray-600 bg-clip-text pb-2 text-[2.7rem] leading-[1.16] font-bold text-balance text-transparent sm:text-6xl lg:text-[4.5rem] dark:from-white dark:to-gray-400`}
              style={{ transitionDelay: '340ms' }}
            >
              {t.bright}
            </span>
          </h1>

          <p
            className={`${rise} mt-6.5 max-w-[34em] text-base leading-[2] text-gray-600 dark:text-gray-300`}
            style={{ transitionDelay: '500ms' }}
          >
            {t.description}
          </p>

          <div
            className={`${rise} mt-10 flex flex-wrap gap-3.5`}
            style={{ transitionDelay: '720ms' }}
          >
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gray-950 px-6.5 py-3.25 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(11,15,25,0.45)] transition hover:-translate-y-0.5 dark:bg-white dark:text-gray-950 dark:shadow-[0_0_32px_rgba(129,140,248,0.28)]"
            >
              {t.primary}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6.5 py-3.25 text-sm font-medium text-gray-900 transition hover:-translate-y-0.5 hover:border-gray-400 dark:border-gray-700 dark:bg-white/[0.045] dark:text-gray-100 dark:hover:border-gray-500"
            >
              {t.secondary}
            </Link>
          </div>
        </div>

        <aside
          className={`${rise} flex flex-col pb-1.5`}
          style={{ transitionDelay: '720ms' }}
          aria-label={t.indexTitle}
        >
          <p className="mb-1 border-b border-gray-200 pb-3.5 font-mono text-[0.62rem] tracking-[0.3em] text-gray-400 uppercase dark:border-gray-800 dark:text-gray-500">
            {t.indexTitle}
          </p>
          {t.indexRows.map((row) => (
            <div
              key={row.k}
              className="flex items-baseline justify-between gap-3.5 border-b border-gray-100 py-3.25 text-sm dark:border-gray-800/60"
            >
              <span className="font-mono text-[0.66rem] tracking-[0.14em] text-gray-400 uppercase dark:text-gray-500">
                {row.k}
              </span>
              <span className="font-medium text-gray-600 dark:text-gray-300">{row.v}</span>
            </div>
          ))}
        </aside>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-4 z-1 hidden items-center gap-3 font-mono text-[0.6rem] tracking-[0.3em] text-gray-400 uppercase sm:left-6 lg:flex dark:text-gray-500"
      >
        {t.scroll}
        <span className="scroll-hint-line h-px w-11 bg-gradient-to-r from-gray-400 to-transparent dark:from-gray-500" />
      </span>
    </section>
  )
}
