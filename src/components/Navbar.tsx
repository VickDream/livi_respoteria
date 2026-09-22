import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          LiVi Repostería
        </NavLink>

        {/* Navegación */}
        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li>
              <NavLink to="/" className="navbar__link" end>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/servicios" className="navbar__link">
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeria" className="navbar__link">
                Galería
              </NavLink>
            </li>
            <li>
              <NavLink to="/tienda" className="navbar__link">
                Tienda
              </NavLink>
            </li>
            <li>
              <NavLink to="/cursos" className="navbar__link">
                Cursos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className="navbar__link">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Acciones (iconos) */}
        <div className="navbar__actions">
          <button className="navbar__icon" aria-label="Buscar">
            <FiSearch size={20} />
          </button>
          <button className="navbar__icon" aria-label="Carrito">
            <FiShoppingCart size={20} />
          </button>
          <button className="navbar__icon" aria-label="Usuario">
            <FiUser size={20} />
          </button>
        </div>

      </div>
    </header>
  );
};