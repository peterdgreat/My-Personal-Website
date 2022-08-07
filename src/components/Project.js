import React from 'react';
import '../styles/Projects.css';
import { useSelector } from 'react-redux';
import livedemo from '../assets/live.png';
import github from '../assets/Vector.png';

export default function Project() {
  const projects = useSelector((state) => state.projectsReducer.projects);
  return (

    <section className="container" id="project">
      <header className="title-header">

        <h2 data-aos="fade-left" className="work-h">My Recent Works  </h2>
      </header>

      {
  projects.map((project) => (
    <section data-aos="fade-right" key={project?.title} className="row">
      <div className="img-wrapper px-2 col-md-6 col-12">

        <img
          src={project?.img}
          alt={project?.title}
          loading="lazy"
          className="img-fluid img-thumbnail"
        />
      </div>
      <div className="px-2 pt-3 pt-md-0 col-md-6 col-12">
        <section>
          <h2 data-aos="fade-left" className="main-p-title">
            {project?.title}
          </h2>
          <p data-aos="fade-left" className="main-p-description">
            {project?.description}
          </p>
          <div className="d-flex mb-3 flex-wrap">
            {project?.langs.map((lang) => (
              <button data-aos="fade-right" type="button" className="btn border mx-1 mt-2" key={lang}>
                {' '}
                {lang}
              </button>
            ))}
          </div>
          <div data-aos="fade-left" className="d-flex  flex-wrap">
            <a href={project?.live} target="_blank" rel="noreferrer" className="mx-2  my-2 sp-btn">
              <span className="me-2">See Live</span>
              <img src={livedemo} alt="live" />
            </a>

            <a className="mx-2 sp-btn my-2" href={project?.source} target="_blank" rel="noreferrer">
              <span className="me-2">See Source</span>
              <img src={github} alt="github" />
            </a>

          </div>
        </section>
      </div>
    </section>
  ))

}
    </section>

  );
}
