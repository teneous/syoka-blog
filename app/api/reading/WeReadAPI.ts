import { unstable_cache } from 'next/cache'
import { WeReadBook, WeReadResponse } from '@/types/api/weread'

class WeReadAPI {
  private static instance: WeReadAPI
  private cookie: string
  private vid: string
  private baseUrl = 'https://weread.qq.com'

  private constructor() {
    this.cookie = process.env.WEREAD_COOKIE || ''
    this.vid = this.extractVidFromCookie()
  }

  private extractVidFromCookie(): string {
    if (!this.cookie) return ''
    const vidMatch = this.cookie.match(/vid=([^;]+)/)
    return vidMatch ? vidMatch[1] : ''
  }

  public static getInstance(): WeReadAPI {
    if (!WeReadAPI.instance) {
      WeReadAPI.instance = new WeReadAPI()
    }
    return WeReadAPI.instance
  }

  private async request(url: string) {
    if (!this.cookie) {
      throw new Error('WeRead Cookie not configured. Please set WEREAD_COOKIE in .env.local')
    }

    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        headers: {
          Cookie: this.cookie,
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
        },
        // 添加 no-store 选项，确保每次都获取最新数据
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error(`WeRead API error: ${response.statusText} (${response.status})`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Request failed:', error)
      throw error
    }
  }

  private async cachedRequest(url: string, tag: string) {
    return unstable_cache(async () => this.request(url), [`weread-${tag}-${this.vid}`], {
      revalidate: 3600, // 改为1小时后重新验证
      tags: [`weread-${tag}`],
    })()
  }

  public async getBookshelf(): Promise<WeReadBook[]> {
    try {
      const data = (await this.cachedRequest('/web/shelf/sync', 'bookshelf')) as WeReadResponse

      if (!data || !data.books) {
        console.error('Invalid response data:', data)
        return []
      }

      const books: WeReadBook[] = data.books.map((book) => {
        // 计算实际进度百分比
        const progress = Math.floor((book.readingProgress || 0) * 100)
        // 判断是否完成阅读（进度100%或标记为已读）
        const isFinished = progress === 100 || book.finishReading === 1

        return {
          bookId: book.bookId,
          title: book.title,
          author: book.author,
          cover: book.cover.replace('s_', 'l_'), // 获取大图
          progress: progress,
          readingTime: book.readingTime || 0,
          category: book.category || '未分类',
          description: book.intro || '',
          rating: book.rating || 0,
          isFinished: isFinished,
          updateTime: book.updateTime,
        }
      })

      return books.sort((a, b) => b.updateTime - a.updateTime)
    } catch (error) {
      console.error('Failed to fetch bookshelf:', error)
      if (error instanceof Error) {
        console.error('Error details:', error.message)
      }
      return []
    }
  }
}

export default WeReadAPI
