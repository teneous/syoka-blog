'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

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
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  console.log(pathname)
  console.log(basePath)
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 pb-12">
          <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h1>
        </div>
        <div className="space-y-12">
          {displayPosts.map((post) => {
            const { path, date, title, tags } = post
            return (
              <article key={path} className="group">
                <Link href={`/${path}`}>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={date} suppressHydrationWarning>
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      {tags?.length > 0 && (
                        <>
                          <span className="mx-2">·</span>
                          <span>{tags[0]}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-medium leading-7 text-gray-900 dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                      {title}
                    </h2>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
        {pagination && pagination.totalPages > 1 && (
          <div className="py-12">
            <nav className="flex justify-between text-sm">
              {pagination.currentPage > 1 ? (
                <Link
                  href={pagination.currentPage - 1 === 1 ? '/blog' : `/blog/page/${pagination.currentPage - 1}`}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  ← 上一页
                </Link>
              ) : (
                <div />
              )}
              {pagination.currentPage < pagination.totalPages && (
                <Link
                  href={`/blog/page/${pagination.currentPage + 1}`}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  下一页 →
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </>
  )
}
