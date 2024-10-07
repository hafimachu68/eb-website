import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import wfimg from '../images/Gdibba.jpg';
import './css/usecase.css';



function Usec3() {
  return (
    <div>  <div className="container">
    <div className=" p-5">
      <div className="">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='pare'>Sub Heading</p>
          </div>
          <h3 className="head" style={{ color: '#193054' }}>Custom CRM</h3>
          <div className="greenunderline"></div>
          <p className=" pt-4">
          A dynamic customer relationship management (CRM) application,  meticulously crafted using low-code technology. With its intuitive interface and robust features, it transformed the client’s approach to customer management, enabling them to build stronger relationships, streamline sales processes, and drive effective growth strategies.           
                </p>    
        </div>
      </div>
      <div className="pt-5">
        <div className="container pt-4 mt-3">
          <div id="video-container">
            <iframe id="video-player" width="100%" height="568px" src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </div>
          
                  <div className='pt-5'>
                    <h2 className='use1'>Challenges faced</h2>
                 <p className="   pt-2">
                 Hair O Craft, a company specializing in hair, skin, and dental solutions, operates more than 20 branches across India, accumulating substantial customer data requiring efficient storage and processing. The challenge arose from the complexity of managing extensive data acquisition and processing needs, which existing CRM software solutions could not fully customize to meet their specific requirements. This limitation prompted the search for a more tailored solution capable of handling their unique operational demands effectively.Thats when they approached us for a solution.                    </p>  
                 </div>
                 <div className='pt-5'>
                  <h2 className='use1'>How our Custom CRM helped them?</h2>
                 <p className=" pt-2">
                 ExpressBase’s CRM proved to be a game changer for their requirements. Our solution became indispensable for Hair O Craft, addressing their specific requirements with precision. It centralized the management of customer data across their extensive network of over 20 branches in India. The platform facilitated a comprehensive view of every customer interaction and inquiry, enabling seamless synchronization and tracking of customer data from various sources. This capability streamlined their processes for managing client relationships and storing essential details in a unified, accessible location. As a result, Hair O Craft experienced enhanced efficiency in data handling and improved customer service delivery throughout their operations.                 </p>  
                 </div>

                 <div className="pt-5">
                 <img src={wfimg}alt="Image" className="useimg" />

                 </div>
        </div>
  
    </div>  
    </div>
  </div>  
 
  </div>
  )
}

export default Usec3