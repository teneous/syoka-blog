import { FiSearch } from 'react-icons/fi'

const SearchButton = () => {
  return (
    <button
      type="button"
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
      aria-label="Search"
    >
      <FiSearch className="h-5 w-5" />
    </button>
  )
}

export default SearchButton
