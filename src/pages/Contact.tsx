import { useState, type FormEvent, type ChangeEvent } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiMessageCircle,
  FiCheckCircle,
} from 'react-icons/fi';
import { Dropdown, type DropdownOption } from '../components/Dropdown';
import { DatePicker } from '../components/DatePicker';
import { contactInfo, eventTypes } from '../data/contact';
import type { ContactFormData } from '../types';
import '../styles/Contact.css';

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  message: '',
};

const eventTypeOptions: DropdownOption[] = eventTypes.map((type) => ({
  value: type,
  label: type,
}));

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulación de envío (aquí luego va EmailJS, Formspree o tu backend)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log('Datos enviados:', formData);
    setIsSending(false);
    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="contact">

      {/* ----- Header ----- */}
      <header className="contact__header">
        <h1 className="contact__title">Contáctanos</h1>
        <p className="contact__subtitle">
          ¿Tienes un evento en mente? Cuéntanos tu idea y te ayudamos a hacerla realidad.
        </p>
      </header>

      {/* ----- Layout principal ----- */}
      <div className="contact__layout">

        {/* ----- Formulario ----- */}
        <section className="contact__form-section">
          {isSubmitted ? (
            <div className="contact__success">
              <FiCheckCircle size={48} className="contact__success-icon" />
              <h2 className="contact__success-title">¡Mensaje enviado!</h2>
              <p className="contact__success-text">
                Gracias por escribirnos, te responderemos en menos de 24 horas.
              </p>
              <button
                className="contact__success-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Nombre completo *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="phone" className="contact__label">Teléfono *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="55 1234 5678"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Correo electrónico *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="eventType" className="contact__label">Tipo de evento *</label>
                  <Dropdown
                    id="eventType"
                    name="eventType"
                    options={eventTypeOptions}
                    value={formData.eventType}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, eventType: value }))
                    }
                    placeholder="Selecciona una opción"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="eventDate" className="contact__label">Fecha del evento</label>
                  <DatePicker
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, eventDate: value }))
                    }
                    placeholder="Selecciona una fecha"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Cuéntanos tu idea *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Ej: Necesito un pastel para 30 personas, temática de unicornios..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={isSending}
              >
                {isSending ? 'Enviando...' : 'Enviar mensaje'}
              </button>

            </form>
          )}
        </section>

        {/* ----- Panel de info ----- */}
        <aside className="contact__info">

          <div className="contact__info-card">
            <h3 className="contact__info-title">Información de contacto</h3>

            <ul className="contact__info-list">
              <li className="contact__info-item">
                <div className="contact__info-icon"><FiPhone size={18} /></div>
                <div>
                  <span className="contact__info-label">Teléfono</span>
                  <a href={`tel:${contactInfo.phone}`} className="contact__info-value">{contactInfo.phone}</a>
                </div>
              </li>

              <li className="contact__info-item">
                <div className="contact__info-icon"><FiMail size={18} /></div>
                <div>
                  <span className="contact__info-label">Correo</span>
                  <a href={`mailto:${contactInfo.email}`} className="contact__info-value">{contactInfo.email}</a>
                </div>
              </li>

              <li className="contact__info-item">
                <div className="contact__info-icon"><FiMapPin size={18} /></div>
                <div>
                  <span className="contact__info-label">Ubicación</span>
                  <span className="contact__info-value">{contactInfo.address}</span>
                </div>
              </li>

              <li className="contact__info-item">
                <div className="contact__info-icon"><FiClock size={18} /></div>
                <div>
                  <span className="contact__info-label">Horarios</span>
                  <span className="contact__info-value contact__info-value--small">
                    {contactInfo.hours.weekday}<br />
                    {contactInfo.hours.saturday}<br />
                    {contactInfo.hours.sunday}
                  </span>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/52${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              <FiMessageCircle size={20} />
              Escríbenos por WhatsApp
            </a>

            {/* Redes */}
            <div className="contact__socials">
              <a href={contactInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href={contactInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

        </aside>

      </div>

    </div>
  );
};