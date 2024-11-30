import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import About from './components/Home/About/About';
import Users from './components/Home/About/Users';
import UserDetails from './components/Home/About/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home>This is the home</Home>
    <Outlet></Outlet>
  },

  {
    path: '/about',
    element: <div> I am in the about page</div>
  },

  {
    path: '/',
    element: <Home></Home>
    children: [
      {
        path: '/about'
        element: <About></About>
      },

      {
        path: '/users'
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        element:
      },

      {
        path: '/user/:userId'
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID  }`)
        element: <UserDetails></UserDetails>
      }

      {
        path: '/user/:userId'
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID  }`)
      element: <Posts></Posts>
      }
    ]
  }



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
