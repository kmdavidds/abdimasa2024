import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User
import Home from './views/UserViews/Home/Home.jsx';
import Profil from './views/UserViews/Profil/Profil.jsx';
import Berita from './views/UserViews/Berita/Berita.jsx';
import Wisata from './views/UserViews/Wisata/Wisata.jsx';
import UMKM from './views/UserViews/UMKM/UMKM.jsx';
import NotFound from './views/NotFound.jsx';

// Admin
import LoginAdmin from './views/AdminViews/Login/LoginAdmin.jsx';


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

          <Route path="/admin/login" element={<LoginAdmin />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;