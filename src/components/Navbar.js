import React from 'react';
import * as Scroll from 'react-scroll';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import DrawerComponent from './Drawer';
import NavLinks from './NavLinks';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: 'flex',
  },
  drawer: {
    backgroundColor: '#3E3C3C !important',
    color: '#fff !important',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
  mobileDrawer: {
    width: '500px',
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const scroll = Scroll.animateScroll;
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar position="fixed" className={classes.drawer}>
      <CssBaseline />
      <Toolbar>
        <Typography
          onClick={scrollToTop}
          variant="h4"
          className={classes.logo}
        >
          Peter Ajayi

        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>

            <NavLinks />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
