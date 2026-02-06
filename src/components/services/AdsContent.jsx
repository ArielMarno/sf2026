import '../../styles/components/services/adscontent.css'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

//assets
import cm1 from '../../assets/services/cm1.webp';
import cm2 from '../../assets/services/cm2.webp';
import cm3 from '../../assets/services/cm3.webm';

const services = [
  { id: 1, name: 'Redes sociales', description: 'Nos encargamos de planificar y publicar contenido para mantener tus redes activas, coherentes y alineadas a los objetivos de tu marca.' },
  { id: 2, name: 'Publicidad online', description: 'La publicidad online ayuda a mostrar tus productos o servicios a las personas indicadas, segmentando públicos y midiendo resultados reales.' },
  { id: 3, name: 'Google negocios', description: 'Optimizamos y mantenemos tu perfil actualizado para mejorar la visibilidad de tu negocio en búsquedas locales y Google Maps.' }
];

const AdsContent = () => {

    const [visibleService, setVisibleService] = useState(null);

    const toggleDescription = (id) => {
        setVisibleService(visibleService === id ? null : id);
    };

    const { ref, inView } = useInView({
        threshold: 0.5, // Se activa cuando el 50% del video es visible
        triggerOnce: true, // Solo activa una vez
    });

  return (
    <div className='ads-content' id='contenidoypublicidad'>
         <main>
            <section className='title'>
                <h2 id='title'>Contenido &<br /> Publicidad</h2>
            </section>
            <section>
                <div className='img-grid'>
                    <article>
                        <div className='box large'>
                            <img src={cm1} alt="megafono" />
                        </div>
                        <div className='box small'>
                            <img src={cm2} alt="redes sociales" />
                        </div>
                    </article>
                    <article className='second-row'>
                        <div className='box' ref={ref}>
                            {inView && (
                                <video
                                src={cm3}
                                loop
                                autoPlay
                                muted
                                controls={false}
                                preload="auto"
                                />
                            )}
                        </div>
                    </article>
                </div>
                <article className='text-container'>
                    <p className='text'>No hay mejor forma de <span>generar confianza</span> que manteniendo tu <span>perfil activo</span> mostrando tus productos/servicios <span>profesionalmente</span>.</p>
                    <p className='text'>Gestionamos tus publicidades para que <span>alcances a las personas correctas</span>, filtrandolas y <span>midiendo el rendimiento</span>.</p>
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

export default AdsContent