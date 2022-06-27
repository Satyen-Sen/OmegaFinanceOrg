import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Main = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Omega Finance</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Welcome to Omega Finance <span className="text-primary font-weight-medium">Name</span></h1>
              <p className="text-muted mb-4 pb-2">
                Omega Finance Group is an expert stock market trading and coaching institution with a proven track record in offering highly effective stock market trading ideas & financial planning services to a broad spectrum of clients. After our inception back in 2017 as a venture for helping out newbie stock investors, we have offered numerous clients recommendations and ideas that helped bag millions. 
              </p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Main;