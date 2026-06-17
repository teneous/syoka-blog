import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/components/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Notes' })

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft)))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="pt-12 pb-4">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-gray-950 md:text-5xl dark:text-white">
              Notes
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
              Public thinking on AI systems, architecture, data platforms, product engineering,
              creative workflows, and team delivery.
            </p>
          </div>

          <div>
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
