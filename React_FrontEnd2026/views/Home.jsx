
import { Link } from 'react-router-dom';
import '../src/css/Home.css';

import nosotrosImg from '../src/assets/img/Home/nosotros.jpg';
import proyectoImg from '../src/assets/img/Home/proyecto.jpg';
import arquitecturaImg from '../src/assets/img/Home/arquitectura.jpg';
import bitacoraImg from '../src/assets/img/Home/bitacora.jpg';
import ghibliImg from '../src/assets/img/Home/ghibli.jpg';

const secciones = [
  {
    numero: '01',
    icono: '♟',
    titulo: 'Nosotros',
    descripcion: 'Conocé a los cinco integrantes de G.O.O.D_TEAM y explorá nuestros perfiles del TP1.',
    imagen: nosotrosImg,
    ruta: '/about',
    clase: 'nosotros'
  },
  {
    numero: '02',
    icono: '▤',
    titulo: 'Proyecto',
    descripcion: 'Descubrí los objetivos, las tecnologías y el funcionamiento de nuestro trabajo.',
    imagen: proyectoImg,
    ruta: '/links',
    clase: 'proyecto'
  },
  {
    numero: '03',
    icono: '⌘',
    titulo: 'Arquitectura',
    descripcion: 'Explorá la estructura de carpetas, componentes y vistas del proyecto.',
    imagen: arquitecturaImg,
    ruta: '/links#arquitectura',
    clase: 'arquitectura'
  },
  {
    numero: '04',
    icono: '✎',
    titulo: 'Bitácora',
    descripcion: 'Conocé nuestros avances, desafíos y aprendizajes durante el desarrollo.',
    imagen: bitacoraImg,
    ruta: '/links#bitacora',
    clase: 'bitacora'
  },
  {
    numero: '05',
    icono: '✦',
    titulo: 'API Studio Ghibli',
    descripcion: 'Explorá películas, personajes, lugares, especies y vehículos.',
    imagen: ghibliImg,
    ruta: '/API_Studio_Ghibli',
    clase: 'ghibli'
  }
];

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__overlay" aria-hidden="true" />

        <div className="home-hero__content">
          <span className="home-eyebrow">
            ✧ G.O.O.D_TEAM ✧
          </span>

          <h1>
            Bienvenidos
            <span>a nuestro proyecto</span>
          </h1>

          <p className="home-hero__description">
            Un equipo, muchas ideas y un mismo objetivo:
            combinar tecnología, creatividad y aprendizaje
            para crear experiencias web.
          </p>

          <div className="home-hero__actions">
            <a
              href="#explorar"
              className="home-button home-button--primary"
            >
              Conocé nuestro trabajo
              <span aria-hidden="true">↓</span>
            </a>

            <Link
              to="/API_Studio_Ghibli"
              className="home-button home-button--outline"
            >
              Explorar Studio Ghibli
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <a href="#explorar" className="home-hero__scroll">
          DESLIZÁ PARA DESCUBRIR
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="home-explore" id="explorar">
        <div className="home-explore__heading">
          <span className="home-eyebrow">
            UN RECORRIDO POR NUESTRO TRABAJO
          </span>

          <h2>
            Cada proyecto tiene
            <span> una historia</span>
          </h2>

          <p>
            Te invitamos a descubrir quiénes somos,
            cómo trabajamos y qué estamos creando.
          </p>
        </div>

        <div className="home-sections">
          {secciones.map((seccion) => (
            <Link
              key={seccion.numero}
              to={seccion.ruta}
              className={`home-section-card home-section-card--${seccion.clase}`}
            >
              <div className="home-section-card__image">
                <img
                  src={seccion.imagen}
                  alt={`Ilustración de la sección ${seccion.titulo}`}
                  loading="lazy"
                />
              </div>

              <div className="home-section-card__body">
                <div className="home-section-card__top">
                  <span className="home-section-card__number">
                    {seccion.numero}
                  </span>

                  <span
                    className="home-section-card__icon"
                    aria-hidden="true"
                  >
                    {seccion.icono}
                  </span>
                </div>

                <div className="home-section-card__content">
                  <h3>{seccion.titulo}</h3>
                  <p>{seccion.descripcion}</p>
                </div>

                <span className="home-section-card__arrow">
                  <span>Explorar</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-closing">
        <span className="home-eyebrow">
          CREATIVIDAD + TECNOLOGÍA
        </span>

        <h2>
          Las mejores ideas se construyen en equipo.
        </h2>

        <p>
          G.O.O.D_TEAM — Un espacio para aprender,
          crear y seguir creciendo.
        </p>

        <a
          href="#explorar"
          className="home-button home-button--primary"
        >
          Seguir explorando
          <span aria-hidden="true">↑</span>
        </a>
      </section>
    </div>
  );
}

export default Home;
