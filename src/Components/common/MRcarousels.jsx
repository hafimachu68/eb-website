import React from 'react';
import { Carousel, Card, Button, Col, Row } from 'react-bootstrap'; // Removed CarouselControl import
import bimage1 from '../images/G31.png';
import bimage2 from '../images/G32.png';
import bimage3 from '../images/G33.png';
import bimage4 from '../images/G34.png';
import bimage5 from '../images/G35.png';
import bimage6 from '../images/G36.png';
import web from '../images/mr1.png';
import tb from '../images/mr3.png';
import pdf from '../images/mr2.png';
import cv from '../images/mr4.png';
import mv from '../images/mr5.png';
import cl from '../images/mr6.png';



import './css/mform.css';


function MRcarousels() {
  return (
    <div>
      <Carousel  interval={null} className="custom-carous" style={{ width: '100%', height: '100%' }}>
        <Carousel.Item>
          <Card className="wbg text-light">
            <Card.Body className='cbm'>
            <Row className='pt-4 tex-center'>
                <Col>
                  <img src={web} alt="Web Forms Icon" className="mrclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mruc">Unlimited Dashboards</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Text className='mw'>
              Create unlimited dashboards to get user-friendly overviews of key metrics and data visualizations as per your requirements.                </Card.Text>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
          <Card.Body className='cbm'>
            <Row className='pt-4 tex-center'>
                <Col>
                  <img src={pdf} alt="Web Forms Icon" className="mrclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mruc">PDF Reports</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Text className='mw'>
              Create unlimited dashboards to get user-friendly overviews of key metrics and data visualizations as per your requirements.                </Card.Text>
              <Card.Img className='mbmg' src={bimage2} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
          <Card.Body className='cbm'>
            <Row className='pt-4 tex-center'>
                <Col>
                  <img src={tb} alt="Web Forms Icon" className="mrclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mruc">Table View</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Text className='mw'>
              Create unlimited dashboards to get user-friendly overviews of key metrics and data visualizations as per your requirements.                </Card.Text>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
          <Card.Body className='cbm'>
            <Row className='pt-4 tex-center'>
                <Col>
                  <img src={cv} alt="Web Forms Icon" className="mrclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mruc">Chart View</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Text className='mw'>
              Create unlimited dashboards to get user-friendly overviews of key metrics and data visualizations as per your requirements.                </Card.Text>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
          <Card.Body className='cbm'>
            <Row className='pt-4 tex-center'>
                <Col>
                  <img src={mv} alt="Web Forms Icon" className="mrclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mruc">Map View</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Text className='mw'>
              Create unlimited dashboards to get user-friendly overviews of key metrics and data visualizations as per your requirements.                </Card.Text>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
          <Card.Body className='cbm'>
            <Row className='pt-4 tex-center'>
                <Col>
                  <img src={cl} alt="Web Forms Icon" className="mrclogo" /> 
                </Col>
                <Col className="">
                  <Card.Subtitle className="mb-2b mruc">Calenders</Card.Subtitle>
                </Col>
              </Row>    
              <Card.Text className='mw'>
              Create unlimited dashboards to get user-friendly overviews of key metrics and data visualizations as per your requirements.                </Card.Text>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MRcarousels;
