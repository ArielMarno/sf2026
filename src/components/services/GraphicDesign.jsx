import '../../styles/components/services/graphicdesign.css'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

//assets
import dg1 from '../../assets/services/dg1.webp';
import dg2 from '../../assets/services/dg2.webm';
import dg3 from '../../assets/services/dg3.webp';
import dg4 from '../../assets/services/dg4.webm';

const services = [
  { id: 1, name: 'Diseño de logo', description: 'Cada logo se trabaja de forma personalizada para representar la esencia de tu marca y asegurar un correcto funcionamiento en todos los formatos y plataformas.' },
  { id: 2, name: 'Identidad de marca', description: 'Una identidad visual bien definida permite que tu proyecto sea reconocible y coherente en cada punto de contacto con tus clientes.' },
  { id: 3, name: 'Piezas visuales', description: 'Contenido visual pensado para redes sociales, flyers digitales, banners y otros formatos, alineado a la identidad de tu marca y a tus objetivos de comunicación.' },
  { id: 4, name: 'Papelería', description: 'Diseño de piezas impresas como tarjetas, folletos y otros materiales que refuerzan la identidad visual de tu marca en el mundo físico.' }
];

const GraphicDesign = () => {

    const [visibleService, setVisibleService] = useState(null);
    
    const toggleDescription = (id) => {
        setVisibleService(visibleService === id ? null : id);
    };

    const { ref, inView } = useInView({
        threshold: 0.5, // Se activa cuando el 50% del video es visible
        triggerOnce: true, // Solo activa una vez
    });

  return (
    <div className='graphic-design' id='diseno-grafico'>
        <main>
            <section className='title'>
                <h2 id='title'>Diseño Gráfico</h2>
            </section>
            <section>
                <div className='img-grid'>
                    <article>
                        <div className='box large'>
                            <img src={dg1} alt="diseño grafico" />
                        </div>
                        <div className='box small' ref={ref}>
                            {inView && (
                                <video
                                src={dg4}
                                loop
                                autoPlay
                                muted
                                controls={false}
                                preload="auto"
                                />
                            )}
                        </div>
                    </article>
                    <article>
                        <div className='box small tape' ref={ref}>
                            {inView && (
                                <video
                                src={dg2}
                                loop
                                autoPlay
                                muted
                                controls={false}
                                preload="auto"
                                />
                            )}
                        </div>
                        <div className='box large'>
                            <img src={dg3} alt="diseño grafico" />
                        </div>
                    </article>
                </div>
                <article className='text-container'>
                    <p className='text'>Ya sea que busques <span>crear una identidad</span> o <span>mejorar la que ya tenes</span>, logramos que obtengas <span>el resultado deseado</span>.</p>
                    <p className='text'>Encontramos tu <span>identidad visual</span> y el <span>estilo adecuado</span> para que <span>conectes con tus clientes</span> de la forma correcta.</p>
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

export default GraphicDesign