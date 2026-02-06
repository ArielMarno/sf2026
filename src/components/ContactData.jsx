import '../styles/components/contactdata.css';

//social media
import lkd from '../assets/socials/linkedin-black.webp';
import ig from '../assets/socials/instagram-black.webp';
import fbk from '../assets/socials/facebook-black.webp';

//aside images
import mobile from '../assets/mobile.webp';
import destock from '../assets/destock.webp';



const ContactData = () => {
  return (
    <div className='contact-us_data'>
        <div className='content'>
            <fieldset>
                <h4>Teléfono</h4>
                <h2>(+54) 9 1170606852</h2>
            </fieldset>
            <fieldset className='email'>
                <h4>E-mail</h4>
                <h2>contacto@<br />sunfloweragencia.com</h2>
            </fieldset>
            <fieldset>
                <h4>Redes sociales</h4>
                <div className='socials'>
                    <a href="https://www.linkedin.com/company/sunfloweragencia/" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de LinkedIn' title='Perfil de LinkedIn'><img src={lkd} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/sunfloweragencia/" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de Instagram' title='Perfil de Instagram'><img src={ig} alt="Instragram" /></a>
                    <a href="https://www.facebook.com/sunflower.agencia?locale=es_LA" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de Facebook' title='Perfil de Facebook'><img src={fbk} alt="Facebook" /></a>
                </div>
            </fieldset>
        </div>
        <aside>
            <picture>
                <source media="(min-width: 768px)"
                srcSet={mobile} />
                <img src={destock} alt="notebook" />
            </picture>
        </aside>
    </div>
  )
}

export default ContactData