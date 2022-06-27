import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Omega Finance</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <div>
        {props.children}
      </div>

    </div>
  )
}
export default Layout;