import React, { useRef } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './css/mform.css';
import mainimg from '../images/mainimg.png';
import web from '../images/wformg.png';
import report from '../images/reportg.png';
import documents from '../images/docug.png';
import api from '../images/apig.png';
import mobapp from '../images/mobg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Mforms() {
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
            {/* Web Forms Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handlePrev} className="arrow-btn">    
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col>
                        <img src={web} alt="Web Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Web Forms</h2>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handleNext} className="arrow-btn">    
                                                <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Build complex enterprise class Web Forms 10x faster</h5>
                      <p className='mmp'>
                        Create powerful multi-lingual, multi-currency enterprise web forms with built-in audit trail, infinite validations, and RBAC security.
                      </p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn my-3" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Reports Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handlePrev} className="arrow-btn">   
                                                <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                      </Col>
                      <Col>
                        <img src={report} alt="Report Forms Icon" className="ricon mric" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Reports</h2>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handleNext} className="arrow-btn">
                        <FontAwesomeIcon icon={faChevronRight} />

                        </Button>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Low-Code Reporting tools for Modern Businesses to accelerate decision making</h5>
                      <p className='mmp'>
                        Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn my-3" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Documents Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handlePrev} className="arrow-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />

                        </Button>
                      </Col>
                      <Col>
                        <img src={documents} alt="Documents Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Documents</h2>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handleNext} className="arrow-btn">
                        <FontAwesomeIcon icon={faChevronRight} />

                        </Button>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Document Management for business apps like never before</h5>
                      <p className='mmp'>
                        A document management system that seamlessly integrates into your business process.
                      </p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn my-3" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* APIs Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handlePrev} className="arrow-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />

                        </Button>
                      </Col>
                      <Col>
                        <img src={api} alt="APIs Forms Icon" className="ricon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>APIs</h2>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handleNext} className="arrow-btn">
                        <FontAwesomeIcon icon={faChevronRight} />

                        </Button>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Seamlessly Integrate with 3rd Party software</h5>
                      <p className='mmp'>
                        Efficiently integrate third-party applications into your workflow using our API builder.
                      </p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn my-3" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />
                </Card.Body>
              </Card>
            </Carousel.Item>

            {/* Mobile Apps Slide */}
            <Carousel.Item>
              <Card className="carousel-card pt-4 wf">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handlePrev} className="arrow-btn"> 
                                                   <FontAwesomeIcon icon={faChevronLeft} />
                         </Button>
                      </Col>
                      <Col>
                        <img src={mobapp} alt="Mobile Apps Forms Icon" className="icon mric" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Mobile Apps</h2>
                      </Col>
                      <Col className="d-flex align-items-center justify-content-center">
                        <Button variant="light" onClick={handleNext} className="arrow-btn">
                          
                        <FontAwesomeIcon icon={faChevronRight} />

                        </Button>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Empower Your fast growing business with Internal Mobile Apps</h5>
                      <p className='mmp'>
                        Transform your organization's internal processes with our low-code mobile app platform.
                      </p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn my-3" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />
                </Card.Body>
              </Card>
            </Carousel.Item>

          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Mforms;
