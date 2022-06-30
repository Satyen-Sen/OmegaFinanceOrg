import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Head from 'next/head';
import { Grid, FormControl, Typography, Box, Chip, Divider, Button, Link } from '@mui/material'; 
import LoginTabs from './LoginTabs';
import FacebookIcon from '../../styles/assets/facebook.png';
import GoogleIcon from '../../styles/assets/google.png';
import AppleIcon from '../../styles/assets/apple.png';
import dialog from '../../public/images/dialog-img.png';


function TextAnimation({title, listarray, desc,}) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        let i = (index + 1) % listarray.length;
        setIndex(i);
      }, 2050);
    }, [index]);

    return (
        <div>        
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            </Head>

            <Box sx={{m:4, mr:0}}>
                <div className="left-title">
                    <Typography variant="h4" sx={{mb:2,}}>{title}&nbsp;</Typography> 
                    {listarray ? 
                        <Typography variant="h4" sx={{mb:2, color:'#1565C0',}} className="animate__animated animate__fadeInDown animate__slow animate__infinite"> 
                            {listarray[index]}
                        </Typography> 
                    : ""}
                </div>
                <p className="text-muted mb-4 pb-2">{desc}</p>
            </Box>
        </div>
    );
}

export default function DialogContents() {

    const description = "We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.";
  
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

  return (
    <Box className="login-box" sx={{height:480,}}>
        <Grid container spacing={0}>
            <Grid item xs={6} sx={{backgroundColor:'#DFF1FF', border:5, borderColor:'#DFF1FF', mb:-1,}}>
                <Image src={dialog} alt="dialog img"/>
                <TextAnimation title="Invest in" listarray={["Stocks","Mutual Funds","Digital Gold","FDs"]} desc={description}/>    
            </Grid>
            <Grid item xs={6}>
                <FormControl className="illustration-wrapper" initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Typography variant="h5" sx={{m:2}}>Login with:</Typography>  
                    <LoginTabs/>
                    <Grid container spacing={2} sx={{width:'80%', mb:3,}}>
                        <Grid item xs>
                            <Link href="#" variant="body2">Create an Account</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">Forgot password?</Link>
                        </Grid>
                    </Grid>
                </FormControl>

                <Divider variant="middle"><Chip label="or Continue With"/></Divider>
                <Box sx={{p:2, ml:10, mr:10,}}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>  <Button><Image src={FacebookIcon} width={35} height={35}/></Button> </Grid>
                        <Grid item xs={4}>  <Button><Image src={GoogleIcon} width={35} height={35}/></Button>    </Grid>
                        <Grid item xs={4}>  <Button><Image src={AppleIcon} width={35} height={35}/></Button>     </Grid>
                    </Grid>
                </Box>      
            </Grid> 
        </Grid>
    </Box>
  );
};