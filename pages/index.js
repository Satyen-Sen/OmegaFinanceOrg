import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Welcome from '../components/landingPage/Welcome';
import Advisors from '../components/landingPage/Advisors';
import Testimonials from "../components/landingPage/Testimonials";
import Footer from '../components/primary/Footer';


const Header = dynamic(
    () => import('../components/landingPage/Header'), 
    {ssr: false}
);

export default function LandingPage() {
    return (
        <div>
            <Head>
                <title>Omega Finance</title>
                <meta name="description" content="Built in India with Next JS"/>
                <link rel="icon" href="/LogoFavIcon.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>

            <div style={{margin:0}}>
                <Header/>
                <Welcome/>
                <Advisors/>
                <Testimonials/>
                <Footer/>
            </div>
        </div>
    );
};