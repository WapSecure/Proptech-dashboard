'use client';

import { useState } from 'react';
import UserMenuModal from './UserMenuModal';
import UserTooltip from '@/components/ui/UserTooltip';

const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = { 
    initials: 'D', 
    name: 'Dylan Frank', 
    email: 'dylanfran96@gmail.com' 
  };

  return (
    <>
      <UserTooltip name={user.name} email={user.email}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-9 h-9 rounded-full bg-white text-primary-900 font-semibold hover:bg-neutral-100 transition-colors flex items-center justify-center"
          aria-label="User menu"
        >
          {user.initials}
        </button>
      </UserTooltip>

      <UserMenuModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default UserMenu;