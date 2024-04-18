import React, { useState } from 'react';
import './css/boxmain.css';
import bimage1 from '../images/bxpg.png';
// import GitHub from './GitHub';

function BoxMain() {
  const [activeHeading, setActiveHeading] = useState('Heading 1'); // Set default active heading
  const headings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4']; // Sample headings
  const subHeadings = ['Sub Heading 1', 'Sub Heading 2', 'Sub Heading 3', 'Sub Heading 4']; // Sample sub headings
  const mainHeadings = ['Main Heading 1', 'Main Heading 2', 'Main Heading 3', 'Main Heading 4']; // Sample main headings
  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
    '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
    '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum '
  ]; // Sample paragraphs

  // Array of image sources corresponding to each heading
  const imageSources = [
    bimage1,
    bimage1,
    bimage1,
    bimage1,
  ];

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  return (
    <div className='bg-b'>
      <div className='container'>
        <div className="box-container">
          <div className="left-box">
            {headings.map((heading, index) => (
              <div
                key={index}
                className={`heading ${activeHeading === heading ? 'active' : ''}`}
                onClick={() => handleHeadingClick(heading)}
              >
                {heading}
              </div>
            ))}
          </div>
          <div className={`right-box ${activeHeading ? 'active' : ''}`}>
            {activeHeading && (
              <div className="bxcontent">
                <div className="sub-heading py-2">{subHeadings[headings.indexOf(activeHeading)]}</div>
                <div><h1 className="main-heading py-2">{mainHeadings[headings.indexOf(activeHeading)]}</h1></div>
                <div className="paragraph">{paragraphs[headings.indexOf(activeHeading)]}</div>
                <div className="bxbtn-img-container">
                  <div className='bxbtn'><button className='bbtn'>Explore</button></div>
                  <div className='bximg'><img src={imageSources[headings.indexOf(activeHeading)]} alt="Your Image" /></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="git">
        {/* <GitHub /> */}
      </div>
    </div>
  );
}

export default BoxMain;
