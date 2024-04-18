import React from 'react';
import './css/wform.css';
import wfimg from '../images/wfimg.png';

function Wform() {
  return (
    <div className="wform-container">
      <div className="wfoverlay"></div> {/* Transparent grey and black overlay */}
      <div className="wform">
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img src={wfimg} alt="" />
          </div>
          <div className="chat-message">
            <h5>Build & Deploy Enterprise class <br/> Forms 10x faster</h5>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container" >
          <div className=" mm  ">
            <h5>Build & Deploy Enterprise class <br/> Forms 10x faster</h5>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className=" mi">
            <img src={wfimg} alt="" />
          </div>  
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img src={wfimg} alt="" />
          </div>
          <div className="chat-message ">
            <h5>Build & Deploy Enterprise class <br/> Forms 10x faster</h5>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wform;
