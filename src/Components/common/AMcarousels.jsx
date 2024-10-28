import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'; // Removed Carousel import
import bimage1 from '../images/wfimg.png';
import bimage2 from '../images/api22.png';
import bimage4 from '../images/api33.png';
import './css/mform.css';

function AMcarousels() {
  return (
    <div className="d-flex justify-content-center" style={{marginTop:'-1rem'}}>
      <Row className="">
        <Col md={4} className="mt-1 p-2 px-4">
          <Card className="adwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh'>Seamless Integration, Streamlined Operations  </Card.Title>
              <Card.Text className='amw'>
              Our intuitive platform ensures seamless API integration, allowing you to streamline operations and enhance collaboration. By leveraging diverse tools effortlessly, your business can focus on what truly matters—innovation and growth.

</Card.Text>
              <Card.Img className='dmwbmg' src={bimage1} alt="Centralized Access" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 p-2 px-4">
          <Card className="adwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh'>Enhance Collaboration and Connectivity
              </Card.Title>
              <Card.Text className='amw'>
              With our API builder, cross-platform connectivity becomes a breeze. Whether you need to connect disparate systems or integrate new tools into your existing workflow, our platform makes it easy. Enhance collaboration within your team and with external partners, ensuring everyone is on the same page and working towards common goals.

</Card.Text>
              <Card.Img className='dmwbmg' src={bimage2} alt="Enhanced Collaboration" />
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4 p-2 px-4">
          <Card className="adwbg">
            <Card.Body className='wcbm'>
              <Card.Title className='mmainh '>Stay Agile in a Rapidly Evolving Landscape
              </Card.Title>
              <Card.Text className='amw'>
              The digital landscape is constantly evolving, and businesses need to adapt quickly to stay ahead. Our API builder empowers you to do just that. With the ability to integrate new applications swiftly, you can respond to market changes and customer needs faster than ever before.

</Card.Text>
              <Card.Img className='dmwbmg' src={bimage4} alt="Automated Workflows" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AMcarousels;
