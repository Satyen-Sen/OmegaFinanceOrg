import React from 'react';
import { Box, Typography, Grid, } from '@mui/material'; 
import { Player } from '@lottiefiles/react-lottie-player';
import CircleIcon from '@mui/icons-material/Circle';

export default function MainInvestor() {
    return (
        <Box sx={{ml:10, mt:8,}}>
            <Grid container spacing={6}>
                <Grid item xs={6} sx={{display:'flex', flexDirection:'column',}}> 
                    <Typography variant="body" sx={{color:'#11193F', mt:4, fontSize:40,}}>Simplifying Global Investment</Typography>
                    <Box sx={{ml:8, mt:8, display:'flex', flexDirection:'column',}}>
                        <Typography variant="body" sx={{fontSize:20}}><CircleIcon sx={{width:12, height:12, mt:-0.2,}}/>&nbsp;&nbsp; Choose an Advisor.</Typography>
                        <Typography variant="body" sx={{fontSize:20, mt:2, mb:2,}}><CircleIcon sx={{width:12, height:12, mt:-0.2,}}/>&nbsp;&nbsp; Select an Investment Plan.</Typography>
                        <Typography variant="body" sx={{fontSize:20}}><CircleIcon sx={{width:12, height:12, mt:-0.2,}}/>&nbsp;&nbsp; Track your ongoing Consultations.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ ml:-4,}}>
                    <Player autoplay loop src="https://assets1.lottiefiles.com/packages/lf20_uonpv3qg.json" style={{ height:'400px', width:'400px',}}></Player>
                </Grid>
            </Grid>
        </Box>
    );
};