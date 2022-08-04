import React, {useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Divider } from '@mui/material';
import ProfileCard from '../../../components/profile-details/ProfileCard';
import SubscriptionPlans from '../../../components/profile-details/SubscriptionPlans';
import ConsultancyCards from '../../../components/profile-details/ConsultancyCards';
import Certificates from '../../../components/profile-details/Certificates';
import Ratings from '../../../components/profile-details/Ratings';
import OrganisationDetails from '../../../components/profile-details/OrganisationDetails';
import OtherAdvisors from '../../../components/profile-details/OtherAdvisors';
import stockAdvisors from '../../../stockAdvisors.json';


export default function DetailPage() {
    const Router = useRouter();
    const { slug } = Router.query;
    const [data, setData] = React.useState(null);

    useEffect(()=>{
        if(!slug) return;
        let idx = stockAdvisors.findIndex(e => e.slug === slug);
        setData(stockAdvisors[idx]);
    },[slug])
    
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
                            avatar={data?.avatar || '---'} 
                            title={data?.title || '---'} 
                            category={data?.category || '---'} 
                            rating={data?.rating || '---'} 
                            year={data?.year || '---'} 
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
