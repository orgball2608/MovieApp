export default function Skeleton({ className, showName }) {
  return (
    <div
      role='status'
      className='relative space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex flex-col md:items-center'
    >
      <div role='status' className={`animate-pulse bg-dark-lighten rounded-md ${className}`}>
        <svg
          className={` text-gray-200 dark:text-gray-600 w-16 h-16 mx-auto mt-20`}
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 384 512'
        >
          <path d='M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z' />
        </svg>
      </div>
      {showName && (
        <div className={`w-full mt-6 mx-auto absolute top-72 right-0`}>
          <div className='h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-full' />
        </div>
      )}
    </div>
  )
}
