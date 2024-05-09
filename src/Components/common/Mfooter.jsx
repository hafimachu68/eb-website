import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import exlog from '../images/exlog.png';
import './css/mfooter.css';

function Mfooter() {
  return (
    <div className='Fcolor'>
      <footer className="container">
        <div className=" p-4">
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="align-items-center">
              <div className="col-md-12">
                <img className=' mfi' src={exlog} alt="" />
              </div>
              
            </div>
            {/* <div className="mt-4 py-2 mfp ">
            <p>
              Here you can use rows and columns to organize your footer content. 
              Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
            </div> */}
           
            <div className="mt-4 py-2 mfpp ">
            <p>
              Here you can use rows and columns to organize your footer content. 
              Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
            </div>
            <div className="mb-3 py-2 mfp">
              <input type="email" className="input-field" placeholder="Enter your email" />
              <button className="btn  mc" type="button">Subscribe</button>
            </div>
          </div>
          <div className="col-md-6 mfp ">
            <div className="row fmrg">
              <div className="col-sm-6 col-md-4 mb-4">
                <h6 className="fw-bold">Quick links</h6>
                <p><a href="#!" className="text-reset">Forms</a></p>
                <p><a href="#!" className="text-reset">Reporting</a></p>
                <p><a href="#!" className="text-reset">API</a></p>
                <p><a href="#!" className="text-reset">Documents</a></p>
                <p><a href="#!" className="text-reset">Mobile Apps</a></p>
              </div>
              <div className="col-sm-6 col-md-4 mb-2 mfr">
                <h6 className="fw-bold">Resources</h6>
                <p><a href="#!" className="text-reset">FAQ</a></p>
                <p><a href="#!" className="text-reset">Blog</a></p>
                <p><a href="#!" className="text-reset">Wiki</a></p>
              </div>
              <div className="col-sm-6 col-md-4 mb-2 mfc">
                <h6 className="fw-bold">Company</h6>
                <p><a href="#!" className="text-reset">About us</a></p>
                <p><a href="#!" className="text-reset">Contact</a></p>
              </div>
            </div>
            <div className='mfm row mb-3'>
                  <a href="/" className="me-3 text-reset mcircle">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="/" className="me-3 text-reset mcircle">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="/" className="me-3 text-reset mcircle">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="/" className="me-3 text-reset mcircle">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
            <div className='fl row'>
              <div className='col-sm-6 col-md-4 mb-2 mft'>
                <p className="me-3">
                  <a href="#!" className="text-reset mcp">Terms of Service</a>
                </p>
              </div>
              <div className='col-sm-6 col-md-4 mb-2 mfpr'>
                <p className="me-3">
                  <a href="#!" className="text-reset mcp ">Privacy Policy</a>
                </p>
              </div>
              <div className='col-sm-6 col-md-4 mb-2 mfco'>
                <p>
                  <a href="#!" className="text-reset mcp ">Cookie Policy</a>
                </p>
              </div>
              <div className="mccp">Copyright © 2023 EXPRESSbase. All rights reserved</div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mfooter;
