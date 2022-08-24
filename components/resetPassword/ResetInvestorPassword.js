import * as React from 'react';
import Image from 'next/image';
import {  Box, Typography, Dialog, Button, IconButton, } from '@mui/material'; 
import Logo from '../../public/Logo.png'; 
import CloseIcon from '@mui/icons-material/Close';
import WestRoundedIcon from '@mui/icons-material/WestRounded';


const steps = [
    {label:'Reset Your Password', description:'Enter the email associated with your account.', button:'Submit',},
    {label:'Enter Verification Code', description:'Enter the 4-digit OTP recieved in your email.', button:'Next',},
    {label:'Create a New Password', description:'Your new password must be different from previously used passwords.', button:'Reset Password',},
    {label:'Reset Successful', description:'Your Password has been reset successfully. Continue to Login.', button:'Continue',},
];

export default function ResetAdvisorPassword() {

    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    const maxSteps = steps.length;
    const handleNext = () => {setActiveStep((prevActiveStep) => prevActiveStep + 1)};
    const handleBack = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1)};

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} sx={{textTransform:'none'}}>
                Forgot Password?
            </Button>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16, height:550, width:480,}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080',}}>
                    <CloseIcon/>
                </IconButton>

                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4, flexGrow:1}}>
                    
                    <Image src={Logo} width={120} height={60} sx={{m:2}}/>
                    <Typography variant="h4" sx={{m:2, mt:4,}}>{steps[activeStep].label}</Typography>
                    <Typography variant="body" sx={{m:2}} align='center'>{steps[activeStep].description}</Typography>
                    {/* <Box sx={{m:4}}>{activeStep===0 ? () : activeStep===1 ? () : activeStep===2 ? () : ()}</Box> */}

                    <Button variant="contained" onClick={activeStep === maxSteps-1 ? handleClose : handleNext} sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                        {steps[activeStep].button}
                    </Button>

                    <Button size="small" onClick={handleBack} hidden={activeStep===0} sx={{textTransform:'none', fontFamily:'poppins', position:'absolute', left:40, bottom:40, color:'#808080',}}>
                        <WestRoundedIcon/> &nbsp; Back To Login
                    </Button>
                </Box>
            </Dialog>
        </div>
    );
};
