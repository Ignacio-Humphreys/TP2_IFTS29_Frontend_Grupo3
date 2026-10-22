
import { useState } from 'react';
import { Link } from 'react-router-dom';

// FOTO DE PERFIL
import fotoDavid from '../../src/assets/img/Integrantes/Propias/picaboutme.jpg';

// PELÍCULAS FAVORITAS
import pelicula1 from '../../src/assets/img/Integrantes/Peliculas/movie01.jpg';
import pelicula2 from '../../src/assets/img/Integrantes/Peliculas/movie02.jpg';
import pelicula3 from '../../src/assets/img/Integrantes/Peliculas/movie03.jpg';

// DISCOS FAVORITOS
import disco1 from '../../src/assets/img/Integrantes/Discos/band01.jpg';
import disco2 from '../../src/assets/img/Integrantes/Discos/band02.jpg';
import disco3 from '../../src/assets/img/Integrantes/Discos/band03.jpg';

// ESTILOS COMPARTIDOS
import '../../src/css/PerfilIntegrantes.css';

// FONDO EXCLUSIVO DE SEBASTIÁN
import '../../src/css/PerfilSebastian.css';

const peliculas = [
  {
    titulo: 'Interstellar',
    imagen: pelicula1
  },
  {
    titulo: '¿Qué le paso a Lunes?',
    imagen: pelicula2
  },
  {
    titulo: 'Terminator 2:Judgement Day',
    imagen: pelicula3
  }
];

const discos = [
  {
    titulo: 'These Days',
    artista: 'Bon Jovi',
    imagen: disco1
  },
  {
    titulo: 'Life For Rent',
    artista: 'Dido',
    imagen: disco2
  },
  {
    titulo: 'The Marshall Mathers LP',
    artista: 'Eminem',
    imagen: disco3
  }
];

function PerfilDavid() {
  const [mostrarDato, setMostrarDato] = useState(false);

  return (
    <div className="perfil-page perfil-page--sebastian">
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
            src={fotoDavid}
            alt="Foto de Sebastian Giordano, perfil sobre mí"
            className="perfil-avatar"
          />

          <div className="perfil-meta">

            <h1>David Sebastian Giordano Rodriguez</h1>

            <p className="perfil-location">
              📍 Tortuguitas · 43 años
            </p>

            <a
              href="https://github.com/Sebastian1601"
              target="_blank"
              rel="noopener noreferrer"
              className="perfil-github"
            >
              🔗 GitHub: Sebastian1601
            </a>

            <p className="perfil-role">
              Backend Developer
            </p>

            <div className="perfil-chips">
              {[
                'NodeJS',
                'C#',
                'MySQL',
                'Kotlin'
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

                  <span>{pelicula.titulo}</span>
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

        {/* SOBRE MÍ */}
        <section className="perfil-about">

          <h2>Sobre mí</h2>

          <div className="perfil-about-grid">

            {/* HOBBIES */}
            <div>
              <h3>Hobbies</h3>

              <div className="perfil-chips">
                <span className="perfil-chip">
                  Hacer deportes
                </span>

                <span className="perfil-chip">
                  Ver películas
                </span>

                <span className="perfil-chip">
                  Jugar videojuegos
                </span>
              </div>
            </div>

            {/* PRESENTACIÓN PERSONAL */}
            <div>
              <h3>Algo sobre mí</h3>

              <p>
                Soy estudiante de Desarrollo de Software y,
                sobre todo, alguien que disfruta entender cómo
                funcionan las cosas.
                <br />
                <br />
                Mi formación me llevó a explorar distintas áreas
                del desarrollo: desde interfaces y aplicaciones
                web hasta APIs, bases de datos y programación
                orientada a objetos. Actualmente trabajo
                principalmente con JavaScript, Node.js, C#,
                Kotlin y SQL, mientras continúo incorporando
                nuevas herramientas y conceptos.
                <br />
                <br />
                Me interesa encontrar soluciones simples a
                problemas complejos, entender el porqué detrás
                de cada decisión técnica y transformar una idea
                en algo que realmente pueda funcionar.
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
                  Un pequeño imán de nevera puede vencer la
                  gravedad de todo el planeta Tierra al sostener
                  un papel.
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

export default PerfilDavid;
