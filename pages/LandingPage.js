import Layout from '../components/primary/Layout';
import Header from "../components/landingPage/Header";
import Welcome from "../components/landingPage/Welcome";
import PremiumAdvisors from '../components/primary/Advisors';
import AllStockAdvisors from '../components/primary/AllStockAdvisors';
import Testimonials from "../components/landingPage/Testimonials";
import Footer from '../components/landingPage/Footer';

const LandingPage = () => {
  return (
    <Layout pageTitle="Omega Finance">
      <Header/>
        <Welcome/>
        <PremiumAdvisors/>
        <AllStockAdvisors/>
        <Testimonials/>
        <Footer/>
    </Layout>
  )
}

export default LandingPage;
