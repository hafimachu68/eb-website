import React from 'react'
import './css/git.css';
import ctpg  from '../images/ctpg.png'; // Import your logo file
import background from '../images/CTAbg.png'; // Import your image




function Ctaheading() {
  return (
    <div className='ctbg'style={{backgroundImage: `url(${background})`}}>
        <div className="row">
          <div className="col-md-7">
          <div className='text-white ctc'>
        <h1 className= 'cth py-3'>Book a Demo</h1>
        <div className="ctp pb-5">
        <p className=' '>E-meet our engineers who will demonstrate diverse solutions built using the EXPRESSbase Platform. Share your requirements with our team and gain valuable insights to refine your strategies.
          </p>
        </div>
       
        <div className='pb-4'>
        <a href="https://zcal.co/sureba73">

          <button className='btn ctb  fw-bold'>Schedule</button>
          </a>
        </div>
        </div>
          </div>
          <div className="col-md-5 ctmg">
          <div className='ctpg'><img src={ctpg} alt="Your Image" /></div>
          </div>
        </div>

       
    </div>
  )
}

export default Ctaheading