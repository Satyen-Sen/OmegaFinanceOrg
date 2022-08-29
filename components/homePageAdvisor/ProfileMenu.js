import * as React from 'react';
import { Typography, Avatar, Menu, MenuItem, ListItemIcon, IconButton, } from '@mui/material'; 
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import MailIcon from '@mui/icons-material/Mail';
import Logout from '@mui/icons-material/Logout';


function MenuList(props) {
    return(
        <MenuItem onClick={props.action}>
            <ListItemIcon>{props.icon}</ListItemIcon>
            <Typography variant="body" sx={{fontSize:16}}>{props.title}</Typography>
        </MenuItem>
    );
};

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {setAnchorEl(event.currentTarget)};
    const handleClose = () => {setAnchorEl(null)};

    return(
        <div>
            <IconButton onClick={handleClick}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
            </IconButton>
            <Menu 
                anchorEl={anchorEl} open={open} onClose={handleClose} 
                anchorOrigin={{vertical:'bottom', horizontal:'right',}} 
                transformOrigin={{vertical:'top', horizontal:'right',}}
            >
                <MenuList action={handleClose} title='Account Details'
                    icon={<Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" sx={{width:25, height:25,}}/>}
                />
                <MenuList action={handleClose} title='Subscription Plans' icon={<SubscriptionsIcon/>}/>
                <MenuList action={handleClose} title='Bank Details' icon={<AccountBalanceIcon/>}/>
                <MenuList action={handleClose} title='Payouts' icon={<PaymentsIcon/>}/>
                <MenuList action={handleClose} title='Contact Us' icon={<MailIcon/>}/>
                <MenuList action={handleClose} title='Logout' icon={<Logout/>}/>
            </Menu>
        </div>
    );
};