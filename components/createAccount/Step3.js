import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Card, Badge, } from '@mui/material'; 
import Image1 from '../../public/CreateAccount/03_01.png';
import Image2 from '../../public/CreateAccount/03_02.png';
import Image3 from '../../public/CreateAccount/03_03.png';
import Image4 from '../../public/CreateAccount/03_04.png';
import Image5 from '../../public/CreateAccount/03_05.png';
import Image6 from '../../public/CreateAccount/03_06.png';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


function CardItem(props) {

    const [invisible, setVisible] = React.useState(true);  
    const handleBadge = () => {setVisible(false)};

    return(
        <Badge overlap="circular" invisible={invisible} onClick={handleBadge} badgeContent={<CheckCircleRoundedIcon style={{color:'#FDAA3C'}}/>}>
            <Card sx={{width:140, height:140, m:1, borderRadius:3, display:'flex', flexDirection:'column', alignItems:'center',}}>
                <Image src={props.image} height={110} width={140}/>
                <Typography variant="body" align='center' sx={{fontSize:12, mt:0.5,}}>
                    {props.text}
                </Typography>
            </Card>
        </Badge>
    );
};

export default function Step3() {

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', my:2,}}>
            <Typography variant="body" sx={{fontSize:28, color:'#11193F',}}>Advisor Type</Typography>
            <Typography variant="body" sx={{m:2}} align='center'>Please select the type of advisorory services you provide.</Typography>

            <Box sx={{display:'flex'}}>
                <CardItem image={Image1} text='Momentum Trading'/>
                <CardItem image={Image2} text='Swing Trading'/>
                <CardItem image={Image3} text='Non Fungible Tokens (NFT)'/>
            </Box>
            
            <Box sx={{display:'flex'}}>
                <CardItem image={Image4} text='Crypto Trading'/>
                <CardItem image={Image5} text='Position Trading'/>
                <CardItem image={Image6} text='Scapling'/>
            </Box>
        </Box>
    );
};