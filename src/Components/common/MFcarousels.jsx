import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap'; 
import './css/mform.css';
import bimage1 from '../images/fm.png';
import bimage2 from '../images/fm2.png';
import bimage3 from '../images/f3.png';
import bimage4 from '../images/f4.png';
import bimage5 from '../images/f5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

function MFcarousels() {
  const [index, setIndex] = useState(0);
  const carouselItems = [
    {
      title: "Plethora of controls & properties",
      text: "A rich array of controls and properties, providing developers with an extensive toolkit for application development. Developers can rapidly build sophisticated applications tailored to their specific requirements, all without delving deeply into traditional coding practices. This abundance of tools empowers developers to design, customize, and deploy applications efficiently, accelerating the development cycle and fostering innovation within organizations.",
      image: bimage1
    },
    {
      title: "Data pushers",
      text: "Send data from a single source form to multiple destination forms. For instance, push data from an invoice form to a journal voucher form. Similarly, from a salesman receipt form, send data to various destination forms like journal vouchers (cash receipts), stock adjustment forms (for shortages or excesses of issued stock), and more.",
      image: bimage2
    },
    {
      title: "Import from Excel",
      text: "Migrating data from legacy systems can be complex, but leveraging Excel as an intermediary tool for exporting and importing data streamlines the process. Exporting data into Excel allows for easy manipulation and preparation, ensuring a smooth transition into EXPRESSbase using standard import formats like CSV or XLSX. This approach simplifies data migration, reduces the risk of errors, and enables effective participation from users of all technical levels.",
      image: bimage3
    },
    {
      title: "Audit Trails",
      text: "An audit trail is crucial for tracking and documenting all user actions and changes within the system. It ensures accountability, transparency, and security by providing a detailed log of data access, modifications, and deletions, which is essential for regulatory compliance, security incident investigations, and maintaining data integrity. Audit trails also enable businesses to monitor user behavior effectively and enhance governance and risk management practices.",
      image: bimage4
    },
    {
      title: "Constraints",
      text: "Implementing granular restrictions on create, edit, cancel, and delete actions for form submissions is critical beyond general application security measures. Business logic often requires specific conditions to be enforced, preventing certain actions based on contextual rules or workflow requirements. By applying these restrictions, organizations can ensure data integrity, regulatory compliance, and operational consistency within their applications.",
      image: bimage5
    }
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? carouselItems.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = index === carouselItems.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="custom-carous" style={{ width: '100%', height: '100%' }}>
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <Card className="wbg ">
              <Card.Body className='wfcbm'>
                <div className="carousel-title-container">
                  <Button variant="link" className="left-arrow" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Button>
                  <Card.Title className='wmainh'>{item.title}</Card.Title>
                  <Button variant="link" className="right-arrow" onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                </div>
                <Card.Text className='wm'>
                  {item.text}
                </Card.Text>
                <Card.Img className='mwbmg' src={item.image} alt={`Slide ${idx + 1}`} />
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MFcarousels;
