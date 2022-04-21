import React from 'react';
import '../styles/Hero.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import HeadShot from '../assets/slack.jpg';

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="home-bg w-100 ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 0,
              },
              repulse: {
                distance: 500,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 3000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
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
