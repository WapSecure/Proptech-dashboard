import { DashboardMetrics } from '@/features/dashboard/types/dashboard.types';

export const dashboardMockData: DashboardMetrics = {
  sales: {
    totalInflow: {
      value: 120_000_000,
      percentage: 2.5,
      trend: 'up',
    },
    mrr: {
      value: 50_000_000,
      percentage: 2.5,
      trend: 'up',
    },
    commissionRevenue: {
      value: 200_000_000,
      percentage: 0.5,
      trend: 'up',
    },
    gmv: {
      value: 100_000_000,
      percentage: 0.5,
      trend: 'down',
    },
  },
  listings: {
    total: 1800,
    active: 80,
    archived: 1000,
  },
  users: {
    total: 20_700,
    riders: 8_500,
    subscribers: 7_500,
  },
};