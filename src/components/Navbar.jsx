import '../styles/components/navbar.css';
import { useState, useEffect } from 'react'; // 1. Importamos useEffect
import { Link } from 'react-router-dom';

// Assets ... (tus imports de imágenes se mantienen igual)
import sfb from '../assets/brand/sunflower-white.webp';
import arrow from '../assets/arrow-white.webp';
import arrowb from '../assets/arrow-black.webp';
import Menu from './Menu';
import lkd from '../assets/socials/linkedin.webp';
import ig from '../assets/socials/instagram.webp';
import fb from '../assets/socials/facebook.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const handleLinkClick = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            // Cambiamos el selector a la clase que pediste
            const navContainer = document.querySelector(".navbar_container");
            if (navContainer) {
                if (window.scrollY > 50) {
                    navContainer.classList.add("scrolled");
                } else {
                    navContainer.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='navbar'> 
            <div className='navbar_container'>
                <div className='logo-container'>
                    <Link to="/" className='logo' >Sunflower</Link>
                </div>
                <div className='nav_btn-container'>
                    <a href="/contacto" className='cta-btn_white'>
                        Empezar un proyecto <img src={arrow} alt="flecha"/>
                    </a>
                    <div className='menu'>
                        <Menu toggleMenu={toggleMenu} isOpen={isOpen}/>
                    </div>
                </div>
            </div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <div className='menu-rsp'>
                    <Menu toggleMenu={toggleMenu} isOpen={isOpen}/>
                </div>
                <div className='links-container'>
                    <div className='go-to_components'>
                        <Link to="/#inicio" onClick={handleLinkClick} className='go-to'>Inicio</Link>
                        <Link to="/#nosotros" onClick={handleLinkClick} className='go-to'>Nosotros</Link>
                        <Link to="/#portafolio" onClick={handleLinkClick} className='go-to'>Portafolio</Link>
                        <Link to="/#desarrollo" onClick={handleLinkClick} className='go-to'>Servicios</Link>
                        <Link to="/#testimonios" onClick={handleLinkClick} className='go-to'>Testimonios</Link>
                        <Link to="/#comotrabajamos" onClick={handleLinkClick} className='go-to'>Paso a paso</Link>
                        <Link to="/contacto" onClick={handleLinkClick} className='go-to'>Contacto</Link>
                    </div>
                    <div className='menu-display_container'>
                        <div className='logo'>
                            <img src={sfb} alt="Sunflower"/>
                            <p>Marketing Digital</p>
                        </div>
                        <div className='socials'>
                            <a href="https://www.linkedin.com/company/sunfloweragencia" target='_blank' rel= "noopener noreferrer"><img src={lkd} alt="linkedin" /></a>
                            <a href="https://www.instagram.com/sunfloweragencia" target='_blank' rel= "noopener noreferrer"><img src={ig} alt="instagram" /></a>
                            <a href="https://www.facebook.com/sunfloweragencia" target='_blank' rel= "noopener noreferrer"><img src={fb} alt="facebook" /></a>
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
                        <a href="/contacto" onClick={handleLinkClick} className='cta-btn_black'>
                            Empezar un proyecto <img src={arrowb} alt="flecha" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;