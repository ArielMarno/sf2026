import '../styles/pages/privacypolicy.css';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';

const Policy = () => {
  return (
    <div className='privacy-policy'>
        <Navbar />
        <Whatsapp />
        <div className='policy' id='policy'>
            <div className='banner'>
                <h2>Política de Privacidad</h2>
            </div>
                <section>
                    <article>
                        <div className='title'>
                            <h4>¿Qué datos recogemos?</h4>
                        </div>
                        <div className='text'>
                            <p>Únicamente recogemos los datos que nos facilitas voluntariamente a través de nuestro formulario: nombre, correo electrónico y teléfono.</p>
                        </div>
                    </article>
                    <article>
                        <div className='title'>
                            <h4>¿Para qué usamos tus datos?</h4>
                        </div>
                        <div className='text'>
                            <p>La finalidad exclusiva de la recogida de estos datos es establecer contacto contigo. Utilizaremos tu información para resolver dudas, enviar presupuestos solicitados o agendar una llamada informativa.</p>
                            <p><span>Nota importante:</span> No utilizaremos estos datos para enviar boletines de noticias (newsletters) ni publicidad masiva, a menos que nos des un consentimiento específico para ello más adelante.</p>
                        </div>
                    </article>
                    <article>
                        <div className='title'>
                            <h4>Base legal</h4>
                        </div>
                        <div className='text'>
                            <p>Tratamos tus datos basándonos en el consentimiento que nos otorgas al hacer clic en el botón de "Enviar formulario" y tras haber aceptado esta política.</p>
                        </div>
                    </article>
                    <article>
                        <div className='title'>
                            <h4>Conservación de los datos</h4>
                        </div>
                        <div className='text'>
                            <p>Mantendremos tus datos solo durante el tiempo necesario para cumplir con la finalidad de tu consulta o hasta que nos solicites su eliminación.</p>
                        </div>
                    </article>
                    <article>
                        <div className='title'>
                            <h4>Tus derechos</h4>
                        </div>
                        <div className='text'>
                            <p>Tienes derecho a saber qué datos tenemos de ti, a corregirlos o a pedirnos que los borremos. Para ejercer estos derechos, puedes escribirnos a: <span>contacto@sunfloweragencia.com</span></p>
                        </div>
                    </article>
                </section>
            </div>
            <Footer />
    </div>
  )
}

export default Policy