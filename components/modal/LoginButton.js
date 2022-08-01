import * as React from 'react';
import Image from 'next/image';
import { Card, CardActionArea, Link, Button, IconButton, Dialog, Stack, Box, Typography, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import LogoImage from '../../public/LogoHorizontal.png';
import User1 from '../../public/user1.png';
import User2 from '../../public/user2.png';

const detail1 = "Learn from experts about stocks, investment plans and many more.";
const detail2 = "Make investment recommendations or conducts securities analysis for investors";


function Span(props){
    return(
        <Typography sx={{color:'#FFAE42', fontWeight:600,}}>&nbsp;{props.text}&nbsp;</Typography>
    );
}; 

function UserCard(props){
    return(
        <Card elevation={8} sx={{boxShadow:10, borderRadius:3,}}>
            <CardActionArea href="#" sx={{p:2, display:'flex', flexDirection:'column', alignItems:'center',}}>
                <Image src={props.image} width={110} height={125}/>
                <Typography variant="body" sx={{fontSize:20, fontWeight:600, color:'#11193F', m:1,}}>
                    Stock {props.title}
                </Typography>
                <Typography variant="body" sx={{fontSize:12, color:'#4C5DAE', mb:1,}}>  
                    {props.details}
                </Typography>
            </CardActionArea>
        </Card> 
    );
};

export default function LoginButton() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'capitalize', width:170, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
                Login/Register
            </Button>
            <Dialog open={open} onClose={handleClose} PaperProps={{style:{borderRadius:16}}}>
                <IconButton aria-label="close" onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4,}}>
                    <Image src={LogoImage} width={285} height={53}/>
                    <Typography variant="body" sx={{mt:6, fontSize:18, fontWeight:600,}}>
                        Select your domain of expertise 
                    </Typography>
                    <Typography variant="body" sx={{fontSize:14, display:'flex',}}>
                        By proceeding, You agree to our<Span text="T&C"/>and<Span text="Privacy Policy."/>
                    </Typography>   
                    <Stack spacing={2} direction="row" sx={{mt:2}}>
                        <UserCard title="Investor" details={detail1} image={User1}/>
                        <UserCard title="Advisor" details={detail2} image={User2}/>
                    </Stack> 
                </Box>
            </Dialog>
        </div>
    );
};