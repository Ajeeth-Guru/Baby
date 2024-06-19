import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import'./Bill.css'  
import axios from 'axios'
export default function Bill(props) {
    const[name,setName]=useState(props.name)
    const[id,setId]=useState(props.id)
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    const[charge,setCharge]=useState(20)
    const[money,setMoney]=useState()
    const[show,setShow]=useState(false)
    const[list,setList]=useState([])
    const Navigate=useNavigate()
    const handleBook=()=>{
      setMoney(time*charge)
      setList([{name,date,time,charge,money}])
      setShow(true)
      
    }
    const actionBook=()=>{
      axios.post('http://localhost:3001/post/',{id,name,money,time})
      .then(res=>{console.log(res)
        alert('your booking is successful')})
      .catch(err=>{console.log(err)})
    }
  return (
    <div className='d-flex justify-content-around'>
        <div class="card2">
  <span class="title">Details</span>
  <div class="form">
    <div class="group">
    <input  type="text" value={props.name} onChange={(e)=>{setName(e.target.value)}}/>
    <label for="name">Name</label>
    </div>
<div class="group">
    <input type='date' onChange={(e)=>{setDate(e.target.value)}}/>
    <label for="email">Date</label>
    </div>
<div class="group">
    <input type='number' value={time} onChange={(e)=>{setTime(e.target.value)
      setMoney(e.target.value*20)
    }}></input>
    <label for="comment">Duration/Hours</label>
</div>
<div class="group">
    <input value={charge}></input>
    <label for="comment">Charge</label>
</div>
<div class="group">
    <input value={money} onChange={(e)=>{setMoney(e.target.value)
      setTime(e.target.value/20)
    }}></input>
    <label for="comment">Total</label>
</div>
    <button onClick={handleBook}>Submit</button>
  </div>
</div>


   {show?(list.map(x=><div class="card12">
{/* <div class="header1"></div> */}
<img src={props.image}></img>
<div class="info1">
  <p class="title1">Name:{x.name}</p>
  <p>time:{x.time} Hours</p>
  <h5>Amout:{x.money}</h5>

</div>
<div class="footer1">
  <button type="button1" class="action" onClick={actionBook}>Book Now</button>
</div>
</div>)):<></>}
        
       
        <button className='button-btn' onClick={()=>{Navigate(-1)}}>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
      
    </div>
  )
}
