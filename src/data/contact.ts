import type { ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  phone: '5516540389',
  email: 'contacto@livireposteria.mx',
  address: 'CDMX, México',
  whatsapp: '5516540389',
  hours: {
    weekday: 'Lunes a Viernes: 9:00 AM - 7:00 PM',
    saturday: 'Sábado: 10:00 AM - 5:00 PM',
    sunday: 'Domingo: Cerrado',
  },
  socials: {
    instagram: 'https://instagram.com/livireposteria',
    facebook: 'https://facebook.com/livireposteria',
  },
};

// Opciones para el select de tipo de evento
export const eventTypes = [
  'Pastel personalizado',
  'Mesa dulce',
  'Boda',
  'XV Años',
  'Cumpleaños',
  'Baby Shower',
  'Evento corporativo',
  'Otro',
];