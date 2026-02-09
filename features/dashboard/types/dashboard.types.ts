export type TrendDirection = 'up' | 'down';

export type MetricDelta = {
  value: number;
  percentage: number;
  trend: TrendDirection;
};

export type SalesMetrics = {
  totalInflow: MetricDelta;
  mrr: MetricDelta;
  commissionRevenue: MetricDelta;
  gmv: MetricDelta;
};

export type DashboardMetrics = {
  sales: SalesMetrics;
  listings: {
    total: number;
    active: number;
    archived: number;
  };
  users: {
    total: number;
    riders: number;
    subscribers: number;
  };
};

export type TimeRange = 'week' | 'month' | 'year';

export interface SalesOverviewProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}