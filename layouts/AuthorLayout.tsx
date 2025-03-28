import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5">
          {/* <h1 
            className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100 animate-fade-in-down"
          > */}
          <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="animate-fade-in-up flex flex-col items-center space-x-2 rounded-xl bg-white/30 p-6 pt-8 shadow-lg backdrop-blur-sm dark:bg-gray-800/30">
            {avatar && (
              <div className="relative">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                />
              </div>
            )}
            <h3 className="from-primary-500 animate-fade-in bg-gradient-to-r to-purple-500 bg-clip-text pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight text-transparent">
              {name}
            </h3>
            <div className="animate-fade-in font-medium text-gray-500 dark:text-gray-400">
              {occupation}
            </div>
            <div className="animate-fade-in text-gray-500 dark:text-gray-400">{company}</div>
            <div className="animate-fade-in-up flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="prose dark:prose-invert animate-fade-in-right max-w-none rounded-xl bg-white/10 p-6 pt-8 pb-8 backdrop-blur-sm xl:col-span-2 dark:bg-gray-800/10">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
