// export default function UserReviews() {
//   return (
//     <div className="homeusers">
//       <div className="homeusers__heading">
//         <h2 className="homeusers__title">From Our Users</h2>
//         <hr className="homeusers__linesegment"></hr>
//         <div className="homeusers__articles">
//           <Card 
//             className="home__indarticles"
//             title="Helps you get Started"
//             name="Abhinav Sohni"
//             description="I started investing because of groww. All this while I was losing money in my bank account."
//             designation="Engineer at Tixdo"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };



import * as React from 'react';
import { Card, CardHeader, CardContent, Avatar, Box, Typography } from '@mui/material'; 

function ReviewCard() {

  return (
    <Card sx={{Width:345, m:2,}}>
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <Box sx={{m:2, p:2, backgroundColor:'#F6F6F7',}}>
      <h1 className="mb-4 font-weight-normal line-height-1_4">What People Say About Us</h1>
      <p className="text-muted mb-4 pb-2">We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
      
      <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',}}>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>  
      </Box>
    </Box>
  );
};