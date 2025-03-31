'use client'

import { Authors, allAuthors } from 'contentlayer/generated'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import {
  Terminal,
  Brain,
  Database,
  Cpu,
  Code,
  MessageSquare,
  Sparkles,
  GitBranch,
  Network,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import { IconType } from 'react-icons'
import LanguageSwitch from '@/components/about/LanguageSwitch'
import CommandPrompt from '@/components/about/CommandPrompt'
import TechSection from '@/components/about/TechSection'
import CareerRoadmap from '@/components/about/CareerRoadmap'
import { content } from './content'
import type { Language } from '@/components/about/types'

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType
  title: string
  description: string
}) => (
  <div className="tech-item hover:bg-primary-500/5 flex items-center gap-3 rounded-lg p-2 transition-colors duration-200">
    <div className="bg-primary-500/10 flex-shrink-0 rounded-md p-1.5">
      <Icon className="text-primary-500 h-4 w-4" />
    </div>
    <div>
      <h3 className="text-base font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

const ContactChip = ({ type, value }: { type: string; value: string }) => (
  <div className="contact-chip inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-white/80 px-4 py-2 transition-all duration-300 hover:border-violet-500/50 dark:bg-gray-900/50">
    <MessageSquare className="h-4 w-4 text-violet-500 dark:text-violet-400" />
    <span className="font-medium text-gray-700 dark:text-gray-300">{type}:</span>
    <span className="text-violet-500 dark:text-violet-400">{value}</span>
  </div>
)

export default function Page() {
  const [language, setLanguage] = useState<Language>('zh')
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const t = content[language]

  return (
    <AuthorLayout content={mainContent}>
      <div className="space-y-12">
        <LanguageSwitch language={language} setLanguage={setLanguage} />

        {/* 终端风格介绍 */}
        <CommandPrompt>
          <div className="space-y-3">
            <span className="font-semibold text-green-600 dark:text-green-400">Syoka</span>
            <p className="text-gray-700 dark:text-gray-300">{t.intro}</p>
            <div className="mt-3 flex gap-2">
              <span className="terminal-tag rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                中文
              </span>
              <span className="terminal-tag rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
                English
              </span>
              <span className="terminal-tag rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                日本語
              </span>
            </div>
          </div>
        </CommandPrompt>

        {/* 核心技能网格 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <div className="flex-1">
              <TechSection title={t.backendCore.title} items={t.backendCore.items} />
            </div>
            <div className="flex-1">
              <TechSection title={t.aiEngineering.title} items={t.aiEngineering.items} />
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex-1">
              <TechSection title={t.dataPlatforms.title} items={t.dataPlatforms.items} />
            </div>
            <div className="flex-1">
              <TechSection title={t.systemArchitecture.title} items={t.systemArchitecture.items} />
            </div>
          </div>
        </div>

        {/* 职业旅程 */}
        <CareerRoadmap title={t.career.title} companies={t.career.companies} />
      </div>
    </AuthorLayout>
  )
}
