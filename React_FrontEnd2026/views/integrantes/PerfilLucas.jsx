
import { useState } from 'react';
import { Link } from 'react-router-dom';

// FOTO DE PERFIL
import fotoLucas from '../../src/assets/img/Integrantes/Propias/Lucas.jpeg';

// PELÍCULAS FAVORITAS
import pelicula1 from '../../src/assets/img/Integrantes/Peliculas/cidade_de_deus.jpg';
import pelicula2 from '../../src/assets/img/Integrantes/Peliculas/el_precio_del_mañana.jpg';
import pelicula3 from '../../src/assets/img/Integrantes/Peliculas/El_lobo_de_Wall_Street.jpg';

// DISCOS FAVORITOS
import disco1 from "../../src/assets/img/Integrantes/Discos/Pa las Baby's Y Belikeada.jpg";
import disco2 from '../../src/assets/img/Integrantes/Discos/Maquina_do_Tempo.jpg';
import disco3 from '../../src/assets/img/Integrantes/Discos/2016.jpg';

// ESTILOS COMPARTIDOS
import '../../src/css/PerfilIntegrantes.css';

// FONDO EXCLUSIVO DE LUCAS (Boca Juniors)
import '../../src/css/PerfilLucas.css';

const peliculas = [
  {
    titulo: 'Cidade de Deus (2002)',
    imagen: pelicula1
  },
  {
    titulo: 'El Precio del Mañana (2011)',
    imagen: pelicula2
  },
  {
    titulo: 'El Lobo de Wall Street (2013)',
    imagen: pelicula3
  }
];

const discos = [
  {
    titulo: "Pa las Baby's Y Belikeada",
    artista: 'Fuerza Regida',
    imagen: disco1
  },
  {
    titulo: 'Máquina do Tempo',
    artista: 'Matuê',
    imagen: disco2
  },
  {
    titulo: '2016',
    artista: 'Kidd Keo',
    imagen: disco3
  }
];

// Tipos de partículas que flotan en el fondo
const PARTICLES = [
  'ball', 'star', 'ball', 'star', 'ball',
  'star', 'ball', 'star', 'ball', 'star',
  'ball', 'star', 'ball', 'star', 'ball'
];

function PerfilLucas() {
  const [mostrarDato, setMostrarDato] = useState(false);

  return (
    <div className="perfil-page perfil-lucas">

      {/* PARTÍCULAS FLOTANTES DE BOCA */}
      <div className="lucas-particles" aria-hidden="true">
        {PARTICLES.map((tipo, i) => (
          <span
            key={i}
            className={`lucas-particle lucas-particle--${tipo}`}
          />
        ))}
      </div>

      <div className="perfil-container">

        {/* BOTÓN SUPERIOR */}
        <div className="perfil-actions">
          <Link to="/about" className="perfil-button">
            ← Volver a Nosotros
          </Link>
        </div>

        {/* INFORMACIÓN PERSONAL */}
        <section className="perfil-header">

          <img
            src={fotoLucas}
            alt="Foto de perfil de Lucas Federico De Diego"
            className="perfil-avatar"
          />

          <div className="perfil-meta">

            <h1>Lucas Federico De Diego</h1>

            <p className="perfil-location">
              📍 Buenos Aires · 35 años
            </p>

            <a
              href="https://github.com/lucasfedericodd"
              target="_blank"
              rel="noopener noreferrer"
              className="perfil-github"
            >
              🔗 GitHub: lucasfedericodd
            </a>

            <p className="perfil-role">
              Desarrollo de Software · Analista de Datos · Creador de Contenido con IA
            </p>

            <div className="perfil-chips">
              {[
                'Python',
                'SQL',
                'HTML & CSS',
                'Looker Studio',
                'N8N'
              ].map((habilidad) => (
                <span
                  className="perfil-chip"
                  key={habilidad}
                >
                  {habilidad}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* PELÍCULAS Y DISCOS */}
        <section className="perfil-media-grid">

          {/* PELÍCULAS FAVORITAS */}
          <article className="perfil-card">

            <h2>🎬 Películas favoritas</h2>

            <div className="perfil-media-list">
              {peliculas.map((pelicula) => (
                <div
                  className="perfil-media-item"
                  key={pelicula.titulo}
                >
                  <img
                    src={pelicula.imagen}
                    alt={pelicula.titulo}
                    className="perfil-media-cover"
                  />

                  <span>
                    {pelicula.titulo}
                  </span>
                </div>
              ))}
            </div>

          </article>

          {/* DISCOS FAVORITOS */}
          <article className="perfil-card">

            <h2>💿 Discos favoritos</h2>

            <div className="perfil-media-list">
              {discos.map((disco) => (
                <div
                  className="perfil-media-item"
                  key={disco.titulo}
                >
                  <img
                    src={disco.imagen}
                    alt={disco.titulo}
                    className="perfil-media-cover"
                  />

                  <div>
                    <strong>
                      {disco.titulo}
                    </strong>

                    <span className="perfil-artist">
                      {disco.artista}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </article>

        </section>

        {/* SOBRE MÍ */}
        <section className="perfil-about">

          <h2>Sobre mí</h2>

          <div className="perfil-about-grid">

            {/* HOBBIES */}
            <div>
              <h3>Hobbies</h3>

              <div className="perfil-chips">

                <span className="perfil-chip">
                  ⚽ Fútbol
                </span>

                <span className="perfil-chip">
                  ✈️ Viajar
                </span>

                <span className="perfil-chip">
                  🎵 Música
                </span>

              </div>
            </div>

            {/* PRESENTACIÓN PERSONAL */}
            <div>
              <h3>Algo sobre mí</h3>

              <p>
                Soy estudiante de la Tecnicatura en Desarrollo de Software.
                Trabajo como Analista de Soporte e Infraestructura en una
                empresa de medios de comunicación. También estoy formándome
                en Análisis de Datos en paralelo a mi carrera de desarrollo,
                y como hobby exploro la creación de contenido con inteligencia
                artificial: probar herramientas, entender sus límites y
                usarlas con criterio propio.
              </p>
            </div>

            {/* DATO RANDOM */}
            <div className="perfil-fun-fact">

              <h3>Un dato random</h3>

              <button
                type="button"
                className="perfil-button perfil-button-outline"
                onClick={() => setMostrarDato(!mostrarDato)}
              >
                🎲 {mostrarDato
                  ? 'Ocultar dato'
                  : 'Revelar un dato random'}
              </button>

              {mostrarDato && (
                <p>
                  Loquito por Boca Juniors 💙💛
                </p>
              )}

            </div>

          </div>
        </section>

        {/* BOTÓN INFERIOR */}
        <div className="perfil-actions">
          <Link to="/about" className="perfil-button">
            ← Volver a Nosotros
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PerfilLucas;
