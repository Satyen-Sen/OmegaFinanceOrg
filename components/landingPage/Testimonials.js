import * as React from 'react';
import { Card, CardHeader, CardContent, Avatar, Box, Rating, Typography } from '@mui/material'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function TestimonialCard() {

  return (
    <Card sx={{borderRadius:2, boxShadow:3, m:6,}}>
      <CardHeader
        avatar={<Avatar src="https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg" sx={{ width:60, height:60,}}/>} 
        subheader={<Rating name="size-large" defaultValue={5} size="large" />}
      />
      <CardContent>
        <Box>
          <Typography variant="body" color="text.secondary">It is a great platform for investment. Interactive and clean User Interface. Features like creating your own portfolio are great..I started investing in Mutual Funds.</Typography>
        </Box>
        <Box sx={{mt:3}}>
          <Typography variant="h7" sx={{fontWeight:700}}>John Doe</Typography>
        </Box>
        <Box>
          <Typography variant="body" sx={{fontSize:14}}>Product Manager, Google</Typography>
        </Box>  
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', p:4, mt:8,}}>
      <Box sx={{width:'97%'}}> 

        <Box sx={{width:'50%', ml:6,}}>
          <Typography variant="h4">What People Say About Us</Typography>
          <p className="text-muted mb-2 mt-2">We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
        </Box>

        <Swiper slidesPerView={3} spaceBetween={-40} slidesPerGroup={3} autoplay={{delay:3000, disableOnInteraction:false,}} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Autoplay, Keyboard, Pagination, Navigation]}>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
          <SwiperSlide> <TestimonialCard/>  </SwiperSlide>
        </Swiper>

      </Box>
    </Box>
  );
};