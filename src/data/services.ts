import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Pasteles Personalizados',
    description:
      'Diseñamos el pastel de tus sueños. Elige sabor, relleno, tamaño y decoración para tu evento especial.',
    price: 'Desde $450',
    icon: 'cake',
  },
  {
    id: 2,
    title: 'Mesas Dulces',
    description:
      'Montaje completo de mesas dulces para bodas, XV años y eventos corporativos. Incluye decoración temática.',
    price: 'Desde $2,500',
    icon: 'candy',
  },
  {
    id: 3,
    title: 'Cupcakes por Encargo',
    description:
      'Cupcakes artesanales decorados a mano. Perfectos para cumpleaños, baby showers y regalos.',
    price: 'Desde $180',
    icon: 'gift',
  },
  {
    id: 4,
    title: 'Eventos y Fiestas',
    description:
      'Servicio completo de repostería para tu evento. Postres, bebidas y atención personalizada.',
    price: 'A cotizar',
    icon: 'party',
  },
  {
    id: 5,
    title: 'Pasteles de Boda',
    description:
      'Pasteles de varios pisos con diseño exclusivo. Asesoría personalizada y degustación previa.',
    price: 'Desde $1,500',
    icon: 'heart',
  },
  {
    id: 6,
    title: 'Postres Especiales',
    description:
      'Cheesecakes, tartas, brownies y más. Opciones sin gluten y veganas disponibles.',
    price: 'Desde $280',
    icon: 'star',
  },
];

/* =========================================
   Helpers
   ========================================= */
export const getAllServices = (): Service[] => {
  return services;
};