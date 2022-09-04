import * as React from 'react';
import { Card, Grid, Button, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";


function InvestmentPlansCard (props) {
    return (
        <Card sx={{borderRadius:6, width:460, p:2, m:5, mt:0, backgroundColor:'#F6F6F7',}}>
            <Grid container spacing={2} sx={{width:'110%', height:'15%',}}>
                <Grid item xs={8}> 
                    <Box sx={{mt:0.6}}> 
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:24, m:2,}}>
                            Investment {props.type}
                        </Typography> 
                    </Box> 
                </Grid>
                <Grid item xs={4} sx={{backgroundColor:'#F8E3E3', borderBottomLeftRadius:50,}}>
                    <Box sx={{mt:1}}>
                        <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:20, m:2,}}>
                            {props.duration}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
            <Typography variant="h4" color="#FDAA3C" sx={{fontWeight:600, ml:6, mb:2, fontFamily:'poppins',}}>
                {props.price}
            </Typography>

            <Typography variant="h6" sx={{fontSize:18, ml:6,}}><CheckCircleIcon/>&nbsp; Feature 01</Typography>
            <Typography variant="h6" sx={{fontSize:18, ml:6,}}><CheckCircleIcon/>&nbsp; Feature 02</Typography>
            <Typography variant="h6" sx={{fontSize:18, ml:6,}}><CheckCircleIcon/>&nbsp; Feature 03</Typography>
            
            <Box sx={{m:2, mt:3,}}>
                <Typography variant="body" sx={{fontWeight:600, fontSize:18,}}>
                    About the Subscription
                </Typography>
            </Box>
            <Box sx={{m:2, mt:-1, textAlign:'justify',}}>
                <Typography variant="body" sx={{fontSize:14}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography> 
            </Box>
            <Box sx={{width:'100%', display:'flex', justifyContent:'center', mt:4, mb:4,}}>
                <Button variant="contained" sx={{backgroundColor:'#FDAA3C', textTransform:'none', fontSize:16, fontWeight:600, fontFamily:'poppins', width:'70%', height:50, borderRadius:8, '&:hover':{backgroundColor:'#FEDFB5', color:'#FDAA3C',}}}>
                    Subscribe
                </Button>
            </Box>
        </Card>
    );
};

export default function SubscriptionPlans() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', mt:12,}}>
            <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                Subscription Plans
            </Typography>
            <Box sx={{ml:-5, mr:-5,}}>
                <Swiper slidesPerView={2} spaceBetween={-32} slidesPerGroup={1} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
                    <SwiperSlide>
                        <InvestmentPlansCard type="Basics" duration="3 Months" price="$199"/>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <InvestmentPlansCard type="Advanced" duration="6 Months" price="$349"/>
                    </SwiperSlide> 
                    <SwiperSlide>  
                        <InvestmentPlansCard type="Premium" duration="12 Months" price="$849"/>
                    </SwiperSlide> 
                </Swiper>
            </Box> 
        </Box>
    );
};