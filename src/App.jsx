import React from 'react';
import { createBrowserRouter } from "react-router-dom";

// User
import Home from './views/UserViews/Home/Home.jsx';
import Profil from './views/UserViews/Profil/Profil.jsx';
import Berita from './views/UserViews/Berita/Berita.jsx';
import Wisata from './views/UserViews/Wisata/Wisata.jsx';
import UMKM from './views/UserViews/UMKM/UMKM.jsx';
import NotFound from './views/NotFound.jsx';
import PageLayout from './components/UserComp/PageLayout.jsx';

// Admin
import LoginAdmin from './views/AdminViews/Login/LoginAdmin.jsx';

const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: "/profil",
    element: (
      <PageLayout>
        <Profil />
      </PageLayout>
    ),
  },
  {
    path: "/berita",
    element: (
      <PageLayout>
        <Berita />
      </PageLayout>
    ),
  },
  {
    path: "/wisata",
    element: (
      <PageLayout>
        <Wisata />
      </PageLayout>
    ),
  },
  {
    path: "/UMKM",
    element: (
      <PageLayout>
        <UMKM />
      </PageLayout>
    ),
  },
  {
    path: "/*",
    element: (
      <NotFound />
    ),
  },
  {
    path: "/admin/login",
    element: (
      <LoginAdmin />
    ),
  },
]);

export default App;