import * as React from 'react';
import { Card, Box, Typography } from '@mui/material';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

function ConsultancyCard (props) {
    return(
        <Card sx={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FDAA3C', boxShadow:3, borderRadius:4, p:2, m:5, mt:0,}}>
            <Typography variant="body" color='#FFFFFF' sx={{fontSize:18, fontFamily:'poppins',}}>
                {props.title}
            </Typography>
        </Card>
    );
};

export default function ConsultancyCards() {
    return (
        <Card sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', mt:6, p:4, pt:8, pb:8, borderRadius:4,}}>
            <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:4,}}>
                Types of Consultancy Provided
            </Typography> 
            <Box sx={{ml:-5, mr:-5,}}>
                <Swiper slidesPerView={3} spaceBetween={-40} slidesPerGroup={1} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    <SwiperSlide>
                        <ConsultancyCard title="Personal Banking Advisor"/>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <ConsultancyCard title="Investment Representative"/>
                    </SwiperSlide> 
                    <SwiperSlide>  
                        <ConsultancyCard title="Crypto Advisor"/>
                    </SwiperSlide> 
                </Swiper>
            </Box> 
        </Card>
    );
};