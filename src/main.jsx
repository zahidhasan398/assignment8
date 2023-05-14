import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import AppliedJobs from './components/AppliedJobs';
import { singleJob } from './components/SingleJob';
import Static from './components/Static';
import Blog from './components/Blog';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[{
    path:'/',
    element:<Home></Home>,
    loader:({params})=>fetch("/jov.json")
    },
    {
      path:'details/:id',
      element:<JobDetails></JobDetails>,
      loader:({params})=>params.id
    },
    ,
    {
      path:'details',
      element:<JobDetails></JobDetails>,
    },
    {
      path:"apply",
      element:<AppliedJobs></AppliedJobs>,
      
    },
    {
      path:"static",
      element:<Static></Static>

    },
    {
      path:"blog",
      element:<Blog></Blog>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
