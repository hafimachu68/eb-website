import React from 'react'
import './css/home.css';
import feic from '../images/rbic1.png';
import RBAC from '../images/RBAC1.png';
function Mexdb() {
  return (
    <div>
        <div className='db'>
        <div className="container text-center pt-5">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={feic} alt="Logo" className="flogo" /> 
            <p className='feic rb'>APPLICATION SECURITY </p>
          </div>
          <h3 className="head">Role Based Access Control (RBAC)</h3>
          <p className=" para1 pt-3">
          Role Based Access Control (RBAC) standard helps you authorize users by roles.
           Create unlimited roles by grouping permissions or even roles. </p>
     
     <div className="rbac pt-5">
      <img className='rbpg' src={RBAC} alt="" />
     </div>

        </div>
        </div>
        </div>
        {/* <div className="emptylay">

        </div> */}
    
    </div>
  )
}

export default Mexdb