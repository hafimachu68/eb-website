import React from 'react';
import { Carousel, Card, Button, Col, Row } from 'react-bootstrap'; // Removed CarouselControl import
import bimage1 from '../images/mainimg.png';
import './css/mform.css';
import web from '../images/wformg.png';
import report from '../images/reportg.png';
import documents from '../images/docug.png';
import api from '../images/apig.png';
import mobapp from '../images/mobg.png';


function Mfcarousel() {
  return (
    <div>
      <Carousel  interval={null} className="custom-carousel" style={{ width: '100%', height: '100%' }}>
        <Carousel.Item>
          <Card className="mfbg">
            <Card.Body className='cbm'>
              <Row className='pt-4 tex-center'>
                <Col>
                  <img src={web} alt="Web Forms Icon" className="mfclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mfuc">Web Forms</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Build complex enterprise class Web Forms 10x faster</Card.Title>
              <Card.Text>
              Create powerful multi-lingual, multi-currency enterprise web forms with built-in audit trail, infinite validations and RBAC security.
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="mfbg">
            <Card.Body className='cbm'>
              <Row className='pt-4'>
                <Col>
                  <img src={report} alt="Web Forms Icon" className="mfclogo" />
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2 mfuc ">Reports</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Low-Code Reporting tools for Modern Businesses to accelerate decision making</Card.Title>
              <Card.Text>
              Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="mfbg">
            <Card.Body className='cbm'>
              <Row className='pt-4'>
                <Col>
                  <img src={documents} alt="Web Forms Icon" className="mfclogo" />
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2 mfuc">Documents </Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Document Management for business apps like never before</Card.Title>
              <Card.Text>
              A document management system that seamlessly integrates into your business process. Say goodbye to toggling between platforms—manage documents in-context, ensuring seamless access to crucial information.
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="mfbg">
            <Card.Body className='cbm'>
              <Row className='pt-4'>
                <Col>
                  <img src={api} alt="Web Forms Icon" className="mfclogo" />
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2 mfuc">APIs</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Seamlessly Integrate with 3rd Party software</Card.Title>
              <Card.Text>
              Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.
              </Card.Text>  
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="mfbg">
            <Card.Body className='cbm'>
              <Row className='pt-4'>
                <Col>
                  <img src={mobapp} alt="Web Forms Icon" className="mfclogo" />
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2 mfuc">Mobile Apps</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Empower Your fast growing business with Internal Mobile Apps</Card.Title>
              <Card.Text>
              Transform your organization's internal processes with our low-code mobile app platform. From task management to internal communications, our apps empower your team to collaborate seamlessly and stay productive from anywhere.
              </Card.Text>  
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
          </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Mfcarousel;
