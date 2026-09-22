import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiArrowLeft, FiTruck, FiHeart } from 'react-icons/fi';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { getProductById, getRelatedProducts } from '../data/products';
import '../styles/ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productId = Number(id);
  const product = getProductById(productId);

  // Si el producto no existe, mostramos un mensaje con enlace al 404
  if (!product) {
    return (
      <div className="product-detail__not-found">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe o fue eliminado.</p>
        <Button variant="primary" onClick={() => navigate('/tienda')}>
          Volver a la tienda
        </Button>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    console.log('Añadir al carrito:', product.id);
  };

  return (
    <div className="product-detail">

      {/* ----- Breadcrumb ----- */}
      <nav className="product-detail__breadcrumb">
        <Link to="/" className="product-detail__breadcrumb-link">Inicio</Link>
        <span className="product-detail__breadcrumb-sep">/</span>
        <Link to="/tienda" className="product-detail__breadcrumb-link">Tienda</Link>
        <span className="product-detail__breadcrumb-sep">/</span>
        <span className="product-detail__breadcrumb-current">{product.name}</span>
      </nav>

      {/* ----- Contenido principal ----- */}
      <div className="product-detail__main">

        {/* Imagen */}
        <div className="product-detail__image-wrapper">
          <span className="product-detail__category">{product.category}</span>
          <img
            src={product.image}
            alt={product.name}
            className="product-detail__image"
          />
        </div>

        {/* Info */}
        <div className="product-detail__info">
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>

          {product.description && (
            <p className="product-detail__description">{product.description}</p>
          )}

          {/* Disponibilidad */}
          {product.stock !== undefined && (
            <p className="product-detail__stock">
              {product.stock > 0 ? (
                <>
                  <span className="product-detail__stock-dot product-detail__stock-dot--available"></span>
                  Disponible ({product.stock} en stock)
                </>
              ) : (
                <>
                  <span className="product-detail__stock-dot product-detail__stock-dot--out"></span>
                  Agotado
                </>
              )}
            </p>
          )}

          {/* Botones de acción */}
          <div className="product-detail__actions">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <FiShoppingBag size={20} />
              Añadir al carrito
            </Button>

            <button className="product-detail__wishlist" aria-label="Añadir a favoritos">
              <FiHeart size={20} />
            </button>
          </div>

          {/* Beneficios */}
          <ul className="product-detail__benefits">
            <li className="product-detail__benefit">
              <FiTruck size={18} />
              <span>Entrega a domicilio en CDMX</span>
            </li>
            <li className="product-detail__benefit">
              <FiHeart size={18} />
              <span>Hecho con ingredientes frescos</span>
            </li>
          </ul>

          {/* Volver */}
          <Link to="/tienda" className="product-detail__back">
            <FiArrowLeft size={16} />
            Volver a la tienda
          </Link>
        </div>

      </div>

      {/* ----- Productos relacionados ----- */}
      {relatedProducts.length > 0 && (
        <section className="product-detail__related">
          <h2 className="product-detail__related-title">También te puede gustar</h2>
          <div className="grid-auto">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};