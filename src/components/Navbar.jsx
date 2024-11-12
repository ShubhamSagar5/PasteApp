import React from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div className='text-xl pt-2 text-white flex justify-center'>
        <div className=' w-2/12 flex justify-between'>
            <NavLink className={({isActive})=> isActive ? 'active-class' : ''} to={"/"}>Home</NavLink>
        <NavLink className={({isActive})=> isActive ? 'active-class' : ''}  to={"/pastes"}>Pastes</NavLink>
        </div>
    </div>
  )
}

export default Navbar