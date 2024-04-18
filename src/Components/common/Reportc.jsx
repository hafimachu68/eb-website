import React from 'react';
import logo from '../images/Group.png'; // Import your logo file
import './css/report.css'; // Import your CSS file


function Reportc() {
  return (
    <div>
      <div className="container">
        <div className="p-5">
          <div className="text-md-center mb-4 mb-md-0">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
              <p className='are'>Sub Heading</p>
            </div>
            <h3 className="head">The ideal Reporting-as-a-Service to fill gaps in your ERP/Legacy Apps.</h3>
            <p className="para1 pt-4">
              Connect your database and turn your data into attractive tables, charts or portable reports using our futuristic Drag-n-Drop builders on the Cloud.
            </p>
          </div>
        </div>
      </div>
      {/* Row containing two cards */}
      <div className="container">
        <div className="row rvdo ">
          <div className="col-md-6">
            <div className="card"style={{ width: '23rem' }}>
              <div className="card-body">
                {/* Card content here */}
                 <iframe src="https://www.youtube.com/embed/b46KRZt_NIU?si=nbGtDABFvbqtWnS1" width="100%" height="300" title="iframe"></iframe>
                 <h5 className="card-title">Heading</h5>
                <p className="card-text">Design & Generate simple to complex PDF reports
that are portable, schedulable, embeddable & interlinkable..</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ width: '23rem' }}>
              <div className="card-body">
                {/* Card content here */}
                <iframe src="https://www.youtube.com/embed/H-58OZREz-g?si=lMo3lBTCatytfuvq"  width="100%" height="300" title="iframe"></iframe>
                <h5 className="card-title">Heading</h5>
                <p className="card-text">Fed up switching between too many browser tabs? Not Anymore. Our one of it's kind drill-view is the best solution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container rplay">

        </div>
      </div>
    </div>
  );
}

export default Reportc;
