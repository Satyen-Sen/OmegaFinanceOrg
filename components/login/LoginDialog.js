import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogContent, IconButton, } from '@mui/material'; 
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import DialogContents from './DialogContents';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
  }, 
}));

const BootstrapDialogContent = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogContent {...other} >
      {children}
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogContent>
  );
};

BootstrapDialogContent.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'capitalize', width:170, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
        Login/Register
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} PaperProps={{style:{borderRadius:12,}}}>
        <BootstrapDialogContent id="customized-dialog-title" onClose={handleClose}>
            <DialogContents/>
        </BootstrapDialogContent> 
      </BootstrapDialog>
    </div>
  );
}
