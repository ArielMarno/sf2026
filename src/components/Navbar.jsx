import '../styles/components/navbar.css';
import { useState} from 'react';
import { Link } from 'react-router-dom';

//assets
import sfb from '../assets/brand/sunflower-white.webp';
import arrow from '../assets/arrow-white.webp';
import arrowb from '../assets/arrow-black.webp';
import Menu from './Menu';

//social
import lkd from '../assets/socials/linkedin.webp';
import ig from '../assets/socials/instagram.webp';
import fb from '../assets/socials/facebook.webp';

const Navbar = () => {

    //establecer el opuesto cuando se identifica si esta abierto el menu
    const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
        
    // Capturar el evento del click
    const handleLinkClick = (e) => {
      setIsOpen(false);
    }

    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) { // cuando baja más de 50px
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });


  return (
    <>
      <nav>
        <div className='logo-container'>
          <Link to="/" className='logo' >Sunflower</Link>
        </div>
        <div className='nav_btn-container'>
          <a href="/contacto" className='cta-btn_white'>Empezar un proyecto <img src={arrow} alt="flecha"/></a>
          <div className='menu'><Menu toggleMenu={toggleMenu} isOpen={isOpen}/></div>
        </div>
      </nav>

     <div className={`links ${isOpen ? 'open' : ''}`}>
        <div className='menu-rsp'><Menu toggleMenu={toggleMenu} isOpen={isOpen}/></div>
        <div className='links-container'>
          <div className='sections'>
            <Link to="/#inicio" onClick={handleLinkClick} className='go-to'>Inicio</Link>
            <Link to="/#nosotros" onClick={handleLinkClick} className='go-to'>Nosotros</Link>
            <Link to="/#portafolio" onClick={handleLinkClick} className='go-to'>Portafolio</Link>
            <Link to="/#desarrollo" onClick={handleLinkClick} className='go-to'>Servicios</Link>
            <Link to="/#testimonios" onClick={handleLinkClick} className='go-to'>Testimonios</Link>
            <Link to="/#comotrabajamos" onClick={handleLinkClick} className='go-to'>Paso a paso</Link>
            <Link to="/contacto" onClick={handleLinkClick} className='go-to'>Contacto</Link>
          </div>
          <aside>
            <div className='logo'>
                <img src={sfb} alt="Sunflower"/>
                <p>Marketing Digital</p>
            </div>
            <div className='socials'>
              <a href="https://www.linkedin.com/company/sunfloweragencia" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de LinkedIn' title='Perfil de LinkedIn'><img src={lkd} alt="linkedin" /></a>
              <a href="https://www.instagram.com/sunfloweragencia" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de Instagram' title='Perfil de Instagram'><img src={ig} alt="instagram" /></a>
              <a href="https://www.facebook.com/sunfloweragencia" target='_blank' rel= "noopener noreferrer" aria-label='Perfil de Facebook' title='Perfil de Facebook'><img src={fb} alt="facebook" /></a>
            </div>
            <div className='contact'>
              <fieldset>
                <h5>Teléfono</h5>
                <p>(+54) 9 1170606852</p>
              </fieldset>
              <fieldset>
                <h5>E-mail</h5>
                <p>contacto@sunfloweragencia.com</p>
              </fieldset>
            </div>
            <a href="/contacto" onClick={handleLinkClick} className='cta-btn_black'>Empezar un proyecto <img src={arrowb} alt="flecha" /></a>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Navbar