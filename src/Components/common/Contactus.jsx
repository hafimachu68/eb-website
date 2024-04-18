import React from 'react'
import './css/contact.css';
import cnt1  from '../images/cnt1.png'; // Import your logo file
import cnt2  from '../images/cnt2.png'; // Import your logo file
import cnt3  from '../images/cnt3.png'; // Import your logo file
import cnt4  from '../images/cnt4.png'; // Import your logo file
import cnt5  from '../images/cnt5.png'; // Import your logo file
import cnt6  from '../images/cnt6.png'; // Import your logo file
import cnt7  from '../images/cnt7.png'; // Import your logo file
import Cform from './Cform';



function Contactus() {
  return (
    <div>
         <div className="contact-header">
      <div className="contact-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 no-padd al_bottom">
              <h1 className="ah fw-bold">Contact Us </h1>
              <p className="  " >
              Connect your database and turn your data into attractive tables, charts or <br/>
               portable reports using our futuristic Drag-n-Drop builders on the Cloud.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container cnlay">
        <div className="row">
            <div className="col-md-6">
                <div className='container locate'>
                <div className="row pt-3">
                    <div className="col-md-2">
                    <i> <img className='loc mx-5' src={cnt1} alt="" /> </i>
                    </div>
                    <div className="col-md-10">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-2">
                    <i> <img className='pv mx-5' src={cnt2} alt="" /> </i>
                    </div>
                    <div className="col-md-10">
                        <p>123-456-789-0</p>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-2">
                    <i> <img className='pv mx-5' src={cnt3} alt="" /> </i>
                    </div>
                    <div className="col-md-10">
                        <p>www.xyz.com</p>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-2">
                    <i> <img className='pv mx-5' src={cnt4} alt="" /> </i>
                    </div>
                    <div className="col-md-2 ">
                    <i> <img className='pv  ' src={cnt5} alt="" /> </i>
                    </div>
                    <div className="col-md-2">
                    <i> <img className='pv tw' src={cnt6} alt="" /> </i>
                    </div>
                    <div className="col-md-2">
                    <i> <img className='pv ytb' src={cnt7} alt="" /> </i>
                    </div>
                    
                  </div>
                </div>
                <div className='container phone'>
                <div className="contact-overlay">
        <div className="container lc">
          <div className="row">
            <div className="col-md-12 no-padd ">
              <h2 className=" fw-bold">Locate Us </h2>
            </div>
          </div>
        </div>
      </div>
     </div>
            </div>
            <div className="col-md-6">
            <div className='container cform '>
                <h4>Drop in a text</h4>
                <Cform/>
            </div>

            </div>

        </div>

</div>

    </div>
  )
}

export default Contactus