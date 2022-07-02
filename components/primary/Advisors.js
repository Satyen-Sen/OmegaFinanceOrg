import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardHeader, CardContent, Avatar, Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const CustomButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:104, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'capitalize', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', width:'100%', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});

function AdvisorCard() {

  return (
    <Card sx={{borderRadius:8, m:6,}}>
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
      <CardContent sx={{p:4}}>
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

export default function PremiumAdvisors() {
  return (
    <Box sx={{p:4, pt:8, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
      <Box sx={{width:'97%'}}>

        <Box sx={{width:'50%', ml:6,}}>
          <Typography variant="h4" sx={{color:'#11193F'}}>Premium Advisors</Typography>
          <p className="text-muted mb-2 mt-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>
        
        <Swiper slidesPerView={3} spaceBetween={-46} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
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
      </Box>
    </Box>
  );
};