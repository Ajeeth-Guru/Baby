import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const Navigate=useNavigate()
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-psd/flat-design-tennis-sport-template_23-2149665765.jpg?t=st=1715350789~exp=1715354389~hmac=31b267051c72090507844f93a2529a139b6deeb4a6e75bfa7722aa498f651c13&w=1060" class="d-block  w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/outdoor-sport-landing-page-template_23-2148374630.jpg?t=st=1715350624~exp=1715354224~hmac=f27c5b474e2fb1de6aa18b1afde65ebebc4492105394ff5f8ceef2c8f0ed01d9&w=996" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/hand-drawn-tennis-game-webinar_23-2149948465.jpg?t=st=1715350653~exp=1715354253~hmac=8939a97731e6d646143ecb79ad4e4009e0dab2f0ea853fb940086cfd9c48183f&w=1060" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <button className='btn btn-danger button' onClick={()=>{Navigate(-1)}}>BACK</button>
    </div>
  )
}
