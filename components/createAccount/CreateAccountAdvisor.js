import * as React from 'react';
import Image from 'next/image';
import { Box, Dialog, Button, IconButton, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import NextButton from '../../public/CreateAccount/Button.png';
import CheckButton from '../../public/CreateAccount/Check.png';


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
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16, height:550, width:500, display:'flex', flexDirection:'column', alignItems:'center',}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080',}}>
                    <CloseIcon/>
                </IconButton>

                <Box sx={{pt:2, flexGrow:1,}}>
                    {
                        activeStep===0 ? (<Step1/>) 
                        : activeStep===1 ? (<Step2/>) 
                        : activeStep===2 ? (<Step3/>) 
                        : activeStep===3 ? (<Step4/>) 
                        : activeStep===4 ? (<Step5/>) 
                        : activeStep===5 ? (<Step6/>) 
                        : (<Step7 action={handleClose}/>) 
                    } 
                </Box>

                <Box>
                    {activeStep===0 ? (
                        <IconButton variant="text" sx={{mb:6}} onClick={handleNext}>
                            <Image src={NextButton} alt="NextButton" width={50} height={45}/>
                        </IconButton>
                    ) : activeStep===5 ? (
                        <IconButton variant="text" onClick={handleNext}>
                            <Image src={CheckButton} alt="NextButton" width={50} height={80}/>
                        </IconButton>
                    ) : activeStep===6 ? (
                            <></>
                    ) : (
                        <IconButton variant="text" onClick={handleNext}>
                            <Image src={NextButton} alt="NextButton" width={50} height={45}/>
                        </IconButton>
                    )}
                </Box>
                
                <Box sx={{display:'flex', justifyContent:'left', alignItems:'center', width:'100%',}}>
                    {activeStep===6 ? (<></>) : ( 
                        <Button size="small" onClick={handleBack} hidden={activeStep===0} sx={{textTransform:'none', fontFamily:'poppins', color:'#808080', m:2, mt:0,}}>
                            <WestRoundedIcon/> &nbsp; Previous Step
                        </Button>
                    )}
                </Box>
            </Dialog>
        </div>
    );
};