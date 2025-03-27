import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col items-center">
          <div className="flex space-x-6">
            <a
              href={`mailto:${siteMetadata.email}`}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Email</span>
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href={siteMetadata.github}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={siteMetadata.linkedin}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-4">
            <Link 
              href="https://beian.miit.gov.cn/" 
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors font-medium tracking-wide"
            >
              蜀ICP备2025127102号-1
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
