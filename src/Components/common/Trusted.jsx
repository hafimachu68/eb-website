// Trusted.jsx

import React from 'react';
import './css/trusted.css';
import Start_up_Mission from '../images/Rectangle 3.png';
import kase from '../images/Rectangle 6.png';
import kdisc from '../images/Rectangle 7.png';
import kssb from '../images/Rectangle 10.png';
import kudumbashri from '../images/Rectangle 11.png';
import hoc from '../images/Rectangle 12.png';
import zdiac from '../images/Rectangle 13.png';
import liwa from '../images/Rectangle 14.png';
import clinic7 from '../images/Rectangle 107.png';
import alarz from '../images/alarz.png';
import dibba from '../images/dibba.png';
import asha from '../images/asha.png';
import at1 from '../images/liwalando.png';
import at2 from '../images/riono.png';
import at3 from '../images/rto.png';
import at4 from '../images/hitec.png';
import at5 from '../images/icon.png';
import at6 from '../images/w2s.png';
import at7 from '../images/fu.png';
import at8 from '../images/tadaang.png';


function Trusted() {
  return (
    <div className="container trcont">
      {/* First Row */}
      <div className="row"> 
        <div className="col-md-2 tbody ">
          <img src={Start_up_Mission} className="trusted-img " alt="Start_up_Mission" />
        </div>
        <div className="col-md-2 tbody">
          <img src={clinic7} className="trusted-img " alt="ehealth" />
        </div>
        <div className="col-md-2 tbody "> 
          <img src={hoc} className="trusted-img " alt="emc" />
        </div>
        <div className="col-md-2 tbody tbody">
          <img src={alarz} className="trusted-img " alt="kase" />
        </div>
        <div className="col-md-2 tbody ">
          <img src={kdisc} className="trusted-img" alt="kdisc" />
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="col-md-2 tbody ">
          <img src={at1} className="trusted-img " alt="ict" />
        </div>
        <div className="col-md-2 tbody ">
          <img src={dibba} className="trusted-img " alt="kssb" />
        </div>
        <div className="col-md-2 tbody ">
          <img src={asha} className="trusted-img " alt="kudumbashri" />
        </div>
        <div className="col-md-2 tbody ">
          <img src={at2} className="trusted-img " alt="hoc" />
        </div>
        <div className="col-md-2  tbody ">
          <img src={kssb} className="trusted-img " alt="zdiac" />
        </div>
      </div>

      {/* Third Row */}
      <div className="row">
        <div className="col-md-2 tbody  ">
          <img src={liwa} className="trusted-img " alt="liwa" />
        </div>
        <div className="col-md-2 tbody  ">
          <img src={at3} className="trusted-img" alt="clinic7" />
        </div>
        <div className="col-md-2 tbody  ">
          <img src={at4} className="trusted-img" alt="technopark" />
        </div>
        <div className="col-md-2  tbody ">
          <img src={kudumbashri} className="trusted-img " alt="alarz" />
        </div>
        <div className="col-md-2  tbody ">
          <img src={zdiac} className="trusted-img " alt="asha" />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="row">
        <div className="col-md-2 tbody  ">
          <img src={at5} className="trusted-img " alt="dibba" />
        </div>
        {/* Add empty columns if necessary to maintain alignment */}
        <div className="col-md-2  tbody">          <img src={kase} className="trusted-img " alt="dibba" /></div>
        <div className="col-md-2 tbody">          <img src={at6} className="trusted-img " alt="dibba" /></div>
        <div className="col-md-2 tbody">          <img src={at7} className="trusted-img"  alt="dibba" /></div>
        <div className="col-md-2 tbody">          <img src={at8} className="trusted-img " alt="dibba" /></div>
      </div>
    </div>
  );
}

export default Trusted;
