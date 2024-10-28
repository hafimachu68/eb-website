import React, { useRef } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/mform.css';
import mainimg from '../images/mainimg.png';
import web from '../images/wformg.png';
import report from '../images/reportg.png';
import documents from '../images/docug.png';
import api from '../images/apig.png';
import mobapp from '../images/mobg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import WF from '../images/Web1.png';
import repo from '../images/Reports.png';
import docu from '../images/Docu.png';
import api1 from '../images/API1.png';

function Mforms() {
  const carouselRef = useRef(null);  // Reference to the carousel

  const handlePrev = () => {
    carouselRef.current.prev();  // Move to the previous slide
  };

  const handleNext = () => {
    carouselRef.current.next();  // Move to the next slide
  };

  // Carousel overlay data
  const overlayData = [
    {
      image: web,
      path: '/webform',
      imageA: WF,
      text: 'Web Forms',
      mainHeading: 'Build complex enterprise class Web Forms 10x faster',
      paragraph: 'Create powerful multi-lingual, multi-currency enterprise web forms with built-in audit trail, infinite validations, and RBAC security.',
    },
    {
      image: report,
      path: '/report',
      imageA: repo,
      text: 'Reports',
      mainHeading: 'Low-Code Reporting tools for Modern Businesses to accelerate decision making',
      paragraph: 'Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.',
    },
    {
      image: documents,
      path: '/documents',
      imageA: docu,
      text: 'Documents',
      mainHeading: 'Document Management for business apps like never before',
      paragraph: 'A document management system that seamlessly integrates into your business process.',
    },
    {
      image: api,
      path: '/api',
      imageA: api1,
      text: 'APIs',
      mainHeading: 'Seamlessly Integrate with 3rd Party software',
      paragraph: 'Efficiently integrate third-party applications into your workflow using our API builder.',
    },
    {
      image: mobapp,
      path: '/mobileapp',
      imageA: mainimg,
      text: 'Mobile Apps',
      mainHeading: 'Empower Your fast growing business with Internal Mobile Apps',
      paragraph: 'Transform your organization\'s internal processes with our low-code mobile app platform.',
    },
  ];

  return (
    <Container className='mf'>
      <Row>
        <Col>
          <Carousel ref={carouselRef} className='mfcrsl' interval={null}>
            {overlayData.map((data, index) => (
              <Carousel.Item key={index}>
                <Card className="carousel-card pt-4 mwf wf">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                            <FontAwesomeIcon icon={faChevronLeft} />
                          </Button>
                        </Col>
                        <Col>
                          <img src={data.image} alt={`${data.text} Icon`} className="icon" />
                        </Col>
                        <Col className="text-center align-self-center">
                          <h2 className='mch text-center'>{data.text}</h2>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button variant="normal" onClick={handleNext} className="arrow-btn">
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Button>
                        </Col>
                      </Row>
                      <div className="carousel-content pt-5">
                        <h5 className='mmh'>{data.mainHeading}</h5>
                        <p className='mmp'>{data.paragraph}</p>
                      </div>
                    </div>
                    <div className="align-self-center mbd">
                      <Link to={data.path}>
                        <Button className="mfbtn" variant="light">Explore</Button>
                      </Link>
                    </div>
                    <img className='mmgf' src={data.imageA} alt={`${data.text} Image`} />
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Mforms;
