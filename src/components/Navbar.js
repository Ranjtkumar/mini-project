import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className='header-nav py-3 text-lg font-bold'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
   </nav>
  )
}
