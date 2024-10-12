import React, { useState } from 'react';
import './css/abvdo.css'; // Import your CSS file
import { Carousel } from 'react-bootstrap';

import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';

function Mabvdo() {
  const [videos, setVideos] = useState({
    video1: false,
    video2: false,
    video3: false,
  });

  const toggleVideo = (videoId) => {
    setVideos((prevVideos) => ({
      ...prevVideos,
      [videoId]: !prevVideos[videoId],
    }));
  };

  const closeVideo = (videoId) => {
    setVideos((prevVideos) => ({
      ...prevVideos,
      [videoId]: false,
    }));
  };

  return (
    <div className="container-fluid bgc">
      <div className="row pt-5 rf cm">
        <div className="blhic abvh">
          <h5 className="fw-bold">Featured Stories</h5>
        </div>
        <Carousel className="custom-carousel" interval={null}>
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <div className="card cmg mx-2" style={{ width: '16rem' }}>
                <div className="card-content">
                  <img src={c1} className="card-img-top cvdo" alt="..." />
                  <h5 className="card-title svblp pt-4">8 startups are taking part in Flat6Labs latest cycle</h5>
                  <a href="https://startupbahrain.com" className="btn abb">Read</a>
                </div>
              </div>
              <div className="card cmg mx-2" style={{ width: '16rem' }}>
                <div className="card-content">
                  <img src={c2} className="card-img-top cvdo" alt="..." />
                  <h5 className="card-title svblp pt-4">Flat6Labs Cycle 2 Highlights</h5>
                  <button className="btn abb" onClick={() => toggleVideo('video1')}>Watch Video</button>
                  {videos.video1 && (
                    <div className="mvideo-container" id="video1">
                      <button className="mclose-button" onClick={() => closeVideo('video1')}>&times;</button>
                      <iframe className="vmfr" src="https://www.youtube.com/embed/WolUhnMGWOs" frameBorder="0" allowFullScreen title="video1"></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <div className="card cmg mx-2" style={{ width: '16rem' }}>
                <div className="card-content">
                  <img src={c3} className="card-img-top cvdo" alt="..." />
                  <h5 className="card-title svblp pt-4">Flat6Labs Bahrain cycle 2</h5>
                  <button className="btn abb" onClick={() => toggleVideo('video2')}>Watch Video</button>
                  {videos.video2 && (
                    <div className="mvideo-container" id="video2">
                      <button className="mclose-button" onClick={() => closeVideo('video2')}>&times;</button>
                      <iframe className="vmfr" src="https://www.youtube.com/embed/WolUhnMGWOs" frameBorder="0" allowFullScreen title="video2"></iframe>
                    </div>
                  )}
                </div>
              </div>
              <div className="card cmg mx-2" style={{ width: '16rem' }}>
                <div className="card-content">
                  <img src={c4} className="card-img-top cvdo" alt="..." />
                  <h5 className="card-title svblp pt-4">Second Demo Day</h5>
                  <button className="btn abb" onClick={() => toggleVideo('video3')}>Watch Video</button>
                  {videos.video3 && (
                    <div className="mvideo-container" id="video3">
                      <button className="mclose-button" onClick={() => closeVideo('video3')}>&times;</button>
                      <iframe className="vmfr" src="https://www.youtube.com/embed/A2A-kH7HRAg" frameBorder="0" allowFullScreen title="video3"></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Mabvdo;
