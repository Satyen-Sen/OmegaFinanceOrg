import * as React from 'react';
import { Card, Stack, Avatar, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DiamondTwoToneIcon from '@mui/icons-material/DiamondTwoTone';

export default function ProfileCard(props) {
    return (
        <Card sx={{borderRadius:6, p:4, boxShadow:5, width:'88%', display:'flex', justifyContent:'center',}}>
            <Grid container spacing={4}>
                <Grid item xs={3} sx={{display:'flex', justifyContent:'right',}}>
                    <Avatar src={props.avatar} sx={{width:160, height:220, borderRadius:4, boxShadow:3,}}/>
                </Grid>
                <Grid item xs={9} sx={{mt:-0.5}}>
                    <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:38,}}>
                        {props.title}
                    </Typography> 
                    <Stack spacing={2} direction="row" sx={{mt:2, mb:2,}}>
                        <Card sx={{width:180, borderRadius:3, display:'flex', flexDirection:'column', alignItems:'left', p:0.8, backgroundColor:'#B4E7CE', boxShadow:3,}}>
                            <Typography variant="h4" color="#1BB56B" sx={{fontSize:18, borderRadius:2, fontWeight:600, fontFamily:'poppins', mt:0.5,}}>
                                <StarIcon sx={{mb:0.5, ml:1, height:25, width:25,}}/> 5 Star Rated
                            </Typography> 
                        </Card>
                        <Card sx={{width:180, borderRadius:3, display:'flex', flexDirection:'column', alignItems:'left', p:0.8, backgroundColor:'#FFF3B3', boxShadow:3,}}>
                            <Typography variant="h4" color="#FDAA3C" sx={{fontSize:18, borderRadius:2, fontWeight:600, fontFamily:'poppins', mt:0.5, textTransform:'capitalize',}}>
                                <DiamondTwoToneIcon sx={{mb:0.5, ml:1, height:25, width:25,}}/> {props.category}
                            </Typography>
                        </Card>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Card sx={{width:180, borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', p:2, boxShadow:3,}}>
                            <Typography variant="h5" sx={{fontWeight:600, fontFamily:'poppins',}}>120</Typography>
                            <Typography variant="body">Consultations</Typography>
                        </Card>
                        <Card sx={{width:180, borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', p:2, boxShadow:3,}}>
                            <Typography variant="h5" sx={{fontWeight:600, fontFamily:'poppins',}}>{props.rating}+</Typography>
                            <Typography variant="body">Ratings</Typography>
                        </Card>
                        <Card sx={{width:180, borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', p:2, boxShadow:3,}}>
                            <Typography variant="h5" sx={{fontWeight:600, fontFamily:'poppins',}}>{props.year} Years</Typography>
                            <Typography variant="body">Experience</Typography>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};
