// import React from 'react';
// import { Container, Row, Col } from "reactstrap";


// const Footer = () => {
//   const links = [
//     { id : 1, title : "Feature",
//       child : [
//           { title : "LOREM IPSUM", link : "/" },
//           { title : "LOREM IPSUM", link : "/" },
//           { title : "LOREM IPSUM", link : "/" },
//           { title : "LOREM IPSUM", link : "/" }
//       ]
//     },
//     { id : 2, title : "About Us",
//       child : [
//           { title : "Contact Us", link : "/" },
//           { title : "FAQs", link : "/" },
//           { title : "Privacy Policy", link : "/" },
//       ]
//     },
//   ];
  
//   return (
//     <section className="footer section">
//       <Container>
//         <Row>
//           <Col lg={4}>
//               <div className="mb-4">
//                 <p className="text-muted mt-4 mb-2">email@email.com</p>
//                 <h6 className="text-muted font-weight-normal">+99 1234-5678-9</h6>
//               </div>
//           </Col>
//           <Col lg={8}>
//             <Row>
//               {
//                 links.map((link, key) =>
//                   <Col key={key} md={4}>
//                     <h6 className="text-dark mb-3">{link.title}</h6>
//                     <ul className="list-unstyled company-sub-menu">
//                       {
//                         link.child.map((fLink, key) =>
//                           <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
//                         )
//                       }
//                     </ul>
//                   </Col>
//                 )
//               }
              
//               <Col md={4}>
//                 <h6 className="text-dark mb-3">Our Address</h6>
//                 <p className="text-muted f-14">1234 Lorem Ipsum dummy text, 12345</p>
//                 <h6 className="text-muted pb-2">Email: email@email.com</h6>
//                 <ul className="list-unstyled footer-social-list mt-4">
//                   <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
//                   <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
//                   <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
//                 </ul>
//               </Col>
//             </Row>
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col md={12}>
//             <div className="text-center text-muted">
//               <p className="mb-0 f-15">2020 © Name. Design by Name</p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Footer;


import * as React from 'react';
import { Grid } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          xs5
        </Grid>
        <Grid item xs={3}>
        xs3
        </Grid>
        <Grid item xs={4}>
        xs4
        </Grid>
        <Grid item xs={4}>
        xs4
        </Grid>
      </Grid>
      <div className="footer__inner">
        
        <div className="footer__col1">
          <img
            src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/logo-light-groww.1815ad63.svg"
            alt=""
          />
          <div className="footer__address">
            1st Floor, Proms Complex, SBI Colony 1A Koramangala, 560034
          </div>
          <div className="footer__contact">
            <h4 className="footer__contactline">Contact Us</h4> 
            <div className="footer__socialicons"> 
              <img
                className="footer__socialicon"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/fb_icon_groww.1c94e937.svg"
                alt=""
              />
              <img
                className="footer__socialicon"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/twitter_icon_groww.4cb988f6.svg"
                alt=""
              />
              <img
                className="footer__socialicon"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/yt_icon_groww.ec96b677.svg"
                alt=""
              />
              <img
                className="footer__socialicon"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/instagram_icon_groww.0454c1a2.svg"
                alt=""
              />
              <img
                className="footer__socialicon"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/linkedin_icon_groww.b15f8240.svg"
                alt=""
              />
              <img
                className="footer__socialicon"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/telegram_icon_groww.f6524497.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__col2">
          <h1 className="footer__heading">GROWW</h1>
          <div className="footer__list">
            <a className="footer__item" href="/">
              About Us
            </a>
            <a className="footer__item" href="/">
              AMC Mutual Funds
            </a>
            <a className="footer__item" href="/">
              Pricing
            </a>
            <a className="footer__item" href="/">
              Groww Q&A
            </a>
            <a className="footer__item" href="/">
              Blog
            </a>
            <a className="footer__item" href="/">
              Media & Press
            </a>
            <a className="footer__item" href="/">
              Help and Suppourt
            </a>
          </div>
        </div>
        <div className="footer__col3">
          <h1 className="footer__heading">EXPLORE</h1>
          <div className="footer__list">
            <a className="footer__item" href="/">
              Mutual Funds
            </a>
            <a className="footer__item" href="/">
              Stocks
            </a>
            <a className="footer__item" href="/">
              NFO
            </a>
            <a className="footer__item" href="/">
              Mutual Funds Categories
            </a>
            <a className="footer__item" href="/">
              US stocks
            </a>
            <a className="footer__item" href="/">
              Gold
            </a>
            <a className="footer__item" href="/">
              ETFs
            </a>
          </div>
        </div>
        <div className="footer__col4">
          <h1 className="footer__heading">RESOURCES</h1>
          <div className="footer__list">
            <a className="footer__item" href="/">
              Mutual Fund Beginners
            </a>
            <a className="footer__item" href="/">
              Learn Stock Market
            </a>
            <a className="footer__item" href="/">
              Calculators
            </a>
            <a className="footer__item" href="/">
              Glossary
            </a>
            <a className="footer__item" href="/">
              Compare Funds
            </a>
            <a className="footer__item" href="/">
              Switch to Groww
            </a>
            <a className="footer__item" href="/">
              Download Forms
            </a>
          </div>
        </div>
      </div>
      <div className="footer__inner2">
        <div className="footer__div" ></div>
        <div className="footer__inner22" >
        <h4 className="footer__copyright" >ⓒ2020-2025 Groww Clone. All,rights reserved, Built with ❤️ by Likhith Garapati</h4>
        <div className="footer__download" >
            <img className="footer__downloadicon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/app-store-logo.060773ea.svg" alt="" />
            <img className="footer__downloadicon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/google-play-badge.0547a72f.svg" alt="" />
        </div>
        </div>
      </div>
    </div>
);
}

export default Footer;
