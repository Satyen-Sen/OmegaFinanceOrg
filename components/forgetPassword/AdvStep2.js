import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, } from '@mui/material'; 
import OTPInput from "otp-input-react";
import Step2 from '../../public/Stepper/stepper2.png';


export default function Stepper2() {
    const [OTP, setOTP] = React.useState("");

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, mb:6,}}>
            <Typography variant="h4" sx={{m:2, color:'#11193F',}}>Enter Verification Code</Typography>
            <Image src={Step2} width={140} height={140} sx={{m:2}}/>
            <Typography variant="body" sx={{m:2}} align='center'>Enter the 4-digit OTP recieved in your email.</Typography>

            <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" autoFocus inputStyles={{borderRadius:25, height:50, width:50, borderWidth:0, backgroundColor:'#EEEEEE',}}/>
        </Box>
    );
};