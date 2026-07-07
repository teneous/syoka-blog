import React from 'react'
import LocalizedText from '@/components/common/LocalizedText'
import type { LocalizedString } from '@/data/projects'

interface ProjectCardProps {
  title: LocalizedString
  domain: LocalizedString
  description: LocalizedString
  role: LocalizedString
  impact: LocalizedString
  stack: string[]
  link?: string
  isPrivate?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  domain,
  description,
  role,
  impact,
  stack,
}) => {
  return (
    <article className="accent-line-top pipeline-panel group flex h-full flex-col rounded-2xl border border-gray-200 p-7.5 transition-[border-color,transform] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-violet-300 motion-reduce:hover:translate-y-0 dark:border-white/[0.09] dark:hover:border-indigo-400/40">
      <div className="flex-grow">
        <p className="mb-4 block font-mono text-[0.68rem] font-medium tracking-[0.16em] text-gray-500 uppercase dark:text-gray-500">
          <LocalizedText en={domain.en} zh={domain.zh} />
        </p>
        <h3 className="mb-3.5 text-xl font-extrabold tracking-tight text-gray-950 dark:text-white">
          <LocalizedText en={title.en} zh={title.zh} />
        </h3>

        <p className="text-[0.9rem] leading-7 text-gray-600 dark:text-gray-400">
          <LocalizedText en={description.en} zh={description.zh} />
        </p>

        <div className="mt-5 space-y-3.5 border-t border-gray-100 pt-5 dark:border-gray-800/60">
          <div>
            <p className="mb-1.5 flex items-center gap-2 font-mono text-[0.64rem] font-medium tracking-[0.14em] text-gray-500 uppercase dark:text-gray-500">
              <span className="h-3 w-0.75 shrink-0 rounded-sm bg-violet-600 dark:bg-indigo-400" />
              <LocalizedText en="Work" zh="工作内容" />
            </p>
            <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
              <LocalizedText en={role.en} zh={role.zh} />
            </p>
          </div>
          <div>
            <p className="mb-1.5 flex items-center gap-2 font-mono text-[0.64rem] font-medium tracking-[0.14em] text-gray-500 uppercase dark:text-gray-500">
              <span className="h-3 w-0.75 shrink-0 rounded-sm bg-violet-600 dark:bg-indigo-400" />
              <LocalizedText en="Result" zh="结果方向" />
            </p>
            <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
              <LocalizedText en={impact.en} zh={impact.zh} />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="mt-5.5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 font-mono text-xs text-gray-600 dark:border-white/5 dark:bg-white/5 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
