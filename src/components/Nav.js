import React from 'react'
import{NavLink}from'react-router-dom'
import Auth from './Auth'
export default function Nav() {
  return (
    <nav className='nav-item'> 
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/about'>OFFERS</NavLink>
   {!Auth.user &&<NavLink to='/sign'>SIGN IN</NavLink>}
 {Auth.user && <NavLink to='/profile'>PROFILE</NavLink>}
    </nav>
       
   
  )
}
