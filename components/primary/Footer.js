import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Stack } from '@mui/material'; 
import Logo from '../../public/Logo.png'; 

function Footer() {
  return (
    <Box sx={{backgroundColor:'#1E2232', height:485, color:'#FFFFFF', pt:8, pb:12,}}>
      <Box sx={{display:'flex', flexDirection:'row', ml:12, mr:12,}}>
        
          <Box sx={{width:400, mt:1,}}>
            <Image src={Logo} alt="Omega Finance Group" width={140} height={70}/>
            <p className="mt-4 mb-1"> 59 West, 46th Street, New York,</p>
            <p className="mb-4"> NY-10036, United States.</p>
            <Typography variant="body" sx={{textDecoration:'underline'}}>Contact Us</Typography>
            
            <Box sx={{mt:1, ml:-0.5,}}> 
                <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/fbIcon.svg"/></a>
                <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/twitterIcon.svg"/></a>
                <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/ytIcon.svg"/></a>
                <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/instaIcon.svg"/></a>
                <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/linkedInIcon.svg"/></a>
                <a href="#" class="SocialMedia_icon"><img src="./SocialMediaIcon/telegramIcon.svg"/></a>
            </Box>
          </Box>

          <Box sx={{width:280}}>
              <Typography variant="h6">PRODUCTS</Typography> 
              <p className="mt-4 mb-1">Fixed Deposits</p>
              <p className="mb-1">Stock Market</p>
              <p className="mb-1">US Stocks</p>
              <p className="mb-1">Mutual Funds</p>
              <p className="mb-1">Futures & Options</p>
          </Box>

          <Box sx={{width:300}}>
              <Typography variant="h6">OMEGA FINANCE</Typography> 
              <p className="mt-4 mb-1">Contact Us</p>
              <p className="mb-1">Blogs</p>
              <p className="mb-1">Pricing</p>
              <p className="mb-1">Privacy Policy</p>
              <p className="mb-1">Help & Support</p>
              <p className="mb-1">Terms & Conditions</p>
          </Box>

          <Box sx={{width:250}}>
              <Typography variant="h6">QUICK LINKS</Typography> 
              <p className="mt-4 mb-1">Open Demat Account</p>
              <p className="mb-1">AMC Mutual Funds</p>
              <p className="mb-1">Performance</p>
              <p className="mb-1">Glossary</p>
              <p className="mb-1">Sitemap</p>
              <p className="mb-1">Calculators</p>
              <p className="mb-1">Omega Academy</p>
          </Box>
      </Box>

      <div className="horizontalLine"></div>

      <Box sx={{ml:12, mr:12, display:'flex',}}>
        <Typography variant="body" sx={{fontSize:14, ml:2,}}>© 2022-2023 Omega Finance Group. All right reserved, Built with 💖 in India.</Typography>   
          <Stack direction="row" spacing={4} sx={{ml:40, mt:-1,}}>
              <a href="#"><img src="./AppStore/apple.svg"/></a>  
              <a href="#"><img src="./AppStore/play.svg"/></a>
          </Stack>
      </Box>
    </Box>
  );
}

export default Footer;