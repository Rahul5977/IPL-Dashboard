import React from 'react';
import { Link } from 'react-router';

interface DropdownItemProps {
  children: React.ReactNode;
  className?: string;
  onItemClick?: () => void;
  to?: string;
  tag?: 'button' | 'a';
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className = '',
  onItemClick,
  to,
  tag = 'button'
}) => {
  if (to && tag === 'a') {
    return (
      <Link to={to} className={className} onClick={onItemClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onItemClick}>
      {children}
    </button>
  );
};

export default DropdownItem;