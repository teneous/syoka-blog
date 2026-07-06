'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from '@/components/common/Link'
import { useLanguage } from '@/components/common/useLanguage'
import { useReveal } from '@/components/common/useReveal'
import siteMetadata from '@/data/siteMetadata'

const copy = {
  en: {
    kicker: 'Contact',
    titleLine1: 'Interested in these directions?',
    titleLine2: "Let's talk.",
    description: "Any product idea or business pain point — write me an email and let's talk.",
    hint: 'Write me',
  },
  zh: {
    kicker: 'Contact',
    titleLine1: '对这些方向感兴趣？',
    titleLine2: '随时来聊。',
    description: '有任何产品想法，或者商业痛点，欢迎写信给我，一起交流。',
    hint: '写封邮件',
  },
}

export default function ContactCTA() {
  const { language } = useLanguage()
  const t = copy[language]
  const reveal = useReveal<HTMLDivElement>()

  return (
    <div className="relative mt-35 overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_24%_112%,rgba(124,58,237,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_50%_70%_at_24%_112%,rgba(99,102,241,0.16),transparent_70%)]"
      />

      <div
        ref={reveal.ref}
        className={`${reveal.className} relative z-10 mx-auto max-w-7xl px-4 py-27.5 sm:px-6 lg:px-8 lg:py-30`}
        style={reveal.style}
      >
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.64rem] font-medium tracking-[0.3em] text-violet-600 uppercase dark:text-indigo-400">
            {t.kicker}
          </span>
          <h2 className="font-display mt-5.5 text-[2rem] leading-[1.35] font-bold text-balance text-gray-950 sm:text-5xl dark:text-white">
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h2>
          <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-[2] text-gray-600 dark:text-gray-300">
            {t.description}
          </p>

          <Link
            href={`mailto:${siteMetadata.email}`}
            className="group relative mt-11 inline-flex items-baseline gap-3 pb-2.5"
          >
            <span className="self-center font-mono text-[0.7rem] tracking-[0.2em] text-gray-400 uppercase dark:text-gray-500">
              {t.hint}
            </span>
            <span className="font-mono text-[1.15rem] text-gray-950 sm:text-2xl dark:text-white">
              {siteMetadata.email}
            </span>
            <ArrowUpRight className="h-4.5 w-4.5 self-center text-gray-400 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-600 dark:text-gray-500 dark:group-hover:text-indigo-400" />
            <span className="absolute inset-x-0 bottom-0 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-violet-600 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 dark:bg-indigo-400" />
          </Link>
        </div>
      </div>
    </div>
  )
}
