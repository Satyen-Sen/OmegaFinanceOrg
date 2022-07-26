import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { Typography, Box, Button } from '@mui/material'; 

export default function TextAnimation({title, listarray, desc,}) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        let i = (index + 1) % listarray.length;
        setIndex(i);
      }, 2000);
    }, [index]);

    return (
        <div>        
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            </Head>

            <Box sx={{m:2, mt:12, }}>
                <div className="left-title">
                    <Typography variant="h4" sx={{mb:2, color:'#11193F'}}>{title}&nbsp;</Typography> 
                    {listarray ? 
                        <Typography variant="h4" sx={{mb:2, color:'#FDAA3C',}} className="animate__animated animate__fadeInDown animate__slow animate__infinite"> 
                            {listarray[index]}
                        </Typography> 
                    : ""}
                </div>
                <p className="text-muted mb-4 pb-2">{desc}</p>
            </Box>
        </div>
    );
}