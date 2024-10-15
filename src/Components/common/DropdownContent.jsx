// DropdownContent.js
import React from 'react';
import './css/nav.css'; // Ensure you have the necessary CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the Chevron icon

const DropdownContent = ({ title, items, onBack }) => {
  return (
    <div className="dropdown-content bg-light">
      <div className="dropdown-header">
        {/* <h5>{title}</h5> */}
        <span className="chevron-icon" onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
      </div>
      <ul className="navbar-nav text-left mb-2 mb-lg-0 ">
        {items.map((item, index) => (
          <li key={index} className="nav-item dropdown mx-4 dropdown-item">
            <a className='nav-link  link' href={item.link}>
              <i className='px-3'>{item.icon}</i> {item.name}
            </a>
            <p className='dropara'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownContent;
