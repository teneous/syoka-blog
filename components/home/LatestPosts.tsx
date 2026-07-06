'use client'

import { formatDate } from 'pliny/utils/formatDate'
import { ArrowRight } from 'lucide-react'
import Link from '@/components/common/Link'
import { useLanguage } from '@/components/common/useLanguage'
import { useReveal } from '@/components/common/useReveal'

export type LatestPost = {
  slug: string
  date: string
  title: string
  tags: string[]
}

const copy = {
  en: {
    kicker: 'Writing',
    title: 'Latest Posts',
    subtitle: 'Notes distilled from engineering practice.',
    allPosts: 'All posts →',
    locale: 'en-US',
  },
  zh: {
    kicker: 'Writing',
    title: '最新文章',
    subtitle: '工程实践里沉淀下来的思考与方法。',
    allPosts: '全部文章 →',
    locale: 'zh-CN',
  },
}

export default function LatestPosts({ posts }: { posts: LatestPost[] }) {
  const { language } = useLanguage()
  const t = copy[language]
  const headReveal = useReveal<HTMLDivElement>()
  const listReveal = useReveal<HTMLDivElement>()

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-35 sm:px-6 lg:px-8">
      <span
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-px w-[calc(100%-3.5rem)] max-w-[1064px] -translate-x-1/2 bg-gradient-to-r from-gray-900/16 via-gray-900/5 to-transparent dark:from-white/20 dark:via-white/6"
      />

      <div className="grid grid-cols-1 items-start gap-18 lg:grid-cols-[3.4fr_6.6fr]">
        <div ref={headReveal.ref} className={headReveal.className} style={headReveal.style}>
          <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-[0.64rem] font-medium tracking-[0.3em] text-violet-600 uppercase dark:text-indigo-400">
            {t.kicker}
          </span>
          <h2 className="font-display text-[1.8rem] leading-[1.3] font-bold text-balance text-gray-950 sm:text-4xl dark:text-white">
            {t.title}
          </h2>
          <p className="mt-3.5 text-[0.92rem] leading-[1.9] text-gray-400 dark:text-gray-500">
            {t.subtitle}
          </p>
          <Link
            href="/blog"
            className="mt-6.5 inline-block text-sm font-medium text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            {t.allPosts}
          </Link>
        </div>

        <div
          ref={listReveal.ref}
          className={`${listReveal.className} flex flex-col`}
          style={listReveal.style}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 items-baseline gap-1.5 border-t border-gray-100 py-5.5 last:border-b sm:grid-cols-[104px_1fr_20px] sm:gap-5 dark:border-gray-800/60"
            >
              <time
                dateTime={post.date}
                className="font-mono text-xs text-gray-400 tabular-nums dark:text-gray-500"
              >
                {formatDate(post.date, t.locale)}
              </time>
              <div>
                <h3 className="text-base leading-[1.65] font-medium text-gray-950 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-violet-600 dark:text-gray-100 dark:group-hover:text-indigo-400">
                  {post.title}
                </h3>
                <span className="mt-1.5 block font-mono text-xs text-gray-400 dark:text-gray-500">
                  {post.tags?.join(' · ')}
                </span>
              </div>
              <ArrowRight className="hidden h-3.5 w-3.5 -translate-x-1.5 self-center text-gray-400 opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:text-violet-600 group-hover:opacity-100 sm:block dark:text-gray-500 dark:group-hover:text-indigo-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
