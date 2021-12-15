// /* eslint-disable react/button-has-type */
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';

// export default function NavBar() {

//   const links = [
//     {
//       id: 1,
//       path: '/',
//       text: 'Home',
//     },
//     {
//       id: 2,
//       path: '/about',
//       text: 'About',
//     },
//   ];
//   return (
//    <nav className="navbar navbar-expand-sm  bg">
//         <div className="container">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <GiHamburgerMenu />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav col-12  justify-content-end align-items-center">
//         {links.map((link) => (
//           <li key={link.id} className="nav-item bdr d-flex align-items-center px-3">
//             <NavLink className="nav-Link pt-1"activeClassName="active-link"  to={link.path}>{link.text}</NavLink>
//           </li>
//         ))}
//       </ul>
//       </div>
//       </div>
//     </nav>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 import { NavLink } from 'react-router-dom';
import { Routes,Route } from 'react-router';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Project from './Project';
import Home from './Home';
import Contact from './Contact';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
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
      path: '/contact',
      text: 'contact',
      icon: <ContactPageIcon />,
    }
  ];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
               <IconButton onClick={handleDrawerToggle}>
           Back
          </IconButton>
      <Divider />
      <List>        {links.map((link) => (
        <ListItem button key={link.id}>
     <NavLink className="d-flex"activeClassName="active-link"  to={link.path}>
          
          <ListItemIcon>
            {link.icon}
          </ListItemIcon>
          <ListItemText primary={link.text} />
     </NavLink>
     </ListItem>
 ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
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
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
                     <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
           <Route path={'/about'} element={<Contact />} />
        </Routes>
  
      </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
