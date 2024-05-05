import React from 'react'
import logo from '../images/Group.png'; // Import your logo file


function Apareyou() {
  return (
    <div>  <div className="container">
    <div className=" p-5">
      <div className="">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='pare'>Sub Heading</p>
          </div>
          <h3 className="head" style={{ color: '#193054' }}>The ideal Reporting-as-a-Service to fill <br/> gaps in your ERP/Legacy Apps.</h3>
          <div className="greenunderline"></div>
          <p className="para1 pt-4">
            Connect your database and turn your data into attractive tables, charts or portable reports using our futuristic Drag-n-Drop builders on the Cloud.
          </p>
          {/* <a href="https://calendly.com/expressbase">
            <button className="btn btn-primary text-light mt-4" style={{ backgroundColor: '#0A142F' }} type="submit">Book a Demo</button>
          </a> */}
        </div>
      </div>
      <div className="pt-5">
        <div className="container pt-4 mt-3">
          <div id="video-container">
            <iframe id="video-player" width="100%" height="568px" src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="doclay">
    
    </div>
  </div>
  )
}

export default Apareyou