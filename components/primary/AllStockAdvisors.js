import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, Stack, Avatar, Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DetailsButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:110, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const RepresentativeButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:229, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'capitalize', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});


function AllAdvisorCard() {
  return (
    <Card sx={{borderRadius:8, m:6, mt:4,}}>
        <Box sx={{p:4, pt:3,}}>
            <Grid container spacing={6}>
                <Grid item xs={4} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                    <Avatar src="https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq" sx={{width:150, height:190, borderRadius:6,}} variant="rounded"/>
                </Grid>
            
                <Grid item xs={8}>
                    <Typography variant="h5" sx={{mb:1, fontWeight:700,}}>Will Turner</Typography>

                    <Stack spacing={1} direction="row" sx={{mb:1,}}>
                        <DetailsButton variant="contained">3 Years Exp</DetailsButton>
                        <DetailsButton variant="contained">30+ Clients</DetailsButton>
                    </Stack>
                    <RepresentativeButton variant="contained" sx={{mb:2,}}>Investment Representative</RepresentativeButton>

                    <Typography variant="h6" color="text.secondary" sx={{fontWeight:600, fontSize:18,}}>About the Investor</Typography> 
                    <Typography variant="body2" color="text.secondary" sx={{mt:0}}>
                        Started two years ago with minimumm capital, is now an expert in trading.  
                    </Typography>      
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item xs={6}><SubscribeButton variant="outlined" sx={{width:'100%'}}> View Profile </SubscribeButton></Grid>
                <Grid item xs={6}><SubscribeButton variant="outlined" sx={{width:'100%'}}> Subscribe </SubscribeButton></Grid>
            </Grid>
        </Box>

    </Card>
  );
}

export default function AllStockAdvisors() {
  return (
    <Box sx={{p:4, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
      <Box sx={{width:'97%'}}>

        <Box sx={{width:'50%', ml:6, mt:4,}}>
          <Typography variant="h4" sx={{color:'#11193F'}}>All Stock Advisors</Typography>
          <p className="text-muted mb-4 mt-2 pb-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>

        <Swiper slidesPerView={2} spaceBetween={-44} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
        </Swiper>

      </Box>
    </Box>
  );
};