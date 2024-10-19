import React from 'react';
import './css/wform.css';
import wfimg from '../images/fm.png';
import wfimg2 from '../images/fm2.png';
import wfimg3 from '../images/f3.png';
import wfimg4 from '../images/f4.png';
import wfimg5 from '../images/f5.png';

function Wform() {
  return (
    <div className="wform-container">
      {/* <div className="wfoverlay"></div> Transparent grey and black overlay */}
      <div className="wform mt-3">
        <div className="wform-chat-container ">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg} alt="" />
          </div>
          <div className="chat-message">
            <h5>Plethora of controls & properties</h5>
            <div>
              <p className='chat-p'>A rich array of controls and properties, providing developers with an extensive toolkit for application development. Developers can rapidly build sophisticated applications tailored to their specific requirements, all without delving deeply into traditional coding practices. This abundance of tools empowers developers to design, customize, and deploy applications efficiently, accelerating the development cycle and fostering innovation within organizations.    </p>
            </div>
          </div>
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container" >
          <div className=" mm  ">
            <h5>Data pushers</h5>
            <div>
              <p className='chat-p'>Send data from a single source form to multiple destination forms. For instance, push data from an invoice form to a journal voucher form. Similarly, from a salesman receipt form, send data to various destination forms like journal vouchers (cash receipts), stock adjustment forms (for shortages or excesses of issued stock), and more.        </p>
            </div>
          </div>
          <div className=" mi">
            <img className='wfimg' src={wfimg2} alt="" />
          </div>  
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg3} alt="" />
          </div>
          <div className="chat-message ">
            <h5>Import from Excel</h5>
            <div>
              <p className='chat-p'>Migrating data from legacy systems can be complex, but leveraging Excel as an intermediary tool for exporting and importing data streamlines the process. Exporting data into Excel allows for easy manipulation and preparation, ensuring a smooth transition into EXPRESSbase using standard import formats like CSV or XLSX. This approach simplifies data migration, reduces the risk of errors, and enables effective participation from users of all technical levels.      </p>
            </div>
          </div>
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container" >
          <div className="mm">
            <h5>Constraints</h5>
            <div>
              <p className='chat-p'>Implementing granular restrictions on create, edit, cancel, and delete actions for form submissions is critical beyond general application security measures. Business logic often requires specific conditions to be enforced, preventing certain actions based on contextual rules or workflow requirements. By applying these restrictions, organizations can ensure data integrity, regulatory compliance, and operational consistency within their applications. </p>
            </div>
          </div>
          <div className=" mi">
            <img className='wfimg' src={wfimg4} alt="" />
          </div>  
        </div>
        <div className="wform-divider"></div>
        <div className="wform-chat-container">
          <div className="chat-image fL">
            <img className='wfimg' src={wfimg5} alt="" />
          </div>
          <div className="chat-message ">
            <h5>Audit Trails</h5>
            <div>
              <p className='chat-p'>
              An audit trail is crucial for tracking and documenting all user actions and changes within the system. It ensures accountability, transparency, and security by providing a detailed log of data access, modifications, and deletions, which is essential for regulatory compliance, security incident investigations, and maintaining data integrity. Audit trails also enable businesses to monitor user behavior effectively and enhance governance and risk management practices.                 </p>
            </div>

          </div>
       

        </div>
      </div>
    </div>
  );
}

export default Wform;
