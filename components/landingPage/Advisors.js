import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardHeader, CardContent, Avatar, Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const CustomButton = styled(Button)({textTransform:'capitalize', fontSize:12, borderRadius:20, shadow:'none', fontFamily: 'poppins', fontWeight:400, width:105, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'capitalize', fontSize:16, borderRadius:20, shadow:'none', fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});



function AdvisorCard() {

  return (
    <Card sx={{Height:330, p:1, borderRadius:8, display:'Block'}}>
      <CardHeader 
        avatar={<Avatar alt="Remy Sharp" src="https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq" sx={{ width:98, height:120, borderRadius:6, }}/>} 
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

export default function Advisors() {
  return (
    <Box sx={{p:4, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
      
      <Box sx={{width:'90%'}}>
        <Box sx={{width:'50%'}}>
          <Typography variant="h4">Premium Advisors</Typography>
          <p className="text-muted mb-4 mt-2 pb-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>
        
        <Swiper slidesPerView={3} spaceBetween={15} slidesPerGroup={3} autoplay={{delay:3000, disableOnInteraction:false,}} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]} className="mySwiper">
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

        <Box sx={{width:'50%'}}>
          <Typography variant="h4">Premium Advisors</Typography>
          <p className="text-muted mb-4 mt-2 pb-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>

      </Box>

    </Box>
  );
};