import React from 'react';
import './css/abvdo.css'; // Import your CSS file
import traimg from '../images/mcta.png';
import background from '../images/CTAbg.png'; // Import your image

function ABcthead() {
  return (
    <div className='Abctbg'style={{backgroundImage: `url(${background})`}}>
      <div className="Abcontent container ctb1 ">
        <div className=" container left text-white">
         <h1 className= 'acth py-2'>Curious? Block a date to <br/> see It in Action! </h1>
        <p className='actp py-2'>Schedule Your Demo with EXPRESSbase now. </p> 
         <div className='py-2'>
          <a href="https://zcal.co/sureba73">
          <button className='btn actb fw-bold'>Book a Demo</button>
          </a>
        </div>
        </div>
        <div className="righta">
            <div className='abmg11' >
            <img src={traimg} className='ctpimg p-5 mt-3' alt="Traimg" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ABcthead;
