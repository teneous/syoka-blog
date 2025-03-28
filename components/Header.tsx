import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { FiTrendingUp } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="relative z-50 border-b border-gray-200/10 bg-white/60 py-6 backdrop-blur-sm dark:border-gray-800/10 dark:bg-gray-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 标题 */}
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="text-lg font-medium tracking-tight text-gray-900 transition-colors duration-200 hover:text-violet-600 dark:text-gray-100 dark:hover:text-violet-400">
              {typeof siteMetadata.headerTitle === 'string' ? siteMetadata.headerTitle : null}
            </div>
          </Link>

          {/* 导航链接和工具按钮 */}
          <div className="flex items-center gap-2 sm:gap-6">
            <nav className="hidden items-center space-x-8 sm:flex">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                  >
                    {link.title}
                  </Link>
                ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/*<SearchButton />*/}
              <ThemeSwitch />
              <a
                href="https://us.umami.is/websites/a708639c-b4bd-4454-9bc3-b4142536a6be"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 transition-colors duration-200 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                aria-label="Analytics"
              >
                <FiTrendingUp className="h-5 w-5" />
              </a>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
