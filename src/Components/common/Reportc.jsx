import React from 'react';
import logo from '../images/reportg.png'; // Import your logo file
import './css/report.css'; // Import your CSS file


function Reportc() {
  return (
    <div>
      <div className="container">
        <div className="p-5">
          <div className="text-md-center mb-4 mb-md-0">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo lf" /> {/* Insert your logo here */}
              <p className='pare'>REPORTS</p>
            </div>
            <h3 className="head">Low-Code Reporting tools for Modern Businesses to accelerate decision making</h3>
            <p className="para1 pt-2">
            Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.           </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Reportc;
