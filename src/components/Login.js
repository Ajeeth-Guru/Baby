import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import'./Login.css'

export default function Login() {
  const[mail,setMail]=useState('')
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
    const user=list.find(x=>x.mail===mail)
    if(user){
      if(user.password===password){
       Auth.login(user.name)
       
        alert('Login success')
        Navigate('/')
      }
      else{
        setError("incorrect password")
      }
    }else{
      setError('incorrect mail')
    }
  }
  
  return (
    <div>
      <h1 className='text-light'>LOGIN</h1>
       <form className='log-form' onSubmit={handleLogin}>
<label>Username:</label><br></br>
 <input id='inp1' type='text'></input><br></br>
 <label>Password</label><br></br>
 <input id='inp2' type='password'></input><br></br>
 <button className='btn-sub' onClick={()=>{Navigate('/')}}>Submit</button>
</form>
       <h1> {error}</h1>
       <button className='btn btn-danger button' onClick={()=>{Navigate(-1)}}>BACK</button>
    </div>
  )
}
