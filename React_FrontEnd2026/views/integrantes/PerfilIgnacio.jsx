
import { useState } from 'react';
import { Link } from 'react-router-dom';

import fotoIgnacio from '../../src/assets/img/Integrantes/Propias/Ignacio.jpeg';

import pelicula1 from '../../src/assets/img/Integrantes/Peliculas/La_Pistola_Desnuda.jpg';
import pelicula2 from '../../src/assets/img/Integrantes/Peliculas/Airplane.jpg';
import pelicula3 from '../../src/assets/img/Integrantes/Peliculas/Avengers_Endgame.jpg';

import disco1 from '../../src/assets/img/Integrantes/Discos/Delivering_the_black.jpg';
import disco2 from '../../src/assets/img/Integrantes/Discos/Holy_hell.jpg';
import disco3 from '../../src/assets/img/Integrantes/Discos/Toxicity.jpg';

import '../../src/css/PerfilIntegrantes.css';

const peliculas = [
  { titulo: 'La pistola desnuda (1988)', imagen: pelicula1 },
  { titulo: 'Airplane! (1980)', imagen: pelicula2 },
  { titulo: 'Avengers: Endgame (2019)', imagen: pelicula3 }
];

const discos = [
  {
    titulo: 'Delivering the Black (2014)',
    artista: 'Primal Fear',
    imagen: disco1
  },
  {
    titulo: 'Holy Hell (2018)',
    artista: 'Architects',
    imagen: disco2
  },
  {
    titulo: 'Toxicity (2001)',
    artista: 'System of a Down',
    imagen: disco3
  }
];

function PerfilIgnacio() {
  const [mostrarDato, setMostrarDato] = useState(false);

  return (
    <div className="perfil-page">
      <div className="perfil-container">

        <div className="perfil-actions">
          <Link to="/about" className="perfil-button">
            ← Volver a Nosotros
          </Link>
        </div>

        <section className="perfil-header">
          <img
            src={fotoIgnacio}
            alt="Ignacio Tomás Humphreys"
            className="perfil-avatar"
          />

          <div className="perfil-meta">
            <h1>Ignacio Tomás Humphreys</h1>

            <p className="perfil-location">
              📍 Buenos Aires · 29 años
            </p>

            <a
              href="https://github.com/Ignacio-Humphreys"
              target="_blank"
              rel="noopener noreferrer"
              className="perfil-github"
            >
              🔗 GitHub: Ignacio-Humphreys
            </a>

            <p className="perfil-role">
              Programador - Desarrollador - Chequeo de prompts de IA
            </p>

            <div className="perfil-chips">
              {[
                'Python',
                'BigQuery',
                'Power BI',
                'GCP Environment',
                'Automatización'
              ].map((habilidad) => (
                <span className="perfil-chip" key={habilidad}>
                  {habilidad}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="perfil-media-grid">
          <article className="perfil-card">
            <h2>🎬 Películas favoritas</h2>

            <div className="perfil-media-list">
              {peliculas.map((pelicula) => (
                <div className="perfil-media-item" key={pelicula.titulo}>
                  <img
                    src={pelicula.imagen}
                    alt={pelicula.titulo}
                    className="perfil-media-cover"
                  />
                  <span>{pelicula.titulo}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="perfil-card">
            <h2>💿 Discos favoritos</h2>

            <div className="perfil-media-list">
              {discos.map((disco) => (
                <div className="perfil-media-item" key={disco.titulo}>
                  <img
                    src={disco.imagen}
                    alt={disco.titulo}
                    className="perfil-media-cover"
                  />

                  <div>
                    <strong>{disco.titulo}</strong>
                    <span className="perfil-artist">
                      {disco.artista}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="perfil-about">
          <h2>Sobre mí</h2>

          <div className="perfil-about-grid">
            <div>
              <h3>Hobbies</h3>

              <div className="perfil-chips">
                <span className="perfil-chip">Música</span>
                <span className="perfil-chip">Videojuegos</span>
                <span className="perfil-chip">Fútbol</span>
              </div>
            </div>

            <div>
              <h3>Algo sobre mí</h3>

              <p>
                Trabajo como analista de gestión de la información
                y me interesa construir productos de principio a fin,
                desde el dato crudo hasta la interfaz final,
                enfocándome en el Backend de los proyectos.
              </p>
            </div>

            <div className="perfil-fun-fact">
              <h3>Un dato random</h3>

              <button
                type="button"
                className="perfil-button perfil-button-outline"
                onClick={() => setMostrarDato(!mostrarDato)}
              >
                🎲 {mostrarDato ? 'Ocultar dato' : 'Revelar un dato random'}
              </button>

              {mostrarDato && (
                <p>Las abejas tienen 5 ojos :P</p>
              )}
            </div>
          </div>
        </section>

        <div className="perfil-actions">
          <Link to="/about" className="perfil-button">
            ← Volver a Nosotros
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PerfilIgnacio;
