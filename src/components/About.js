import React from 'react';
import '../styles/About.css';

export default function About() {
  const resume = 'https://docs.google.com/document/d/19SpLg9utM6swG8RyV8wtlHqN1rI7P8ORgePVqErs0CA/edit?usp=sharing';
  return (
    <div className="about" id="about">
      <header className="d-flex flex-column justify-content-start about-bg align-items-start">
        <section className="m-container p-container">
          <h2 className="name">About me</h2>
          <p className="abt-size description">
            {' '}
            My biggest goal in life is to use software engineering to solve
            real-world problems, I am a full-stack developer focused on being
            valuable on any team I am on.
            I am a graduate of Microverse, a remote software development school that uses pair
            programming and real-world projects to teach software development.
            I am presently working at a startup company as a front-end developer
            to build their products to launch.
            I am constantly improving my skills. If
            you would like to get in contact about potential job opportunities, please
            reach out!
          </p>
          <div className="sp-btn">
            <a href={resume} target="_blank" rel="noreferrer">
              Get My Resume
            </a>
          </div>
        </section>

      </header>
      <div className="line-margin">
        <hr />
      </div>
      <section className="about-details">
        <ul className="technologies m-container p-container list-unstyled d-flex flex-column flex-md-row justify-content-between">
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
