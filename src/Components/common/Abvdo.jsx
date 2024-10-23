import React, { useState } from 'react';
import './css/abvdo.css'; // Import your CSS file

import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
import f6b from '../images/f6b.svg';
import f6n from '../images/f6n.svg';

function ABvdo() {
  const [videos, setVideos] = useState({
    video1: false,
    video2: false,
    video3: false, // Add video3 state
  });

  // Function to toggle video visibility
  const toggleVideo = (videoId) => {
    setVideos((prevVideos) => ({
      ...prevVideos,
      [videoId]: !prevVideos[videoId],
    }));
  };

  // Function to close video
  const closeVideo = (videoId) => {
    setVideos((prevVideos) => ({
      ...prevVideos,
      [videoId]: false,
    }));
  };

  return (
    <div className="container-fluid bgc avh">
      <div className="container pt-5">
        <div className="text-center mb-5">
          <h3 className='fw-bold'>Featured Stories</h3>
        </div>
        <div className="row justify-content-center">
          {/* First Row */}
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card cmg" style={{ width: '18rem' }}>
              <img src={c1} className="card-img-top cvdo" alt="..." />
              <h5 className="card-title vblp pt-4">8 startups are taking part in Flat6Labs latest cycle</h5>
              <a href="https://startupbahrain.com/features/8-startups-are-taking-part-in-flat6labs-latest-cycle-this-is-your-chance-to-meet-them/" className="btn abb"style={{ marginTop: '-6px' }}>Read the full article</a>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card cmg" style={{ width: '18rem' }}>
              <img src={c2} className="card-img-top cvdo" alt="..." />
              <h5 className="card-title vblp pt-4">Flat6Labs Bahrain cycle 2 Highlights</h5>
              <button className="btn abb" style={{ marginTop: '-6px' }} onClick={() => toggleVideo('video1')}>Watch the video</button>
              {videos.video1 && (
                <div className="video-container" id="video1">
                  <button className="close-button" onClick={() => closeVideo('video1')}>&times;</button>
                  <iframe className="fr" src="https://www.youtube.com/embed/WolUhnMGWOs?si=Fv2iMwFu1AVS9kdl" frameBorder="0" allowFullScreen title="video1"></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card cmg" style={{ width: '18rem' }}>
              <img src={c3} className="card-img-top cvdo" alt="..." />
              <h5 className="card-title vblp pt-4">Flat6Labs Bahrain cycle 2 Highlights</h5>
              <button className="btn abb" style={{ marginTop: '-6px' }} onClick={() => toggleVideo('video2')}>Watch the video</button>
              {videos.video2 && (
                <div className="video-container" id="video2">
                  <button className="close-button" onClick={() => closeVideo('video2')}>&times;</button>
                  <iframe className="fr" src="https://www.youtube.com/embed/WolUhnMGWOs?si=Fv2iMwFu1AVS9kdl" frameBorder="0" allowFullScreen title="video1"></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="row justify-content-center pt-4">
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card cmg" style={{ width: '18rem' }}>
              <img src={f6b} className="card-img-top cvdo" alt="..." />
              <h5 className="card-title vblp pt-4">Flat6Labs Bahrain Second Demo day</h5>
              <button className="btn abb" style={{ marginTop: '-6px' }} onClick={() => toggleVideo('video3')}>Watch the video</button>
              {videos.video3 && (
                <div className="video-container" id="video3">
                  <button className="close-button" onClick={() => closeVideo('video3')}>&times;</button>
                  <iframe className="fr" src="https://www.youtube.com/embed/A2A-kH7HRAg?si=UOzQ5e4eB2yrl2c0" frameBorder="0" allowFullScreen title="video2"></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card cmg" style={{ width: '18rem' }}>
              <img src={f6n} className="card-img-top cvdo" alt="..." />
              <h5 className="card-title vblp pt-4">NASSCOM Innotrek 2018: Meet The 40 Startups</h5>
              <button className="btn abb" style={{ marginTop: '-6px' }} onClick={() => toggleVideo('video3')}>Read more</button>
              {videos.video3 && (
                <div className="video-container" id="video3">
                  <button className="close-button" onClick={() => closeVideo('video3')}>&times;</button>
                  <iframe className="fr" src="https://www.youtube.com/embed/A2A-kH7HRAg?si=UOzQ5e4eB2yrl2c0" frameBorder="0" allowFullScreen title="video2"></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card cmg" style={{ width: '18rem' }}>
              <img src={c4} className="card-img-top cvdo" alt="..." />
              <h5 className="card-title vblp pt-4">8 startups are taking part in Flat6Labs latest cycle</h5>
              <button className="btn abb" style={{ marginTop: '-6px' }} onClick={() => toggleVideo('video3')}>Read more</button>
              {videos.video3 && (
                <div className="video-container" id="video3">
                  <button className="close-button" onClick={() => closeVideo('video3')}>&times;</button>
                  <iframe className="fr" src="https://www.youtube.com/embed/A2A-kH7HRAg?si=UOzQ5e4eB2yrl2c0" frameBorder="0" allowFullScreen title="video2"></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABvdo;
