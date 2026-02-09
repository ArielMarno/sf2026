import '../styles/pages/termsandconditions.css';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';


const TermsAndConditions = () => {
  return (
    <div className='terms-and-conditions'>
        <Navbar />
        <Whatsapp />
        <div className='terms' id='terms'>
            <div className='banner'>
                <h2>Terminos & Condiciones</h2>
            </div>
            <section>
                <article>
                    <div className='title'>
                        <h4>Condiciones de Pago & <br /> Reserva de Servicio</h4>
                    </div>
                    <div className='text'>
                        <p>Para dar inicio a cualquier proyecto o prestación de servicios, el cliente deberá realizar un pago inicial en concepto de anticipo y reserva de cupo.</p>
                        <ul>
                            <li><span>Porcentaje de Anticipo:</span> Dependiendo de la naturaleza y complejidad del servicio solicitado, se requerirá un pago anticipado equivalente al 50% o 70% del presupuesto total, según se especifique en la cotización o propuesta comercial enviada al cliente.</li>
                            <li><span>Confirmación:</span> El servicio no se considerará agendado ni se iniciará labor alguna hasta que Sunflower reciba el comprobante de pago y los fondos estén efectivamente acreditados.</li>
                            <li><span>Liquidación Final:</span> El saldo restante (30% o 50%, según corresponda) deberá ser liquidado de acuerdo con los hitos establecidos en la propuesta o, en su defecto, de forma previa a la entrega final de los entregables o la conclusión del servicio.</li>
                            <li><span>Entrega y retención:</span> Sunflower se reserva el derecho de no entregar materiales finales, archivos editables, informes definitivos o acceso a servicios hasta que el pago total del servicio haya sido cubierto por el cliente.</li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className='title'>
                        <h4>Gastos Administrativos & <br /> Cancelación</h4>
                    </div>
                    <div className='text'>
                        <p>El anticipo tiene como finalidad cubrir los costos operativos iniciales, la reserva de tiempo profesional y la planificación estratégica del proyecto.</p>
                        <ul>
                            <li>En caso de que el cliente decida cancelar el servicio de manera unilateral una vez realizado el pago inicial, Sunflower se reserva el derecho de retener el anticipo en concepto de indemnización por costos incurridos y bloqueo de agenda.</li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className='title'>
                        <h4>Obligaciones del Cliente & <br /> Suministro de Información</h4>
                    </div>
                    <div className='text'>
                        <p>Para el cumplimiento del cronograma pactado, el cliente se compromete a entregar toda la información, activos (logos, textos, accesos) y materiales necesarios en un plazo máximo de 5 días hábiles tras el pago del anticipo.</p>
                        <ul>
                            <li><span>Retrasos:</span> Cualquier demora en la entrega de estos materiales por parte del cliente resultará en un aplazamiento proporcional de la fecha de entrega final. Si el retraso supera los 10 días, el proyecto podrá ser pausado y sujeto a una tarifa de reactivación.</li>
                        </ul>
                    </div>
                </article>
                 <article>
                    <div className='title'>
                        <h4>Propiedad Intelectual</h4>
                    </div>
                    <div className='text'>
                        <p>Los derechos de propiedad intelectual y de explotación sobre el trabajo final se transferirán exclusivamente al cliente única y plenamente una vez que se haya liquidado el 100% del pago acordado.</p>
                        <ul>
                            <li>Hasta que no se complete el pago total, la titularidad de las obras pertenece al prestador.</li>
                            <li>Sunflower se reserva el derecho de exhibir el trabajo en su portafolio profesional con fines promocionales, salvo acuerdo de confidencialidad en contra.</li>
                        </ul>
                    </div>
                </article>
                 <article>
                    <div className='title'>
                        <h4>Limitación de Responsabilidad</h4>
                    </div>
                    <div className='text'>
                        <p>Sunflower se compromete a ejecutar los servicios con la mayor diligencia profesional. No obstante, Sunflower no será responsable por pérdidas de beneficios, lucro cesante o daños indirectos derivados del uso de los entregables o servicios prestados, salvo en casos de negligencia grave o dolo demostrable. La responsabilidad total máxima estará limitada al importe pagado por el servicio en cuestión.</p>
                    </div>
                </article>
                 <article>
                    <div className='title'>
                        <h4>Responsabilidad Frente a <br />Terceros & Reclamaciones</h4>
                    </div>
                    <div className='text'>
                        <p>El cliente garantiza que todos los materiales (imágenes, textos, marcas, bases de datos o software) proporcionados al prestador para la ejecución del servicio son de su propiedad o cuenta con las licencias necesarias para su uso.</p>
                        <ul>
                            <li><span>Indemnidad:</span> El cliente mantendrá al prestador indemne frente a cualquier queja, reclamación, demanda o sanción interpuesta por terceros (incluyendo, pero no limitado a, infracciones de derechos de autor, propiedad industrial o protección de datos).</li>
                            <li><span>Costos Legales: </span>En caso de que Sunflower sea objeto de una reclamación legal debido a materiales proporcionados por el cliente o instrucciones específicas de este, el cliente asumirá todos los gastos de defensa legal y las posibles indemnizaciones que de ello se deriven.</li>
                            <li><span>Uso del Servicio:</span> Sunflower no se hace responsable por el uso inadecuado, ilegal o difamatorio que el cliente pueda dar a los productos o servicios finales una vez entregados.</li>
                        </ul>
                    </div>
                </article>
                 <article>
                    <div className='title'>
                        <h4>Confidencialidad</h4>
                    </div>
                    <div className='text'>
                        <p>Ambas partes se comprometen a mantener bajo estricta reserva toda la información estratégica, comercial o técnica intercambiada durante la prestación del servicio. Esta obligación de confidencialidad persistirá incluso después de finalizada la relación contractual, prohibiendo la divulgación a terceros sin el consentimiento expreso y por escrito de la otra parte.</p>
                    </div>
                </article>
                 <article>
                    <div className='title'>
                        <h4>Revisiones y Modificaciones</h4>
                    </div>
                    <div className='text'>
                        <p>Para evitar que el proyecto se extienda indefinidamente, se incluyen hasta 3 rondas de revisiones sobre la entrega inicial, siempre que estas no impliquen un cambio en el alcance original. Las solicitudes de cambio adicionales o modificaciones estructurales fuera de lo pactado se cotizarán como un excedente/mantenimiento por separado.</p>
                    </div>
                </article>
                
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default TermsAndConditions