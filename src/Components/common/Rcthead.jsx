import React from 'react';
import './css/git.css';
import background from '../images/webg.png'; // Import your image
import ctpg  from '../images/ctpg.png'; // Import your logo file



function Rctahead() {
  return (
    <div className='rctbg1'style={{backgroundImage: `url(${background})`}}>
    <div className="row">
      <div className="col-md-7">
      <div className='text-white ctc'>
    <h1 className= 'cth py-3'>We're just a click away! </h1>
    <div className="ctp pb-5">
    <p className=' '>
    Feel free to click  to get in touch with our friendly and knowledgeable team who are ready to assist you with any inquiries or support you may need.      </p>
    </div>
   
    <div className='pb-4'>
      <button className='btn ctb  fw-bold'>Schedule</button>
    </div>
    </div>
      </div>
      <div className="col-md-5 ctmg">
      <div className='rctpg'><img src={ctpg} alt="Your Image" /></div>
      </div>
    </div>

   
</div>
  );
}

export default Rctahead;
