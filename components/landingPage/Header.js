import React, { useState, useEffect } from 'react'; 
import {Navbar} from 'reactstrap'; 
import { Box, Container, Stack } from '@mui/material';  
import LoginDialog from '../login/LoginDialog'; 
import LoginAsAdmin from '../login/LoginAsAdmin'; 
import EnterOTP from '../login/EnterOTP';
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
            <img src="https://omegafinancegroup.com/wp-content/uploads/2020/07/Logo.png" width="80" height="40" alt="Omega Finance Group"/>
          <Box sx={{ml:'62%', mt:-5,}}>
            <Stack direction="row" spacing={2} sx={{display:'flex', alignContent:'flex-end',}}>
              <EnterOTP open = {open} handleClose = {handleClose}/>
              <CreateAccount open = {open} handleClose = {handleClose}/>
              <LoginDialog handleCreateAccountOpen = {handleClickOpen}/> 
              <LoginAsAdmin/>
            </Stack>
          </Box>
        </Container>  
      </Navbar>
    </div>
  );
}

export default Header;