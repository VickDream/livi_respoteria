import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import '../styles/Home.css';

export const Home = () => {
  const featuredProducts = getFeaturedProducts();

  const handleAddToCart = (id: number) => {
    console.log('Añadir al carrito:', id);
    // Aquí irá la lógica real cuando implementes el carrito
  };

  return (
    <div className="home">
      <Hero />

      <section className="home__featured">
        <h2 className="home__section-title">Nuestros Favoritos</h2>

        <div className="grid-auto">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};