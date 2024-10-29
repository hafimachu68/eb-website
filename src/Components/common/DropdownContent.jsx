import React from 'react';
import './css/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const DropdownContent = ({ title, items, onBack }) => {
  return (
    <div className="dropdown-content bg-light">
      <div className="dropdown-header">
        <span className="chevron-icon" onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
      </div>
      <ul className="navbar-nav text-left mb-2 mb-lg-0">
        {items.map((item, index) => (
          <li key={index} className="nav-item dropdown mx-4 dropdown-item mn">
            {item.link ? (
              // Render an <a> tag only if the item has a link and the specific class 'mnlnk'
              <a className={`nav-link link ${title === 'Usecases' ? 'mnlnk' : ''}`} href={item.link}>
                <i className="px-3">{item.icon}</i> {item.name}
              </a>
            ) : (
              // Render a <span> instead of <a> if there's no link
              <span className="nav-link link">
                <i className="px-3">{item.icon}</i> {item.name}
              </span>
            )}
            <p className="dropara">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownContent;
