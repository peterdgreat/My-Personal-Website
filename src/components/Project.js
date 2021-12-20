import React from 'react'
import { useDispatch } from 'react-redux';
import '../styles/Projects.css'
import { useSelector } from 'react-redux';
import {projectModalOpen} from '../redux/projects/projects'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
import ModalC from './Modal';
import { style } from '@mui/system';



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
 
  },
     modal: {
      background: '#3E3C3C !important',
      opacity: "0.5 !important",
    },
    fallback: {
        backgroundColor: '#fff !important',
        color: 'white',
        border: '3px solid #f1f1f1',
        maxWidth: '70%',
    },
    root : {
      backgroundColor: "#fff !important",
    }
});
export default function Project() {
        const projects = useSelector(state => state.projectsReducer.projects)
  const [open, setOpen] = React.useState(false);
  const initialState = []
  const [filtered, setFiltered] = React.useState(initialState);
  const handleOpen = (e) =>{
    // dispatch(projectModalOpen(e.currentTarget.id));
    // console.log(e.target.key);
    setFiltered(projects.filter(project => project.id === e.currentTarget.id));
    console.log(filtered);
  
    console.log(e.currentTarget.id);
    console.log(filtered)
     setOpen(true)
  };
  const handleClose = () => setOpen(false);
   const classes = useStyles();
 
        const matches = useMediaQuery('(min-width:1400px)');
    console.log(projects)
  return (
      <div className="d-flex justify-content-center">
    <ImageList  sx={{ width: 1200}} className={classes.spacing}>
 
      {matches && (<ImageListItem    className= {classes.imgWrapper} key="Subheader" cols={3}>
  <ListSubheader component="div" className="text-center">My Projects</ListSubheader>
      </ImageListItem>)
          }
               
      
      {projects.map((project) => (
        <>
        <ImageListItem key={project.id} className= {classes.imgWrapper}>
           
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
open={open} handleClose={handleClose} fallback={classes.fallback} modal={classes.modal}
img={filtered[0]?.img}
desc={filtered[0]?.description}
root={classes.root}/>
     </> ))}
    </ImageList>
 </div> );
}


