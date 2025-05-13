import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <div className="relative min-h-screen">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-violet-100/20 blur-3xl dark:bg-violet-900/20" />
        <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-100/20 blur-3xl dark:bg-emerald-900/20" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative space-y-12">
          {/* 页面标题区域 */}
          <div className="relative pt-24 pb-8 text-center">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                Thinking Deeply
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Technology, Innovation and Beyond
              </p>
            </div>
            {/* 装饰线条 */}
            <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>

          {/* 文章列表 */}
          <div className="relative">
            <ListLayout
              posts={posts}
              initialDisplayPosts={initialDisplayPosts}
              pagination={pagination}
              title=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
