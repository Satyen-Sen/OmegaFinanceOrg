import * as React from 'react';
import { Card, CardHeader, CardContent, Avatar, Rating, Box,Typography } from '@mui/material'; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

function TestimonialCard(props) {
    return (
        <Card sx={{borderRadius:2, boxShadow:3, m:6,}}>
            <CardHeader
                avatar={<Avatar src={props.avatar} sx={{ width:60, height:60,}}/>} 
                subheader={<Rating defaultValue={props.rating} size="large" />}
            />
            <CardContent>
                <Box>
                    <Typography variant="body" color="text.secondary">
                        It is a great platform for investment. Interactive and clean User Interface. Features like creating your own portfolio are great..I started investing in Mutual Funds.
                    </Typography>
                </Box>
                <Box sx={{mt:3}}>
                    <Typography variant="h7" sx={{fontWeight:700}}>{props.title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body" sx={{fontSize:14}}>{props.position}</Typography>
                </Box>  
            </CardContent>
        </Card>
    );
}


// Stock Profile Image used here for Demo
const ProfileImg ="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

// User Testimonials/Reviews Details Array = reviewDetails 
const reviewDetails = [
  {avatar:ProfileImg, title:'Jerry Johnson', rating:5, position:'Retail Manager, Walmart',}, 
  {avatar:ProfileImg, title:'Peter Smith', rating:4, position:'Executive Incharge, CVS Health',}, 
  {avatar:ProfileImg, title:'Richard Joe', rating:3, position:'Technical Executive, AT&T',}, 
  {avatar:ProfileImg, title:'Joseph Thompson', rating:4, position:'Senior Developer, Metaverse',}, 
  {avatar:ProfileImg, title:'Walter Lewis', rating:5, position:'Area Manager, Ford Motors',}, 
  {avatar:ProfileImg, title:'Carl Harris', rating:4, position:'Supply Incharge, Comcast Telecom',}, 
  {avatar:ProfileImg, title:'Andrew Scott', rating:3, position:'Executive Engineer, Philips',}, 
  {avatar:ProfileImg, title:'Kevin Brian', rating:4, position:'Branch Manager, AMC Bank',}, 
  {avatar:ProfileImg, title:'Frank Taylor', rating:5, position:'Product Designer, General Motors',}, 
];

export default function Testimonials() {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', p:4, mt:8, mb:8,}}>
      <Box sx={{width:'97%'}}> 

        <Box sx={{width:'50%', ml:6,}}>
          <Typography variant="h4" sx={{color:'#11193F'}}>What People Say About Us</Typography>
          <p className="text-muted mb-2 mt-2">We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
        </Box>

        <Swiper slidesPerView={3} spaceBetween={-40} slidesPerGroup={3} loop={true} keyboard={{enabled: true,}} loopFillGroupWithBlank={true} pagination={{clickable: true,}} navigation={true} modules={[Keyboard, Pagination, Navigation]}>
          {reviewDetails.map((reviewDetails) => (
              <SwiperSlide> 
                <TestimonialCard key={reviewDetails.title} avatar={reviewDetails.avatar} title={reviewDetails.title} rating={reviewDetails.rating} position={reviewDetails.position} rating={reviewDetails.rating}/>  
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
};