import React, { useState, useEffect } from 'react';
import './css/abteam.css';
import Suresh from '../images/suresh1.png';
import UnniHover from '../images/unni22.png';
import SureshHover from '../images/suresh2.png';
import unni from '../images/unni11.png';
import Febin from '../images/Febin.png';
import Dona from '../images/DOna.png';
import Vinayachandran from '../images/Vinayachandran.png';
import devesh from '../images/devesh.png';
import Gayatri from '../images/Gayatri.png';
import kp from '../images/KP.png';
import hafi from '../images/hafi.png';
import backgroundImage from '../images/cloud.png'; // Import your image
import bic from '../images/team.png'; // Import your image
import background from '../images/bg-blue.svg'; // Import your image


// import hafi from '../images/hafee.jpeg';

import Contributers1 from '../images/c-1.png';
import Contributers2 from '../images/c-2.png';


function ABteam() {
  const [sureshHovered, setSureshHovered] = useState(false);
  const [unniHovered, setUnniHovered] = useState(false);
  const [contributersVisible, setContributersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contributeSection = document.querySelector('.contribute-wrapper');
      if (contributeSection) {
        const top = contributeSection.getBoundingClientRect().top;
        const bottom = contributeSection.getBoundingClientRect().bottom;
        if (top < window.innerHeight && bottom >= 0) {
          setContributersVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="teamview"style={{backgroundImage: `url(${background})`}}>
      <div className="cloud cloud1"  style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="cloud cloud12"  style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="clouds2 cloud2"  style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="cloud cloud3"  style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="cloud cloud4"  style={{backgroundImage: `url(${backgroundImage})`}}></div>

      <div className="container">
        <div className="row tmg" style={{ justifyContent: 'center' }}>
        <div className=" text-white text-center blhic">
             <p className='feic'> <i> <img className='to me-3' src={bic} alt="" /> </i>TEAM </p>
          </div>
          <div className='text-white text-center txmg'>
            <h1 className='blh'>Fusion of expertise and fresh perspectives </h1>
            {/* <p className='blp '> Tailored solutions with advanced capabilities for fast growing businesses </p> */}
          </div>
          <img 
            src={sureshHovered ? SureshHover : Suresh} 
            alt="Founder" 
            onMouseEnter={() => setSureshHovered(true)}
            onMouseLeave={() => setSureshHovered(false)}
          />
        </div>
        <div style={{ marginTop: '3em' }}></div>
        <div className="row" style={{ justifyContent: 'center' }}>
          <img 
            src={unniHovered ? UnniHover : unni} 
            alt="Founder" 
            onMouseEnter={() => setUnniHovered(true)}
            onMouseLeave={() => setUnniHovered(false)}
          />
        </div>
        <div style={{ marginTop: '3em' }}></div>
<div className="container">
  {/* First Row with 4 Columns */}
  <div className="row text-center blp text-white">
    <div className="col-md-3 col-6 center">
      <img className="team" src={Febin} alt="Febin Carlos" />
      <p className="single-line">Febin Carlos</p>
      <p className='amt'>Lead Developer</p>
    </div>
    <div className="col-md-3 col-6 center">
      <img className="team" src={Dona} alt="Dona Jose" />
      <p className="single-line">Dona Jose</p>
      <p className='amt'>Lead Developer</p>
    </div>
    <div className="col-md-3 col-6 center">
      <img className="team" src={Vinayachandran} alt="Vinayachandran V" />
      <p className="single-line">Vinayachandran V</p>
      <p className='amt'>Implementation Engineer</p>
    </div>
    <div className="col-md-3 col-6 center">
      <img className="team" src={devesh} alt="Vinayachandran V" />
      <p className="single-line">Devesh</p>
      <p className='amt'>Customer Success Manager</p>
    </div>
  </div>
  
  {/* Second Row with 3 Columns */}
  <div className="row text-center text-white pt-5 justify-content-center">
    <div className="col-md-3 col-6 center blp gy">
      <img className="team" src={Gayatri} alt="Gayatri Mayadas" />
      <p className="single-line">Gayatri Mayadas</p>
      <p className='amt'>UI/UX Designer</p>
    </div>
    <div className="col-md-3 col-6 center blp">
      <img className="team" src={kp} alt="Krishnaprasad K" />
      <p className="single-line">Krishnaprasad K</p>
      <p className='amt'>Implementation Executive</p>
    </div>
    <div className="col-md-3 col-6 center blp">
      <img className="team" src={hafi} alt="Hafeeza Mashood"/>
      <p className="single-line">Hafeeza Mashood</p>
      <p className='amt'>Jr. Software Developer</p>
    </div>
  </div>
  
  <div style={{ marginTop: '5rem' }}></div>

      <h3 className='text-white blhic'><b>Contributors</b></h3>
      <div className='mt-2 pt-4'></div>
      <div className="contribute-wrapper">
       <img className={`contribute ${contributersVisible ? 'visible' : ''} contribute-1`} src={Contributers1} alt="Contributors" />
     <img className={`contribute ${contributersVisible ? 'visible' : ''} contribute-2`} src={Contributers2} alt="Contributors" />
     </div>
      </div>
      </div>
    </section>
  );
}

export default ABteam;
