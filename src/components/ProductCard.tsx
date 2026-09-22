import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import type { Product } from '../types';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <article className="product-card">

      <Link to={`/producto/${product.id}`} className="product-card__link">
        <div className="product-card__image-wrapper">
          <span className="product-card__category">{product.category}</span>
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        </div>

        <div className="product-card__content">
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__price">${product.price.toFixed(2)}</p>
        </div>
      </Link>

      <div className="product-card__footer">
        <button
          className="product-card__button"
          onClick={() => onAddToCart?.(product.id)}
          aria-label={`Añadir ${product.name} al carrito`}
        >
          <FiShoppingBag size={18} />
          <span>Añadir</span>
        </button>
      </div>

    </article>
  );
};