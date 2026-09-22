import { FiInstagram, FiFacebook, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Button } from './Button';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">

      {/* ----- Sección de Suscripción ----- */}
      <section className="footer__newsletter">
        <div className="footer__newsletter-container">
          <div className="footer__newsletter-text">
            <h3 className="footer__newsletter-title">¡Suscríbete y obtén 10% OFF!</h3>
            <p className="footer__newsletter-subtitle">
              Recibe nuestro boletín informativo y obtén un descuento en tu primera compra.
            </p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="footer__newsletter-input"
              required
            />
            <Button variant="secondary" size="md" type="submit">
              Registrarse
            </Button>
          </form>
        </div>
      </section>

      {/* ----- Contenido Principal ----- */}
      <div className="footer__main">
        <div className="footer__container">

          {/* Columna 1: Marca */}
          <div className="footer__column">
            <a href="/" className="footer__logo">LiVi Repostería</a>
            <p className="footer__description">
              Postres artesanales hechos con amor para endulzar tus momentos especiales.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Instagram"><FiInstagram size={18} /></a>
              <a href="#" className="footer__social" aria-label="Facebook"><FiFacebook size={18} /></a>
              <a href="mailto:contacto@livireposteria.mx" className="footer__social" aria-label="Email"><FiMail size={18} /></a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="footer__column">
            <h4 className="footer__column-title">Enlaces</h4>
            <ul className="footer__list">
              <li><a href="/tienda" className="footer__link">Tienda</a></li>
              <li><a href="/galeria" className="footer__link">Galería</a></li>
              <li><a href="/cursos" className="footer__link">Cursos</a></li>
              <li><a href="/contacto" className="footer__link">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer__column">
            <h4 className="footer__column-title">Contacto</h4>
            <ul className="footer__list footer__list--contact">
              <li className="footer__contact-item">
                <FiPhone size={16} /> <span>5516540389</span>
              </li>
              <li className="footer__contact-item">
                <FiMail size={16} /> <span>contacto@livireposteria.mx</span>
              </li>
              <li className="footer__contact-item">
                <FiMapPin size={16} /> <span>CDMX, México</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ----- Copyright ----- */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            © {new Date().getFullYear()} LiVi Repostería CDMX. Todos los derechos reservados.
          </p>
          <div className="footer__legal">
            <a href="/politicas" className="footer__legal-link">Políticas de Privacidad</a>
            <a href="/terminos" className="footer__legal-link">Términos y Condiciones</a>
          </div>
        </div>
      </div>

    </footer>
  );
};