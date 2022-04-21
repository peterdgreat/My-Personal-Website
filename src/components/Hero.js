import React from 'react';
import '../styles/Hero.css';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import HeadShot from '../assets/slack.jpg';

export default function Hero() {
  // const particlesInit = async (main) => {
  //   console.log(main);
  //   await loadFull(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <div className="home-bg w-100 ">
      {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} /> */}
      <div className=" w-100 h-100 d-flex align-items-start justify-content-end home ">
        <section className="d-flex flex-md-column s-container">
          <section className=" d-flex justify-content-center w-100 align-items-center">
            <div className="headshot-container">
              <img className="headshot img-fluid" src={HeadShot} alt="headshot" />
            </div>
          </section>
        </section>
        <section className="d-flex flex-column w-100 ">
          <div className="section m-container">
            <h2 className="name  ">
              Hey There.
              <br />
              I’m Peter
            </h2>
            <h3 className="title  ">I’am a Software Developer</h3>
            <div className="description  d-flex">
              <p>
                I am a full stack developer with a passion for building beautiful,
                intuitive, and responsive user interfaces.
                I can help you build a product, feature, or website from concept to launch.

              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
