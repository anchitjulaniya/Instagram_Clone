import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp.jsx'
import SignIn from './Pages/SignIn/SignIn.jsx'
import { ErrorPage } from './Pages/Error/Error.jsx'
import Home from './Pages/Home/Home.jsx'

const renderFunction = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <App />,
      }, 
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/home',
        element: <Home />,
      }
    ],
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={renderFunction} />
)
