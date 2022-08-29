import * as React from 'react';
import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import Header from '../components/organiser/Header';
import AdvisorsList from '../components/organiser/AdvisorsList';

export default function OrganiserHome() {

    return (
        <div style={{margin:0}}>
            <Head>
                <title>Omega Finance | Organiser </title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/LogoFavIcon.png"/>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>

            <Box>
                <Header/>
                <Box sx={{p:12, pt:6, backgroundColor:'#F6F6F7',}}>
                    <AdvisorsList/>
                </Box>
            </Box>
        </div>
    );
};
