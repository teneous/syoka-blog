export interface Book {
  id: string
  title: string
  author: string
  cover: string
  progress: number
  readingTime: number // 单位：分钟
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="aspect-[3/4] overflow-hidden rounded-lg">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="line-clamp-2 text-lg font-medium text-gray-900 dark:text-gray-100">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
        {/* 阅读进度条 */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="h-full rounded-full bg-blue-500" style={{ width: `${book.progress}%` }} />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{book.progress}%</span>
          <span>
            {Math.round(book.readingTime / 60)}小时{book.readingTime % 60}分钟
          </span>
        </div>
      </div>
    </div>
  )
}
