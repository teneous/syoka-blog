export interface WeReadBook {
  bookId: string
  title: string
  author: string
  cover: string
  progress: number
  readingTime: number
  category: string
  description: string
  rating: number
  isFinished: boolean
  updateTime: number
}

interface WeReadRawBook {
  bookId: string
  title: string
  author: string
  cover: string
  readingProgress: number
  readingTime: number
  category?: string
  intro?: string
  rating?: number
  finishReading: number
  updateTime: number
}

export interface WeReadResponse {
  books: WeReadRawBook[]
}
