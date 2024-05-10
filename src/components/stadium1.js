import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Stadium1(props) {
    const[list,setList]=useState([])
    const Navigate=useNavigate()
    const Auth=useAuth()
    useEffect(()=>{
        axios.get('http://localhost:3001/ban')
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err)})
        console.log(list)
    },[])
    const handleBook=()=>{
        if(Auth.user){
            Navigate('/book')
        }else{
            Navigate('/sign')
        }
        
    }
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {list.map(x=>
  <div class="col">
    <div class="card h-100">
      <img src={x.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3>{x.name}</h3>
        <p class="card-text">{x.content}</p>
        <h3>RATINGS:{x.rate}</h3>
        <h4>price:{x.price}</h4>
      </div>
      <div class="card-footer">
      <button className='btn btn-primary' onClick={handleBook}>Book Now</button>
      </div>
    </div>
  </div>
)}</div>
<button className='btn btn-danger button' onClick={()=>{Navigate(-1)}}>BACK</button>
    </div>
    
  )
}
