import React from 'react';
import './css/about.css'; // Import your CSS file
import backgroundImage from '../images/Aboutus.png'; // Import your image


function Aboutus() {
  return (
    <div>
      <div className="aboutus-header" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="aboutoverlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 no-padd al_bottom">
                <h1 className="text-center ah fw-bold">Helping businesses achieve<br/>operational excellence through </h1>
                <h1 className="text-center ah fw-bold" style={{    color: '#4D86D6'}} > Internal Automation</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abcontent">
        <div className="container apara ">
          <p>Incorporated in the year 2016, we are on a mission to empower businesses of all sizes to turn their ideas into reality swiftly and seamlessly. We believe in democratizing software development, breaking down barriers, and enabling a new era where innovation knows no bounds. Our commitment is to provide a low-code platform that doesn't compromise on power or flexibility. We understand that every business is unique, and that's why our platform is designed to be agile, scalable, and adaptable to your specific needs.</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
