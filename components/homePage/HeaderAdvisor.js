import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AppBar, Avatar, Box, Toolbar, IconButton, Badge, InputBase, Dialog, Stack, } from '@mui/material'; 
import Logo from '../../public/Logo.png';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';


function ProfileButton() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    return(
        <div>
            <IconButton onClick={handleClickOpen}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
            </IconButton>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>
                <Box sx={{p:4}}>
                    <h1>ProfileButton</h1>
                    <h1>ProfileButton</h1>
                </Box>
            </Dialog>
        </div>
    );
}; 

function NotificationButton() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    return(
        <div>
            <IconButton onClick={handleClickOpen}>
                <Badge badgeContent={12} color="error"><NotificationsIcon sx={{width:35, height:35,}}/></Badge>
            </IconButton>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>
                <Box sx={{p:4}}>
                    <h1>NotificationButton</h1>
                    <h1>NotificationButton</h1>
                </Box>
            </Dialog>
        </div>
    );
}; 

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
                        <NotificationButton/>
                        <ProfileButton/>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
