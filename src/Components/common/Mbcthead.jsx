import React from 'react'
import './css/mob.css';
import background from '../images/mobpg2.png'; // Import your image



function Mbcthead() {
  return (
    <div>
   <div className='mctbg'>
    <div className="row  mctc">
      <div className='col-md-7 text-white'>
        <h1 className='mcth py-3 '>CTA Heading</h1>
        <p className='mctp py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  commodo </p>
      </div>
      <div className='col-md-3 d-flex align-items-center justify-content-center py-3'>
        <button className='btn mctb fw-bold'>Contact Us</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Mbcthead