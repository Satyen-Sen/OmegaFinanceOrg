import * as React from 'react';
import Image from 'next/image';
import { Box, Dialog, Button, IconButton, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import NextButton from '../../public/CreateAccount/Button.png';


const stepperButton = [
    { id:'01', button:'Reset Password',},
    { id:'02', button:'Next',},
    { id:'03', button:'Submit',},
    { id:'04', button:'Continue',},
];
const stepperLength = stepperButton.length;


export default function CreateAccountAdvisor() {

    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    const handleNext = () => {setActiveStep((prevActiveStep) => prevActiveStep + 1)};
    const handleBack = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1)};

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} sx={{textTransform:'none'}}>
                Create Account
            </Button>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16, height:550, width:500,}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080',}}>
                    <CloseIcon/>
                </IconButton>

                <Box sx={{pt:2, flexGrow:1,}}>
                    {activeStep===0 ? (<Step1/>) : activeStep===1 ? (<Step2/>) : activeStep===2 ? (<Step3/>) : (<Step4/>) } 
                </Box>
                
                {activeStep===0 ? (
                    <Button variant="text" sx={{mb:5}} onClick={activeStep === stepperLength-1 ? handleClose : handleNext}>
                        <Image src={NextButton} alt="NextButton" width={45} height={40}/>
                    </Button>
                ) : ( 
                    <Button variant="text" sx={{mb:1}} onClick={activeStep === stepperLength-1 ? handleClose : handleNext}>
                        <Image src={NextButton} alt="NextButton" width={45} height={40}/>
                    </Button>
                )}
                
                <Box sx={{m:2, mt:0,}}>
                    <Button size="small" onClick={handleBack} hidden={activeStep===0} sx={{textTransform:'none', fontFamily:'poppins', color:'#808080',}}>
                        <WestRoundedIcon/> &nbsp; Previous Step
                    </Button>
                </Box>
            </Dialog>
        </div>
    );
};
