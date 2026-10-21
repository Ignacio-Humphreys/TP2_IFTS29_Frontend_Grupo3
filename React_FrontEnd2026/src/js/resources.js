
// Config de cada recurso de la API de Studio Ghibli


import { localImageFor } from './localImages.js';

export const API_BASE = 'https://ghibliapi.vercel.app';

// Le dejé derechos de autor a las imágenes que saqué por fuera de la API
export const IMAGE_CREDIT = '© Studio Ghibli';

// La API devuelve "NA", "" o null cuando no tiene el dato.
export const clean = (value) => {
  if (value === null || value === undefined) return null;
  const text = String(value).trim();
  return text === '' || text.toUpperCase() === 'NA' || text === 'TODO' ? null : text;
};

// Las referencias entre recursos vienen como URL (".../films/<id>").
export const idFromUrl = (url) => String(url).split('/').filter(Boolean).pop();

// Acepta una URL suelta o una lista de URL (según el recurso) y devuelve ids.
const toIds = (value) => {
  if (!value) return [];
  return (Array.isArray(value) ? value : [value]).map(idFromUrl);
};

// Convierte una lista de datos { label, value } descartando los vacíos.
const facts = (list) =>
  list
    .map(([label, value]) => ({ label, value: clean(value) }))
    .filter((fact) => fact.value !== null);

export const RESOURCES = [
  {
    id: 'films',
    endpoint: 'films',
    tab: 'Películas',
    icon: '🎬',
    singular: 'película',
    plural: 'películas',
    about:
      'Las 22 películas del estudio: póster y banner, sinopsis, dirección, producción, año, duración y puntaje en Rotten Tomatoes.',
    toCard: (film) => ({
      id: film.id,
      title: film.title,
      subtitle: [clean(film.original_title), clean(film.original_title_romanised)]
        .filter(Boolean)
        .join(' · '),
      badge: clean(film.release_date),
      image: clean(film.image),
      imageKind: 'poster',
      banner: clean(film.movie_banner),
      description: clean(film.description),
      facts: facts([
        ['Dirección', film.director],
        ['Producción', film.producer],
        ['Duración', film.running_time ? `${film.running_time} min` : null],
        ['Rotten Tomatoes', film.rt_score ? `${film.rt_score}/100` : null],
      ]),
      filmIds: [],
    }),
  },
  {
    id: 'people',
    imageFolder: 'personajes',
    endpoint: 'people',
    tab: 'Personajes',
    icon: '🧑‍🎤',
    singular: 'personaje',
    plural: 'personajes',
    about:
      'Personajes de las películas: género, edad, color de ojos y de cabello, y en qué películas aparecen.',
    toCard: (person) => ({
      id: person.id,
      title: person.name,
      subtitle: clean(person.gender),
      badge: null,
      image: localImageFor('personajes', person.name),
      description: null,
      facts: facts([
        ['Edad', person.age],
        ['Ojos', person.eye_color],
        ['Cabello', person.hair_color],
      ]),
      filmIds: toIds(person.films),
    }),
  },
  {
    id: 'locations',
    imageFolder: 'lugares',
    endpoint: 'locations',
    tab: 'Lugares',
    icon: '🏞️',
    singular: 'lugar',
    plural: 'lugares',
    about:
      'Lugares que aparecen en las películas: clima, terreno, porcentaje de agua superficial y películas en las que se visitan.',
    toCard: (place) => ({
      id: place.id,
      title: place.name,
      subtitle: null,
      badge: null,
      image: localImageFor('lugares', place.name),
      description: null,
      facts: facts([
        ['Clima', place.climate],
        ['Terreno', place.terrain],
        ['Agua superficial', clean(place.surface_water) ? `${place.surface_water}%` : null],
      ]),
      filmIds: toIds(place.films),
    }),
  },
  {
    id: 'species',
    imageFolder: 'especies',
    endpoint: 'species',
    tab: 'Especies',
    icon: '🐾',
    singular: 'especie',
    plural: 'especies',
    about:
      'Especies del universo Ghibli: clasificación, colores de ojos y de cabello típicos, y películas donde aparecen.',
    toCard: (species) => ({
      id: species.id,
      title: species.name,
      subtitle: clean(species.classification),
      badge: null,
      image: localImageFor('especies', species.name),
      description: null,
      facts: facts([
        ['Ojos', species.eye_colors],
        ['Cabello', species.hair_colors],
      ]),
      filmIds: toIds(species.films),
    }),
  },
  {
    id: 'vehicles',
    imageFolder: 'vehiculos',
    endpoint: 'vehicles',
    tab: 'Vehículos',
    icon: '✈️',
    singular: 'vehículo',
    plural: 'vehículos',
    about:
      'Vehículos y máquinas voladoras: descripción, clase, largo y películas donde aparecen.',
    toCard: (vehicle) => ({
      id: vehicle.id,
      title: vehicle.name,
      subtitle: clean(vehicle.vehicle_class),
      badge: null,
      image: localImageFor('vehiculos', vehicle.name),
      description: clean(vehicle.description),
      facts: facts([['Largo', vehicle.length]]),
      filmIds: toIds(vehicle.films),
    }),
  },
];
