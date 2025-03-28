import { FiSearch } from 'react-icons/fi'

const SearchButton = () => {
  return (
    <button
      type="button"
      className="p-2 text-gray-700 transition-colors duration-200 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
      aria-label="Search"
    >
      <FiSearch className="h-5 w-5" />
    </button>
  )
}

export default SearchButton
