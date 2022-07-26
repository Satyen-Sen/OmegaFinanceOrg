import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography } from '@mui/material';
import PremiumAdvisorCard from '../primary/PremiumAdvisorCard';

const cardArray = [
  {avatar:'https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq', title:'Jack Williams',  year:'4', client:'40', rating:'40', profile:'/profileDetails/profileDetails1',}, 
  {avatar:'https://www.stockvault.net//data/2009/06/09/109080/thumb16.jpg', title:'Daniel Brown',   year:'3', client:'30', rating:'35', profile:'/profileDetails/profileDetails2',}, 
  {avatar:'https://www.stockvault.net//data/2008/04/28/104979/thumb16.jpg', title:'Arun Patel',     year:'2', client:'35', rating:'30', profile:'/profileDetails/profileDetails3',}, 
];

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
            {cardArray.map((cardArray) => (
              <SwiperSlide> 
                <PremiumAdvisorCard key={cardArray.title} avatar={cardArray.avatar} title={cardArray.title} years={cardArray.year} client={cardArray.client} rating={cardArray.rating} profile={cardArray.profile}/>  
              </SwiperSlide>
            ))}
        </Swiper>

      </Box>
    </Box>
  );
};