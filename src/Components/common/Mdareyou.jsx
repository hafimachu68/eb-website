import React from 'react';
import './css/home.css';
import logo from '../images/docug.png'; // Import your logo file
import MDcarousels from './MDcarousels';

function Mdareyou() {
  return (
    <div>
      <div className="container ">
        <div className=" py-5">
          <div className=" full">
            <div className="text-md-center mb-4 mb-md-0 mare">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
                <p className='pare'>Documents </p>
              </div>
            <h3 className="head text-center">Document Management for business apps </h3>
              <p className="para1 pt-4">
              A document management system that seamlessly integrates into your business process. Say goodbye to toggling between platforms—manage documents in- context,  ensuring seamless access to crucial information.   </p>
              {/* <p className="para1 mx-5 pt-5">
        Welcome to the future of efficient document handling. Our cutting-edge Document Management System (DMS) integrates all your document needs into one cohesive platform. No more juggling between different applications or losing track of crucial files.          </p>
     */}
               <a href="https://zcal.co/sureba73">
                <button className="btn btnare text-light mt-4" type="submit">Book a Demo</button>
              </a>
            </div>
          </div>
       
        </div>
      </div>
      <MDcarousels/>
    </div>
  );
}

export default Mdareyou;
