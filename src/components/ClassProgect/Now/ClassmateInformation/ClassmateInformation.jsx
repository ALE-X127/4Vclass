import { Box, Button, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import './ClassmateInformation.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 3,
  textAlign: 'center',
};

const ClassmateInformation = ({ name, grade, img, text }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("Modal open:", true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
    console.log("Modal closed:", false);
  };

  return (
    <div className="info" onClick={handleOpen} >
      <img src={img} width="100" alt={name} style={{ borderRadius: '5px' }} />
      <p className="name">{name}</p>
      <p className="name">{grade}. клас</p>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={modalStyle}>
          <img
            src={img}
            width="100"
            alt={name}
            style={{ borderRadius: '20px', marginBottom: '1rem' }}
          />
          <Typography id="child-modal-title" variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography id="child-modal-description" variant="body2" sx={{ mb: 2 }}>
            {text}
          </Typography>
          <Button variant="contained" onClick={(e) => handleClose(e)}>
           <CloseIcon/>
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ClassmateInformation;