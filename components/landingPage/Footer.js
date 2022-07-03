import * as React from 'react';
import {Navbar, NavbarBrand,} from 'reactstrap'; 
import { Button, Container, Stack } from '@mui/material';  

function Footer() {
  return (
    <div class="FooterSection">
      <div class="row">
          <div class="GrowwCompanyDetails">
            <NavbarBrand href="/">LOGO</NavbarBrand>
              <p class="FooterSection_Address1">No.11, 2nd floor, 80 FT Road</p>
              <p class="FooterSection_Address2">4th Block, S.T Bed, Koramangala</p>
              <p class="FooterSection_Address3">Bengaluru – 560034</p>
              
              <div class="FooterSection_ContactSocialMedia">
                  <div class="ContactUs">Contact Us</div>
                  <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/fb_icon_groww.1c94e937.svg"/></a>
                  <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/twitter_icon_groww.4cb988f6.svg"/></a>
                  <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/yt_icon_groww.ec96b677.svg"/></a>
                  <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/instagram_icon_groww.0454c1a2.svg"/></a>
                  <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/linkedin_icon_groww.b15f8240.svg"/></a>
                  <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/telegram_icon_groww.f6524497.svg"/></a>
              </div>
          </div>

          <div class="FooterSection_Product">
              <h2>PRODUCTS</h2>
              <div class="FooterSection_ProductList">Stocks</div>
              <div class="FooterSection_ProductList">Futures & Options</div>
              <div class="FooterSection_ProductList">Mutual Funds</div>
              <div class="FooterSection_ProductList">Fixed Deposit</div>
              <div class="FooterSection_ProductList">US Stocks</div>
          </div>

          <div class="FooterSection_Groww">
              <h2>GROWW</h2>
              <div class="FooterSection_GrowwList">About Us</div>
              <div class="FooterSection_GrowwList">Pricing</div>
              <div class="FooterSection_GrowwList">Blog</div>
              <div class="FooterSection_GrowwList">Media & Press</div>
              <div class="FooterSection_GrowwList">Carrees</div>
              <div class="FooterSection_GrowwList">Help & Support</div>
          </div>
          <div class="FooterSection_QuickLink">
              <h2>QUICK LINKS</h2>
              <div class="FooterSection_QuickLinkList">AMC Mutual Funds</div>
              <div class="FooterSection_QuickLinkList">Calculators</div>
              <div class="FooterSection_QuickLinkList">Glossary</div>
              <div class="FooterSection_QuickLinkList">Open Demat Account</div>
              <div class="FooterSection_QuickLinkList">Groww Digest</div>
              <div class="FooterSection_QuickLinkList">Groww Academy</div>
              <div class="FooterSection_QuickLinkList">Sitemap</div>
          </div>
      </div>


      <div class="horizontalLine"></div>

      <div class="GrowwFooterlast">
          <div class="GrowwCopyRight">
              © 2016-2022 Groww. All right reserved, Built with 💖 in india
          </div>
          <div class="GrowwApplicationDownload">
              <a href="#"><img src="./applicationAvailable/app-store-logo.060773ea.svg"/></a>
              <a href="#"><img src="./applicationAvailable/google-play-badge.0547a72f.svg"/></a>
          </div>
      </div>
    </div>
);
}

export default Footer;
