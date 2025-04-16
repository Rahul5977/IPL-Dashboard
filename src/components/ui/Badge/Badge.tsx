import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'success' | 'error' | 'warning' | 'info';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'info', className = '' }) => {
  const colorStyles = {
    success: 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400',
    error: 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400',
    warning: 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400',
    info: 'bg-info-100 text-info-700 dark:bg-info-900/30 dark:text-info-400'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-medium ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;