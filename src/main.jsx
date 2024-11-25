import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import About from './components/Home/About/About';


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
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
