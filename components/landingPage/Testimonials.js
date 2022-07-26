import * as React from 'react';
import { Box, Typography } from '@mui/material'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from '../primary/TestimonialCard';

const cardArray = [
  {avatar:'https://qph.cf2.quoracdn.net/main-qimg-54267778c97f83c195ad7b0efb64aaa9-lq', title:'Jim Morty', rating:5, position:'Product Manager, Amazon',}, 
  {avatar:'https://www.stockvault.net//data/2009/06/09/109080/thumb16.jpg', title:'Brad Pitt', rating:4, position:'Senior Developer, Quora',}, 
  {avatar:'https://www.stockvault.net//data/2008/04/28/104979/thumb16.jpg', title:'Arun Patel', rating:5, position:'Executive Manager, Metaverse',}, 
];

export default function Testimonials() {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', p:4, mt:8, mb:8,}}>
      <Box sx={{width:'97%'}}> 

        <Box sx={{width:'50%', ml:6,}}>
          <Typography variant="h4" sx={{color:'#11193F'}}>What People Say About Us</Typography>
          <p className="text-muted mb-2 mt-2">We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
        </Box>

        <Swiper slidesPerView={3} spaceBetween={-40} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
          {cardArray.map((cardArray) => (
              <SwiperSlide> 
                <TestimonialCard key={cardArray.title} avatar={cardArray.avatar} title={cardArray.title} rating={cardArray.rating} position={cardArray.position} rating={cardArray.rating}/>  
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
};