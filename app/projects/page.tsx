import React from 'react'
import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'
import LocalizedText from '@/components/common/LocalizedText'

export default function ProjectsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <div className="pt-12 pb-10">
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-gray-950 md:text-5xl dark:text-white">
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
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title.en} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
