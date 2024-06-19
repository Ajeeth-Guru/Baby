import React, { useState } from 'react'
import axios from'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import'./sign1.css'
export default function Sign1() {
    const[name,setName]=useState('')
    const[experience,setExperience]=useState('')
    const[email,setMail]=useState('')
    const[image,setImage]=useState('')
    const Navigate=useNavigate()
    const[password,setPassword]=useState('')
    const hanleSubmit=()=>{
        axios.post('http://localhost:3001/worker',{name,email,experience,image,password})
        .then(res=>{console.log(res)
          alert('your signin is successfull')
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <div className='container'>
        <div class="card1">
  <div class="card1-header">
    <div class="text-header">Worker Register</div>
  </div>
  <div class="card1-body">
    <form action="#" onSubmit={hanleSubmit} >
      <div class="form-group">
        <label for="username">Username:</label>
        <input required="" class="form-control" name="username" id="username" type="text" onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input required="" class="form-control" name="email" id="email" type="email" onChange={(e)=>{setMail(e.target.value)}}/>
      </div>

      <div class="form-group">
        <label>Experience</label>
        <input class="form-control" type='text' onChange={(e)=>{setExperience(e.target.value)}}></input>
      </div>
      <div class="form-group">
        <label>Image</label>
        <input class="form-control" type='text' onChange={(e)=>{setImage(e.target.value)}}></input>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input required="" class="form-control" name="password" id="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
     <button type="submit" class="btn" value="submit">Sign in</button></form><br></br>
     <span className='text-dark'>Already have a account?</span>
     <Link className='link-log1 ' to='/login'>Login</Link>
 

  </div>
</div>

    </div>
  )
}
