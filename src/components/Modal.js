import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../styles/Modal.css";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
  } = props;
  const btn_1 = langs?.length > 0 ? langs[0] : "";
  const btn_2 = langs?.length > 1 ? langs[1] : "";
  const btn_3 = langs?.length > 2 ? langs[2] : "";
  const btn_4 = langs?.length > 3 ? langs[3] : "";

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
            ></button>
          </div>

         

          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {firstLetter}
              </Avatar>
            }
            title={title}
          />
   <div className="d-flex justify-content-center">

            <div className= "d-flex mb-3 ">
              
                <button className="btn border btn-p" > {btn_1}</button>
                <button className="btn border btn-p" > {btn_2}</button>
                <button className="btn border btn-p" > {btn_3}</button>
                {btn_4 ? <button className="btn border btn-p" > {btn_4}</button> : null}
             
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
         
         
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}
