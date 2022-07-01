import React, { useState, useEffect } from 'react'; 
import {Navbar, NavbarBrand,} from 'reactstrap'; 
import { Button, Container, Stack } from '@mui/material';  
import LoginDialog from './LoginDialog'; 

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
          <NavbarBrand href="/">LOGO</NavbarBrand>
          <Stack direction="row" spacing={2} sx={{display:'flex', alignContent:'center',}}>
            <LoginDialog/> 
            <Button variant="contained" sx={{textTransform:'capitalize', width:250, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
              Login as Administrator
            </Button>
          </Stack>
        </Container>  
      </Navbar>
    </div>
  );
}

export default Header;