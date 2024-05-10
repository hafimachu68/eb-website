import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import host from '../images/pimg.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Ptruly() {
  return (
    <div className=' text-cente pt-5 ptruly'> 
        <div className="text-center ">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
          <p className='pare'>Database</p>
        </div>
        <h3 className="phead">Truly Multi-tenant Platform</h3>
        <p className="ppara1 pt-4">
        Providing individualized database environments,   </p>  
       </div>
       <div className="row-container psrow">
       <div className="left-content">
            <img src={host}alt="Image" className="psleft" />
          </div>
          <div className="right-content">
            <p className='psright'>EXPRESSbase is a truly multi-tenant database system, where each client/solution is allocated a dedicated database, ensuring complete isolation and customization tailored to their specific requirements. This approach empowers clients with personalized data realms, allowing them to efficiently manage and optimize their unique datasets while benefiting from the scalability and cost-effectiveness of a shared infrastructure. </p>
          </div>
         
        </div>
       
    </div>
  )
}

export default Ptruly