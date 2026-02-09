'use client';

import { useState } from 'react';
import SalesOverview from '@/features/dashboard/components/sales-overview/SalesOverview';
import ListingsOverview from '@/features/dashboard/components/listings-overview/ListingsOverview';
import UsersOverview from '@/features/dashboard/components/users-overview/UsersOverview';
import PropertyCarousel from '@/components/ui/PropertyCarousel';
import { TimeRange } from '@/features/dashboard/types/dashboard.types';

export default function DashboardPage() {
  const [selectedRange, setSelectedRange] = useState<TimeRange>('month');

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-neutral-900">
          Welcome, Dylan
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="flex-1 lg:flex-[2] h-full">
          <SalesOverview 
            selectedRange={selectedRange}
            onRangeChange={setSelectedRange}
          />
        </div>

        <div className="flex-1 lg:flex-[1] h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 h-full">
            <div className="h-full">
              <ListingsOverview />
            </div>
            <div className="h-full">
              <UsersOverview />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <PropertyCarousel />
      </div>
    </div>
  );
}