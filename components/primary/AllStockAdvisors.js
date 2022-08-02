import * as React from 'react';
import Link from 'next/link'; 
import { Card, Stack, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import stockAdvisors from '../../stockAdvisors.json';

let details = stockAdvisors.filter(stockAdvisors => stockAdvisors.category == "basic");

const DetailsButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:125, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const RepresentativeButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:259, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'none', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});


export default function AllStockAdvisors() {
    return (
        <Box sx={{p:4, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
            <Box sx={{width:'97%'}}> 

                <Box sx={{width:'50%', ml:6, mt:4,}}>
                    <Typography variant="h4" color="#11193F">
                        All Stock Advisors
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.
                    </Typography>
                </Box>

                <Swiper slidesPerView={2} spaceBetween={-44} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>   
                    {details.map(item => {
                        return (
                            <SwiperSlide> 
                                <Card key={item.id} sx={{borderRadius:6, m:6, display:'flex', justifyContent:'center', alignItems:'center',}}>
                                    <Box sx={{p:4, width:'96%',}}>
                                        <Grid container spacing={12}>
                                            <Grid item xs={4} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                                                <Avatar src={item.avatar} sx={{width:150, height:205, borderRadius:5,}} variant="rounded"/>
                                            </Grid>
                                        
                                            <Grid item xs={8}>
                                                <Typography variant="h5" sx={{mb:1, fontWeight:700,}}>{item.title}</Typography>

                                                <Stack spacing={1} direction="row" sx={{mb:1,}}>
                                                    <DetailsButton variant="contained">{item.year} Years Exp</DetailsButton>
                                                    <DetailsButton variant="contained">{item.client}+ Clients</DetailsButton>
                                                </Stack>
                                                <RepresentativeButton variant="contained" sx={{mb:2,}}>Investment Representative</RepresentativeButton>

                                                <Typography variant="h6" color="text.secondary" sx={{fontWeight:600, fontSize:18, mt:1,}}>About the Investor</Typography> 
                                                <Typography variant="body2" color="text.secondary" sx={{mt:0}}>
                                                    Started two years ago with minimum capital, is now an expert in trading.  
                                                </Typography>      
                                            </Grid>
                                        </Grid>
                                        <Box sx={{m:4, mb:0}}>
                                            <Link href={`/profile-details/${item.slug}`}>
                                                <SubscribeButton variant="outlined" sx={{width:'100%'}}> View Profile / Subscribe </SubscribeButton>
                                            </Link>                                                
                                        </Box>
                                    </Box>
                                </Card>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </Box>
        </Box>
    )
}
