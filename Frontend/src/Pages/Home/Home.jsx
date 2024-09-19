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
    <>  
        {/* <TopNavbar />
        <SideNavBar />
        <StoryBar />
        <BottomNavbar />
        <Post />
        <SuggetionsSideBar /> 
        <Profile />
        <Messages />
        */}

          <Search />

        {/* <Reels />
        <Explore /> */}


    </>
  )
}

export default Home