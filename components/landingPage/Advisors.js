import * as React from 'react';
import { Box, Typography } from '@mui/material';
import AdvisorCard from '../primary/AdvisorCard';
import AdvisorCardWide from '../primary/AdvisorCardWide';
import stockAdvisors from '../../data/stockAdvisors.json';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

let premiumDetails = stockAdvisors.filter(stockAdvisors => stockAdvisors.category == "premium");
let basicDetails = stockAdvisors.filter(stockAdvisors => stockAdvisors.category == "basic");

export default function Advisors() {
    return (
        <Box sx={{p:4, pt:8, backgroundColor:'#F6F6F7', display:'flex', alignItems:'center', justifyContent:'center',}}>
            <Box sx={{width:'97%'}}>

                <Box sx={{width:'50%', ml:6,}}>
                    <Typography variant="h4" color="#11193F">
                        Premium Advisors
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.
                    </Typography>
                </Box>
              
                <Swiper slidesPerView={3} spaceBetween={-46} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    {premiumDetails.map(item => {
                        return (
                            <SwiperSlide> 
                                <AdvisorCard key={item.id} avatar={item.avatar} title={item.title} year={item.year} client={item.client} rating={item.rating} link={`/profile-details/${item.slug}`}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            
                <Box sx={{width:'50%', ml:6, mt:12,}}>
                    <Typography variant="h4" color="#11193F">
                        All Stock Advisors
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        Get Insights and helpful suggestions from our premium and verified investors for effective shares management and financial planning.
                    </Typography>
                </Box>

                <Swiper slidesPerView={2} spaceBetween={-44} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>   
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