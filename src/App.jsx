import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home.jsx';
import Profil from './views/profil.jsx';
import Berita from './views/Berita.jsx';
import Wisata from './views/Wisata.jsx';
import UMKM from './views/UMKM.jsx';
import NotFound from './views/NotFound.jsx';




const App = () => {
    return (
        <>
            <Router>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/profil" element={<Profil />}/>
                <Route path="/berita" element={<Berita />}/>
                <Route path="/wisata" element={<Wisata/>}/>
                <Route path="/UMKM" element={<UMKM />}/>
                <Route path="/*" element={<NotFound />}/>
              </Routes>
            </Router>
        </>
    );
};

export default App;