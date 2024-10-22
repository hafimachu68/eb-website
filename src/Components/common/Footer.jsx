import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import exlog from '../images/exlog.png';
import insta from '../images/insta.svg';
import './css/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='Fcolor'>
      <footer className="container">
        <section className="row d-flex justify-content-between p-5 mt-2">
          <div className="col-md-6 col-lg-6 mb-4">
            {/* Content */}
            <img className='fimg' src={exlog} alt="" />
            <p className='mt-4 py-2 para1' style={{width:'77%',lineHeight:'2'}}>
            ExpressBase Systems specializes in low-code solutions, offering customizable  CRM, ERP, mobile apps,  chatbot integrations and many more to streamline operations and boost efficiency.
            </p>
            <div  style={{paddingTop:'5rem'}}>
              <input type="email" className="input-field" placeholder="Your email address here" />
              <button className="btn bclr" type="button">Subscribe to our Newsletter</button>
            </div>
            <div className="cp">
              Copyright © {currentYear} EXPRESSbase. All rights reserved
            </div>
          </div>
          <div className="col-md-6">
            <div className="row fmrg">
              <div className="col-sm-6 col-md-4 mb-4">
                <h6 className="fw-bold">
                  Quick links
                </h6>
                <p className='pt-3'>
                  <a href="/webform" className="text-reset">Forms</a>
                </p>
                <p>
                  <a href="/report" className="text-reset">Reporting</a>
                </p>
                <p>
                  <a href="/api" className="text-reset">API</a>
                </p>
                <p>
                  <a href="/documents" className="text-reset">Documents</a>
                </p>
                <p>
                  <a href="/mobileapp" className="text-reset">Mobile Apps</a>
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-2">
                <h6 className="fw-bold">
                  Resources
                </h6>
                <p className='pt-3'>
                  <a href="/faq" className="text-reset">FAQ</a>
                </p>
                <p>
                  <a href="/blog" className="text-reset">Blog</a>
                </p>
                <p>
                  <a href="/wiki" className="text-reset">Wiki</a>
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-2">
                <h6 className="fw-bold">
                  Company
                </h6>
                <p className='pt-3'>
                  <a href="/about" className="text-reset">About us</a>
                </p>
                <p>
                  <a href="/contactus" className="text-reset">Contact</a>
                </p>
              </div>
            </div>

            <div className='fmrgn row'>
              <a href="/" className="me-3 text-reset circle-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/" className="me-3 text-reset circle-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="me-3 text-reset circle-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="/" className="me-3 text-reset circle-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              
              <a href="/" className="me-3 text-reset circle-icon">
             <img src={insta} alt="Instagram" />
              </a>
            </div>
            
            <div className='flw row'>
              <div className='col-sm-6 col-md-4 mb-2'>
                <p className="me-3">
                  <a href="/termsandcodition" className="text-reset cp">Terms of Service</a>
                </p>
              </div>
              <div className='col-sm-6 col-md-4 mb-2'>
                <p className="me-3">
                  <a href="/privacypolicy" className="text-reset cp">Privacy Policy</a>
                </p>
              </div>
              <div className='col-sm-6 col-md-4 mb-2'>
                <p>
                  <a href="#!" className="text-reset cp">Cookie Policy</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
