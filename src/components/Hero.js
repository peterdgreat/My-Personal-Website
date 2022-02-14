import React from 'react';
import '../styles/Hero.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import peter from '../assets/slack.jpg';
import medium from '../assets/medium.svg';

const useStyles = makeStyles({
  icon: {
    color: '#fff !important',
    textDecoration: 'none',
  },
});

export default function Hero() {
  const classes = useStyles();
  const socialMedia = [
    {
      id: 1,
      url: 'https://github.com/peterdgreat',
      text: 'Github',
      icon: <GitHubIcon />,
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/in/ajayipeter/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
    {
      id: 3,
      url: 'https://twitter.com/dev_Peter_O',
      text: 'Twitter',
      icon: <TwitterIcon />,
    },
    {
      id: 4,
      url: 'https://medium.com/@peterdgreat',
      text: 'Medium',
      icon: <img className="icon mt-1" alt="medium" src={medium} />,
    },
  ];
  return (
    <div className="home-bg py-5 w-100 h-100 d-flex align-items-center">
      <section className="social">
        {socialMedia.map((link) => (
          <ListItem button key={link.id}>
            <a href={link.url} className="d-flex nav-link ">
              <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
            </a>
          </ListItem>
        ))}
      </section>
      <section className="d-flex flex-column align-items-start">
        <h1 className="name text-center mt-5">
          Hey There.
          <br />
          I’m Peter
        </h1>
        <h3 className="title text-center mt-3">I’am a Software Developer</h3>
        <div className="description  d-flex">
          <p className=" d-size ">
            I can help you build a product, feature, or website.
            Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hesitate to contact me.
          </p>
        </div>
      </section>
      <section>
        <img alt="Peter Ajayi" src={peter} className="avatar" />
      </section>
    </div>
  );
}
