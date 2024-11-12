import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-900 w-screen h-screen'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main