import * as React from 'react';
import Head from 'next/head';
import Image from 'next/Image';
import { Card, Stack, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DiamondTwoToneIcon from '@mui/icons-material/DiamondTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import certificate from '../../public/images/certificate.webp';

function InvestmentPlansCard (props) {
    return (
        <Card sx={{borderRadius:6, width:460, p:2, backgroundColor:'#F6F6F7',}}>
            <Grid container spacing={2} sx={{width:'110%', height:'15%',}}>
                <Grid item xs={8}>
                    <Box sx={{mt:0.6}}> 
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:24, m:2,}}>
                            Investment {props.type}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{backgroundColor:'#F8E3E3', borderBottomLeftRadius:50,}}>
                    <Box sx={{mt:1}}>
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:20, m:2,}}>
                            {props.duration}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
            <Typography variant="h4" color="#FDAA3C" sx={{fontWeight:600, ml:6, mb:2, fontFamily:'poppins',}}>
                {props.price}
            </Typography>

            <Typography variant="h6" sx={{fontSize:18, ml:6,}}><CheckCircleIcon/>&nbsp; Feature 01</Typography>
            <Typography variant="h6" sx={{fontSize:18, ml:6,}}><CheckCircleIcon/>&nbsp; Feature 02</Typography>
            <Typography variant="h6" sx={{fontSize:18, ml:6,}}><CheckCircleIcon/>&nbsp; Feature 03</Typography>
            
            <Box sx={{m:2, mt:3,}}>
                <Typography variant="body" sx={{fontWeight:600, fontSize:18,}}>
                    About the Subscription
                </Typography>
            </Box>
            <Box sx={{m:2, mt:-1, textAlign:'justify',}}>
                <Typography variant="body" sx={{fontSize:14}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography> 
            </Box>
            <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:4, mb:4,}}>
                <Button variant="contained" sx={{backgroundColor:'#FDAA3C', textTransform:'Capitalize', fontSize:16, fontWeight:600, fontFamily:'poppins', width:'70%', height:50, borderRadius:8, '&:hover':{backgroundColor:'#FEDFB5', color:'#FDAA3C',}}}>
                    Subscribe
                </Button>
            </Box>
        </Card>
    );
};

function ConsultancyCard (props) {
    return(
        <Card sx={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FDAA3C', boxShadow:3, borderRadius:6, p:3,}}>
            <Typography variant="body" color='#FFFFFF' sx={{fontSize:18, fontFamily:'poppins',}}>
                {props.title}
            </Typography>
        </Card>
    );
};


export default function Index() {
    return (
        <div>
            <Head>
                <title>Omega Finance | Details Page</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>

            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4, backgroundColor:'#F5F5F5'}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:6, backgroundColor:'#FFFFFF', width:1000, borderRadius:6,}}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', mt:8,}}>
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                            Types of Consultancy Provided
                        </Typography> 
                        <Stack spacing={2} direction="row">
                            <ConsultancyCard title="Personal Banking Advisor"/>
                            <ConsultancyCard title="Investment Representative"/>
                            <ConsultancyCard title="Crypto Advisor"/>
                        </Stack>    
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'left', width:'100%', mt:8,}}>
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                            Certificates
                        </Typography> 
                        <Stack spacing={4} direction="row">
                            <Card sx={{boxShadow:3, height:140,}}>
                                <Image src={certificate} width={200} height={141}/>
                            </Card>
                            <Card sx={{boxShadow:3, height:140,}}>
                                <Image src={certificate} width={200} height={141}/>
                            </Card>
                            <Card sx={{boxShadow:3, height:140,}}>
                                <Image src={certificate} width={200} height={141}/>
                            </Card>
                            <Card sx={{boxShadow:3, height:140,}}>
                                <Image src={certificate} width={200} height={141}/>
                            </Card>
                        </Stack>    
                    </Box>

                    <Box>
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                            Rating
                        </Typography> 
                        
                    </Box>
                </Box>    
            </Box>
        </div>

    );
};
