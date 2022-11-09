import React from 'react'
import { useSelector } from 'react-redux'
import { useGetDetailApiQuery } from '../../services/Home/home.service'

const GenresCard = ({ id, styleEle }) => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const { data, isFetching, isLoading } = useGetDetailApiQuery(`/${currentTab}/${id}`)
  const TempArray = new Array(3).fill(0)
  return (
    <>
      {(isLoading || isFetching) && (
        <div className='flex flex-row flex-wrap mt-5 gap-2'>
          {TempArray.map((item, index) => (
            <div key={index} className='h-4 py-1 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4' />
          ))}
        </div>
      )}
      {data && (
        <div className='flex flex-row flex-wrap my-5 gap-2'>
          {data.genres.slice(0, 3).map((genre) => (
            <p key={genre.id} className={`text-gray-400 border border-dark-light rounded-full py-1 px-3 ${styleEle}`}>
              {genre.name}
            </p>
          ))}
        </div>
      )}
    </>
  )
}

export default GenresCard
