import Link from '@/components/common/Link'
import siteMetadata from '@/data/siteMetadata'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Script from 'next/script'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Script
        src="https://eu.umami.is/script.js"
        data-website-id="your-website-id"
        strategy="lazyOnload"
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-8">
          <div className="flex space-x-6">
            <a
              href={`mailto:${siteMetadata.email}`}
              className="text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Email</span>
              <FiMail className="h-5 w-5" />
            </a>
            <a
              href={siteMetadata.github}
              className="text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href={siteMetadata.linkedin}
              className="text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-4">
            <Link
              href="https://beian.miit.gov.cn/"
              className="text-sm font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              蜀ICP备2025127102号-1
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
