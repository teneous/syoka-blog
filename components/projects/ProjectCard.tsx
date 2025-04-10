import React from 'react'
import Link from '@/components/common/Link'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  status: 'active' | 'completed' | 'planning'
  link: string
}

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  planning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, status, link }) => {
  return (
    <div className="group relative transform overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-white/80 via-purple-50/20 to-fuchsia-50/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg dark:from-gray-900/80 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      {/* 项目标题 */}
      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>

      {/* 状态标签 */}
      <span
        className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${statusColors[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>

      {/* 项目描述 */}
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>

      {/* 技术栈标签 */}
      <div className="mb-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-violet-100 px-2.5 py-1 text-sm text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 链接 */}
      <div className="flex items-center gap-3">
        <Link
          href={link}
          className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" />
          <span>Source Code</span>
        </Link>
        <Link
          href={link}
          className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4" />
          <span>Live Demo</span>
        </Link>
      </div>

      {/* 装饰效果 */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
    </div>
  )
}

export default ProjectCard
