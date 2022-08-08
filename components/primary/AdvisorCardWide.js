import * as React from 'react';
import Link from 'next/link'; 
import { Card, Stack, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DetailsButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:'50%', backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const RepresentativeButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:'100%', backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'none', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});


export default function AdvisorCardWide(props) {
    return (
        <Card sx={{borderRadius:6, m:6, display:'flex', justifyContent:'center', alignItems:'center',}}>
            <Box sx={{p:4, width:'96%',}}>
                <Grid container spacing={12}>
                    <Grid item xs={4} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                        <Avatar src={props.avatar} sx={{width:150, height:205, borderRadius:5,}} variant="rounded"/>
                    </Grid>
                
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{mb:1, fontWeight:700,}}>{props.title}</Typography>

                        <Stack spacing={1} direction="row" sx={{mb:1,}}>
                            <DetailsButton variant="contained">{props.year} Years Exp</DetailsButton>
                            <DetailsButton variant="contained">{props.client}+ Clients</DetailsButton>
                        </Stack>
                        <RepresentativeButton variant="contained" sx={{mb:2,}}>Investment Representative</RepresentativeButton>

                        <Typography variant="h6" color="text.secondary" sx={{fontWeight:600, fontSize:18, mt:1,}}>About the Investor</Typography> 
                        <Typography variant="body2" color="text.secondary" sx={{mt:0}}>
                            Started two years ago with minimum capital, is now an expert in trading.  
                        </Typography>      
                    </Grid>
                </Grid>
                <Box sx={{m:4, mb:0}}>
                    <Link href={props.link}>
                        <SubscribeButton variant="outlined" sx={{width:'100%'}}> View Profile / Subscribe </SubscribeButton>
                    </Link>                                                
                </Box>
            </Box>
        </Card>
    );
};
