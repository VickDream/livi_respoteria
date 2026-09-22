import { Link } from 'react-router-dom';
import { FiHome, FiShoppingBag } from 'react-icons/fi';
import '../styles/NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">

      <div className="not-found__content">
        {/* Número 404 decorativo */}
        <div className="not-found__code">
          <span className="not-found__digit">4</span>
          <span className="not-found__digit not-found__digit--middle">0</span>
          <span className="not-found__digit">4</span>
        </div>

        {/* Ícono / emoji pastelero */}
        <div className="not-found__icon" aria-hidden="true">
          🍰
        </div>

        {/* Texto */}
        <h1 className="not-found__title">¡Ups! Esta página no existe</h1>
        <p className="not-found__text">
          Parece que el pastel que buscabas ya se lo comieron, o la dirección
          que escribiste no está en nuestro recetario.
        </p>

        {/* Botones */}
        <div className="not-found__actions">
          <Link to="/" className="not-found__btn not-found__btn--primary">
            <FiHome size={18} />
            Volver al inicio
          </Link>
          <Link to="/tienda" className="not-found__btn not-found__btn--secondary">
            <FiShoppingBag size={18} />
            Ir a la tienda
          </Link>
        </div>
      </div>

    </div>
  );
};