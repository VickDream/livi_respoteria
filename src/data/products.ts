// src/data/products.ts
import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Pastel de Chocolate',
    description: 'Bizcocho húmedo de chocolate con ganache y fresas frescas.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    category: 'Pasteles',
    stock: 10,
    featured: true,
  },
  {
    id: 2,
    name: 'Cupcakes Arcoíris',
    description: 'Caja de 6 cupcakes con buttercream de colores.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=600&q=80',
    category: 'Cupcakes',
    stock: 25,
    featured: true,
  },
  {
    id: 3,
    name: 'Cheesecake de Fresa',
    description: 'Cheesecake cremoso con coulis de fresa natural.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&q=80',
    category: 'Postres',
    stock: 8,
    featured: true,
  },
  {
    id: 4,
    name: 'Galletas de Mantequilla',
    description: 'Docena de galletas decoradas a mano.',
    price: 90,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    category: 'Galletas',
    stock: 40,
  },
  {
    id: 5,
    name: 'Pastel de Boda',
    description: 'Diseño personalizado de 3 pisos para tu evento.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80',
    category: 'Especiales',
    stock: 3,
  },
  {
    id: 6,
    name: 'Frappé de Oreo',
    description: 'Bebida fría con crema batida y trozos de galleta.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
    category: 'Bebidas',
    stock: 50,
  },
];

/* =========================================
   Helpers
   ========================================= */

export const getAllProducts = (): Product[] => {
  return products;
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getAllCategories = (): string[] => {
  const categories = products.map((product) => product.category);
  return ['Todos', ...new Set(categories)];
};

export const getRelatedProducts = (
  currentId: number,
  category: string,
  limit = 3
): Product[] => {
  return products
    .filter((product) => product.category === category && product.id !== currentId)
    .slice(0, limit);
};