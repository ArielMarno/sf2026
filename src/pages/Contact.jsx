import { useState } from 'react';
import '../styles/pages/contact.css'
//assets
import arrowb from '../assets/arrow-black.webp';
import star from '../assets/brand/star.webp';

import ContactData from '../components/ContactData';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  // Estado para manejar el mensaje de éxito o carga
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío manual
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue o redireccione
    
    setStatus("Enviando...");

    const response = await fetch("https://formspree.io/f/mpqjzavj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("¡Gracias! Tu mensaje ha sido enviado.");
      alert("¡Formulario enviado con éxito!"); // Puedes usar un alert o un modal
      // Limpiar el formulario
      setFormData({ nombre: '', email: '', telefono: '' });
    } else {
      setStatus("Hubo un error. Inténtalo de nuevo.");
    }
  };

  return (    
    <div className='contact-us'>
      <Navbar />
      <Whatsapp />
      <main>
        <div className='title'>
          <h4><img src={star} alt="estrella" />Contactanos</h4>
          <h2>Hablemos sobre<br /> tu proyecto</h2>
        </div>

        {/* Quitamos action y method, agregamos onSubmit */}
        <form onSubmit={handleSubmit}>
          <section>
            <input 
              type="text" 
              name='nombre' 
              id='nombre' 
              placeholder='Como es tu nombre?' 
              value={formData.nombre} 
              autoComplete="off" 
              onChange={handleInputChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              id='email' 
              placeholder='Ingresa tu email' 
              value={formData.email} 
              autoComplete='off' 
              onChange={handleInputChange} 
              required 
            />
            <input 
              type="number" 
              name='telefono' 
              id='telefono' 
              placeholder='Ingresa tu teléfono' 
              value={formData.telefono} 
              autoComplete='off'
              onChange={handleInputChange} 
              required
            />
          </section>
          
          <p>Este formulario recolecta la información ingresada unicamente para poder establecer contacto. Podes revisar nuestra <a href="/politicadeprivacidad">Politica de Privacidad</a> para entender mejor como utilizamos y protejemos tus datos.</p>
          
          <button type='submit' className='cta-btn_black'>
            Enviar formulario <img src={arrowb} alt="flecha" />
          </button>

          {/* Mostrar el estado del envío al usuario */}
          {status && <p className="status-message">{status}</p>}
        </form>
      </main>
      <ContactData />
      <Footer />
    </div>
  )
}

export default Contact