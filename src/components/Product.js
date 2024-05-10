import React, { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function Product() {
    const Navigate=useNavigate()
    const[isRunning,setIsrunning]=useState(true)
    const handleNavigate=()=>{
        Navigate('stadium')
        setIsrunning(false)
    }
    const handleNavigate1=()=>{
        Navigate('stadium1')
        setIsrunning(false)
    }
    const handleNavigate2=()=>{
        Navigate('stadium2')
        setIsrunning(false)
    }
  return (
   <div>
         {isRunning?<div><h1>OUR LOCATIONS</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-photo/soccer-stadium-with-green-grass-blue-sky_90220-1725.jpg?t=st=1715336784~exp=1715340384~hmac=e5abf2baadd88766d37ef090a8f027947855495d005956c48e4f3df6d60f88ad&w=996" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">COIMBATORE</h5>
        <p class="card-text">The stadium features a simple design, with seating arranged in a single tier around the field</p>
      </div>
      <div class="card-footer">
      <button onClick={handleNavigate} class="btn btn-primary">About More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-photo/soccer-stadium-with-lights-background_90220-1723.jpg?t=st=1715336822~exp=1715340422~hmac=83570c5de18097dbe35148128ff6fc8637cc0615cb5d94f13020e2035942a20c&w=996" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">BANGALORE</h5>
        <p class="card-text">This stadium isn't just a venue for sports; it's a marvel of innovation and sustainability.</p>
      </div>
      <div class="card-footer">
      <button onClick={handleNavigate1} class="btn btn-primary">About More</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-photo/football-stadium-highlighted-by-bright-lights-night_1409-7645.jpg?t=st=1715336938~exp=1715340538~hmac=20ec829fc74d5bffc3a0acdbba9d6e652d7c935e240be05a4cf798c0c826ce67&w=996" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">CHENNAI</h5>
        <p class="card-text">This stadium apart, however, is its focus on sustainability and community engagement.</p>
      </div>
      <div class="card-footer">
      <button onClick={handleNavigate2} class="btn btn-primary">About More</button>
      </div>
    </div>
  </div>
</div>
</div>:<></>}
{!isRunning?<Outlet/>:<></>}
<button className='btn btn-danger button' onClick={()=>{Navigate(-1)}}>BACK</button>
    </div>
  )
}
