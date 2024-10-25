import React from 'react';
import './css/home.css';
import logo from '../images/reportg.png'; // Import your logo file

function RPareyou() {
  return (
    <div>
      <div className="container-fluid ">
        <div className=" py-5 ">
          <div className=" full">
            <div className="text-md-center mb-4 mb-md-0 mare">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo lf" /> {/* Insert your logo here */}
                <p className='pare'>Reports</p>
              </div>
            <h3 className="head text-center">Low-Code Reporting tools for Modern Businesses to accelerate decision making </h3>
              <p className="para1 pt-4">
              Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.               </p>
              <a href="https://zcal.co/sureba73">


                <button className="btn btnare text-light mt-4" type="submit">Book a Demo</button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default RPareyou;
