import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/home/Hero'
import Pipeline from '@/components/home/Pipeline'
import LatestPosts from '@/components/home/LatestPosts'
import ContactCTA from '@/components/home/ContactCTA'

export default async function Page() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((post) => !post.draft))).slice(0, 3)

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Hero />
      <Pipeline />
      <LatestPosts posts={posts} />
      <ContactCTA />
    </main>
  )
}
