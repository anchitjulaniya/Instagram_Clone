import React from 'react'
import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import BottomNavbar from '../../Components/BottomNavBar/BottomNavbar'
import TopNavbar from '../../Components/TopNavBar/TopNavbar'
import StoryBar from '../../Components/StoryBar/StoryBar'
import Post from '../../Components/Post/Post'
import SuggetionsSideBar from '../../Components/SuggetionsSideBar/SuggetionsSideBar'
import Profile from '../ProfilePage/Profile'
import Search from '../Search/Search'
import Messages from '../Messages/Messages'
import Reels from '../Reels/Reels'
import Explore from '../Explore/Explore'

function Home() {
  return (
    <div className='flex w-full'>
      <div className='flex flex-col w-full items-center p-1 sm:min-w-[702px]'>  
        <StoryBar />
        <Post />
        <Post />
        <Post />
      </div>
      <div>
        <SuggetionsSideBar />
      </div>
    </div>
  )
}

export default Home