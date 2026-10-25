import { useState } from 'react';
import '../src/css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: 'consulta',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      return;
    }
    setEnviado(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      asunto: 'consulta',
      mensaje: ''
    });
    setEnviado(false);
  };

  return (
    <div className="contacto-page">
      <div className="contacto-container">

        {/* ENCABEZADO */}
        <section className="contacto-hero">
          <span className="home-eyebrow">
            G.O.O.D_TEAM · DESARROLLO FRONTEND
          </span>

          <h1>Contacto</h1>

          <p>
            ¿Tenés alguna consulta, propuesta o sugerencia sobre nuestro proyecto?
            Completá el formulario a continuación y nos pondremos en contacto.
          </p>
        </section>

        {/* GRILLA PRINCIPAL */}
        <div className="contacto-grid">

          {/* FORMULARIO */}
          <div className="contacto-card">
            {enviado ? (
              <div className="contacto-exito">
                <div className="contacto-exito-icono" aria-hidden="true">✉️</div>
                <h3>¡Mensaje enviado con éxito!</h3>
                <p>
                  Gracias por comunicarte con <strong>G.O.O.D_TEAM</strong>, <strong>{formData.nombre}</strong>.
                  Te responderemos a la brevedad al correo <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  className="contacto-submit-btn"
                  onClick={handleReset}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="contacto-campo">
                  <label htmlFor="contacto-nombre">Nombre y Apellido *</label>
                  <input
                    type="text"
                    id="contacto-nombre"
                    name="nombre"
                    required
                    placeholder="Ej: Juan Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="contacto-campo">
                  <label htmlFor="contacto-email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="contacto-email"
                    name="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="contacto-campo">
                  <label htmlFor="contacto-asunto">Motivo de Contacto</label>
                  <select
                    id="contacto-asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                  >
                    <option value="consulta">Consulta sobre el proyecto</option>
                    <option value="sugerencia">Sugerencia o feedback</option>
                    <option value="colaboracion">Propuesta académica / colaborativa</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                </div>

                <div className="contacto-campo">
                  <label htmlFor="contacto-mensaje">Mensaje *</label>
                  <textarea
                    id="contacto-mensaje"
                    name="mensaje"
                    required
                    rows="5"
                    placeholder="Escribí acá tu mensaje o consulta..."
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contacto-submit-btn">
                  Enviar mensaje →
                </button>
              </form>
            )}
          </div>

          {/* TARJETA DE INFORMACIÓN INSTITUCIONAL */}
          <aside className="contacto-info-card">
            <h3>Información del Equipo</h3>
            <p>
              Somos estudiantes de la Tecnicatura Superior en Desarrollo de Software en el <strong>IFTS N° 29</strong>.
            </p>

            <div className="contacto-info-items">
              <div className="contacto-info-item">
                <span className="contacto-info-icon" aria-hidden="true">🎓</span>
                <div className="contacto-info-text">
                  <strong>Institución</strong>
                  <span>IFTS N° 29 · CABA</span>
                </div>
              </div>

              <div className="contacto-info-item">
                <span className="contacto-info-icon" aria-hidden="true">👥</span>
                <div className="contacto-info-text">
                  <strong>Equipo</strong>
                  <span>G.O.O.D_TEAM (Grupo 3)</span>
                </div>
              </div>

              <div className="contacto-info-item">
                <span className="contacto-info-icon" aria-hidden="true">💻</span>
                <div className="contacto-info-text">
                  <strong>Repositorio GitHub</strong>
                  <a
                    href="https://github.com/Ignacio-Humphreys/TP2_IFTS29_Frontend_Grupo3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código fuente ↗
                  </a>
                </div>
              </div>

              <div className="contacto-info-item">
                <span className="contacto-info-icon" aria-hidden="true">▲</span>
                <div className="contacto-info-text">
                  <strong>Despliegue</strong>
                  <a
                    href="https://tp-2-ifts-29-frontend-grupo3.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitio en Vercel ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}

export default Contact;
