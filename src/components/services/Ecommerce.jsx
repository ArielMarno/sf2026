import '../../styles/components/services/ecommerce.css'
import { useState } from 'react';

//assets
import eco1 from '../../assets/services/eco1.webp';
import eco2 from '../../assets/services/eco2.webp';


const services = [
  { id: 1, name: 'Tienda Nube', description: 'Desarrollo y configuración de tiendas en TiendaNube, una de las plataformas de e-commerce más utilizadas, con acompañamiento profesional como Partner oficial.' },
  { id: 2, name: 'Mercado Libre', description: 'Optimización y gestión de publicaciones para vender en MercadoLibre, mejorando la visibilidad de tus productos y el rendimiento de tus ventas.' }
];

const Ecommerce = () => {

    const [visibleService, setVisibleService] = useState(null);

    const toggleDescription = (id) => {
        setVisibleService(visibleService === id ? null : id);
    };

  return (
    <div className='ecommerce' id='ecommerce'>
        <main>
            <section className='title'>
                <h2 id='title'>Ecommerce</h2>
            </section>
            <section>
                <div className='img-grid'>
                    <div className='box small'>
                        <img src={eco1} alt="Tienda Nube" />
                    </div>
                    <div className='box large'>
                        <img src={eco2} alt="Mercado Libre" />
                    </div>
                </div>
                <article className='text-container'>
                    <p className='text'>Desarrollamos tu tienda online en <span>las mejores plataformas de venta</span>, ampliando el alcance de tu negocio y permitiendo vender en distintas zonas</p>
                    <p className='text'>Con <span>métodos de pago seguros y opciones de envío</span>, ofrecés a tus clientes una forma rápida y confiable de comprar.</p>
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

export default Ecommerce