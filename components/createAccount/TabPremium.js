import * as React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText, } from '@mui/material'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Listing(props) {
    return(
        <ListItem disablePadding>
            <ListItemIcon sx={{color:'#1BB56B', mr:-2,}}><CheckCircleIcon/></ListItemIcon>
            <ListItemText primary={<Typography variant='body'sx={{fontSize:14}}>{props.text}</Typography>}/>
        </ListItem>
    );
};

export default function TabPremium() {
    return(
        <Box sx={{mt:1, display:'flex', flexDirection:'column', alignItems:'center',}}>
            <Typography variant='body' align='center' sx={{fontSize:15, my:2, width:'85%',}}>
                Premium advisor will get many benifitis over basic advisors the most important benifits are provided below. 
            </Typography>

            <List>
                <Listing text='Profile will be shown at top before the basic advisors'/>
                <Listing text='Get more investors'/>
                <Listing text='Add unlimited numbers of subscription plan no limitation'/>
            </List>

            <Typography variant="body" color='#FDAA3C' sx={{fontWeight:600, fontSize:20, my:2,}}>
                $120 / Year
            </Typography>

            <Button variant='outlined' sx={{my:2, color:'#FDAA3C', borderColor:'#FDAA3C', borderRadius:2, width:150, textTransform:'none', fontFamily:'poppins', fontWeight:600, fontSize:16,}}>
                Buy Now
            </Button>
        </Box>
    );
};