import React from 'react';
import './css/home.css';
import logo from '../images/wformg.png'; // Import your logo file

function Mfareyou() {
  return (
    <div>
      <div className="container ">
        <div className=" p-5 ">
          <div className=" full">
            <div className="text-md-center mb-4 mb-md-0 mare">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
                <p className='pare'>Web Forms</p>
              </div>
            <h3 className="head text-center">Build complex enterprise class Web Forms  10x faster </h3>
              <p className="para1 pt-4">
              Build & run internal business process applications on the cloud 10x faster.<br/> 
              Get the stability of Ready-Made software, and the flexibility of Custom software.  </p>
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

export default Mfareyou;
