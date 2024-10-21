import React from "react";
import Slider from "react-slick";
import "./css/centerMode.css"; // Import the CSS file
import bimage1 from '../images/QM.png';
import bimage2 from '../images/CRM.png';
import bimage3 from '../images/VSA.png';
// import bimage4 from '../images/Docu.png';
import bimage5 from '../images/AM.png';


import cric from '../images/cric.png';

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div className="slider-container pt-5">
      <Slider {...settings}>
        <div className="cslide">
          <div className="slideinside">
          {/* <div className="row ">
          <div className="col cntric">
          <img src={cric} alt="Icon 1" />          
            </div>
            <div className="col">
            <p className="cntrp"> Use Cases</p>          
             </div>
           </div> */}
             <div className="clogo-container">
                <img src={cric} alt="Logo" className="clogo" /> {/* Insert your logo here */}
                <p className='cpare'>Use Cases</p>
              </div>
           <h1 className="cntrh">Attendance Management</h1>
          <p className="cntrpp">A cutting-edge attendance management solution designed with the efficiency and simplicity in mind. Whether you're a small business, educational institution, or large corporation, this solution empowers you to effortlessly monitor attendance, streamline administrative tasks, and enhance productivity.
          </p>
          <div className="row align-items-center">
          <div className="col cntrb">
              <button className="btn cntrbtn" >Explore</button>
            </div>
            <div className="col">
              <img  className="crmpg" src={bimage5} alt="Image 1" />
            </div>
          
          </div>
          </div>
        </div>
        <div className="cslide">
          <div className="slideinside">
          <div className="row ">
          <div className="col cntric">
          <img src={cric} alt="Icon 1" />          
            </div>
            <div className="col">
            <p className="cntrp"> Use Cases</p>          
             </div>
           </div>
           <h1 className="cntrh">Custom Van Sales App</h1>
          <p className="cntrpp">A van sales management mobile app that can be easily customized, using low-code technology. Ideal for businesses in the distribution and retail sectors, it empowers sales teams to efficiently process orders, manage sales,  and enhance customer satisfaction on the go. It works offline too! 
          </p>
          <div className="row align-items-center">
          <div className="col cntrb">
              <button className="btn cntrbtn" >Explore</button>
            </div>
            <div className="col">
              <img   className="crmpg" src={bimage3} alt="Image 1" />
            </div>
          
          </div>
          </div>
        </div>
        <div className="cslide">
          <div className="slideinside">
          <div className="row ">
          <div className="col cntric">
          <img src={cric} alt="Icon 1" />          
            </div>
            <div className="col">
            <p className="cntrp"> Use Cases</p>          
             </div>
           </div>
           <h1 className="cntrh">Quotation Management</h1>
          <p className="cntrpp">A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.  It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.
           </p>
          <div className="row align-items-center">
          <div className="col cntrb">
              <button className="btn cntrbtn" >Explore</button>
            </div>
            <div className="col">
              <img  className="crmpg" src={bimage1} alt="Image 1" />
            </div>
          
          </div>
          </div>
        </div>
        <div className="cslide">
          <div className="slideinside">
          <div className="row ">
          <div className="col cntric">
          <img src={cric} alt="Icon 1" />          
            </div>
            <div className="col">
            <p className="cntrp"> Use Cases</p>          
             </div>
           </div>
           <h1 className="cntrh">Custom CRM</h1>
          <p className="cntrpp">A dynamic customer relationship management (CRM) application,  meticulously crafted using low-code technology. With its intuitive interface and robust features, it transformed the client’s approach to customer management, enabling them to build stronger relationships, streamline sales processes, and drive effective growth strategies.  </p>
          <div className="row align-items-center">
          <div className="col cntrb">
              <button className="btn cntrbtn" >Explore</button>
            </div>
            <div className="col">
              <img className="crmpg"  src={bimage2} alt="Image 1" />
            </div>
          
          </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
