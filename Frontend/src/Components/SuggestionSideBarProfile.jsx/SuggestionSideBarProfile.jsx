import React from 'react'
import profile1 from '../../assets/Images/profile-1.avif'

function SuggestionSideBarProfile({profileImage, userName, name,  funct}) {
  return (
    <div className=' max-w-[320px] w-[320px] flex items-center text-[14px]'>
        <div className='p-[10px]'>
            <img src={profileImage} className='rounded-full w-[44px] min-w-[44px] h-[44px]' alt="" />
        </div>
        <div className='flex flex-col w-full'>
            <div className=' font-semibold'>{userName}</div>
            <div className='text-[#8e8e8e] font-semibold'>{name}</div>
        </div>
        <div><button className='text-[#0095F6] pl-[10px] pr-[5px] font-semibold'>{funct}</button></div>
    </div>
  )
}

export default SuggestionSideBarProfile