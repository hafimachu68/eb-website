import React, { useState, useEffect } from 'react';
import './css/abteam.css';
import Suresh from '../images/Suresh.png';
import UnniHover from '../images/org-unni.png';
import SureshHover from '../images/org-suresh.png';
import unni from '../images/Unni.png';
import Febin from '../images/Febin.png';
import Dona from '../images/DOna.png';
import Vinayachandran from '../images/Vinayachandran.png';
import Gayatri from '../images/Gayatri.png';
import kp from '../images/KP.png';
import backgroundImage from '../images/cloud.png'; // Import your image
import background from '../images/bluebg.png'; // Import your image


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
          <div className='text-white text-center txmg'>
            <h1>Our Team</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
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
        <div className="containerp-5">
          <div className="row text-center ttxt  text-white">
            <div className="col-md-4 col-6 center" >
              <img className="team" src={Febin} alt="Febin Carlos" />
              <h4 className="single-line"><b>Febin Carlos</b></h4>
              <h4>Lead Developer</h4>
            </div>
            <div className="col-md-4 col-6 ttxt  center" >
              <img className="team" src={Dona} alt="Dona Jose" />
              <h4 className="single-line"><b>Dona Jose</b></h4>
              <h4>Lead Developer</h4>
            </div>
            <div className="col-md-4 col-6 ttxt  center" >
              <img className="team" src={Vinayachandran} alt="Vinayachandran V" />
              <h4 className="single-line"><b>Vinayachandran V</b></h4>
              <h4>Implementation Engineer</h4>
            </div>
          </div>
          <div className="row text-center text-white pt-5 ">
            <div className="col-md-4 col-6 center ttxt  gy" >
              <img className="team" src={Gayatri} alt="Gayatri Mayadas" />
              <h4 className="single-line"><b>Gayatri Mayadas</b></h4>
              <h4 className="single-line">UI/UX Designer</h4>
            </div>
            <div className="col-md-4 col-6 center ttxt kp " >
              <img className="team" src={kp} alt="Krishnaprasad K" />
              <h4 className="single-line"><b>Krishnaprasad K</b></h4>
              <h4>Implementation Executive</h4>
            </div>
            <div className="col-md-4 col-6 center ttxt  " >
              <img className="team" src={kp} alt="Hafeeza Mashood" />
              <h4 className="single-line"><b>Hafeeza Mashood</b></h4>
              <h4>Jr. Software Developer</h4>
            </div>
          </div>
          
           <div style={{ marginTop: '5rem' }}></div>
      <h3 className='text-white'><b>Contributers</b></h3>
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
