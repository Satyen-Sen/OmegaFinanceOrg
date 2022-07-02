import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardHeader, CardContent, Stack, Avatar, Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const CustomButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:104, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'capitalize', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});

const DetailsButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:110, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const RepresentativeButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:240, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});

function AdvisorCard() {

  return (
    <Card sx={{borderRadius:8, m:6, '& hover':{boxShadow:3,}}}>
      <CardHeader 
        avatar={<Avatar src="https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq" sx={{ width:90, height:120, borderRadius:6, }}/>} 
        title={<Typography variant="h5" sx={{mb:1, ml:1, fontWeight:700,}}>Jack Williams</Typography>} 
        subheader={
          <Grid container spacing={1}>
            <Grid item xs={6}>  <CustomButton variant="contained">3 Years Exp</CustomButton>  </Grid>
            <Grid item xs={6}>  <CustomButton variant="contained">40+ Clients</CustomButton>  </Grid>
            <Grid item xs={6}>  <CustomButton variant="contained" startIcon={<VerifiedIcon/>}>Verified</CustomButton>  </Grid>
            <Grid item xs={6}>  <CustomButton variant="contained">20+ Rating</CustomButton>  </Grid>
          </Grid>
        }
      /> 
      <CardContent>
        <Typography variant="h6" color="text.secondary" sx={{fontWeight:700}}>Investment representative</Typography>
        <Typography variant="h7">About Advisor</Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
          We at Omega Finance Group, focus on providing the best financial planning services to our clients for their investment.
        </Typography>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <SubscribeButton variant="outlined" sx={{mt:4, mb:1,}}>View Profile / Subscribe</SubscribeButton>
        </Box>
      </CardContent>
    </Card>
  );
}

function AllAdvisorCard() {
  return (
    <Card sx={{width:'65%', borderRadius:8, m:6, p:2, '& hover':{boxShadow:3,}}}>
      <Grid container spacing={1}>
        <Grid item xs={3} sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
          <Avatar src="https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq" sx={{width:160, height:160, borderRadius:6,}} variant="rounded"/>
        </Grid>
        
        <Grid item xs={9}>
          <Typography variant="h5" sx={{mb:1, fontWeight:700,}}>Will Turner</Typography>
          <Stack spacing={1} direction="row" sx={{mb:2,}}>
            <DetailsButton variant="contained">3 Years Exp</DetailsButton>
            <DetailsButton variant="contained">30+ Clients</DetailsButton>
            <RepresentativeButton variant="contained">Investment Representative</RepresentativeButton>
          </Stack>
          <Typography variant="h6" color="text.secondary" sx={{fontWeight:700}}>About The Investor</Typography> 
          <Typography variant="body2" color="text.secondary" sx={{mt:1}}>
            started just a few years ago will minimumm capital, absolutely no experience, is earning millions everyday.  
          </Typography>      
        </Grid>
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', mb:2,}}>
          <Stack spacing={2} direction="row>
            <SubscribeButton variant="outlined">View Profile</SubscribeButton>
            <SubscribeButton variant="outlined">Subscribe</SubscribeButton>
          </Stack> 

        </Box>

      </Grid>
    </Card>
  );
}

export default function Advisors() {
  return (
    <Box sx={{p:4, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
      <Box sx={{width:'97%'}}>

        <Box sx={{width:'50%', ml:6,}}>
          <Typography variant="h4">Premium Advisors</Typography>
          <p className="text-muted mb-2 mt-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>
        
        <Swiper slidesPerView={3} spaceBetween={-46} slidesPerGroup={3} autoplay={{delay:3000, disableOnInteraction:false,}} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]}>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AdvisorCard/>  </SwiperSlide>
        </Swiper>

        <Box sx={{width:'50%', ml:6, mt:12,}}>
          <Typography variant="h4">All Stock Advisors</Typography>
          <p className="text-muted mb-4 mt-2 pb-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>

        <Swiper slidesPerView={1} spaceBetween={0} slidesPerGroup={1} autoplay={{delay:3000, disableOnInteraction:false,}} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]}>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
          <SwiperSlide> <AllAdvisorCard/>  </SwiperSlide>
        </Swiper>

      </Box>
    </Box>
  );
};