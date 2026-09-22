import type { GalleryImage } from '../types';

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
    alt: 'Pastel de chocolate con fresas',
    category: 'Pasteles',
    featured: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
    alt: 'Cupcakes decorados',
    category: 'Cupcakes',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=800',
    alt: 'Cheesecake de fresa',
    category: 'Postres',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800',
    alt: 'Pastel de boda de 3 pisos',
    category: 'Bodas',
    featured: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800',
    alt: 'Mesa dulce de evento',
    category: 'Eventos',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800',
    alt: 'Cupcakes con buttercream',
    category: 'Cupcakes',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800',
    alt: 'Pastel minimalista',
    category: 'Pasteles',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
    alt: 'Postre de temporada',
    category: 'Postres',
    featured: true,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=800',
    alt: 'Pastel de cumpleaños',
    category: 'Eventos',
  },
];

/* =========================================
   Helpers
   ========================================= */

export const getAllGalleryImages = (): GalleryImage[] => {
  return galleryImages;
};

export const getGalleryCategories = (): string[] => {
  const categories = galleryImages.map((img) => img.category);
  return ['Todas', ...new Set(categories)];
};