import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './css/mform.css';
import mainimg from '../images/mainimg.png';
import web from '../images/wformg.png';
import report from '../images/reportg.png';
import documents from '../images/docug.png';
import api from '../images/apig.png';
import mobapp from '../images/mobg.png';

function Mforms() {
  return (
    <Container className='mf'>
      <Row>
        <Col>
          <Carousel className='mfcrsl'  interval={null}>
            <Carousel.Item>
              <Card className="carousel-card pt-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col>
                        <img src={web} alt="Web Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Web Forms</h2>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Build complex enterprise class Web Forms 10x faster</h5>
                      <p className='mmp'> Create powerful multi-lingual, multi-currency enterprise web forms with built-in audit trail, infinite validations and RBAC security.</p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />

                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              {/* Reports Slide */}
              <Card className="carousel-card pt-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col>
                        <img src={report} alt="Report Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Reports</h2>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Low-Code Reporting tools for Modern Businesses to accelerate decision making</h5>
                      <p className='mmp'> Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.</p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />

                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              {/* Documents Slide */}
              <Card className="carousel-card pt-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col>
                        <img src={documents} alt="Documents Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Documents</h2>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Document Management for business apps like never before</h5>
                      <p className='mmp'>A document management system that seamlessly integrates into your business process. Say goodbye to toggling between platforms—manage documents in-context, ensuring seamless access to crucial information.</p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />

                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              {/* APIs Slide */}
              <Card className="carousel-card pt-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col>
                        <img src={api} alt="APIs Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>APIs</h2>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Seamlessly Integrate with 3rd Party software</h5>
                      <p className='mmp'> Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.</p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn" variant="light">Explore</Button>
                  </div>
                  <img className='mmg' src={mainimg} alt="Slide 1" />

                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              {/* Mobile Apps Slide */}
              <Card className="carousel-card pt-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Row>
                      <Col>
                        <img src={mobapp} alt="Mobile Apps Forms Icon" className="icon" />
                      </Col>
                      <Col className="text-center align-self-center">
                        <h2 className='mch text-center'>Mobile Apps</h2>
                      </Col>
                    </Row>
                    <div className="carousel-content pt-5">
                      <h5 className='mmh'>Empower Your fast growing business with Internal Mobile Apps</h5>
                      <p className='mmp'> Transform your organization's internal processes with our low-code mobile app platform. From task management to internal communications, our apps empower your team to collaborate seamlessly and stay productive from anywhere.</p>
                    </div>
                  </div>
                  <div className="align-self-center mbd">
                    <Button className="mbtn" variant="light">Explore</Button>
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
