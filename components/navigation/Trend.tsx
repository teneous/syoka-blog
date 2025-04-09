import { TrendingUp } from 'lucide-react'
import Link from '@/components/common/Link'

const Trend = () => {
  return (
    <Link
      href="https://syoka.icu/website/report"
      className="transition-colors duration-200 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
    >
      <TrendingUp className="h-5 w-5" />
    </Link>
  )
}
export default Trend
