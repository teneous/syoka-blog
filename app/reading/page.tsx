import ReadingContent from '@/components/reading/ReadingContent'
import WeReadAPI from '../api/reading/WeReadAPI'

// 设置为动态渲染，不在构建时预渲染
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // 每小时重新验证一次

export default async function ReadingPage() {
  // 在服务器端获取数据
  const wereadApi = WeReadAPI.getInstance()
  const books = await wereadApi.getBookshelf()

  // 将数据传递给客户端组件
  return <ReadingContent books={books} />
}
