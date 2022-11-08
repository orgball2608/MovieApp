import React from 'react'
import BannerSlider from '../Slider/BannerSlider'
import Popular from '../SectionSlider/Popular'
import TopRate from '../SectionSlider/TopRate'
import Hot from '../SectionSlider/Hot'
import UpComing from '../SectionSlider/UpComing_OnTheAir'

const Main = () => {
  return (
    <>
      <BannerSlider />
      <ul className='flex flex-col gap-10 mt-12'>
        <li>
          <Popular />
        </li>
        <li>
          <TopRate />
        </li>
        <li>
          <Hot />
        </li>
        <li>
          <UpComing />
        </li>
      </ul>
    </>
  )
}

export default Main
