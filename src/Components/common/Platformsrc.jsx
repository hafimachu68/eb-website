import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import logo1 from '../images/pl1.png'; // Import your logo file
import logo2 from '../images/pl2.png'; // Import your logo file
import logo3 from '../images/pl3.png'; // Import your logo file
import logo4 from '../images/pl4.png'; // Import your logo file
import logo5 from '../images/pl5.png'; // Import your logo file
import logo6 from '../images/pl6.png'; // Import your logo file
import logo7 from '../images/pl8.png'; // Import your logo file
import logo8 from '../images/pl7.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Platformsrc() {
  return (
    <div>
        <div className="text-center pt-5">
        <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
              <p className='pare'>TECH STACK</p>
            </div>
            <h3 className="phead">Open-source, Cloud-native Platform</h3>
            <p className="ppara1 pt-4">
           EXPRESSbase low-code platform is build using open-source technologies 
           </p>  
        </div>
        <div className="container plcontainer">
      <div className="row rows">
        <div className="col colp ">
          <div className="card cards">
            <img src={logo1} alt="Image 1" />
            <div className="card-description">
            .NET Core is a versatile, cross-platform framework for building modern, high-performance applications, enabling developers to create robust solutions that run seamlessly across various environments, from local machines to cloud servers.            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo2} alt="Image 2" />
            <div className="card-description">
            ServiceStack is a powerful, open-source framework for building web services and APIs in .NET, providing a comprehensive toolkit for rapidly developing and deploying scalable, maintainable services with ease.            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo3} alt="Image 2" />
            <div className="card-description">
            Docker is an open platform for developers and sys admins to build, ship, and run distributed  applications, whether on laptops, data center VMs, or the cloud. It provides a way to run  applications securely isolated in a container, packaged with all its dependencies and  libraries.            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo4} alt="Image 2" />
            <div className="card-description">
            Kubernetes is an open-source container-orchestration system for automating deployment,  scaling and management of containerized applications. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo5} alt="Image 2" />
            <div className="card-description">
            PostgreSQL is a powerful, open-source object-relational data base system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo6} alt="Image 2" />
            <div className="card-description">
            MongoDB is a leading NoSQL database solution, offering flexibility and scalability for managing large volumes of data across distributed systems, empowering developers to build agile and efficient applications.            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo7} alt="Image 2" />
            <div className="card-description">
            Redis is an in-memory data store known for its speed and versatility, serving as a high-performance caching solution and message broker, enabling applications to efficiently manage and process data in real-time.            </div>
          </div>
        </div>
        <div className="col colp">
          <div className="card cards">
            <img src={logo8} alt="Image 2" />
            <div className="card-description">
            RabbitMQ is a robust messaging broker that facilitates communication between distributed systems, providing reliable message queuing and delivery mechanisms to build resilient and scalable applications, ensuring seamless integration and communication between components.            </div>
          </div>
        </div>
       
       
      </div>
    </div>
    </div>
  )
}

export default Platformsrc