import * as React from 'react';
import { Card, Stack, Rating, Avatar, Grid, Box, Typography, } from '@mui/material';

export default function OrganisationCard(props) {
    return (
        <Card sx={{borderRadius:6, m:6, display:'flex', justifyContent:'center', alignItems:'center',}}>
            <Grid container spacing={0}>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                    <Avatar src={props.avatar} sx={{width:140, height:140, borderRadius:35,}} variant="rounded"/>
                </Grid>

                <Grid item xs={9} sx={{display:'flex', flexDirection:'column',}}> 
                    <Grid container spacing={2}>
                        <Grid item xs={8}> 
                            <Box sx={{mt:2}}>
                                <Typography variant="body" sx={{fontSize:20, fontWeight:600,}}>{props.title}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{backgroundColor:'#747A99', borderBottomLeftRadius:50, mt:-3,}}>
                            <Box sx={{m:1, mt:4,}}>
                                <Typography variant="body" color="#FFFFFF" sx={{fontSize:12,}}>View All Advisors</Typography>
                            </Box>
                        </Grid>
                    </Grid> 
                    <Rating defaultValue={props.rating} size="medium" readOnly/>
                    <Stack spacing={2} direction="row" sx={{mt:2, height:30,}}>
                        <Card sx={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#B4E7CE', borderRadius:2, width:140,}}>
                            <Typography variant="h4" color="#1BB56B" sx={{fontSize:14, borderRadius:2, fontWeight:600, fontFamily:'poppins',}}>
                                50 Advisors
                            </Typography> 
                        </Card>
                        <Card sx={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FFF3B3', borderRadius:2, width:200,}}>
                            <Typography variant="h4" color="#FDAA3C" sx={{fontSize:14, borderRadius:2, fontWeight:600, fontFamily:'poppins',}}>
                                Established in 1966
                            </Typography>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};