import * as React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import { Box, Dialog, FormControl, Button, IconButton, Input, InputLabel, InputAdornment, Typography, TextField, } from '@mui/material'; 
import Logo from '../../public/Logo.png'; 
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function OrganiserLogin() {
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({showPassword:false});

    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    
    const handlePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'none', width:220, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
                Login As Organiser
            </Button>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>

                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>

                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:380, p:4,}}>
                    <Image src={Logo} width={120} height={60}/>
                    <Box sx={{display:'flex', alignItems:'flex-end', width:200, mt:3,}}>
                        <EmailIcon sx={{color:'#11193F', mr:1, my:0.5,}}/>
                        <TextField label="Email" variant="standard" size="small"/>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mt:-1,}}>
                        <KeyRoundedIcon sx={{color:'#11193F', mr:1, my:3.5,}}/>
                        <FormControl sx={{mt:1, width:168,}} variant="standard">
                            <InputLabel>Password</InputLabel>
                            <Input type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handlePassword('password')} size="small"
                            endAdornment={ 
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }/>
                        </FormControl>
                    </Box> 

                    <Box sx={{display:'flex', justifyContent:'center', mt:3, mb:2,}}>
                        <Link href="/Organiser/">
                            <Button variant="contained" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:120, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                                Login
                            </Button>
                        </Link>
                    </Box>

                </Box>
            </Dialog>
        </div>
    );
};