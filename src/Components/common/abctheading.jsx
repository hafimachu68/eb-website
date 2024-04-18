import React from 'react';
import './css/abvdo.css'; // Import your CSS file
import traimg from '../images/traimg.png';
import trlmg from '../images/trlmg.png';

function ABcthead() {
  return (
    <div className='Abctbg'>
      <div className="Abcontent container ">
        <div className=" container left text-white">
        <h1 className= 'acth py-3'>CTA Heading</h1>
        <p className='actp py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
         <div className='py-3'>
          <button className='btn actb  fw-bold'>Contact Us</button>
        </div>
        </div>
        <div className="right">
            <div className='abmg1' >
            <img src={traimg} alt="Traimg" />
            </div>
            <div> 
            <img src={trlmg} alt="Trlmg" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ABcthead;
