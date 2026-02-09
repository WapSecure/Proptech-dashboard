'use client';

import React from 'react';
import { SettingsIcon, TrendUpIcon, BarIcon } from '@/components/ui/Icons';

interface BudgetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BudgetingModal: React.FC<BudgetingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features: FeatureItem[] = [
    {
      icon: SettingsIcon,
      title: 'Set up annual budgets by account category',
      description:
        'Allocate funds across income and expense lines with full visibility.',
    },
    {
      icon: TrendUpIcon,
      title: 'Track actuals vs budget in real time',
      description:
        'See how your community is performing against plan, month by month.',
    },
    {
      icon: BarIcon,
      title: 'Adjust figures and forecast with ease',
      description:
        'Edit amounts, apply percentage changes, or roll forward last year\'s data—all in one place.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-white rounded-lg w-[500px] overflow-hidden">
        {/* Header */}
        <div className="p-8 text-center">
          <div className="text-4xl mb-4">💰</div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
            Budgeting
          </h2>
        </div>

        {/* Features List */}
        <div className="px-8 pb-8 space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">
                  <Icon className="w-6 h-6 text-neutral-700" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full bg-neutral-900 text-white py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
          >
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetingModal;