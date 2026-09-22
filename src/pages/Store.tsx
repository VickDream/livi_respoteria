import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Dropdown, type DropdownOption } from '../components/Dropdown';
import { getAllProducts, getAllCategories } from '../data/products';
import '../styles/Store.css';

type SortValue = 'default' | 'price-asc' | 'price-desc';

const sortOptions: DropdownOption[] = [
  { value: 'default', label: 'Relevancia' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
];

export const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState<SortValue>('default');

  const categories = getAllCategories();
  const allProducts = getAllProducts();

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (selectedCategory !== 'Todos') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allProducts, selectedCategory, sortBy]);

  const handleAddToCart = (id: number) => {
    console.log('Añadir al carrito:', id);
  };

  return (
    <div className="store">
      <header className="store__header">
        <h1 className="store__title">Nuestra Tienda</h1>
        <p className="store__subtitle">
          Descubre todos nuestros postres artesanales, hechos con ingredientes frescos y mucho amor.
        </p>
      </header>

      <div className="store__filters">
        <div className="store__categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`store__category-btn ${selectedCategory === category ? 'store__category-btn--active' : ''
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Dropdown
          options={sortOptions}
          value={sortBy}
          onChange={(value) => setSortBy(value as SortValue)}
        />
      </div>

      <p className="store__results-count">
        Mostrando <strong>{filteredProducts.length}</strong>{' '}
        {filteredProducts.length === 1 ? 'producto' : 'productos'}
      </p>

      {filteredProducts.length > 0 ? (
        <div className="grid-auto">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="store__empty">
          <h3 className="store__empty-title">No hay productos en esta categoría</h3>
          <p className="store__empty-text">Prueba con otra categoría o vuelve a "Todos".</p>
          <button
            className="store__empty-btn"
            onClick={() => setSelectedCategory('Todos')}
          >
            Ver todos los productos
          </button>
        </div>
      )}
    </div>
  );
};