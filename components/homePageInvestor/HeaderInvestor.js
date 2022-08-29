import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {styled} from '@mui/material/styles';
import { AppBar, Box, Toolbar, InputBase, Stack, } from '@mui/material'; 
import Logo from '../../public/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input':{padding:8, paddingLeft:45, fontWeight:600, fontFamily:'poppins', transition:theme.transitions.create('width'), [theme.breakpoints.up('sm')]:{width: '20ch', '&:focus':{width:'35ch'}},}
}));

export default function HeaderInvestor() {

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
                    <Box sx={{ml:15, display:'flex', alignItems:'center', border:2, borderColor:'#CCCCCC', borderRadius:2, backgroundColor:'#EEEEEE',}}>                           
                        <Box sx={{ml:1.5, position:'absolute',}}>
                            <SearchIcon sx={{color:'#808080'}}/>
                        </Box>
                        <StyledInputBase placeholder="Search Advisor"/>
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