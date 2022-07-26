import * as React from 'react';
import Link from 'next/link'; 
import { Card, Stack, Avatar, Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DetailsButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:110, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const RepresentativeButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:229, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'capitalize', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});


export default function AdvisorCard(props) {
  return (   
    <Card sx={{borderRadius:8, m:6, mt:4,}}>
        <Box sx={{p:4, pt:3,}}>
            <Grid container spacing={6}>
                <Grid item xs={4} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                    <Avatar src={props.avatar} sx={{width:150, height:190, borderRadius:6,}} variant="rounded"/>
                </Grid>
            
                <Grid item xs={8}>
                    <Typography variant="h5" sx={{mb:1, fontWeight:700,}}>{props.title}</Typography>

                    <Stack spacing={1} direction="row" sx={{mb:1,}}>
                        <DetailsButton variant="contained">{props.year} Years Exp</DetailsButton>
                        <DetailsButton variant="contained">{props.client}+ Clients</DetailsButton>
                    </Stack>
                    <RepresentativeButton variant="contained" sx={{mb:2,}}>Investment Representative</RepresentativeButton>

                    <Typography variant="h6" color="text.secondary" sx={{fontWeight:600, fontSize:18,}}>About the Investor</Typography> 
                    <Typography variant="body2" color="text.secondary" sx={{mt:0}}>
                        Started two years ago with minimumm capital, is now an expert in trading.  
                    </Typography>      
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item xs={6}>
                    <Link href={props.profile}>
                        <SubscribeButton variant="outlined" sx={{width:'100%'}}> View Profile </SubscribeButton>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <SubscribeButton variant="outlined" sx={{width:'100%'}}> Subscribe </SubscribeButton>
                </Grid>
            </Grid>
        </Box>

    </Card>
  );
};
