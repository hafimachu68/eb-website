import React from 'react'
import './css/mob.css';


function Bot() {
  return (
    <div> <div style={{ marginBottom: '10em',marginTop: '5em' }} className="container-fluid mbcc">
    <div style={{ marginTop: '5em' }}></div>
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-12 col-md-4 order-1" style={{ marginLeft: '-1rem' }}>
        <div className="card mbc mglass-effect">
          <p>
          For seamless integration of your applications and EXPRESSbots, you can connect your existing database while maintaining full control over data access permissions. If you don’t have a database, we will provision a dedicated one within our secure infrastructure, tailored to your needs.          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 order-2">
        <div className="card mbc mglass-effect">
          <p>
          Users assigned to different roles are provided with entirely distinct user experiences, including anonymous users and potential customers. There’s no need for users to log in—bots leverage Facebook for seamless identification and authentication.          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 order-3" style={{ marginRight: '-1rem' }}>
        <div className="card mbc mglass-effect">
          <p>
          "Rich UI controls enable exceptional user experiences. You can incorporate elements such as tables, charts, image/file uploads, date-time pickers, card menus, Google Maps, and even shopping carts into bot interactions, enhancing functionality and engagement.          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Bot