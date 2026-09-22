import { useState, useRef, useEffect } from 'react';
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import '../styles/DatePicker.css';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  id?: string;
  minDate?: Date;
}

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const WEEKDAYS = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];

// Helpers de fecha
const pad = (n: number) => String(n).padStart(2, '0');

const formatDate = (date: Date): string => {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

const formatDisplay = (value: string): string => {
  if (!value) return '';
  const [year, month, day] = value.split('-').map(Number);
  return `${day} de ${MONTHS[month - 1]} de ${year}`;
};

const isSameDay = (a: Date, b: Date): boolean => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const DatePicker = ({
  value,
  onChange,
  placeholder = 'Selecciona una fecha',
  name,
  required = false,
  id,
  minDate,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    // Si hay valor, mostrar ese mes. Si no, el mes actual.
    if (value) {
      const [y, m] = value.split('-').map(Number);
      return new Date(y, m - 1, 1);
    }
    return new Date();
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const today = new Date();

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navegar entre meses
  const goToPrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Generar la grilla de días del mes visible
  const buildCalendarDays = (): (Date | null)[] => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = domingo
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (Date | null)[] = [];

    // Relleno del inicio (días del mes anterior)
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    // Relleno final hasta completar múltiplos de 7
    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  };

  const handleSelectDay = (date: Date) => {
    onChange(formatDate(date));
    setIsOpen(false);
  };

  const handleToday = () => {
    const now = new Date();
    onChange(formatDate(now));
    setViewDate(new Date(now.getFullYear(), now.getMonth(), 1));
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  const calendarDays = buildCalendarDays();
  const hasValue = Boolean(value);

  return (
    <div className="datepicker" ref={dropdownRef}>

      {/* Input oculto para formularios (HTML5 valida esto) */}
      {name && (
        <input
          type="text"
          name={name}
          value={value}
          required={required}
          onChange={() => { }}
          style={{ display: 'none' }}
          tabIndex={-1}
        />
      )}

      {/* Trigger */}
      <button
        type="button"
        id={id}
        className={`datepicker__trigger ${isOpen ? 'datepicker__trigger--open' : ''
          } ${!hasValue ? 'datepicker__trigger--placeholder' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="datepicker__trigger-text">
          {hasValue ? formatDisplay(value) : placeholder}
        </span>
        <FiCalendar className="datepicker__trigger-icon" size={18} />
      </button>

      {/* Panel del calendario */}
      {isOpen && (
        <div className="datepicker__panel" role="dialog">

          {/* Header: mes/año + navegación */}
          <div className="datepicker__header">
            <button
              type="button"
              className="datepicker__nav-btn"
              onClick={goToPrevMonth}
              aria-label="Mes anterior"
            >
              <FiChevronLeft size={18} />
            </button>

            <span className="datepicker__header-title">
              {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>

            <button
              type="button"
              className="datepicker__nav-btn"
              onClick={goToNextMonth}
              aria-label="Mes siguiente"
            >
              <FiChevronRight size={18} />
            </button>
          </div>

          {/* Días de la semana */}
          <div className="datepicker__weekdays">
            {WEEKDAYS.map((day) => (
              <span key={day} className="datepicker__weekday">{day}</span>
            ))}
          </div>

          {/* Días del mes */}
          <div className="datepicker__days">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <span key={`empty-${index}`} className="datepicker__day--other-month" />;
              }

              const isSelected = value === formatDate(date);
              const isToday = isSameDay(date, today);
              const isDisabled = minDate ? date < minDate : false;

              const classes = [
                'datepicker__day',
                isSelected ? 'datepicker__day--selected' : '',
                isToday && !isSelected ? 'datepicker__day--today' : '',
                isDisabled ? 'datepicker__day--disabled' : '',
              ].filter(Boolean).join(' ');

              return (
                <button
                  key={formatDate(date)}
                  type="button"
                  className={classes}
                  onClick={() => handleSelectDay(date)}
                  disabled={isDisabled}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Acciones */}
          <div className="datepicker__actions">
            <button
              type="button"
              className="datepicker__action"
              onClick={handleClear}
            >
              Limpiar
            </button>
            <button
              type="button"
              className="datepicker__action"
              onClick={handleToday}
            >
              Hoy
            </button>
          </div>

        </div>
      )}
    </div>
  );
};