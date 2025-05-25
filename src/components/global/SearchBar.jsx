import React from 'react'

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

export default SearchBar
