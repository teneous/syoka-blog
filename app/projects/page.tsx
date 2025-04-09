import React from 'react'
import ProjectCard from '@/components/projects/ProjectCard'

const projects = [
  {
    title: 'Text2Cypher',
    description: '基于大语言模型将自然语言转换为 Cypher 查询语句的工具',
    stack: ['Python', 'Langchain', 'Neo4j', 'PolarDB'],
    status: 'active' as const,
    link: 'https://github.com/teneous/text2cypher',
  },
]

export default function ProjectsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="relative font-serif text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
          Projects
          <div className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-violet-500 to-emerald-500" />
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          我正在进行的一些有趣项目
        </p>
      </div>

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
} 