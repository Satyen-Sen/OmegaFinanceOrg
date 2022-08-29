import * as React from 'react';
import { Box, Typography, InputBase, IconButton, List, ListItem, Button, Badge, Avatar, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import organisationDetails from '../../data/organisationDetails.json';


function Listing(props) {

    const [invisible, setVisible] = React.useState(true);  
    const handleBadge = () => {setVisible(false)};

    return (
        <Badge overlap="circular" invisible={invisible} onClick={handleBadge} badgeContent={<CheckCircleRoundedIcon style={{color:'#FDAA3C'}}/>}>
            <Button sx={{textTransform:'none', color:'#707070', p:0, m:0,}}>         
                <ListItem sx={{m:1, p:0, width:300, boxShadow:3, borderRadius:2, borderColor:'#D3D3D3'}}>
                    <Box sx={{height:40, ml:1, mr:2,}}>
                        <Avatar src={props.logo} sx={{height:40, width:40,}}/>
                    </Box>
                    <Typography variant="body2" sx={{fontFamily:'poppins'}}>{props.title}</Typography>
                </ListItem>
            </Button> 
        </Badge>
    );
};

export default function Step2() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, height:380,}}>
            <Typography variant="body" sx={{fontSize:28, color:'#11193F',}}>Organisation</Typography>
            <Typography variant="body" sx={{m:2}} align='center'>Select the organisation that you belong to</Typography>

            <Box sx={{m:2, display:'flex', alignItems:'center', width:350, backgroundColor:'#E7EBF0', borderRadius:1,}}>                
                <IconButton type="button"><SearchIcon/></IconButton>
                <InputBase placeholder="Search Organisation"/>
            </Box>
            <Box>
                <List sx={{display:'flex', flexDirection:'column', alignItems:'center',}}>
                    {organisationDetails.map(item => {  
                        return (
                            <Box>
                                <Listing key={item.id} title={item.title} logo={item.avatar}/>
                            </Box>
                        );
                    })}
                </List>
            </Box>
        </Box>
    );
};