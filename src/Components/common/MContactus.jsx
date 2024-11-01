import React from 'react'
import './css/contact.css';
import cnt1  from '../images/c13.svg'; // Import your logo file
import cnt3  from '../images/c12.svg'; // Import your logo file
import cnt2  from '../images/c11.svg'; // Import your logo file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import insta  from '../images/insta.svg'; // Import your logo file
import x  from '../images/x.svg'; // Import your logo file
import cnt7  from '../images/cnt7.png'; // Import your logo file
import Cform from './Cform';
import background from '../images/cntct.png'; // Import your image
import bg from '../images/phone.png'; // Import your image




function MContactus() {
  return (
    <div className='cnm'>
         <div className="mcontact-header"style={{backgroundImage: `url(${background})`}}>
      <div className="mcontact-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 no-padd ">
              <h1 className="ch fw-bold">Contact Us </h1>
              <p className="  " >
              Your path to streamlined efficiency starts here.           </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mcnlay">
        <div className="row">
        <div className="col-md-6">
            <div className='container mcform '>
                <h4>Drop in a text</h4>
                <Cform/>
            </div>

            </div>
            <div className="col-md-6 mt-4">
                <div className='container mlocate'>
                <div className="row mt-2">
    <div className="col-md-6 d-flex align-items-center">
        <img className='loc' src={cnt1} alt="" />
        <p>Integrated Startup Complex, KINFRA Hi-Tech Park, Kalamassery, Kochi 683503, INDIA.</p>
    </div>
</div>
<div className="row mt-2">
    <div className="col-md-6 d-flex align-items-center">
        <img className='loc1' src={cnt2} alt="" />
        <p>+91 85890 71379</p>
    </div>
</div>
<div className="row mt-2">
    <div className="col-md-6 d-flex align-items-center">
        <img className='loc2' src={cnt3} alt="" />
        <p>www.expressbase.com</p>
    </div>
</div>
<div className="d-flex justify-content-between align-items-center icon-row mt-4">
    <a href="https://www.facebook.com/expressbase" className="text-reset ccircle-icon me-3">
        <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="https://x.com/expressbasesys" className="text-reset ccircle-icon me-3">
        <FontAwesomeIcon icon={faXTwitter} />
    </a>
    <a href="https://www.linkedin.com/company/expressbase-systems-private-limited/" className="text-reset ccircle-icon me-3">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://www.youtube.com/@expressbase2443" className="text-reset ccircle-icon me-3">
        <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="https://www.instagram.com/expressbasesys?igsh=MWRyYWRlN3l4NDRldg==" className="text-reset ccircle-icon me-3">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
</div>




                </div>
                <div className='container map-container'>
              <h2 className="fw-bold">Locate Us</h2>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5330414481523!2d76.35196277407839!3d10.055337172082005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d1555556b%3A0x29f4bf576cb3e547!2sEXPRESSbase%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730451156304!5m2!1sen!2sin" 
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
            </div>
           

        </div>

</div>

    </div>
  )
}

export default MContactus