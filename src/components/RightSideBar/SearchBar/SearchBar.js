import { BiSearch } from 'react-icons/bi'
const SearchBar = () => {
  const submitSearchBox = (e) => {
    e.preventDefault()
    console.log('Search')
  }
  return (
    <>
      <form className='flex items-center my-6' onSubmit={submitSearchBox}>
        <label htmlFor='simple-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-full'>
          <button
            type='submit'
            className='text-gray-400 focus:outline-none flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'
          >
            <BiSearch className='text-gray-400 cursor-pointer' size={25} />
          </button>

          <input
            type='text'
            id='simple-search'
            className='w-full pl-14 pr-7 outline-none bg-transparent py-2  bg-lime-50 border rounded-full border-lime-50'
            placeholder='Search'
            required
          />
        </div>
      </form>
    </>
  )
}

export default SearchBar
