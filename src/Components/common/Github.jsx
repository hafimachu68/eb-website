import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import feic from '../images/rbic.png';

import './css/git.css';

function GitHub() {
  return (
    <div>
      <div className="container text-center pg">
      <div className="logo-container">
            <img src={feic} alt="Logo" className="flogo" /> 
            <p className='feic rb'>CLOUD-NATIVE LOW-CODE </p>
          </div>
          <h3 className="head">We are on GitHub!</h3>
          <p className=" rb pt-3">
          100% Open-Source Low-Code cloud-native Platform </p> <div className='py-3'>
          <button className='btn btgit fw-bold'><i className='ic'><FontAwesomeIcon icon={faGithub} /></i> Star us On GitHub</button>
        </div>
      </div>  
      {/* <div  style={{ padding: '10px', marginTop:'70px' }}>
         
         </div> */}
    </div>
  )
}

export default GitHub;
