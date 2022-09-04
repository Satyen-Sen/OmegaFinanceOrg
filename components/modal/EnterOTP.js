import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Dialog, Button, IconButton, Link, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import OTPInput from "otp-input-react";
import image from '../../public/images/enterOtp.png';


export default function EnterOTP(props) {

    const [open, setOpen] = React.useState(false);
    const [OTP, setOTP] = React.useState("");

    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                Send OTP 
            </Button>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>

                <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', p:4, }}>
                    <Typography variant="h4" sx={{m:2, color:'#11193F',}}>Enter OTP</Typography>
                    <Image src={image} width={180} height={160}/>
                    <Typography variant="body" sx={{m:2}} align='center'>Enter the 4-digit OTP recieved on your phone.</Typography>

                    <Box sx={{m:2}}>
                        <OTPInput value={OTP} onChange={setOTP} OTPLength={4} otpType="number" autoFocus inputStyles={{borderRadius:25, height:50, width:50, borderWidth:0, backgroundColor:'#EEEEEE',}}/>         
                    </Box>
                    <Link href={props.targetlink} style={{textDecoration:'none'}}>  
                        <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, width:100, m:2, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                            Submit
                        </Button>
                    </Link>
                </Box>
            </Dialog>
        </div>
    );
};