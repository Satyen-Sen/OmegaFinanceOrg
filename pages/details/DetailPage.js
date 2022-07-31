import React from 'react';
import Head from 'next/head';
import { Box, Divider } from '@mui/material';
import ProfileCard from '../../components/profileDetails/ProfileCard';
import SubscriptionPlans from '../../components/profileDetails/SubscriptionPlans';
import ConsultancyCards from '../../components/profileDetails/ConsultancyCards';
import Certificates from '../../components/profileDetails/Certificates';
import Ratings from '../../components/profileDetails/Ratings';
import OrganisationDetails from '../../components/profileDetails/OrganisationDetails';
import OtherAdvisors from '../../components/profileDetails/OtherAdvisors';


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
                    <SubscriptionPlans/>
                    <ConsultancyCards/>
                    <Certificates/>
                    <Ratings/>
                    <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', mt:8, mb:8,}}>
                        <OrganisationDetails 
                            avatar="https://t4.ftcdn.net/jpg/03/36/74/97/360_F_336749776_JlC1FjERlhyl4OqgrZoon1XVvDHut2Q2.jpg"
                            title="Green Ville Organisation"
                            rating="5"
                        />
                    </Box>
                    <Divider sx={{borderWidth:2, backgroundColor:'#808080', m:-4, mt:16,}}/>
                    <OtherAdvisors/>
                </Box>
            </Box>
        </div>
    );
};
