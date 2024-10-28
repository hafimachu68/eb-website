import React, { useRef } from 'react'; 
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './css/mform.css';

import pdf from '../images/dr.svg';
import PDF from '../images/PDF.png';
import chart from '../images/chart.svg';
import cal from '../images/cal.svg';
import charts from '../images/Charts2.png';
import dash from '../images/dash.svg';
import dashb from '../images/Dashboard1.png';
import Calender from '../images/Calender1.png';
import map from '../images/map.svg';
import mp from '../images/Map.png';
import tab from '../images/table.svg';
import tab1 from '../images/Tablev.png';

function MRforms() {
  const carouselRef = useRef(null);  // Reference to the carousel

  const handlePrev = () => {
    carouselRef.current.prev();  // Move to the previous slide
  };

  const handleNext = () => {
    carouselRef.current.next();  // Move to the next slide
  };

  return (
    <Container className='mf'>
      <Row>
        <Col>
          <Carousel ref={carouselRef} className='mfcrsl' interval={null}>
            {/* PDF Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 rwf wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col className="text-center align-self-center">
                        <div className="icon-text-container">
                          <img src={pdf} alt="PDF Icon" className="rbicon icon" />
                          <h2 className='rch'>PDF</h2>
                        </div>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handleNext} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <img className='mmg' src={PDF} alt="PDF Image" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Charts Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 rwf wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col className="text-center align-self-center">
                        <div className="icon-text-container">
                          <img src={chart} alt="Charts Icon" className="rbicon icon" />
                          <h2 className='rch'>Charts</h2>
                        </div>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handleNext} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <img className='mmg' src={charts} alt="Charts Image" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Calender View Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 rwf wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col className="text-center align-self-center">
                        <div className="icon-text-container calender-margin">
                          <img src={cal} alt="Calender Icon" className="rbicon icon" />
                          <h2 className='rch'>Calender View</h2>
                        </div>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handleNext} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <img className='mmg' src={Calender} alt="Calender Image" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Dashboards Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 rwf wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col className="text-center align-self-center">
                        <div className="icon-text-container">
                          <img src={dash} alt="Dashboards Icon" className="rbicon icon" />
                          <h2 className='rch'>Dashboards</h2>
                        </div>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handleNext} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <img className='mmg' src={dashb} alt="Dashboards Image" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Map View Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 rwf wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col className="text-center align-self-center">
                        <div className="icon-text-container">
                          <img src={map} alt="Map Icon" className="rbicon icon" />
                          <h2 className='rch'>Map View</h2>
                        </div>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handleNext} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <img className='mmg' src={mp} alt="Map Image" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Table View Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 rwf wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handlePrev} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col className="text-center align-self-center">
                        <div className="icon-text-container">
                          <img src={tab} alt="Table Icon" className="rbicon icon" />
                          <h2 className='rch'>Table View</h2>
                        </div>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="normal" onClick={handleNext} className="arrow-btn">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <img className='mmg' src={tab1} alt="Table Image" />
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default MRforms;
