import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SideNavBar from './Components/SideNavBar/SideNavBar'
import BottomNavbar from './Components/BottomNavBar/BottomNavbar'
import TopNavbar from './Components/TopNavBar/TopNavbar'

function App() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-1 flex-col sm:flex-row'>
      <TopNavbar />
      <SideNavBar />
      <Outlet />
      <BottomNavbar />
    </div>
  )
}
// 
{/*  */}
export default App
