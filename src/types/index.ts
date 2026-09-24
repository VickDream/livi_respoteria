// src/types/index.ts

/* =========================================
   Producto
   ========================================= */
export interface Product {
   id: number;
   name: string;
   description?: string;
   price: number;
   image: string;
   category: ProductCategory;
   stock?: number;
   featured?: boolean;
   createdAt?: string;
}

/* =========================================
   Categorías (union type, solo estos valores son válidos)
   ========================================= */
export type ProductCategory =
   | 'Pasteles'
   | 'Cupcakes'
   | 'Postres'
   | 'Galletas'
   | 'Bebidas'
   | 'Especiales';

/* =========================================
 Galería
 ========================================= */
export interface GalleryImage {
   id: number;
   src: string;
   alt: string;
   category: GalleryCategory;
   featured?: boolean; // Si es true, ocupa más espacio en el grid
}

export type GalleryCategory =
   | 'Pasteles'
   | 'Cupcakes'
   | 'Postres'
   | 'Eventos'
   | 'Bodas';

/* =========================================
Servicios
========================================= */
export interface Service {
   id: number;
   title: string;
   description: string;
   price?: string; // Ej: "Desde $500" o "A cotizar"
   icon: ServiceIcon;
}

export type ServiceIcon =
   | 'cake'
   | 'candy'
   | 'gift'
   | 'party'
   | 'heart'
   | 'star';

/* =========================================
   Contacto
   ========================================= */
export interface ContactFormData {
   name: string;
   email: string;
   phone: string;
   eventType: string;
   eventDate: string;
   message: string;
}

export interface ContactInfo {
   phone: string;
   email: string;
   address: string;
   whatsapp: string;
   hours: {
      weekday: string;
      saturday: string;
      sunday: string;
   };
   socials: {
      instagram: string;
      facebook: string;
   };
}

/* =========================================
   Cursos
   ========================================= */
export interface Course {
   id: number;
   title: string;
   description: string;
   duration: string;      // Ej: "4 semanas"
   level: CourseLevel;
   modality: CourseModality;
   price: number;
   image: string;
   featured?: boolean;
}

export type CourseLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

export type CourseModality = 'Presencial' | 'En línea' | 'Híbrido';