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
        <Route path='/faq' element={<Faq/>} />
        <Route path='/platform' element={<Platform/>} />
        <Route path='/unsubscribe' element={<Unsub/>} />
        <Route path='/contactus' element={<Contact/>} />

        </Routes>
        
      </BrowserRouter> 
      </div> 
  );
}

export default App;
