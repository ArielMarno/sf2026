import '../styles/components/whatsapp.css';
import star from '../assets/brand/star.webp';

const Whatsapp = () => {
  return (
    <div className='wsp-cta'>
      <a href='https://wa.link/1jog8l' target='_blank' className='button'>
        <svg viewBox="0 0 200 200">
          <defs>
            <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="0">
              HABLEMOS • HABLEMOS • HABLEMOS • HABLEMOS •
            </textPath>
          </text>
        </svg>
        <div className="center-star"><img src={star} alt="estrella" /></div>
      </a>
    </div>
  )
}

export default Whatsapp