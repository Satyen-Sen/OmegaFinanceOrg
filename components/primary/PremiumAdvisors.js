import * as React from 'react';
import Link from 'next/link'; 
import { Card, CardHeader, CardContent, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import stockAdvisors from '../../stockAdvisors.json';

let details = stockAdvisors.filter(stockAdvisors => stockAdvisors.category == "premium");

const CustomButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:104, backgroundColor:'#747A99', '&:hover':{backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'none', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', width:'100%', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});

export default function PremiumAdvisors() {
    return (
        <Box sx={{p:4, pt:8, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
            <Box sx={{width:'97%'}}>

                <Box sx={{width:'50%', ml:6,}}>
                    <Typography variant="h4" color="#11193F">
                        Premium Advisors
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.
                    </Typography>
                </Box>
              
                <Swiper slidesPerView={3} spaceBetween={-46} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    {details.map(item => {
                        return (

                            <SwiperSlide> 
                                <Card key={item.id} sx={{borderRadius:6, m:6,}}>
                                    <CardHeader 
                                        avatar={<Avatar src={item.avatar} sx={{width:90, height:120, borderRadius:4,}}/>} 
                                        title={<Typography variant="h5" color="#11193F" sx={{mb:1, ml:1, fontWeight:700,}}>{item.title}</Typography>} 
                                        subheader={
                                            <Grid container spacing={1}>
                                                <Grid item xs={6}>  <CustomButton variant="contained">{item.year} Years Exp</CustomButton>  </Grid>
                                                <Grid item xs={6}>  <CustomButton variant="contained">{item.client}+ Clients</CustomButton>  </Grid>
                                                <Grid item xs={6}>  <CustomButton variant="contained" startIcon={<VerifiedIcon/>}>Verified</CustomButton>  </Grid>
                                                <Grid item xs={6}>  <CustomButton variant="contained">{item.rating}+ Rating</CustomButton>  </Grid>
                                            </Grid>
                                        }
                                    /> 
                                    <CardContent sx={{p:4}}>
                                        <Typography variant="h6" color="text.secondary" sx={{fontWeight:700}}>Investment representative</Typography>
                                        <Typography variant="h7">About Advisor</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
                                            We at Omega Finance Group, focus on providing the best financial planning services to our clients for their investment.
                                        </Typography>
                                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            <Link href={`/profile-details/${item.slug}`}>
                                                <SubscribeButton variant="outlined" sx={{mt:4, mb:1,}}>
                                                    View Profile / Subscribe
                                                </SubscribeButton>
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                            
                        );
                    })}
                </Swiper>

            </Box>
        </Box>
    );
};