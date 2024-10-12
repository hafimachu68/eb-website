import React, { useState, useEffect } from 'react';
import './css/Cooki.css';
import acceptIcon from '../Components/images/tick.png';
import declineIcon from '../Components/images/wrong.png';

const Cooki = ({ onAccept, onDecline }) => {
  const [showAlert, setShowAlert] = useState(false);

  // Check if a cookie preference is already set
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowAlert(true); // Show the alert if there's no preference set
    }
  }, []);

  // Function to handle cookie acceptance
  const handleAccept = () => {
    document.cookie = "myCookieName=cookieValue; path=/";
    localStorage.setItem('cookieConsent', 'accepted');
    if (typeof onAccept === 'function') {
      onAccept();
    }
    setShowAlert(false); // Hide the cookie alert
  };

  // Function to handle cookie decline
  const handleDecline = () => {
    document.cookie = "myCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.setItem('cookieConsent', 'declined');
    if (typeof onDecline === 'function') {
      onDecline();
    }
    setShowAlert(false); // Hide the cookie alert
  };

  // Render the cookie alert only if showAlert state is true
  return (
    showAlert && (
      <div className="cookie-alert">
        <div className="cookie-content row">
          <div className="col-md-8 pck">
            <p>We use cookies to personalize our website content, provide social media features, analyze how our site is used, and give you a better experience.</p>
          </div>
          <div className="col-md-4 bck">
            <button className='ckbtn' onClick={handleAccept}>
              <img className='cic' src={acceptIcon} alt="Accept" /> Accept
            </button>
            <button className='ckbtn' onClick={handleDecline}>
              <img className='cic' src={declineIcon} alt="Decline" /> Decline
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Cooki;
