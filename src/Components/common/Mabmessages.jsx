// ABmessages.jsx
import React from 'react';
import './css/abmessage.css'; // Import the CSS file for styling

import at6 from '../images/abmr6.png';
import at7 from '../images/abmr7.png';
import at33 from '../images/abmr3.png';
import at5 from '../images/ambr5.png';

import at1 from '../images/at1.png';
import at2 from '../images/at2.png';
import at3 from '../images/at3.png';
import at4 from '../images/at4.png';
import Mmessage from './Mmessage';

function Mabmessages() {
  return (
   
    <div className="m_v mt mb">
      <div className="container">
        <div className="row mv_com eb_mis" style={{ justifyContent: 'center' }}>
          <div className="col-md-10 col-md-offset-1 col-lg-offset-1 col-sm-offset-1 col-lg-10 col-sm-10 col-xs-12">
            <h5 className='absupport'>Supported By</h5>
          </div>
        </div>
      </div>
      <Mmessage/>
      <div className="container">
        <div className="row mv_com eb_mis" >
          <div className="col-md-3 col-6 supportedbyico">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner">
                  <img src={at2} className="atrusted-img" alt="AWS" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner">
                  <img src={at1} className="atrusted-img" alt="Sus" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico pt-4">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner ">
                  <img src={at33} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico pt-4">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner ">
                  <img src={at4} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div> 
           <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner ">
                  <img src={at5} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div> 
           <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner ">
                  <img src={at6} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div> 
           <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody">
              <div className="mtrusted-item">
                <div className="trusted-item-inner ">
                  <img src={at7} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody ">
              <div className="mtrusted-item">
                <div className="trusted-item-inner">
                  <img src={at3} className="atrusted-img" alt="Microsoft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mabmessages;
