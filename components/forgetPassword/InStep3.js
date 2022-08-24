import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, TextField, InputAdornment, IconButton, } from '@mui/material'; 
import Step3 from '../../public/Stepper/stepper3.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function InStep3() {

    const [values, setValues] = React.useState({showPassword:false});
    const [newValues, setNewValues] = React.useState({showPassword:false});

    const handlePassword = (prop) => (event) => {
        setValues({ ...values, [prop]:event.target.value, });
    };
    const handleClickShowPassword = () => {
        setValues({...values, showPassword:!values.showPassword, });
    };
    const newHandlePassword = (prop) => (event) => {
        setNewValues({ ...newValues, [prop]:event.target.value, });
    };
    const newHandleClickShowPassword = () => {
        setNewValues({...newValues, showPassword:!values.showPassword, });
    };

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, height:380,}}>
            <Typography variant="h4" sx={{mt:2, mb:1, color:'#11193F',}}>Create New Password</Typography>
            <Image src={Step3} width={140} height={140}/>
            <Typography variant="body" align='center' sx={{mb:2}}>Your new password must be different from previously used passwords.</Typography>

            <TextField variant="outlined" size="small" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handlePassword('password')} 
                sx={{'& legend':{display:'none'}, '& fieldset':{top:0}, width:250, mb:1,}} 
                InputProps = {{ endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                            {values.showPassword ? <Visibility/>:<VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )}}
            />
            <TextField variant="outlined" size="small" type={newValues.showPassword ? 'text' : 'password'} value={newValues.password} onChange={newHandlePassword('password')} 
                sx={{'& legend':{display:'none'}, '& fieldset':{top:0}, width:250, mb:2,}} 
                InputProps = {{ endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={newHandleClickShowPassword}>
                            {newValues.showPassword ? <Visibility/>:<VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )}}
            />
        </Box>
    );
};