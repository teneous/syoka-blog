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
      <div className="space-y-10 pt-15 pb-20">
        <div>
          <span className="mb-3.5 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-gray-500 uppercase dark:text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-indigo-400" />
            <LocalizedText en="About" zh="关于" />
          </span>
          <h1 className="bg-gradient-to-b from-gray-950 to-gray-600 bg-clip-text pb-1 text-4xl leading-tight font-extrabold tracking-tight text-balance text-transparent md:text-5xl dark:from-white dark:to-gray-400">
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
          <aside className="pipeline-panel rounded-2xl border border-gray-200 p-7 dark:border-white/[0.09]">
            <div className="flex flex-col items-center">
              {avatar && (
                <div className="rounded-full bg-[conic-gradient(from_200deg,#7c3aed,#0891b2,#7c3aed)] p-[3px] dark:bg-[conic-gradient(from_200deg,#818cf8,#22d3ee,#818cf8)]">
                  <Image
                    src={avatar}
                    alt="avatar"
                    width={160}
                    height={160}
                    className="h-34 w-34 rounded-full border-[3px] border-gray-50 object-cover dark:border-gray-950"
                  />
                </div>
              )}
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-gray-950 dark:text-white">
                {name}
              </h2>
              <p className="mt-1.5 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
                {motor}
              </p>

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="mt-5.5 rounded-md border border-gray-300 bg-white px-4 py-2 font-mono text-sm font-medium text-gray-950 transition hover:border-violet-400 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:hover:border-indigo-400"
                >
                  {email}
                </a>
              )}

              <div className="mt-5 flex items-center justify-center space-x-4">
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="x" href={twitter} />
                <SocialIcon kind="bluesky" href={bluesky} />
              </div>
            </div>
          </aside>

          <section className="pipeline-panel rounded-2xl border border-gray-200 p-10 dark:border-white/[0.09]">
            <div className="prose dark:prose-invert prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-gray-950 prose-p:text-gray-700 prose-strong:text-gray-950 prose-a:text-violet-600 dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-indigo-400 max-w-none marker:text-violet-600 dark:marker:text-indigo-400">
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
