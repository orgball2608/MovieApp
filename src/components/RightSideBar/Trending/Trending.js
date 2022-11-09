import { Link } from 'react-router-dom'
import { useGetTrendingApiQuery } from '../../../services/Home/home.service'
import { resizeImage } from '../../../shared/utils'
import { AiFillStar } from 'react-icons/ai'
import formatDate from '../../../shared/dataFormat'
import SkeletonTrending from './SkeletonTrending'
import { BsThreeDotsVertical } from 'react-icons/bs'
const Trending = () => {
  const { data, isFetching, isLoading } = useGetTrendingApiQuery()
  const TempData = new Array(2).fill(0)
  return (
    <>
      <p className='mb-6 text-xl font-medium flex justify-between items-center'>
        <span className='text-white'>Trending</span>
        <BsThreeDotsVertical size={20} />
      </p>
      {(isLoading || isFetching) && (
        <div className='flex flex-col gap-5'>
          {TempData.map((item, index) => (
            <SkeletonTrending key={index} styleEle='w-24 h-36 rounded-md px-6' />
          ))}
        </div>
      )}
      {!isLoading && (
        <div className='flex flex-col gap-5'>
          {data.results.slice(0, 2).map((item) => (
            <Link to={item.media_type === 'movie' ? `movie/${item.id}` : `tv/${item.id}`}>
              <div key={item.id} className='flex items-start gap-5 text-left'>
                <div className='shrink-0 max-w-[100px] w-full'>
                  <img src={resizeImage(item.poster_path, 'w185')} alt='poster' className='w-full h-full rounded-md' />
                </div>
                <div className='flex-1 flex-grow mt-1'>
                  <h3 className='text-lg text-white font-medium mr-3'>{item.title || item.name}</h3>
                  <p className='text-white text-md my-2'>
                    {item.release_date && `${formatDate(item.release_date)}`}
                    {item.first_air_date && `${formatDate(item.first_air_date)}`}
                  </p>
                  <div className='inline-flex gap-2 items-center px-3 py-[2px] rounded-full text-red-500 border border-red-500 text-sm mt-8'>
                    <span>{item.vote_average.toFixed(1)}</span>
                    <AiFillStar size={15} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <button className='bg-dark-lighten py-2 w-full rounded-full mt-7 hover:brightness-75 transition duration-300'>
        See more
      </button>
    </>
  )
}

export default Trending
