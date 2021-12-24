import React from 'react';
import '../styles/Projects.css';
import { useSelector } from 'react-redux';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import ModalC from './Modal';

const useStyles = makeStyles({
  spacing: {
    margin: '14px !important',
    gap: '14px',
  },
  seeProj: {
    backgroundColor: '#f55800 !important',
    minHeight: '30px !important',
    cursor: 'pointer',
    textAlign: 'center',
    '&:first-element-child': {
      padding: '0px !important',
    },
  },

  imgWrapper: {
    backgroundColor: '#3E3C3C !important',
  },
  img: {
    opacity: '0.5 !important',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      opacity: '1 !important',
    },
  },
  details: {
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      opacity: '0 !important',
    },
  },
  imgClass: {
    objectFit: 'contain !important',
  },
  modal: {
    background: 'transparent !important',
    opacity: '0.7 !important',
  },
  fallback: {
    backgroundColor: 'transparent !important',
    color: 'white',
    border: '3px solid #f1f1f1',
    maxWidth: '70%',
  },
  imgGrid: {
    gridTemplateColumns: 'repeat(3, 1fr) !important',
  },
  imgGridSm: {
    gridTemplateColumns: 'repeat(1, 1fr) !important',
  },
});
export default function Project() {
  const projects = useSelector((state) => state.projectsReducer.projects);
  const [open, setOpen] = React.useState(false);
  const initialState = [];
  const [filtered, setFiltered] = React.useState(initialState);
  const handleOpen = (e) => {
    setFiltered(
      projects.filter((project) => project.id === e.currentTarget.id),
    );

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  const matches = useMediaQuery('(min-width:900px)');
  const matchesTwo = useMediaQuery('(max-width:360px)');
  const mediaImg = matches ? classes.imgGrid : '';
  const mediaImgSm = matchesTwo ? classes.imgGridSm : '';

  return (
    <>
      <ListSubheader component="div" className="text-center">
        <h2>My Projects</h2>
      </ListSubheader>
      <div className="d-flex justify-content-center project">
        <ImageList
          sx={{ width: 1200 }}
          className={`${classes.spacing} ${mediaImg} ${mediaImgSm}`}
        >
          {projects.map((project) => (
            <div key={project.id}>
              <ImageListItem className={classes.imgWrapper}>
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className={classes.img}
                />
                <ImageListItemBar
                  className={classes.seeProj}
                  title={project.btn}
                  id={project.id}
                  onClick={handleOpen}
                />
              </ImageListItem>
              <ModalC
                img={filtered[0]?.img}
                open={open}
                handleClose={handleClose}
                modal={classes.modal}
                imgClass={classes.imgClass}
                firstLetter={filtered[0]?.title[0]}
                title={filtered[0]?.title}
                description={filtered[0]?.description}
                langs={filtered[0]?.langs}
                id={project.id}
                live={filtered[0]?.live}
                source={filtered[0]?.source}
              />
            </div>
          ))}
        </ImageList>
      </div>
    </>
  );
}
