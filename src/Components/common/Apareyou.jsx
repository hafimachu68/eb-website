import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import wfimg from '../images/wfimg.png';



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
          <h3 className="head" style={{ color: '#193054' }}>Low-Code Reporting tools for Modern Businesses to accelerate decision making</h3>
          <div className="greenunderline"></div>
          <p className="para1 pt-4">
          Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.          </p>
        
        </div>
      </div>
      <div className="pt-5">
        <div className="container pt-4 mt-3">
          <div id="video-container">
            <iframe id="video-player" width="100%" height="568px" src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </div>
          <p className="para1 pt-5">
          Efficiently integrate third-party applications into your workflow using our futuristic API builder. Our intuitive platform simplifies cross-platform connectivity, empowering you to unlock new possibilities for productivity and growth. With seamless API integration, you can streamline operations, enhance collaboration, and leverage diverse tools effortlessly, ensuring your business stays agile and competitive in a rapidly evolving digital landscape.</p>       
        </div>
        <div className="wform">
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg} alt="" />
          </div>
          <div className="chat-message">
            <div>
              <p>
              Centralized Access: Keep all your documents in one place, accessible anytime, anywhere.               
               </p>
            </div>
          </div>
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container" >
          <div className=" mm  ">
            <div>
            <p>
            Enhanced Collaboration: Work together seamlessly with team members, no matter where they are.               </p>            </div>
          </div>
          <div className=" mi">
            <img className='wfimg' src={wfimg} alt="" />
          </div>  
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg} alt="" />
          </div>
          <div className="chat-message ">
            <div>
            <p>
            Secure Storage: Rest easy knowing your documents are protected with top-notch security measures.               </p>            </div>
          </div>
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container pb-5" >
          <div className=" mm  ">
            <div>
            <p>
            Automated Workflows: Simplify your processes with automated document routing and approval.               </p>            </div>
          </div>
          <div className=" mi">
            <img className='wfimg' src={wfimg} alt="" />
          </div>  
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