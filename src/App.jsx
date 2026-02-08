import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions';
import Policy from './pages/Policy';

function App() {

  return (
    <div>
      <ScrollToHash />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/terminosycondiciones" element={<TermsAndConditions/>}/>
        <Route path="/politicadeprivacidad" element={<Policy/>}/>
      </Routes>
    </div>
  )
}

export default App
