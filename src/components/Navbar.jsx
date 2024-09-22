import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h1 className="logo">La<span>lit</span></h1>
        </a>
        <button
          id="btn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link position-relative p-lg-3 p-2" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative p-lg-3 p-2" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative p-lg-3 p-2" href="#projects">Projects</a>
            </li>
            
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
