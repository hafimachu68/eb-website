import React from 'react';
import './css/mob.css';
import logo from '../images/Group.png'; // Import your logo file
import mobpg from '../images/chg.png';

function Chat() {
  return (
    <>
      <div className="container pt-5">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='pare'>Sub Heading</p>
          </div>
          <h3 className="head" style={{ color: '#193054' }}>Experience Seamless Interactions with Our Smart Bot</h3>
          <p className="para1 pt-4">
            Elevate customer interactions with our low-code chatbot tool. Deliver fast, automated responses to inquiries, streamline communication, and enhance the overall experience with intelligent and efficient chatbot integration.
          </p>
          <div className="">
            <div className="container pt-4 mt-3">
              <img style={{ width:'80%'}} src={mobpg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 pt-5">
            <div className='mchat-message'>
              <h5 className='mhead'>One bot, Multiple user experiences</h5>
              <p style={{ width: '150%', margin: '0 auto',  }}>
                Our internal mobile app is designed to provide seamless functionality even when offline, ensuring that your productivity is never hindered by network issues. When you are offline, you can continue to use all the features of the app, entering and accessing data as usual. Once a network connection is re-established, the app automatically syncs all the offline data, saving it securely without any loss. This robust offline capability ensures that your data remains intact and accessible, providing a smooth and reliable user experience under all circumstances.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container rc mt-5">
        <div className="row">
          <div className="col-md-6 p-3">
           
          </div>
          <div className="col-md-6">
            <div className="pt-5 me-4">
              <div className='rm mlchat-message'>
                <h5 className='mhead'>Build Bots that directly talk to your Database.</h5>
                <p style={{ width: '150%', margin: '0 auto',marginLeft:'-17rem' }}>
                Build Bots that connect directly to your database, eliminating the need for webhooks and API calls. With this direct integration, your bots can instantly access, update, and interact with data in real time, streamlining operations and reducing complexity. Say goodbye to the overhead of managing external APIs—let your bots handle everything with seamless, secure database connections.                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 pt-5">
            <div className='mchat-message'>
              <h5 className='mhead'>Know your Visitors/Users better.</h5>
              <p style={{ width: '150%', margin: '0 auto',  }}>
              Gain deeper insights into your visitors and users. Our bots utilize Facebook for automatic login, allowing you to understand user behavior and preferences without requiring manual sign-ins. This seamless authentication process helps create personalized experiences while providing you with valuable data to better engage and serve your audience.              </p>
            </div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Chat;
