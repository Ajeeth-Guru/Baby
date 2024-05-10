import React, { useState } from 'react'
import axios from'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import'./Sign.css'
export default function Sign() {
    const[name,setName]=useState('')
    const[mail,setMail]=useState('')
    const[gender,setGender]=useState('male')
    const[age,setAge]=useState('')
    const Navigate=useNavigate()
    const[password,setPassword]=useState('')
    const hanleSubmit=()=>{
        axios.post('http://localhost:3001/user',{name,mail,age,gender,password})
    }
  return (
    <div>
      <h1 className='text-light'>SIGN IN</h1>
        <form onSubmit={hanleSubmit} className='form'>
        <label>Name:</label><br></br>
        <input className='input1' type='text' onChange={(e)=>{setName(e.target.value)}}></input><br></br>
        <label>Mail Id:</label><br></br>
        <input className='input1' type='mail' onChange={(e)=>{setMail(e.target.value)}}></input><br></br>
        <label>Age:</label><br></br>
        <input className='input1' type='number' onChange={(e)=>{setAge(e.target.value)}}></input><br></br>
        <label>Gender:</label><br></br>
        <select className='input2' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Others'>Others</option>
        </select><br></br>
        <label>password:</label><br></br>
        <input className='input2' type='password' onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
        <button type='submit' className='btn-sub'>OK</button>
        <Link className='font' to='/login'>Login</Link>
        </form>
        
        <button className='btn btn-danger button' onClick={()=>{Navigate(-1)}}>BACK</button>
    </div>
  )
}
