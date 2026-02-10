import '../styles/components/footer.css';
import { Link } from 'react-router-dom';

//logo
import sf from '../assets/brand/sunflower-white.webp'

//socials
import ig from '../assets/socials/instagram.webp';
import fb from '../assets/socials/facebook.webp';
import lk from '../assets/socials/linkedin.webp';

//platforms 
import google from '../assets/platforms/google.webp';
import meta from '../assets/platforms/meta.webp';
import nube from '../assets/platforms/nube.webp';
import ad from '../assets/platforms/ad.webp';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_container-display'>
                <div className='footer_info'>
                    <div className='footer_social'>
                        <div className='footer_logo'>
                            <Link to="/"><img src={sf} alt="Sunflower" /></Link>
                            <h4>Marketing Digital</h4>
                        </div>
                        <div className='footer_social-icons'>
                            <a href="https://www.linkedin.com/company/sunfloweragencia" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de LinkedIn' title='Perfil de LinkedIn'><img src={lk} alt="LinkedIn" /></a>
                            <a href="https://www.instagram.com/sunfloweragencia" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de Instagram' title='Perfil de Instagram'><img src={ig} alt="Instagram" /></a>
                            <a href="https://www.facebook.com/sunfloweragencia" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de Instagram' title='Perfil de Instagram'><img src={fb} alt="Facebook" /></a>
                        </div>
                    </div>
                    <div className='footer_contact-data'>
                        <h4>Contactanos</h4>
                        <a href="/contacto">Empezar un proyecto</a>
                        <p>(+54) 9 1170606852</p>
                        <p className='email'>contacto <br /> @sunfloweragencia.com</p>
                        <p>Buenos Aires, Argentina.</p>
                    </div>
                    <div className='footer_services'>
                        <h4>Servicios</h4>
                        <Link to="/#desarrollo" className='got-to'>Diseño & <br /> Desarrollo web</Link>
                        <Link to="/#diseno-grafico" className='got-to'>Diseño gráfico</Link>
                        <Link to="/#contenidoypublicidad" className='got-to'>Contenido & <br /> Publicidad</Link>
                        <Link to="/#ecommerce" className='got-to'>Ecommerce</Link>
                    </div>
                </div>
                <div className='footer_platforms'>
                    <figure>
                        <img src={google} alt="Google" />
                    </figure>
                    <figure>
                        <img src={meta} alt="Meta" />
                    </figure>
                    <figure>
                        <img src={nube} alt="Tienda Nube" />
                    </figure>
                    <figure>
                        <img src={ad} alt="Google Ads" />
                    </figure>
                </div>
            </div>
            <div className='copy'>
                    <p>©{new Date().getFullYear()} Sunflower Agencia. Todos los derechos reservados.</p>
                    <div className='links'>
                        <a href="/terminosycondiciones">Terminos de Uso</a>
                        <a href="/politicadeprivacidad">Politica de Privacidad</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer