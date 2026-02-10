import '../styles/pages/home.css';

// components
import Whatsapp from '../components/Whatsapp';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import HomePortfolio from '../components/HomePortfolio';
import DesignDev from '../components/services/DesignDev';
import GraphicDesign from '../components/services/GraphicDesign';
import AdsContent from '../components/services/AdsContent';
import Ecommerce from '../components/services/Ecommerce';
import Clients from '../components/Clients';
import HowWeWork from '../components/HowWeWork';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Whatsapp />
      <HeroSection />
      <AboutUs />
      <HomePortfolio />
      <DesignDev />
      <GraphicDesign />
      <AdsContent />
      <Ecommerce />
      <Clients />
      <HowWeWork />
      <Footer />
    </div>
  );
}

export default Home;