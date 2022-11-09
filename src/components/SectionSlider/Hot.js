import React from 'react'
import { useSelector } from 'react-redux'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import SectionSlider from '../Slider/SectionSlider'
import Skeleton from '../Common/Skeleton/Skeleton'

const Hot = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MovieData = useGetHomeApiQuery(`/trending/movie/day`)
  const TVData = useGetHomeApiQuery(`/trending/tv/day`)
  const { data, isFetching, isLoading } = currentTab === 'movie' ? MovieData : TVData
  const TempArray = new Array(3).fill(0)
  return (
    <>
      <h2 className='text-xl text-white font-medium tracking-wider mb-3'>Hot</h2>
      {(isLoading || isFetching) && (
        <ul className='flex flex-row '>
          {TempArray.map((item, index) => (
            <li key={index} className='w-1/4 mr-6'>
              <Skeleton className='w-32 h-72' showName={true} />
            </li>
          ))}
        </ul>
      )}
      {!isLoading && <SectionSlider films={data.results} />}
    </>
  )
}

export default Hot
