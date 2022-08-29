import * as React from 'react';
import { Box, Typography } from '@mui/material';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import consultations from '../../data/consultations.json';
import ConsultationCard from '../primary/ConsultationCard';


export default function Consultations() {
    return (
        <Box>
            <Box sx={{p:10, pb:4, backgroundColor:'#F6F6F7',}}>
                <Typography variant="h4" color="#11193F">Ongoing Consultations</Typography>
                <Box sx={{m:-5, mt:-3,}}> 
                    <Swiper slidesPerView={2} spaceBetween={-38} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                        {consultations.map(item => {  
                            return (
                            <SwiperSlide>
                                <ConsultationCard key={item.id} avatar={item.avatar} title={item.title} duration={item.duration} gender={item.gender}/>
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Box>
            </Box>
        
            <Box sx={{p:10, pb:4,}}>
                <Typography variant="h4" color="#11193F">Past Consultations</Typography>
                <Box sx={{m:-5, mt:-3,}}> 
                    <Swiper slidesPerView={2} spaceBetween={-38} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                        {consultations.map(item => {  
                            return (
                            <SwiperSlide>
                                <ConsultationCard key={item.id} avatar={item.avatar} title={item.title} duration={item.duration} gender={item.gender}/>
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
};
