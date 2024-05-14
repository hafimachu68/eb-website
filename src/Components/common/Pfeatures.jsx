import React, { useState, useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/features.css';

import pf1 from '../images/pf1.png';
import pf2 from '../images/pf2.png';
import pf3 from '../images/pf3.png';
import pf4 from '../images/pf4.png';
import pf5 from '../images/pf5.png';
import pf6 from '../images/pf6.png';
import pf7 from '../images/pf7.png';
import pf8 from '../images/pf8.png';
import pf9 from '../images/pf9.png';



function Pfeatures() {
  
  return (
    <div>
      <div className="">
      <div className="container text-center ">
       
        </div>
        <div className="container text-center">
        <div
            className='row sb ' >
            <div className="col-md-4 col-sm-6 pt-4 center">
              <img className='pdeploy' src={pf1} alt="" />
              <h5 className="t-head da " style={{ color: '#193054' }}>Futuristic Builders</h5>
              <p className="pfeatures">Forget about the server infrastructure, leave it to us. Focus on your applications and business.
                    </p>
            </div>
            <div className="col-md-4 col-sm-6  pt-4 center">
            <img className="rdeploy" src={pf2} alt="" />
              <h5 className="t-head da" style={{ color: '#193054' }}>Low Code</h5>
              <p className="pfeatures">No-code platforms can't handle complex needs. That's why we're low-code. Use your skills: code in JavaScript, C#, & SQL</p>
            </div>
            <div className="col-md-4 col-sm-6  pt-4 center ">
              <img className='pdeploy' src={pf3}alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Deploy Anywhere</h5>
              <p className="pfeatures">Use our best-in-class developer studio to develop business apps that can run on web and  mobile.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='pdeploy' src={pf4} alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Reusability</h5>
              <p className="pfeatures">RBAC (Role Based Access Control) standard authorizes users by roles. Group permissions or roles to create unlimited roles.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='pdeploy' src={pf5 }alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Versioning</h5>
              <p className="pfeatures">No code platforms don’t work for complex requirements. Precisely why we are low-code. Put your existing skills to use, code in JavaScript, C# & SQL.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='ppdeploy' src={pf6} alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Multi Location</h5>
              <p className="pfeatures">Traditional development is costly and time-consuming. Build complex business apps 10x faster with our platform.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='pdeploy' src={pf7} alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Multi Currency</h5>
              <p className="pfeatures">RBAC (Role Based Access Control) standard authorizes users by roles. Group permissions or roles to create unlimited roles.  </p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='pdeploy' src={pf8 }alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Audit Trail</h5>
              <p className="pfeatures">No-code platforms can't handle complex needs. That's why we're low-code. Use your skills: code in JavaScript, C#, & SQL </p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='pdeploy' src={pf9} alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#193054' }}>Security</h5>
              <p className="pfeatures">RBAC (Role Based Access Control) standard authorizes users by roles. Group permissions or roles to create unlimited roles.</p>
            </div>
          </div>
         </div>
        
      </div>
    </div>
  );
}

export default Pfeatures;