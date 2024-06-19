import React, { useState } from 'react'
import'./Register.css'
import { useNavigate } from 'react-router-dom'
export default function Register(props) {
  const Navigate=useNavigate()


  return (
<div className='back-body '>
    <div className='row my-5 '>
      <div className='col-lg-6 col-sm-12 px-lg-5 px-sm-0  cad'>
   <div onClick={()=>{Navigate('/sign1')}} class="card-4 col-lg-6 col-sm-12 ali">
    <img src='https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151306188.jpg?t=st=1716192005~exp=1716195605~hmac=cc77c78e44a94ca689183bfc0db18bf975b7d6a37ef92d34a9a1273d84e19d5a&w=996'height={"230px"} className='img-img'></img>
  <div class="card-4-details">
    <p class="text-4-title">Baby sitter</p>
    <p class="text-4-body">You become a baby sitter?</p>
    <p>Click below</p>
  </div>
  
  <button class="card-4-button" onClick={()=>{Navigate('/sign1')}}>Click</button>
</div>
</div>
<div className='col-lg-6 col-sm-12'>
<div  onClick={()=>{Navigate('/sign')}} class="card-4 ">
  <img src='https://img.freepik.com/free-photo/happy-mothers-day-celebration_23-2151306182.jpg?t=st=1716193405~exp=1716197005~hmac=97e37eea22975812be233dcff23d6d3866fd80534739e2e4381facb29d3caa0c&w=996'height={"230px"} className='img-img'></img>
  <div class="card-4-details">
    <p class="text-4-title">User</p>
    <p class="text-4-body">Want a baby sitter?</p>
    <p>Click below</p>
  </div>
  
  <button class="card-4-button" onClick={()=>{Navigate('/sign')}}>Click</button>
  </div>
</div>

</div>
</div>
   
  )
}
