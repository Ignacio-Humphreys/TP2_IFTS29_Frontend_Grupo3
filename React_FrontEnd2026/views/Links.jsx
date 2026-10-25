import { useState } from 'react';

// IMÁGENES DEL PROYECTO
import imagenPresentacion from '../src/assets/img/Proyecto/presentación.jpg';
import imagenArquitectura from '../src/assets/img/Proyecto/Arquitectura.jpg';
import imagenBitacora from '../src/assets/img/Proyecto/Bitacora.jpg';
import imagenEnQueConsiste from '../src/assets/img/Proyecto/En_que_consiste.jpg';
import imagenNuestroObjetivo from '../src/assets/img/Proyecto/Nuestro_objetivo.jpg';
import imagenTecnologias from '../src/assets/img/Proyecto/Tecnologias.jpg';
import imagenFuncionalidades from '../src/assets/img/Proyecto/Funcionalidades.jpg';
import imagenTrabajoEnEquipo from '../src/assets/img/Proyecto/Trabajo_en_equipo.jpg';


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
              <article className="presentacion-proyecto">
                <span className="home-eyebrow">01 · PRESENTACIÓN</span>
                <h2>Conocé nuestro proyecto</h2>
                <p className="presentacion-intro">
                  Somos <strong>G.O.O.D_TEAM</strong>, un equipo de estudiantes de
                  Desarrollo de Software que trabaja de manera colaborativa en
                  la creación de una aplicación web con tecnologías frontend.
                </p>

                <div className="presentacion-grid">
                  <section className="presentacion-bloque">
                     <img className="presentacion-bloque-imagen" src={imagenEnQueConsiste} alt="Gatito descansando entre libros en un escritorio cálido" />
                    <div className="presentacion-bloque-titulo">
                      <span className="presentacion-icono" aria-hidden="true">💡</span>
                      <h3>¿En qué consiste nuestro proyecto?</h3>
                    </div>
                    <p>
                      Desarrollamos un sitio web interactivo para poner en práctica
                      los conocimientos adquiridos durante la cursada, integrando
                      diseño, programación y organización de componentes.
                    </p>
                    <p>
                      La aplicación incluye una página de inicio, una sección para
                      conocer al equipo, perfiles individuales y un espacio para
                      explorar información de Studio Ghibli mediante una API externa.
                    </p>
                  </section>

                  <section className="presentacion-bloque">
                     <img className="presentacion-bloque-imagen" src={imagenNuestroObjetivo} alt="Paisaje de fantasía al atardecer" />
                    <div className="presentacion-bloque-titulo">
                      <span className="presentacion-icono" aria-hidden="true">🎯</span>
                      <h3>Nuestro objetivo</h3>
                    </div>
                    <p>
                      Crear una aplicación web funcional, organizada y adaptable
                      a distintos dispositivos, aplicando buenas prácticas de
                      programación y fortaleciendo el trabajo en equipo.
                    </p>
                    <p>
                      Buscamos transformar lo aprendido en una experiencia de
                      navegación clara, atractiva y fácil de utilizar.
                    </p>
                  </section>

                  <section className="presentacion-bloque">
                     <img className="presentacion-bloque-imagen" src={imagenTecnologias} alt="Espacio de trabajo con computadora y plantas" />
                    <div className="presentacion-bloque-titulo">
                      <span className="presentacion-icono" aria-hidden="true">⚙️</span>
                      <h3>Tecnologías utilizadas</h3>
                    </div>
                    <ul className="presentacion-tecnologias">
                      <li><span className="tecnologia-icono tecnologia-react" aria-hidden="true">⚛</span><span><strong>React y Vite</strong><small>Componentes y entorno de desarrollo.</small></span></li>
                      <li><span className="tecnologia-icono tecnologia-js" aria-hidden="true">JS</span><span><strong>JavaScript</strong><small>Lógica e interactividad.</small></span></li>
                      <li><span className="tecnologia-icono tecnologia-html" aria-hidden="true">&lt;/&gt;</span><span><strong>HTML y CSS</strong><small>Estructura y diseño visual.</small></span></li>
                      <li><span className="tecnologia-icono tecnologia-router" aria-hidden="true">↗</span><span><strong>React Router</strong><small>Navegación entre secciones.</small></span></li>
                      <li><span className="tecnologia-icono tecnologia-git" aria-hidden="true">⑂</span><span><strong>Git y GitHub</strong><small>Control de versiones y colaboración.</small></span></li>
                      <li><span className="tecnologia-icono tecnologia-ghibli" aria-hidden="true">✦</span><span><strong>API Studio Ghibli</strong><small>Consulta de datos externos.</small></span></li>
                    </ul>
                  </section>

                  <section className="presentacion-bloque presentacion-bloque-ancho">
                     <img className="presentacion-bloque-imagen" src={imagenFuncionalidades} alt="Escritorio con computadora, cuadernos y un gato" />
                    <div className="presentacion-bloque-titulo">
                      <span className="presentacion-icono" aria-hidden="true">🖥️</span>
                      <h3>¿Qué funcionalidades desarrollamos?</h3>
                    </div>
                    <p>
                      Navegación entre secciones, presentación del equipo y sus
                      perfiles, consulta de información de Studio Ghibli y un
                      espacio para mostrar la arquitectura y la evolución del proyecto.
                    </p>
                    <p>
                      También incorporamos datos locales con búsqueda y filtros
                      interactivos para explorar registros sin recargar la página.
                    </p>
                  </section>

                  <section className="presentacion-bloque presentacion-bloque-ancho">
                     <img className="presentacion-bloque-imagen" src={imagenTrabajoEnEquipo} alt="Cinco integrantes trabajando juntos en una computadora" />
                    <div className="presentacion-bloque-titulo">
                      <span className="presentacion-icono" aria-hidden="true">👥</span>
                      <h3>Nuestro trabajo en equipo</h3>
                    </div>
                    <p>
                      Distribuimos tareas, compartimos avances y resolvemos
                      dificultades de manera colaborativa. El proyecto nos permite
                      fortalecer habilidades técnicas, comunicación y organización.
                    </p>
                  </section>
                </div>
              </article>
            )}

            {apartadoActivo === 'arquitectura' && (
              <article>
                <span className="home-eyebrow">
                  02 · ARQUITECTURA
                </span>

                <h2>Cómo organizamos el proyecto</h2>

                <p>
                  La aplicación está construida con <strong>React</strong> y
                  <strong>Vite</strong>, usando <strong>React Router</strong> para
                  la navegación entre pantallas sin recargar la página. El código
                  del frontend se encuentra en la carpeta{' '}
                  <code>React_FrontEnd2026/</code> y se organiza por capas:
                </p>

                <pre>
                  {`React_FrontEnd2026/
├── index.html              Punto de entrada de Vite
├── package.json            Dependencias y scripts (dev, build, preview)
└── src/
    ├── css/
    │   ├── Layout.css        Estructura base y layout compartido
    │   ├── Home.css          Estilos de la portada
    │   ├── About.css         Estilos de la sección Nosotros
    │   ├── Links.css         Estilos de enlaces
    │   ├── Ghibli.css        Estilos temáticos
    │   ├── PerfilIntegrantes.css  Estilos base compartidos por todos los perfiles
    │   └── Perfil*.css       Un archivo CSS por cada integrante para los estilos específicos
    ├── views/
    │   └── integrantes/
    │       └── Perfil*.jsx   Vista de los perfiles de cada integrante              
    └── assets/
        └── img/
            └── Integrantes/
                ├── Propias/      Fotos de perfil de cada integrante
                ├── Peliculas/    Portadas de películas favoritas
                └── Discos/       Portadas de discos favoritos`}
                </pre>

                <p>
                  <strong>React Router</strong> define las rutas de la aplicación
                  y renderiza la vista activa dentro del layout general, lo que
                  permite navegar por la sidebar sin depender del botón Atrás del
                  navegador.
                </p>

                <p>
                  Cada vista (por ejemplo, <code>Perfil*.jsx</code>) es un
                  componente autocontenido que importa su archivo CSS específico
                  junto con los estilos compartidos de{' '}
                  <code>PerfilIntegrantes.css</code>. Los recursos estáticos
                  (imágenes de perfil, películas y discos) se importan
                  localmente desde <code>src/assets/</code> y se muestran
                  dinámicamente dentro de los componentes.
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
                  En este espacio incorporamos el registro de avances,
                  dificultades, soluciones y aprendizajes del equipo durante el
                  desarrollo del TP2, continuando la bitácora iniciada en el TP1.
                </p>

                <p style={{ marginBottom: '50px' }}>
                  La bitácora permite conocer cómo fue evolucionando el proyecto
                  desde su versión original en HTML/CSS/JS hasta esta
                  aplicación en React.
                </p>

                {/* ENTRADA 1 */}
                <section className="log-entry" style={{ marginBottom: '50px' }}>
                  <span className="log-date">1 de octubre de 2026</span>
                  <h3>Inicio del TP2 y definición del alcance</h3>
                  <p>
                    Reanudamos el trabajo del equipo sobre la base del TP1
                    (<code>TP1_IFTS29_Frontend_Grupo3</code>). Acordamos migrar
                    la aplicación a React con Vite y organizar el repositorio en
                    una carpeta independiente (<code>React_FrontEnd2026/</code>).
                    Definimos que cada integrante mantendría su propio perfil
                    dentro de la nueva estructura, compartiendo estilos base en 
                    <code> PerfilIntegrantes.css</code>.
                  </p>
                </section>

                {/* ENTRADA 2 */}
                <section className="log-entry" style={{ marginBottom: '50px' }}>
                  <span className="log-date">8 de octubre de 2026</span>
                  <h3>Estructura en React y navegación</h3>
                  <p>
                    Implementamos la arquitectura con React Router para navegar
                    entre pantallas sin recargar la página. Creamos el layout
                    compartido con una sidebar lateral que permanece visible
                    mientras cambia el contenido, permitiendo acceder a portada,
                    perfiles, datos JSON, API, árbol de renderizado y bitácora
                    sin depender del botón Atrás del navegador.
                  </p>
                </section>

                {/* ENTRADA 3 */}
                <section className="log-entry" style={{ marginBottom: '50px' }}>
                  <span className="log-date">14 de octubre de 2026</span>
                  <h3>Adaptación de perfiles, propuesta estética y API pública</h3>
                  <p>
                    Cada integrante construyó su perfil dentro de React con su
                    archivo CSS específico (<code>PerfilAnker.css</code>,
                    <code>PerfilIgnacio.css</code>, etc.), heredando la base
                    compartida y añadiendo su identidad visual propia. Integramos
                    una API pública de Studio Ghibli, que a su vez consultamos para 
                    obtener imágenes utilizadas en el sitio.
                  </p>
                </section>

                {/* ENTRADA 4 */}
                <section className="log-entry" style={{ marginBottom: '50px' }}>
                  <span className="log-date">20 de octubre de 2026</span>
                  <h3>Datos locales, búsqueda y filtro</h3>
                  <p>
                    Agregamos un archivo JSON local con al menos 20 registros
                    relacionados con la propuesta del equipo, mostrados
                    dinámicamente en tarjetas. Sobre ese listado implementamos
                    una búsqueda por texto y un filtro por propiedad, que
                    actualizan los resultados en tiempo real sin recargar la
                    página.
                  </p>
                </section>

                {/* ENTRADA 5 */}
                <section className="log-entry" style={{ marginBottom: '50px' }}>
                  <span className="log-date">24 de octubre de 2026</span>
                  <h3>Readme, árbol de renderizado, bitácora y despliegue</h3>
                  <p>
                    Terminamos de incorporar información al readme.
                    Documentamos el árbol de componentes de la aplicación
                    (layout, sidebar, páginas, tarjetas), realizamos esta bitácora
                    y publicamos el sitio en Vercel.
                  </p>
                </section>

              </article>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}

export default Links;
