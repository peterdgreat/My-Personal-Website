import React from 'react';
import '../styles/Hero.css';
import Particles from 'react-tsparticles';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { loadFull } from 'tsparticles';
import medium from '../assets/medium.svg';

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="home-bg w-100 ">
      <Particles
        id="tsparticles"
        init={particlesInit}
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
                Results-driven Full-Stack Web Developer with expertise in Ruby,
                JavaScript, and Docker. Passionate about building scalable applications and delivering clean,
                maintainable code.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="d-flex pb-5 justify-content-center ">
        <div className="px-2">
          <TwitterIcon className="social-icon" />
        </div>
        <div className="px-2" />
        <LinkedInIcon className="social-icon" />
        <div className="px-2" />
        <GitHubIcon className="social-icon" />
        <div className="px-4">
          <img className="icon social-icon mt-1" alt="medium" src={medium} />
        </div>
      </section>
    </div>
  );
}
