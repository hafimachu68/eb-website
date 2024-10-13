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
    { name: 'Platform Overview', link: '/platform', icon: <img className='po' src={pv} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Web Forms', link: '/webform', icon: <img className='pv' src={web} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Documents', link: '/documents', icon: <img className='pv' src={dument} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Reports', link: 'report', icon: <img className='pv' src={report} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'APIs', link: 'api', icon: <img className='pv' src={api} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Mobile Apps', link: 'mobileapp', icon: <img className='mv' src={mob} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Chat Bots', link: 'chatbot', icon: <img className='pv' src={cb} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const usecaseItems = [
    { name: 'Usecase 1', link: '/Usecase1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Usecase 2', link: 'Usecase2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Usecase 3', link: 'Usecase3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Usecase 4', link: 'Usecase4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const resourceItems = [
    { name: 'FAQs', link: 'faq', icon: <img className='pv' src={faq} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Blog', link: 'blog', icon: <img className='pv' src={blog} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Wiki', link: 'wiki', icon: <img className='pv' src={Wiki} alt="" />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
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
