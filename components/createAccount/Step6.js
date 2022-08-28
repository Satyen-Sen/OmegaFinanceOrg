import * as React from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, } from '@mui/material'; 


function InputField(props) {
    return(
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', my:1,}}>
            <TextField variant='outlined' size='small' 
                label={ <Typography variant="body" sx={{fontSize:14}}>{props.text}</Typography> }
            />
        </Box>
    );
};

export default function Step6() {

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2,}}>
            
            <Typography variant="body" sx={{fontSize:28, color:'#11193F', mt:2,}}>
                Bank Details
            </Typography>
            <Typography variant="body" sx={{mt:1,}}>
                Please provide your bank details to receive payments.
            </Typography>

            <Box sx={{mt:2, width:330, display:'flex', flexDirection:'column', justifyContent:'center',}}>
                <InputField text='Name of the Bank'/>
                <InputField text='Account Number'/>
                <InputField text='Confirm Account Number'/>  
                <InputField text='IFSC Code'/> 

                <FormControlLabel control={<Checkbox/>} 
                    label={
                    <Typography variant="body" sx={{fontSize:14}}>
                        Click here to opt in for a Private Account
                    </Typography>}
                /> 
            </Box>  
        </Box>
    );
};