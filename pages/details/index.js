import dynamic from 'next/dynamic';

const DynamicComponentsWithNoSSR = dynamic(
  () => import('./DetailPage'), 
  {ssr: false}
);

function Home() {
  return (
    <DynamicComponentsWithNoSSR/>
  );
};

export default Home; 

