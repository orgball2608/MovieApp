import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import SectionSlider from '../Slider/SectionSlider'

const Popular = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MovieData = useGetHomeApiQuery(`/movie/popular`)
  const TVData = useGetHomeApiQuery(`/tv/popular`)
  const { data, isFetching, isLoading } = currentTab === 'movie' ? MovieData : TVData
  return (
    <>
      <h2 className='text-xl text-white font-medium tracking-wider mb-3'>Trending</h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <SectionSlider films={data.results} />}
    </>
  )
}

export default Popular
