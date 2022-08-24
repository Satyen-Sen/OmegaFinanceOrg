import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, TextField, InputAdornment, } from '@mui/material'; 
import Step4 from '../../public/Stepper/stepper4.png';
import EmailIcon from '@mui/icons-material/Email';


export default function InStep4() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, height:350,}}>
            <Typography variant="h4" sx={{m:2, color:'#11193F',}}>Reset Successful</Typography>
            <Image src={Step4} width={140} height={140} sx={{m:2}}/>
            <Typography variant="body" sx={{m:2}} align='center'>Your Password has been reset successfully. Continue to Login.</Typography>
        </Box>
    );
};