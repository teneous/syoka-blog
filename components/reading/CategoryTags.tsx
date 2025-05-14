'use client'

import { useState, useEffect, useRef } from 'react'

interface CategoryTagsProps {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

export function CategoryTags({ categories, selectedCategory, onSelect }: CategoryTagsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [filteredCategories, setFilteredCategories] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 处理点击外部关闭下拉框
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 处理搜索词变化
  useEffect(() => {
    const filtered = ['全部', ...categories].filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCategories(filtered)
  }, [categories, searchTerm])

  // 处理分类选择
  const handleSelect = (category: string) => {
    onSelect(category)
    setSearchTerm(category)
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative mb-8" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setIsDropdownOpen(true)
          }}
          onFocus={() => setIsDropdownOpen(true)}
          placeholder="搜索分类..."
          className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isDropdownOpen ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
            />
          </svg>
        </button>
      </div>

      {/* 下拉菜单 */}
      {isDropdownOpen && filteredCategories.length > 0 && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {filteredCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelect(category)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedCategory === category
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
