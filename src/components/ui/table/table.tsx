import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children, className = '', ...props }) => {
  return (
    <table className={`w-full text-left ${className}`} {...props}>
      {children}
    </table>
  );
};

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <thead className={`bg-gray-50 dark:bg-gray-800/50 ${className}`}>
      {children}
    </thead>
  );
};

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <tbody className={`divide-y divide-gray-200 dark:divide-gray-800 ${className}`}>
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <tr className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 ${className}`}>
      {children}
    </tr>
  );
};

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <td className={`px-6 py-4 ${className}`}>
      {children}
    </td>
  );
};