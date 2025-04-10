'use client'

import Link from '@/components/common/Link'
import { motion } from 'framer-motion'
import { Highlight, themes } from 'prism-react-renderer'
import { TypeAnimation } from 'react-type-animation'
import { FiHome } from 'react-icons/fi'

const codeString = `// 404.js
async function findPage(path) {
  try {
    // Looking for the requested page
    const page = await fetch(\`/api/pages/\${path}\`)
    return await page.json()
  } catch (error) {
    console.error('Page lost in the digital universe...')
    return { status: 404, message: 'Page not found' }
  }
}

// Don't worry, we'll take you back home 👍`

const CodeWindow = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl bg-[#011627] shadow-2xl">
    <div className="flex h-8 items-center bg-gray-800/50 px-4">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex flex-1 justify-center">
        <span className="text-xs text-gray-400">not-found.js</span>
      </div>
    </div>
    {children}
  </div>
)

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center py-12">
      {/* Background animation effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-purple-300 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-yellow-300 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 mix-blend-multiply blur-xl filter" />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-6xl font-bold text-transparent md:text-8xl dark:from-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.h1>

          <motion.div
            className="mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'Page not found...',
                2000,
                "But don't worry, we'll take you back home",
                2000,
              ]}
              wrapper="div"
              speed={20}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CodeWindow>
              <Highlight theme={themes.nightOwl} code={codeString} language="javascript">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className={`${className} p-6 text-left text-[15px] leading-7`}
                    style={{ ...style, background: 'transparent', tabSize: 4 }}
                  >
                    {tokens.map((line, i) => (
                      <div
                        key={i}
                        {...getLineProps({ line })}
                        style={{ minHeight: '1.5rem', display: 'flex' }}
                      >
                        <span style={{ whiteSpace: 'pre-wrap' }}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </span>
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </CodeWindow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg border border-transparent bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              <FiHome className="h-5 w-5 transition-transform group-hover:-rotate-12" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
