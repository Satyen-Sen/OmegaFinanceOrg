import * as React from 'react';
import { Card, Stack, Rating, Avatar, Grid, Typography } from '@mui/material';

export default function OrganisationDetails(props) {
    return (
        <Card sx={{borderRadius:6, p:4, boxShadow:5, width:'80%', display:'flex', justifyContent:'center',}}>
            <Grid container spacing={4}>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'right',}}>
                    <Avatar src={props.avatar} sx={{width:150, height:150, borderRadius:20, boxShadow:1, mt:-0.4,}}/>
                </Grid>
                <Grid item xs={9} sx={{mt:-0.5}}>
                    <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:38,}}>
                        {props.title}
                    </Typography> 
                    <Rating defaultValue={props.rating} size="large" readOnly/>
                    <Stack spacing={2} direction="row" sx={{mt:2, mb:2,}}>
                        <Card sx={{display:'flex', justifyContent:'center', backgroundColor:'#B4E7CE', boxShadow:1, borderRadius:2, p:1, width:240,}}>
                            <Typography variant="h4" color="#1BB56B" sx={{fontSize:18, borderRadius:2, fontWeight:600, fontFamily:'poppins',}}>
                                50 Advisors
                            </Typography> 
                        </Card>
                        <Card sx={{display:'flex', justifyContent:'center', backgroundColor:'#FFF3B3', boxShadow:1, borderRadius:2, p:1, width:240,}}>
                            <Typography variant="h4" color="#FDAA3C" sx={{fontSize:18, borderRadius:2, fontWeight:600, fontFamily:'poppins',}}>
                                Established in 1966
                            </Typography>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};
