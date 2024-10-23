import React, { useState } from 'react'; 
import './css/nav.css';
import group8 from '../images/eblogo.png';
import pv from '../images/pv.png';
import web from '../images/wform.png';
import dument from '../images/docub.png';
import report from '../images/reportd.png';
import api from '../images/apid.png';
import mob from '../images/mobd.png';
import faq from '../images/faq.png';
import blog from '../images/blog.png';
import Wiki from '../images/wiki.png';
import cb from '../images/cb.png';
import DropdownContent from './DropdownContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import the Chevron right icon

function MNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleBack = () => {
    setActiveDropdown(null);
  };

  const platformItems = [
    { name: 'Platform Overview', link: '/platform', icon: <img className='po' src={pv} alt="" />, description: 'Build custom applications using Low-code technology empowering your business' },
    { name: 'Web Forms', link: '/webform', icon: <img className='wpv' src={web} alt="" />, description: 'Create powerful multi-lingual, multi-currency enterprise web forms.' },
    { name: 'Documents', link: '/documents', icon: <img className='pv' src={dument} alt="" />, description: 'A document management system that seamlessly integrates into your business process.' },
    { name: 'Reports', icon: <img className='pv' src={report} alt="" />, description: 'Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.' },
    { name: 'APIs', icon: <img className='pv' src={api} alt="" />, description: 'Efficiently integrate third-party applications into your workflow using our futuristic API builder.' },
    { name: 'Mobile Apps', icon: <img className='mv' src={mob} alt="" />, description: 'Transform your organization\'s internal processes with our low-code mobile app platform.' },
    { name: 'Chat Bots', icon: <img className='pv' src={cb} alt="" />, description: 'Elevate customer interactions with our low-code chatbot tool.' },
];

const usecaseItems = [
    { name: 'Usecase 1', link: '/Usecase1', description: 'A cutting-edge attendance management solution designed with efficiency and simplicity in mind.' },
    { name: 'Usecase 2', description: 'A van sales management mobile app that can be easily customized, using low-code technology.' },
    { name: 'Usecase 3', description: 'A dynamic customer relationship management (CRM) application, meticulously crafted using low-code technology.' },
    { name: 'Usecase 4', description: 'A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.' },
];

const resourceItems = [
    { name: 'FAQs', icon: <img className='pv ' src={faq} alt="" />, description: 'Find answers to frequently asked questions and common issues.' },
    { name: 'Blog', icon: <img className='pv' src={blog} alt="" />, description: 'Read the latest articles, tutorials, and news on low-code development.' },
    { name: 'Wiki', icon: <img className='pv' src={Wiki} alt="" />, description: 'Access comprehensive documentation and resources to help you get started.' },
];

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
          {activeDropdown === null ? (
            <ul className="navbar-nav text-left mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link mnav-link" href="#" onClick={() => handleDropdownClick('platform')}>
                  Platform <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link mnav-link" href="#" onClick={() => handleDropdownClick('usecases')}>
                  Usecases <FontAwesomeIcon icon={faChevronRight} />
                </a>                                                                                                                                                                              
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link  active" aria-current="page" href="/about">About Us</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link mnav-link" href="#" onClick={() => handleDropdownClick('resources')}>
                  Resources <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </li>
              <li className="nav-item demo">
              <a href="https://zcal.co/sureba73">

                <button className="btn btnav text-light" type="submit">Book A Demo</button>
                </a>
              </li>
            </ul>
          ) : (
            activeDropdown === 'platform' ? (
              <DropdownContent title="Platform" items={platformItems} onBack={handleBack} />
            ) : activeDropdown === 'usecases' ? (
              <DropdownContent title="Usecases" items={usecaseItems} onBack={handleBack} />
            ) : activeDropdown === 'resources' ? (
              <DropdownContent title="Resources" items={resourceItems} onBack={handleBack} />
            ) : null
          )}
        </div>
      </div>
    </nav>
  );
}

export default MNavbar;
