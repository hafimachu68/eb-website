// Cooki.js
import React from 'react';

const Cooki = () => {
  const handleAccept = () => {
    document.cookie = "myCookieName=cookieValue; path=/";
  };

  const handleDecline = () => {
    document.cookie = "myCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-8 text-center">
          <p>We use cookies to personalize our website content, provide social media features, analyze how our site is used, and give you a better experience.</p>
        </div>
        <div className="col-md-2">
          <button onClick={handleAccept}>Accept</button>
        </div>
        <div className="col-md-2">
          <button onClick={handleDecline}>Decline</button>
        </div>
      </div>
    </div>
  );
}

export default Cooki;
