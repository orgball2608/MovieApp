import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import BannerSlider from '../../components/Slider/BannerSlider'

const Home = () => {
  const [currentTab, setCurrentTab] = React.useState('movie')
  return (
    <>
      <div className='flex'>
        <div className='shrink-0 max-w-[260px] w-[90vw]'></div>

        <div className='flex-grow pt-5 px-[28px] border-x border-gray-darken min-h-screen'>
          <div className='flex justify-between items-end'>
            <div className='inline-flex gap-[40px] pb-[14px] border-b border-gray-darken relative'>
              <button
                onClick={() => setCurrentTab('tv')}
                className={`${
                  currentTab === 'tv' &&
                  'text-white font-medium after:absolute after:bottom-0 after:left-[6%] after:bg-white after:h-[3px] after:w-10'
                } transition duration-300 text-white`}
              >
                TV Series
              </button>
              <button
                onClick={() => setCurrentTab('movie')}
                className={`${
                  currentTab === 'movie' &&
                  'text-white after:absolute after:bottom-0 after:right-[40%] after:bg-white after:h-[3px] after:w-10 font-bold'
                } transition duration-300 text-white`}
              >
                Movies
              </button>
              <button
                onClick={() => setCurrentTab('anime')}
                className={`${
                  currentTab === 'anime' &&
                  'text-white after:absolute after:bottom-0 after:right-[3%] after:bg-white after:h-[3px] after:w-10 font-bold'
                } transition duration-300 text-white`}
              >
                Animes
              </button>
            </div>
            <div className='flex gap-6 items-center'>
              <div className='w-6 h-6 rounded-full border border-gray tw-flex-center cursor-pointer'>
                <IoMdNotificationsOutline size={17} className='text-white mx-auto mt-[1px]' />
              </div>
            </div>
          </div>

          <BannerSlider currentTab={currentTab} />
        </div>

        <div className='shrink-0 max-w-[308px] w-full hidden md:block'></div>
      </div>
    </>
  )
}

export default Home
