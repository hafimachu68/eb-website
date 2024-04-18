import React from 'react';
import './css/Cooki.css'; // Import CSS file for styling

const Cooki = ({ onAccept, onDecline }) => {
  // Function to handle cookie acceptance
  const handleAccept = () => {
    document.cookie = "myCookieName=cookieValue; path=/";
    onAccept(); // Call the onAccept function passed from the parent component
  };

  // Function to handle cookie decline
  const handleDecline = () => {
    document.cookie = "myCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    onDecline(); // Call the onDecline function passed from the parent component
  };

  return (
    <div className="cookie-alert">
      <div className="cookie-content row">
        <div className="col-md-8 pck">
        <p>We use cookies to personalize our website content, provide social media features, analyze how our site is used, and give you a better experience.</p>
        </div>
        <div className="col-md-4">
        <button className='ckbtn' onClick={handleAccept}> ✅  Accept</button>
        <button className='ckbtn' onClick={handleDecline}> ❌ Decline</button>
        </div>
        
      </div>
    </div>
  );
}

export default Cooki;
