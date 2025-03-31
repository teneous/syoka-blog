import { IconType } from 'react-icons'
import { Zap } from 'lucide-react'

interface SkillCardProps {
  icon?: IconType
  title: string
  description: string
  className?: string
}

export const SkillCard = ({
  icon: Icon = Zap,
  title,
  description,
  className = '',
}: SkillCardProps) => (
  <div
    className={`tech-item hover:bg-primary-500/5 flex items-center gap-3 rounded-lg p-2 transition-colors duration-200 ${className}`}
  >
    <div className="bg-primary-500/10 flex-shrink-0 rounded-md p-1.5">
      <Icon className="text-primary-500 h-4 w-4" />
    </div>
    <div>
      <h3 className="text-base font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

export default SkillCard
