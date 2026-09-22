import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  FiCoffee,
  FiGift,
  FiHeart,
  FiStar,
  FiUsers,
  FiAperture,
} from 'react-icons/fi';
import type { ServiceIcon } from '../types';
import { getAllServices } from '../data/services';
import '../styles/Services.css';

const iconMap: Record<ServiceIcon, ReactNode> = {
  cake: <FiAperture size={32} />,
  candy: <FiCoffee size={32} />,
  gift: <FiGift size={32} />,
  party: <FiUsers size={32} />,
  heart: <FiHeart size={32} />,
  star: <FiStar size={32} />,
};

export const Services = () => {
  const services = getAllServices();

  return (
    <div className="services">

      {/* ----- Header ----- */}
      <header className="services__header">
        <h1 className="services__title">Nuestros Servicios</h1>
        <p className="services__subtitle">
          Más que postres, creamos experiencias. Descubre todo lo que podemos
          hacer para endulzar tu próximo evento.
        </p>
      </header>

      {/* ----- Grid de servicios ----- */}
      <div className="services__grid">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <div className="service-card__icon">
              {iconMap[service.icon]}
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            {service.price && (
              <p className="service-card__price">{service.price}</p>
            )}
          </article>
        ))}
      </div>

      {/* ----- CTA final ----- */}
      <section className="services__cta">
        <h2 className="services__cta-title">¿Listo para cotizar tu evento?</h2>
        <p className="services__cta-text">
          Cuéntanos qué necesitas y te enviaremos una cotización personalizada.
        </p>
        <Link to="/contacto" className="services__cta-btn">
          Cotizar mi evento
        </Link>
      </section>

    </div>
  );
};