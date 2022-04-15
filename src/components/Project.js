import React from 'react';
import '../styles/Projects.css';
import { useSelector } from 'react-redux';
import livedemo from '../assets/live.png';
import github from '../assets/Vector.png';

export default function Project() {
  const projects = useSelector((state) => state.projectsReducer.projects);
  return (

    <section className="m-container" id="project">
      <header className="title-header">

        <h2 className="work-h">My Recent Works  </h2>
      </header>

      {
  projects.map((project) => (
    <section key={project?.title} className="d-flex flex-column flex-md-row mb-3 justify-content-center">
      <div className="img-wrapper px-2">

        <img
          src={project?.img}
          alt={project?.title}
          loading="lazy"
          className="img-fluid img-thumbnail"
        />
      </div>
      <div className="px-2 pt-3 pt-md-0">
        <section>
          <h2 className="main-p-title">
            {project?.title}
          </h2>
          <p className="main-p-description">
            {project?.description}
          </p>
          <div className="d-flex mb-3 flex-wrap">
            {project?.langs.map((lang) => (
              <button type="button" className="btn border mx-1 mt-2" key={lang}>
                {' '}
                {lang}
              </button>
            ))}
          </div>
          <div className="d-flex  flex-wrap">
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
