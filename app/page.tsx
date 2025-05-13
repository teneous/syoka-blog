import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/common/Hero'
import Link from '@/components/common/Link'
import TechStack from '@/components/common/TechStack'
import { ArrowRight } from 'lucide-react'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <Hero />
      </div>

      <div className="relative">
        <div className="absolute -top-24 left-0 h-24 w-full bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"></div>
        <TechStack />
      </div>

      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400">
              最新文章
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">探索我最新的想法和见解</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative transform overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 dark:bg-gray-800/50 dark:hover:bg-gray-800/70"
              >
                <div className="absolute inset-0 rounded-2xl border border-gray-200/50 dark:border-gray-700/50"></div>
                <div className="relative p-6">
                  <div className="mb-4">
                    <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-gray-600 dark:text-gray-400">{post.summary}</p>
                  <div className="mt-4 flex items-center text-sm text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400">
                    <span>阅读更多</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-purple-50/0 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-900/0 dark:to-purple-900/0"></div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white transition-all hover:scale-105 hover:shadow-lg dark:from-blue-500 dark:to-purple-500"
            >
              <span>查看所有文章</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
