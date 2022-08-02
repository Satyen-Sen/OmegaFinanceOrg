import * as React from 'react';
import { Card, Stack, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import stockAdvisors from '../../stockAdvisors.json';

const DetailsButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:120, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const TypeButton = styled(Button)({textTransform:'none', fontSize:12, borderRadius:20, fontFamily: 'poppins', width:224, backgroundColor:'#747A99', '&:hover': {backgroundColor:'#11193F',}});
const SubscribeButton = styled(Button)({textTransform:'none', fontSize:16, borderRadius:20, fontFamily: 'poppins', fontWeight:800, color:'#FDAA3C', borderColor:'#FDAA3C', '&:hover': {borderColor:'#FDAA3C', backgroundColor:'#FDDDB2',}});

let details = stockAdvisors.filter(stockAdvisors => stockAdvisors.category == "basic");


export default function OtherAdvisors() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'left', width:'100%', mt:12,}}>
            <Typography variant="body" color="#11193F" sx={{fontWeight:600, fontSize:30, mb:2,}}>
                Other Advisors in this Organisation
            </Typography> 
            <Box sx={{m:-5, mb:0,}}> 

                <Swiper slidesPerView={2} spaceBetween={-38} slidesPerGroup={2} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>   
                    {details.map(item => {
                        return (
                            <SwiperSlide>
                                
                                <Card key={item.id} sx={{borderRadius:6, m:5, display:'flex', justifyContent:'center', alignItems:'center',}}>
                                    <Box sx={{p:4}}>
                                        <Grid container spacing={16}>
                                            <Grid item xs={4} sx={{display:'flex', justifyContent:'flexStart', alignItems:'center',}}>
                                                <Avatar src={item.avatar} sx={{width:150, height:205, borderRadius:5,}} variant="rounded"/>
                                            </Grid>
                                        
                                            <Grid item xs={8}>
                                                <Typography variant="h5" sx={{mb:1, fontWeight:700,}}>{item.title}</Typography>

                                                <Stack spacing={1} direction="row" sx={{mb:1}}>
                                                    <DetailsButton variant="contained">{item.year} Years Exp</DetailsButton>
                                                    <DetailsButton variant="contained">{item.client}+ Clients</DetailsButton>
                                                </Stack>
                                                <TypeButton variant="contained" sx={{mb:2,}}>Crypto Advisor</TypeButton>

                                                <Typography variant="h6" color="text.secondary" sx={{fontWeight:600, fontSize:18, mt:1,}}>About the Investor</Typography> 
                                                <Typography variant="body2" color="text.secondary" sx={{mt:0}}>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting.  
                                                </Typography>      
                                            </Grid>
                                        </Grid>
                                        <Box sx={{m:4, mb:0}}>
                                            <SubscribeButton variant="outlined" sx={{width:'100%'}}> View Profile / Subscribe </SubscribeButton>                                            
                                        </Box>
                                    </Box>
                                </Card>

                            </SwiperSlide>
                        );
                    })}
                </Swiper>

            </Box>
        </Box>
    );
};
