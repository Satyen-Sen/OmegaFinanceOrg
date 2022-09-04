import * as React from 'react';
import Image from 'next/image';
import { Card, Grid, Button, Box, Typography, } from '@mui/material';
import Diamond from '../../public/images/Diamond.png';

export default function ProfileOnTop() {
    return (
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center',}}>
            <Card sx={{my:4, p:2, width:'40%', backgroundColor:'#FFF4B8', border:1, borderColor:'#FDAA3C', borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center',}}>
                <Grid container spacing={0}>
                    <Grid item xs={2.5} align="center" sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                        <Image src={Diamond}/>
                    </Grid>

                    <Grid item xs={9.5} sx={{display:'flex', flexDirection:'column',}}>
                        <Typography variant="body" sx={{fontSize:20, fontWeight:600, color:'#FDAA3C'}}>
                            Want to see your profile on top?
                        </Typography>
                        <Typography variant="body" sx={{fontSize:14, my:1,}}>
                            Check out our promotion feature and get more clients and many more exciting benifits
                        </Typography>
                    </Grid>
                </Grid>

                <Button variant="contained" sx={{textTransform:'none', mt:1, fontSize:14, fontWeight:600, fontFamily:'poppins', borderRadius:5, width:'30%', backgroundColor:'#FDAA3C', '&:hover':{backgroundColor:'#E69428'}}}>
                    Learn More
                </Button>
            </Card>
        </Box>
    );
};