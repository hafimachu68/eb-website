import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import exlog from '../images/exlog.png';
import './css/footer.css';

function Footer() {
  return (
    <div className='Fcolor'>
      <footer className="container">
        <section className="row d-flex justify-content-between p-4">
          <div className="col-md-6 col-lg-6 mb-4">
            {/* Content */}
            <img className='fimg' src={exlog} alt="" />
            <p className='mt-4 py-2'>
              Here you can use rows and columns to organize your footer content.<br/> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
               <div className="mb-3 py-5">
                <input type="email" className="input-field" placeholder="Your email address here" />
                <button className="btn bclr " type="button">Subscribe to our Newsletter</button>
              </div>
            <div className="cp " >
              Copyright © 2023 EXPRESSbase. All rights reserved
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row fmrg">
              <div className="col-sm-6 col-md-4 mb-4">
                <h6 className=" fw-bold ">
                  Quick links
                </h6>
                <p className='pt-3'>
                  <a href="#!" className="text-reset ">Forms</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Reporting </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">API</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Documents</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Mobile Apps</a>
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-2">
                <h6 className=" fw-bold ">
                Resources
                </h6>
                <p className='pt-3'>
                  <a href="#!" className="text-reset">FAQ</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Blog</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Wiki</a>
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-2">
                <h6 className=" fw-bold ">
                  Company
                </h6>
                <p className='pt-3'>
                  <a href="#!" className="text-reset ">About us</a>
                </p>
                <p>
                  <a href="/contactus" className="text-reset">Contact </a>
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
            </div>
            {/* Row for Terms, Privacy, and Cookies */}
            <div className='flw row'>
              <div className='col-sm-6 col-md-4 mb-2'>
                <p className="me-3">
                  <a href="#!" className="text-reset cp">Terms  of Service</a>
                </p>
              </div>
              <div className='col-sm-6 col-md-4 mb-2'>
                <p className="me-3">
                  <a href="#!" className="text-reset cp">Privacy Policy</a>
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
