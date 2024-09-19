import React from 'react'
import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import BottomNavbar from '../../Components/BottomNavBar/BottomNavbar'
import TopNavbar from '../../Components/TopNavBar/TopNavbar'
import StoryBar from '../../Components/StoryBar/StoryBar'
import Post from '../../Components/Post/Post'
import SuggetionsSideBar from '../../Components/SuggetionsSideBar/SuggetionsSideBar'
import Profile from '../ProfilePage/Profile'

function Home() {
  return (
    <>  
        {/* <TopNavbar />
        <SideNavBar />
        <StoryBar />
        <BottomNavbar />
        <Post />
        <SuggetionsSideBar /> */}
        <Profile />
    </>
  )
}

export default Home