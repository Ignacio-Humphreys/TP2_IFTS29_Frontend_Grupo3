
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import logoGoodTeam from '../src/assets/img/Home/logo-encabezado.jpg';
import '../src/css/Layout.css';

const navegacion = [
  {
    ruta: '/',
    nombre: 'Inicio',
    icono: '⌂'
  },
  {
    ruta: '/about',
    nombre: 'Nosotros',
    icono: '♧'
  },
  {
    ruta: '/links',
    nombre: 'Proyecto',
    icono: '▤'
  },
  {
    ruta: '/API_Studio_Ghibli',
    nombre: 'API Studio Ghibli',
    icono: '✦'
  },
  {
    ruta: '/contact',
    nombre: 'Contacto',
    icono: '✉'
  }
];

function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  // Cerrar el menú móvil al cambiar de página.
  useEffect(() => {
    setMenuAbierto(false);
  }, [location.pathname]);

  // Cerrar el menú al presionar Escape.
  useEffect(() => {
    function cerrarConEscape(event) {
      if (event.key === 'Escape') {
        setMenuAbierto(false);
      }
    }

    window.addEventListener('keydown', cerrarConEscape);

    return () => {
      window.removeEventListener('keydown', cerrarConEscape);
    };
  }, []);

  return (
    <div className="app">
      {/* Botón para abrir el menú en celulares */}
      <button
        type="button"
        className="sidebar-toggle"
        aria-label={
          menuAbierto ? 'Cerrar menú' : 'Abrir menú'
        }
        aria-expanded={menuAbierto}
        aria-controls="navegacion-lateral"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span aria-hidden="true">
          {menuAbierto ? '✕' : '☰'}
        </span>
        <span>Menú</span>
      </button>

      {/* Fondo oscuro para el menú móvil */}
      {menuAbierto && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Cerrar menú"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        id="navegacion-lateral"
        className={`site-sidebar ${
          menuAbierto ? 'site-sidebar--open' : ''
        }`}
      >
        <NavLink
          to="/"
          className="site-logo"
          aria-label="Ir al inicio de G.O.O.D_TEAM"
          onClick={() => setMenuAbierto(false)}
        >
          <img
            src={logoGoodTeam}
            alt="Logo oficial de G.O.O.D_TEAM"
            className="site-logo__image"
          />
        </NavLink>

        <div className="sidebar-divider" />

        <p className="sidebar-label">NAVEGACIÓN</p>

        <nav
          className="site-nav"
          aria-label="Navegación principal"
        >
          {navegacion.map((item) => (
            <NavLink
              key={item.ruta}
              to={item.ruta}
              end={item.ruta === '/'}
              onClick={() => setMenuAbierto(false)}
              className={({ isActive }) =>
                [
                  'site-nav__link',
                  isActive ? 'site-nav__link--active' : '',
                  item.ruta === '/API_Studio_Ghibli'
                    ? 'site-nav__link--ghibli'
                    : ''
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              <span
                className="site-nav__icon"
                aria-hidden="true"
              >
                {item.icono}
              </span>

              <span className="site-nav__text">
                {item.nombre}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-divider" />
          <p>G.O.O.D_TEAM</p>
          <span>Desarrollo Frontend con React</span>
        </div>
      </aside>

      {/* Contenido de las páginas */}
      <div className="app-content">
        <main className="main-container">
          <Outlet />
        </main>

        <footer className="site-footer">
          <p>
            <strong>G.O.O.D_TEAM</strong> · Desarrollo Frontend con React
          </p>

          <p>
            Creatividad, tecnología y trabajo en equipo.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
