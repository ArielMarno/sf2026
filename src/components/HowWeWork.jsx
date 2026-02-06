import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import star from '../assets/brand/star-blue.webp';
import '../styles/components/howwework.css';

const Card = ({ i, title, description, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="card-container" id='comotrabajamos'>
      <motion.div 
        className="card-content"
        style={{ 
          scale, 
          top: `calc(15vh + ${i * 25}px)` 
        }}
      >
        <div className="card-inner">
          <span className="card-number">0{i + 1}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const HowWeWork = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const titleY = useTransform(scrollYProgress, [0.92, 1], [0, -600]);

  const steps = [
    { title: "Reunión", description: "Nos interiorizamos en tu proyecto, entendemos la dirección que querés tomar y definimos cómo ayudarte. También acordamos el canal de comunicación que utilizaremos durante el proceso y la forma en que te iremos mostrando los avances. " },
    { title: "Planificación & Integración del contenido", description: "Reunimos el contenido que formará parte del proyecto: imágenes, videos, textos, mockups, etc. Analizamos tu servicio/producto y buscamos el enfoque más adecuado para desarrollar el diseño, la comunicación y la estructura del proyecto." },
    { title: "Definimos el diseño", description: "Presentamos una propuesta inicial para tu evaluación, donde buscamos reflejar la esencia de tu negocio y adaptarnos a tu estilo. A partir de tu feedback, ajustamos detalles y realizamos las modificaciones acordadas hasta llegar a la versión final." },
    { title: "Producción, prueba & aprobación final", description: "Implementamos el diseño final, realizamos pruebas de funcionamiento y revisamos cada detalle antes de la entrega. Una vez aprobado el proyecto, dejamos todo listo para su publicación o puesta en marcha." }
  ];

  return (
    <section ref={containerRef} className="how-we-work-wrapper">
      
      <motion.div 
        className="how-we-work-header"
        style={{ y: titleY }}
      >
        <div className='title'>
          <h4><img src={star} alt="estrella"/>Paso a paso</h4>
          <h2>Cómo trabajamos</h2>
        </div>
      </motion.div>

      <div className="cards-main-container">
        {steps.map((step, i) => {
          const targetScale = 1 - ((steps.length - i) * 0.05);
          const startRange = i * (1 / steps.length);
          
          return (
            <Card 
              key={i} 
              i={i} 
              {...step} 
              progress={scrollYProgress} 
              range={[startRange, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowWeWork;