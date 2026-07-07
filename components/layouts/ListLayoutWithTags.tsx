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
    <div className="mt-16 mb-8 flex items-center justify-between">
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
            className="pipeline-panel group rounded-2xl border border-gray-200 p-7.5 transition-colors duration-300 hover:border-violet-300 dark:border-white/[0.09] dark:hover:border-indigo-400/40"
          >
            <div className="flex items-center gap-4">
              <time
                dateTime={date}
                className="font-mono text-xs font-medium text-violet-600 tabular-nums dark:text-indigo-400"
              >
                {formatDate(date, siteMetadata.locale)}
              </time>
              <div className="flex flex-wrap gap-2">
                {tags?.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>

            <h2 className="mt-3.5 text-xl font-extrabold tracking-tight text-gray-950 dark:text-white">
              <Link href={`/blog/${slug}`} className="decoration-transparent">
                {title}
              </Link>
            </h2>

            <p className="mt-3.5 text-[0.9rem] leading-7 text-gray-600 dark:text-gray-400">
              {summary}
            </p>

            <div className="mt-5">
              <Link
                href={`/blog/${slug}`}
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-indigo-400 dark:hover:text-indigo-300"
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
          </article>
        )
      })}
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
