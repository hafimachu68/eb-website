import React, { useState } from 'react'; 
import './css/report.css'; // Import your CSS file
import rpg1 from '../images/rpg1.png';
import rpg2 from '../images/rpg2.png';

function MRimage() {
  const [selectedImage, setSelectedImage] = useState('image1');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <div className="container rc">
      <div className="row">
        <div className="col-12 d-flex justify-content-around pt-5">
          <button 
            className={`image-button ${selectedImage === 'image1' ? 'active' : ''}`} 
            value="image1" 
            onClick={handleImageChange}
          >
            Report Builder
          </button>
          <button 
            className={`image-button ${selectedImage === 'image2' ? 'active' : ''}`} 
            value="image2" 
            onClick={handleImageChange}
          >
            Visualization Builder
          </button>
        </div>
        <div className="col-12 text-center pt-3">
          <div className="image-container">
            <img src={rpg1} id="image1Src" alt="Image 1" style={{ display: selectedImage === 'image1' ? 'block' : 'none' }} />
            <img src={rpg2} id="image2Src" alt="Image 2" style={{ display: selectedImage === 'image2' ? 'block' : 'none' }} />
          </div>
          <p className="image-description">
            {selectedImage === 'image1' ? 
              "Drag & Drop virtually anything - data fields, text, tables, images, bar codes, QR codes or even shapes & configure using our modern property grid." : 
              "Build jaw dropping tables, charts or map visualizations with simple drag and drop."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default MRimage;
