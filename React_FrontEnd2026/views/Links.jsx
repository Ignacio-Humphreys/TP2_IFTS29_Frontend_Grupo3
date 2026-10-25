import { useState, useMemo } from 'react';

// IMÁGENES DEL PROYECTO
import imagenPresentacion from '../src/assets/img/Proyecto/presentación.jpg';
import imagenArquitectura from '../src/assets/img/Proyecto/Arquitectura.jpg';
import imagenBitacora from '../src/assets/img/Proyecto/Bitacora.jpg';
import imagenEnQueConsiste from '../src/assets/img/Proyecto/En_que_consiste.jpg';
import imagenNuestroObjetivo from '../src/assets/img/Proyecto/Nuestro_objetivo.jpg';
import imagenTecnologias from '../src/assets/img/Proyecto/Tecnologias.jpg';
import imagenFuncionalidades from '../src/assets/img/Proyecto/Funcionalidades.jpg';
import imagenTrabajoEnEquipo from '../src/assets/img/Proyecto/Trabajo_en_equipo.jpg';


// DATOS PARA ARQUITECTURA Y BITÁCORA
import arbolComponentesData from '../src/data/arbolComponentes.json';
import bitacoraData from '../src/data/bitacora.json';
import tecnologiasData from '../src/data/tecnologias.json';

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

// COMPONENTE NODO RECURSIVO PARA EL ÁRBOL
function NodoArbol({ nodo, nivel = 0, nodosAbiertos, toggleNodo }) {
  const tieneHijos = nodo.hijos && nodo.hijos.length > 0;
  const estaAbierto = !!nodosAbiertos[nodo.id];

  return (
    <div className={`arbol-nodo-wrapper nivel-${nivel}`}>
      <div className="arbol-nodo-header">
        {tieneHijos ? (
          <button
            type="button"
            className="arbol-toggle-btn"
            onClick={() => toggleNodo(nodo.id)}
            aria-label={estaAbierto ? 'Contraer rama' : 'Expandir rama'}
          >
            {estaAbierto ? '▾' : '▸'}
          </button>
        ) : (
          <span className="arbol-nodo-bullet">•</span>
        )}

        <div className="arbol-nodo-info" onClick={() => tieneHijos && toggleNodo(nodo.id)}>
          <span className="arbol-nodo-nombre">{nodo.nombre}</span>
          <span className="arbol-nodo-archivo">{nodo.archivo}</span>
          <span className="arbol-nodo-badge">{nodo.tipo}</span>
        </div>
      </div>

      <p className="arbol-nodo-desc">{nodo.descripcion}</p>

      {tieneHijos && estaAbierto && (
        <div className="arbol-nodo-hijos">
          {nodo.hijos.map((hijo) => (
            <NodoArbol
              key={hijo.id}
              nodo={hijo}
              nivel={nivel + 1}
              nodosAbiertos={nodosAbiertos}
              toggleNodo={toggleNodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}


function Links() {
  const [apartadoActivo, setApartadoActivo] = useState('presentacion');

  // Estados para Búsqueda y Filtro de Datos Locales JSON (Criterios 10 y 11)
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [registroExpandido, setRegistroExpandido] = useState(null);

  const categorias = useMemo(() => {
    return ['Todas', ...new Set(tecnologiasData.map((t) => t.categoria))];
  }, []);

  const tecnologiasFiltradas = useMemo(() => {
    return tecnologiasData.filter((item) => {
      const coincideBusqueda =
        item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.tipo.toLowerCase().includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoriaSeleccionada === 'Todas' || item.categoria === categoriaSeleccionada;

      return coincideBusqueda && coincideCategoria;
    });
  }, [busqueda, categoriaSeleccionada]);

  const toggleExpandir = (id) => {
    setRegistroExpandido((prev) => (prev === id ? null : id));
  };

  const restablecerFiltros = () => {
    setBusqueda('');
    setCategoriaSeleccionada('Todas');
  };

  // Estados para Árbol de Renderizado interactivo
  const [nodosAbiertos, setNodosAbiertos] = useState({
    app: true,
    layout: true,
    outlet: true,
    about: true,
    links: true,
    ghibli: true
  });

  const toggleNodo = (id) => {
    setNodosAbiertos((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandirTodos = () => {
    setNodosAbiertos({
      app: true,
      layout: true,
      sidebar: true,
      outlet: true,
      home: true,
      about: true,
      perfiles: true,
      links: true,
      'json-module': true,
      'tree-module': true,
      ghibli: true,
      'resource-card': true,
      contact: true,
      notfound: true,
      footer: true
    });
  };

  const colapsarTodos = () => {
    setNodosAbiertos({});
  };

  // Estados para Bitácora interactiva (Criterio 14 - Nivel Propone)
  const [faseBitacora, setFaseBitacora] = useState('Todas');
  const [categoriaBitacora, setCategoriaBitacora] = useState('Todas');
  const [entradasExpandidas, setEntradasExpandidas] = useState({});

  const toggleEntradaBitacora = (id) => {
    setEntradasExpandidas((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandirTodaBitacora = () => {
    const todos = {};
    bitacoraData.forEach((item) => {
      todos[item.id] = true;
    });
    setEntradasExpandidas(todos);
  };

  const colapsarTodaBitacora = () => {
    setEntradasExpandidas({});
  };

  // Filtro de bitácora
  const bitacoraFiltrada = useMemo(() => {
    return bitacoraData.filter((item) => {
      const coincideFase = faseBitacora === 'Todas' || item.fase === faseBitacora;
      const coincideCat =
        categoriaBitacora === 'Todas' || item.categoria === categoriaBitacora;
      return coincideFase && coincideCat;
    });
  }, [faseBitacora, categoriaBitacora]);

  const categoriasBitacora = useMemo(() => {
    return ['Todas', ...new Set(bitacoraData.map((b) => b.categoria))];
  }, []);

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
                {/* CATÁLOGO LOCAL JSON CON BÚSQUEDA Y FILTRO (CRITERIOS 10 Y 11) */}
                <div className="presentacion-catalogo-wrapper">
                  <div className="presentacion-catalogo-header">
                    <span className="home-eyebrow">CATÁLOGO DE MÓDULOS DEL PROYECTO</span>
                    <h3>Explorá los componentes y funcionalidades construidas</h3>
                    <p>
                      A continuación podés consultar los <strong>{tecnologiasData.length} módulos registrados</strong> en el JSON local del proyecto.
                      Podés filtrar por categoría o buscar por palabra clave en tiempo real:
                    </p>
                  </div>

                  {/* CONTROLES DE BÚSQUEDA Y FILTRADO */}
                  <div className="json-controles">
                    <div className="json-input-wrapper">
                      <span className="json-icono-lupa">🔍</span>
                      <input
                        type="text"
                        className="json-search-input"
                        placeholder="Buscar por módulo, tipo o palabra clave..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                      />
                      {busqueda && (
                        <button
                          type="button"
                          className="json-clear-btn"
                          onClick={() => setBusqueda('')}
                          title="Limpiar búsqueda"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <div className="json-filtro-wrapper">
                      <label htmlFor="categoria-select">Categoría:</label>
                      <select
                        id="categoria-select"
                        className="json-select"
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                      >
                        {categorias.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {(busqueda || categoriaSeleccionada !== 'Todas') && (
                      <button
                        type="button"
                        className="json-reset-btn"
                        onClick={restablecerFiltros}
                      >
                        Restablecer filtros
                      </button>
                    )}
                  </div>

                  {/* CONTADOR DE RESULTADOS */}
                  <div className="json-resumen">
                    <span>
                      Mostrando <strong>{tecnologiasFiltradas.length}</strong> de{' '}
                      <strong>{tecnologiasData.length}</strong> módulos registrados
                    </span>
                  </div>

                  {/* LISTADO DINÁMICO DE TARJETAS */}
                  {tecnologiasFiltradas.length > 0 ? (
                    <div className="json-grid">
                      {tecnologiasFiltradas.map((tech) => {
                        const estaExpandido = registroExpandido === tech.id;
                        return (
                          <div key={tech.id} className="json-card">
                            <div className="json-card-header">
                              <span className="json-card-icon">{tech.icono}</span>
                              <div className="json-card-titles">
                                <h3>{tech.nombre}</h3>
                                <span className="json-badge json-badge-cat">
                                  {tech.categoria}
                                </span>
                              </div>
                            </div>

                            <div className="json-card-meta">
                              <span className="json-pill-tipo">{tech.tipo}</span>
                              <span className="json-pill-nivel nivel-completado">
                                ✓ {tech.estado}
                              </span>
                            </div>

                            <p className="json-card-desc">{tech.descripcion}</p>

                            {estaExpandido && (
                              <div className="json-card-extra">
                                <h4>📌 Implementación técnica:</h4>
                                <p>{tech.detalle}</p>
                              </div>
                            )}

                            <button
                              type="button"
                              className="json-card-expand-btn"
                              onClick={() => toggleExpandir(tech.id)}
                            >
                              {estaExpandido ? '▲ Ocultar detalle técnico' : '▼ Ver implementación técnica'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="json-no-results">
                      <p className="json-no-results-icon">🔎</p>
                      <h3>No se encontraron módulos</h3>
                      <p>
                        No hay registros que coincidan con "{busqueda}" en la categoría{' '}
                        <strong>{categoriaSeleccionada}</strong>.
                      </p>
                      <button
                        type="button"
                        className="json-reset-btn"
                        onClick={restablecerFiltros}
                      >
                        Restablecer filtros y ver todos
                      </button>
                    </div>
                  )}
                </div>
              </article>
            )}

            {apartadoActivo === 'arquitectura' && (
              <article>
                <span className="home-eyebrow">
                  02 · ARQUITECTURA Y JERARQUÍA DE COMPONENTES
                </span>

                <h2>Árbol de renderizado interactivo</h2>

                <p>
                  A continuación se presenta la jerarquía real de componentes de React entregados en el código.
                  Permite explorar cómo el componente principal <code>&lt;App /&gt;</code> organiza el layout global,
                  la sidebar de navegación compartida y el renderizado dinámico de rutas hijas mediante <code>&lt;Outlet /&gt;</code>.
                </p>

                {/* CONTROLES PARA EXPANDIR / COLAPSAR (Criterio 13 - Nivel Propone) */}
                <div className="arbol-acciones">
                  <button
                    type="button"
                    className="arbol-control-btn"
                    onClick={expandirTodos}
                  >
                    📂 Expandir todo el árbol
                  </button>
                  <button
                    type="button"
                    className="arbol-control-btn"
                    onClick={colapsarTodos}
                  >
                    📁 Contraer todo el árbol
                  </button>
                </div>

                {/* VISTA DEL ÁRBOL JERÁRQUICO */}
                <div className="arbol-contenedor">
                  {arbolComponentesData.map((raiz) => (
                    <NodoArbol
                      key={raiz.id}
                      nodo={raiz}
                      nivel={0}
                      nodosAbiertos={nodosAbiertos}
                      toggleNodo={toggleNodo}
                    />
                  ))}
                </div>
              </article>
            )}

            {apartadoActivo === 'bitacora' && (
              <article>
                <span className="home-eyebrow">
                  03 · BITÁCORA Y PROCESO DE TRABAJO
                </span>

                <h2>Registro cronológico del equipo</h2>

                <p>
                  Registro documentado de las etapas de desarrollo, decisiones de arquitectura,
                  dificultades tîcnicas superadas y la evolución desde el <strong>TP1</strong> (HTML/CSS/JS vanilla)
                  hacia la aplicación actual en <strong>React 19 (TP2)</strong>.
                </p>

                {/* FILTROS Y CONTROLES DE LA BITÁCORA (Criterio 14 - Nivel Propone) */}
                <div className="bitacora-controles">
                  <div className="bitacora-filtro-grupo">
                    <span className="bitacora-label">Etapa:</span>
                    <div className="bitacora-botones-fase">
                      {['Todas', 'TP1', 'TP2'].map((f) => (
                        <button
                          key={f}
                          type="button"
                          className={`bitacora-fase-btn ${faseBitacora === f ? 'activo' : ''}`}
                          onClick={() => setFaseBitacora(f)}
                        >
                          {f === 'Todas' ? 'Todo el recorrido' : f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bitacora-filtro-grupo">
                    <label htmlFor="cat-bitacora" className="bitacora-label">Área:</label>
                    <select
                      id="cat-bitacora"
                      className="json-select"
                      value={categoriaBitacora}
                      onChange={(e) => setCategoriaBitacora(e.target.value)}
                    >
                      {categoriasBitacora.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bitacora-expand-actions">
                    <button
                      type="button"
                      className="arbol-control-btn"
                      onClick={expandirTodaBitacora}
                    >
                      Desplegar todos
                    </button>
                    <button
                      type="button"
                      className="arbol-control-btn"
                      onClick={colapsarTodaBitacora}
                    >
                      Plegar todos
                    </button>
                  </div>
                </div>

                {/* LISTADO DE ENTRADAS TIPO ACORDEÓN / TIMELINE */}
                <div className="bitacora-timeline">
                  {bitacoraFiltrada.length > 0 ? (
                    bitacoraFiltrada.map((item) => {
                      const estaAbierto = !!entradasExpandidas[item.id];
                      return (
                        <div
                          key={item.id}
                          className={`bitacora-item ${estaAbierto ? 'abierto' : ''}`}
                        >
                          <div
                            className="bitacora-item-header"
                            onClick={() => toggleEntradaBitacora(item.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                toggleEntradaBitacora(item.id);
                              }
                            }}
                          >
                            <div className="bitacora-badges">
                              <span className={`bitacora-badge-fase fase-${item.fase.toLowerCase()}`}>
                                {item.fase}
                              </span>
                              <span className="bitacora-badge-cat">
                                {item.categoria}
                              </span>
                              <span className="bitacora-fecha">
                                🗓️ {item.fecha}
                              </span>
                            </div>

                            <div className="bitacora-titulo-row">
                              <h3>{item.titulo}</h3>
                              <span className="bitacora-toggle-icon">
                                {estaAbierto ? '▾' : '▸'}
                              </span>
                            </div>

                            <p className="bitacora-resumen">{item.resumen}</p>
                          </div>

                          {estaAbierto && (
                            <div className="bitacora-item-detalle">
                              <h4>📝 Detalle y decisiones del equipo:</h4>
                              <p>{item.detalle}</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="json-no-results">
                      <p className="json-no-results-icon">🔎</p>
                      <h3>No hay entradas para este filtro</h3>
                      <button
                        type="button"
                        className="json-reset-btn"
                        onClick={() => {
                          setFaseBitacora('Todas');
                          setCategoriaBitacora('Todas');
                        }}
                      >
                        Restablecer filtros
                      </button>
                    </div>
                  )}
                </div>
              </article>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}

export default Links;
