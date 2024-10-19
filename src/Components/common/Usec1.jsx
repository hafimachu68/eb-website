import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import wfimg from '../images/Gdibba.jpg';
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
                 The most pressing issue is the inaccuracy in time tracking, which leads to discrepancies in recorded working hours, causing problems with payroll and employee dissatisfaction. Additionally, the software lacks integration capabilities with other HR and payroll systems, resulting in redundant data entry and a higher risk of errors. This inefficiency increases the administrative burden on the HR team. Furthermore, the user interface is outdated and not user-friendly, making it difficult for employees and HR staff to navigate and use effectively.                 </p>  
                 </div>
                 <div className='pt-5'>
                 <div className="logo-container">
               <img src={icd} alt="Logo" className="logo"  style={{ width: '48px',height:'48px', marginTop:'-7%' }}/> {/* Insert your logo here */}
               <h2 className='use1 '>How our Attendance Management Software helped them?</h2>
               </div>  
                 <p className="para1 pt-2">
                 To address the challenges faced by XYZ, ExpressBase developed a custom attendance management software tailored to their specific needs. This solution offers comprehensive tracking of compensatory offs, overtime, and special overtime, ensuring accurate timekeeping and reporting. The system integrates seamlessly with a punching machine, automatically recording all punches and storing the data in a centralized database. This allows for real-time access to detailed attendance reports, streamlining payroll processes and enhancing overall operational efficiency. The user-friendly interface ensures ease of use for both employees and HR staff, reducing errors and improving user experience. With this customized solution, Hair O Craft can now manage attendance more effectively and accurately, fostering a more organized and productive work environment.                 </p>  
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