import React from 'react'
import wfimg from '../images/Gdibba.jpg';
import './css/usecase.css';
import amt from '../images/vs.png';
import icu from '../images/icu.svg';
import ict from '../images/ict.svg';
import icd from '../images/icd.svg';

function Usec2() {
  return (
    <div>  
      <div className="container">
        <div className="p-5">
          <div className="">
            <div className="text-md-center mb-4 mb-md-0">
            <div className="logo-container">
            <img src={icu} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='pare'>Use Case 02</p>
          </div>
              <h3 className="head" style={{ color: '#193054' }}>Custom Van Sales App</h3>
              <div className="greenunderline"></div>
              <p className="para1 pt-4">
                A van sales management mobile app that can be easily customized, using low-code technology. Ideal for businesses in the distribution and retail sectors, it empowers sales teams to efficiently process orders, manage sales, and enhance customer satisfaction on the go. It works offline too!
              </p>
            </div>
          </div>
          <div className="pt-5">
            <div className="container pt-4 mt-3 ">
              <div className="text-center">
              <img src={amt}alt="Image" style={{ width: '80%' }} />

              </div>


              <div className='pt-5'style={{ marginTop:'7%' }}>
              <div className="logo-container">
               <img src={ict} alt="Logo" className="logo " style={{ width: '48px',height:'48px', }} /> {/* Insert your logo here */}
               <h2 className='use1 '>Challenges faced</h2>
               </div>                
                <p className="para1 pt-2">
                  Dibba Modern Bakery, a prominent bakery in Dubai, faced significant challenges in managing its extensive production and distribution network. With deliveries to numerous stores and hotels, keeping track of sales invoices and inventory for each customer had become a complex task. First, frequent connectivity issues in remote areas hindered sales representatives from accessing real-time data and updating sales information on the go. Second, the inefficiency of their existing van sales app impacted the productivity of the sales team, leading to customer dissatisfaction. Lastly, the app lacked integration with the company’s inventory management system, resulting in discrepancies between stock levels and orders. These collective challenges significantly hindered the effectiveness of Dibba Modern Bakery’s van sales operations, affecting both sales performance and customer service quality.
                </p>
              </div>

              <div className='pt-5'>
              <div className="logo-container">
               <img src={icd} alt="Logo" className="logo"  style={{ width: '48px',height:'48px', marginTop:'-2%' }}/> {/* Insert your logo here */}
               <h2 className='use1 '>How our Custom Van Sales app helped them?</h2>
               </div>                  <p className="pt-2">
                  To address the challenges faced by Dibba Modern Bakery, ExpressBase Systems provided a customized software solution. Here are the key components:
                </p>
                <ol className="">
                  <li>
                    <h6> Route-Based Solutions</h6>
                    <ul>
                      <li>We designed personalized routes for each salesperson.</li>
                      <li>These routes optimized delivery efficiency by considering factors such as proximity, traffic, and customer demand.</li>
                      <li>Sales representatives could access their assigned routes through the app, ensuring timely visits to customers.</li>
                    </ul>
                  </li>

                  <li>
                    <h6> Dynamic Pricing</h6>
                    <ul>
                      <li>Our software incorporated dynamic pricing based on customer profiles.</li>
                      <li>Stores purchasing large inventories received volume-based discounts.</li>
                      <li>Smaller stores buying fewer goods had different pricing structures.</li>
                      <li>This personalized approach enhanced customer satisfaction and encouraged repeat business.</li>
                    </ul>
                  </li>

                  <li>
                    <h6> Real-Time Data Sync</h6>
                    <ul>
                      <li>Connectivity issues were resolved by implementing real-time data synchronization.</li>
                      <li>Sales reps could update orders, inventory levels, and customer information seamlessly, even in remote areas.</li>
                    </ul>
                  </li>

                  <li>
                    <h6>Inventory Integration</h6>
                    <ul>
                      <li> The app integrated with Dibba Modern Bakery’s inventory management system.</li>
                      <li> This alignment ensured accurate stock levels, reducing discrepancies between orders and available goods.</li>
                    </ul> 
                  </li>
                </ol>

                <p className=" pt-2">
                  The result? Streamlined van sales operations, improved productivity, and enhanced customer service. Dibba Modern Bakery now efficiently manages deliveries, pricing, and inventory, thanks to our customized software solution.
                </p>
              </div>

              <div className="pt-5">
                <img src={wfimg} alt="Image" className="useimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usec2;
