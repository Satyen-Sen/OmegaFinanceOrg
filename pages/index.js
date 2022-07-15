import React from 'react'; 
import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import('./LandingPage'), {ssr:false});

const Index = () => {
  return (
    <LandingPage/>
  )
}

export default Index;
