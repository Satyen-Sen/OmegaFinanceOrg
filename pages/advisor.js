import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import MainAdvisor from '../components/homePageAdvisor/MainAdvisor';
import Consultations from '../components/homePageAdvisor/Consultations';
import ProfileOnTop from '../components/homePageAdvisor/ProfileOnTop';
import Footer from '../components/primary/Footer';


const HeaderAdvisor = dynamic(
    () => import('../components/homePageAdvisor/HeaderAdvisor'), 
    {ssr: false}
);

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
            <div>
                <HeaderAdvisor/>  
                <MainAdvisor/>
                <Consultations/>
                <ProfileOnTop/>
                <Footer/>
            </div>
        </div>
    );
};