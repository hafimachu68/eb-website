import React from 'react';
import logo from '../images/tsk.svg'; 
import logo1 from '../images/pl1.png'; 
import logo2 from '../images/pl2.png'; 
import logo3 from '../images/pl3.png'; 
import logo4 from '../images/pl4.png'; 
import logo5 from '../images/pl5.png'; 
import logo6 from '../images/pl6.png'; 
import logo7 from '../images/pl8.png'; 
import logo8 from '../images/pl7.png'; 

import './css/platform.css'; 

function Platformsrc() {
  const cardData = [
    {
      logo: logo1,
      description: ".NET Core is a versatile, cross-platform framework for building modern, high-performance applications."},
    {
      logo: logo2,
      description: "ServiceStack is a powerful, open-source framework for building web services and APIs in .NET."
    },
    {
      logo: logo3,
      description: "Docker is an open platform for developers and sys admins to build, ship, and run distributed  applications."
    },
    {
      logo: logo4,
      description: "Kubernetes is an open-source container-orchestration system for automating deployment,  scaling and management of containerized applications."
    },
    {
      logo: logo5,
      description: "PostgreSQL is a powerful, open-source object-relational data base system with over 30 years of active development."
    },
    {
      logo: logo6,
      description: "MongoDB is a leading NoSQL database solution, offering flexibility and scalability for managing large volumes of data across distributed systems."
    },
    {
      logo: logo7,
      description: "Redis is an in-memory data store known for its speed and versatility, serving as a high-performance caching solution ."
    },
    {
      logo: logo8,
      description: "RabbitMQ is a robust messaging broker that facilitates communication between distributed systems,."
    }
  ];

  return (
    <div>
      <div className="text-center pt-5">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <p className="pare">TECH STACK</p>
        </div>
        <h3 className="phead">Open-source, Cloud-native Platform</h3>
        <p className="ppara1 pt-1">
          EXPRESSbase low-code platform is built using open-source technologies.
        </p>
      </div>

      <div className="container plcontainer">
        <div className="row prow">
          {cardData.map((card, index) => (
            <div className="col colp p-4" key={index}>
              <div className="card cards glass-effect">
                <img src={card.logo} alt={`Image ${index + 1}`} />
                <div className="card-description">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Platformsrc;
