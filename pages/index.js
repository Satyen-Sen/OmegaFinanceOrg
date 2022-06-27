import Layout from "../components/landingPage/Layout";
import Header from "../components/landingPage/Header";
import Main from "../components/landingPage/Main";
import Feature from '../components/landingPage/Feature';
import Service from '../components/landingPage/Service';
import About from '../components/landingPage/About';
import Footer from '../components/landingPage/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header/>
      <Main/>
      <Feature/>
      <Service/>
      <About/>
      <Footer/>
    </Layout>
  )
}

export default Index;
