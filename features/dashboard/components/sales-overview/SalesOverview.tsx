'use client';

import SalesOverviewPresenter from './SalesOverview.presenter';
import { TimeRange, SalesMetrics } from '../../types/dashboard.types';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Card from '@/components/ui/Card';
import useDashboardMetrics from '../../hooks/useDashboardMetrics';

interface SalesOverviewProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

const SalesOverview: React.FC<SalesOverviewProps> = ({
  selectedRange,
  onRangeChange,
}) => {
  const { metrics, isLoading } = useDashboardMetrics();

  if (isLoading) {
    return (
      <Card className="h-full">
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      </Card>
    );
  }

  if (!metrics) {
    return (
      <Card className="h-full">
        <div className="flex items-center justify-center h-64">
          <p className="text-neutral-500">No data available</p>
        </div>
      </Card>
    );
  }

  return (
    <SalesOverviewPresenter
      metrics={metrics.sales}
      selectedRange={selectedRange}
      onRangeChange={onRangeChange}
    />
  );
};

export default SalesOverview;