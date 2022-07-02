import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Dialog, DialogContent, FormControl, Button, IconButton, Typography, TextField, Link } from '@mui/material'; 
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
  
export default function LoginAsAdmin() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'capitalize', width:260, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
          Login As Administrator
        </Button>
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} PaperProps={{style:{borderRadius:12,}}}>
          <BootstrapDialogContent id="customized-dialog-title" onClose={handleClose}>
                <Box sx={{height:480,}}>
                    <FormControl className="illustration-wrapper" initialValues={{remember:true}}>
                        <Typography variant="h5" sx={{m:4}}>Login As Administrator </Typography>  
                        <Box sx={{m:4, ml:8}}> 
                            <Grid container spacing={0}>
                                <Grid item xs={2.5} sx={{display:'flex', alignItems:'center',}}>
                                    <Typography variant="h6" sx={{fontSize:18}}>Username :</Typography>
                                </Grid>
                                <Grid item xs={9.5}>
                                    <TextField id="username" variant="standard" placeholder="Enter your Username here" sx={{required:true,}}/>
                                </Grid>
                                <Grid item xs={2.5} sx={{display:'flex', alignItems:'center',}}>
                                    <Typography variant="h6" sx={{fontSize:18}}>Password :</Typography>
                                </Grid> 
                                <Grid item xs={9.5}>
                                    <TextField id="password" variant="standard" placeholder="Enter your password here" sx={{required:true, width:'100%'}}/>
                                </Grid>
                            </Grid>
                        </Box>
                        <Button variant="contained" sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', m:4, '&:hover':{backgroundColor:'#747A99'},}}>
                            Login
                        </Button>
                            <Link href="#" variant="body2" sx={{position: 'absolute', right:0, bottom:-64, m:4,}}>Reset Password</Link> 
                    </FormControl>    
                </Box>
          </BootstrapDialogContent> 
        </BootstrapDialog>
      </div>
    );
  }

