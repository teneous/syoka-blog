'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import { Highlight, themes } from 'prism-react-renderer'
import { IconType } from 'react-icons'

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: IconType
  label: string
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="sr-only">{label}</span>
    <Icon className="h-6 w-6" />
  </motion.a>
)

const codeString = `import asyncio

async def journey():
    while True:
        await keep_learning()
        await take_action()
        await deep_thinking()

asyncio.run(journey())`

const CodeWindow = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl bg-[#011627] shadow-2xl">
    <div className="flex h-8 items-center bg-gray-800/50 px-4">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex flex-1 justify-center">
        <span className="text-xs text-gray-400">journey.py</span>
      </div>
    </div>
    {children}
  </div>
)

export default function Hero() {
  return (
    <div className="relative flex min-h-[80vh] items-center">
      {/* 背景动画效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-purple-300 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-yellow-300 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 mix-blend-multiply blur-xl filter" />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm syoka
            </motion.h1>

            <motion.div
              className="mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'AI Engineer', 2000]}
                wrapper="div"
                speed={20}
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CodeWindow>
                <Highlight theme={themes.nightOwl} code={codeString} language="python">
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className={`${className} p-6 text-left text-[15px] leading-7`}
                      style={{ ...style, background: 'transparent', tabSize: 4 }}
                    >
                      {tokens.map((line, i) => (
                        <div
                          key={i}
                          {...getLineProps({ line })}
                          style={{ minHeight: '1.75rem', display: 'flex' }}
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
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SocialLink href="https://github.com/teneous" icon={FiGithub} label="GitHub" />
              <SocialLink
                href="https://www.linkedin.com/in/syoka-kai-564678315/"
                icon={FiLinkedin}
                label="LinkedIn"
              />
              <SocialLink href="mailto:syoka9471@gmail.com" icon={FiMail} label="Email" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
