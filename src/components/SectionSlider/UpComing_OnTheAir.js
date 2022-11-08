import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import SectionSlider from '../Slider/SectionSlider'

const UpComing = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MovieData = useGetHomeApiQuery(`/movie/upcoming`)
  const TVData = useGetHomeApiQuery(`/tv/on_the_air`)
  const { data, isFetching, isLoading } = currentTab === 'movie' ? MovieData : TVData
  return (
    <>
      <h2 className='text-xl text-white font-medium tracking-wider mb-3'>
        {currentTab === 'movie' ? 'Upcoming' : 'On The Air'}
      </h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <SectionSlider films={data.results} />}
    </>
  )
}

export default UpComing
