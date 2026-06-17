'use client'

import { ReactNode } from 'react'
import { useLanguage } from './useLanguage'

export default function LocalizedText({ en, zh }: { en: ReactNode; zh: ReactNode }) {
  const { language } = useLanguage()
  return <>{language === 'zh' ? zh : en}</>
}
