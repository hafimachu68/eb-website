import React from 'react';
import { Carousel, Card, Button,Col,Row } from 'react-bootstrap';
import bimage1 from '../images/bxpg.png';
import cric from '../images/cric.png';
import './css/mform.css';


function Mcarousel() {
  return (
    <div style={{ width: '100%', height: '48vh' }}>
      <Carousel className="custom-carousel" style={{ width: '100%', height: '100%' }}>
        <Carousel.Item>
          <Card className="mbg text-light">
            <Card.Body>
            <Row className='pt-2'>
                    <Col>
                      <img  src={cric} alt="Web Forms Icon" className="mflogo" /> 
                    </Col>
                    <Col className="">
                    <Card.Subtitle className="mb-2b muc">Use Cases </Card.Subtitle>
                    </Col>
                  </Row>    
              <Card.Title className='mmainh'>Quotation Management</Card.Title>
              <Card.Text>
              A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.  It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.
      
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />

            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card className="mbg text-light">
        <Card.Body>
            <Row className='pt-2'>
                    <Col>
                      <img  src={cric} alt="Web Forms Icon" className="mflogo" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="">
                    <Card.Subtitle className="mb-2 muc ">Use Cases </Card.Subtitle>
                    </Col>
                  </Row>    
              <Card.Title className='mmainh'>Quotation Management</Card.Title>
              <Card.Text>
              A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.  It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.
      
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />

            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card className="mbg text-light">
        <Card.Body>
            <Row className='pt-2'>
                    <Col>
                      <img  src={cric} alt="Web Forms Icon" className="mflogo" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="">
                    <Card.Subtitle className="mb-2 muc">Use Cases </Card.Subtitle>
                    </Col>
                  </Row>    
              <Card.Title className='mmainh'>Quotation Management</Card.Title>
              <Card.Text>
              A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.  It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.
      
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />

            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card className="mbg text-light">
        <Card.Body>
            <Row className='pt-2'>
                    <Col>
                      <img  src={cric} alt="Web Forms Icon" className="mflogo" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="">
                    <Card.Subtitle className="mb-2 muc">Use Cases </Card.Subtitle>
                    </Col>
                  </Row>    
              <Card.Title className='mmainh'>Quotation Management</Card.Title>
              <Card.Text>
              A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.  It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.
      
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

export default Mcarousel;
