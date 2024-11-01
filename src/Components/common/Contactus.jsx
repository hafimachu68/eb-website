import React from 'react';
import './css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

import cnt1 from '../images/c13.svg';
import cnt3 from '../images/c12.svg';
import cnt2 from '../images/c11.svg';
import Cform from './Cform';
import background from '../images/cntct.png';

function Contactus() {
  return (
    <div>
      <div className="contact-header" style={{ backgroundImage: `url(${background})` }}>
        <div className="contact-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 no-padd al_bottom">
                <h1 className="ch fw-bold">Contact Us</h1>
                <p>Your path to streamlined efficiency starts here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container cnlay">
        <div className="row">
          <div className="col-md-6">
            <div className="container locate">
              <div className="row pt-3">
                <div className="col-md-2">
                  <i><img className='loc mx-5' src={cnt1} alt="" /></i>
                </div>
                <div className="col-md-10">
                  <p>Integrated Startup Complex, KINFRA Hi-Tech Park, Kalamassery, Kochi 683503, INDIA.</p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-2">
                  <i><img className='pv mx-5' src={cnt2} alt="" /></i>
                </div>
                <div className="col-md-10">
                  <p>+91 85890 71379</p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-2">
                  <i><img className='pv mx-5' src={cnt3} alt="" /></i>
                </div>
                <div className="col-md-10">
                  <p>www.expressbase.com</p>
                </div>
              </div>
              <div className="d-flex justify-content-normal align-items-center icon-row mt-5" style={{ marginLeft: '3rem' }}>
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

            {/* Embedded Google Map */}
            <div className='container map-container'>
              <h2 className="fw-bold">Locate Us</h2>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5330414481523!2d76.35196277407839!3d10.055337172082005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d1555556b%3A0x29f4bf576cb3e547!2sEXPRESSbase%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730451156304!5m2!1sen!2sin" 
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
          </div>

          <div className="col-md-6">
            <div className='container cform '>
              <h4>Drop in a text</h4>
              <Cform />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
