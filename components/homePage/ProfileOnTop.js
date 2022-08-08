import * as React from 'react';
import { Card, Grid, Button, Box, Typography, } from '@mui/material';

export default function ProfileOnTop() {
    return (
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center',}}>
            <Card sx={{mt:4, mb:4, p:4, width:'50%', backgroundColor:'#FFF4B8', border:1, borderColor:'#FDAA3C', borderRadius:8,}}>
                <Grid container spacing={0}>
                    <Grid item xs={3} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                        {/* <Avatar src={props.avatar} sx={{width:140, height:140}}/> */}
                    </Grid>

                    <Grid item xs={9} sx={{display:'flex', flexDirection:'column',}}>
                        <Typography variant="body" sx={{fontSize:20, fontWeight:600, color:'#FDAA3C'}}>
                            Want to see your profile on top?
                        </Typography>
                        <Typography variant="body" sx={{fontSize:14, mt:2, mb:2,}}>
                            Check out our promotion feature and get more clients and many more exciting benifits
                        </Typography>
                        <Button variant="contained" sx={{textTransform:'none', fontSize:14, fontWeight:600, borderRadius:5, width:'40%', backgroundColor:'#FDAA3C', '&:hover':{backgroundColor:'#E69428'}}}>
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};
