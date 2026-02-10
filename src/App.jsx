import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // Importa useLocation
import ScrollToHash from './components/ScrollToHash';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions';
import Policy from './pages/Policy';

function App() {
  const location = useLocation();

  const darkRoutes = [
    '/contacto', 
    '/terminosycondiciones', 
    '/politicadeprivacidad'
  ];

  const isDarkPage = darkRoutes.includes(location.pathname);

  return (
    <div className={isDarkPage ? 'theme-dark' : 'theme-light'}>
      <ScrollToHash />
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/terminosycondiciones" element={<TermsAndConditions/>}/>
        <Route path="/politicadeprivacidad" element={<Policy/>}/>
      </Routes>
    </div>
  )
}

export default App;