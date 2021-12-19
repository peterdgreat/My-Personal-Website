import React from 'react'
import '../styles/Projects.css'
import { useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  spacing: {
    margin: "14px !important",
    gap: "14px",
  },
  seeProj : {
    backgroundColor: "#f55800 !important",
    minHeight:"37px !important",
    cursor: "pointer",
    textAlign: "center",
  },
  imgWrapper : {
    backgroundColor: "#3E3C3C !important",
  },
  img : {
    opacity : "0.1 !important",
    transition : "all 0.5s ease-in-out",
     "&:hover": {
      opacity: "1 !important",
    },
  },
  details : {
    position: "absolute",
     transition : "all 0.5s ease-in-out",
     "&:hover": {
      opacity: "0 !important",
    },
  }
});
export default function Project() {
   const classes = useStyles();
       const projects = useSelector(state => state.projectsReducer.projects)
        const matches = useMediaQuery('(min-width:1400px)');
    console.log(projects)
  return (
      <div className="d-flex justify-content-center">
    <ImageList  sx={{ width: 1200}} className={classes.spacing}>
 
      {matches && (<ImageListItem key="Subheader" cols={3}>
  <ListSubheader component="div" className="text-center">My Projects</ListSubheader>
      </ImageListItem>)
          }
               
      
      {projects.map((project) => (
        <ImageListItem key={project.id} className= {classes.imgWrapper}>
           
   <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className={classes.img}
          />
       
        {/* <div className={classes.details}>
         <h3> {project.title}</h3>
          <p>{project.details}</p>
        </div> */}
          <ImageListItemBar
          className={classes.seeProj}
            title={project.btn}
          />
        
        </ImageListItem>
      ))}
    </ImageList>
 </div> );
}


