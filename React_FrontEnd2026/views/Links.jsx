
import { useState } from 'react';

// IMÁGENES DEL PROYECTO
import imagenPresentacion from '../src/assets/img/Proyecto/presentación.jpg';
import imagenArquitectura from '../src/assets/img/Proyecto/Arquitectura.jpg';
import imagenBitacora from '../src/assets/img/Proyecto/Bitacora.jpg';

// ESTILOS
import '../src/css/Links.css';

const apartados = [
  {
    id: 'presentacion',
    numero: '01',
    titulo: 'Presentación del proyecto',
    descripcion:
      'Conocé nuestro trabajo, sus objetivos y las tecnologías utilizadas.',
    imagen: imagenPresentacion
  },
  {
    id: 'arquitectura',
    numero: '02',
    titulo: 'Arquitectura',
    descripcion:
      'Explorá la organización de carpetas, componentes y vistas del proyecto.',
    imagen: imagenArquitectura
  },
  {
    id: 'bitacora',
    numero: '03',
    titulo: 'Bitácora',
    descripcion:
      'Descubrí cómo fue avanzando el desarrollo del trabajo.',
    imagen: imagenBitacora
  }
];

function Links() {
  const [apartadoActivo, setApartadoActivo] = useState('presentacion');

  return (
    <div className="proyecto-page">
      <div className="proyecto-container">

        {/* ENCABEZADO */}
        <section className="proyecto-hero">
          <span className="home-eyebrow">
            G.O.O.D_TEAM · DESARROLLO FRONTEND
          </span>

          <h1>Nuestro proyecto</h1>

          <p>
            Detrás de cada línea de código hay ideas, decisiones,
            desafíos y aprendizajes compartidos.
            Te invitamos a conocer nuestro proceso de trabajo.
          </p>
        </section>

        {/* TARJETAS CON IMÁGENES */}
        <section className="proyecto-contenido">
          <div className="proyecto-apartados">

            {apartados.map((apartado) => (
              <button
                key={apartado.id}
                type="button"
                className={`proyecto-apartado ${
                  apartadoActivo === apartado.id ? 'activo' : ''
                }`}
                onClick={() => setApartadoActivo(apartado.id)}
                aria-pressed={apartadoActivo === apartado.id}
              >
                <img
                  src={apartado.imagen}
                  alt={apartado.titulo}
                  className="proyecto-apartado-imagen"
                />

                <div className="proyecto-apartado-info">
                  <span className="proyecto-apartado-numero">
                    {apartado.numero}
                  </span>

                  <h2>{apartado.titulo}</h2>

                  <p>{apartado.descripcion}</p>
                </div>
              </button>
            ))}

          </div>

          {/* CONTENIDO QUE CAMBIA AL SELECCIONAR */}
          <div className="proyecto-detalle">

            {apartadoActivo === 'presentacion' && (
              <article>
                <span className="home-eyebrow">
                  01 · PRESENTACIÓN
                </span>

                <h2>Conocé nuestro trabajo</h2>

                <p>
                  Somos G.O.O.D_TEAM, un equipo que desarrolla
                  este proyecto frontend utilizando React,
                  JavaScript, HTML y CSS.
                </p>

                <p>
                  En esta sección presentaremos los objetivos,
                  las funcionalidades y las decisiones tomadas
                  durante el desarrollo.
                </p>
              </article>
            )}

            {apartadoActivo === 'arquitectura' && (
              <article>
                <span className="home-eyebrow">
                  02 · ARQUITECTURA
                </span>

                <h2>Cómo organizamos el proyecto</h2>

                <p>
                  Aquí incorporaremos el árbol de arquitectura
                  del proyecto, mostrando la estructura de
                  carpetas, vistas, componentes y recursos.
                </p>

                <p>
                  También podremos explicar cómo se relacionan
                  las distintas partes de la aplicación.
                </p>
              </article>
            )}

            {apartadoActivo === 'bitacora' && (
              <article>
                <span className="home-eyebrow">
                  03 · BITÁCORA
                </span>

                <h2>Nuestro recorrido</h2>

                <p>
                  En este espacio incorporaremos el registro
                  de avances, dificultades, soluciones y
                  aprendizajes del equipo.
                </p>

                <p>
                  La bitácora permitirá conocer cómo fue
                  evolucionando el proyecto.
                </p>
              </article>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}

export default Links;
