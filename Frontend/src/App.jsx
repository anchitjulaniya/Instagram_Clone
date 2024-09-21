import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SideNavBar from './Components/SideNavBar/SideNavBar'
import BottomNavbar from './Components/BottomNavBar/BottomNavbar'
import TopNavbar from './Components/TopNavBar/TopNavbar'

function App() {
  const navigate = useNavigate()
  
  const url = 'https://instagram-scraper-api3.p.rapidapi.com/highlight_media?highlight_id=18004653919636356';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
      'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com'
    }
  };
  
  const fetchData = async ()=> {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("result",result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
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
