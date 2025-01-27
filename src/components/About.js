import React from 'react';
import '../styles/About.css';

export default function About() {
  const resume = 'https://docs.google.com/document/d/19SpLg9utM6swG8RyV8wtlHqN1rI7P8ORgePVqErs0CA/edit?usp=sharing';
  return (
    <div className="about" id="about">
      <section className="d-flex justify-content-center">
        <div data-aos="fade-left" className="sp-btn">
          <a href={resume} target="_blank" rel="noreferrer">
            Get My Resume
          </a>
        </div>
      </section>
      <section className="about-details">
        <ul className="technologies m-container p-container list-unstyled d-flex flex-column flex-md-row justify-content-between">
          <li>
            <h4 data-aos="fade-right">
              <span className="kite" />
              Language
              {' '}
            </h4>
            <ul data-aos="fade-left" className="list-unstyled">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Ruby</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </li>
          <li>
            <h4 data-aos="fade-right">
              <span className="sqr" />
              Frameworks
            </h4>
            <ul data-aos="fade-left" className="list-unstyled">
              <li>React</li>
              <li>Angular</li>
              <li>Materia Ui</li>
              <li>Angular Material</li>
              <li>Bootstrap</li>
              <li>RSPec</li>
              <li>Ruby on rails</li>
            </ul>
          </li>
          <li>
            <h4 data-aos="fade-right">
              <span className="circle" />
              Skills
              {' '}
            </h4>
            <ul data-aos="fade-left" className="list-unstyled">
              <li>Team Work</li>
              <li>Mentoring</li>
              <li>Pair Programming</li>
              <li>Github</li>
              <li>Terminal</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
