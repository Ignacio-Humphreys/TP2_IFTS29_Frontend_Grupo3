import { Link } from 'react-router-dom';
import logoGoodTeam from '../src/assets/img/Home/logo-encabezado.jpg';

import fotoIgnacio from '../src/assets/img/Integrantes/Propias/Ignacio.jpeg';
import fotoLihue from '../src/assets/img/Integrantes/Propias/Anker.jpg';
import fotoCristel from '../src/assets/img/Integrantes/Propias/Foto perfil Frias.jpg';
import fotoLucas from '../src/assets/img/Integrantes/Propias/Lucas.jpeg';
import fotoDavid from '../src/assets/img/Integrantes/Propias/picaboutme.jpg';

import '../src/css/About.css';

const integrantes = [
  {
    nombre: 'Ignacio Tomás Humphreys',
    github: 'Ignacio-Humphreys',
    foto: fotoIgnacio,
    ruta: '/about/ignacio'
  },
  {
    nombre: 'Lihue Anker Díaz',
    github: 'AnkerYeray',
    foto: fotoLihue,
    ruta: '/about/lihue'
  },
  {
    nombre: 'Cristel Nazarena Frías',
    github: 'CristelFrias',
    foto: fotoCristel,
    ruta: '/about/cristel'
  },
  {
    nombre: 'Lucas Federico De Diego',
    github: 'lucasfedericodd',
    foto: fotoLucas,
    ruta: '/about/lucas'
  },
  {
    nombre: 'David Sebastian Giordano Rodriguez',
    github: 'Sebastian1601',
    foto: fotoDavid,
    ruta: '/about/david'
  }
];

function About() {
  return (
    <section className="about-page">
      <div className="about-container">

        <div className="about-header">
          <img
            src={logoGoodTeam}
            alt="Logo de G.O.O.D_TEAM"
            className="about-logo"
          />

          <p className="about-subtitle">
            DESARROLLO FRONTEND · GRUPO 3
          </p>

          <h1>G.O.O.D_TEAM</h1>

          <p className="about-description">
            Somos un equipo de cinco integrantes que comparte
            el interés por la tecnología, la programación y
            el desarrollo de proyectos web.
          </p>
        </div>

        <div className="about-team">
          <h2>Integrantes</h2>

          <p className="about-count">
            Mostrando los 5 integrantes del equipo
          </p>

          <div className="about-grid">
            {integrantes.map((integrante) => (
              <article
                className="about-card"
                key={integrante.nombre}
              >
                <img
                  src={integrante.foto}
                  alt={integrante.nombre}
                  className="about-card__image"
                />

                <div className="about-card__content">
                  <h3>{integrante.nombre}</h3>

                  <p>
                    GitHub:{' '}
                    <a
                      href={`https://github.com/${integrante.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {integrante.github}
                    </a>
                  </p>

                  <Link
                    to={integrante.ruta}
                    className="about-card__button"
                  >
                    Ver perfil
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
