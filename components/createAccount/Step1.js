import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Badge, Grid, } from '@mui/material'; 
import Individual from '../../public/CreateAccount/01_Individual.png';
import Organisation from '../../public/CreateAccount/01_Organisation.png';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function CardItem(props) {
    return(
        <div>
            <Button>
                <Image src={props.image} alt="Individual" width={160} height={140}/>
            </Button>
            <Typography variant="body">{props.text}</Typography>
        </div>
    );
};


export default function Step1() {

    const [invisibleIndividual, setVisibleIndividual] = React.useState(true);  
    const [invisibleOrganisation, setVisibleOrganisation] = React.useState(true);  
    const handleSelectIndividual = () => {setVisibleIndividual(false), setVisibleOrganisation(true)};
    const handleSelectOrganisation = () => {setVisibleIndividual(true), setVisibleOrganisation(false)};

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:2, height:380,}}>
            <Typography variant="body" sx={{m:2, fontSize:28, color:'#11193F',}}>Individual or Organisation</Typography>
            <Typography variant="body" sx={{m:2}} align='center'>Do you belong to any organisation or work as an individual?</Typography>

            <Grid container spacing={0} sx={{m:2}}>
                <Grid item xs={2} align='center'>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Badge overlap="circular" invisible={invisibleIndividual} onClick={handleSelectIndividual} badgeContent={<CheckCircleRoundedIcon style={{color:'#FDAA3C'}}/>}>
                        <CardItem image={Individual} text='Individual'/>
                    </Badge>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Badge overlap="circular" invisible={invisibleOrganisation} onClick={handleSelectOrganisation} badgeContent={<CheckCircleRoundedIcon style={{color:'#FDAA3C'}}/>}>
                        <CardItem image={Organisation} text='Organisation'/>
                    </Badge>
                </Grid>
            </Grid>
        </Box>
    );
};