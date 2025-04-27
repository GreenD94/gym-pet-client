import React from 'react';
import { useTheme } from '../../hooks/use-theme.hook';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
type InputSize = 'sm' | 'md' | 'lg';
type InputState = 'default' | 'error' | 'success' | 'disabled';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: InputType;
  size?: InputSize;
  state?: InputState;
  panel?: 'admin' | 'trainer' | 'consumer';
  label?: string;
  helperText?: string;
  errorText?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'md',
  state = 'default',
  panel = 'consumer',
  label,
  helperText,
  errorText,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const theme = useTheme();
  const panelTheme = theme.getPanelTheme(panel);

  const baseStyles = `
    w-full
    rounded-md
    border
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const stateStyles = {
    default: `
      border-${panelTheme.accent}
      bg-${panelTheme.background}
      text-${panelTheme.text}
      focus:ring-${panelTheme.accent}
    `,
    error: `
      border-${theme.colors.status.error}
      bg-${panelTheme.background}
      text-${panelTheme.text}
      focus:ring-${theme.colors.status.error}
    `,
    success: `
      border-${theme.colors.status.success}
      bg-${panelTheme.background}
      text-${panelTheme.text}
      focus:ring-${theme.colors.status.success}
    `,
    disabled: `
      border-${theme.colors.ui.border}
      bg-${theme.colors.ui.border}
      text-${theme.colors.text.secondary}
      cursor-not-allowed
    `,
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${widthStyles} ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`
            block
            mb-2
            text-${theme.typography.sizes.small}
            font-${theme.typography.weights.medium}
            text-${panelTheme.text}
          `}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        disabled={disabled || state === 'disabled'}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${stateStyles[state]}
        `}
        aria-invalid={state === 'error'}
        aria-describedby={
          (errorText ? `${inputId}-error` : '') +
          (helperText ? `${inputId}-helper` : '')
        }
        {...props}
      />
      {errorText && (
        <p
          id={`${inputId}-error`}
          className={`
            mt-2
            text-${theme.typography.sizes.small}
            text-${theme.colors.status.error}
          `}
        >
          {errorText}
        </p>
      )}
      {helperText && !errorText && (
        <p
          id={`${inputId}-helper`}
          className={`
            mt-2
            text-${theme.typography.sizes.small}
            text-${theme.colors.text.secondary}
          `}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}; 