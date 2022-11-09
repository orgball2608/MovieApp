import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import SectionSlider from '../Slider/SectionSlider'
import Skeleton from '../Common/Skeleton/Skeleton'

const UpComing = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MovieData = useGetHomeApiQuery(`/movie/upcoming`)
  const TVData = useGetHomeApiQuery(`/tv/on_the_air`)
  const { data, isFetching, isLoading } = currentTab === 'movie' ? MovieData : TVData
  const TempArray = new Array(3).fill(0)
  return (
    <>
      <h2 className='text-xl text-white font-medium tracking-wider mb-3'>
        {currentTab === 'movie' ? 'Upcoming' : 'On The Air'}
      </h2>
      {(isLoading || isFetching) && (
        <ul className='flex flex-row '>
          {TempArray.map((item, index) => (
            <li key={index} className='w-1/4 mr-6'>
              <Skeleton className='w-48 h-72' showName={true} />
            </li>
          ))}
        </ul>
      )}
      {!isLoading && <SectionSlider films={data.results} />}
    </>
  )
}

export default UpComing
