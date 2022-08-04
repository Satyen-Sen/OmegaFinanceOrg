import * as React from 'react';
import { Box, Typography } from '@mui/material'; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import userReviews from '../../userReviews.json';
import TestimonialsCard from '../primary/TestimonialsCard';

export default function Ratings() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', mt:12,}}>
            <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                Recent Ratings
            </Typography>
            <Box sx={{m:-5, mb:0,}}>
                <Swiper slidesPerView={2} spaceBetween={-40} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
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
