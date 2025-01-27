import React from 'react';
import '../styles/Experience.css'; // Import the CSS file

export default function Experience() {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <h3>Aurapay</h3>
        <p>
          <strong>Lead Developer (Ruby on Rails and React)</strong>
          <br />
          | Remote |
          <br />
          Jan 2023 - Present
        </p>
        <ul>
          <li>
            Spearheaded the development lifecycle from ideation to deployment,
            ensuring timely delivery of features.
          </li>
          <li>Designed and implemented dynamic, responsive user interfaces using React.</li>
          <li>Partnered with designers to translate UI/UX designs into functional components.</li>
          <li>Conducted comprehensive code reviews and provided mentorship to junior developers.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Trades Trek</h3>
        <p>
          <strong>Front-end Developer (React)</strong>
          <br />
          | Remote |
          <br />
          Sept 2022 – Feb 2023
        </p>
        <ul>
          <li>Architected functional and design documents for a fintech web application.</li>
          <li>Built a blog platform to enhance product awareness and literacy, optimized for SEO.</li>
          <li>Collaborated with internal teams to maintain a cohesive voice across digital platforms.</li>
          <li>Delivered weekly content updates to improve engagement and conversion rates.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Spectrangle</h3>
        <p>
          <strong>Front-end Developer (Angular)</strong>
          <br />
          | Hybrid |
          <br />
          May 2022 – Nov 2022
        </p>
        <ul>
          <li>Developed highly scalable enterprise-level web applications.</li>
          <li>Created reusable components leveraging Angular best practices.</li>
          <li>Delivered design recommendations to improve application scalability and maintainability.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Tokunbo</h3>
        <p>
          <strong>Front-end Developer (React)</strong>
          <br />
          | Remote |
          <br />
          Jan 2022 – May 2022
        </p>
        <ul>
          <li>Developed reusable, testable components using React.</li>
          <li>Adhered to best practices in software development for clean and efficient code.</li>
          <li>Delivered projects on time while adhering to budget constraints.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Microverse</h3>
        <p>
          <strong>Mentor (Volunteer)</strong>
          <br />
          | Remote |
          <br />
          Sept 2021 – Oct 2021
        </p>
        <ul>
          <li>Guided junior developers on HTML, CSS, and JavaScript best practices.</li>
          <li>Conducted code reviews, provided constructive feedback, and proposed organizational improvements.</li>
          <li>Shared strategies for thriving in a remote work environment.</li>
        </ul>
      </div>
    </div>
  );
}
