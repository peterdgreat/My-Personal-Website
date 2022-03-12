import React from 'react';
import '../styles/Hero.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className="home-bg w-100 ">
      <div className=" w-100 h-100 d-flex align-items-start justify-content-end home  border border-primary ">

        <section className="d-flex flex-md-column">
          {socialMedia.map((link) => (
            <ListItem button key={link.id}>
              <a href={link.url}>
                <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
              </a>
            </ListItem>
          ))}
        </section>
        <section className="d-flex flex-column w-100 ">
          <div className="section">
            <h2 className="name text-center  ">
              Hey There.
              <br />
              I’m Peter
            </h2>
            <h3 className="title text-center ">I’am a Software Developer</h3>
            <div className="description  d-flex">
              <p>
                I can help you build a product, feature, or website.
                Look through some of my work and experience!
                If you like what you see and have a project you need coded,
                don’t hesitate to contact me.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
