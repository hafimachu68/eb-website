import React, { useRef } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/mform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



import chart from '../images/chart.svg';
import charts from '../images/Charts2.png';
import dash from '../images/dash.svg';
import Calender from '../images/Calender1.png';

import pdf from '../images/dr.svg';
import PDF from '../images/PDF.png';

import map from '../images/map.svg';

import tab from '../images/table.svg';
import cal from '../images/cal.svg';
import tab1 from '../images/Tablev.png';
import dashb from '../images/Dashboard1.png';
import mp from '../images/Map.png';


function MRforms() {
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
      image: pdf,
      imageA: PDF,
      text: 'PDF',
      },
    
    {
      image: chart,
      imageA: charts,
      text: 'Charts',
      },
    
      {
        image: cal,
        imageA: Calender,
        text: 'Calender View',
         },
    {
      image: dash,
      imageA: dashb,
      text: 'Dashboards',
    },
    {
      image: map,
      imageA: mp,
      text: 'Map View',
        },
    {
      image: tab,
      imageA: tab1,
      text: 'Table View',
        },
  ];

  return (
    <Container className='mf'>
      <Row>
        <Col>
          <Carousel ref={carouselRef} className='mfcrsl' interval={null}>
            {overlayData.map((data, index) => (
              <Carousel.Item key={index}>
                <Card className="carousel-card pt-4 rwf wf">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                            <FontAwesomeIcon icon={faChevronLeft} />
                          </Button>
                        </Col>
                        <Col>
                          <img src={data.image} alt={`${data.text} Icon`} className="rbicon icon" />
                        </Col>
                        <Col className="text-center align-self-center">
                          <h2 className='rch text-center'>{data.text}</h2>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Button variant="normal" onClick={handleNext} className="arrow-btn">
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                   
                    <img className='mmg' src={data.imageA} alt={`${data.text} Image`} />
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

export default MRforms;
