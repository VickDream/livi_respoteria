import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Repostería desde Cero',
    description:
      'Aprende las bases de la repostería: masas, cremas, bizcochos y decoración básica. Ideal si nunca has horneado.',
    duration: '6 semanas',
    level: 'Principiante',
    modality: 'Presencial',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Decoración de Pasteles',
    description:
      'Domina las técnicas de manga, fondant, buttercream y flores de azúcar para crear pasteles profesionales.',
    duration: '4 semanas',
    level: 'Intermedio',
    modality: 'Presencial',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=600&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Panadería Artesanal',
    description:
      'Aprende a hacer pan de masa madre, baguettes, croissants y más. Técnicas profesionales de panadería.',
    duration: '8 semanas',
    level: 'Intermedio',
    modality: 'Híbrido',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
  },
  {
    id: 4,
    title: 'Cupcakes y Postres Individuales',
    description:
      'Especialízate en cupcakes, tartaletas, macarons y postres de vitrina. Perfecto para emprender.',
    duration: '5 semanas',
    level: 'Principiante',
    modality: 'En línea',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=600&q=80',
  },
  {
    id: 5,
    title: 'Pastelería Francesa Avanzada',
    description:
      'Domina la alta pastelería: éclairs, milhojas, entremets y técnicas de vanguardia. Para reposteros con experiencia.',
    duration: '10 semanas',
    level: 'Avanzado',
    modality: 'Presencial',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80',
  },
  {
    id: 6,
    title: 'Negocio de Repostería',
    description:
      'Aprende a monetizar tu pasión: costos, precios, redes sociales, empaque y atención al cliente.',
    duration: '3 semanas',
    level: 'Intermedio',
    modality: 'En línea',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
];

/* =========================================
   Helpers
   ========================================= */
export const getAllCourses = (): Course[] => {
  return courses;
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter((course) => course.featured);
};

export const getCoursesByLevel = (level: string): Course[] => {
  if (level === 'Todos') return courses;
  return courses.filter((course) => course.level === level);
};

export const getCourseLevels = (): string[] => {
  const levels = courses.map((course) => course.level);
  return ['Todos', ...new Set(levels)];
};