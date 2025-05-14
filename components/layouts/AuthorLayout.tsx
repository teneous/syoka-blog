import { ReactNode } from 'react'
import Image from '@/components/mdx/Image'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, motor, company, email, twitter, bluesky, linkedin, github } =
    content

  return (
    <>
      <div className="relative min-h-screen">
        {/* 装饰背景 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-violet-100/10 blur-3xl dark:bg-violet-900/10" />
          <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-emerald-100/10 blur-3xl dark:bg-emerald-900/10" />
        </div>

        <div className="space-y-8">
          <div className="relative space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="relative font-serif text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
              About
              <div className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-violet-500 to-emerald-500" />
            </h1>
          </div>

          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
            {/* 个人信息卡片 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/40 to-white/20 p-6 pt-8 shadow-xl backdrop-blur-sm transition duration-300 hover:shadow-2xl dark:from-gray-800/40 dark:to-gray-800/20">
              {/* 装饰效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.05] to-emerald-500/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-2xl border border-white/10 dark:border-gray-800/10" />

              <div className="relative flex flex-col items-center">
                {avatar && (
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500/20 to-emerald-500/20 blur" />
                    <Image
                      src={avatar}
                      alt="avatar"
                      width={192}
                      height={192}
                      className="relative h-48 w-48 rounded-full border-2 border-white/20 object-cover transition duration-300 group-hover:border-white/40 dark:border-gray-800/20 dark:group-hover:border-gray-800/40"
                    />
                  </div>
                )}
                <h3 className="relative mt-6 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text pb-2 text-2xl font-bold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-400">
                  {name}
                </h3>
                <div className="font-medium text-gray-700 dark:text-gray-300">{occupation}</div>
                <div className="font-medium text-gray-700 dark:text-gray-300">{motor}</div>
                <div className="text-gray-600 dark:text-gray-400">{company}</div>

                <div className="mt-6 flex items-center justify-center space-x-4">
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <SocialIcon kind="mail" href={`mailto:${email}`} />
                  </div>
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <SocialIcon kind="github" href={github} />
                  </div>
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <SocialIcon kind="linkedin" href={linkedin} />
                  </div>
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <SocialIcon kind="x" href={twitter} />
                  </div>
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <SocialIcon kind="bluesky" href={bluesky} />
                  </div>
                </div>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/30 to-white/10 p-8 shadow-xl backdrop-blur-sm xl:col-span-2 dark:from-gray-800/30 dark:to-gray-800/10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] to-emerald-500/[0.02]" />
              <div className="prose dark:prose-invert prose-headings:text-gray-800 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-violet-700 dark:prose-headings:text-gray-100 dark:prose-p:text-gray-200 dark:prose-strong:text-gray-100 dark:prose-a:text-violet-400 relative max-w-none">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
