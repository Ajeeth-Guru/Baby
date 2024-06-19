import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import'./Login.css'

export default function Login1() {
  const[email,setMail]=useState('')
  const[password,setPassword]=useState('')
  const[list,setList]=useState([])
  const[error,setError]=useState('')
  const Auth=useAuth()
  const Navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3001/user')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
  },[])
  const handleLogin=(e)=>{
    e.preventDefault()
    const user=list.find(x=>x.email===email)
    if(user){
      if(user.password===password){
       Auth.login(user.name)
       
        alert('Login success')
        Navigate('/profile')
      }
      else{
        setError("incorrect password")
      }
    }else{
      setError('incorrect mail')
    }
  }
  
  return (
    <div className='parent-lg '>
       <div class="login-card">
  <div class="card-header">
    <div class="log">User Login</div>
  </div>
  <form onSubmit={handleLogin}>
    <div class="form-group">
      <label for="username">Email:</label>
      <input required="" name="username" id="username" type="text" onChange={(e)=>{setMail(e.target.value)}}/>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input required="" name="password" id="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div class="form-group">
 <button className='btn-suP' onClick={handleLogin}>Login</button>
 {error}

    </div>
  </form>

</div>



    </div> 
  )
}
