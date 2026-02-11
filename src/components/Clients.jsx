import '../styles/components/clients.css';
import ImageTrail from '../components/ImageTrail';
//assets
import arrow from '../assets/arrow-black.webp';
import star from '../assets/brand/star.webp';

const Clients = () => {
  return (
    <div className='clients'  id='testimonios'>
          <div className='trail' style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", zIndex: 1 }}>
            <ImageTrail
              items={[
                "/milano.webp",
                "/agro.webp",
                "/edsa.webp",
                "/amapola.webp",
                "/caysa.webp",
                "/m44.webp",
                "/gt.webp",
                "/bs.webp",
                "/camorra.webp",
                "/bruscagin.webp"
              ]}
              variant={1}
            />
          </div>
        <div className='title'>
            <h4><img src={star} alt="estrella" />Nuestra experiencia nos avala</h4>
            <h2>Conoce los testimonios de <br />nuestros clientes.</h2>
             <a href="https://www.google.com/maps/place/SunFlower+-+Agencia+digital/@-38.45155,-63.5989957,4z/data=!4m16!1m9!3m8!1s0x959c1175f62af1d5:0x7e398524dac9732f!2sSunFlower+-+Agencia+digital!8m2!3d-38.45155!4d-63.5989957!9m1!1b1!16s%2Fg%2F11v67f_73b!3m5!1s0x959c1175f62af1d5:0x7e398524dac9732f!8m2!3d-38.45155!4d-63.5989957!16s%2Fg%2F11v67f_73b?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D" 
             target="_blank" className='cta-btn_black'>Ver reseñas <img src={arrow} alt="flecha"/></a>
        </div>
    </div>
  )
}

export default Clients