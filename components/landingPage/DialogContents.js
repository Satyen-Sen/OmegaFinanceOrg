import React from "react";
import { Grid, FormControl, Typography, Box, Chip, Divider, Button, Link } from '@mui/material'; 
import LoginTabs from './LoginTabs';

export default function DialogContents() {

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
                text animation    
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
                        <Grid item xs={4}>  <Button>FacebookIcon</Button>   </Grid>
                        <Grid item xs={4}>  <Button>GoogleIcon</Button>     </Grid>
                        <Grid item xs={4}>  <Button>AppleIcon</Button>      </Grid>
                    </Grid>
                </Box>      
            </Grid> 
        </Grid>
    </Box>
  );
};