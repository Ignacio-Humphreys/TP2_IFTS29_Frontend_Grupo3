# Trabajo Práctico Grupal 2 - Proyecto React en Equipo
## G.O.O.D_TEAM · Desarrollo Frontend 2026 (IFTS N° 29)

Aplicación web desarrollada en **React 19** que presenta al equipo, organiza sus contenidos mediante una arquitectura de componentes y navegación SPA, y posee una identidad estética propia con integración de APIs públicas y datos locales.

---

## 🔗 Despliegue en Producción (Vercel)

El proyecto se encuentra publicado y accesible públicamente sin necesidad de iniciar sesión:
- **Sitio publicado:** [https://tp-2-ifts-29-frontend-grupo3.vercel.app](https://tp-2-ifts-29-frontend-grupo3.vercel.app/)

---

## 👥 Integrantes del Equipo

| Nombre y Apellido | Rol Principal en el Proyecto | Perfil de GitHub |
|---|---|---|
| **Ignacio Tomás Humphreys** | Coordinación, setup de repositorio, estructura base de React y vista Nosotros | [@Ignacio-Humphreys](https://github.com/Ignacio-Humphreys) |
| **Lihue Anker Díaz** | Wireframes de diseño, maquetación de vistas y perfil individual | [@AnkerYeray](https://github.com/AnkerYeray) |
| **Cristel Nazarena Frías** | Integración estética botánica/Ghibli, revisión de consistencia y perfiles | [@CristelFrias](https://github.com/CristelFrias) |
| **Lucas Federico De Diego** | Sección Proyecto (catálogo de módulos, árbol y bitácora), perfil interactivo de Boca Juniors | [@lucasfedericodd](https://github.com/lucasfedericodd) |
| **David Sebastian Giordano Rodriguez** | Lógica de componentes, refactorización de estilos oscuros y perfil individual | [@Sebastian1601](https://github.com/Sebastian1601) |

---

## 📋 Descripción del Proyecto y Contenidos

El proyecto continúa y evoluciona el trabajo iniciado en el **TP1** migrando hacia una **Single Page Application (SPA)** moderna construida con **React + Vite**. La interfaz está organizada alrededor de una **Sidebar compartida** que permanece fija mientras el contenido cambia dinámicamente:

1. **Portada (`/` - Home):** Presentación del equipo con identidad visual inmersiva, tipografías cuidadas y accesos directos a las áreas principales.
2. **Nosotros (`/about`):** Presentación colectiva de los cinco integrantes con tarjetas que incluyen fotografías reales, enlaces a GitHub y acceso a cada perfil individual.
3. **Perfiles dentro de React (`/about/:integrante`):** Cada integrante cuenta con una pantalla personalizada con identidad propia (La Bombonera, Studio Ghibli, paletas oscuras), gustos culturales (películas y discos favoritos) y un control interactivo para **revelar un dato random**.
4. **API Pública Studio Ghibli (`/API_Studio_Ghibli`):** Consumo asíncrono de la API REST oficial de Studio Ghibli (películas, personajes, especies, vehículos), con manejo de estados de carga (skeletons), control de errores, normalizador de búsqueda insensible a tildes y reutilización polimórfica del componente `<ResourceCard />`.
5. **Sección Proyecto (`/links`):**
   * **Presentación y Módulos (Criterios 10 y 11):** Catálogo local en JSON (`tecnologias.json`) con 21 módulos reales del proyecto, buscador en tiempo real, filtro desplegable por categoría, contador reactivo de resultados y tarjetas con detalle expandible.
   * **Arquitectura de Renderizado (Criterio 13):** Esquema interactivo que refleja el árbol jerárquico de componentes React (`App` ➔ `Layout` ➔ `Sidebar` / `Outlet` ➔ vistas y tarjetas), con botones para expandir y contraer nodos.
   * **Bitácora (Criterio 14):** Registro cronológico del proceso de trabajo de ambos cuatrimestres (TP1 y TP2), con filtros por etapa, por área y tarjetas colapsables en formato acordeón.
6. **Formulario de Contacto (`/contact`):** Pantalla interactiva con campos controlados para contacto institucional.
7. **Página 404 (`*` - NotFound):** Captura de rutas inexistentes con mensaje amigable y navegación de regreso.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **React 19:** Librería principal de UI y gestión de componentes.
- **React Router DOM (v7/v8):** Enrutamiento declarativo del lado del cliente (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Outlet`).
- **Vite:** Entorno de desarrollo ultrarrápido con Hot Module Replacement (HMR).
- **CSS3 Moderno:** Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`), animaciones keyframes y diseño responsive adaptable a móviles y tablets.
- **JavaScript (ES6+):** Hooks (`useState`, `useEffect`, `useMemo`), desestructuración, async/await y métodos de array.
- **Git & GitHub:** Control de versiones colaborativo y flujo de trabajo en equipo.
- **Vercel:** Despliegue continuo en la nube.

---

## 🤖 Declaración de Uso de Inteligencia Artificial 

En cumplimiento de las pautas de cátedra, se detalla a continuación el uso asistivo de herramientas de Inteligencia Artificial durante el desarrollo del proyecto:

| Integrante | Aplicación / Entorno | Modelo Empleado | Tareas y Contenidos en los que se utilizó |
|---|---|---|---|
| **Ignacio Tomás Humphreys** | Claude Web / Claude Pro | Claude 3.5 Sonnet | Boilerplate inicial de componentes, verificación de enrutamiento con React Router y revisión de accesibilidad. |
| **Lihue Anker Díaz** | ChatGPT (OpenAI) | GPT-4o | Exploración de ideas de diagramación y redacción de descripciones para las secciones. |
| **Cristel Nazarena Frías** | Claude Web | Claude 3.5 Sonnet | Asistencia en la generación de paletas CSS botánicas y ajuste de estilos temáticos de Studio Ghibli. |
| **Lucas Federico De Diego** | Google Antigravity / Claude Code | Claude 3.5 Sonnet / Antigravity | Construcción del catálogo JSON de módulos con buscador y filtros, desarrollo del árbol interactivo de componentes, armado de la bitácora cronológica y animación de partículas CSS en el perfil de La Bombonera. |
| **David Sebastian Giordano Rodriguez** | VS Code Copilot | GPT-4o / Copilot | Refactorización de gradientes en tarjetas oscuras (glassmorphism), control de errores y normalización de sintaxis. |

### Criterio de Uso y Supervisión Humana
La Inteligencia Artificial se utilizó como un asistente de aceleración y soporte de código. Todas las propuestas, fragmentos generados, estilos y estructuras fueron analizados, probados, adaptados e integrados con criterio técnico propio por parte de los integrantes del equipo.

---

## 💻 Instalación y Ejecución Local

Para clonar y correr este proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Ignacio-Humphreys/TP2_IFTS29_Frontend_Grupo3.git
   ```

2. **Ingresar a la carpeta de la aplicación:**
   ```bash
   cd TP2_IFTS29_Frontend_Grupo3/React_FrontEnd2026
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abrir el navegador en `http://localhost:5173/`.
