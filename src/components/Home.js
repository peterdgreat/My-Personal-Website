import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-bg mt-5 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      <section>
        <h1 className="name text-center mt-5">
          Hey There.
          <br />
          I’m Peter
        </h1>
        <h3 className="title text-center mt-3">I’am a Software Developer</h3>
        <div className="description  d-flex justify-content-center  ">
          <p className=" d-size ">
            I can help you build a product, feature, or website.
            Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hesitate to contact me.
          </p>
        </div>
      </section>
    </div>
  );
}
