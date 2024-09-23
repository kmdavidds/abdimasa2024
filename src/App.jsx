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
import DashboardAdmin from './views/AdminViews/Dashboard/Main.jsx';
import ProtectedRoute from './components/AdminComp/ProtectedRoute.jsx';
import PageLayoutAdmin from './components/AdminComp/PageLayout.jsx';
import BeritaAdmin from './views/AdminViews/Dashboard/Berita.jsx';
import KalenderAdmin from './views/AdminViews/Dashboard/Kalender.jsx';
import KotakSaranAdmin from './views/AdminViews/Dashboard/KotakSaran.jsx';
import UMKMAdmin from './views/AdminViews/Dashboard/UMKM.jsx';
import WisataAdmin from './views/AdminViews/Dashboard/Wisata.jsx';


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
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <DashboardAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/berita",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <BeritaAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/kalender",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <KalenderAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/saran",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <KotakSaranAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/umkm",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <UMKMAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/wisata",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <WisataAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
]);

export default App;