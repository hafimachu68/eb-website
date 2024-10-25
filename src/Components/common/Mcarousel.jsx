import React, { useRef } from 'react';
import { Carousel, Card, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft,faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'; // Import the new icons
import bimage1 from '../images/QM.png';
import bimage2 from '../images/crm31.png';
import bimage3 from '../images/VSA.png';
// import bimage4 from '../images/Docu.png';
import bimage5 from '../images/AM.png';
import cric from '../images/cric.png';
import './css/mform.css';

function Mcarousel() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Move to the previous slide
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Move to the next slide
    }
  };

  return (
    <div className="position-relative">
      <Carousel ref={carouselRef} interval={null} className="custom-carouse" style={{ width: '100%', height: '100%' }}>
        <Carousel.Item>
          <Card className="mbg text-light">
            <Card.Body className='mcc'>
              <Row className='pt-3'>
                <Col>
                  <img src={cric} alt="Web Forms Icon" className="mflogo" />
                </Col>
                <Col>
                  <Card.Subtitle className="mb-2b muc">Use Cases </Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Attendance Management</Card.Title>
              <Card.Text>
                A cutting-edge attendance management solution designed with efficiency and simplicity in mind. Whether you're a small business, educational institution, or large corporation, this solution empowers you to effortlessly monitor attendance, streamline administrative tasks, and enhance productivity.
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mcmg' src={bimage5} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="mbg text-light">
            <Card.Body className='mcc'>
              <Row className='pt-3'>
                <Col>
                  <img src={cric} alt="Web Forms Icon" className="mflogo" />
                </Col>
                <Col>
                  <Card.Subtitle className="mb-2 muc">Use Cases </Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Custom Van Sales App</Card.Title>
              <Card.Text>
                A van sales management mobile app that can be easily customized, using low-code technology. Ideal for businesses in the distribution and retail sectors, it empowers sales teams to efficiently process orders, manage sales, and enhance customer satisfaction on the go. It works offline too!
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mcmg' src={bimage3} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="mbg text-light">
            <Card.Body className='mcc'>
              <Row className='pt-3'>
                <Col>
                  <img src={cric} alt="Web Forms Icon" className="mflogo" />
                </Col>
                <Col>
                  <Card.Subtitle className="mb-2 muc">Use Cases </Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Quotation Management</Card.Title>
              <Card.Text>
                A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations. It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially, and enhance customer satisfaction with ease.
              </Card.Text>
              <Button variant="light">Explore</Button>
              <Card.Img className='mcmg' src={bimage5} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="mbg text-light">
            <Card.Body className='mcc'>
              <Row className='pt-3'>
                <Col>
                  <img src={cric} alt="Web Forms Icon" className="mflogo" />
                </Col>
                <Col>
                  <Card.Subtitle className="mb-2 muc">Use Cases </Card.Subtitle>
                </Col>
              </Row>    
              <Card.Title className='mmainh'>Custom CRM</Card.Title>
              <Card.Text>
                A dynamic customer relationship management (CRM) application, meticulously crafted using low-code technology. With its intuitive interface and robust features, it transformed the client’s approach to customer management, enabling them to build stronger relationships, streamline sales processes, and drive effective growth strategies.
              </Card.Text>  
              <Button variant="light">Explore</Button>
              <Card.Img className='mcmg' src={bimage2} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>

      {/* Left Chevron Button */}
      <Button
        variant="none"
        className="carousel-control-prev arrow-btn"
        onClick={handlePrev}
        style={{ position: 'absolute', left: '-1%', transform: 'translateY(-50%)' ,  marginTop: '-2rem' }}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} /> {/* Updated Icon */}
      </Button>

      {/* Right Chevron Button */}
      <Button
        variant="none"
        className="carousel-control-next arrow-btn"
        onClick={handleNext}
        style={{ position: 'absolute' , right: '0', transform: 'translateY(-50%)', marginTop: '-2rem' }}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </Button>
    </div>
  );
}

export default Mcarousel;
