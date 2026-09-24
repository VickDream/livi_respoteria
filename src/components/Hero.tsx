import '../styles/Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* Contenido de texto */}
        <div className="hero__content">
          <span className="hero__badge">Hecho con amor</span>
          <h1 className="hero__title">
            Endulza tus <span className="hero__title-accent">momentos</span> especiales
          </h1>
          <p className="hero__subtitle">
            En LiVi Repostería creamos postres artesanales que convierten
            cada celebración en un recuerdo inolvidable.
          </p>
          <div className="hero__actions">
            <a href="/tienda" className="hero__button hero__button--primary">
              Ver Tienda
            </a>
            <a href="/contacto" className="hero__button hero__button--secondary">
              Cotiza tu evento
            </a>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="hero__image-wrapper">
          <div className="hero__image-decoration" aria-hidden="true"></div>
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
            alt="Pastel artesanal de LiVi Repostería"
            className="hero__image"
          />
        </div>

      </div>
    </section>
  );
};