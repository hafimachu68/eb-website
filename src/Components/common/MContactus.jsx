import React from 'react'
import './css/contact.css';
import cnt1  from '../images/cnt1.png'; // Import your logo file
import cnt2  from '../images/cnt2.png'; // Import your logo file
import cnt3  from '../images/cnt3.png'; // Import your logo file
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
<div className="d-flex justify-content-between align-items-center icon-row">
    <a href="https://www.facebook.com/expressbase" className="text-reset circle-icon me-3">
        <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="https://x.com/expressbasesys" className="text-reset circle-icon me-3">
        <FontAwesomeIcon icon={faXTwitter} />
    </a>
    <a href="https://www.linkedin.com/company/expressbase-systems-private-limited/" className="text-reset circle-icon me-3">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://www.youtube.com/@expressbase2443" className="text-reset circle-icon me-3">
        <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a href="https://www.instagram.com/expressbasesys?igsh=MWRyYWRlN3l4NDRldg==" className="text-reset circle-icon me-3">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
</div>




                </div>
                <a href="https://maps.app.goo.gl/M5pGVp96fud5Sx2RA" target="_blank" rel="noopener noreferrer">

                <div className='container mphone'style={{backgroundImage: `url(${bg})`}}>
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
     </a>
            </div>
           

        </div>

</div>

    </div>
  )
}

export default MContactus