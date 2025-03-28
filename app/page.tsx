import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'

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
              Latest Posts
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Explore my latest thoughts and insights
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <article
                key={post.slug}
                className="group relative transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-gray-600 dark:text-gray-400">{post.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
