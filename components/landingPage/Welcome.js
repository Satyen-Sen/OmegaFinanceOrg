import React from "react";
import { Box, Typography, Grid, Button } from '@mui/material'; 
import { Player } from '@lottiefiles/react-lottie-player';
import TextAnimation from "./TextAnimation";

export default function Welcome() {

  const description1 = "Omega Finance Group is an expert stock market trading and coaching institution with a proven track record in offering highly effective stock market trading ideas & financial planning services to a broad spectrum of clients. After our inception back in 2017 as a venture for helping out newbie stock investors, we have offered numerous clients recommendations and ideas that helped bag millions.";
  const description2 = "We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.";
  
  return (
      <Box sx={{m:14}}>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="pr-lg-5">
              <Typography variant="h3" sx={{color:'#11193F', mb:4, fontSize:44,}}>Welcome to Omega Finance</Typography>
              <p className="text-muted mb-4 pb-2">{description1}</p>
              <Button variant="contained" href="https://omegafinancegroup.com/about-us/" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
                Explore More
              </Button>
            </div>
          </Grid>

          <Grid item xs={6}>
            <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_kuhijlvx.json" style={{ height: '400px', width: '400px' }}></Player>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Player autoplay loop src="https://assets5.lottiefiles.com/private_files/lf30_tcuqw7ib.json" style={{ height: '400px', width: '400px' }}></Player>
          </Grid>

          <Grid item xs={6}>
            <TextAnimation title="Learn & Invest in" listarray={["Stocks","Mutual Funds","Digital Gold","FDs"]} desc={description2}/>
            <Button variant="contained" sx={{textTransform:'none', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99', color:'#FFFFFF'},}}>
              Contact Us
            </Button> 
          </Grid>        
        </Grid>

      </Box> 
  ); 
};