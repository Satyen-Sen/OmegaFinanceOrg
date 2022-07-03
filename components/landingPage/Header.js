import React, { useState, useEffect } from 'react'; 
import {Navbar, NavbarBrand,} from 'reactstrap'; 
import { Container, Stack } from '@mui/material';  
import LoginDialog from '../login/LoginDialog'; 
import LoginAsAdmin from '../login/LoginAsAdmin'; 

const Header = () => {

  const [sticky, setSticky] = useState(false);
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

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light>

        <Container className='topBar'>
          <img src="https://creativedebjani.in/omega_finance/wp-content/uploads/2020/07/Logo.png" width="80" height="40" alt="Omega Finance Group"/>
          <Stack direction="row" spacing={2} sx={{display:'flex', alignContent:'center',}}>
            <LoginDialog/> 
            <LoginAsAdmin/>
          </Stack>
        </Container>  
      </Navbar>
    </div>
  );
}

export default Header;