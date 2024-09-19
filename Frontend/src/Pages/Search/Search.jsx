import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div>
      <div className='fixed top-0 left-0 px-1 py-2 w-full max-w-screen bg-white block md:hidden'>
        <div className=' w-full px-1 py-2 flex flex-1 items-center justify-start gap-1 border border-[rgb(100,100,100)]   rounded-lg'>
          <IoIosSearch />
          <input className=' outline-none' placeholder='Search' type="text" />
        </div>
      </div>
    </div>
  )
}

export default Search