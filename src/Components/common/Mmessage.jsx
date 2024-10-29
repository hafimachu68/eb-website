import React from 'react';
import './css/mob.css';
import abm1 from '../images/abm1.png';
import abm2 from '../images/abm2.png';
import abm3 from '../images/abm3.png';
import abm4 from '../images/abm4.png';
import abm5 from '../images/abm5.png';
import abm6 from '../images/abm6.png';

// import other images...

function Mmessage() {
  return (
    <div className="container mam">
      <div className="row flex-row">
        <div className="image-col">
          <img src={abm1} className="img-fluid" alt="Image 1" />
        </div>
        <div className="text-col">
        <p className='mab'> 
        Part of Leading LATAM’s startup accelarator’s Generation-21, got awarded $35k equity-free grant


        </p>
        </div>
      </div>

      <div className="row flex-row">
        <div className="image-col">
          <img src={abm2} className="img-fluid" alt="Image 2" />
        </div>
        <div className="text-col">
        <p className='mab'>
        Part of Leading MEA’s startup accelarator’s cycle-2

</p>

        </div>
      </div>
      <div className="row flex-row">
        <div className="image-col">
          <img src={abm3} className="img-fluid" alt="Image 2" />
        </div>
        <div className="text-col">
        <p className='mab'>
        Member of the Startup-Incubation program, awarded $17k scale-up grant

</p>

        </div>
      </div>
      <div className="row flex-row">
        <div className="image-col">
          <img src={abm4} className="img-fluid" alt="Image 2" />
        </div>
        <div className="text-col">
        <p className='mab'> 
        Part of NASSCOM’s 10k startups program, selected for Innotrek 2018.


        </p>

        </div>
      </div>
      <div className="row flex-row">
        <div className="image-col">
          <img src={abm5} className="img-fluid" alt="Image 2" />
        </div>
        <div className="text-col">
        <p className='mab'> 
        Winner of Hack for Health Hackathon by eHealth & KDISC


        </p>

        </div>
      </div>
      <div className="row flex-row">
        <div className="image-col">
          <img src={abm6} className="img-fluid" alt="Image 2" />
        </div>
        <div className="text-col">
        <p className='mab'> 
        Semi-finalist of the startup competition at GITEX 2021, Dubai

</p>

        </div>
      </div>
      

      {/* Add more rows as needed */}
    </div>
  );
}

export default Mmessage;
