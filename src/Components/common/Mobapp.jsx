import React from 'react';
import './css/mob.css';
import logo from '../images/Group.png'; // Import your logo file
import mobpg from '../images/bin.png';
import mobp from '../images/mg.png';


function Mobapp() {

  return (
    <div>
        <div className="container pt-5">
            <div className="text-md-center mb-4 mb-md-0">
              <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
                <p className='pare'>Sub Heading</p>
              </div>
              <h3 className="head" style={{ color: '#193054' }}>Empower Your fast growing business with Internal Mobile Apps</h3>
              <p className="para1 pt-4">
              Transform your organization's internal processes with our low-code mobile app platform. From task management to internal communications, our apps empower your team to collaborate seamlessly and stay productive from anywhere.               </p>
                 <div className="container ">
      <div className="row mt-5">
      <div className="col-md-6 pt-5">
      <div className= 'mchat-message'>
              <h5 className='mhead'>Empower Your fast growing business with Internal Mobile Apps</h5>
               <p>
               Our internal mobile app is designed to provide seamless functionality even when offline, ensuring that your productivity is never hindered by network issues. When you are offline, you can continue to use all the features of the app, entering and accessing data as usual. Once a network connection is re-established, the app automatically syncs all the offline data, saving it securely without any loss. This robust offline capability ensures that your data remains intact and accessible, providing a smooth and reliable user experience under all circumstances.                   </p>
            </div>
          
        </div>
        <div className="col-md-6">
          <div className="pt-5 me-5">
          <div className=" mimg ">

         <img className='mobg' src={mobp}  />
       </div>
            
          </div>
        </div>
       
      </div>
         </div>

          </div>
          </div>
          <div className="container rc mt-5">
      <div className="row">
      <div className="col-md-6 p-3">
          <div className=" mimg ">
            <img className='mobg' src={mobpg}  />
          </div>
        </div>
        <div className="col-md-6">
          <div className="pt-5 me-4">
            <div className= 'rm   mlchat-message'>
              <h5 className='mhead'>Ensuring Data Integrity with the Error Bin Feature</h5>
               <p>
               The Error Bin feature in our mobile app ensures that no data is lost even when an error occurs during form submission. If data fails to be saved or an error is encountered, the information is automatically moved to the Error Bin. This allows to review the problematic data, make necessary corrections, and then successfully push it to the database. The Error Bin feature ensures data integrity and reliability, providing a safety net that captures and resolves submission issues efficiently.                </p>
            </div>
            
          </div>
        </div>
       
      </div>
         </div>

        </div>
  )
}

export default Mobapp