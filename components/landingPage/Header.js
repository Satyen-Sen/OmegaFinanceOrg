import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {Navbar} from 'reactstrap'; 
import { Box, Container, Stack } from '@mui/material'; 
import Logo from '../../public/Logo.png'; 
import LoginButton from '../modal/LoginButton';
import InvestorLogin from '../modal/InvestorLogin';
import AdvisorLogin from '../modal/AdvisorLogin';

import LoginDialog from '../login/LoginDialog';
import LoginAsAdmin from '../login/LoginAsAdmin'; 
import CreateAccount from '../createAccount/CreateAccount';


const Header = () => {

  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true); 
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light>

        <Container sx={{diaply:'flex'}}>
            <Image src={Logo} alt="Omega Finance Group" width={80} height={40}/>
          <Box sx={{ml:'62%', mt:-5,}}>
            <Stack direction="row" spacing={1} sx={{display:'flex', alignContent:'flex-end',}}>
              <LoginButton handleInvestorLoginOpen={handleClickOpen} handleAdvisorLoginOpen={handleClickOpen}/>
              <InvestorLogin open={open} handleClose={handleClose}/>
              <AdvisorLogin open={open} handleClose={handleClose}/>
              <LoginAsAdmin/>
              {/* <CreateAccount open={open} handleClose = {handleClose}/>
              <LoginDialog handleCreateAccountOpen = {handleClickOpen}/>  */}
            </Stack>
          </Box>
        </Container>  
      </Navbar>
    </div>
  );
}

export default Header;