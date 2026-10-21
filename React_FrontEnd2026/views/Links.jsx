
import { useState } from 'react';

const apartados = [
  {
    id: 'presentacion',
    numero: '01',
    icono: '▤',
    titulo: 'Presentación del proyecto',
    descripcion: 'Conocé nuestro trabajo, sus objetivos y las tecnologías utilizadas.'
  },
  {
    id: 'arquitectura',
    numero: '02',
    icono: '⌘',
    titulo: 'Arquitectura',
    descripcion: 'Explorá la organización de carpetas, componentes y vistas del proyecto.'
  },
  {
    id: 'bitacora',
    numero: '03',
    icono: '✎',
    titulo: 'Bitácora',
    descripcion: 'Descubrí cómo fue avanzando el desarrollo del trabajo.'
  }
];

function Links() {
  const [apartadoActivo, setApartadoActivo] = useState('presentacion');

  return (
    <div className="proyecto-page">
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
            >
              <span>{apartado.numero}</span>
              <span>{apartado.icono}</span>
              <strong>{apartado.titulo}</strong>
              <small>{apartado.descripcion}</small>
            </button>
          ))}
        </div>

        <div className="proyecto-detalle">
          {apartadoActivo === 'presentacion' && (
            <article>
              <span className="home-eyebrow">01 · PRESENTACIÓN</span>
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
              <span className="home-eyebrow">02 · ARQUITECTURA</span>
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
              <span className="home-eyebrow">03 · BITÁCORA</span>
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
  );
}

export default Links;
