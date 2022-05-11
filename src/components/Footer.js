import React from 'react';
import '../styles/Footer.css';
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
    minWidth: '0 !important',
  },
  item: {
    cursor: 'pointer',
  },
});

export default function Footer() {
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
    <div className="footer">
      <section className="socials">
        {socialMedia.map((link) => (

          <ListItem className={classes.item} button key={link.id}>
            <a href={link.url} target="_blank" rel="noreferrer">
              <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
            </a>
          </ListItem>

        ))}
      </section>
      <span>© 2022 Peter Ajayi.</span>
    </div>
  );
}
