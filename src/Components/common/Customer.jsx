import React from 'react';
import './css/home.css';
import group141 from '../images/rak.png';
import group142 from '../images/faz.png';
import group143 from '../images/shy.png';

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
