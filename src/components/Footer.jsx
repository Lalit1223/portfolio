import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <div className="footer pt-5 text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-text">
              <h4>About Me</h4>
              <p>
                I'm a passionate web developer with a love for creating beautiful and functional websites. I specialize in front-end development and enjoy tackling complex problems with innovative solutions.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className='contact-me'>
              <h4>Contact Me</h4>
              <form action="#">
                <div className="form-group mb-3">
                  <input type="text" name="full_name" id="full_name" placeholder='Enter Full Name' className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <input type="email" name='email' id='email' placeholder='Enter your email' className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <textarea name="message" id="message" rows="4" placeholder='Enter your message' className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="social-icons d-flex justify-content-center align-items-center pt-5">
          <i className="fab fa-instagram me-3"></i>
          <i className="fab fa-twitter me-3"></i>
          <i className="fab fa-linkedin me-3"></i>
          <i className="fab fa-github"></i>
        </div>
        <div className="copy-right text-center pt-3">
          <p>All Rights Reserved &copy; Lalit Gandhi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
