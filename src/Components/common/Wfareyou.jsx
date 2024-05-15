import React from 'react';
import './css/home.css';
import logo from '../images/wformg.png'; // Import your logo file

function Wfareyou() {
  return (
    <div>
      <div className="container">
        <div className=" p-5">
          <div className="">
            <div className="text-md-center mb-4 mb-md-0">
              <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
                <p className='pare'>WEB FORMS</p>
              </div>
              <h3 className="head" style={{ color: '#193054' }}>Build complex enterprise class Web Forms 10x faster </h3>
              <div className="greenunderline"></div>
              <p className="para1 pt-4">
              Create powerful multi-lingual, multi-currency enterprise web forms with built-in audit trail, infinite validations and RBAC security.</p>
              {/* <a href="https://calendly.com/expressbase">
                <button className="btn btn-primary text-light mt-4" style={{ backgroundColor: '#0A142F' }} type="submit">Book a Demo</button>
              </a> */}
            </div>
          </div>
          <div className="pt-3">
            <div className="container pt-4 mt-3">
              <div id="video-container">
                <iframe id="video-player" width="100%" height="568px" src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wfareyou;
