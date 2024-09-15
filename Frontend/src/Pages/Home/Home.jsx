import React from 'react'
import SideNavBar from '../../Components/SideNavBar/SideNavBar'
import BottomNavbar from '../../Components/BottomNavBar/BottomNavbar'
import TopNavbar from '../../Components/TopNavBar/TopNavbar'
import StoryBar from '../../Components/StoryBar/StoryBar'

function Home() {
  return (
    <>  
        <TopNavbar />
        <SideNavBar />
        <StoryBar />
        <BottomNavbar />

    </>
  )
}

export default Home