'use client'

import { Globe2 } from 'lucide-react'
import { useLanguage } from '@/components/common/useLanguage'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const nextLanguage = language === 'en' ? 'zh' : 'en'

  return (
    <button
      type="button"
      aria-label="Toggle language"
      className="inline-flex h-8 items-center gap-1 rounded-md px-1.5 text-xs font-medium text-gray-700 transition-colors hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
      onClick={() => setLanguage(nextLanguage)}
    >
      <Globe2 className="h-4 w-4" />
      <span>{language === 'en' ? '中' : 'EN'}</span>
    </button>
  )
}
