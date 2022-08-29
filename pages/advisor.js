import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import HeaderAdvisor from '../components/homePageAdvisor/HeaderAdvisor';
import MainAdvisor from '../components/homePageAdvisor/MainAdvisor';
import Consultations from '../components/homePageAdvisor/Consultations';
import ProfileOnTop from '../components/homePageAdvisor/ProfileOnTop';
import Footer from '../components/primary/Footer';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Omega Finance | Advisor</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/LogoFavIcon.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>
            <Box sx={{display:'flex', flexDirection:'column',}}>
                <HeaderAdvisor/>  
                <MainAdvisor/>
                <Consultations/>
                <ProfileOnTop/>
                <Footer/>
            </Box>
        </div>
    );
};
