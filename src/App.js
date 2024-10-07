import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Pages/About';
import Report from './Pages/Report';
import Documents from './Pages/Documents';
import Api from './Pages/Api';
import Mobile from './Pages/Mobile';
import Faq from './Pages/Faq';
import Platform from './Pages/Platform';
import Unsub from './Pages/Unsub';
import Contact from './Pages/Contact';
import Webform from './Pages/webform';
import Cooki from './Pages/Cooki';
import Chatbot from './Pages/chatbot';
import Use1 from './Pages/Usecase1';
import Use2 from './Pages/Usecase2.jsx';
import Use3 from './Pages/Usecase3.jsx';
import Use4 from './Pages/Usecase4.jsx';
import Privacy from './Pages/Privacy.jsx';
import Terms from './Pages/Termsandcondition.jsx';

function App() {
  return (
    
      <div>
       <Cooki/>
       <BrowserRouter>

      <Routes>
       

       
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/webform' element={<Webform/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/documents' element={<Documents/>} />
        <Route path='/api' element={<Api/>} />
        <Route path='/mobileapp' element={<Mobile/>} />
        <Route path='/chatbot' element={<Chatbot/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/Usecase1' element={<Use1/>} />
        <Route path='/Usecase2' element={<Use2/>} />
        <Route path='/Usecase3' element={<Use3/>} />
        <Route path='/Usecase4' element={<Use4/>} />
        <Route path='/platform' element={<Platform/>} />
        <Route path='/unsubscribe' element={<Unsub/>} />
        <Route path='/privacyandpolicy' element={<Privacy/>} />
        <Route path='/termsandcodition' element={<Terms/>} />

        <Route path='/contactus' element={<Contact/>} />

        </Routes>
        
      </BrowserRouter> 
      </div> 
  );
}

export default App;
