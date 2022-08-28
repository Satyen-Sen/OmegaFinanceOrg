import * as React from 'react';
import { Box, Typography, Link, Button, List, ListItem, ListItemIcon, ListItemText, } from '@mui/material'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


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
            <Typography variant='body' align='center' sx={{fontSize:16, m:2, width:'90%',}}>
                Premium advisor will get many benifitis over basic advisors the most important benifits are provided below. 
            </Typography>
            <List sx={{width:440}}>
                <Listing text='Profile will be shown at top before the basic advisors'/>
                <Listing text='Get more investors'/>
                <Listing text='Add unlimited numbers of subscription plan no limitation'/>
            </List>
            <Link href='/advisor/' sx={{mt:2, textDecoration:'none',}}>
                <Button variant='outlined' color='#FDAA3C' sx={{textTransform:'none', fontFamily:'poppins', fontWeight:600, fontSize:14,}}>
                    $120 / Year
                </Button> 
            </Link>
        </Box>
    );
}