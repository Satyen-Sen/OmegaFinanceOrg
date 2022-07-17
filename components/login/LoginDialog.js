import * as React from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';
import { Grid, FormControl, Typography, Box, Chip, Divider,Link, Button, Dialog, DialogContent, IconButton, } from '@mui/material'; 
import LoginTabs from './LoginTabs';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import facebookIcon from '../../public/images/facebook.png';
import googleIcon from '../../public/images/google.png';
import appleIcon from '../../public/images/apple.png';

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

export default function LoginDialog(props) {
  const {handleCreateAccountOpen} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateAccount = () => {
    handleClose();
    handleCreateAccountOpen();
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'capitalize', width:170, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
        Login/Register
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} PaperProps={{style:{borderRadius:12,}}}>
        <BootstrapDialogContent id="customized-dialog-title" onClose={handleClose}>
          <Box className="login-box" sx={{height:510, width:450,}}>
            <FormControl initialValues={{remember: true,}} sx={{display:'flex', flexDirection:'coloumn', justifyContent:'center', alignItems:'center',}}>

                <Typography variant="h5" sx={{m:2, mt:4}}>Login with:</Typography>  
                <LoginTabs handleEnterOTPOpen={handleClickOpen}/>

                <Grid container spacing={2} sx={{width:'78%', mb:3,}}>
                    <Grid item xs>
                        <Button variant="text" onClick={handleCreateAccount} sx={{textTransform:'capitalize'}}>
                          <Link href="#" variant="body2">Create an Account</Link>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">Forgot password?</Link>
                    </Grid>
                </Grid>

            </FormControl>

            <Divider variant="middle" sx={{ml:4, mr:4}}><Chip label="or Continue With"/></Divider>
            <Box sx={{p:1.5, ml:16, mr:16,}}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>  <Button><Image src={facebookIcon} alt="facebook"  width={25} height={25}/></Button>   </Grid>
                    <Grid item xs={4}>  <Button><Image src={googleIcon} alt="facebook"  width={25} height={25}/></Button>     </Grid>
                    <Grid item xs={4}>  <Button><Image src={appleIcon} alt="facebook"  width={25} height={25}/></Button>      </Grid>
                </Grid>
            </Box>      
          </Box>
        </BootstrapDialogContent> 
      </BootstrapDialog>
    </div>    
  );
}