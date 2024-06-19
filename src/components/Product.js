import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import'./product.css'
import star from './images/5star.png';
import star1 from'./images/4.5star.png';
import star2 from'./images/4star.png';
import Bill from './Bill';
import axios from 'axios';
export default function Product() {
  const Navigate=useNavigate()
  const[show,setShow]=useState(true)
  const[name,setName]=useState('')
  const[img,setImg]=useState('')
  const[id,setId]=useState('')
  const[list,setList]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/worker')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
  })

  return (
    <div className='row'>
   {show?(list.map(x=><div className='parent-12 col-lg-3 col-sm-6'>
<div class="card-12">
<img class="img-12" src={x.image}></img>
  <div class="info-12">
    <span>{x.name}</span>
    <p>{x.experience}Year experience</p>
    <img src={star} height={"50px"}></img>
  </div>
  <button className='btn btn-primary'onClick={()=>{Navigate('bill')
    setShow(false)
    setName(x.name)
    setId(x.id)
    setImg(x.image)
  }}>Book Now</button>
</div>
<button className='button-btn' onClick={()=>{Navigate(-1)}}>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
</div>)):<></>}
{!show?<Bill name={name} image={img} id={id}/>:<></>}
    </div>
   
  )
}
  
