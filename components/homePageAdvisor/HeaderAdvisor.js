import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, AppBar, Toolbar, Stack, } from '@mui/material'; 
import Logo from '../../public/Logo.png';
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';


export default function HeaderAdvisor() {

    const [sticky, setSticky] = useState(false);
    useEffect(() => {window.addEventListener('scroll', handleScroll)});
    const handleScroll = () => {
        if (window.scrollY > 90) {setSticky(true)} else if (window.scrollY < 90) {setSticky(false)}
    }

    return (
        <Box className={`header${sticky ? ' sticky':''}`} sx={{flexGrow:1, width:'100%',}}>
            <AppBar sx={{backgroundColor:'#FFFFFF'}}>
                <Toolbar>
                    <Box sx={{ml:7, mt:1,}}>
                        <Image src={Logo} alt="Omega Finance Group" width={85} height={40}/>
                    </Box>           
                    <Stack direction="row" spacing={2} sx={{display:'flex', alignContent:'flex-end', position:'absolute', right:55}}>
                        <NotificationMenu/>
                        <ProfileMenu/>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};