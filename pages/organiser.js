import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import AdvisorsList from '../components/organiser/AdvisorsList';


const Header = dynamic(
    () => import('../components/organiser/Header'), 
    {ssr: false}
);

export default function OrganiserHome() {
    return (
        <div>
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