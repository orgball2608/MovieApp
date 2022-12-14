import { Link } from 'react-router-dom'
import { resizeImage } from '../../shared/utils'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillStar } from 'react-icons/ai'
import Skeleton from '../Common/Skeleton'
import 'swiper/swiper-bundle.css'
// redux
import { useSelector } from 'react-redux'
import formatDate from '../../shared/dataFormat'
import GenresCard from '../Common/GenresCard'

const BannerSlider = () => {
  const { currentTab } = useSelector((state) => state.currentTab)
  const MoviesApi = useGetHomeApiQuery(`/trending/movie/day`)
  const TvApi = useGetHomeApiQuery(`/trending/tv/day`)

  const { data, isLoading, isFetching } = currentTab === 'movie' ? MoviesApi : TvApi

  return (
    <div className='mt-6 relative h-0 md:pb-[45%] pb-[55%]  tw-banner-slider'>
      {(isLoading || isFetching) && <Skeleton className='absolute top-0 left-0 rounded-lg w-180 h-80' />}
      {!isLoading && (
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          navigation
          className='!absolute !top-0 !left-0 !w-full !h-full  !rounded-3xl'
        >
          {data.results.map((film, index) => (
            <SwiperSlide key={film.id}>
              <Link to={film.media_type === 'movie' ? `/movie/${film.id}` : `/tv/${film.id}`} className='group'>
                <LazyLoadImage src={resizeImage(film.backdrop_path, 'w1280')} alt='Backdrop image' />
                <div className='absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none tw-black-backdrop group-hover:bg-[#00000026] transition duration-7000'></div>
                <div
                  className={`${
                    film.vote_average >= 8 ? 'bg-primary' : film.vote_average >= 6 ? ' bg-red-500' : 'bg-emerald-600'
                  } absolute top-[5%] right-[3%] px-3 py-1 rounded-full text-white flex items-center gap-1`}
                >
                  <span>{film.vote_average.toFixed(1)}</span>
                  <AiFillStar size={15} />
                </div>

                <div className='absolute top-[50%] -translate-y-1/2 left-[5%] max-w-md '>
                  <h2 className='text-5xl text-white font-black tracking-wide tw-multiline-ellipsis-2'>
                    {film.title || film.name}
                  </h2>
                  <p className='text-white mt-1 font-bold'>
                    {film.release_date && `${formatDate(film.release_date)}`}
                    {film.first_air_date && `${formatDate(film.first_air_date)}`}
                  </p>
                  <GenresCard id={film.id} styleEle={''} />

                  <p className='mt-3 text-white  tw-multiline-ellipsis'>{film.overview}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className='absolute top-0 left-0 w-[8%] h-[11%] z-10'></div>
        </Swiper>
      )}
    </div>
  )
}

export default BannerSlider
