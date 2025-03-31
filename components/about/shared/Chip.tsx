import { MessageSquare } from 'lucide-react'
import { ReactNode } from 'react'

interface ChipProps {
  icon?: ReactNode
  label: string
  value: string
  className?: string
}

export const Chip = ({
  icon: Icon = <MessageSquare />,
  label,
  value,
  className = '',
}: ChipProps) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-white/80 px-4 py-2 transition-all duration-300 hover:border-violet-500/50 dark:bg-gray-900/50 ${className}`}
  >
    <div className="h-4 w-4 text-violet-500 dark:text-violet-400">{Icon}</div>
    <span className="font-medium text-gray-700 dark:text-gray-300">{label}:</span>
    <span className="text-violet-500 dark:text-violet-400">{value}</span>
  </div>
)

export default Chip
