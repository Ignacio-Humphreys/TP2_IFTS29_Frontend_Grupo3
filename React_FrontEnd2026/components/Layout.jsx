import { NavLink, Outlet } from 'react-router-dom';
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
  return (
    <div className="app">
      <header className="site-header">
        <NavLink
          to="/"
          className="site-logo"
          aria-label="Ir al inicio de G.O.O.D_TEAM"
        >
          <img
            src={logoGoodTeam}
            alt="Logo oficial de G.O.O.D_TEAM"
            className="site-logo__image"
          />
        </NavLink>

        <nav
          className="site-nav"
          aria-label="Navegación principal"
        >
          {navegacion.map((item) => (
            <NavLink
              key={item.ruta}
              to={item.ruta}
              end={item.ruta === '/'}
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

              <span>{item.nombre}</span>
            </NavLink>
          ))}
        </nav>
      </header>

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
  );
}

export default Layout;
