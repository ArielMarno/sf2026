import '../styles/components/homeportfolio.css';

//Assets
import arrowb from '../assets/arrow-black.webp';
import star from '../assets/brand/star.webp';

//Projects
import m44 from '../assets/portfolio/m44.webp';
import cnord from '../assets/portfolio/cnord.webp';
import zarch from '../assets/portfolio/zarch.webp';
import bs from '../assets/portfolio/bs.webp';



const HomePortfolio = () => {
  return (
    <div className='home-portfolio' id='portafolio'>
        <div className='porfolio-container'>
            <div className='title'>
                <h4><img src={star} alt="estrella" />Nuestros trabajos</h4>
                <h2>Creamos <span>productos</span> &<br /><span>experiencias</span> digitales</h2>
            </div>
            <div className='projects-container'>
                <div className='first-col'>
                    <article>
                        <div className='project'>
                            <div className='img-container'>
                                <img src={m44} alt="Muebles 44" />
                                <div className='description'>
                                    <h5>Ecommerce</h5>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                            <h4>Muebles 44</h4>
                            <p className='text'>Creación de tienda online en Tiendanube para un negocio familiar de la costa atlántica. Se realizó la personalización del sitio, carga de productos, asesoramiento general y configuración de envíos.</p>
                        </div>
                    </article>

                    <article>
                        <div className='project'>
                            <div className='img-container'>
                                <img src={cnord} alt="Costa Nord" />
                                <div className='description'>
                                    <h5>Diseño Gráfico</h5>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                            <h4>Costa Nord</h4>
                            <p className='text'>Diseño y gestión de redes sociales para una empresa de mantenimiento de Mallorca. Se desarrollaron piezas gráficas para redes sociales, tarjetas coorporativas, presentaciones, tarifarios y otros recursos.
                            </p>
                        </div>
                    </article>
                </div>

                <div className='second-col'>
                    <article>
                        <div className='project'>
                            <div className='img-container'>
                                <img src={zarch} alt="Z Arquitecturas" />
                                <div className='description'>
                                    <h5>Diseño</h5>
                                    <h5>Desarrollo Web</h5>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                            <h4>Z Arquitectura</h4>
                            <p className='text'>Diseño y desarrollo de sitio web para un estudio de arquitectura de Mendoza. El proyecto incluyó galería de proyectos, vinculación a Google Maps y formulario de contacto para facilitar la comunicación con potenciales clientes.</p>
                        </div>
                    </article>

                    <article>
                        <div className='project'>
                            <div className='img-container'>
                                <img src={bs} alt="Bruja Sustentable" />
                                <div className='description'>
                                    <h5>Diseño Gráfico</h5>
                                    <h5>Gestión de RRSS</h5>
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                            <h4>Bruja Sustentable</h4>
                            <p className='text'>Planificación y diseño de redes sociales para un emprendimiento holístico de Buenos Aires. Se desarrollaron piezas de contenido, diseño de ebook e historias interactivas con gran alcance.</p>
                        </div>
                    </article>
                </div>

            </div>
            <a href="https://www.behance.net/sunfloweragencia" className='cta-btn_black' target='_blank' rel="noopener noreferrer" aria-label='Perfil de Behance' title='Perfil de Behance'>Portafolio completo <img src={arrowb} alt="flecha" /></a>
        </div>
    </div>
  )
}

export default HomePortfolio