import React from 'react';
import DP from '../images/WhatsApp Image 2024-08-28 at 10.33.43 PM.jpeg';

const About = () => {
  return (
    <div className="about py-5 position-relative" id="about">
      <h2 className="main-title py-5">About</h2>
      <div className="container p-md-4">
        <div className="card mb-3">
          <div className="row g-2">
            <div className="col-md-6 p-md-4 pic">
              <img src={DP} className="img-fluid rounded border border-white " alt="Profile" />
            </div>
            <div className="col-md-6 align-self-center">
              <div className="card-body p-md-4 text-center text-md-start">
                <h3 className="card-title">Lalit Gandhi</h3>
                <h6>Web Developer</h6>
                <p className="card-text">
                 Dynamic software developer with hands-on experience in real-time projects, seeking to
leverage expertise in web development and a passion for continuous learning in a
challenging role that contributes to the success of an innovative team...
                </p>
                <a href="/cv.pdf" download="Lalit_Gandhi_CV" className="btn me-4">Download CV</a>
                <a href="#" className="btn hm">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
