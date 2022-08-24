import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {Navbar} from 'reactstrap'; 
import { Box, Container, Stack } from '@mui/material'; 
import Logo from '../../public/Logo.png'; 
import LoginDialog from '../modal/LoginDialog';
import InvestorLogin from '../modal/InvestorLogin';
import AdvisorLogin from '../modal/AdvisorLogin';
import OrganiserLogin from '../modal/OrganiserLogin';

export default function Header() {

    const [sticky, setSticky] = useState(false);
    const [investorDialog, setInvestorDialog] = useState(false);
    const [advisorDialog, setAdvisorDialog] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    const handleScroll = () => {
        if (window.scrollY > 90) {
            setSticky(true); 
        } else if (window.scrollY < 90) {
            setSticky(false);
        }
    }
  
    return (
        <div className={`header${sticky ? ' sticky' : ''}`}>
            <Navbar light>

                <Container sx={{disply:'flex'}}>
                    <Image src={Logo} alt="Omega Finance Group" width={80} height={40}/>
                    <Box sx={{ml:'62%', mt:-5,}}>
                        <Stack direction="row" spacing={1} sx={{display:'flex', alignContent:'flex-end',}}>
                            <LoginDialog 
                                handleInvestorLoginOpen={() => {setInvestorDialog(true)}} 
                                handleAdvisorLoginOpen={() => {setAdvisorDialog(true)}}
                            />
                            <InvestorLogin open={investorDialog} 
                                handleClose={()=>{setInvestorDialog(false)}} 
                            />
                            <AdvisorLogin open={advisorDialog} 
                                handleClose={()=>{setAdvisorDialog(false)}}
                            />
                            <OrganiserLogin/>
                        </Stack>
                    </Box>
                </Container>  
            </Navbar>
        </div>
    );
};