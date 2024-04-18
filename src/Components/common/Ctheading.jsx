import React from 'react'
import './css/git.css';
import ctpg  from '../images/ctpg.png'; // Import your logo file



function Ctaheading() {
  return (
    <div className='ctbg'>
        <div className="row">
          <div className="col-md-7">
          <div className='text-white ctc'>
        <h1 className= 'cth py-3'>Book a Demo</h1>
        <p className=' ctp py-3'>E-meet our engineers who will demonstrate diverse solutions built using the EXPRESSbase Platform. Share your requirements with our team and gain valuable insights to refine your strategies.
          </p>
        <div className='py-3'>
          <button className='btn ctb  fw-bold'>Schedule</button>
        </div>
        </div>
          </div>
          <div className="col-md-5">
          <div className='ctpg'><img src={ctpg} alt="Your Image" /></div>
          </div>
        </div>

       
    </div>
  )
}

export default Ctaheading