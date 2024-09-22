import React from 'react';
import portfolio from '../images/image.png';
// Import other images here
import project2 from '../images/Screenshot (46).png';
import project3 from '../images/Screenshot (33).png';
import project4 from '../images/Screenshot (34).png';
import project5 from '../images/Screenshot (39).png';
import project6 from '../images/image.png';

const projects = [
  {
    image: portfolio,
    title: "Portfolio",
    demoLink: "#",
    codeLink: "#"
  },
  {
    image: project2,
    title: "Project 2",
    demoLink: "#",
    codeLink: "#"
  },
  {
    image: project3,
    title: "Project 3",
    demoLink: "#",
    codeLink: "#"
  },
  {
    image: project4,
    title: "Project 4",
    demoLink: "#",
    codeLink: "#"
  },
  {
    image: project5,
    title: "Project 5",
    demoLink: "#",
    codeLink: "#"
  },
  {
    image: project6,
    title: "Project 6",
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects position-relative py-5" id="projects">
      <h2 className="main-title py-5">Projects</h2>
      <div className="container d-flex gap-5 justify-content-between align-items-center flex-wrap">
        {projects.map((project, index) => (
          <div className="card cd position-relative" key={index}>
            <div className="card-img">
              <img src={project.image} className="card-img-top" alt={project.title} />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title"><span>&lt; </span>{project.title}<span> /&gt;</span></h5>
              <div className="btns d-flex justify-content-center gap-3 mt-4">
                <button type="button" className="btn btn-lg py-2 px-5">
                  <a href={project.demoLink} style={{ textDecoration: 'none', color: 'white' }}>Demo</a>
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg py-2 px-5">
                  <a href={project.codeLink} style={{ textDecoration: 'none', color: 'inherit' }}>Code</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
