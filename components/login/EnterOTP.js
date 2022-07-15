import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, FormControl, Typography, Box, Grid, Button, Dialog, DialogContent, IconButton, } from '@mui/material'; 
import OTPInput from "otp-input-react";
import { styled } from '@mui/material/styles';
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

export default function EnterOTP() {

    const [OTP, setOTP] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


  return (
    <div>
        <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
            Send OTP 
        </Button>
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} PaperProps={{style:{borderRadius:12,}}}>
            <BootstrapDialogContent id="customized-dialog-title" onClose={handleClose}>
                <Box className="login-box" sx={{height:510, width:450,}}>
                    <FormControl initialValues={{remember: true,}} sx={{display:'flex', flexDirection:'coloumn', justifyContent:'center', alignItems:'center',}}>

                        <Typography variant="h5" sx={{m:4}}>Enter OTP</Typography> 

                        <Typography variant="h6" sx={{mb:4, color:'#707070', fontSize:16,}}>
                          Enter the 4-digit OTP sent to your registered mobile number/email. 
                        </Typography> 

                        <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" autoFocus inputStyles={{borderRadius:25, height:50, width:50, borderWidth:0, backgroundColor:'#f0f0f0',}}/>

                        <Button variant="text" sx={{textTransform:'capitalize', m:4, ml:'70%'}}><Link href="#" variant="body2">Resend OTP</Link></Button>

                        <Button variant="contained" onClick={handleClose} sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'}, ml:2,}}>
                            Submit
                        </Button>

                    </FormControl>
            
                </Box>
            </BootstrapDialogContent> 
        </BootstrapDialog>
    </div>    
  );
}