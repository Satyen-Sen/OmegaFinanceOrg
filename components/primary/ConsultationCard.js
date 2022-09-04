import * as React from 'react';
import { Card, Stack, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const CustomButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:5, fontFamily: 'poppins', width:'90%', backgroundColor:'#747A99', '&:hover':{backgroundColor:'#4E5571',}});
const LinkButton = styled(Button)({textTransform:'none', fontSize:12, fontWeight:600, borderRadius:5, fontFamily: 'poppins',});

function Span(props){
    return(
        <Typography variant="body" sx={{color:'#FFAE42', fontWeight:600,}}>
            &nbsp;{props.text}&nbsp;
        </Typography>
    );
}; 

export default function ConsultationCard(props) {
    return (
        <Card sx={{borderRadius:5, m:5, display:'flex', flexDirection:'column',}}>
            <Grid container spacing={4}>
                <Grid item xs={4} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                    <Avatar src={props.avatar} sx={{width:140, height:170, borderRadius:5, m:4,}} variant="rounded"/>
                </Grid>
                <Grid item xs={8} sx={{mt:3}}>

                    <Grid container spacing={2}>
                        <Grid item xs={6} sx={{mt:0.5}}> 
                            <Typography variant="body" sx={{fontWeight:600, fontSize:24,}}>
                                {props.title}
                            </Typography> 
                        </Grid>
                        <Grid item xs={6} sx={{backgroundColor:'#747A99', borderBottomLeftRadius:50, mt:-3,}}>
                            <Box sx={{m:2}}>
                                <Typography variant="body" color="#FFFFFF" sx={{fontSize:16}}>
                                    {props.duration} Days Remaining
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid> 
                    <Box sx={{mt:1}}>
                        <Typography variant="body" sx={{fontSize:16, fontWeight:600,}}>{props.gender}</Typography>
                    </Box>
                    
                    <Box sx={{mb:2}}>
                        <Typography variant="body" sx={{fontSize:14,}}>Blaze Subscription Plan of <Span text="$ 50"/></Typography> 
                    </Box> 
                    <CustomButton variant='contained'>
                        <CircleIcon sx={{width:12, height:12, mt:0.2,}}/> 
                        &nbsp; Have you reviewed the investment Plan?
                    </CustomButton>                   
                    <Stack direction="row" spacing={1} sx={{ml:-1, mt:1}}>
                        <LinkButton sx={{color:'#000000'}}>View Details</LinkButton>
                        <LinkButton sx={{color:'#FFAE42'}}>Go to Chat</LinkButton>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
};