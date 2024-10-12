import React from 'react';
import { createBrowserRouter } from "react-router-dom";

// User
import Home from './views/UserViews/Home/Home.jsx';
import Profil from './views/UserViews/Profil/Profil.jsx';
import Berita from './views/UserViews/Berita/Berita.jsx';
import DetailBerita from './views/UserViews/Berita/DetailBerita.jsx';
import Wisata from './views/UserViews/Wisata/Wisata.jsx';
import UMKM from './views/UserViews/UMKM/UMKM.jsx';
import NotFound from './views/NotFound.jsx';
import PageLayout from './components/UserComp/PageLayout.jsx';

// Admin
import LoginAdmin from './views/AdminViews/Login/LoginAdmin.jsx';
import DashboardAdmin from './views/AdminViews/Dashboard/Main.jsx';
import ProtectedRoute from './components/AdminComp/ProtectedRoute.jsx';
import PageLayoutAdmin from './components/AdminComp/PageLayout.jsx';
import BeritaAdmin from './views/AdminViews/Dashboard/Berita/Berita.jsx';
import CreateBerita from './views/AdminViews/Dashboard/Berita/CreateBerita.jsx';
import EditBerita from './views/AdminViews/Dashboard/Berita/EditBerita.jsx';
import KalenderAdmin from './views/AdminViews/Dashboard/Kalender/Kalender.jsx';
import CreateKalender from './views/AdminViews/Dashboard/Kalender/CreateKalender.jsx';
import KotakSaranAdmin from './views/AdminViews/Dashboard/KotakSaran.jsx';
import UMKMAdmin from './views/AdminViews/Dashboard/UMKM/UMKM.jsx';
import CreateUMKM from './views/AdminViews/Dashboard/UMKM/CreateUMKM.jsx';
import WisataAdmin from './views/AdminViews/Dashboard/Wisata/Wisata.jsx';
import CreateWisata from './views/AdminViews/Dashboard/Wisata/CreateWisata.jsx';
import PendudukAdmin from './views/AdminViews/Dashboard/Penduduk.jsx';

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
    path: "/berita/:id",
    element: (
      <PageLayout>
        <DetailBerita />
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
    path: "/admin/berita/create",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <CreateBerita />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/berita/edit/:id",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <EditBerita />
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
    path: "/admin/kalender/create",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <CreateKalender />
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
    path: "/admin/umkm/create",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <CreateUMKM />
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
  {
    path: "/admin/wisata/create",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <CreateWisata />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/penduduk",
    element: (
      <ProtectedRoute>
        <PageLayoutAdmin>
          <PendudukAdmin />
        </PageLayoutAdmin>
      </ProtectedRoute>
    ),
  },
]);

export default App;