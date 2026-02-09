'use client';

import React, { useState } from 'react';

interface UserTooltipProps {
  children: React.ReactNode;
  name: string;
  email: string;
}

const UserTooltip: React.FC<UserTooltipProps> = ({ children, name, email }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      
      {isVisible && (
        <>
          <div
            className="
              absolute top-full left-1/2 transform -translate-x-1/2 mt-2
              min-w-[200px] z-50 bg-neutral-100 border border-neutral-200 
              rounded-lg shadow-lg p-3 animate-fade-in
            "
            role="tooltip"
          >
            <div className="text-sm font-medium text-neutral-900">{name}</div>
            <div className="text-xs text-neutral-600 mt-1">{email}</div>
          </div>
          
          <div
            className="
              absolute top-full left-1/2 transform -translate-x-1/2 mt-1
              w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px]
              border-l-transparent border-r-transparent border-b-neutral-100
              z-50 animate-fade-in
            "
          />
          
          <div
            className="
              absolute top-full left-1/2 transform -translate-x-1/2 mt-[3px]
              w-0 h-0 border-l-[7px] border-r-[7px] border-b-[7px]
              border-l-transparent border-r-transparent border-b-neutral-200
              z-40 animate-fade-in
            "
          />
        </>
      )}
    </div>
  );
};

export default UserTooltip;