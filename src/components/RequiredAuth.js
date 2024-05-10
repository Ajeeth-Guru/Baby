import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function RequiredAuth(props) {
    const navigate=useNavigate()
    const auth=useAuth()
    if(auth.user){
        return(<>{props.children}</>)
    }
    else{
        return navigate ('/login')
    }

  
}
