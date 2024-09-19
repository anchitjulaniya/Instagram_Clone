import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import { MdArrowBack } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import profileImg from '../../assets/Images/profilePic.jpg'


function Messages() {
  return (
    <div className='w-full'>
        <div id="header" className='flex items-center justify-between px-2 py-2'>
            <span className='px-1 cursor-pointer'>
                <MdArrowBack />
            </span>
            <span className="flex items-center justify-center gap-1 cursor-pointer font-semibold">
                <span>janedoe</span>
                <button><IoIosArrowDown /></button>
            </span>
            <span className='px-1 cursor-pointer'>
                <TfiWrite />
            </span>
        </div>
        <div className='flex items-center justify-between px-2 py-2 mt-6'>
            <span className='font-semibold'>Messages</span>
            <span className='text-[#0095F6]'>Request</span>
        </div>
        <div className='flex flex-col items-start px-2 '>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src={profileImg} className='rounded-full w-[45px] h-[45px]' alt="profile_Image" />
                </div>
                <div>
                    <div className='text-black text-sm'>Akshat</div>
                    <div className='text-[#aaa9a9] text-sm'>Reacted 😎 to your message</div>
                </div>
            </div>
             

        </div>
    </div>
  )
}

export default Messages