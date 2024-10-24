import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import wfimg from '../images/ats1.png';
import amt from '../images/amt.png';
import icu from '../images/icu.svg';
import ict from '../images/ict.svg';
import icd from '../images/icd.svg';

import './css/usecase.css';



function Usec1() {
  return (
    <div>  <div className="container">
    <div className=" us1">
      <div className="">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={icu} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='pare'>Use Case 01</p>
          </div>
          <h3 className="head" style={{ color: '#193054' }}>Attendance Management</h3>
          <div className="greenunderline"></div>
          <p className="para1 pt-4">
          A cutting-edge attendance management solution designed with the efficiency and simplicity in mind. Whether you're a small business, educational institution, or large corporation, this solution empowers you to effortlessly monitor attendance, streamline administrative tasks, and enhance productivity.            </p>
        
        </div>
      </div>
        <div className="container-fluid  pt-4 ">
        <div className="">
                 <img src={amt}alt="Image" className="useimg" />

          <p className="para1 pt-5">
          Experience hassle-free attendance tracking and payment calculations with our innovative solution. Our software features an intuitive interface, powerful tools, and data-driven insights, making it easy to capture attendance, manage leaves, and receive real-time alerts. Whether you're an HR manager or an employee, you'll find our user-friendly design simple to navigate. Plus, our seamless integration capabilities provide a comprehensive view of all employee data. Ready to simplify your attendance management? Discover our software today! 📅🚀   
                 </p>  
                  <div className='pt-5'>
                  <div className="logo-container">
               <img src={ict} alt="Logo" className="logo " style={{ width: '48px',height:'48px', }} /> {/* Insert your logo here */}
               <h2 className='use1 '>Challenges faced</h2>
               </div>          
                 <p className="para1 pt-2">
                 Liwa Autogarages, with nearly six branches across Dubai, faced several challenges with their existing attendance management system. The main issue was the inaccurate tracking of employee working hours, including overtime and compensatory offs, which often led to payroll discrepancies. Additionally, the lack of integration between their current system and other HR processes made managing attendance across multiple branches cumbersome and inefficient. The outdated interface further complicated usage for both employees and HR staff, leading to frequent errors and frustration. These challenges negatively affected operational efficiency and employee satisfaction, making it difficult for Liwa Autogarages to manage attendance accurately across their branches.                 </p>  
                 </div>
                 <div className='pt-5'>
                 <div className="logo-container">
               <img src={icd} alt="Logo" className="logo"  style={{ width: '48px',height:'48px', marginTop:'-7%' }}/> {/* Insert your logo here */}
               <h2 className='use1 '>How our Attendance Management Software helped them?</h2>
               </div>  
                 <p className="para1 pt-2">
                 To address the challenges faced by Liwa Autogarages, ExpressBase developed a custom attendance management software specifically tailored to their multi-branch operations in Dubai. The solution accurately tracks employee working hours, including overtime, special overtime, and compensatory offs, ensuring precise payroll processing. Integrated with punching machines at each branch, the system automatically records attendance data and stores it in a centralized database, offering real-time access to detailed reports. A standout feature of the solution is its ability to manage mid-month employee transfers between branches. This ensures that punch-in and punch-out data for transferred employees are seamlessly updated and accessible across branches, without disrupting payroll or attendance tracking. The user-friendly interface improves ease of use for both employees and HR staff, reducing errors and enhancing efficiency. With this tailored software, Liwa Autogarages can now manage attendance with precision, streamline operations, and maintain control across their six branches.                  </p>  
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

export default Usec1