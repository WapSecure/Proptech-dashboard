'use client';

import useDashboardMetrics from '../../hooks/useDashboardMetrics';
import Card from '@/components/ui/Card';
import { HomeIcon, ArrowIcon } from '@/components/ui/Icons';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const ListingsOverview = () => {
  const { metrics, isLoading } = useDashboardMetrics();

  const formatCompactNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  if (isLoading) {
    return (
      <Card className="h-full">
        <div className="flex items-center justify-center h-32">
          <LoadingSpinner size="sm" />
        </div>
      </Card>
    );
  }

  if (!metrics) {
    return (
      <Card className="h-full">
        <div className="flex items-center justify-center h-32">
          <p className="text-neutral-500 text-sm">No data available</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <div className="space-y-4">
        <div className="
          flex items-center justify-between p-4 
          bg-[#F9FAFB] border-b border-[#E4E4E4] -m-4 mb-4
        ">
          <div className="flex items-center gap-2">
            <HomeIcon className="w-5 h-5 text-[#4545FE]" />
            <h3 className="font-medium text-neutral-900">Listings Overview</h3>
          </div>
          <button className="flex items-center gap-1 text-sm text-[#4545FE] font-medium hover:text-[#4545FE]/80 hover:underline transition-colors">
            View all
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg">
            <p className="text-xs text-neutral-500 mb-1">Total</p>
            <p className="text-2xl font-semibold text-neutral-900">
              {formatCompactNumber(metrics.listings.total)}
            </p>
          </div>

          <div className="text-center p-3 rounded-lg">
            <p className="text-xs text-neutral-500 mb-1">Active</p>
            <p className="text-2xl font-semibold text-neutral-900">
              {metrics.listings.active}
            </p>
          </div>

          <div className="text-center p-3 rounded-lg">
            <p className="text-xs text-neutral-500 mb-1">Archive</p>
            <p className="text-2xl font-semibold text-neutral-900">
              {formatCompactNumber(metrics.listings.archived)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListingsOverview;