/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NavLinks from './NavLinks';
import close from '../assets/close.png';

const useStyles = makeStyles({
  root: {
    padding: '0 !important',
  },
  drawer: {
    backgroundColor: '#3E3C3C !important',
    color: '#fff5e1 !important',
  },
  nav: {
    backgroundColor: '#3E3C3C !important',
    color: '#fff5e1 !important',
    height: '100%',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
  },
  icon: {
    color: '#fff !important',
    textDecoration: 'none',
  },
  DrawerWidth: {
    width: '300px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff5e1 !important',
    fontFamily: 'Inter !important',
    cursor: 'pointer',
    '&:hover': {
      color: '#ff6b00 !important',
    },
    '&.active': {
      color: '#ff6b00 !important',
    },
  },
});

function DrawerComponent({ scrollToTop }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={`${classes.DrawerWidth} ${classes.nav}`}>
          <div className="d-flex close justify-content-between my-3 mx-3">
            <span onClick={scrollToTop}>
              Peter Ajayi
            </span>
            <img alt="close" src={close} onClick={() => setOpenDrawer(false)} />
          </div>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLinks navLinks={classes.link} closeDrawer={() => setOpenDrawer(false)} />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
