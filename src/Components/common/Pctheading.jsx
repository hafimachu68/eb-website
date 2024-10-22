import React from 'react'
import './css/git.css';
import ctpg  from '../images/mcta.png'; // Import your logo file
import background from '../images/CTAbg.png'; // Import your image




function Pctaheading() {
  return (
    <div className='pctbg pt-4'style={{backgroundImage: `url(${background})`}}>
        <div className="row" style={{paddingBottom:'2rem'}}>
          <div className="col-md-7 ">
          <div className='text-white pctc'>
        <h1 className= 'cth py-3'>We're just a click away! </h1>
        <div className="ctp pb-5">
        <p className=' '>Feel free to click  to get in touch with our friendly and knowledgeable team who are ready to assist you with any inquiries or support you may need.
           </p>
        </div>
       
        <div className='pb-4'>
        <a href="https://zcal.co/sureba73">

          <button className='btn ctb  fw-bold'>Contact Us</button>
          </a>
        </div>
        </div>
          </div>
          <div className="col-md-5 ctmg ">
          <div className='ctpg ' style={{marginTop:"3rem"}} >
            <img src={ctpg} className='ctpimg ' alt="Your Image" />
            </div>
          </div>
        </div>

       
    </div>
  )
}

export default Pctaheading