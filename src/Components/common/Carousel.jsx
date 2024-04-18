import React, { useEffect } from 'react';
import './css/carousel.css'
import bimage1 from '../images/bxpg.png';
import cric from '../images/cric.png';




function Carouse() {
  useEffect(() => {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryItems = document.querySelectorAll('.gallery-item');

    class Carousel {
      constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.currentIndex = 0;
      }
      
      updateGallery() {
        this.carouselArray.forEach(el => {
          el.classList.remove('gallery-item-1');
          el.classList.remove('gallery-item-2');
          el.classList.remove('gallery-item-3');
          el.classList.remove('gallery-item-4');
          el.classList.remove('gallery-item-5');
        });
        const startIndex = this.currentIndex;
        for (let i = 0; i < 5; i++) {
          const index = (startIndex + i) % this.carouselArray.length;
          this.carouselArray[index].classList.add(`gallery-item-${i + 1}`);
        }
      }

      previous() {
        this.currentIndex = (this.currentIndex - 1 + this.carouselArray.length) % this.carouselArray.length;
        this.updateGallery();
      }

      next() {
        this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
        this.updateGallery();
      }

      useControls() {
        const previousButton = document.querySelector('.gallery-controls .gallery-controls-previous');
        const nextButton = document.querySelector('.gallery-controls .gallery-controls-next');

        previousButton.addEventListener('click', () => {
          this.previous();
        });

        nextButton.addEventListener('click', () => {
          this.next();
        });
      }
    }

    const exampleCarousel = new Carousel(galleryContainer, galleryItems);
    exampleCarousel.useControls();
  }, []);

  return (
    <div className='body'>
      <div className="gallery">
      <div className="gallery-controls">
          <button className="btn  text-light gallery-controls-previous" type="submit"></button>
          <button className="btn  text-light gallery-controls-next" type="submit"></button>
        </div>
        <div className="gallery-container">
        <div className='gallery-item gallery-item-1'>
           <div className='right-box'>
              <div className="bxcontent">
              <div className="sub-heading py-2">
                  <div className="logo-container">
            <img src={cric} alt="Logo" className="flogo" />
            <p className='feic'>Use Cases </p>
          </div>
          </div>                <div><h1 className="main-heading ">Quotation Management</h1></div>
                <div className="paragraph">A bespoke application developed using low-code technology that redefines the process of creating, managing, and tracking quotations.  It empowers sales teams to streamline quotation workflows, improve accuracy, cuts down time & effort substantially and enhance customer satisfaction with ease.</div>
                <div className="bxbtn-img-container">
                  <div className='bxbtn'><button className='bbtn'>Explore</button></div>
                  <div className='bximg'><img src={bimage1} alt="Your Image" /></div>
                </div>
                </div>
                
              </div>
           </div>         
          {/* <img className='gallery-item gallery-item-1' src={slide_image_1} alt="" data-index='1' /> */}
          <div className='gallery-item gallery-item-2'>
           <div className='right-box'>
              <div className="bxcontent">
              <div className="sub-heading py-2">
                  <div className="logo-container">
            <img src={cric} alt="Logo" className="flogo" />
            <p className='feic'>Use Cases </p>
          </div>
          </div>
          <div><h1 className="main-heading ">Custom Van Sales App</h1></div>
                <div className="paragraph">A van sales management mobile app that can be easily customized, using low-code technology. Ideal for businesses in the distribution and retail sectors, it empowers sales teams to efficiently process orders, manage sales,  and enhance customer satisfaction on the go. It works offline too!  </div>
                <div className="bxbtn-img-container">
                  <div className='bxbtn'><button className='bbtn'>Explore</button></div>
                  <div className='bximg'><img src={bimage1} alt="Your Image" /></div>
                </div>
                </div>
                
              </div>
           </div>          
           <div className='gallery-item gallery-item-3'>
           <div className='right-box'>
              <div className="bxcontent">
                <div className="sub-heading py-2">
                  <div className="logo-container">
            <img src={cric} alt="Logo" className="flogo" />
            <p className='feic'>Use Cases </p>
          </div>
          </div>
                <div><h1 className="main-heading ">Attendance Managements</h1></div>
                <div className="paragraph">A cutting-edge attendance management solution designed with the efficiency and simplicity in mind. Whether you're a small business, educational institution, or large corporation, this solution empowers you to effortlessly monitor attendance, streamline administrative tasks, and enhance productivity.            </div>
                <div className="bxbtn-img-container">
                  <div className='bxbtn'><button className='bbtn'>Explore</button></div>
                  <div className='bximg'><img src={bimage1} alt="Your Image" /></div>
                </div>
                </div>
                
              </div>
           </div>          
           <div className='gallery-item gallery-item-4'>
           <div className='right-box'>
              <div className="bxcontent">
              <div className="sub-heading py-2">
                  <div className="logo-container">
            <img src={cric} alt="Logo" className="flogo" />
            <p className='feic'>Use Cases </p>
          </div>
          </div>                <div><h1 className="main-heading ">Custom CRM</h1></div>
                <div className="paragraph">A dynamic customer relationship management (CRM) application,  meticulously crafted using low-code technology. With its intuitive interface and robust features, it transformed the client’s approach to customer management, enabling them to build stronger relationships, streamline sales processes, and drive effective growth strategies. </div>
                <div className="bxbtn-img-container">
                  <div className='bxbtn'><button className='bbtn'>Explore</button></div>
                  <div className='bximg'><img src={bimage1} alt="Your Image" /></div>
                </div>
                </div>
                
              </div>
           </div>          
           <div className='gallery-item gallery-item-5'>
           <div className='right-box'>
              <div className="bxcontent">
              <div className="sub-heading py-2">
                  <div className="logo-container">
            <img src={cric} alt="Logo" className="flogo" />
            <p className='feic'>Use Cases </p>
          </div>
          </div>                <div><h1 className="main-heading ">mainHeadings</h1></div>
                <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </div>
                <div className="bxbtn-img-container">
                  <div className='bxbtn'><button className='bbtn'>Explore</button></div>
                  <div className='bximg'><img src={bimage1} alt="Your Image" /></div>
                </div>
                </div>
                
              </div>
           </div>      
           </div>
        <div  style={{ padding: '10px', marginTop:'170px' }}>
         
        </div>
      </div>
    </div>
  );
}

export default Carouse;
