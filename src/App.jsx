import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home.jsx';
import Profil from './views/Profil/Profil.jsx';
import Berita from './views/Berita/Berita.jsx';
import Wisata from './views/Wisata/Wisata.jsx';
import UMKM from './views/UMKM/UMKM.jsx';
import NotFound from './views/NotFound.jsx';




const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/UMKM" element={<UMKM />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;