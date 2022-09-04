import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AdvisorCardWide from '../primary/AdvisorCardWide';
import stockAdvisors from '../../data/stockAdvisors.json';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

let basicDetails = stockAdvisors.filter(stockAdvisors => stockAdvisors.category == "basic");

export default function OtherAdvisors() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', mt:12,}}>

            <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                Other Advisors in this Organisation
            </Typography> 

            <Box sx={{m:-5, mb:0,}}> 
                <Swiper slidesPerView={2} spaceBetween={-38} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>   
                    {basicDetails.map(item => {
                        return (
                            <SwiperSlide>
                                <AdvisorCardWide key={item.id} avatar={item.avatar} title={item.title} year={item.year} client={item.client} link={`/profile-details/${item.slug}`}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

        </Box>
    );
};