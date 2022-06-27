import Layout from "../components/Layout";
import Header from "../components/Header";
import Main from "../components/Main";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Main />
      <Feature/>
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
