import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'; // Removed Carousel import
import bimage1 from '../images/wfimg1.png';
import bimage2 from '../images/wfimg2.png';
import bimage3 from '../images/wfimg3.png';
import bimage4 from '../images/wfimg4.png';
import './css/mform.css';

function MDcarousels() {
  return (
    <div className="d-flex justify-content-center" style={{marginTop:'-1rem'}}>
      <Row className="text-center">
        <Col md={4} className="mt-1 p-2 px-4">
          <Card className="dwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh'>Centralized Access</Card.Title>
              <Card.Text className='mw'>
                Keep all your documents in one place, accessible anytime, anywhere.
              </Card.Text>
              <Card.Img className='dmwbmg' src={bimage1} alt="Centralized Access" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 p-2 px-4">
          <Card className="dwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh'>Enhanced Collaboration</Card.Title>
              <Card.Text className='mw'>
                Work together seamlessly with team members, no matter where they are.
              </Card.Text>
              <Card.Img className='dmwbmg' src={bimage2} alt="Enhanced Collaboration" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 p-2 px-4">
          <Card className="dwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh'>Secure Storage</Card.Title>
              <Card.Text className='mw'>
                Rest easy knowing your documents are protected with top-notch security measures.
              </Card.Text>
              <Card.Img className='dmwbmg' src={bimage3} alt="Secure Storage" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 p-2 px-4">
          <Card className="dwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh'>Automated Workflows</Card.Title>
              <Card.Text className='mw'>
                Simplify your processes with automated document routing and approval.
              </Card.Text>
              <Card.Img className='dmwbmg' src={bimage4} alt="Automated Workflows" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MDcarousels;
