import React from 'react'
import './css/documents.css';
import wfimg from '../images/wfimg.png';



function Document() {
  return (
    <div>
        <div className='dctbg'>
    <div className=" dctc">
      <div>
        <h1 className='dcth py-3 text-center'>Document Management for business apps <br/>
        like never before</h1>
        <p className='para1 pt-3 pb-5 text-center'>A document management system that seamlessly integrates into your business process. Say goodbye to toggling between platforms—manage documents in- <br/>context,  ensuring seamless access to crucial information.</p>
        <p className="para1 mx-5 pt-5">
        Welcome to the future of efficient document handling. Our cutting-edge Document Management System (DMS) integrates all your document needs into one cohesive platform. No more juggling between different applications or losing track of crucial files.          </p>
      </div> 
      <div className="dform-container">
      {/* <div className="wfoverlay"></div> Transparent grey and black overlay */}
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
        <div className="wform-chat-container" >
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

export default Document