import '../styles/components/herocomponent.css';
import arrow from '../assets/arrow-white.webp';

//components
import Liquid from '../components/Liquid';
import Platforms from '../components/Platforms';

//icons
import google from '../assets/platforms/google-black.webp';
import meta from '../assets/platforms/meta-black.webp';
import nube from '../assets/platforms/nube-black.webp';
import ad from '../assets/platforms/ad-black.webp';


const HeroSection = () => {
  return (
    <div className='home-component'>
      <div className='hero-section' id='inicio'>
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
          <div className='title'>
            <h1>Visibilidad real para tu negocio</h1>
            <h4>
              Generamos <span>interés y confianza</span> en tu marca mostrándola <span>de la forma correcta</span>. 
              <br />Nos ocupamos de acercarte a tu público para que te encargues de lo más importante.
            </h4>
            <a href="/#portafolio" className='cta-btn_white'>
              Nuestros trabajos <img src={arrow} alt="flecha"/>
            </a>
          </div>
          <div className='desktop-platforms'>
            <div className='logo-row'>
                <img className='img-google' src={google} alt="google" />
                <img className='img-meta' src={meta} alt="meta" />
                <img className='img-nube' src={nube} alt="tienda nube" />
                <img className='img-ad' src={ad} alt="google ads" />
            </div>
          </div>
          <div className='mobile-platforms-band'>
              <Platforms />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection