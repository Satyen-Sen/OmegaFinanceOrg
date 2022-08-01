import * as React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormControlLabel, RadioGroup, Radio, TextField, Typography, Box, Input, Button, Dialog, DialogContent, IconButton, } from '@mui/material'; 
import { styled } from '@mui/material/styles';
import MuiPhoneNumber from "material-ui-phone-number";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';


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

export default function CreateAccount(props) {
  const {
    open,
    handleClose
  } = props;

  return (
    <div>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} PaperProps={{style:{borderRadius:12,}}}>
        <BootstrapDialogContent id="customized-dialog-title" onClose={handleClose}>
          <Box className="login-box" sx={{height:510, width:450,}}>

            <FormControl className="illustration-wrapper" initialValues={{remember: true,}}>
                <Typography variant="h5" sx={{m:2, mt:4}}>Select User Type</Typography>  
            </FormControl>
            
          </Box>
        </BootstrapDialogContent> 
      </BootstrapDialog>
    </div>
  );
}
 