import React, { useState, useEffect } from 'react';
import {Navbar} from 'reactstrap'; 
import Image from 'next/image';
import { Box, Container } from '@mui/material'; 
import Logo from '../../public/Logo.png'; 
import SettingsMenu from './SettingsMenu';

export default function Header() {

    useEffect(() => {window.addEventListener('scroll', handleScroll)});

    const [sticky, setSticky] = useState(false);
  
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
                <Container>
                    <Image src={Logo} alt="Omega Finance Group" width={80} height={40}/>
                    <Box sx={{ml:'95%', mt:-5}}>
                        <SettingsMenu/>
                    </Box>
                </Container>  
            </Navbar>
        </div>
    );
};