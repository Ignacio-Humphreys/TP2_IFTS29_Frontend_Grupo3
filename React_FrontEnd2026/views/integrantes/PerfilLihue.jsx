
import { useState } from 'react';
import { Link } from 'react-router-dom';

// FOTO DE PERFIL
import fotoLihue from '../../src/assets/img/Integrantes/Propias/Anker.jpg';

// PELÍCULAS FAVORITAS
import pelicula1 from '../../src/assets/img/Integrantes/Peliculas/shrek.webp';
import pelicula2 from '../../src/assets/img/Integrantes/Peliculas/her.webp';
import pelicula3 from '../../src/assets/img/Integrantes/Peliculas/codigoenigma.webp';

// DISCOS FAVORITOS
import disco1 from '../../src/assets/img/Integrantes/Discos/Mercuriales.jpg';
import disco2 from '../../src/assets/img/Integrantes/Discos/coiffeur.jpg';
import disco3 from '../../src/assets/img/Integrantes/Discos/Evanescence.jpg';

// ESTILOS COMPARTIDOS
import '../../src/css/PerfilIntegrantes.css';

const peliculas = [
  {
    titulo: 'Shrek (2001)',
    imagen: pelicula1
  },
  {
    titulo: 'Her (2013)',
    imagen: pelicula2
  },
  {
    titulo: 'El código enigma (2014)',
    imagen: pelicula3
  }
];

const discos = [
  {
    titulo: '24/7',
    artista: 'Mercuriales',
    imagen: disco1
  },
  {
    titulo: 'Nada',
    artista: 'Coiffeur',
    imagen: disco2
  },
  {
    titulo: 'Fallen',
    artista: 'Evanescence',
    imagen: disco3
  }
];

function PerfilLihue() {
  const [mostrarDato, setMostrarDato] = useState(false);

  return (
    <div className="perfil-page">
      <div className="perfil-container">

        {/* BOTÓN PARA VOLVER */}
        <div className="perfil-actions">
          <Link to="/about" className="perfil-button">
            ← Volver a Nosotros
          </Link>
        </div>

        {/* INFORMACIÓN PERSONAL */}
        <section className="perfil-header">

          <img
            src={fotoLihue}
            alt="Foto de perfil de Lihue Anker Díaz con un gato naranja"
            className="perfil-avatar"
          />

          <div className="perfil-meta">

            <h1>Lihue Anker Díaz</h1>

            <p className="perfil-location">
              📍 Córdoba Capital · 32 años
            </p>

            <a
              href="https://github.com/AnkerYeray"
              target="_blank"
              rel="noopener noreferrer"
              className="perfil-github"
            >
              🔗 GitHub: AnkerYeray
            </a>

            <p className="perfil-role">
              Programadore - Data analist - SysAdmin
            </p>

            <div className="perfil-chips">
              {[
                'Python',
                'Linux',
                'SQL',
                'R'
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
                  Nadar
                </span>

                <span className="perfil-chip">
                  Hacer jueguitos
                </span>

                <span className="perfil-chip">
                  Leer
                </span>
              </div>
            </div>

            {/* PRESENTACIÓN PERSONAL */}
            <div>
              <h3>Algo sobre mí</h3>

              <p>
                Soy le humane de Ridikulah, un gato naranja
                fan de las videollamadas. Soy docente ad
                honorem en calidad de ayudante alumne en la
                Universidad Nacional de Córdoba e integrante
                de un equipo de investigación. Trabajo como
                SysAdmin pero me interesa dedicarme al área
                de datos; actualmente me encuentro estudiando
                una diplomatura de análisis de datos para el
                Agro. Además de mis hobbies, disfruto mucho
                jugando con mi gato (que también es mi jefe)
                e investigando/curioseando sobre tecnología.
                Hago jueguitos como hobbie en el marco de
                distintas Game Jams
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
                  Los persas ganaron la batalla de Pelusio
                  contra los egipcios en el 525a.C. usando
                  gatos como escudos
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

export default PerfilLihue;
