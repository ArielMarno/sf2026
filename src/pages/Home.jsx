import '../styles/pages/home.css';
import arrow from '../assets/arrow-white.webp';
import Liquid from '../components/Liquid';
import Platforms from '../components/Platforms';
import Navbar from '../components/Navbar';

//iconos plataformas
import google from '../assets/platforms/google-black.webp';
import meta from '../assets/platforms/meta-black.webp';
import nube from '../assets/platforms/nube-black.webp';
import ad from '../assets/platforms/ad-black.webp';

//componentes secciones
import AboutUs from '../components/AboutUs';
import HomePortfolio from '../components/HomePortfolio';
import DesignDev from '../components/services/DesignDev';
import GraphicDesign from '../components/services/GraphicDesign';
import AdsContent from '../components/services/AdsContent';
import Ecommerce from '../components/services/Ecommerce';
import Clients from '../components/Clients';
import HowWeWork from '../components/HowWeWork';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home' id='inicio'>
        <div className='liquid'>
          <Liquid
            mouseForce={20}
            cursorSize={50}
            isViscous={false}
            viscous={5}
            colors={["#2C4499", "#FF9FFC", "#B19EEF"]}
            autoDemo={true}
            autoSpeed={0.1}
            autoIntensity={0.1}
            isBounce={false}
            resolution={0.20}
            takeoverDuration={0.10}
            autoResumeDelay={1000}
            autoRampDuration={0.3}
          />
        </div>
        <main>
          <article className='title'>
            <h1>Visibilidad real para tu negocio</h1>
            <h4>Generamos <span>interés y confianza</span> en tu marca mostrándola <span>de la forma correcta</span>. <br />Nos ocupamos de acercarte a tu público para que te encargues de lo más importante.</h4>
            <a href="/#portafolio" className='cta-btn_white'>Nuestros trabajos <img src={arrow} alt="flecha"/></a>
          </article>
          <section>
            <div className='box'>
              <div className='item'>
                <img className='google' src={google} alt="google negocios" />
              </div>
              <div className='item'>
                <img className='meta' src={meta} alt="meta" />
              </div>
            </div>
            <div className='box'>
              <div className='item'>
                <img className='nube' src={nube} alt="tienda nube" />
              </div>
              <div className='item'>
                <img className='ad' src={ad} alt="publicidad de google" />
              </div>
            </div>
          </section>
        </main>
        <div className='platforms-comp'>
            <Platforms />
        </div>
      </div>
      <AboutUs />
      <HomePortfolio />
      <DesignDev />
      <GraphicDesign />
      <AdsContent />
      <Ecommerce />
      <Clients />
      <HowWeWork />
    </>
  )
}

export default Home