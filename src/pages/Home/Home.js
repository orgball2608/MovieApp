import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentTab } from '../../features/currentTab/currentTab.slice'

import SideBar from '../../components/SideBar'
import Main from '../../components/Main'

const Home = () => {
  const dispatch = useDispatch()
  const { currentTab } = useSelector((state) => state.currentTab)
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='flex-grow pt-5 px-[28px] border-x border-dark-2 min-h-screen'>
          <div className='flex justify-between items-end'>
            <div className='inline-flex gap-[40px] pb-[8px] border-gray-darken relative italic '>
              <button
                onClick={() => dispatch(setCurrentTab('tv'))}
                className={`${
                  currentTab === 'tv' &&
                  'text-white text-base after:absolute after:bottom-0 after:left-[6%] after:bg-white after:h-[3px] after:w-10 font-bold'
                } transition duration-300 text-white`}
              >
                TV Series
              </button>
              <button
                onClick={() => dispatch(setCurrentTab('movie'))}
                className={`${
                  currentTab === 'movie' &&
                  'text-white text-base after:absolute after:bottom-0 after:right-[40%] after:bg-white after:h-[3px] after:w-10 font-bold'
                } transition duration-300 text-white`}
              >
                Movies
              </button>
              <button
                onClick={() => dispatch(setCurrentTab('anime'))}
                className={`${
                  currentTab === 'anime' &&
                  'text-white text-base after:absolute after:bottom-0 after:right-[3%] after:bg-white after:h-[3px] after:w-10 font-bold'
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
          <Main />
        </div>

        <div className='shrink-0 max-w-[308px] w-full hidden md:block'></div>
      </div>
    </>
  )
}

export default Home
