import { useState, useMemo } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getAllGalleryImages, getGalleryCategories } from '../data/gallery';
import '../styles/Gallery.css';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = getAllGalleryImages();
  const categories = getGalleryCategories();

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'Todas') return allImages;
    return allImages.filter((img) => img.category === selectedCategory);
  }, [allImages, selectedCategory]);

  // Funciones del lightbox
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const goToPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="gallery">

      {/* ----- Header ----- */}
      <header className="gallery__header">
        <h1 className="gallery__title">Nuestra Galería</h1>
        <p className="gallery__subtitle">
          Un vistazo a algunos de nuestros trabajos más recientes.
        </p>
      </header>

      {/* ----- Filtros de categoría ----- */}
      <div className="gallery__filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`gallery__filter-btn ${selectedCategory === category ? 'gallery__filter-btn--active' : ''
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ----- Grid tipo mosaico ----- */}
      {filteredImages.length > 0 ? (
        <div className="gallery__grid">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              className={`gallery__item ${image.featured ? 'gallery__item--featured' : ''
                }`}
              onClick={() => openLightbox(index)}
              aria-label={`Ver ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__image"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__overlay-category">{image.category}</span>
                <span className="gallery__overlay-text">Ver imagen</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p className="gallery__empty">No hay imágenes en esta categoría.</p>
      )}

      {/* ----- Lightbox ----- */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <FiX size={28} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            aria-label="Anterior"
          >
            <FiChevronLeft size={32} />
          </button>

          <img
            src={filteredImages[lightboxIndex].src}
            alt={filteredImages[lightboxIndex].alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Siguiente"
          >
            <FiChevronRight size={32} />
          </button>

          <p className="lightbox__caption">
            {filteredImages[lightboxIndex].alt} — {lightboxIndex + 1} / {filteredImages.length}
          </p>
        </div>
      )}

    </div>
  );
};