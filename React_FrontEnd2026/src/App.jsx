import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout.jsx';
import Home from '../views/Home.jsx';
import About from '../views/About.jsx';
import GhibliPage from '../views/API_Ghibli.jsx';
import Contact from '../views/Contact.jsx';
import Links from '../views/Links.jsx';
import NotFound from '../views/NotFound.jsx';

import PerfilIgnacio from '../views/integrantes/PerfilIgnacio.jsx';
import PerfilLihue from '../views/integrantes/PerfilLihue.jsx';
import PerfilCristel from '../views/integrantes/PerfilCristel.jsx';
import PerfilLucas from '../views/integrantes/PerfilLucas.jsx';
import PerfilDavid from '../views/integrantes/PerfilDavid.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* INICIO */}
        <Route index element={<Home />} />

        {/* NOSOTROS */}
        <Route path="about" element={<About />} />

        {/* PERFILES DE INTEGRANTES */}
        <Route
          path="about/ignacio"
          element={<PerfilIgnacio />}
        />

        <Route
          path="about/lihue"
          element={<PerfilLihue />}
        />

        <Route
          path="about/cristel"
          element={<PerfilCristel />}
        />

        <Route
          path="about/lucas"
          element={<PerfilLucas />}
        />

        <Route
          path="about/david"
          element={<PerfilDavid />}
        />

        {/* API STUDIO GHIBLI */}
        <Route
          path="API_Studio_Ghibli"
          element={<GhibliPage />}
        />

        {/* OTRAS SECCIONES */}
        <Route path="contact" element={<Contact />} />

        <Route path="links" element={<Links />} />

        {/* PÁGINA NO ENCONTRADA */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
