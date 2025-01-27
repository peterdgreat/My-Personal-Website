import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
