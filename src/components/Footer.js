import React from 'react'
import'./Footer.css'
export default function Footer() {
  return (
    <div className='row foot p-lg-5 p-sm-0'>
      <div className='col-lg-3 col-sm-12 '>
        <h1 className='cls cls1'>Contact Information</h1>
        <p className='cls'>Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself.</p><br/>
        <p className='cls'><i class="fa-solid fa-location-dot"></i>594 E. Whitemarsh Street Mchenry, IL 60050</p>
        <p className='cls'><i class="fa-solid fa-phone"></i>(123) 345-6789</p>
        <p className='cls'><i class="fa-solid fa-envelope"></i>support@sitters.com</p>
      </div>
      <div className='col-lg-3 col-sm-12'>
        <h1 className='cls cls1'>Need help?</h1>
        <p  className='cls'>FAQs</p>
        <p className='cls'>Our Services</p>
        <p className='cls'>About Us</p>
      </div>
      <div className='col-lg-3 col-sm-12'>
        <h1 className='cls cls1'>Sitter Services</h1>
        <p className='cls'>Hign school sitters</p>
        <p className='cls'>Family member</p>
        <p className='cls'>Mother's helpers</p>
      </div>
      <div className='col-lg-3 col-sm-12'>
        <h1 className='cls cls1'>Subscribe Us</h1>
      <p className='cls'>Sign up to our news letter to get thr latest news and offers.</p>
      <input className='cls' type='email' placeholder='Email'></input><br></br>
      <button  className='cls btn'>Get Notified</button>
      </div>
      <div>
        <img src='https://themes.potenzaglobalsolutions.com/html/sitters/images/logo-light.svg'></img>
      </div>

      
    </div>
  )
}
