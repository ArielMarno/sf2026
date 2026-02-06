import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import Home from './pages/Home'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions';
import Policy from './pages/Policy';

function App() {

  return (
    <div>
      <ScrollToHash />
      <Whatsapp />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/terminosycondiciones" element={<TermsAndConditions/>}/>
        <Route path="/politicadeprivacidad" element={<Policy/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
