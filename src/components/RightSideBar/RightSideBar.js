import React from 'react'
import Trending from './Trending'
import RecommendGenres from './RecommendGenres'
import SearchBar from './SearchBar/SearchBar'
const RightSideBar = () => {
  return (
    <div>
      <SearchBar />
      <RecommendGenres />
      <Trending />
    </div>
  )
}

export default RightSideBar
