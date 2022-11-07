import { Link } from 'react-router-dom'
import { resizeImage } from '../../shared/ultis'
import { useGetHomeApiQuery } from '../../services/Home/home.service'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillStar } from 'react-icons/ai'
import Skeleton from '../Skeleton'
import 'swiper/swiper-bundle.css'

const BannerSlider = () => {
  const { data, isFetching, isLoading } = useGetHomeApiQuery('/trending/movie/day')

  return (
    <div className='mt-6 relative h-0 md:pb-[45%] pb-[55%]  tw-banner-slider'>
      {(isLoading || isFetching) && <Skeleton className='absolute top-0 left-0 w-full h-full rounded-lg' />}
      {!isLoading && (
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          className='!absolute !top-0 !left-0 !w-full !h-full  !rounded-lg'
        >
          {data.results.map((film, index) => (
            <SwiperSlide key={film.id}>
              <Link to={film.media_type === 'movie' ? `/movie/${film.id}` : `/tv/${film.id}`} className='group'>
                <LazyLoadImage src={resizeImage(film.backdrop_path, 'w1280')} alt='Backdrop image' />
                <div className='absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none tw-black-backdrop group-hover:bg-[#00000026] transition duration-7000'></div>
                <div className='absolute top-[5%] right-[3%] bg-primary px-3 py-1 rounded-full text-white flex items-center gap-1'>
                  <span>{film.vote_average.toFixed(1)}</span>
                  <AiFillStar size={15} />
                </div>

                <div className='absolute top-[50%] -translate-y-1/2 left-[5%] max-w-md '>
                  <h2 className='text-5xl text-white font-black tracking-wide tw-multiline-ellipsis-2'>
                    {film.title || film.name}
                  </h2>
                  <p className='text-white mt-1'>
                    {film.release_date && `Release date: ${film.release_date}`}
                    {film.first_air_date && `Last episode date: ${film.first_air_date}`}
                  </p>

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
