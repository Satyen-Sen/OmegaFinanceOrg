import * as React from 'react';
import { Box, Typography, Link, Button, List, ListItem, ListItemIcon, ListItemText, } from '@mui/material'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


function ListingGreen(props) {
    return(
        <ListItem disablePadding>
            <ListItemIcon sx={{color:'#1BB56B', mr:-2,}}><CheckCircleIcon/></ListItemIcon>
            <ListItemText primary={<Typography variant='body'sx={{fontSize:14}}>{props.text}</Typography>}/>
        </ListItem>
    );
};

function ListingRed(props) {
    return(
        <ListItem disablePadding>
            <ListItemIcon sx={{color:'#EB3223', mr:-2,}}><CancelIcon/></ListItemIcon>
            <ListItemText primary={<Typography variant='body'sx={{fontSize:14}}>{props.text}</Typography>}/>
        </ListItem>
    );
};

export default function TabBasic() {
    return(
        <Box sx={{mt:1, display:'flex', flexDirection:'column', alignItems:'center',}}>
            <Typography variant='body' sx={{fontWeight:600, fontSize:16, m:2,}}>Benifits for Basic advisor</Typography>
            <List sx={{width:440}}>
                <ListingGreen text='Manage atmost 3 subscription plan with some limitatations'/>
                <ListingRed text='Profile will be shown at top before the basic advisors'/>
                <ListingRed text='Get more investors'/>
                <ListingRed text='Add unlimited numbers of subscription plan no limitation'/>
            </List>
            <Link href='/advisor/' sx={{mt:2, textDecoration:'none',}}>
                <Button variant='contained' sx={{textTransform:'none', fontFamily:'poppins', fontWeight:600, fontSize:14, backgroundColor:'#FDAA3C', '&:hover':{backgroundColor:'#FDDDB2', color:'#FFFFFF'},}}>
                    Continue
                </Button> 
            </Link>
        </Box>
    );
}