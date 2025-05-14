'use client'

import { CategoryTags } from '@/components/reading/CategoryTags'
import { useState } from 'react'
import { WeReadBook } from '@/types/api/weread'
import Image from 'next/image'

export default function ReadingContent({ books = [] }: { books: WeReadBook[] }) {
  const [selectedCategory, setSelectedCategory] = useState('全部')

  // 获取所有分类
  const categories = Array.from(new Set(books.map((book) => book.category || '未分类'))).sort()

  // 根据选择的分类筛选书籍
  const filteredBooks =
    selectedCategory === '全部'
      ? books
      : books.filter((book) => (book.category || '未分类') === selectedCategory)

  // 计算统计数据
  const stats = {
    finishedBooks: filteredBooks.filter((book) => book.isFinished).length,
    totalBooks: filteredBooks.length,
  }

  return (
    <div className="relative min-h-screen">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/20 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-pink-100/20 blur-3xl dark:bg-pink-900/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative space-y-12">
          {/* 页面标题区域 */}
          <div className="relative pt-24 pb-8 text-center">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                我的阅读
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">同步自微信读书</p>
            </div>
            {/* 装饰线条 */}
            <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          {/* 分类标签 */}
          <CategoryTags
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* 阅读统计 */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">已读完</dt>
              <dd className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                {stats.finishedBooks}
                <span className="ml-2 text-sm font-normal">本</span>
              </dd>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">收藏</dt>
              <dd className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                {stats.totalBooks}
                <span className="ml-2 text-sm font-normal">本</span>
              </dd>
            </div>
          </div>

          {/* 书架内容 */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredBooks.map((book: WeReadBook) => (
              <div
                key={book.bookId}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {book.isFinished && (
                    <div className="absolute top-2 right-2 rounded-full bg-green-500 px-2 py-1 text-xs text-white">
                      已读完
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{book.author}</p>
                  {/* 阅读进度条 */}
                  {book.progress > 0 && (
                    <>
                      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{book.progress}%</span>
                        <span>{Math.round(book.readingTime / 60)}小时</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
