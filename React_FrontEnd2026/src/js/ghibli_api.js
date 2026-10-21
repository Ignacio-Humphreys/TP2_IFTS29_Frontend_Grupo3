import { useCallback, useEffect, useState } from 'react';
import { API_BASE } from './resources.js';

// Endpoint que consulta a la api pública de Studio Ghibli y devuelve un estado derivado para React.

const TIMEOUT_MS = 10000;
const cache = new Map();

// Traduce los errores técnicos a mensajes claros para la persona que usa el sitio.
function describeError(err, timedOut) {
  if (timedOut) return 'La API tardó demasiado en responder.';
  if (err instanceof TypeError) return 'No se pudo conectar con la API. Revisá tu conexión a internet.';
  if (err.status) return `La API respondió con un error (código ${err.status}).`;
  return 'La API devolvió una respuesta inesperada.';
}

export function useGhibli(endpoint) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!endpoint || cache.has(endpoint)) return;

    const controller = new AbortController();
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, TIMEOUT_MS);

    fetch(`${API_BASE}/${endpoint}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw Object.assign(new Error('HTTP'), { status: res.status });
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Formato inesperado');
        cache.set(endpoint, data);
        setResult({ endpoint, attempt, status: 'success' });
      })
      .catch((err) => {
        // Si la consulta se canceló porque cambiamos de pestaña, no es un error.
        if (err.name === 'AbortError' && !timedOut) return;
        setResult({ endpoint, attempt, status: 'error', error: describeError(err, timedOut) });
      })
      .finally(() => clearTimeout(timer));

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [endpoint, attempt]);

  const reload = useCallback(() => {
    cache.delete(endpoint);
    setAttempt((n) => n + 1);
  }, [endpoint]);

  // El estado se deriva en cada render para que React lo pueda usar directamente en el renderizado.
  let state = { status: 'loading', data: null, error: null };
  if (!endpoint) {
    state = { status: 'idle', data: null, error: null };
  } else if (cache.has(endpoint)) {
    state = { status: 'success', data: cache.get(endpoint), error: null };
  } else if (result && result.endpoint === endpoint && result.attempt === attempt && result.status === 'error') {
    state = { status: 'error', data: null, error: result.error };
  }

  return { ...state, reload };
}
