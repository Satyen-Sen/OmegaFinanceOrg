import * as React from 'react';
import { Box, Typography, Toolbar, Button, } from '@mui/material'; 

function PaymentButton() {
    return(
        <Button variant="contained" sx={{textTransform:'capitalize', fontSize:15, fontFamily:'poppins', width:340, mr:'3%', backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
            Release Selected Payments
        </Button>
    );
};

export default function TableToolbar(props) {

    return (
        <Toolbar sx={{...(props.numSelected > 0 && {bgcolor:'#EDF4FB'})}}>
        
            {props.numSelected > 0 ? (
                <Box sx={{height:80, flex:'1 1 100%',}}>
                    <Typography variant="h5" sx={{flex:'1 1 100%', color:'#11193F', fontFamily:'poppins', mt:4,}}>{props.numSelected} selected</Typography>
                </Box>
            ) : (
                <Box sx={{height:80, flex:'1 1 100%',}}>
                    <Typography variant="h4" sx={{flex:'1 1 100%', color:'#11193F', fontFamily:'poppins', mt:3,}}>List of Advisors</Typography>
                </Box>
            )}

            {props.numSelected > 0 ? (<PaymentButton/>):(<></>)}
        </Toolbar>
    );
};