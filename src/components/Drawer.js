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
  DrawerWidth: {
    width: '200px',
  },
});

// const useStyles = makeStyles(() => ({
//   link: {
//     textDecoration: 'none',
//     color: 'blue',
//     fontSize: '20px',
//   },
//   icon: {
//     color: 'white',
//   },
// }));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={`${classes.DrawerWidth} ${classes.nav}`}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLinks onClick={() => setOpenDrawer(false)} />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
