import { ReactNode } from 'react'
import Image from '@/components/mdx/Image'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import LocalizedText from '@/components/common/LocalizedText'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, motor, email, twitter, bluesky, linkedin, github } = content

  return (
    <div className="min-h-screen">
      <div className="space-y-10 pt-12 pb-20">
        <div>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-gray-950 md:text-5xl dark:text-white">
            <LocalizedText en="About" zh="关于" />
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            <LocalizedText
              en="Notes on technical judgment, project practice, and long-term observations around AI agents, system architecture, and data platforms."
              zh="记录 AI Agent、系统架构、数据平台方向的技术判断、项目实践和长期观察。"
            />
          </p>
        </div>

        <div className="grid items-start gap-8 xl:grid-cols-[320px_1fr]">
          <aside className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/60">
            <div className="flex flex-col items-center">
              {avatar && (
                <Image
                  src={avatar}
                  alt="avatar"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full border border-gray-200 object-cover dark:border-gray-800"
                />
              )}
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                {name}
              </h2>
              <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
                {motor}
              </p>

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="mt-6 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-950 transition hover:border-gray-950 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:hover:border-gray-400"
                >
                  {email}
                </a>
              )}

              <div className="mt-6 flex items-center justify-center space-x-4">
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="x" href={twitter} />
                <SocialIcon kind="bluesky" href={bluesky} />
              </div>
            </div>
          </aside>

          <section className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="prose dark:prose-invert prose-headings:text-gray-950 prose-p:text-gray-700 prose-strong:text-gray-950 prose-a:text-violet-700 dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-violet-400 max-w-none">
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
