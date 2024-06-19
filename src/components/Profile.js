import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const Auth=useAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
        Auth.logout()
        navigate('/')
    }
  return (
    <div>
    <h1>Welcome {Auth.user}</h1>  
    <button className='btn' onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}
