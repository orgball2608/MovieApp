import React from 'react'

const SkeletonTrending = ({ className }) => {
  return (
    <div role='status' className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center'>
      <div role='status' className='animate-pulse bg-dark-lighten rounded-md'>
        <svg
          className={` text-gray-200 dark:text-gray-600 ${className} h-36`}
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 384 512'
        >
          <path d='M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z' />
        </svg>
      </div>
      <div className='w-full'>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5' />
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]' />
      </div>
    </div>
  )
}

export default SkeletonTrending
