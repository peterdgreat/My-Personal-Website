/* eslint-disable react/require-default-props */
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import peter from '../assets/slack.jpg';
import '../styles/Drawer.css';
import Project from './Project';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import medium from '../assets/medium.svg';

const drawerWidth = 240;
const useStyles = makeStyles({
  root: {
    padding: '0 !important',
  },
  drawer: {
    backgroundColor: '#3E3C3C !important',
    color: '#fff !important',
  },
  nav: {
    backgroundColor: '#3E3C3C !important',
    color: '#fff !important',
    height: '100%',
  },
  icon: {
    color: '#fff !important',
    textDecoration: 'none',
  },
  overAllHeight: {
    height: '100vh',
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
  },
});
function ResponsiveDrawer(props) {
  const location = useLocation();
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      id: 2,
      path: '/project',
      text: 'My Projects',
      icon: <LaptopWindowsIcon />,
    },
    {
      id: 3,
      path: '/about',
      text: 'About Me',
      icon: <Avatar alt="Peter Ajayi" src={peter} />,
    },
    {
      id: 4,

      path: '/contact',
      text: 'Contact',
      icon: <ContactPageIcon />,
    },
  ];
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
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classProj = location.pathname === '/project' || location.pathname === '/about'
    ? classes.overAllHeight
    : '';

  const drawer = (
    <div className={classes.nav}>
      <Toolbar />
      <Divider />
      <List>
        {' '}
        {links.map((link) => (
          <ListItem button key={link.id}>
            <NavLink
              onClick={handleDrawerToggle}
              className={`d-flex ${classes.icon}`}
              to={link.path}
            >
              <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      {socialMedia.map((link) => (
        <ListItem button key={link.id}>
          <a href={link.url} className={`d-flex ${classes.icon}`}>
            <ListItemIcon className={classes.icon}>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </a>
        </ListItem>
      ))}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className={classProj}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className={classes.drawer}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Peter Ajayi
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: drawerWidth }}
        className={classes.root}
      >
        <Toolbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
