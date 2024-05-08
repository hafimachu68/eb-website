// ABmessages.jsx
import React from 'react';
import './css/abmessage.css'; // Import the CSS file for styling
import abm1 from '../images/abm1.png';
import abm2 from '../images/abm2.png';
import abm3 from '../images/abm3.png';
import abm4 from '../images/abm4.png';
import abm5 from '../images/abm5.png';
import at6 from '../images/abmr6.png';
import at7 from '../images/abmr7.png';
import at33 from '../images/abmr3.png';
import at5 from '../images/ambr5.png';
import abm6 from '../images/abm6.png';

import at1 from '../images/at1.png';
import at2 from '../images/at2.png';
import at3 from '../images/at3.png';
import at4 from '../images/at4.png';

function ABmessages() {
  return (
    <div className="m_v mt mb">
      <div className="container">
        <div className="row mv_com eb_mis" style={{ justifyContent: 'center' }}>
          <div className="col-md-10 col-md-offset-1 col-lg-offset-1 col-sm-offset-1 col-lg-10 col-sm-10 col-xs-12">
            <h5 className='absupport'>Supported By</h5>
          </div>
        </div>
        <div className="row mv_com eb_mis" >
          <div className="col-md-10 col-md-offset-1 col-lg-offset-1 col-sm-offset-1 col-lg-10 col-sm-10 col-xs-12">
            <div className="loops darker">
              <p className='abp'> Part of Leading LATAM’s startup accelarator’s Generation-21, got awarded $35k equity-free grant</p> 
              <div>
                <div className="image-wrappers">
                  <img src={abm1} alt="img" className=" limgs " />
                </div>
              </div> 
            </div>
            <div className="loops lighter">
              <div className="image-wrapp abm2">
                <img src={abm2} alt="img" className="rimg abm2" />                     
              </div>
              <p className='abp abp2'> Part of Leading MEA’s startup accelarator’s cycle-2</p>
            </div>
            <div className="loops darker">
              <p className='abp abp3'>Member of the Startup-Incubation program, awarded $17k scale-up grant</p>  
              <div className="image-wrapperk abm3">
                <img src={abm3} alt="img" className="limgk "  />
              </div>
            </div>
            <div className="loops lighter">
              <div className="image-wrapp">
                <img src={abm4} alt="img" className="rimg abm1"  />
              </div>
              <p className='abp'> Part of NASSCOM’s 10k startups program, selected for Innotrek 2018.</p>
            </div>
            <div className="loops darker">
              <p className='abp abp5'> Winner of Hack for Health Hackathon by eHealth & KDISC</p>  
              <div className="image-wrapper abm55">
                <img  src={abm5}alt="img" className="  limg abm5"  />
              </div>
            </div>
            <div className="loops lighter">
              <div className="image-wrapp">
                <img  src={abm6} className="rimg abm6" alt="img"  />
              </div>
              <p className='abp abp6'> Semi-finalist of the startup competition at GITEX 2021, Dubai</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mv_com eb_mis" >
          <div className="col-md-3 col-6 supportedbyico">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner">
                  <img src={at2} className="atrusted-img" alt="AWS" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner">
                  <img src={at1} className="atrusted-img" alt="Sus" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner ">
                  <img src={at33} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner ">
                  <img src={at4} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div> 
           <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner ">
                  <img src={at5} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div> 
           <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner ">
                  <img src={at6} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div> 
           <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody">
              <div className="trusted-item">
                <div className="trusted-item-inner ">
                  <img src={at7} className="atrusted-img"  alt="Google Cloud" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 supportedbyico pt-5">
            <div className="trusted-sec-body tbody ">
              <div className="trusted-item">
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

export default ABmessages;
