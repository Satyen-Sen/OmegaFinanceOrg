import Layout from "../components/landingPage/Layout";
import Header from "../components/landingPage/Header";
import Main from "../components/landingPage/Main";
import Footer from '../components/landingPage/Footer';
import UserReviews from "../components/landingPage/UserReviews";

const Index = () => {
  return (
    <Layout pageTitle="Omega Finance">
      <Header/>
        <Main/>
        <UserReviews/>
      <Footer/>
    </Layout>
  )
}

export default Index;
