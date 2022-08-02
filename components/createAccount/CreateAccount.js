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
        <IconButton onClick={onClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
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
      <BootstrapDialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:12,}}}>
        <BootstrapDialogContent onClose={handleClose}>
          <Box sx={{height:520, width:450, display:'flex', flexDirection:'coloumn', justifyContent:'center', alignItems:'center',}}>

            <FormControl initialValues={{remember: true,}} sx={{display:'flex', flexDirection:'coloumn', justifyContent:'center', alignItems:'center',}}>
                <Typography variant="h5" sx={{m:2, mt:4}}>Create an Account</Typography>  

                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:1,}}>
                  <PersonIcon sx={{color:'#11193F', mr:1, my: 0.5}}/>
                  <TextField label="Name" variant="standard" sx={{width:248}} size="small"/>
                </Box>       
                      
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1,}}>
                  <MailIcon sx={{color:'#11193F', mr:1, my: 0.5}} />
                  <TextField label="Email" variant="standard" sx={{width:248}} size="small"/>
                </Box> 

                <Box sx={{display:'flex', alignItems:'flex-end', m:2, p:1,}}>
                  <Typography variant="h6" sx={{fontSize:18, fontWeight:600, color:'#505050'}}>Phone : &nbsp;</Typography>  
                  <MuiPhoneNumber defaultCountry={"ca"} onChange={console.log} sx={{width:200}}/> 
                </Box>

                <Box sx={{display:'flex', alignItems:'flex-end', p:1, width:295,}}>
                  <Typography variant="h6" sx={{fontSize:18, fontWeight:600, color:'#505050', mt:-1.8, mb:1.8,}}>Gender : &nbsp;</Typography>  
                  <RadioGroup row sx={{display:'flex', ml:1,}}>
                    <FormControlLabel value="male" control={<Radio />} label="Male &nbsp;&nbsp;"/>
                    <FormControlLabel value="female" control={<Radio />} label="Female" sx={{mr:-4}}/>
                  </RadioGroup>
                </Box>

                <Box sx={{display:'flex', p:1, m:2, width:295,}}>
                  <Typography variant="h6" sx={{fontSize:18, fontWeight:600, color:'#505050', mt:-1.8, mb:1.8,}}>Upload Documents : &nbsp;</Typography>
                  <label>
                    <Input multiple type="file" hidden/>
                    <Button variant="outlined" component="span" sx={{textTransform:'none', mt:-2.8}}>Browse</Button>
                  </label> 
                </Box>
                <Box sx={{display:'flex', width:275, mt:-2.8,}}>
                  <Typography variant="h6" sx={{fontSize:12, color:'#707070', mt:-1.8, mb:1.8,}}>
                    You can provide any valid document such as Canada Citizenship, Green Card, Passport etc.   
                  </Typography> 
                </Box>
                
                <Box sx={{display:'flex', justifyContent:'center', width:275, m:1, mb:2,}}>
                  <Button variant="contained" href="#" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:120, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'}, ml:2,}}>
                    Submit
                  </Button> 
                </Box>

            </FormControl>

          </Box>
        </BootstrapDialogContent> 
      </BootstrapDialog>
    </div>
  );
}
 