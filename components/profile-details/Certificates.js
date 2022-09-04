import * as React from 'react';
import Image from 'next/Image';
import { Card, Stack, Box, Typography } from '@mui/material';
import certificate from '../../public/images/certificate.webp';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

function CertificateCard() {
    return (
        <Box sx={{ p:2, m:5, mt:0,}}>
            <Image src={certificate} width={200} height={141}/>
        </Box>
    );
};

export default function Certificates() {
    return (
        <Card sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'left', width:'100%', mt:8, borderRadius:4,}}>
            <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, m:7, mb:2,}}>
                Certificates
            </Typography> 
            <Box>
                <Swiper slidesPerView={3} spaceBetween={0} slidesPerGroup={1} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    <SwiperSlide>
                        <CertificateCard/>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <CertificateCard/>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <CertificateCard/>
                    </SwiperSlide> 
                </Swiper>
            </Box> 
        </Card>
    );
};