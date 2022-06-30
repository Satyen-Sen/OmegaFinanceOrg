import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { Container, Row, Col, } from 'reactstrap';
import { Button } from '@mui/material';
import main from '../../public/images/main.png';

const CustomButton = styled(Button)({textTransform:'capitalize', fontFamily:'poppins', fontSize:16, height:40, width:150,
    '&:hover': {boxShadow:3, textColor:'#FFFFFF', color:'#FFFFFF'},
  }); 

function Main() {
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
              <CustomButton variant="contained" href="https://omegafinancegroup.com/about-us/">
                Explore More
              </CustomButton>
            </div>
          </Col>
          <Col lg={6}> 
              <Image src={main} alt="main img"/>
          </Col>  
        </Row>
      </Container> 
    </section>
  ); 
}

export default Main;