import { useId, useState } from 'react';
import { IMAGE_CREDIT } from './js/resources.js';


// Tarjeta genérica para cualquier recurso de la API.
function ResourceCard({ card, icon, filmTitles }) {
  const [expanded, setExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [bannerFailed, setBannerFailed] = useState(false);
  const detailsId = useId();

  const hasImage = Boolean(card.image) && !imageFailed;
  const isPoster = card.imageKind === 'poster';
  const showBanner = card.banner && !bannerFailed;
  const canExpand = Boolean(card.description || showBanner);

  return (
    <article className="ghibli-card">
      <div
        className={`ghibli-card__media${
          hasImage ? (isPoster ? '' : ' ghibli-card__media--photo') : ' ghibli-card__media--icon'
        }`}
      >
        {hasImage ? (
          <img
            src={card.image}
            alt={`${isPoster ? 'Póster' : 'Imagen'} de ${card.title}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="ghibli-card__placeholder" aria-hidden="true">
            {icon}
          </span>
        )}
        {card.badge && <span className="ghibli-card__badge">{card.badge}</span>}
        {hasImage && <span className="ghibli-card__credit">{IMAGE_CREDIT}</span>}
      </div>

      <div className="ghibli-card__body">
        <h3 className="ghibli-card__title">{card.title}</h3>
        {card.subtitle && <p className="ghibli-card__subtitle">{card.subtitle}</p>}

        {card.facts.length > 0 && (
          <dl className="ghibli-card__facts">
            {card.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {filmTitles.length > 0 && (
          <div className="ghibli-card__films">
            <span className="ghibli-card__films-label">Aparece en</span>
            <ul>
              {filmTitles.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          </div>
        )}

        {canExpand && (
          <>
            <button
              type="button"
              className="ghibli-card__toggle"
              aria-expanded={expanded}
              aria-controls={detailsId}
              onClick={() => setExpanded((open) => !open)}
            >
              {expanded ? 'Ver menos' : 'Ver más'}
            </button>

            <div id={detailsId} className="ghibli-card__details" hidden={!expanded}>
              {showBanner && (
                <img
                  className="ghibli-card__banner"
                  src={card.banner}
                  alt={`Banner de ${card.title}`}
                  loading="lazy"
                  onError={() => setBannerFailed(true)}
                />
              )}
              {card.description && <p>{card.description}</p>}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default ResourceCard;
