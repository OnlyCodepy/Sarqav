import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//nuevas rutas creadas para estilo big

import Education from './pages/Education';
import Museum from './pages/Museum';
import Sustainability from './pages/Sustainability';
import Landscape from './pages/Landscape';
import Engineering from './pages/Engineering';
import Architecture from './pages/Architecture';
import Planning from './pages/Planning';
import Products from './pages/Products';
//aqui empiezan las rutas antiguas

import Home from './pages/Home';
import Tiempo from './pages/Tiempo';
import Climate from './pages/Climate';
import Museo from './pages/Museo';
import Uchumarca from './pages/Uchumarca';
import Marias from './pages/Marias';

import MainLayout from './layouts/MainLayout';
import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3300);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/products" element={<Products />} />


          <Route path="/" element={<Home />} />
          <Route path="/graficas" element={<Tiempo />} />
          <Route path='/climate' element={<Climate />} />
          <Route path="/uchumarca" element={<Uchumarca />} />
          <Route path="/marias" element={<Marias />} />
          <Route path="/museo" element={<Museo />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
