import React from 'react'
import SuggestionSideBarProfile from '../SuggestionSideBarProfile.jsx/SuggestionSideBarProfile'
import profile1 from '../../assets/Images/profile-1.avif'
function SuggetionsSideBar() {
  return (
    <div className='max-w-fit hidden xl:flex flex-col gap-2 mr-[14px] mt-[10px]'>
      <SuggestionSideBarProfile profileImage={profile1} userName="janedoe" name="Jane Doe" funct="Switch" />  
      <div className='flex justify-between items-center px-2 mt-4'>
        <span className='text-[#8e8e8e]'>Suggested for you</span>
        <span>See all</span>
      </div>
      <SuggestionSideBarProfile profileImage={profile1} userName="mariaJ" name="Maria Johnson" funct="follow" />
      <SuggestionSideBarProfile profileImage={profile1} userName="mariaJ" name="Maria Johnson" funct="follow" />
      <SuggestionSideBarProfile profileImage={profile1} userName="mariaJ" name="Maria Johnson" funct="follow" />
      <SuggestionSideBarProfile profileImage={profile1} userName="mariaJ" name="Maria Johnson" funct="follow" />
    </div>


  )
}

export default SuggetionsSideBar