import React, { useRef, useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router'; 
import { Card, CardHeader, CardContent, Divider, Stack, Avatar, Grid, Slide, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DiamondTwoToneIcon from '@mui/icons-material/DiamondTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

// import stockAdvisors from '../../stockAdvisors.json';
// let details = stockAdvisors.filter(stockAdvisors => stockAdvisors.id == {profileId});

function InvestmentPlansCard (props) {
    return (
        <Card sx={{borderRadius:6, width:400, p:2, m:2, backgroundColor:'#FCFCFC',}}>
            <Grid container spacing={2} sx={{width:'110%', mt:-2}}>
                <Grid item xs={8}>
                    <Typography variant="h5" color="#11193F" sx={{fontWeight:700, m:2, fontFamily:'poppins',}}>
                        Investment {props.type}
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{backgroundColor:'#F8E3E3', borderBottomLeftRadius:50,}}>
                    <Typography variant="h6" color="#11193F" sx={{fontWeight:700, m:2, ml:4, fontFamily:'poppins', width:100,}}>
                        {props.duration}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="h4" color="#FDAA3C" sx={{fontWeight:700, ml:4, fontFamily:'poppins',}}>
                {props.price}
            </Typography>
            <Box sx={{m:2}}>
                <Typography variant="h6" sx={{fontSize:18, ml:2,}}>
                    <CheckCircleIcon/> Feature 01 
                </Typography>
                <Typography variant="h6" sx={{fontSize:18, ml:2,}}>
                    <CheckCircleIcon/> Feature 02
                </Typography>
                <Typography variant="h6" sx={{fontSize:18, ml:2,}}>
                    <CheckCircleIcon/> Feature 03
                </Typography>
            </Box>
            <Box sx={{m:2}}>
                <Typography variant="h6" sx={{fontWeight:600, fontFamily:'poppins',}}>
                    About the Subscription
                </Typography>
                <Typography variant="h6" sx={{fontSize:14, ml:2, fontFamily:'poppins',}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
            </Box>
        </Card>
    );
};

export default function ProfileIdDetails() {

    const router = useRouter();
    const profileId = router.query.profileId;

    return (
        <div>
            <Head>
                <title>Omega Finance | Profile Details</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>

            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4, backgroundColor:'#F5F5F5'}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4, backgroundColor:'#FFFFFF', width:'80%', borderRadius:6,}}>

                    <Card key={profileId} sx={{borderRadius:6, p:2, width:'70%',}}>
                        <CardHeader 
                            avatar={<Avatar src="https://www.stockvault.net//data/2009/06/09/109080/thumb16.jpg" sx={{width:150, height:150, borderRadius:4,}}/>} 
                            title={<Typography variant="body" color="#11193F" sx={{fontWeight:700, m:2, fontSize:40,}}>John Williams</Typography>} 
                            subheader={
                                <Stack spacing={2} direction="row" sx={{m:2}}>
                                    <Typography variant="h4" color="#1BB56B" sx={{fontSize:18, borderRadius:2, p:0.5, pt:1, fontWeight:600, width:160, fontFamily:'poppins', backgroundColor:'#B4E7CE',}}>
                                        <StarIcon sx={{mb:0.5, ml:0.5, height:25, width:25,}}/> 5 Star Rated
                                    </Typography>
                                    <Typography variant="h4" color="#FDAA3C" sx={{fontSize:18, borderRadius:2, p:0.5, pt:1, fontWeight:600, width:160, fontFamily:'poppins', backgroundColor:'#FFF3B3',}}>
                                        <DiamondTwoToneIcon sx={{mb:0.5, ml:0.5, height:25, width:25,}}/> Premium
                                    </Typography>
                                </Stack>
                            }
                        />
                        <Divider sx={{m:2,}}/> 
                        <CardContent>
                            <Stack spacing={2} direction="row">
                                <Card sx={{width:180, boxShadow:3, borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', p:2,}}>
                                    <Typography variant="h5" sx={{fontWeight:600, fontFamily:'poppins',}}>120</Typography>
                                    <Typography variant="body">Consultations</Typography>
                                </Card>
                                <Card sx={{width:180, boxShadow:3, borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', p:2,}}>
                                    <Typography variant="h5" sx={{fontWeight:600, fontFamily:'poppins',}}>250+</Typography>
                                    <Typography variant="body">Ratings</Typography>
                                </Card>
                                <Card sx={{width:180, boxShadow:3, borderRadius:4, display:'flex', flexDirection:'column', alignItems:'center', p:2,}}>
                                    <Typography variant="h5" sx={{fontWeight:600, fontFamily:'poppins',}}>5 Years</Typography>
                                    <Typography variant="body">Experience</Typography>
                                </Card>
                            </Stack>
                        </CardContent>
                    </Card> 

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', m:4,}}>
                        <Typography variant="h4" color="#11193F" sx={{fontWeight:700, m:2, fontFamily:'poppins',}}>
                            Subscription Plans
                        </Typography>     
                        <h6>Profile Details for {profileId}</h6>      
                    </Box>
                    <Box>
                        <Swiper slidesPerView={3} spaceBetween={10} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                            <SwiperSlide> 
                                <InvestmentPlansCard type="Basics" duration="3 Month" price="$149"/>
                                <InvestmentPlansCard type="Advanced" duration="6 Month" price="$249"/>
                                <InvestmentPlansCard type="Advanced" duration="6 Month" price="$249"/>
                            </SwiperSlide>
                        </Swiper>

                    </Box>
                </Box>    
            </Box>
        </div>

    );
};
