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
  status: 'active' | 'completed' | 'planning'
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
    <article className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:hover:bg-gray-900/60">
      <div className="flex-grow">
        <div className="mb-5">
          <p className="text-xs font-medium tracking-[0.18em] text-gray-500 uppercase dark:text-gray-500">
            <LocalizedText en={domain.en} zh={domain.zh} />
          </p>
          <h3 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">
            <LocalizedText en={title.en} zh={title.zh} />
          </h3>
        </div>

        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
          <LocalizedText en={description.en} zh={description.zh} />
        </p>

        <div className="mt-5 space-y-4 border-t border-gray-200 pt-5 dark:border-gray-800">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              <LocalizedText en="Work" zh="工作内容" />
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
              <LocalizedText en={role.en} zh={role.zh} />
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              <LocalizedText en="Result" zh="结果方向" />
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
              <LocalizedText en={impact.en} zh={impact.zh} />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
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
