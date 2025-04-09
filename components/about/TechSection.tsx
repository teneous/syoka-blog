import React from 'react'
import { GitBranch, Zap } from 'lucide-react'

interface TechSectionProps {
  title: string
  items: string[]
}

export const TechSection: React.FC<TechSectionProps> = ({ title, items }) => (
  <div className="tech-section h-[380px] transform rounded-xl border border-violet-500/20 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-violet-500/10 dark:bg-gray-900/50">
    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
      <GitBranch className="h-5 w-5 text-violet-500 dark:text-violet-400" />
      <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
        {title}
      </span>
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="tech-item flex items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-violet-500/10"
        >
          <div className="flex-shrink-0 rounded-md bg-violet-500/20 p-1.5">
            <Zap className="h-4 w-4 text-violet-500 dark:text-violet-400" />
          </div>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </div>
      ))}
    </div>
  </div>
)

export default TechSection
