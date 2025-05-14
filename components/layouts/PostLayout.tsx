import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import SectionContainer from '@/components/layouts/SectionContainer'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'
import Tag from '@/components/ui/Tag'
import Image from '@/components/mdx/Image'
import PageTitle from '@/components/common/PageTitle'
import Link from '@/components/common/Link'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="relative">
          {/* 装饰背景 */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-violet-100/5 blur-3xl dark:bg-violet-900/5" />
            <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-100/5 blur-3xl dark:bg-emerald-900/5" />
          </div>

          <div className="space-y-8 xl:space-y-12">
            <header>
              <div className="space-y-4 pb-10 text-center">
                {/* 标签 */}
                <div className="flex justify-center gap-2">
                  {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                </div>
                {/* 标题 */}
                <div className="relative space-y-1 pt-6">
                  <PageTitle>{title}</PageTitle>
                  {/* 装饰线条 */}
                  <div className="absolute -bottom-4 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                </div>
                {/* 作者信息 */}
                <dl className="space-y-6 pt-6">
                  <div>
                    <dt className="sr-only">作者</dt>
                    <dd>
                      <ul className="flex items-center justify-center gap-8">
                        {authorDetails.map((author) => (
                          <li key={author.name} className="flex items-center gap-2">
                            {author.avatar && (
                              <Image
                                src={author.avatar}
                                width={38}
                                height={38}
                                alt="avatar"
                                className="h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-800"
                              />
                            )}
                            <dl className="text-sm whitespace-nowrap">
                              <dt className="sr-only">姓名</dt>
                              <dd className="font-medium text-gray-800 dark:text-gray-200">
                                {author.name}
                              </dd>
                              <dt className="sr-only">Twitter</dt>
                              <dd>
                                {author.twitter && (
                                  <Link
                                    href={author.twitter}
                                    className="text-violet-700 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                                  >
                                    {author.twitter.replace('https://twitter.com/', '@')}
                                  </Link>
                                )}
                              </dd>
                            </dl>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">发布于</dt>
                    <dd className="text-base font-medium text-gray-700 dark:text-gray-300">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </div>
                </dl>
              </div>
            </header>

            <div className="prose dark:prose-dark prose-headings:text-gray-800 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-violet-700 dark:prose-headings:text-gray-100 dark:prose-p:text-gray-200 dark:prose-strong:text-gray-100 dark:prose-a:text-violet-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-li:text-gray-700 dark:prose-li:text-gray-200 max-w-none pt-10 pb-8">
              {children}
            </div>

            {/* 导航链接 */}
            {(next || prev) && (
              <footer>
                <div className="flex justify-between gap-4 rounded-2xl border border-gray-200/20 bg-white/5 p-6 text-sm backdrop-blur-sm dark:border-gray-800/20 dark:bg-gray-800/5">
                  {prev && prev.path && (
                    <div>
                      <h2 className="mb-1 text-xs tracking-wide text-gray-600 uppercase dark:text-gray-300">
                        上一篇
                      </h2>
                      <Link
                        href={`/${basePath}/${prev.path}`}
                        className="text-violet-700 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && next.path && (
                    <div className="text-right">
                      <h2 className="mb-1 text-xs tracking-wide text-gray-600 uppercase dark:text-gray-300">
                        下一篇
                      </h2>
                      <Link
                        href={`/${basePath}/${next.path}`}
                        className="text-violet-700 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            )}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
