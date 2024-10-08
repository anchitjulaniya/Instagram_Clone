import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.jsx'
import SignIn from './Pages/SignIn/SignIn.jsx'
import { ErrorPage } from './Pages/Error/Error.jsx'
import Home from './Pages/Home/Home.jsx'
import Explore from './Pages/Explore/Explore.jsx'
import Messages from './Pages/Messages/Messages.jsx'
import Search from './Pages/Search/Search.jsx'
import Reels from './Pages/Reels/Reels.jsx'
import Profile from './Pages/ProfilePage/Profile.jsx'

const renderFunction = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, 
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/reels',
        element: <Reels />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/profile',
        element: <Profile />,
      }
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={renderFunction} />
)
