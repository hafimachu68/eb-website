import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import host from '../images/RBAC1.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Prbac() {
  return (
    <div className=' text-cente pt-5 ptruly'> 
        <div className="text-center ">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
          <p className='pare'>Security</p>
        </div>
        <h3 className="phead">Application Security using RBAC</h3>
        <p className="ppara1 pt-4">
        Unlimited Roles, Roles hierarchy, Constraints- Confirms to RBAC Standard   </p>  
       </div>
       <div className="row-container prrow">
       <div className="left-content">
       <p className='prleft'>Role-Based Access Control (RBAC) standardizes user authorization by assigning permissions based on predefined roles. With RBAC, you can create an unlimited number of roles, each grouping specific permissions or even other roles. This flexible system streamlines access management, ensuring that users only have the permissions necessary for their roles, enhancing security and simplifying administration.
               </p>          </div>
          <div className="right-content">
           
               <img src={host}alt="Image" className="prright" />

          </div>
         
        </div>
        <div className="proverlay"></div>
    </div>

  )
}

export default Prbac