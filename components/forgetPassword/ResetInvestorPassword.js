import * as React from 'react';
import { Box, Dialog, Button, IconButton, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import InStep1 from './InStep1';
import InStep2 from './InStep2';
import InStep3 from './InStep3';
import InStep4 from './InStep4';


const stepperButton = [
    {label:'Reset Your Password', button:'Submit',},
    {label:'Enter Verification Code', button:'Next',},
    {label:'Create a New Password', button:'Reset Password',},
    {label:'Reset Successful', button:'Continue',},
];
const stepperLength = stepperButton.length;

export default function ResetInvestorPassword() {

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
                    {activeStep===0 ? (<InStep1/>) : activeStep===1 ? (<InStep2/>) : activeStep===2 ? (<InStep3/>) : (<InStep4/>)}

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
