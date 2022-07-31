import React from 'react';
import Head from 'next/head';
import { Card, Stack, Avatar, Grid, Button, Box, Typography } from '@mui/material';
import ProfileCard from '../../components/profileDetails/ProfileCard';
import InvestmentPlans from '../../components/profileDetails/InvestmentPlans';
import Testimonials from '../../components/primary/Testimonials';

export default function DetailPage() {
    return (
        <div style={{margin:0}}>
            <Head>
                <title>Omega Finance | Profile Details</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>

            <Box sx={{m:0, p:4, backgroundColor:'#F5F5F5', display:'flex', flexDirection:'column', alignItems:'center',}}>
                <Box sx={{m:0, p:4, backgroundColor:'#FFFFFF', borderRadius:8, width:1030,}}>
                    <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center',}}>
                        <ProfileCard 
                            avatar="https://www.stockvault.net//data/2009/06/09/109080/thumb16.jpg"
                            title="John Williams" category="Premium" rating="250" year="5" 
                        />
                    </Box>
                    <InvestmentPlans/>
                    <Testimonials Title="Testimonials"/>
                </Box>
            </Box>
        </div>
    );
};
