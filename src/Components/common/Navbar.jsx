import React from 'react';
import './css/nav.css';
import group8 from '../images/eblogo.png';
import pv from '../images/pv.png'; // Import your logo file
import web from '../images/wform.png'; // Import your logo file
import dument from '../images/docub.png'; // Import your logo file
import report from '../images/reportd.png'; // Import your logo file
import api from '../images/apid.png'; // Import your logo file
import mob from '../images/mobd.png'; // Import your logo file
import faq from '../images/faq.png'; // Import your logo file
import blog from '../images/blog.png'; // Import your logo file
import Wiki from '../images/wiki.png'; // Import your logo file


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand log" href="/">
          <img className="logo-img mr-3" src={group8} alt="" width="268" height="52" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-left mb-2 mb-lg-0">
          <li className="nav-item dropdown mx-4">
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Platform
  </a>
  <ul className="dropdown-menu platform-menu" aria-labelledby="navbarDropdown1">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/platform">
                  <i><img className='po' src={pv} alt="" /></i>Platform Overview
                </a>
              </h6>
              <p className='dropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </li>
        </div>
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/webform">
                  <i><img className='pv' src={web} alt="" /></i>Web Forms
                </a>
              </h6>
              <p className='dropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </li>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/documents">
                  <i><img className='pv' src={dument} alt="" /></i>Documents
                </a>
              </h6>
              <p className='dropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </li>
        </div>
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/report">
                  <i><img className='pv' src={report} alt="" /></i>Reports
                </a>
              </h6>
              <p className='dropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </li>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/api">
                  <i><img className='pv' src={api} alt="" /></i>APIs
                </a>
              </h6>
              <p className='dropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </li>
        </div>
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/mobileapp">
                  <i><img className='mv' src={mob} alt="" /></i>Mobile Apps
                </a>
              </h6>
              <p className='dropara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
          </li>
        </div>
      </div>
    </div>
  </ul>
</li>

     <li className="nav-item dropdown mx-4">
  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Usecases
  </a>
  <ul className="dropdown-menu usecase-menu" aria-labelledby="navbarDropdown2">
    <li className="usec-item">
      <div className="platform-text">
        <h6 className="udrop">Usecase</h6>
        <p className='udropara'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod</p>
      </div>
    </li>
    <li className="usec-item">
      <div className="platform-text">
        <h6 className="udrop">Usecase</h6>
        <p className='udropara'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod</p>
      </div>
    </li>
    <li className="usec-item ">
      <div className="platform-text">
        <h6 className="udrop">Usecase 3</h6>
        <p className='udropara'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod</p>
      </div>
    </li>
    <li className="usec-item ">
      <div className="platform-text">
        <h6 className="udrop">Usecase 4</h6>
        <p className='udropara'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod</p>
      </div>
    </li>
  </ul>
</li>
      <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page"href="/about">About Us</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown mx-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Resources
              </a>
              <ul className="dropdown-menu rs-menu" aria-labelledby="navbarDropdown1">
                <li className="platform-item my-2">
                  <div className="platform-text">
                    <h6 className="hedrop"> <a className='link' href="/faq">   <i> <img className='pv' src={faq} alt="" /> </i>FAQs</a></h6>
                    <p className='dropara'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</p>
                  </div>
                </li>
                <li className="platform-item my-2">
                  <div className="platform-text">
                    <h6 className="hedrop">  <i> <img className='pv' src={blog} alt="" /> </i>Blog</h6>
                    <p className='dropara'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</p>
                  </div>
                </li>
                <li className="platform-item my-2">
                  <div className="platform-text">
                    <h6 className="hedrop">  <i> <img className='pv' src={Wiki} alt="" /> </i>Wiki</h6>
                    <p className='dropara'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</p>
                  </div>
                </li>
                
             
              </ul>
            </li>
            <li className="nav-item demo">
              <button className="btn btnav text-light" type="submit">Book A Demo</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
