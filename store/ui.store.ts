import { create } from 'zustand';

interface UIState {
  isCalendarModalOpen: boolean;
  isBudgetingModalOpen: boolean;
  isUserMenuOpen: boolean;
  
  openCalendarModal: () => void;
  closeCalendarModal: () => void;
  
  openBudgetingModal: () => void;
  closeBudgetingModal: () => void;
  
  toggleUserMenu: () => void;
  closeUserMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCalendarModalOpen: false,
  isBudgetingModalOpen: false,
  isUserMenuOpen: false,
  
  openCalendarModal: () => set({ isCalendarModalOpen: true }),
  closeCalendarModal: () => set({ isCalendarModalOpen: false }),
  
  openBudgetingModal: () => set({ isBudgetingModalOpen: true }),
  closeBudgetingModal: () => set({ isBudgetingModalOpen: false }),
  
  toggleUserMenu: () => set((state) => ({ isUserMenuOpen: !state.isUserMenuOpen })),
  closeUserMenu: () => set({ isUserMenuOpen: false }),
}));