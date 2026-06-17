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
const EVENT_NAME = 'syoka-language-change'

type LanguageContextValue = {
  language: SiteLanguage
  setLanguage: (nextLanguage: SiteLanguage) => void
  isZh: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const getStoredLanguage = (): SiteLanguage => {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'zh'
}

export function setSiteLanguage(language: SiteLanguage) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, language)
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: language }))
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>('zh')

  useEffect(() => {
    setLanguage(getStoredLanguage())
    const onChange = (event: Event) => {
      const customEvent = event as CustomEvent<SiteLanguage>
      setLanguage(customEvent.detail === 'zh' ? 'zh' : 'en')
    }
    window.addEventListener(EVENT_NAME, onChange)
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setLanguage(event.newValue === 'en' ? 'en' : 'zh')
      }
    }
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(EVENT_NAME, onChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

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
