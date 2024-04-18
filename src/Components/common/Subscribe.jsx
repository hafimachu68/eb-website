import React from 'react'
import cloudy from '../images/cloudy.png'; // Import your logo file


function Subscribe() {
  return (
    <div>
        <div className="container text-center">
            <h1 className='py-3 head'>We’re sorry to see you leave  </h1>
            <p className='py-3'>You have been successfully unsubscribed from our mailing lists!</p>
            <p className=''>You can get our updates anytime by re-subscribing to our newsletter!</p>
            <img src={cloudy} className="cloudy-img py-5" alt="cloud" />
             </div>
             <div style={{ padding: '10px', marginTop:'170px' }}>

             </div>
    </div>
  )
}

export default Subscribe