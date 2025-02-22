interface CardProps {
  children: React.ReactNode;
  className?: string;
}

import React from 'react';

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
}