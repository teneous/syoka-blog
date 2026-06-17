'use client'

import Link from '@/components/common/Link'
import { ArrowRight } from 'lucide-react'
import StudioPipeline from './StudioPipeline'
import { useLanguage } from './useLanguage'

const copy = {
  en: {
    title: 'From business problems to shippable solutions.',
    description:
      'Focused on AI Agent ecosystems, data foundations, system architecture, and multi-end engineering, moving business problems toward solution design, product implementation, and continuous iteration.',
    primary: 'View Works',
    secondary: 'About Focus',
    stats: ['AI Agent', 'Data', 'Architecture', 'Multi-end'],
  },
  zh: {
    title: '从商业问题到可交付方案',
    description:
      '围绕 AI Agent 生态、数据底座、系统架构和多端工程，把商业问题推进到方案设计、产品实现和持续迭代。',
    primary: '查看项目',
    secondary: '了解方向',
    stats: ['AI Agent', '数据底座', '系统架构', '多端工程'],
  },
}

export default function Hero() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl leading-[1.04] font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-[3.35rem] dark:text-white">
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-300">
              {t.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-gray-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                {t.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-950 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-300 dark:hover:bg-gray-900"
              >
                {t.secondary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:justify-self-end">
            {t.stats.map((item) => (
              <div
                key={item}
                className="rounded-md border border-gray-200 px-3 py-2 text-center text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-400"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-9">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-violet-500/20 dark:border-violet-400/20" />
          <StudioPipeline />
        </div>
      </div>
    </section>
  )
}
