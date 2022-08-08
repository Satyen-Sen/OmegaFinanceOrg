import React from 'react';
import Head from 'next/head';
import { Box, Divider, Typography } from '@mui/material';

export default function OrganiserHome() {
    return (
        <div style={{margin:0}}>
            <Head>
                <title>Omega Finance | Organiser</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>
            <Box>
                <Typography variant="h1"> Organiser Page</Typography>  
                <Divider sx={{borderWidth:2}}/>     
                <Typography variant="h1"> Organiser</Typography>          
            </Box>
        </div>
    );
};
