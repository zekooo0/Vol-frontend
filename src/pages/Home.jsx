import Landing from './Landing';
import About from './About';
import OpportunitiesSlider from '../components/OpportunitiesSlider';
import HomeOpportunites from './HomeOpportunites';

const Home = () => {
  return (
    <main className="">
      <Landing />
      <HomeOpportunites />

      <About />
    </main>
  );
};

export default Home;
