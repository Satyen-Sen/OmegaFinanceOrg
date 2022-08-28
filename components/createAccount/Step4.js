import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Badge, TextField, InputAdornment, Radio, RadioGroup, FormControlLabel, List, ListItem, } from '@mui/material'; 
import MuiPhoneNumber from "material-ui-phone-number";
import Profile from '../../public/CreateAccount/04_Profile.png';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


function InputField(props) {
    return(
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', m:2,}}>
            <Typography variant="body" sx={{fontSize:14}}>
                {props.text}
            </Typography>
            <TextField variant="outlined" size="small"
                sx={{'& legend':{display:'none'}, '& fieldset':{top:0},}} 
                InputProps = {{ 
                    startAdornment: (<InputAdornment position="start">{props.icon}</InputAdornment>),
                    endAdornment: (<InputAdornment position="end">{props.icon2}</InputAdornment>),
                }}
            />
        </Box>
    );
};

export default function Step4() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', my:2,}}>
            <Typography variant="body" sx={{fontSize:28, color:'#11193F',}}>Registration</Typography>
            <Typography variant="body" sx={{mb:2}} align='center'>Please fill this form to proceed ahead.</Typography>

            <Box sx={{m:1}}>
                <Badge overlap="circular" anchorOrigin={{vertical:'bottom', horizontal:'right',}} badgeContent={
                    <Box sx={{height:30, width:30, borderRadius:20, boxShadow:5, display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#A8E3C7',}}>
                        <EditRoundedIcon sx={{color:'#42855B'}}/>
                    </Box>
                }>
                    <Box sx={{height:100, width:100, borderRadius:50, boxShadow:5,}}>
                        <Image src={Profile}/>
                    </Box>
                </Badge>
            </Box>

            <Box sx={{width:350, m:1,}}>
                <InputField text='Full Name' icon={<AccountCircleIcon sx={{color:'#11193F'}}/>}/>

                <Box sx={{m:2}}>
                    <Typography variant="body" sx={{fontSize:14}}>Gender</Typography>
                    <RadioGroup row sx={{border:1, borderRadius:1, borderColor:'#C0C0C0',}}>
                        <FormControlLabel value="male" control={<Radio/>} sx={{px:2}} label={<Typography variant="body" sx={{fontSize:14}}>Male</Typography>}/>
                        <FormControlLabel value="female" control={<Radio/>} sx={{px:2}} label={<Typography variant="body" sx={{fontSize:14}}>Female</Typography>}/>
                    </RadioGroup>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', m:2,}}>
                    <Typography variant="body" sx={{fontSize:14}}>Phone Number</Typography>
                    <MuiPhoneNumber defaultCountry={"ca"} variant="outlined" size="small" sx={{'& legend':{display:'none'}, '& fieldset':{top:0},}}/>
                </Box>

                <InputField text='Email Id' icon={<EmailIcon  sx={{color:'#11193F'}}/>}/>
                <InputField text='Address' icon={<PlaceIcon sx={{color:'#11193F'}}/>} icon2={<MyLocationIcon fontSize='inherit'/>}/>
                <InputField text='Years of Experience' icon={<WorkHistoryIcon sx={{color:'#11193F'}}/>}/>
            </Box>
        </Box>      
    );
};