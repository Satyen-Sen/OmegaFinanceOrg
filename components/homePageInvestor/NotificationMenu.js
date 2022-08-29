import * as React from 'react';
import { Box, Typography, Badge, Menu, MenuItem, List, ListItem, ListItemText, ListItemIcon, Collapse, Button, IconButton, } from '@mui/material'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CancelIcon from '@mui/icons-material/Cancel';
import { TransitionGroup } from 'react-transition-group';


const NameList = [ 'Jacob Williams', 'Peter Smith', 'Kevin Brian', 'Andrew Scott', 'Mark Hamil', ];

function NotificationList({ item, handleRemoveNotification }) {
    return (
        <Box sx={{borderRadius:2, boxShadow:3, my:0.5, mx:1, width:400, backgroundColor:'#F6F6F7'}}>
            <ListItem secondaryAction={
                <IconButton edge="end" title="Delete" onClick={() => handleRemoveNotification(item)}>
                    <CancelIcon sx={{color:'#11193F'}}/>
                </IconButton>
            }>
                <ListItemIcon><NotificationsActiveIcon sx={{color:'#11193F'}}/></ListItemIcon>
                <ListItemText 
                    primary={
                        <Typography variant="body" sx={{fontSize:14}}>
                            New Message from <b>{item}</b> <br/>
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body" sx={{fontSize:12, color:'#808080'}}>
                            10 minutes ago
                        </Typography>
                    }
                />
            </ListItem>
        </Box>
    );
};

export default function NotificationMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notify, setNotify] = React.useState(NameList);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {setAnchorEl(event.currentTarget)};
    const handleClose = () => {setAnchorEl(null)};

    const handleRemoveNotification = (item) => {
        setNotify((prev) => [...prev.filter((i) => i !== item)]);
    };

    return(
        <div>
            <IconButton onClick={handleClick}>
                <Badge badgeContent={NameList.length} color="error">
                    <NotificationsIcon sx={{width:35, height:35,}}/>
                </Badge>
            </IconButton>
            <Menu
                anchorEl={anchorEl} open={open} onClose={handleClose} 
                anchorOrigin={{vertical:'bottom', horizontal:'right',}} 
                transformOrigin={{vertical:'top', horizontal:'right',}}
            >
                <List>
                    <TransitionGroup>
                        {notify.map((item) => (
                            <Collapse key={item}>
                                {NotificationList({ item, handleRemoveNotification })}
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
            </Menu>
        </div>
    );
};