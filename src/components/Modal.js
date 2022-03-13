/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import PropTypes from 'prop-types';
import github from '../assets/Vector.png';
import livedemo from '../assets/live.png';
import '../styles/Modal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const {
    open,
    handleClose,
    modal,
    img,
    imgClass,
    firstLetter,
    title,
    description,
    langs,
    live,
    source,
  } = props;
  const btnOne = langs?.length > 0 ? langs[0] : '';
  const btnTwo = langs?.length > 1 ? langs[1] : '';
  const btnThree = langs?.length > 2 ? langs[2] : '';

  return (
    <Modal
      className={modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card sx={{ maxWidth: 600 }}>
          <div className="d-flex justify-content-end pe-3 pt-2">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            />
          </div>

          <CardHeader
            avatar={(
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {firstLetter}
              </Avatar>
            )}
            title={title}
          />
          <div className="d-flex justify-content-center">
            <div className="d-flex mb-3 ">
              <button type="button" className="btn border mx-2">
                {' '}
                {btnOne}
              </button>
              <button type="button" className="btn border mx-2">
                {' '}
                {btnTwo}
              </button>
              <button type="button" className="btn border mx-2">
                {' '}
                {btnThree}
              </button>
            </div>
          </div>
          <CardMedia
            component="img"
            height="194"
            image={img}
            alt={title}
            className={imgClass}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>

            <div>
              <div className="d-flex my-2">

                <a href={live} target="_blank" rel="noreferrer" className="mx-2 sp-btn">
                  <span className="me-2">See Live</span>
                  <img src={livedemo} alt="live" />
                </a>

                <a className="mx-2 sp-btn" href={source} target="_blank" rel="noreferrer">
                  <span className="me-2">See Source</span>
                  <img src={github} alt="github" />
                </a>

              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}
// BasicModal.propTypes = {
//   open: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired,
//   modal: PropTypes.string.isRequired,
//   // img: PropTypes.string.isRequired,
//   imgClass: PropTypes.string.isRequired,
//   // firstLetter: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   // langs: PropTypes.arrayOf(PropTypes.string).isRequired,
//   live: PropTypes.string.isRequired,
//   source: PropTypes.string.isRequired,
// };
