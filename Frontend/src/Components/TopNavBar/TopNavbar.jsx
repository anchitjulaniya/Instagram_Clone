import React from 'react'
import InstaLogo from "../../assets/Images/Insta-logo-1.png";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";


function TopNavbar() {
  return (
    <div className='bg-white px-4 h-[44px] fixed top-0 flex md:hidden justify-between w-full items-center border-b border-[#dbdbdb]'>
        <img
          src={InstaLogo}
          className="h-[40px] w-[120px] "
          alt="Instagram Logo"
        />
        <div className='flex items-center text-xl'>
            <span className="cursor-pointer scale-105 px-3"><FiPlusSquare /></span>
            <span className="cursor-pointer scale-105 px-3"><FaRegHeart /></span>
        </div>
    </div>
  )
}

export default TopNavbar