import React from 'react';

interface CardProps {
  title?: string;
  actionLabel?: string;
  children: React.ReactNode;
  className?: string;
  showHeaderBackground?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  actionLabel,
  children,
  className = '',
  showHeaderBackground = false,
}) => {
  return (
    <div className={`rounded-lg border border-neutral-200 bg-white overflow-hidden ${className}`}>
      {(title || actionLabel) && (
        <div className={`
          flex items-center justify-between p-4 
          ${showHeaderBackground ? 'bg-neutral-50 border-b border-neutral-200' : ''}
        `}>
          {title && (
            <h3 className="font-medium text-neutral-900">{title}</h3>
          )}
          {actionLabel && (
            <button className="inline-flex items-center gap-1 text-sm text-primary-500 font-medium hover:text-primary-600 hover:underline transition-colors">
              {actionLabel}
            </button>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;