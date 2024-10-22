import React from 'react';
import mobpg from '../images/mobpg.png';

function Mobcard() {
  return (
    <div>
      <div style={{ marginBottom: '8em',marginTop: '5em' }} className="container-fluid mbcc">
        {/* <div style={{ marginTop: '5em' }}></div> */}
        <div className=" row d-flex justify-content-between">
          <div className="col-12 col-md-4" style={{ marginLeft: '-1rem' }}>
            <div className="card mbc mglass-effect">
              <p>
                Continue using the app seamlessly even without an internet connection. All data entered offline is stored locally and automatically synced once the network is restored, ensuring uninterrupted productivity and data integrity.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card mbc mglass-effect">
              <p>
                Upon detecting a network connection, the app seamlessly syncs offline data to the server. This secure process ensures your information is always current, without any need for manual intervention.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4" style={{ marginRight: '-1rem' }}>
            <div className="card mbc mglass-effect">
              <p>
                Our app features an intuitive and easy-to-navigate interface, designed to enhance user experience. With clear menus and straightforward functionality, you can accomplish tasks efficiently, whether online or offline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobcard;
