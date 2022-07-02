import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card, CardHeader, CardContent, Avatar, Box, Typography } from '@mui/material'; 

function AdvisorCard() {

  return (
    <Card sx={{Height:330, m:2, p:2, borderRadius:10, display:'Block'}}>
      <CardHeader 
        avatar={<Avatar alt="Remy Sharp" src="https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq" sx={{ width:120, height:150, borderRadius:8, }}/>} 
        title={<Typography variant="h6">Jack Williams</Typography>} 
        subheader={"test"}/> 
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Advisors() {
  return (
    <Box sx={{p:2, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
      <Box sx={{width:'90%'}}>
        <Box sx={{m:2, width:'50%'}}>
          <Typography variant="h4">Premium Advisors</Typography>
          <p className="text-muted mb-4 mt-2 pb-2">
            Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.  
          </p>
        </Box>

        <Swiper slidesPerView={3} spaceBetween={15} slidesPerGroup={3} autoplay={{delay:2500, disableOnInteraction:false,}} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]} className="mySwiper">
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