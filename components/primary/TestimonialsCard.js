import React from 'react';
import { Card, CardHeader, CardContent, Avatar, Rating, Box,Typography } from '@mui/material'; 

export default function TestimonialsCard(props) {
    return (
        <Card sx={{borderRadius:2, boxShadow:3, m:6,}}>
            <CardHeader
                avatar={<Avatar src={props.avatar} sx={{ width:60, height:60,}}/>} 
                subheader={<Rating defaultValue={props.rating} size="large" />}
            />
            <CardContent>
                <Box>
                    <Typography variant="body" color="text.secondary">
                        It is a great platform for investment. Interactive and clean User Interface. Features like creating your own portfolio are great..I started investing in Mutual Funds.
                    </Typography>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="h7" sx={{fontWeight:700}}>{props.title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body" sx={{fontSize:14}}>{props.position}</Typography>
                </Box>  
            </CardContent>
        </Card>
    );
};