import * as React from 'react';
import {  Box, Typography, Dialog, Button, IconButton, FormControlLabel, RadioGroup, Radio, TextField, } from '@mui/material'; 
import MuiPhoneNumber from "material-ui-phone-number";
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';


export default function CreateAccountAdvisor() {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} sx={{textTransform:'none'}}>
                Create an Account
            </Button>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>

                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4, height:600,}}>
                    <Typography variant="h4" sx={{m:2}}>Create Investor Account</Typography>  

                    <Box sx={{ display:'flex', alignItems:'flex-end',}}>
                        <PersonIcon sx={{color:'#11193F', mr:1, my: 0.5}}/>
                        <TextField label="Name" variant="standard" sx={{width:248}} size="small"/>
                    </Box>       
                        
                    <Box sx={{ display:'flex', alignItems:'flex-end', m:2,}}>
                        <MailIcon sx={{color:'#11193F', mr:1, my:0.5}}/>
                        <TextField label="Email" variant="standard" sx={{width:248}} size="small"/>
                    </Box> 

                    <Box sx={{display:'flex', alignItems:'center', m:2,}}>
                        <Typography variant="h6" sx={{fontSize:18, fontWeight:600, color:'#505050'}}>Phone : &nbsp;</Typography>  
                        <MuiPhoneNumber defaultCountry={"ca"} onChange={console.log} sx={{width:200}}/> 
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', m:2,}}>
                        <Typography variant="h6" sx={{fontSize:18, fontWeight:600, color:'#505050',}}>
                            Gender : &nbsp;&nbsp; &nbsp;
                        </Typography>
                        <RadioGroup row>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="female" control={<Radio/>} label="Female" sx={{m:0}}/>
                        </RadioGroup>
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', m:2,}}>
                        <Typography variant="h6" sx={{fontSize:18, fontWeight:600, color:'#505050',}}>
                            Upload Documents : &nbsp; &nbsp;
                        </Typography>
                        <Button variant="outlined" component="label" sx={{textTransform:'none',}}>
                            Browse<input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Box>

                    <Typography variant="h6" sx={{fontSize:12, color:'#707070', mt:-1.5, width:280,}}>
                        You can provide any valid document such as Canada Citizenship, Green Card, Passport etc.   
                    </Typography> 
                     
                    <Box sx={{display:'flex', justifyContent:'center', mt:4,}} onClick={handleClose}>
                        <Button variant="contained" href="#" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:120, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                            Submit
                        </Button> 
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
};
