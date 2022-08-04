import * as React from 'react';
import { Box, Typography } from '@mui/material'; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import userReviews from '../../userReviews.json';
import TestimonialsCard from '../primary/TestimonialsCard';

export default function Testimonials() {
    return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', p:4, mt:8, mb:8,}}>
            <Box sx={{width:'97%'}}> 

                <Box sx={{width:'50%', ml:6,}}>
                    <Typography variant="h4" sx={{color:'#11193F'}}>What People Say About Us</Typography>
                    <p className="text-muted mb-2 mt-2">We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
                </Box>

                <Swiper slidesPerView={3} spaceBetween={-40} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    {userReviews.map((userReviews) => (
                        <SwiperSlide> 
                            <TestimonialsCard key={userReviews.title} avatar={userReviews.avatar} title={userReviews.title} rating={userReviews.rating} position={userReviews.position}/>  
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};