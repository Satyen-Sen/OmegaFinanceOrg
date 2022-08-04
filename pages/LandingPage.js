import Head from 'next/head';
import Header from "../components/landingPage/Header";
import Welcome from "../components/landingPage/Welcome";
import Advisors from '../components/landingPage/Advisors';
import Testimonials from "../components/landingPage/Testimonials";
import Footer from '../components/landingPage/Footer';

export default function LandingPage() {
    return (
        <div style={{margin:0}}>
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