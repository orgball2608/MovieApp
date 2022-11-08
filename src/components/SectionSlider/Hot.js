import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import SectionSlider from '../Slider/SectionSlider'

const Hot = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MovieData = useGetHomeApiQuery(`/trending/movie/day`)
  const TVData = useGetHomeApiQuery(`/trending/tv/day`)
  const { data, isFetching, isLoading } = currentTab === 'movie' ? MovieData : TVData
  return (
    <>
      <h2 className='text-xl text-white font-medium tracking-wider mb-3'>Hot</h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <SectionSlider films={data.results} />}
    </>
  )
}

export default Hot
