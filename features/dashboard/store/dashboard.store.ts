import { create } from 'zustand';
import { DashboardMetrics } from '../types/dashboard.types';

interface DashboardState {
  metrics: DashboardMetrics | null;
  isLoading: boolean;
  error: string | null;
  setMetrics: (metrics: DashboardMetrics | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: null,
  isLoading: true,
  error: null,
  setMetrics: (metrics) => set({ metrics, isLoading: false, error: null }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error, isLoading: false }),
}));