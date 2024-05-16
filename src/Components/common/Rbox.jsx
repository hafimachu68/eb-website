import React, { useState } from 'react';
import './css/rbox.css'; // Import your CSS file
import op1 from '../images/G31.png'; // Import your logo file
import op2 from '../images/G32.png'; // Import your logo file
import op3 from '../images/G33.png'; // Import your logo file
import op4 from '../images/G34.png'; // Import your logo file
import op5 from '../images/G35.png'; // Import your logo file
import op6 from '../images/G36.png'; // Import your logo file

const options = [
  { id: 1, text: 'Unlimited dashboards', imgSrc: op1 },
  { id: 2, text: 'Pdf Reports', imgSrc: op2 },
  { id: 3, text: 'Table View', imgSrc: op3 },
  { id: 4, text: 'Chart View', imgSrc: op4 },
  { id: 5, text: 'Map Views', imgSrc: op5 },
  { id: 6, text: 'Calenders', imgSrc: op6 },
];

function Rbox() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div>
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
    <div  style={{ padding: '10px', marginTop:'170px' }}>
         
    </div>
    </div>
  );
}

export default Rbox;
