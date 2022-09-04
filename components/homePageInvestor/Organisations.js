import * as React from 'react';
import { Box, Typography } from '@mui/material';
import OrganisationCard from '../primary/OrganisationCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import organisationDetails from '../../data/organisationDetails.json';

export default function Organisations() {
    return (
        <Box sx={{p:10, pb:8, backgroundColor:'#F6F6F7',}}>
            <Typography variant="h4" color="#11193F">Organisations</Typography>
            <Box sx={{m:-5, mt:-3,}}> 
                <Swiper slidesPerView={2} spaceBetween={-38} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    {organisationDetails.map(item => {  
                        return (
                            <SwiperSlide>
                                <OrganisationCard key={item.id} avatar={item.avatar} title={item.title} rating={item.rating}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>
        </Box>
    );
};