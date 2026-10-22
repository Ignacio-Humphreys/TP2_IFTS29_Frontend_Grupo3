import { useState } from 'react';
import { Link } from 'react-router-dom';

// FOTO DE PERFIL
import fotoCristel from '../../src/assets/img/Integrantes/Propias/Foto perfil Frias.jpg';

// PELÍCULAS FAVORITAS
import pelicula1 from '../../src/assets/img/Integrantes/Peliculas/Cenicienta.jpg';
import pelicula2 from '../../src/assets/img/Integrantes/Peliculas/Yo-antes-de-ti-2016.jpg';
import pelicula3 from '../../src/assets/img/Integrantes/Peliculas/La razon de estar contigo.jpg';

// DISCOS FAVORITOS
import disco1 from '../../src/assets/img/Integrantes/Discos/mejor-que-ayer.jpg';
import disco2 from '../../src/assets/img/Integrantes/Discos/No vayas a atender cuando el demonio.jpg';
import disco3 from '../../src/assets/img/Integrantes/Discos/un mechón de pelo.jpg';

// ESTILOS
import '../../src/css/PerfilIntegrantes.css';
import '../../src/css/PerfilCristel.css';

const peliculas = [
  {
    titulo: 'Cenicienta (2015)',
    imagen: pelicula1
  },
  {
    titulo: 'Yo antes de ti (2016)',
    imagen: pelicula2
  },
  {
    titulo: 'La razón de estar contigo (2017)',
    imagen: pelicula3
  }
];

const discos = [
  {
    titulo: 'Mejor que ayer (2024)',
    artista: 'Diego Torres',
    imagen: disco1
  },
  {
    titulo: 'No vayas a atender cuando el demonio llama (2025)',
    artista: 'Lali Espósito',
    imagen: disco2
  },
  {
    titulo: 'Un mechón de pelo (2024)',
    artista: 'Tini Stoessel',
    imagen: disco3
  }
];

function PerfilCristel() {
  const [mostrarDato, setMostrarDato] = useState(false);

  return (
    <div className="perfil-page perfil-cristel">
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
            src={fotoCristel}
            alt="Foto de perfil de Cristel Frías"
            className="perfil-avatar"
          />

          <div className="perfil-meta">
            <h1>Cristel Nazarena Frías</h1>

            <p className="perfil-location">
              📍 Ciudad Autónoma de Buenos Aires · 30 años
            </p>

            <a
              href="https://github.com/CristelFrias"
              target="_blank"
              rel="noopener noreferrer"
              className="perfil-github"
            >
              🔗 GitHub: CristelFrias
            </a>

            <p className="perfil-role">
              Docencia / Desarrollo de Software
            </p>

            <div className="perfil-chips">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'Tecnologías educativas'
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
                  🎨 Arte: diamond painting, mandalas, crochet y bordado
                </span>

                <span className="perfil-chip">
                  📚 Lectura
                </span>

                <span className="perfil-chip">
                  🎲 Juegos: de mesa y virtuales
                </span>
              </div>
            </div>

            {/* PRESENTACIÓN PERSONAL */}
            <div>
              <h3>Algo sobre mí</h3>

              <p className="cristel-about-text">
                Soy una persona creativa, curiosa y comprometida,
                a la que le gusta aprender y enfrentar nuevos desafíos.
                Mi formación y experiencia docente, junto con mi
                interés por la tecnología y el desarrollo de software,
                me impulsan a seguir aprendiendo y a buscar nuevas
                formas de integrar la educación con el mundo digital.
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
                  Mi colección de juegos de mesa crece más rápido
                  que la cantidad de personas que tengo para
                  jugarlos. 😂
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

export default PerfilCristel;
