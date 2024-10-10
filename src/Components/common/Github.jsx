import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import feic from '../images/rbic.png';
import './css/git.css';

function GitHub() {
  const [displayedText, setDisplayedText] = useState(''); // Initialize displayed text
  const [isCursorVisible, setCursorVisible] = useState(true); // State for cursor visibility
  const text = 'We are on GitHub!'; // The text to display
  const speed = 80; // Speed of typing

  useEffect(() => {
    let index = 0; // Initialize the index for typing effect

    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Update displayed text with the next character
        index++;
        setTimeout(typeWriter, speed); // Call itself again after the specified delay
      } else {
        setTimeout(() => {
          setDisplayedText(''); // Clear the text after it's fully typed
          index = 0; // Reset index for the next loop
          typeWriter(); // Restart typing
        }, 1000); // Delay before restarting the typing loop
      }
    };

    typeWriter(); // Start the typing effect

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, 500); // Blink cursor every 500ms

    return () => {
      clearInterval(cursorInterval); // Clean up the interval on unmount
    };
  }, [text, speed]); // Effect depends on text and speed

  return (
    <div className="gcontainer">
      <div className="glass-box mgb"> {/* Glass effect box */}
        <h3 className="head">
          {displayedText} {/* Display typed text */}
          <span className="cursor">{isCursorVisible ? '|' : ' '}</span> {/* Blinking cursor */}
        </h3>
        <p className="rb pt-3">
          100% Open-Source Low-Code cloud-native Platform
        </p>
        <div className="py-3">
          <button className="btn btgit fw-bold">
            <i className="ic"><FontAwesomeIcon icon={faGithub} /></i> Star us On GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default GitHub;


