import '../styles/components/platforms.css';

//Icons
import google from '../assets/platforms/google-black.webp';
import meta from '../assets/platforms/meta-black.webp';
import nube from '../assets/platforms/nube-black.webp';
import ad from '../assets/platforms/ad-black.webp';


const Platforms = () => {
  return (
    <div className='platforms'>
        <div className='platforms-content'>
            <div className='item'>
                <img className='google' src={google} alt="google negocios" />
            </div>
            <div className='item'>
                <img className='meta' src={meta} alt="meta" />
            </div>
            <div className='item'>
                <img className='nube' src={nube} alt="tienda nube" />
            </div>
            <div className='item'>
                <img className='ad' src={ad} alt="publicidad de google" />
            </div>
            <div className='item'>
                <img className='google' src={google} alt="google negocios" />
            </div>
            <div className='item'>
                <img className='meta' src={meta} alt="meta" />
            </div>
            <div className='item'>
                <img className='nube' src={nube} alt="tienda nube" />
            </div>
            <div className='item'>
                <img className='ad' src={ad} alt="publicidad de google" />
            </div>      
        </div>
    </div>
  )
}

export default Platforms