import React from 'react'
import './css/git.css';
import background from '../images/webg.png'; // Import your image



function Wfctaheading() {
  return (
    <div className='wctbg'style={{backgroundImage: `url(${background})`}}>
        <div className=' ctc'>
        <h1 className= 'cth text-white py-3' style={{color: '#193054' }}>Get in touch for tailored solutions.</h1>
        <div className="row">
          <div className="col-md-8">
          <p className=' ctp text-white py-3'>Feel free to click  to get in touch with our friendly and knowledgeable team who are ready to assist you with any inquiries or support you may need. </p>

          </div>
          <div className="col-md-4">
          <button className='btn wtb  fw-bold'>Contact</button>

          </div>

        </div>
        
        </div>
    </div>
  )
}

export default Wfctaheading