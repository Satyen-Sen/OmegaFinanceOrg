import Layout from '../components/Layout';
import Header from "../components/landingPage/Header";
import Main from "../components/landingPage/Main";
import Advisors from '../components/landingPage/Advisors';
import Testimonials from "../components/landingPage/Testimonials";
import Footer from '../components/landingPage/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Omega Finance">
      <Header/>
        <Main/>
        <Advisors/>
        <Testimonials/>
        <Footer/>
    </Layout>
  )
}

export default Index;
