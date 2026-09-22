import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';
import '../styles/Dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  id?: string;
  className?: string;
}

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Selecciona una opción',
  name,
  required = false,
  id,
  className = '',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const hasValue = Boolean(selectedOption);

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

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>

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

      <button
        type="button"
        id={id}
        className={`dropdown__trigger ${isOpen ? 'dropdown__trigger--open' : ''
          } ${!hasValue ? 'dropdown__trigger--placeholder' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="dropdown__trigger-text">
          {hasValue ? selectedOption!.label : placeholder}
        </span>
        <FiChevronDown
          size={16}
          className={`dropdown__chevron ${isOpen ? 'dropdown__chevron--open' : ''
            }`}
        />
      </button>

      {isOpen && (
        <ul className="dropdown__menu" role="listbox">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={`dropdown__option ${option.value === value ? 'dropdown__option--active' : ''
                  }`}
                onClick={() => handleSelect(option.value)}
                role="option"
                aria-selected={option.value === value}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <FiCheck size={16} className="dropdown__check" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};