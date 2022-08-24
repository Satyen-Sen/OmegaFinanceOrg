import * as React from 'react';
import { Button, Menu, MenuItem, ListItemIcon, Avatar, } from '@mui/material'; 
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function SettingsMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null); 
    const open = Boolean(anchorEl); 
    const handleClick = (event) => {setAnchorEl(event.currentTarget)};
    const handleClose = () => {setAnchorEl(null)};

    return (
        <div>
            <Button variant="text" onClick={handleClick}>
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}> 

                <MenuItem onClick={handleClose}>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    My Account
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon><SettingsIcon/></ListItemIcon>
                    Settings
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon><Logout/></ListItemIcon>
                    Logout
                </MenuItem>

            </Menu> 
        </div>
    );
};