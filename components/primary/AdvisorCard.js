import * as React from 'react';
import Link from 'next/link'; 
import { Card, CardHeader, CardContent, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const CustomButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:104, backgroundColor:'#747A99', '&:hover':{backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'none', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', width:'100%', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});

export default function AdvisorCard(props) {
    return (
        <Card sx={{borderRadius:6, m:6,}}>
            <CardHeader 
                avatar={<Avatar src={props.avatar} sx={{width:90, height:120, borderRadius:4,}}/>} 
                title={<Typography variant="h5" color="#11193F" sx={{mb:1, ml:1, fontWeight:700,}}>{props.title}</Typography>} 
                subheader={
                    <Grid container spacing={1}>
                        <Grid item xs={6}>  <CustomButton variant="contained">{props.year} Years Exp</CustomButton>  </Grid>
                        <Grid item xs={6}>  <CustomButton variant="contained">{props.client}+ Clients</CustomButton>  </Grid>
                        <Grid item xs={6}>  <CustomButton variant="contained" startIcon={<VerifiedIcon/>}>Verified</CustomButton>  </Grid>
                        <Grid item xs={6}>  <CustomButton variant="contained">{props.rating}+ Rating</CustomButton>  </Grid>
                    </Grid>
                }
            /> 
            <CardContent sx={{p:4}}>
                <Typography variant="h6" color="text.secondary" sx={{fontWeight:700}}>
                    Investment representative
                </Typography>
                <Typography variant="h7">
                    About Advisor
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
                    We at Omega Finance Group, focus on providing the best financial planning services to our clients for their investment.
                </Typography>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Link href={props.link}>
                        <SubscribeButton variant="outlined" sx={{mt:4, mb:1,}}>
                            View Profile / Subscribe
                        </SubscribeButton>
                    </Link>
                </Box>
            </CardContent>
        </Card>      
    );
};
