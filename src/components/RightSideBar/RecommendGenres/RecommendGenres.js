import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetGenresApiQuery } from '../../../services/Home/home.service'
import Loader from '../../Common/Loader'

const RecommendGenres = () => {
  const currentTab = useSelector((state) => state.currentTab)
  const MovieGenres = useGetGenresApiQuery('movie')
  const TVGenres = useGetGenresApiQuery('tv')
  const { data, isLoading, isFetching } = currentTab === 'movie' ? MovieGenres : TVGenres

  return (
    <div className='my-4'>
      {(isLoading || isFetching) && <Loader className='mt-20 mb-20 mx-auto h-10 w-10' />}
      {data && (
        <ul className='flex flex-wrap gap-4'>
          {data.genres.slice(0, 8).map((genre) => (
            <Link to={`/explore/genres/${genre.id}`} key={genre.id}>
              <li className='bg-dark-lighten rounded-full px-3 py-1 text-base'>{genre.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RecommendGenres
