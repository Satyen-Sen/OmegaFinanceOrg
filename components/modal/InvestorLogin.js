import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Stack, IconButton, Divider, Dialog, } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import LoginTabs from './LoginTabs';
import facebookIcon from '../../public/images/facebook.png';
import googleIcon from '../../public/images/google.png';
import appleIcon from '../../public/images/apple.png';
import CreateAccountInvestor from '../createAccount/CreateAccountInvestor';
import ResetInvestorPassword from '../forgetPassword/ResetInvestorPassword';


export default function InvestorLogin(props) {

    const {open, handleClose,} = props;

    return (
        <div>
            <Dialog onClose={handleClose} open={open} PaperProps={{style:{borderRadius:16}}}>
                <IconButton onClick={handleClose} sx={{position: 'absolute', right:0, top:0, color:'#808080' }}>
                    <CloseIcon/>
                </IconButton>
                <Box sx={{height:500, width:450, display:'flex', flexDirection:'column', alignItems:'center', p:4,}}>
                    <Typography variant="h5" sx={{mt:1, mb:2,}}>Login with your : </Typography>  
                    <LoginTabs target="/investor/"/>
                    <Divider variant="middle" sx={{borderWidth:2, backgroundColor:'#606060', m:2, width:'116%',}}/>
                    <Typography variant="body" sx={{mb:2}}>or Continue with</Typography>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" sx={{textTransform:'none', fontSize:12, borderRadius:3, boxShadow:3, fontFamily: 'poppins', backgroundColor:'#3B5998', '&:hover':{backgroundColor:'#11193F',}}}>
                            <Image src={facebookIcon} alt="facebook" width={30} height={30}/>
                            <Typography sx={{fontSize:12, fontFamily:'poppins',}}>&nbsp; Facebook</Typography>
                        </Button>
                        <Button variant="outlined" sx={{textTransform:'none', fontSize:12, borderRadius:3, boxShadow:3, borderColor:'#2BA24C', fontFamily:'poppins', '&:hover':{backgroundColor:'#FFFFFF', borderColor:'#1A4D2E',}}}>
                            <Image src={googleIcon} alt="google" width={25} height={25}/>
                            <Typography sx={{fontSize:12, fontFamily:'poppins', color:'#2BA24C',}}>&nbsp; Google</Typography>
                        </Button>
                        <Button variant="contained" sx={{textTransform:'none', fontSize:12, borderRadius:3, boxShadow:3, fontFamily:'poppins', backgroundColor:'#000000', '&:hover':{backgroundColor:'#11193F',}}}>
                            <Image src={appleIcon} alt="apple" width={25} height={25}/>
                            <Typography sx={{fontSize:12, fontFamily:'poppins',}}>&nbsp; Apple</Typography>
                        </Button>
                    </Stack>
                    <Stack spacing={14} direction="row" sx={{mt:4}}>
                        <CreateAccountInvestor/>
                        <ResetInvestorPassword/>
                    </Stack>    
                </Box>
            </Dialog>
        </div>
    );
};
