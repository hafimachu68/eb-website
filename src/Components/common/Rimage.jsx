import React, { useState } from 'react';
import './css/report.css'; // Import your CSS file
import rpg1 from '../images/rpg1.png';
import rpg2 from '../images/rpg2.png';


function Rimage() {
  const [selectedImage, setSelectedImage] = useState('image1');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <div className="container rc">
      <div className="row">
        <div className="col-md-6">
          <div className="pt-5 me-4">
            <div className={`rm form-check radio-box ${selectedImage === 'image1' ? 'checked' : ''}`} id="radio1">
              <input
                className="form-check-input"
                type="radio"
                name="imageSelector"
                id="image1"
                value="image1"
                checked={selectedImage === 'image1'}
                onChange={handleImageChange}
              />
              <label className="form-check-label" htmlFor="image1">
                <h5 className="fw-bold">Report builder</h5>
                <p>Drag &amp; Drop virtually anything - data fields, text, tables, images, bar codes, QR codes or even shapes &amp; configure using our modern property grid.</p>
              </label>
            </div>
            <div className={`form-check radio-box ${selectedImage === 'image2' ? 'checked' : ''}`} id="radio2">
              <input
                className="form-check-input"
                type="radio"
                name="imageSelector"
                id="image2"
                value="image2"
                checked={selectedImage === 'image2'}
                onChange={handleImageChange}
              />
              <label className="form-check-label" htmlFor="image2">
                <h5 className="fw-bold">Visualization Builder</h5>
                <p>Build jaw dropping tables, charts or map visualizations with simple drag and drop.</p>
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5">
          <div className="image-container">
            <img src={rpg1} id="image1Src" alt="Image 1" style={{ display: selectedImage === 'image1' ? 'block' : 'none' }} />
            <img src={rpg2} id="image2Src" alt="Image 2" style={{ display: selectedImage === 'image2' ? 'block' : 'none' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rimage;
