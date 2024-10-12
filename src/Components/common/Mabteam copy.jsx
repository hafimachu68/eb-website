import React, { useState, useEffect } from 'react';
import './css/abteam.css';
import Suresh from '../images/sm0.png';
import UnniHover from '../images/um1.png';
import SureshHover from '../images/sm1.png';
import unni from '../images/um0.png';
import Febin from '../images/Febin.png';
import Dona from '../images/DOna.png';
import Vinayachandran from '../images/Vinayachandran.png';
import Gayatri from '../images/Gayatri.png';
import kp from '../images/KP.png';
import hafi from '../images/hafi.png';
import backgroundImage from '../images/cloud.png'; // Import your image
import bic from '../images/team.png'; // Import your image
import background from '../images/bg-blue.svg'; // Import your image


// import hafi from '../images/hafee.jpeg';

import Contributers1 from '../images/c-1.png';
import Contributers2 from '../images/c-2.png';


function Mabteam() {
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
             <p className='feic'> <i> <img className='po me-3' src={bic} alt="" /> </i>TEAM </p>
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
<div className="container ">
  <div className="row text-center blp text-white">
    <div className="col-md-6 col-12 blp  mcenter">
      <img className="mteam k" src={Febin} alt="Febin Carlos" />
      <p className="msingle-line kp">Febin Carlos</p>
      <p className='mamt lp'>Lead Developer</p>
    </div>
   <div className="col-md-6 col-12 blp mcenter">
      <img className="mteam" src={Dona} alt="Dona Jose" />
      <p className="msingle-line">Dona Jose</p>
      <p className='mamt dp'>Lead Developer</p>
    </div> 
    <div className="col-md-6 col-12 blp mcenter">
      <img className="mteam k" src={Vinayachandran} alt="Vinayachandran V" />
      <p className="single-line vn">Vinayachandran V</p>
      <p className='mamt vn'>Implementation Engineer</p>
    </div>
    <div className="col-md-6 col-12 mcenter blp ">
      <img className="mteam" src={Gayatri} alt="Gayatri Mayadas" />
      <p className="msingle-line">Gayatri Mayadas</p>
      <p className='mamt gy'>UI/UX Designer</p>
    </div>
    <div className="col-md-6 col-12 mcenter blp ">
      <img className="mteam k" src={kp} alt="Krishnaprasad K" />
      <p className="msingle-line kp">Krishnaprasad K</p>
      <p className='mamt kp'>Implementation Executive</p>
    </div>
    <div className="col-md-6 col-12 mcenter blp">
      <img className="mteam" src={hafi} alt="Hafeeza Mashood" />
      <p className="msingle-line">Hafeeza Mashood</p>
      <p className='mamt gy'>Jr. Software Developer</p>
    </div>
  </div>
     <div style={{ marginTop: '1rem' }}></div>
      <h3 className='text-white blhic'><b>Contributers</b></h3>
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

export default Mabteam;
