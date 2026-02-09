'use client';

import { useState } from 'react';
import UserMenu from './UserMenu';
import CalendarModal from '@/components/ui/CalendarModal';
import BudgetingModal from '@/components/ui/BudgetingModal';
import Tooltip from '@/components/ui/Tooltip';
import {
  BudgetingIcon,
  CalendarIcon,
  ActivityLogIcon,
  PayoutIcon,
  MarketPlaceIcon,
  ExpertLogoIcon,
} from '@/components/ui/Icons';

const Header = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isBudgetingModalOpen, setIsBudgetingModalOpen] = useState(false);

  return (
    <>
      <header className="h-16 bg-primary-900 text-white flex items-center px-28">
        <div className="flex items-center gap-2 font-semibold text-lg">
<ExpertLogoIcon />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Tooltip content="Budgeting">
            <button
              onClick={() => setIsBudgetingModalOpen(true)}
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Budgeting"
            >
              <BudgetingIcon />
            </button>
          </Tooltip>

          <Tooltip content="Calendar">
            <button
              onClick={() => setIsCalendarModalOpen(true)}
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Calendar"
            >
              <CalendarIcon />
            </button>
          </Tooltip>

          <Tooltip content="Search Activity">
            <button
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Search Activity"
            >
              <ActivityLogIcon />
            </button>
          </Tooltip>

          <Tooltip content="Payout Center">
            <button
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Payout Center"
            >
              <PayoutIcon />
            </button>
          </Tooltip>

          <Tooltip content="Marketplace">
            <button
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Marketplace"
            >
              <MarketPlaceIcon />
            </button>
          </Tooltip>

          <UserMenu />
        </div>
      </header>

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
      />

      <BudgetingModal
        isOpen={isBudgetingModalOpen}
        onClose={() => setIsBudgetingModalOpen(false)}
      />
    </>
  );
};

export default Header;