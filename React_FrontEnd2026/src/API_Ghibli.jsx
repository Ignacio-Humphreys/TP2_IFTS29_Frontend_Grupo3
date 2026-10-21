import { useEffect, useMemo, useState } from 'react';
import ResourceCard from './ResourceCard.jsx';
import { RESOURCES, API_BASE } from './js/resources.js';
import { useGhibli } from './js/ghibli_api.js';
import { unusedLocalImages } from './js/localImages.js';
import './css/Ghibli.css';

const SKELETON_COUNT = 8;

// Para buscar sin que importen mayúsculas ni tildes ("pelicula" encuentra "Película").
const normalize = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

// Todo el texto de una tarjeta sobre el que se puede buscar.
const searchableText = (card, filmTitles) =>
  normalize(
    [
      card.title,
      card.subtitle,
      card.badge,
      card.description,
      ...card.facts.map((fact) => fact.value),
      ...filmTitles,
    ]
      .filter(Boolean)
      .join(' '),
  );

function GhibliPage() {
  const [activeId, setActiveId] = useState(RESOURCES[0].id);
  const [query, setQuery] = useState('');
  const resource = RESOURCES.find((item) => item.id === activeId);

  // Las películas se consultan siempre: sirven para mostrar "Aparece en: …"
  // en los demás recursos (la API solo da la URL de cada película).
  const films = useGhibli('films');
  const own = useGhibli(activeId === 'films' ? null : resource.endpoint);
  const current = activeId === 'films' ? films : own;

  const filmTitleById = useMemo(
    () => new Map((films.data || []).map((film) => [film.id, film.title])),
    [films.data],
  );

  const cards = useMemo(
    () => (current.data || []).map((item) => resource.toCard(item)),
    [current.data, resource],
  );

  // Solo en desarrollo: avisa si hay imágenes guardadas cuyo nombre no coincide
  // con ningún ítem de la API (suele ser un error de tipeo en el nombre del archivo).
  useEffect(() => {
    if (!import.meta.env.DEV || current.status !== 'success' || !resource.imageFolder) return;
    const unused = unusedLocalImages(
      resource.imageFolder,
      current.data.map((item) => item.name),
    );
    if (unused.length > 0) {
      console.warn(
        `[Ghibli] Imágenes en "${resource.imageFolder}" que no coinciden con ningún nombre de la API: ${unused.join(', ')}`,
      );
    }
  }, [current.status, current.data, resource]);

  // Búsqueda: cada palabra escrita tiene que aparecer en alguna parte de la tarjeta.
  const visibleCards = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return cards;
    return cards.filter((card) => {
      const filmTitles = card.filmIds.map((id) => filmTitleById.get(id)).filter(Boolean);
      const text = searchableText(card, filmTitles);
      return terms.every((term) => text.includes(term));
    });
  }, [cards, query, filmTitleById]);

  const isFiltering = query.trim() !== '';
  const isLoading = current.status === 'loading';

  // Al cambiar de pestaña se limpia la búsqueda (cada recurso tiene datos distintos).
  const selectTab = (id) => {
    setActiveId(id);
    setQuery('');
  };

  // Navegación de pestañas con flechas del teclado.
  const handleTabKeyDown = (event) => {
    const index = RESOURCES.findIndex((item) => item.id === activeId);
    let next = null;
    if (event.key === 'ArrowRight') next = (index + 1) % RESOURCES.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + RESOURCES.length) % RESOURCES.length;
    if (next === null) return;
    event.preventDefault();
    const nextId = RESOURCES[next].id;
    selectTab(nextId);
    document.getElementById(`ghibli-tab-${nextId}`)?.focus();
  };

  return (
    <section className="ghibli">
      <header className="ghibli__header">
        <h1>API de Studio Ghibli</h1>
        <p>
          Esta sección consulta en vivo la API pública y gratuita{' '}
          <a href="https://ghibliapi.vercel.app/" target="_blank" rel="noopener noreferrer">
            ghibliapi.vercel.app
          </a>
          , que reúne datos de las películas del estudio y de su universo. No requiere clave.
          Las imágenes pertenecen a Studio Ghibli y se cargan directamente desde la API.
        </p>
      </header>

      <div
        className="ghibli__tabs"
        role="tablist"
        aria-label="Recursos de la API"
        onKeyDown={handleTabKeyDown}
      >
        {RESOURCES.map((item) => (
          <button
            key={item.id}
            id={`ghibli-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={item.id === activeId}
            aria-controls="ghibli-panel"
            tabIndex={item.id === activeId ? 0 : -1}
            className="ghibli__tab"
            onClick={() => selectTab(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span> {item.tab}
          </button>
        ))}
      </div>

      <div
        id="ghibli-panel"
        role="tabpanel"
        aria-labelledby={`ghibli-tab-${activeId}`}
        aria-busy={isLoading}
      >
        <div className="ghibli__info">
          <p>{resource.about}</p>
          <code>GET {API_BASE}/{resource.endpoint}</code>
        </div>

        {current.status === 'success' && cards.length > 0 && (
          <div className="ghibli__search">
            <label htmlFor="ghibli-search" className="ghibli__search-label">
              Buscar en {resource.plural}
            </label>
            <div className="ghibli__search-field">
              <input
                id="ghibli-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Buscar ${resource.plural} por nombre, dato o película…`}
                autoComplete="off"
              />
              {isFiltering && (
                <button type="button" className="ghibli__button" onClick={() => setQuery('')}>
                  ✕ Limpiar
                </button>
              )}
            </div>
          </div>
        )}

        <div className="ghibli__toolbar">
          <p className="ghibli__count" aria-live="polite">
            {current.status === 'success' &&
              (isFiltering
                ? `${visibleCards.length} de ${cards.length} ${resource.plural}`
                : `${cards.length} ${resource.plural}`)}
            {isLoading && `Cargando ${resource.plural}…`}
          </p>
          <button
            type="button"
            className="ghibli__button"
            onClick={current.reload}
            disabled={isLoading}
          >
            ↻ Actualizar
          </button>
        </div>

        {isLoading && (
          <div className="ghibli__grid" role="status" aria-label={`Cargando ${resource.plural}`}>
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <div key={i} className="ghibli-skeleton" aria-hidden="true" />
            ))}
          </div>
        )}

        {current.status === 'error' && (
          <div className="ghibli__error" role="alert">
            <p className="ghibli__error-title">No pudimos cargar los {resource.plural}</p>
            <p>{current.error}</p>
            <button type="button" className="ghibli__button ghibli__button--primary" onClick={current.reload}>
              Reintentar
            </button>
          </div>
        )}

        {current.status === 'success' && cards.length === 0 && (
          <p className="ghibli__empty">La API no devolvió {resource.plural} por el momento.</p>
        )}

        {current.status === 'success' && cards.length > 0 && visibleCards.length === 0 && (
          <div className="ghibli__empty" role="status">
            <p>
              No encontramos {resource.plural} que coincidan con “{query.trim()}”.
            </p>
            <button type="button" className="ghibli__button" onClick={() => setQuery('')}>
              Mostrar todos
            </button>
          </div>
        )}

        {current.status === 'success' && visibleCards.length > 0 && (
          <div className="ghibli__grid">
            {visibleCards.map((card) => (
              <ResourceCard
                key={card.id}
                card={card}
                icon={resource.icon}
                filmTitles={card.filmIds
                  .map((id) => filmTitleById.get(id))
                  .filter(Boolean)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GhibliPage;
