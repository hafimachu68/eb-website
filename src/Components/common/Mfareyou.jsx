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
              Create powerful multi-lingual, multi-currency enterprise web forms with built-in audit trail, infinite validations and RBAC security. </p>
              <a href="https://zcal.co/sureba73">


                <button className="btn btnare text-light mt-4" type="submit">Book a Demo</button>
              </a>
            </div>
          </div>
          <div className="">
            <div className="container-fluid pt-4 mt-3">
              <div id="">
                <iframe id="" width="100%" height="250px"  src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mfareyou;
