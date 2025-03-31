import React from 'react'
import { GitBranch, Zap } from 'lucide-react'
import SkillCard from '../cards/SkillCard'

interface TechSectionProps {
  title: string
  items: string[]
}

export const TechSection: React.FC<TechSectionProps> = ({ title, items }) => (
  <div className="tech-section h-[360px] transform rounded-xl border border-violet-500/20 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-violet-500/10 dark:bg-gray-900/50">
    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
      <GitBranch className="h-5 w-5 text-violet-500 dark:text-violet-400" />
      <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
        {title}
      </span>
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <SkillCard key={index} icon={Zap} title={item} description="" />
      ))}
    </div>
  </div>
)

export default TechSection
