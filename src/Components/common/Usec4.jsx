import React from 'react';
import logo from '../images/Group.png'; // Import your logo file
import wfimg from '../images/Gdibba.jpg';
import './css/usecase.css';
import amt from '../images/vs.png';
import icu from '../images/icu.svg';
import ict from '../images/ict.svg';
import icd from '../images/icd.svg';
function Usec4() {
  return (
    <div>
      <div className="container">
        <div className="p-5">
          <div className="">
            <div className="text-md-center mb-4 mb-md-0">
            <div className="logo-container">
            <img src={icu} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='pare'>Use Case 04</p>
          </div>
              <h3 className="head" style={{ color: '#193054' }}>Quotation Management</h3>
              <div className="greenunderline"></div>
              <p className="pt-4">
                A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations. It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.
              </p>
            </div>
          </div>
          <div className="pt-5">
            <div className="container pt-4 mt-3">
              <div id="video-container">
                <iframe id="video-player" width="100%" height="568px" src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
              </div>

              {/* Solution list after the video */}
              <div className="pt-5">
                <h6>Streamline Your Quoting Process with Our Top Solutions</h6>
                <ol className="solution-list">
                  <li>HubSpot Sales Hub: Simplify quote creation and management. Customize templates and collaborate seamlessly.</li>
                  <li>Zoho CRM: Efficiently design, share, and manage client quotations. Stay organized and close deals faster.</li>
                  <li>PandaDoc: Create professional quotes effortlessly. Enjoy a user-friendly interface and real-time tracking.</li>
                  <li>Salesforce CPQ: Ideal for sales teams. Generate accurate quotes, handle pricing, and enhance efficiency.</li>
                  <li>Proposify:Perfect for SMBs. Automate proposals and manage quotes with ease.</li>
                </ol>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usec4;
