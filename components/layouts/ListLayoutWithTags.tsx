'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/common/Link'
import Tag from '@/components/ui/Tag'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="mt-16 flex items-center justify-between">
      <div className="flex-1">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </Link>
        ) : (
          <span className="text-sm text-gray-400 dark:text-gray-600">Previous</span>
        )}
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex-1 text-right">
        {nextPage ? (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Next
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <span className="text-sm text-gray-400 dark:text-gray-600">Next</span>
        )}
      </div>
    </div>
  )
}

export default function ListLayout({
  posts,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="space-y-16">
      {!displayPosts.length && 'No posts found.'}
      {displayPosts.map((post) => {
        const { slug, date, title, summary, tags } = post
        return (
          <article
            key={slug}
            className="group relative rounded-2xl bg-white/30 p-6 transition-all hover:bg-white/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/50"
          >
            {/* 装饰边框 */}
            <div className="absolute inset-0 rounded-2xl border border-gray-200/50 dark:border-gray-700/50" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-violet-100/20 opacity-0 transition-opacity group-hover:opacity-100 dark:to-violet-900/20" />

            <div className="relative space-y-5">
              {/* 日期和标签 */}
              <div className="flex items-center gap-4 text-sm">
                <time dateTime={date} className="font-medium text-violet-600 dark:text-violet-400">
                  {formatDate(date, siteMetadata.locale)}
                </time>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                </div>
              </div>

              {/* 标题 */}
              <h2 className="font-serif text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                <Link
                  href={`/blog/${slug}`}
                  className="decoration-violet-500/30 hover:decoration-violet-500/50 dark:decoration-violet-400/30 dark:hover:decoration-violet-400/50"
                >
                  {title}
                </Link>
              </h2>

              {/* 摘要 */}
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">{summary}</p>

              {/* 阅读更多 */}
              <div className="pt-2">
                <Link
                  href={`/blog/${slug}`}
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                  aria-label={`Read "${title}"`}
                >
                  Read more
                  <svg
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        )
      })}
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
