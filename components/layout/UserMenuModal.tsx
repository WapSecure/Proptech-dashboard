'use client';

import React from 'react';
import {
  TeamIcon,
  SnaggingIcon,
  FeedbackIcon,
  GeoIcon,
  KeyIcon,
  LogoutIcon,
} from '@/components/ui/Icons';

interface UserMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: TeamIcon, label: 'Teams' },
  { icon: SnaggingIcon, label: 'Snagging' },
  { icon: FeedbackIcon, label: 'Feedback' },
  { icon: GeoIcon, label: 'Geo-Bucket' },
  { icon: KeyIcon, label: 'Change password' },
  { icon: LogoutIcon, label: 'Logout', isDestructive: true },
];

const UserMenuModal: React.FC<UserMenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const user = {
    name: 'Dylan Frank',
    email: 'dylanfran96@gmail.com',
    initials: 'D',
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute top-16 right-6 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-neutral-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-semibold text-lg">
              {user.initials}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">{user.name}</h3>
              <p className="text-sm text-neutral-500">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`
                w-full px-6 py-4 flex items-center gap-3 text-left
                hover:bg-neutral-50 transition-colors
                ${item.isDestructive ? 'text-red-600' : 'text-neutral-700'}
              `}
              onClick={() => {
                if (item.isDestructive) {
                  console.log('Logout');
                }
                onClose();
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserMenuModal;