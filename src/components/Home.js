import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import './Home.css'
export default function Home() {
    const navigate=useNavigate()
    const Auth=useAuth()
   
   
        
      

    
  return (
    <div>
       <div>
      <section className='container'>
        <div>
            <h1 className='fw-bolder'>The easiest way to</h1><br></br><h1 className='text-primary fw-bolder'> meet new players</h1><br></br>
            <p className='fw-bolder'>Playing is ultimate destination for growth,discuss and create your own game</p>
            <button className='fw-bolder' onClick={()=>{navigate('/product')}}>Learn more</button>
        </div>
        <div>
            <img src='https://turftown.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foldhero.d81bf3f0.webp&w=1920&q=75'></img>
        </div>
      </section>
    </div>
    </div>
  )
}
