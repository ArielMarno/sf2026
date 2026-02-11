import '../../styles/components/services/DesignDev.css';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

//assets
import dev1 from '../../assets/services/dev1.webp';
import dev2 from '../../assets/services/dev2.webm';
import dev3 from '../../assets/services/dev3.webm';
import dev4 from '../../assets/services/dev4.webp';

const services = [
  { id: 1, name: 'Adaptable a dispositivos moviles', description: 'Tu web se adapta a todos los dispositivos: celulares, tablets, notebooks, computadoras de escritorio, etc.' },
  { id: 2, name: 'Animaciones & interacciones', description: 'Creamos e implementamos animaciones pensadas para mejorar la experiencia de tus clientes y sorprenderlos de forma sutil y funcional.' },
  { id: 3, name: 'Optimización de SEO', description: 'Desde los textos hasta la estructura del sitio, diseñamos y desarrollamos con el objetivo de que tu web sea fácil de encontrar y este bien posicionada.' },
  { id: 4, name: 'Diseño UX/UI', description: 'Desarrollamos cada web acorde al producto o servicio ofrecido, garantizando accesibilidad, usabilidad y compatibilidad con motores de búsqueda.' }
];

const DesignDev = () => {

    const [visibleService, setVisibleService] = useState(null);

    const toggleDescription = (id) => {
        setVisibleService(visibleService === id ? null : id);
    };

    const { ref, inView } = useInView({
        threshold: 0.5, // Se activa cuando el 50% del video es visible
        triggerOnce: true, // Solo activa una vez
    });

    // Dentro de tu componente DesignDev
    const { ref: refTape, inView: inViewTape } = useInView({
        threshold: 0.2, // Bajamos un poco el umbral para que dispare antes en móvil
        triggerOnce: true,
    });

    const { ref: refLarge, inView: inViewLarge } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

  return (
    <div className='design-dev' id='desarrollo'>
        <main>
            <section className='title'>
                <h2 id='title'>Diseño &<br /> Desarrollo Web</h2>
            </section>
            <section>
                <div className='img-grid'>
                    <article>
                        <div className='box book'>
                            <img src={dev1} alt="desarrollo web" />
                        </div>
                        {/* Usamos refTape e inViewTape aquí */}
                        <div className='box tape' ref={refTape}>
                            {inViewTape && (
                                <video
                                    src={dev3}
                                    loop
                                    autoPlay
                                    muted
                                    playsInline // IMPORTANTE para que auto-reproduzca en móviles
                                    preload="auto"
                                />
                            )}
                        </div>
                    </article>

                    <article className='second-row'>
                        {/* Usamos refLarge e inViewLarge aquí */}
                        <div className='box large' ref={refLarge}>
                            {inViewLarge && (
                                <video
                                    src={dev2}
                                    loop
                                    autoPlay
                                    muted
                                    playsInline // IMPORTANTE para móviles
                                    preload="auto"
                                />
                            )}
                        </div>
                        <div className='box small'>
                            <img src={dev4} alt="desarrollo web" />
                        </div>
                    </article>
                </div>
                <article className='text-container'>
                    <p className='text'>Sitio webs <span>modernos</span>, <span>optimizados</span> y <span>personalizados</span> para cada modelo de negocio.</p>
                    <p className='text'>Desarrollados para <span>escalar con el tiempo</span>, modificar o imprementar integraciones.</p>
                </article>
                <div className='content'>
                  {services.map((service) => (
                        <div className="item" key={service.id}>
                        <div className="service-name">
                            <h3>{service.name}</h3>
                            <div className="wrapper">
                            <input type="checkbox" checked={visibleService === service.id} onChange={() => toggleDescription(service.id)} />
                            <div className="btn"></div>
                            </div>
                        </div>
                        {visibleService === service.id && <p className='text'>{service.description}</p>}
                        </div>
                    ))}
                </div>
            </section>
        </main>

    </div>
  )
}

export default DesignDev