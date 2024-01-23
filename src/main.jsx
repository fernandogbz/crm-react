import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/', // this first path is the main page
    element: <Layout/> // this is what's gonna be shown in the page
  },
  {
    path:'/about-us',
    element: <h1>About us</h1>
  }
]) // This function takes an array in which you define your different router through an object.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)
