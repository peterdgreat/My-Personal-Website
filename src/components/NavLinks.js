/* eslint-disable react/prop-types */
import React from 'react';
import * as Scroll from 'react-scroll';

const Links = Scroll.Link;

export default function NavLinks({ closeDrawer }) {
  const links = [
    {
      id: 1,
      path: 'project',
      text: 'My Projects',
    },
    {
      id: 2,
      path: 'about',
      text: 'About Me',
    },
    {
      id: 3,

      path: 'contact',
      text: 'Contact',
    },
  ];
  return (

    <>
      {links.map((link) => (
        <Links
          key={link.id}
          activeClass="active"
          to={link.path}
          spy
          smooth
          duration={500}
          className="nav-link"
          onClick={closeDrawer}
        >
          {link.text}
        </Links>

      ))}
    </>
  );
}
