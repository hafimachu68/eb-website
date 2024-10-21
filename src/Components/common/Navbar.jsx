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
import cb from '../images/cb.png'; // Import your logo file



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid nav-fluid">
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
              <p className='dropara'>
              Build custom applications using Low-code technology empowering your business                </p>
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
              <p className='dropara'>
              Create powerful multi-lingual, multi-currency enterprise web forms.                </p>
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
              <p className='dropara'>
              A document management system that seamlessly integrates into your business process.                </p>
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
              <p className='dropara'>
              Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.                </p>
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
              <p className='dropara'>
              Efficiently integrate third-party applications into your workflow using our futuristic API builder.                 </p>
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
              <p className='dropara'>
              Transform your organization's internal processes with our low-code mobile app platform.                </p>
            </div>
          </li>
        </div>
        <div className="col-6">
          <li className="platform-item my-2">
            <div className="platform-text">
              <h6 className="hedrop">
                <a className='link' href="/chatbot">
                  <i><img className='pv' src={cb} alt="" /></i>Chat Bots
                </a>
              </h6>
              <p className='dropara'>
              Elevate customer interactions with our low-code chatbot tool.                 </p>
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
    <li className="usec-item pt-3">
      <div className="platform-text  us-item">
      <a className='link' href="/Usecase1">
      <h6 className="udrop">Usecase 01</h6>
      </a>
        <p className='udropara'>A cutting-edge attendance management solution designed with the efficiency and simplicity in mind. </p>
      </div>
    </li>
    <li className="usec-item pt-3">
      <div className="platform-text us-item">
      <a className='link' href="/Usecase2">
      <h6 className="udrop">Usecase 02</h6>
      </a>        <p className='udropara'>A van sales management mobile app that can be easily customized, using low-code technology. </p>
      </div>
    </li>
    <li className="usec-item pt-3 ">
      <div className="platform-text us-item">
      <a className='link' href="/Usecase3">
      <h6 className="udrop">Usecase 03</h6>
      </a>          <p className='udropara'>A dynamic customer relationship management (CRM) application,  meticulously crafted using low-code technology. </p>
      </div>
    </li>
    <li className="usec-item pt-3 ">
      <div className="platform-text us-item">
      <a className='link' href="/Usecase4">
      <h6 className="udrop">Usecase 04</h6>
      </a>        
       <p className='udropara'>A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.</p>
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
              <ul className="dropdown-menu uecase-menu" aria-labelledby="navbarDropdown1">
                <li className="rsec-item my-2">
                  <div className="platform-text rs-text">
                    <h6 className="hedrop"> <a className='link' href="/faq">   <i> <img className='pv' src={faq} alt="" /> </i>FAQs</a></h6>
                    {/* <p className='dropara'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</p> */}
                  </div>
                </li>
                <li className="rsec-item my-2">
                  <div className="platform-text rs-text">
                    <h6 className="hedrop">  <i> <img className='pv' src={blog} alt="" /> </i>Blog</h6>
                    {/* <p className='dropara'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</p> */}
                  </div>
                </li>
                <li className="rsec-item  my-2">
                  <div className="platform-text rs-text">
                    <h6 className="hedrop">  <i> <img className='pv' src={Wiki} alt="" /> </i>Wiki</h6>
                    {/* <p className='dropara'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</p> */}
                  </div>
                </li>
                
             
              </ul>
            </li>
            <li className="nav-item demo">
            <a href="https://zcal.co/sureba73">

              <button className="btn btnav text-light" type="submit">Book A Demo</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
