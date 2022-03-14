/* eslint-disable react/prop-types */
import React from 'react';
import * as Scroll from 'react-scroll';
import {
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

const Links = Scroll.Link;
const Divider = () => (
  <div
    style={{
      height: '1px',
      backgroundColor: '#fff5e1',
      width: '100%',
    }}
  />
);
export default function NavLinks({ closeDrawer, navLinks }) {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (

    <>
      {links.map((link) => (
        <div key={link.id}>
          <Links
            activeClass="active"
            to={link.path}
            spy
            smooth
            duration={500}
            className={navLinks}
            onClick={closeDrawer}
          >
            {link.text}
          </Links>
          {isMobile ? <Divider /> : null}
        </div>
      ))}
    </>
  );
}
