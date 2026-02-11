import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

// Assets
import sfb from '../assets/brand/sunflower-white.webp';
import arrow from '../assets/arrow-white.webp';
import arrowb from '../assets/arrow-black.webp';
import Menu from './Menu';
import WhiteMenu from './WhiteMenu';
import lkd from '../assets/socials/linkedin.webp';
import ig from '../assets/socials/instagram.webp';
import fb from '../assets/socials/facebook.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='navbar_container'>
                <div className='navbar_logo-container'>
                    <Link to="/" className='logo'>Sunflower</Link>
                </div>

                <div className='navbar_btn-container'>
                    <a href="/contacto" className='navbar-cta-btn'>
                        Empezar un proyecto <img src={arrow} alt="flecha" />
                    </a>
                    <div className='menu'>
                        <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
                    </div>
                </div>
            </div>

            {/* Overlay del Menú Desplegable */}
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <div className='menu-rsp-container'>
                        <WhiteMenu toggleMenu={toggleMenu} isOpen={isOpen} />
                </div>
                <div className='navbar_links-wrapper'>    
                    <div className='navbar_links-content'>
                        <div className='go-to_components'>
                            <Link to="/#inicio" onClick={handleLinkClick} className='go-to'>Inicio</Link>
                            <Link to="/#nosotros" onClick={handleLinkClick} className='go-to'>Nosotros</Link>
                            <Link to="/#portafolio" onClick={handleLinkClick} className='go-to'>Portafolio</Link>
                            <Link to="/#desarrollo" onClick={handleLinkClick} className='go-to'>Servicios</Link>
                            <Link to="/#testimonios" onClick={handleLinkClick} className='go-to'>Testimonios</Link>
                            <Link to="/#comotrabajamos" onClick={handleLinkClick} className='go-to'>Paso a paso</Link>
                            <Link to="/contacto" onClick={handleLinkClick} className='go-to'>Contacto</Link>
                        </div>

                        <div className='menu-display_info'>
                            <div className='navbar_logo_menu'>
                                <img src={sfb} alt="Sunflower" />
                                <p>Marketing Digital</p>
                            </div>
                            
                            <div className='navbar_contact_menu'>
                                <div className='contact-item'>
                                    <h5>Teléfono</h5>
                                    <p>(+54) 9 1170606852</p>
                                </div>
                                <div className='contact-item'>
                                    <h5>E-mail</h5>
                                    <p>contacto<br />@sunfloweragencia.com</p>
                                </div>
                            </div>

                            <div className='navbar_socials_menu'>
                                <a href="https://linkedin.com" target='_blank' rel="noreferrer" aria-label='Perfil de LinkedIn' title='Perfil de LinkedIn'><img src={lkd} alt="linkedin" /></a>
                                <a href="https://instagram.com" target='_blank' rel="noreferrer" aria-label='Perfil de Instagram' title='Perfil de Instagram'><img src={ig} alt="instagram" /></a>
                                <a href="https://facebook.com" target='_blank' rel="noreferrer" aria-label='Perfil de Facebook' title='Perfil de Facebook'><img src={fb} alt="facebook" /></a>
                            </div>

                            <a href="/contacto" onClick={handleLinkClick} className='cta-btn_black nvbar-cta-btn'>
                                Empezar un proyecto <img src={arrowb} alt="flecha" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;