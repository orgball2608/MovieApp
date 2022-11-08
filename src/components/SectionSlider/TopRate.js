import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import SectionSlider from '../Slider/SectionSlider'

const TopRate = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MovieData = useGetHomeApiQuery(`/movie/top_rated`)
  const TVData = useGetHomeApiQuery(`/tv/top_rated`)
  const { data, error, isLoading } = currentTab === 'movie' ? MovieData : TVData
  console.log(data)
  return (
    <>
      <h2 className='text-xl text-white font-medium tracking-wider mb-3'>TopRate</h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <SectionSlider films={data.results} />}
    </>
  )
}

export default TopRate
