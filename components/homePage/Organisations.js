import * as React from 'react';
import { Box, Typography } from '@mui/material';
import OrganisationCard from '../primary/OrganisationCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

const organisationDetails = [
    {id:"01", title:"Green Villa Organisation", rating:"5", avatar:"https://t4.ftcdn.net/jpg/03/36/74/97/360_F_336749776_JlC1FjERlhyl4OqgrZoon1XVvDHut2Q2.jpg"},
    {id:"02", title:"Ocean Valley Organisation", rating:"4", avatar:"https://t4.ftcdn.net/jpg/03/36/74/97/360_F_336749776_JlC1FjERlhyl4OqgrZoon1XVvDHut2Q2.jpg"},
    {id:"03", title:"Max Finance Organisation", rating:"3", avatar:"https://t4.ftcdn.net/jpg/03/36/74/97/360_F_336749776_JlC1FjERlhyl4OqgrZoon1XVvDHut2Q2.jpg"},
    {id:"04", title:"Prime Investors Group", rating:"5", avatar:"https://t4.ftcdn.net/jpg/03/36/74/97/360_F_336749776_JlC1FjERlhyl4OqgrZoon1XVvDHut2Q2.jpg"},
]

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
