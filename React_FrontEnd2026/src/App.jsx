
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Home from '../views/Home.jsx';
import About from '../views/About.jsx';
import GhibliPage from '../views/API_Ghibli.jsx';
import Contact from '../views/Contact.jsx';
import Links from '../views/Links.jsx';
import NotFound from '../views/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="API_Studio_Ghibli" element={<GhibliPage />} />

        <Route path="contact" element={<Contact />} />

        <Route path="links" element={<Links />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
};

export default App
