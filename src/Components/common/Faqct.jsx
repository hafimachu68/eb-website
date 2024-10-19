import React from 'react'
import './css/mob.css';
import ctpg  from '../images/calendly.png'; // Import your logo file
import background from '../images/CTAbg.png'; // Import your image


function FQcthead() {
  return (
    <div className='ctbg'style={{backgroundImage: `url(${background})`}}>
        <div className="row">
          <div className="col-md-7">
          <div className='text-white ctc'>
        <h1 className= 'cth py-3'>Still have questions?</h1>
        <div className="ctp pb-5">
        <p className=' '>
        Cant find answers to your questions? Get in touch with our experts!          </p>
        </div>
       
        <div className='pb-4'>
        <a href="https://zcal.co/sureba73">
          <button className='btn ctb  fw-bold'>Schedule</button>
          </a>
        </div>
        </div>
          </div>
          <div className="col-md-5 ctmg "style={{marginTop:"8rem"}} >
          <div className='ctpg'><img src={ctpg} alt="Your Image" className='ctpimg ' /></div>
          </div>
        </div>

       
    </div>
  )
}

export default FQcthead