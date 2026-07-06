import Link from '@/components/common/Link'
import siteMetadata from '@/data/siteMetadata'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-500">
            Syoka <span className="text-violet-600 dark:text-indigo-400">Studio</span>
          </span>

          <div className="flex items-center gap-5">
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="text-gray-400 transition-colors hover:text-violet-600 dark:text-gray-500 dark:hover:text-indigo-400"
            >
              <span className="sr-only">Email</span>
              <FiMail className="h-4 w-4" />
            </Link>
            <Link
              href={`${siteMetadata.github}`}
              className="text-gray-400 transition-colors hover:text-violet-600 dark:text-gray-500 dark:hover:text-indigo-400"
            >
              <span className="sr-only">GitHub</span>
              <FiGithub className="h-4 w-4" />
            </Link>
            <Link
              href={`${siteMetadata.linkedin}`}
              className="text-gray-400 transition-colors hover:text-violet-600 dark:text-gray-500 dark:hover:text-indigo-400"
            >
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Link
          href="https://beian.miit.gov.cn/"
          className="mt-3 inline-block font-mono text-xs tracking-wide text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          蜀ICP备2025127102号-1
        </Link>
      </div>
    </footer>
  )
}
