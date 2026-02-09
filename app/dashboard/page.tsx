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
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          Welcome, Ahmed
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-full">
          <SalesOverview 
            selectedRange={selectedRange}
            onRangeChange={setSelectedRange}
          />
        </div>

        <div className="lg:col-span-1 h-full">
          <div className="grid grid-rows-2 gap-6 h-full">
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