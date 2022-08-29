import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import HeaderInvestor from '../components/homePageInvestor/HeaderInvestor';
import MainInvestor from '../components/homePageInvestor/MainInvestor';
import Consultations from '../components/homePageInvestor/Consultations';
import Organisations from '../components/homePageInvestor/Organisations';
import Advisors from '../components/homePageInvestor/Advisors';
import PremiumService from '../components/homePageInvestor/PremiumService';
import Footer from '../components/primary/Footer';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Omega Finance | Investor</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/LogoFavIcon.png"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>
            <Box sx={{display:'flex', flexDirection:'column',}}>
                <HeaderInvestor/>  
                <MainInvestor/>
                <Consultations/>
                <Advisors/>
                <Organisations/>
                <PremiumService/>
                <Footer/>
            </Box>
        </div>
    );
};