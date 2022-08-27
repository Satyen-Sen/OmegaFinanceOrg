import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Avatar, Badge, } from '@mui/material'; 
import Profile from '../../public/CreateAccount/04_Profile.png';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export default function Step4() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, height:500,}}>
            <Typography variant="body" sx={{fontSize:28, color:'#11193F',}}>Registration</Typography>
            <Typography variant="body" sx={{m:2}} align='center'>Please fill this form to proceed ahead.</Typography>

            <Box>
                <Badge overlap="circular" anchorOrigin={{vertical:'bottom', horizontal:'right',}} badgeContent={
                    <Box sx={{height:30, width:30, borderRadius:20, boxShadow:5, display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#A8E3C7',}}>
                        <EditRoundedIcon sx={{color:'#42855B'}}/>
                    </Box>
                }>
                    <Box sx={{height:100, width:100, borderRadius:50, boxShadow:5,}}>
                        <Image src={Profile}/>
                    </Box>
                </Badge>
            </Box>

        </Box>      
    );
};