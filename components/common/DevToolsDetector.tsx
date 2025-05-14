'use client'

import { useEffect } from 'react'

interface DevTools {
  isOpen: boolean
  orientation?: 'horizontal' | 'vertical'
}

declare global {
  interface Window {
    Firebug?: {
      chrome?: {
        isInitialized?: boolean
      }
    }
    devtools?: DevTools
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: unknown
    __REDUX_DEVTOOLS_EXTENSION__?: unknown
  }
}

const DevToolsDetector = () => {
  useEffect(() => {
    const detectDevTools = () => {
      const consoleStyles = {
        title: [
          'color: #7C3AED',
          'font-size: 20px',
          'font-weight: bold',
          'padding: 10px 20px',
          'background: linear-gradient(to right, #4F46E5, #7C3AED)',
          'color: white',
          'border-radius: 4px',
          'margin: 20px 0',
        ].join(';'),
        subtitle: ['color: #4F46E5', 'font-size: 16px', 'font-weight: bold', 'padding: 8px 0'].join(
          ';'
        ),
        text: ['color: #6B7280', 'font-size: 14px', 'line-height: 1.5', 'padding: 4px 0'].join(';'),
        link: [
          'color: #4F46E5',
          'font-size: 14px',
          'text-decoration: underline',
          'padding: 4px 0',
        ].join(';'),
        warning: ['color: #EF4444', 'font-size: 14px', 'font-weight: bold', 'padding: 4px 0'].join(
          ';'
        ),
        code: [
          'color: #10B981',
          'font-size: 14px',
          'font-family: monospace',
          'background: #F3F4F6',
          'padding: 2px 4px',
          'border-radius: 2px',
        ].join(';'),
      }

      // Logo
      console.log('%c👋 Hi there. Thanks for visiting my blog!', consoleStyles.title)
      console.log(
        '%c I am a full stack developer, passionate about ai technology and innovation.',
        consoleStyles.text
      )
      console.log(
        '%c Please give me a star on GitHub if you like it! https://github.com/teneous/syoka-blog',
        consoleStyles.text
      )
    }

    // 监听开发者工具打开事件
    const devtools: DevTools = {
      isOpen: false,
      orientation: undefined,
    }

    const emitEvent = (isOpen: boolean, orientation?: 'horizontal' | 'vertical') => {
      window.dispatchEvent(
        new CustomEvent('devtoolschange', {
          detail: {
            isOpen,
            orientation,
          },
        })
      )
    }

    const checkDevTools = ({ emitEvents = true } = {}) => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160
      const heightThreshold = window.outerHeight - window.innerHeight > 160
      const orientation = widthThreshold ? 'vertical' : 'horizontal'

      if (
        !(heightThreshold && widthThreshold) &&
        (window.Firebug?.chrome?.isInitialized || widthThreshold || heightThreshold)
      ) {
        if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
          emitEvent(true, orientation)
          detectDevTools()
        }

        devtools.isOpen = true
        devtools.orientation = orientation
      } else {
        if (devtools.isOpen && emitEvents) {
          emitEvent(false, undefined)
        }

        devtools.isOpen = false
        devtools.orientation = undefined
      }
    }

    checkDevTools({ emitEvents: false })
    const intervalId = setInterval(() => checkDevTools(), 500)

    // 监听控制台打开快捷键
    window.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i')
      ) {
        detectDevTools()
      }
    })

    // 初始化时检查
    if (
      window.devtools?.isOpen ||
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ||
      window.__REDUX_DEVTOOLS_EXTENSION__
    ) {
      detectDevTools()
    }

    // 清理定时器
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return null
}

export default DevToolsDetector
