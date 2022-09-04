import * as React from 'react';
import { Box, Dialog, Button, IconButton, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import AdvStep1 from './AdvStep1';
import AdvStep2 from './AdvStep2';
import AdvStep3 from './AdvStep3';
import AdvStep4 from './AdvStep4';


const stepperButton = [
    { id:'01', button:'Reset Password',},
    { id:'02', button:'Next',},
    { id:'03', button:'Submit',},
    { id:'04', button:'Continue',},
];
const stepperLength = stepperButton.length;

export default function ResetAdvisorPassword() {

    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

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
                    {activeStep===0 ? (<AdvStep1/>) : activeStep===1 ? (<AdvStep2/>) : activeStep===2 ? (<AdvStep3/>) : (<AdvStep4/>)}

                    <Button variant="contained" onClick={activeStep === stepperLength-1 ? handleClose : handleNext} sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                        {stepperButton[activeStep].button}
                    </Button>

                    <Button size="small" onClick={handleBack} hidden={activeStep===0} sx={{textTransform:'none', fontFamily:'poppins', position:'absolute', left:40, bottom:40, color:'#808080',}}>
                        <WestRoundedIcon/> &nbsp; Previous Step
                    </Button>
                </Box>
            </Dialog>
        </div>
    );
};