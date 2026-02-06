import '../styles/components/aboutus.css';
import { useInView } from 'react-intersection-observer';
import star from '../assets/brand/star-blue.webp';
import arrow from '../assets/arrow-white.webp';
import sf from '../assets/aboutus/aboutus-sf.webp';
import logo from '../assets/aboutus/aboutus-logo.webp';
import sunflower from '../assets/aboutus/video.webm';

const AboutUs = () => {

  const { ref, inView } = useInView({
    threshold: 0.5, // Se activa cuando el 50% del video es visible
    triggerOnce: true, // Solo activa una vez
  });

  return (
    <div className='about-us' id='nosotros'>
      <main>
        <aside>
          <div className='img-box'>
            <img src={logo} alt="logo" />
          </div>
          <div className='img-box big' ref={ref}>
            {inView && (
              <video
                src={sunflower}
                loop
                autoPlay
                muted
                controls={false}
                preload="auto"
              />
            )}
          </div>
          <div className='img-box'>
            <img src={sf} alt="sunflower" />
          </div>
        </aside>
        <section>
          <div className='title'>
            <div className='sub-title'><img src={star} alt="estrella" /><h4>Buenos Aires, Argentina.</h4></div>
            <h2>Sunflower <br /><span>Marketing Digital</span>.</h2>
          </div>
          <article>
            <p className='text'>Somos un equipo de <span>profesionales</span> en diseño gráfico, publicidad online y desarrollo web.</p>
            <p className='text'>Gestionamos como <span>tu negocio llega a las personas correctas</span> en la web a través de tus redes sociales y los motores de búsqueda.</p>
            <p className='text'>Trabajamos en conjunto con vos creando un <span>perfil profesional y confiable</span> de tu marca en las <span>plataformas más importantes</span>.</p>
            <p className='text'>Ya sea que estés <span>adaptando tu negocio</span> al mundo digital <span>o comenzando desde cero</span>, nosotros <span>somos la mejor opción</span> para alcanzar tus objetivos.</p>
          </article>
          <a href="https://www.instagram.com/sunfloweragencia/" target='_blank' className='cta-btn_white'>Conocer más <img src={arrow} alt="flecha" /></a>
        </section>
      </main>
    </div>
  )
}

export default AboutUs