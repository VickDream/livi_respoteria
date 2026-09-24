import { useState, useMemo } from 'react';
import { FiClock, FiAward, FiMonitor, FiUsers } from 'react-icons/fi';
import {
  getAllCourses,
  getCourseLevels,
  getCoursesByLevel,
} from '../data/courses';
import type { CourseLevel } from '../types';
import '../styles/Courses.css';

const levelIcons: Record<CourseLevel, React.ReactNode> = {
  Principiante: <FiUsers size={14} />,
  Intermedio: <FiAward size={14} />,
  Avanzado: <FiAward size={14} />,
};

export const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('Todos');

  const levels = getCourseLevels();
  const allCourses = getAllCourses();

  const filteredCourses = useMemo(() => {
    if (selectedLevel === 'Todos') return allCourses;
    return getCoursesByLevel(selectedLevel);
  }, [selectedLevel, allCourses]);

  return (
    <div className="courses">

      {/* ----- Header ----- */}
      <header className="courses__header">
        <h1 className="courses__title">Nuestros Cursos</h1>
        <p className="courses__subtitle">
          Aprende el arte de la repostería con nuestros cursos presenciales y en línea,
          diseñados para todos los niveles.
        </p>
      </header>

      {/* ----- Filtros por nivel ----- */}
      <div className="courses__filters">
        {levels.map((level) => (
          <button
            key={level}
            className={`courses__filter-btn ${selectedLevel === level ? 'courses__filter-btn--active' : ''
              }`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* ----- Contador ----- */}
      <p className="courses__results-count">
        Mostrando <strong>{filteredCourses.length}</strong>{' '}
        {filteredCourses.length === 1 ? 'curso' : 'cursos'}
      </p>

      {/* ----- Grid de cursos ----- */}
      {filteredCourses.length > 0 ? (
        <div className="courses__grid">
          {filteredCourses.map((course) => (
            <article key={course.id} className="course-card">

              {/* Imagen */}
              <div className="course-card__image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card__image"
                  loading="lazy"
                />
                {course.featured && (
                  <span className="course-card__badge">Destacado</span>
                )}
              </div>

              {/* Contenido */}
              <div className="course-card__content">
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__description">{course.description}</p>

                {/* Meta info */}
                <div className="course-card__meta">
                  <span className="course-card__meta-item">
                    <FiClock size={14} />
                    {course.duration}
                  </span>
                  <span className="course-card__meta-item">
                    {levelIcons[course.level]}
                    {course.level}
                  </span>
                  <span className="course-card__meta-item">
                    <FiMonitor size={14} />
                    {course.modality}
                  </span>
                </div>

                {/* Precio + CTA */}
                <div className="course-card__footer">
                  <span className="course-card__price">
                    ${course.price.toLocaleString('es-MX')}
                  </span>
                  <button className="course-card__button">
                    Inscribirme
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>
      ) : (
        <div className="courses__empty">
          <h3 className="courses__empty-title">No hay cursos en este nivel</h3>
          <p className="courses__empty-text">Prueba con otro filtro.</p>
          <button
            className="courses__empty-btn"
            onClick={() => setSelectedLevel('Todos')}
          >
            Ver todos los cursos
          </button>
        </div>
      )}

      {/* ----- CTA final ----- */}
      <section className="courses__cta">
        <h2 className="courses__cta-title">¿No sabes cuál elegir?</h2>
        <p className="courses__cta-text">
          Escríbenos y te ayudamos a encontrar el curso perfecto para ti.
        </p>
        <a href="/contacto" className="courses__cta-btn">
          Contáctanos
        </a>
      </section>

    </div>
  );
};