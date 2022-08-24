import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, TextField, InputAdornment, } from '@mui/material'; 
import Step1 from '../../public/Stepper/stepper1.png';
import EmailIcon from '@mui/icons-material/Email';


export default function InStep1() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, mb:6,}}>
            <Typography variant="h4" sx={{m:2, color:'#11193F',}}>Reset Your Password</Typography>
            <Image src={Step1} width={140} height={140} sx={{m:2}}/>
            <Typography variant="body" sx={{m:2}} align='center'>Enter the email associated with your account.</Typography>

            <TextField variant="outlined" sx={{'& legend':{display:'none'}, '& fieldset':{top:0}, width:250,}} size="small"
                InputProps = {{ startAdornment: (
                    <InputAdornment position="start"><EmailIcon sx={{color:'#11193F'}}/></InputAdornment>
                )}}
            />
        </Box>
    );
};