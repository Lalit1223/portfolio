import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import myImage1 from '../images/photo-1531297484001-80022131f5a1.avif';

const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid p-0">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={myImage1} alt="Beautiful Scenery" />
            <Carousel.Caption>
              <h1>Hello, I'm <span className="nm">Lalit Gandhi</span></h1>
              <p className="h5 text-secondary">Web Developer</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={myImage1} alt="Beautiful Scenery" />
            <Carousel.Caption>
              <h1>Hello, I'm <span className="nm">LG</span></h1>
              <p className="h5 text-secondary">Web Developer</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
