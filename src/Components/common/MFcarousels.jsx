import React from 'react';
import { Carousel, Card, Button, Col, Row } from 'react-bootstrap'; // Removed CarouselControl import
import bimage1 from '../images/wfimg1.png';
import bimage2 from '../images/wfimg2.png';
import bimage3 from '../images/wfimg3.png';
import bimage4 from '../images/wfimg4.png';
import bimage5 from '../images/wfimg5.png';
import './css/mform.css';


function MFcarousels() {
  return (
    <div>
      <Carousel  interval={null} className="custom-carous" style={{ width: '100%', height: '100%' }}>
        <Carousel.Item>
          <Card className="wbg text-light">
            <Card.Body className='cbm'>
              <Card.Title className='mmainh'>Plethora of controls & properties</Card.Title>
              <Card.Text className='mw'>
              A rich array of controls and properties, providing developers with an extensive toolkit for application development. Developers can rapidly build sophisticated applications tailored to their specific requirements, all without delving deeply into traditional coding practices. This abundance of tools empowers developers to design, customize, and deploy applications efficiently, accelerating the development cycle and fostering innovation within organizations.              </Card.Text>
              <Card.Img className='mbmg' src={bimage1} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
            <Card.Body className='cbm'>
              
              <Card.Title className='mmainh'>Data pushers</Card.Title>
              <Card.Text className='mw'>
              Send data from a single source form to multiple destination forms. For instance, push data from an invoice form to a journal voucher form. Similarly, from a salesman receipt form, send data to various destination forms like journal vouchers (cash receipts), stock adjustment forms (for shortages or excesses of issued stock), and more.              </Card.Text>
              <Card.Img className='mbmg' src={bimage2} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
            <Card.Body className='cbm'>
              
              <Card.Title className='mmainh'>Import from Excel</Card.Title>
              <Card.Text className='mw'>
              Migrating data from legacy systems can be complex, but leveraging Excel as an intermediary tool for exporting and importing data streamlines the process. Exporting data into Excel allows for easy manipulation and preparation, ensuring a smooth transition into EXPRESSbase using standard import formats like CSV or XLSX. This approach simplifies data migration, reduces the risk of errors, and enables effective participation from users of all technical levels.              </Card.Text>
              <Card.Img className='mbmg' src={bimage3} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
            <Card.Body className='cbm'>
              <Card.Title className='mmainh'>Audit Trails</Card.Title>
              <Card.Text className='mw'>
              An audit trail is crucial for tracking and documenting all user actions and changes within the system. It ensures accountability, transparency, and security by providing a detailed log of data access, modifications, and deletions, which is essential for regulatory compliance, security incident investigations, and maintaining data integrity. Audit trails also enable businesses to monitor user behavior effectively and enhance governance and risk management practices.            
                </Card.Text>  
              <Card.Img className='mbmg' src={bimage4} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="wbg text-light">
            <Card.Body className='cbm'>
              
              <Card.Title className='mmainh'>Constraints</Card.Title>
              <Card.Text className='mw'>
              Implementing granular restrictions on create, edit, cancel, and delete actions for form submissions is critical beyond general application security measures. Business logic often requires specific conditions to be enforced, preventing certain actions based on contextual rules or workflow requirements. By applying these restrictions, organizations can ensure data integrity, regulatory compliance, and operational consistency within their applications.              
              </Card.Text>  
              <Card.Img className='mbmg' src={bimage5} alt="First slide" />
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MFcarousels;
