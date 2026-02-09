'use client';

import { useEffect } from 'react';
import { useDashboardStore } from '../store/dashboard.store';
import { dashboardMockData } from '@/lib/mock/dashboard.data';

const useDashboardMetrics = () => {
  const metrics = useDashboardStore((state) => state.metrics);
  const setMetrics = useDashboardStore((state) => state.setMetrics);

  useEffect(() => {
    if (!metrics) {
      // Simulate API call
      const timer = setTimeout(() => {
        setMetrics(dashboardMockData);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [metrics, setMetrics]);

  return {
    metrics,
    isLoading: !metrics,
  };
};

export default useDashboardMetrics;