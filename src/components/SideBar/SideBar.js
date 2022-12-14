import { Link, useLocation } from 'react-router-dom'
import { AiOutlineHome, AiOutlineSearch, AiOutlineHistory } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'

const SideBar = () => {
  const location = useLocation()
  return (
    <div
      className='shrink-0 md:max-w-[260px] w-[70vw] pl-8 top-0 pt-10  
    md:sticky md:translate-x-0 md:bg-transparent md:shadow-none -translate-x-full fixed h-screen shadow-md transition duration-300 bg-dark-lighten z-50'
    >
      <Link to='/' className='flex items-center gap-3'>
        <img
          src='https://www.iamherelearning.com/wp-content/uploads/2020/02/Movie-Icon-1-460x406.png'
          alt='logo'
          className='w-10 h-10'
        />
        <h1 className='text-xl text-white tracking-widest font-semibold uppercase'>Waang.xn</h1>
      </Link>
      <div className='uppercase lg:text-lg md:text-base text-light-2 font-bold mt-10'>Menu</div>
      <div className='flex flex-col gap-4 mt-4'>
        <Link
          to='/'
          className={`flex gap-6 items-center  ${
            location.pathname === '/' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <AiOutlineHome size={25} className='text-my-red' />
          <p>Home</p>
        </Link>

        <Link
          to='/explore'
          className={`flex gap-6 items-center  ${
            location.pathname === '/explore' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <MdOutlineExplore size={25} className='text-my-red' />

          <p>Explore</p>
        </Link>

        <Link
          to='/search'
          className={`flex gap-6 items-center  ${
            location.pathname === '/search' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <AiOutlineSearch size={25} className='text-my-red' />

          <p>Search</p>
        </Link>
      </div>

      <div className='uppercase lg:text-lg md:text-base text-light-2 font-bold mt-10'>Personal</div>
      <div className='flex flex-col gap-4 mt-4'>
        <Link
          to='/bookmarked'
          className={`flex gap-6 items-center  ${
            location.pathname === '/bookmarked' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <BsFillBookmarkHeartFill size={25} className='text-my-red' />
          <p>BookMarked</p>
        </Link>

        <Link
          to='/history'
          className={`flex gap-6 items-center  ${
            location.pathname === '/history' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <AiOutlineHistory size={25} className='text-my-red' />
          <p>History</p>
        </Link>
      </div>

      <div className='uppercase lg:text-lg md:text-base text-light-2 font-bold mt-10'>General</div>
      <div className='flex flex-col gap-4 mt-4'>
        <Link
          to='/profile'
          className={`flex gap-6 items-center  ${
            location.pathname === '/profile' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <CgProfile size={25} className='text-my-red' />
          <p>Profile</p>
        </Link>

        <Link
          to='/logout'
          className={`flex gap-6 items-center  ${
            location.pathname === '/logout' && 'text-dark-light border-r-4 border-my-red font-medium'
          }`}
        >
          <BiLogOut size={25} className='text-my-red' />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
