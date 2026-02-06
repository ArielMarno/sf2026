import Navbar from '../components/Navbar'
import { useState } from 'react';
import '../styles/pages/contact.css'
//assets
import arrowb from '../assets/arrow-black.webp';
import star from '../assets/brand/star.webp';

import ContactData from '../components/ContactData';

const Contact = () => {

      // Almacenar los datos del formulario
      const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
      });
    
      // Manejar cambios en los inputs
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (    
    <div className='contact-us'>
      <Navbar />
      <main>
        <div className='title'>
          <h4><img src={star} alt="estrella" />Contactanos</h4>
          <h2>Hablemos sobre<br /> tu proyecto</h2>
        </div>
        <form action="">
          <section>
            <input type="text" name='nombre' id='nombre' placeholder='Como es tu nombre?' value={formData.nombre} autoComplete="off" onChange={handleInputChange} required />
            <input type="text" name="email" id='email' placeholder='Ingresa tu email' value={formData.email} autoComplete='off' onChange={handleInputChange} required />
            <input type="number" name='telefono' id='telefono' placeholder='Ingresa tu teléfono' value={formData.telefono} autoComplete='off'
            onChange={handleInputChange} required/>
          </section>
          <p>Este formulario recolecta la información ingresada unicamente para poder establecer contacto. Podes revisar nuestra <a href="/politicadeprivacidad">Politica de Privacidad</a> para entender mejor como utilizamos y protejemos tus datos.</p>
          <button type='submit'className='cta-btn_black'>Enviar formulario <img src={arrowb} alt="flecha" /></button>
        </form>
      </main>
      <ContactData />
    </div>
  )
}

export default Contact