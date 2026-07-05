'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type SiteLanguage = 'en' | 'zh'

const STORAGE_KEY = 'syoka-studio-language'
const COOKIE_NAME = 'syoka-studio-language'
const EVENT_NAME = 'syoka-language-change'

type LanguageContextValue = {
  language: SiteLanguage
  setLanguage: (nextLanguage: SiteLanguage) => void
  isZh: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const getBrowserLanguage = (): SiteLanguage => {
  if (typeof window === 'undefined') return 'en'
  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

const getStoredLanguage = (fallbackLanguage?: SiteLanguage): SiteLanguage => {
  if (typeof window === 'undefined') return fallbackLanguage ?? 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'zh') return stored
  return fallbackLanguage ?? getBrowserLanguage()
}

export function setSiteLanguage(language: SiteLanguage) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, language)
  document.cookie = `${COOKIE_NAME}=${language}; path=/; max-age=31536000; samesite=lax`
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: language }))
}

export function LanguageProvider({
  children,
  initialLanguage = 'en',
}: {
  children: ReactNode
  initialLanguage?: SiteLanguage
}) {
  const [language, setLanguage] = useState<SiteLanguage>(initialLanguage)

  useEffect(() => {
    const nextLanguage = getStoredLanguage(initialLanguage)
    setLanguage(nextLanguage)
    document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en'

    const onChange = (event: Event) => {
      const customEvent = event as CustomEvent<SiteLanguage>
      const nextLanguage = customEvent.detail === 'zh' ? 'zh' : 'en'
      setLanguage(nextLanguage)
      document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en'
    }

    window.addEventListener(EVENT_NAME, onChange)
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        const nextLanguage = event.newValue === 'zh' ? 'zh' : 'en'
        setLanguage(nextLanguage)
        document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en'
      }
    }
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(EVENT_NAME, onChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [initialLanguage])

  const updateLanguage = useCallback((nextLanguage: SiteLanguage) => {
    setLanguage(nextLanguage)
    setSiteLanguage(nextLanguage)
  }, [])

  const value = useMemo(
    () => ({
      language,
      setLanguage: updateLanguage,
      isZh: language === 'zh',
    }),
    [language, updateLanguage]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context) {
    return context
  }

  return {
    language: getStoredLanguage(),
    setLanguage: setSiteLanguage,
    isZh: getStoredLanguage() === 'zh',
  }
}
