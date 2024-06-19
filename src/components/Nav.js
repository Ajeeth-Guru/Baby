import React from 'react'
import{NavLink}from'react-router-dom'
import Auth, { useAuth } from './Auth'
import'./Nav.css'
export default function Nav() {
  const Auth=useAuth()
  return (
    <nav className='nav-item'> 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img className='mx-lg-5 my-sm-0' src='https://themes.potenzaglobalsolutions.com/html/sitters/images/logo-dark.svg'></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink className='mx-lg-5 my-sm-0'  to='/'>HOME</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='mx-lg-5 my-sm-0'  to='/about'>OFFERS</NavLink>
        </li>
        <li class="nav-item">
       {!Auth.user&&<NavLink className='mx-lg-5 my-sm-0'  to='/register'>SIGN IN</NavLink>} 
        </li>
        <li class="nav-item">
       {Auth.user&& <NavLink className='mx-lg-5 my-sm-0'  to='/profile'>PROFILE</NavLink>}
        </li>
      </ul>
    </div>
  </div>
</nav>
  
    </nav>
       
   
  )
}
