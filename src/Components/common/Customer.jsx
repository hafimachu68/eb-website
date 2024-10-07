import React from 'react';
import './css/home.css';
import group141 from '../images/g23.png';
import group142 from '../images/g22.png';
import group143 from '../images/g21.png';

function Customer() {
  return (
    <div className="container">
      <div className='cus' style={{marginTop: '3em'}}></div>
      <div className="row justify-content-center">
        <div className=" cr col-12 col-md-4">
          <div className="card brd">
            <img src={group143} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className=" cr col-12 col-md-4">
          <div className="card brd">
            <img src={group141} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className=" cr col-12 col-md-4">
          <div className="card brd">
            <img src={group142} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
      <div className='cus' style={{marginTop: '5em'}}></div>

    </div>
  );
}

export default Customer;
