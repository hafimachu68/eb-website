import React from 'react'
import './css/git.css';
import ctpg  from '../images/ctpg.png'; // Import your logo file
import background from '../images/CTAbg.png'; // Import your image




function Mactaheading() {
  return (
    <div className='ctbg'style={{backgroundImage: `url(${background})`}}>
        <div className="row">
          <div className="col-md-7">
          <div className='text-white ctc'>
        <h1 className= 'cth py-3'>Curious? See It in Action! </h1>
        <div className="ctp pb-5">
        <p className=' '>Schedule Your Demo with EXPRESSbase now.</p>
        </div>
       
        <div className='pb-4'>
          <button className='btn ctb  fw-bold'>Book a Demo</button>
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

export default Mactaheading