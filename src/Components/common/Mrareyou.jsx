import React from 'react';
import './css/home.css';
import logo from '../images/reportg.png'; // Import your logo file

function Mrareyou() {
  return (
    <div>
      <div className="container ">
        <div className=" p-5 ">
          <div className=" full">
            <div className="text-md-center mb-4 mb-md-0 mare">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
                <p className='pare'>REPORTS</p>
              </div>
            <h3 className="head text-center">Low-Code Reporting tools for Modern Businesses to accelerate decision making </h3>
              <p className="para1 pt-4">
              Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.  </p>
              <a href="https://calendly.com/expressbase">
                <button className="btn btnare text-light mt-4" type="submit">Book a Demo</button>
              </a>
            </div>
          </div>
          <div className="">
            <div className="container pt-4 mt-3">
              <div id="">
                <iframe id="" width="350px" height="310px" style={{marginLeft:'-5rem'}} src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mrareyou;
