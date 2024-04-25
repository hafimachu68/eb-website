import React from 'react';
import { Carousel, Container, Row, Col, Card,Button } from 'react-bootstrap';
import './css/mform.css';
import mainimg from '../images/mainimg.png';
import web from '../images/wformg.png';
import report from '../images/reportg.png';
import documents from '../images/docug.png';
import api from '../images/apig.png';
import mobapp from '../images/mobg.png';


function Mforms() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <Card className="carousel-card pt-4">
              <Card.Body>
                <Row>
                    <Col>
                      <img  src={web} alt="Web Forms Icon" className="icon" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="text-center align-self-center">
                    <h2 className='mch text-center'>Web Forms</h2>
                    </Col>
                  </Row>                  
                  <div className="carousel-content pt-5">
                    <Row>
                      <Col>
                        <h5>Sub Heading</h5>
                      </Col>
                      <Col className="text-center align-self-center">
                        <Button className="mbtn"  variant="light">Explore</Button>{/* Explore button */}
                      </Col>
                    </Row>
                    <h1>Main Heading</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        </p>
                    <img className='mmg' src={mainimg} alt="Slide 1" />
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="carousel-card pt-5">
              <Card.Body>
              <Row>
                    <Col>
                      <img  src={report} alt="Web Forms Icon" className="icon" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="text-center align-self-center">
                    <h2 className='mch text-center'>Reports</h2>
                    </Col>
                  </Row>                         
                   <div className="carousel-content pt-5">
                  <Row>
                      <Col>
                        <h5>Sub Heading</h5>
                      </Col>
                      <Col className="text-center align-self-center">
                        <Button   className="mbtn" variant="light">Explore</Button>{/* Explore button */}
                      </Col>
                    </Row>                    <h1>Main Heading</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                    <img className='mmg' src={mainimg} alt="Slide 1" />
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="carousel-card pt-5">
              <Card.Body>
              <Row>
                    <Col>
                      <img  src={documents} alt="Web Forms Icon" className="icon" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="text-center align-self-center">
                    <h2 className='mch text-center'>Documents</h2>
                    </Col>
                  </Row>  
                 <div className="carousel-content pt-5">
                  <Row>
                      <Col>
                        <h5>Sub Heading</h5>
                      </Col>
                      <Col className="text-center align-self-center">
                        <Button className="mbtn"  variant="light">Explore</Button>{/* Explore button */}
                      </Col>
                    </Row>                    <h1>Main Heading</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                    <img className='mmg' src={mainimg} alt="Slide 1" />
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="carousel-card pt-5">
              <Card.Body>
              <Row>
                    <Col>
                      <img  src={api} alt="Web Forms Icon" className="icon" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="text-center align-self-center">
                    <h2 className='mch text-center'>APIs</h2>
                    </Col>
                  </Row>        
                <div className="carousel-content pt-5">
                  <Row>
                      <Col>
                        <h5>Sub Heading</h5>
                      </Col>
                      <Col className="text-center align-self-center">
                        <Button className="mbtn"  variant="light">Explore</Button>{/* Explore button */}
                      </Col>
                    </Row>                    <h1>Main Heading</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                    <img className='mmg' src={mainimg} alt="Slide 1" />
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="carousel-card pt-5">
              <Card.Body>
              <Row>
                    <Col>
                      <img  src={mobapp} alt="Web Forms Icon" className="icon" /> {/* Web Forms Icon */}
                    </Col>
                    <Col className="text-center align-self-center">
                    <h2 className='mch text-center'>Mobile App</h2>
                    </Col>
                  </Row>        
                  <div className="carousel-content pt-5">
                  <Row>
                      <Col>
                        <h5>Sub Heading</h5>
                      </Col>
                      <Col className="text-center align-self-center">
                        <Button className="mbtn"  variant="light">Explore</Button>{/* Explore button */}
                      </Col>
                    </Row>                    <h1>Main Heading</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                    <img className='mmg' src={mainimg} alt="Slide 1" />
                  </div>
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
