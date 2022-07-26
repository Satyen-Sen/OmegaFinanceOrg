import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography } from '@mui/material';
import AdvisorCard from '../primary/AdvisorCard';

const cardArray = [
  {avatar:'https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq', title:'Will Turner',  year:'3', client:'30', profile:'/profileDetails/profileDetails4',}, 
  {avatar:'https://www.stockvault.net//data/2009/06/09/109080/thumb16.jpg', title:'John Smith',   year:'4', client:'40', profile:'/profileDetails/profileDetails5',}, 
];


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
          {cardArray.map((cardArray) => (
              <SwiperSlide> 
                <AdvisorCard key={cardArray.title} avatar={cardArray.avatar} title={cardArray.title} years={cardArray.year} client={cardArray.client} profile={cardArray.profile}/>  
              </SwiperSlide>
            ))}
        </Swiper>

      </Box>
    </Box>
  );
};