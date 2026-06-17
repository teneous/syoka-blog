'use client'

import { useLanguage } from '@/components/common/useLanguage'

const navLabels: Record<string, { en: string; zh: string }> = {
  Home: { en: 'Home', zh: '首页' },
  Works: { en: 'Works', zh: '项目' },
  Notes: { en: 'Notes', zh: '笔记' },
  About: { en: 'About', zh: '关于' },
}

export default function LocalizedNavTitle({ title }: { title: string }) {
  const { language } = useLanguage()
  const label = navLabels[title]
  return <>{label ? label[language] : title}</>
}
