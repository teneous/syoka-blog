import React from 'react'
import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'
import LocalizedText from '@/components/common/LocalizedText'

export default function ProjectsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <div className="pt-15 pb-11">
        <span className="mb-3.5 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-gray-500 uppercase dark:text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-indigo-400" />
          <LocalizedText en="Works" zh="项目" />
        </span>
        <h1 className="max-w-3xl bg-gradient-to-b from-gray-950 to-gray-600 bg-clip-text pb-1 text-4xl leading-tight font-extrabold tracking-tight text-balance text-transparent md:text-5xl dark:from-white dark:to-gray-400">
          <LocalizedText en="Works" zh="项目" />
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
          <LocalizedText
            en="A selected record of product practice, AI infrastructure, data systems, and engineering patterns."
            zh="一些产品实践、AI 基建、数据系统与工程模式的简要记录。"
          />
        </p>
      </div>

      <div className="py-12">
        <div className="grid gap-5.5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title.en} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
