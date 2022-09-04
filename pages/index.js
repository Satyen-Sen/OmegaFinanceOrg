import dynamic from 'next/dynamic';

const DynamicComponentsWithNoSSR = dynamic(
  () => import('./LandingPage'), 
  {ssr: false}
);

function Home() {
  return (
    <DynamicComponentsWithNoSSR/>
  );
};

export default Home;