// Trusted.jsx

import React from 'react';
import './css/mtrusted.css';
import StartupMission from '../images/Rectangle 3.png';
import Ehealth from '../images/Rectangle 4.png';
import Emc from '../images/Rectangle 5.png';
import Kase from '../images/Rectangle 6.png';
import Kdisc from '../images/Rectangle 7.png';
import Ict from '../images/Rectangle 9.png';
import Kssb from '../images/Rectangle 10.png';
import Kudumbashri from '../images/Rectangle 11.png';
import Hoc from '../images/Rectangle 12.png';
import Zdiac from '../images/Rectangle 13.png';
import Liwa from '../images/Rectangle 14.png';
import Clinic7 from '../images/Rectangle 107.png';
import Technopark from '../images/Rectangle 122.png';
import Alarz from '../images/alarz.png';
import Dibba from '../images/dibba.png';
import Asha from '../images/asha.png';

function Mtrusted() {
  const trustedImages = [
    { src: StartupMission, alt: "StartupMission" },
    { src: Ehealth, alt: "Ehealth" },
    { src: Emc, alt: "Emc" },
    { src: Kase, alt: "Kase" },
    { src: Kdisc, alt: "Kdisc" },
    { src: Ict, alt: "Ict" },
    { src: Kssb, alt: "Kssb" },
    { src: Kudumbashri, alt: "Kudumbashri" },
    { src: Hoc, alt: "Hoc" },
    { src: Zdiac, alt: "Zdiac" },
    { src: Liwa, alt: "Liwa" },
    { src: Clinic7, alt: "Clinic7" },
    { src: Technopark, alt: "Technopark" },
    { src: Alarz, alt: "Alarz" },
    { src: Dibba, alt: "Dibba" },
    { src: Asha, alt: "Asha" }
  ];

  return (
    <div className="container">
      <div className="mtrusted-sec-body">
        {trustedImages.map((image, index) => (
          <div key={index} className={`trusted-img-wrapper ${image.alt === "Ict" ? "ict-image" : ""}`}>
            <img src={image.src} className="mtrusted-img" alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mtrusted;
