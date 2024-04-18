import React, { useState } from 'react';
import './css/Cooki.css';

const Cooki = ({ onAccept, onDecline }) => {
  // State to manage the visibility of the cookie alert
  const [showAlert, setShowAlert] = useState(true);

  // Function to handle cookie acceptance
  const handleAccept = () => {
    document.cookie = "myCookieName=cookieValue; path=/";
    if (typeof onAccept === 'function') {
      onAccept(); // Call the onAccept function passed from the parent component if it's a function
    }
    // Hide the cookie alert
    setShowAlert(false);
  };

  // Function to handle cookie decline
  const handleDecline = () => {
    document.cookie = "myCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (typeof onDecline === 'function') {
      onDecline(); // Call the onDecline function passed from the parent component if it's a function
    }
    // Hide the cookie alert
    setShowAlert(false);
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
            <button className='ckbtn' onClick={handleAccept}> ✅ Accept</button>
            <button className='ckbtn' onClick={handleDecline}> ❌ Decline</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Cooki;
