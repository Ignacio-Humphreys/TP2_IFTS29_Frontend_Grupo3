// Sirve para importar todas las imágenes locales de la carpeta assets/img/ghibli y sus subcarpetas.
const files = import.meta.glob(
  '../assets/img/ghibli/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' },
);

// normaliza los nombres de los archivos
export const slugify = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Índice
const index = new Map();
for (const [path, url] of Object.entries(files)) {
  const parts = path.split('/');
  const fileName = parts.pop();
  const folder = parts.pop();
  const name = fileName.replace(/\.[^.]+$/, '');
  index.set(`${slugify(folder)}/${slugify(name)}`, url);
}

// Devuelve la URL de la imagen local para ese ítem, o null si no hay.
export function localImageFor(folder, name) {
  if (!folder || !name) return null;
  return index.get(`${slugify(folder)}/${slugify(name)}`) ?? null;
}

// En el run dev, indica si no hay imagen que coincida con el nombre de la API (suele ser un error de tipeo en el nombre del archivo).
export function unusedLocalImages(folder, names) {
  const used = new Set(names.map((name) => `${slugify(folder)}/${slugify(name)}`));
  return [...index.keys()].filter(
    (key) => key.startsWith(`${slugify(folder)}/`) && !used.has(key),
  );
}
