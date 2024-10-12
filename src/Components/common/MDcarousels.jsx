import React from 'react';
import { Carousel, Card, Button, Col, Row } from 'react-bootstrap'; // Removed CarouselControl import
import bimage1 from '../images/wfimg1.png';
import bimage2 from '../images/wfimg2.png';
import bimage3 from '../images/wfimg3.png';
import bimage4 from '../images/wfimg4.png';
import bimage5 from '../images/wfimg5.png';
import './css/mform.css';


function MDcarousels() {
  return (
    <div>
    <Carousel interval={null} className="custom-carous" style={{ width: '100%', height: '100%' }}>
      <Carousel.Item>
        <Card className="wbg">
          <Card.Body className='wcbm'>
            <Card.Title className='mmainh'>Centralized Access</Card.Title>
            <Card.Text className='mw'>
              Keep all your documents in one place, accessible anytime, anywhere.
            </Card.Text>
            <Card.Img className='mwbmg' src={bimage1 } alt="Centralized Access" />
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="wbg">
          <Card.Body className='wcbm'>
            <Card.Title className='mmainh'>Enhanced Collaboration</Card.Title>
            <Card.Text className='mw'>
              Work together seamlessly with team members, no matter where they are.
            </Card.Text>
            <Card.Img className='mwbmg' src={bimage2} alt="Enhanced Collaboration" />
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="wbg">
          <Card.Body className='wcbm'>
            <Card.Title className='mmainh'>Secure Storage</Card.Title>
            <Card.Text className='mw'>
              Rest easy knowing your documents are protected with top-notch security measures.
            </Card.Text>
            <Card.Img className='mwbmg' src={bimage3} alt="Secure Storage" />
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="wbg">
          <Card.Body className='wcbm'>
            <Card.Title className='mmainh'>Automated Workflows</Card.Title>
            <Card.Text className='mw'>
              Simplify your processes with automated document routing and approval.
            </Card.Text>
            <Card.Img className='mwbmg' src={bimage4} alt="Automated Workflows" />
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  </div>
);
}


export default MDcarousels;
