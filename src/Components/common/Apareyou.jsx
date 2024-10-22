import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import wfimg from '../images/wfimg.png';
import wfimg4 from '../images/api11.png';
import wfimg2 from '../images/api22.png';
import wfimg3 from '../images/api33.png';
import api from '../images/apid.png'; // Import your logo file




function Apareyou() {
  return (
    <div>
    <div className="container">
      <div className=" p-5">
        <div className="">
          <div className="text-md-center mb-4 mb-md-0">
            <div className="logo-container">
              <img src={api} alt="Logo" className="logo" /> {/* Insert your logo here */}
              <p className='pare'>APIs</p>
            </div>
            <h3 className="head" style={{ color: '#193054' }}>Low-Code API Solutions for Modern Businesses to Simplify Integration</h3>
            <div className="greenunderline"></div>
            <p className="para1 pt-4">
            Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.            </p>
            <p className="para1 pt-4"style={{ marginTop:'6rem' }}>
            Efficiently integrate third-party applications into your workflow using our futuristic API builder. Our intuitive platform simplifies cross-platform connectivity, empowering you to unlock new possibilities for productivity and growth. With seamless API integration, you can streamline operations, enhance collaboration, and leverage diverse tools effortlessly, ensuring your business stays agile and competitive in a rapidly evolving digital landscape.               </p>
          
          </div>
        </div>
       
      </div>
    </div>
    <div className="awform-container " style={{ marginTop:'6rem' }} >
      {/* <div className="wfoverlay"></div> Transparent grey and black overlay */}
      <div className="wform mt-3">
        <div className="wform-chat-container ">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg} alt="" />
          </div>
          <div className="chat-message">
            <h5>Seamless Integration, Streamlined Operations</h5>
            <div>
              <p className='chat-p'>
              Our intuitive platform ensures seamless API integration, allowing you to streamline operations and enhance collaboration. By leveraging diverse tools effortlessly, your business can focus on what truly matters—innovation and growth.                 </p>
            </div>
          </div>
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container" >
          <div className=" mm  ">
            <h5> Enhance Collaboration and Connectivity</h5>
            <div>
              <p className='chat-p'>
              With our API builder, cross-platform connectivity becomes a breeze. Whether you need to connect disparate systems or integrate new tools into your existing workflow, our platform makes it easy. Enhance collaboration within your team and with external partners, ensuring everyone is on the same page and working towards common goals.                </p>
            </div>
          </div>
          <div className=" mi">
            <img className='mwfimg' src={wfimg2} alt="" />
          </div>  
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg3} alt="" />
          </div>
          <div className="chat-message ">
            <h5>Stay Agile in a Rapidly Evolving Landscape</h5>
            <div>
              <p className='chat-p'>
              The digital landscape is constantly evolving, and businesses need to adapt quickly to stay ahead. Our API builder empowers you to do just that. With the ability to integrate new applications swiftly, you can respond to market changes and customer needs faster than ever before.                 </p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
  )
}

export default Apareyou