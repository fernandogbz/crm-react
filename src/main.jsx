import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewClient from './pages/NewClient'
import Index, { loader } from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/', // this first path is the main page
    element: <Layout/>, // this is what's gonna be shown in the page
    children: [
      {
        index: true, // This is the one that's gonna be rendered first
        element: <Index />
      },
      {
        path:'/clients/new',
        element: <NewClient/>
      }
    ] // This children is going to be an array of objects and everything that's inside this children. It's going to have the layout above applied, it's going to inherit this design and what I pass to it as an element, that is what that is going to be injected into the outlet component in Layout
  },
  
]) // This function takes an array in which you define your different router through an object.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)
