import * as React from 'react';
import Image from 'next/image';
import { Card, Button, IconButton, Dialog, Stack, Box, Typography, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import LogoImage from '../../public/LogoHorizontal.png';
import User1 from '../../public/user1.png';
import User2 from '../../public/user2.png';

const detail1 = "Learn from experts about stocks, investment plans & many more.";
const detail2 = "Make recommendations or conduct analysis for investors";


function Span(props){
    return(
        <Typography sx={{color:'#FFAE42', fontWeight:600,}}>&nbsp;{props.text}&nbsp;</Typography>
    );
}; 

function UserCard(props){
    return(
        <Card elevation={8} sx={{boxShadow:10, borderRadius:3, width:260,}}>
            <Button sx={{p:2, textTransform:'none', display:'flex', flexDirection:'column', alignItems:'center',}} onClick={props.link}>
                <Image src={props.image} width={110} height={125}/>
                <Typography variant="body" sx={{fontSize:20, fontWeight:600, color:'#11193F', m:1,}}>
                    Stock {props.title}
                </Typography>
                <Typography variant="body" sx={{fontSize:12, color:'#4C5DAE',}}>  
                    {props.details}
                </Typography>
            </Button>
        </Card>
    );
};

export default function LoginDialog(props) {
    const {handleInvestorLoginOpen, handleAdvisorLoginOpen} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleInvestorLogin = () => {
        handleClose();
        handleInvestorLoginOpen();
    }
    const handleAdvisorLogin = () => {
        handleClose();
        handleAdvisorLoginOpen();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{textTransform:'none', width:170, fontFamily:'poppins', fontSize:18, height:45, backgroundColor:'#11193F', '&:hover':{backgroundColor:'#747A99'},}}>
                Login/Register
            </Button>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', p:4,}}>
                    <Image src={LogoImage} width={285} height={53}/>
                    <Typography variant="body" sx={{mt:6, fontSize:18, fontWeight:600,}}>
                        Select your domain of expertise 
                    </Typography>
                    <Typography variant="body" sx={{fontSize:14, display:'flex', mb:1,}}>
                        By proceeding, You agree to our<Span text="T&C"/>and<Span text="Privacy Policy."/>
                    </Typography>   
                    <Stack spacing={2} direction="row" sx={{mt:2}}>
                        <UserCard title="Investor" details={detail1} image={User1} link={handleInvestorLogin}/>
                        <UserCard title="Advisor" details={detail2} image={User2} link={handleAdvisorLogin}/>
                    </Stack>
                </Box>
            </Dialog>
        </div>
    );
};