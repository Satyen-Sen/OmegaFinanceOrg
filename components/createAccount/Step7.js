import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Tab, Tabs,} from '@mui/material'; 
import Diamond from '../../public/CreateAccount/DiamondOutline.png';
import TabBasic from './TabBasic';
import TabPremium from './TabPremium';


function TabPanel(props) {  
    return (
        <div role="tabpanel" hidden={props.value !== props.index}>
            {props.value === props.index && (<Box>{props.children}</Box>)}
        </div>
    );
};

function TabHead(props) {
    return(
        <Box backgroundColor={props.color2} border={props.border} boxShadow={2} sx={{width:140, borderRadius:2, borderColor:'#DDDDDD', display:'flex', justifyContent:'center', p:1, m:-1.5,}}>
            <Typography variant="body" color={props.color} sx={{textTransform:'none', fontSize:16, fontWeight:600,}}>
                {props.text}
            </Typography>
        </Box>
    );   
};

export default function Step7() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {setValue(newValue)};

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', my:2,}}>
            <Image src={Diamond}/>
            <Typography variant="body" sx={{mb:2, fontSize:28, fontWeight:600, color:'#FDAA3C',}}>Subscribe to Get Started</Typography>

            <Box>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor:'white'},}}>
                    <Tab label={
                        <TabHead text='Basic' 
                            color={value==0 ? '#FFFFFF':'#B0B0B0'} 
                            color2={value==0 ? '#FDAA3C':'#FFFFFF'}
                            border={value==0 ? (0) : (1) }
                        />
                    }/>
                    <Tab label={
                        <TabHead text='Premium' 
                            color={value==1 ? '#FFFFFF':'#B0B0B0'}
                            color2={value==1 ? '#FDAA3C':'#FFFFFF'}
                            border={value==1 ? (0) : (1) }
                        />
                    }/>
                </Tabs>
            </Box>  
            <TabPanel value={value} index={0}>
                <TabBasic/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabPremium/>
            </TabPanel>
        </Box>
    );
};