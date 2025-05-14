import ReadingContent from '@/components/reading/ReadingContent'
import WeReadAPI from '../api/reading/WeReadAPI'

export default async function ReadingPage() {
  // 在服务器端获取数据
  const wereadApi = WeReadAPI.getInstance()
  const books = await wereadApi.getBookshelf()

  // 将数据传递给客户端组件
  return <ReadingContent books={books} />
}
