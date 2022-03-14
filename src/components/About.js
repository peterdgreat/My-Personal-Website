import React from 'react';
import Resume from '../assets/Peter-Ajayi-Resume.pdf';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about" id="about">
      <header className="d-flex flex-column justify-content-start about-bg align-items-start">
        <section className="m-container">
          <h2 className="name">About me</h2>
          <p className="abt-size description">
            {' '}
            My biggest goal in life is to use software engineering to solve
            real-world problems, I am a full-stack development student currently
            enrolled in a remote software development school that uses pair
            programming and real-world projects to teach software development.
            I am constantly improving my skills on a daily basis. If
            you would like to get in contact about potential job opportunities, please
            reach out!
          </p>
          <div className="sp-btn">
            <a href={Resume} download>
              Get My Resume
            </a>
          </div>
        </section>

      </header>
      <div className="">
        <hr />
      </div>
      <section className="about-details">
        <ul className="technologies list-unstyled d-flex flex-column flex-md-row justify-content-around">
          <li>
            <h4>
              <span className="kite" />
              Language
              {' '}
            </h4>
            <ul className="list-unstyled">
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </li>
          <li>
            <h4>
              <span className="sqr" />
              Frameworks
            </h4>
            <ul className="list-unstyled">
              <li>React</li>
              <li>Materia Ui</li>
              <li>Bootstrap</li>
              <li>RSPec</li>
              <li>Ruby on rails</li>
            </ul>
          </li>
          <li>
            <h4>
              <span className="circle" />
              Skills
              {' '}
            </h4>
            <ul className="list-unstyled">
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
