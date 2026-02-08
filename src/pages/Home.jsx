import React from 'react';
import '../styles/pages/home.css';
import arrow from '../assets/arrow-white.webp';
import Liquid from '../components/Liquid';
import Platforms from '../components/Platforms';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp';

// Iconos plataformas
import google from '../assets/platforms/google-black.webp';
import meta from '../assets/platforms/meta-black.webp';
import nube from '../assets/platforms/nube-black.webp';
import ad from '../assets/platforms/ad-black.webp';

// Otros componentes
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
    <div className='home-component'>
      <Navbar />
      <Whatsapp />
      
      <section className='hero-section' id='inicio'>
        <div className='liquid-bg'>
          <Liquid
            mouseForce={20}
            cursorSize={50}
            isViscous={false}
            colors={["#2C4499", "#FF9FFC", "#B19EEF"]}
            autoDemo={true}
            autoSpeed={0.1}
            autoIntensity={0.1}
            resolution={0.20}
          />
        </div>

        <div className='hero-content'>
          <article className='title'>
            <h1>Visibilidad real para tu negocio</h1>
            <h4>
              Generamos <span>interés y confianza</span> en tu marca mostrándola <span>de la forma correcta</span>. 
              <br />Nos ocupamos de acercarte a tu público para que te encargues de lo más importante.
            </h4>
            <a href="/#portafolio" className='cta-btn_white'>
              Nuestros trabajos <img src={arrow} alt="flecha"/>
            </a>
          </article>

          {/* Logos estáticos - Solo visibles en Desktop */}
          <div className='desktop-platforms'>
            <div className='logo-row'>
                <img className='img-google' src={google} alt="google" />
                <img className='img-meta' src={meta} alt="meta" />
                <img className='img-nube' src={nube} alt="tienda nube" />
                <img className='img-ad' src={ad} alt="google ads" />
            </div>
          </div>

          {/* Banda transcurriendo - Solo visible en Mobile */}
          <div className='mobile-platforms-band'>
              <Platforms />
          </div>
        </div>
      </section>

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