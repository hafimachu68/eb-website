import React, { useState } from 'react';
import './css/rbox.css'; // Import your CSS file

const options = [
  { id: 1, text: 'Unlimited dashboards', imgSrc: 'image1.jpg' },
  { id: 2, text: 'Pdf Reports', imgSrc: 'image2.jpg' },
  { id: 3, text: 'Table View', imgSrc: 'image3.jpg' },
  { id: 4, text: 'Chart View', imgSrc: 'image4.jpg' },
  { id: 5, text: 'Map Views', imgSrc: 'image4.jpg' },
  { id: 6, text: 'Calenders', imgSrc: 'image4.jpg' },

];

function Rbox() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="rcontainer">
      <div className="rleft-column">
        <img src={selectedOption.imgSrc} alt={selectedOption.text} />
      </div>
      <div className="rright-column">
        {options.map(option => (
          <div 
            key={option.id} 
            className={`option ${selectedOption.id === option.id ? 'active' : ''}`} 
            onClick={() => setSelectedOption(option)}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rbox;
