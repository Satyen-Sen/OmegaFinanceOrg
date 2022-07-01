import React, { useEffect, useState } from "react";
import { Container, Row, Col, } from 'reactstrap';
import Head from 'next/head';
import { Typography, Box, Button } from '@mui/material'; 
import { styled } from '@mui/material/styles';
import { Player } from '@lottiefiles/react-lottie-player';

function TextAnimation({title, listarray, desc,}) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        let i = (index + 1) % listarray.length;
        setIndex(i);
      }, 2000);
    }, [index]);

    return (
        <div>        
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            </Head>

            <Box sx={{m:2, mt:12, }}>
                <div className="left-title">
                    <Typography variant="h4" sx={{mb:2,}}>{title}&nbsp;</Typography> 
                    {listarray ? 
                        <Typography variant="h4" sx={{mb:2, color:'#1565C0',}} className="animate__animated animate__fadeInDown animate__slow animate__infinite"> 
                            {listarray[index]}
                        </Typography> 
                    : ""}
                </div>
                <p className="text-muted mb-4 pb-2">{desc}</p>
            </Box>
        </div>
    );
}

function Main() {

  const description = "We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.";
  
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}> 
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">Welcome to Omega Finance</h1>
              <p className="text-muted mb-4 pb-2">
                Omega Finance Group is an expert stock market trading and coaching institution with a proven track record in offering highly effective stock market trading ideas & financial planning services to a broad spectrum of clients. After our inception back in 2017 as a venture for helping out newbie stock investors, we have offered numerous clients recommendations and ideas that helped bag millions. 
              </p>
              <Button variant="contained" href="https://omegafinancegroup.com/about-us/" sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
                Explore More
              </Button>

            </div>
          </Col>
          <Col lg={6}> 
            <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_kuhijlvx.json" style={{ height: '400px', width: '400px' }}>
            </Player>
          </Col>  
        </Row>
        <Row className="align-items-center">
          <Col lg={6}> 
            <Player autoplay loop src="https://assets5.lottiefiles.com/private_files/lf30_tcuqw7ib.json" style={{ height: '400px', width: '400px' }}>
            </Player>
          </Col>
          <Col lg={6}> 
            <TextAnimation title="Invest in" listarray={["Stocks","Mutual Funds","Digital Gold","FDs"]} desc={description}/>
            <Button variant="contained" href="https://omegafinancegroup.com/contacts/" sx={{textTransform:'capitalize', fontFamily:'poppins', fontSize:14, height:36, width:150, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'}, ml:2,}}>
              Contact Us
            </Button>
          </Col>  
        </Row>
      </Container> 
    </section>
  ); 
}

export default Main;