import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Navbar from './Header/Navbar';
import HeaderMain from './Header/HeaderMain';
import Donation from './Body/Donation';
import NavbarBody from './Header/NavbarBody';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderMain></HeaderMain>,
    children: [
      {
         
        path: "/",
        element: <NavbarBody></NavbarBody> ,
      },
      {
         
        path: "/donation",
        element:<Donation></Donation> ,
      }
                                               ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
